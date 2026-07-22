/* Small satellite cards and pills — one figure each, overhanging the window on the
   side away from the copy. Run last.                                            */
import { readFileSync, writeFileSync } from 'node:fs';
const FILM = 'animatic.html';
let h = readFileSync(FILM, 'utf8');

const CSS = `
/* small satellite cards — one detail each, overhanging away from the copy */
.mini{position:absolute;z-index:7;background:#fff;border-radius:13px;padding:13px 16px;min-width:152px;
  box-shadow:0 24px 52px rgba(18,45,40,.3),0 0 0 1px rgba(18,45,40,.05);opacity:0}
.mini .k{font-size:9.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--light)}
.mini .v{font-size:21px;font-weight:700;color:var(--ink);margin-top:4px;letter-spacing:-.025em;line-height:1}
.mini .s{font-size:11.5px;color:var(--gray);margin-top:4px}
.mini.accent .v{color:var(--teal)}
.scene.active .mini{animation:blockIn .8s var(--ease-out) both;animation-delay:var(--d,0s)}
.pill{position:absolute;z-index:7;font-size:12px;font-weight:600;padding:8px 15px;border-radius:20px;
  box-shadow:0 16px 34px rgba(0,0,0,.28);opacity:0;white-space:nowrap;background:var(--ink);color:#fff}
.pill.teal{background:var(--teal)}
.pill.amber{background:var(--amber);color:#3B2A06}
.scene.active .pill{animation:popIn .55s var(--ease-out) both;animation-delay:var(--d,0s)}`;

if (!h.includes('.mini{position:absolute')) {
  h = h.replace('.win-body{padding:20px 22px}', (m) => m + CSS);
}

const SUB = new Set([3, 4, 7, 8, 10]);          // subbie screens sit right
const EXTRAS = {
  2:  [{ k:'Sent to', v:'14', s:'subcontractors', d:2.0 }, { pill:'closes in 6 days', cls:'amber', d:2.7 }],
  3:  [{ k:'In this thread', v:'3', s:'questions, all answered', cls:'accent', d:3.3 }],
  4:  [{ k:'Time to respond', v:'10 sec', s:'no quote needed', cls:'accent', d:2.4 }],
  5:  [{ k:'Opened', v:'6:47am', s:'2 Mar 2026', cls:'accent', d:2.6 }],
  6:  [{ k:'Nudge cap', v:'2', s:'business hours only', d:2.2 }],
  7:  [{ k:'Total inc. GST', v:'$25,150', s:'4 line items', cls:'accent', d:3.0 },
       { pill:'saved tags · 2 taps', cls:'teal', d:3.7 }],
  8:  [{ k:'Unread', v:'3', s:'both sides notified', cls:'accent', d:2.4 }],
  9:  [{ k:'Responses', v:'3', s:'compared like for like', d:2.4 }],
  10: [{ k:'Outstanding', v:'0', s:'nothing left to chase', cls:'accent', d:2.3 }],
};

let added = 0;
for (const n of Object.keys(EXTRAS)) {
  const sec = h.indexOf(`data-s="${n}"`);
  const anchor = h.indexOf('    </div></div>', sec);
  const side = SUB.has(+n) ? 'right:-54px' : 'left:-54px';
  const html = EXTRAS[n].map((e) => e.pill
    ? `      <div class="pill ${e.cls}" style="${side};top:-22px;--d:${e.d}s">${e.pill}</div>`
    : `      <div class="mini ${e.cls || ''}" style="${side};bottom:-26px;--d:${e.d}s">` +
      `<div class="k">${e.k}</div><div class="v">${e.v}</div><div class="s">${e.s}</div></div>`
  ).join('\n');
  h = h.slice(0, anchor) + html + '\n' + h.slice(anchor);
  added += EXTRAS[n].length;
}

writeFileSync(FILM, h);
console.log(`extras: ${added} (${(h.match(/class="mini/g) || []).length} cards, ${(h.match(/class="pill/g) || []).length} pills)`);
