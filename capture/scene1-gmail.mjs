/* Scene 1 = a Gmail-style thread. Deliberately NOT Tenderfy colours: this is the
   world before the product, so it must read as somebody else's software.
   Run after apply-screens.mjs.                                                  */
import { readFileSync, writeFileSync } from 'node:fs';
const FILM = 'animatic.html';
let h = readFileSync(FILM, 'utf8');

const CSS = `/* Scene 1 — Gmail-style client. Google greys, never brand teal. */
.gm{color:#202124;font-size:14px}
.gm svg{width:17px;height:17px;fill:none;stroke:#5F6368;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;flex:none}
.gm .gm-search{display:flex;align-items:center;gap:11px;background:#F1F3F4;border-radius:8px;
  padding:9px 14px;margin-bottom:13px;font-size:13px;color:#80868B}
.gm .gm-tools{display:flex;align-items:center;gap:17px;padding-bottom:11px;border-bottom:1px solid #E8EAED}
.gm .gm-tools .sp{margin-left:auto;font-size:11.5px;color:#80868B}
.gm .gm-subj{display:flex;gap:10px;align-items:flex-start;font-size:21px;font-weight:400;
  color:#202124;line-height:1.28;margin:15px 0 0}
.gm .gm-lbl{font-size:10.5px;font-weight:500;background:#E8EAED;color:#5F6368;padding:3px 8px;
  border-radius:4px;margin-top:6px;white-space:nowrap}
.gm .mstat{margin-top:13px;border:1.5px dashed #C4C9CC;border-radius:8px;padding:11px;
  text-align:center;font-size:12.5px;font-weight:500;color:#5F6368}
.gm .gm-msg{display:flex;gap:13px;padding:16px 0;border-bottom:1px solid #F1F3F4}
.gm .gm-av{width:38px;height:38px;border-radius:50%;background:#5C6BC0;color:#fff;font-size:14px;
  font-weight:500;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.gm .gm-av.me{background:#00897B}
.gm .gm-b{flex:1;min-width:0}
.gm .gm-top{display:flex;align-items:center;gap:7px}
.gm .gm-name{font-size:13.5px;font-weight:700;color:#202124}
.gm .gm-addr{font-size:12.5px;color:#5F6368}
.gm .gm-right{margin-left:auto;display:flex;align-items:center;gap:13px}
.gm .gm-date{font-size:12px;color:#5F6368;white-space:nowrap}
.gm .gm-to{font-size:12px;color:#5F6368;margin-top:1px}
.gm .gm-text{font-size:13.5px;color:#202124;line-height:1.55;margin-top:9px}
.gm .gm-dots{display:inline-block;background:#F1F3F4;border-radius:4px;padding:1px 8px;
  letter-spacing:2px;color:#5F6368;font-size:13px;margin-top:9px;line-height:1.3}
.gm .gm-att{margin-top:12px;display:flex;gap:10px}
.gm .gm-card{width:158px;border:1px solid #DADCE0;border-radius:4px;overflow:hidden;background:#fff}
.gm .gm-card .th{height:52px;background:#F8F9FA;border-bottom:1px solid #DADCE0}
.gm .gm-card .fn{padding:7px 9px;font-size:11px;color:#202124;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.gm .gm-card .fs{padding:0 9px 8px;font-size:10.5px;color:#80868B}
.gm .mgap{padding:15px;text-align:center;font-size:13.5px;font-weight:600;color:#5F6368;
  border:1.5px dashed #C4C9CC;border-radius:9px;margin:15px 0}
.gm .gm-unread{display:inline-block;font-size:11.5px;font-weight:600;color:var(--st-amber-tx);
  background:var(--st-amber-bg);padding:3px 10px;border-radius:20px;margin-top:9px}
.gm .gm-actions{display:flex;gap:10px;margin-top:16px}
.gm .gm-btn{display:flex;align-items:center;gap:8px;border:1px solid #DADCE0;border-radius:18px;
  padding:7px 18px;font-size:13px;font-weight:500;color:#3C4043}
.gm .gm-btn svg{width:15px;height:15px}`;

const I = {
  back:'<path d="M11 4L5 10l6 6M5 10h11"/>',
  arch:'<path d="M2.5 5.5h15v3h-15zM4 8.5v7h12v-7M8 11h4"/>',
  del:'<path d="M4 5.5h12M8 5.5V4h4v1.5M5.5 5.5l1 10h7l1-10"/>',
  mail:'<path d="M2.5 5h15v10h-15zM2.5 5l7.5 6 7.5-6"/>',
  clock:'<circle cx="10" cy="10" r="7"/><path d="M10 6v4l3 2"/>',
  fold:'<path d="M2.5 6h5l1.5 2h8.5v8h-15z"/>',
  lab:'<path d="M3 4h8l6 6-6 6H3z"/>',
  dots:'<circle cx="10" cy="4.5" r="1.1" fill="#5F6368" stroke="none"/><circle cx="10" cy="10" r="1.1" fill="#5F6368" stroke="none"/><circle cx="10" cy="15.5" r="1.1" fill="#5F6368" stroke="none"/>',
  srch:'<circle cx="8.5" cy="8.5" r="5.5"/><path d="M12.5 12.5l4.5 4.5"/>',
  star:'<path d="M10 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4L5.5 16.7l.9-5L2.8 8.2l5-.7z"/>',
  rep:'<path d="M8 5L3 9.5 8 14M3 9.5h7a6 6 0 016 6"/>',
  fwd:'<path d="M12 5l5 4.5-5 4.5M17 9.5h-7a6 6 0 00-6 6"/>',
};
const s = (k) => `<svg viewBox="0 0 20 20">${I[k]}</svg>`;

const BODY = `<div class="win-body gm">
          <div class="gm-search">${s('srch')}<span>Search mail</span></div>
          <div class="gm-tools">${s('back')}${s('arch')}${s('del')}${s('mail')}${s('clock')}${s('fold')}${s('lab')}${s('dots')}<span class="sp">3 of 128</span></div>
          <div class="gm-subj">RE: RE: FW: Velocity Link Hwy Extension — Request for Quotation
            <span class="gm-lbl">Inbox</span></div>
          <div class="mstat mk" data-mark="No status" style="--d:3.1s">no status anywhere in this thread</div>

          <div class="gm-msg">
            <div class="gm-av">A</div>
            <div class="gm-b">
              <div class="gm-top"><span class="gm-name">Andrew Williams</span>
                <span class="gm-addr">&lt;a.williams@tenderfycivil.com.au&gt;</span>
                <span class="gm-right"><span class="gm-date">1 Mar, 9:31 am</span>${s('star')}${s('rep')}</span></div>
              <div class="gm-to">to me</div>
              <div class="gm-text">Please include your itemised schedule of rates with the quote.</div>
              <div class="gm-att">
                <div class="gm-card"><div class="th"></div><div class="fn">Scope_of_Works_FINAL_v4.pdf</div><div class="fs">PDF &middot; 2.4 MB</div></div>
                <div class="gm-card"><div class="th"></div><div class="fn">Drawings_Rev_C.zip</div><div class="fs">ZIP &middot; 48.2 MB</div></div>
              </div>
            </div>
          </div>

          <div class="gm-msg">
            <div class="gm-av me">W</div>
            <div class="gm-b">
              <div class="gm-top"><span class="gm-name">me</span>
                <span class="gm-right"><span class="gm-date">2 Mar, 6:52 am</span>${s('star')}${s('rep')}</span></div>
              <div class="gm-to">to Andrew</div>
              <div class="gm-text">Do your rates include the compliance costs?</div>
              <div class="gm-dots">&middot;&middot;&middot;</div>
            </div>
          </div>

          <div class="mgap mk" data-mark="No reply" style="--d:2.2s">no reply &middot; 19 days</div>

          <div class="gm-msg mk" data-mark="No idea" style="--d:4s">
            <div class="gm-av">A</div>
            <div class="gm-b">
              <div class="gm-top"><span class="gm-name">Andrew Williams</span>
                <span class="gm-right"><span class="gm-date">09:41 (2 hours ago)</span>${s('star')}${s('rep')}</span></div>
              <div class="gm-to">to me</div>
              <div class="gm-text">Any update on that price mate?</div>
              <span class="gm-unread">unread &middot; 2 missed calls</span>
            </div>
          </div>

          <div class="gm-actions"><span class="gm-btn">${s('rep')}Reply</span><span class="gm-btn">${s('fwd')}Forward</span></div>
        </div></div>`;

// swap the CSS block
const cssA = h.indexOf('.mail .msubj{');
const lastMailRule = h.lastIndexOf('.mail .');
const cssB = h.indexOf('}', h.indexOf('\n', lastMailRule)) + 1;
if (cssA < 0) throw new Error('scene-1 CSS block not found');
h = h.slice(0, cssA) + CSS + h.slice(cssB);

// swap the markup
const a = h.indexOf('<div class="win-body mail">');
const b = h.indexOf('</div></div>', h.indexOf('data-mark="No idea"'));
if (a < 0 || b < 0) throw new Error('scene-1 markup not found');
h = h.slice(0, a) + BODY + h.slice(b + '</div></div>'.length);

writeFileSync(FILM, h);
console.log(`scene 1 -> Gmail thread · marks ${(h.match(/data-mark=/g) || []).length} · icons ${(h.match(/<svg viewBox="0 0 20 20">/g) || []).length}`);
