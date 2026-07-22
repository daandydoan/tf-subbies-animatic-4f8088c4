/* Swaps the animatic's hand-built mock panels for the real prototype panels
   extracted by build-screens.mjs. Each screen becomes an <iframe srcdoc> so the
   prototype's own CSS renders in isolation and cannot collide with the film's.
     node capture/apply-screens.mjs                                          */
import { readFileSync, writeFileSync } from 'node:fs';

const FILM = 'animatic.html';

/** balanced <div> subtree starting at index `from` */
function subtree(html, from) {
  let depth = 0, i = from;
  const open = /<div\b/gi, close = /<\/div>/gi;
  while (i < html.length) {
    open.lastIndex = close.lastIndex = i;
    const o = open.exec(html), c = close.exec(html);
    if (!c) throw new Error('unbalanced');
    if (o && o.index < c.index) { depth++; i = o.index + 4; }
    else { depth--; i = c.index + 6; if (depth === 0) return [from, i]; }
  }
  throw new Error('unbalanced');
}

let h = readFileSync(FILM, 'utf8');
const report = [];

// scene 1 keeps its email page — it depicts life before the product, so there is
// no prototype screen for it. Scenes 2-10 become the real thing.
for (let n = 2; n <= 10; n++) {
  const sec = h.indexOf(`data-s="${n}"`);
  if (sec < 0) { report.push(`s${n}: section not found`); continue; }
  const scr = h.indexOf('<div class="screen">', sec);
  const [a, b] = subtree(h, scr);
  const old = h.slice(a, b);

  // keep any toast annotations — they sit outside the window, not on the UI
  const toasts = [...old.matchAll(/<div class="toast"[\s\S]*?<\/div>/g)].map(m => m[0]).join('\n      ');

  // Panels need room to lay out like a desktop app — squeezed into 760px the
  // dashboard table wrapped to 3146px tall and vanished. Give them a wide logical
  // viewport, then crop the height: a film wants the top of a screen, not all of it.
  const block =
`<div class="screen"><div class="stagebox" style="width:940px">
      <div class="win" style="--d:.4s;max-height:560px"><div class="win-bar"><span></span><span></span><span></span><u></u></div>
        <iframe class="pf" data-screen="s${n}" scrolling="no" title="Tenderfy prototype"></iframe></div>
      ${toasts}
    </div></div>`;

  h = h.slice(0, a) + block + h.slice(b);
  report.push(`s${n}: real panel mounted${toasts ? ' (+toast kept)' : ''}`);
}

// ---- runtime: iframe styling, the generated CSS/markup, and the mount call ----
h = h.replace('.win-body{padding:20px 22px}',
`.win-body{padding:20px 22px}
/* real prototype panels render inside an isolated frame */
.pf{display:block;width:100%;border:0;background:#fff}`);

const proto = readFileSync('capture/proto-screens.js', 'utf8');
const runtime = `
/* mount the real prototype panel for a scene into its iframe */
const FRAME_CSS = \`html,body{margin:0;background:#fff;font-family:'Outfit',system-ui,sans-serif}
  body{padding:18px 20px}
  .card,.tcard,.nc-card,.msg-card,.comp-card,.tacc{box-shadow:none!important;border:0!important;margin:0!important}\`;
const ROWSEL='tr,.row,.nc-item,.qa-opt,.set-row,.field,.bub,.tnote,.rs-row,.iechip,.ie-chips,.filerow,.gst-line,.doc,.coll-head,li';
function animateFrame(frame){
  let d; try{ d=frame.contentDocument; }catch(e){ return; }
  if(!d||!d.body) return;
  const rows=[...d.querySelectorAll(ROWSEL)].filter(el=>el.offsetHeight>0).slice(0,14);
  rows.forEach((el,i)=>{ el.style.setProperty('--i',i); el.classList.remove('go'); el.classList.add('rev'); });
  void d.body.offsetWidth;
  rows.forEach(el=>el.classList.add('go'));
  const over=d.body.scrollHeight-frame.clientHeight;
  d.body.style.transition='none'; d.body.style.transform='translateY(0)';
  void d.body.offsetWidth;
  if(over>30){ d.body.style.transition='transform 5.2s linear 1.3s';
    d.body.style.transform='translateY(-'+Math.min(over,240)+'px)'; }
}
function mountScreen(frame){
  const key = frame.dataset.screen;
  if(!SCREENS[key] || frame.dataset.mounted) return;
  frame.dataset.mounted = '1';
  frame.addEventListener('load', () => {
    const sizeIt = () => {
      let hgt = 520;
      try { hgt = Math.min(frame.contentDocument.body.scrollHeight, 520); } catch(e) {}
      frame.style.height = hgt + 'px';   // crop, don't shrink to illegibility
      fitBoxes();
    };
    sizeIt();
    setTimeout(() => { sizeIt(); animateFrame(frame); }, 250);
  });
  frame.srcdoc = '<style>' + PROTO_CSS + FRAME_CSS + '</' + 'style>' + SCREENS[key];
}
`;
// function-form replacements: the injected text contains $' , which String.replace
// would otherwise expand to "everything after the match" and clone the whole file
h = h.replace('<script>\nconst SCENES=[', () => '<script>\n' + proto + runtime + '\nconst SCENES=[');
h = h.replace(/  fitBoxes\(\);\n  if\(n===7\) countTotal\(\);/,
              () => "  el.querySelectorAll('.pf').forEach(f => { f.dataset.mounted ? animateFrame(f) : mountScreen(f); });\n  fitBoxes();");
// countTotal drove a mock total that the real panel now renders itself
h = h.replace(/function countTotal\(\)\{[\s\S]*?\n\}\n/, () => '');

writeFileSync(FILM, h);
console.log(report.join('\n'));
console.log(`\niframes: ${(h.match(/class="pf"/g) || []).length}`);
console.log(`PROTO_CSS inlined: ${h.includes('const PROTO_CSS')}`);
console.log(`mount wired: ${h.includes('forEach(mountScreen)')}`);
console.log(`countTotal removed: ${!h.includes('countTotal')}`);
