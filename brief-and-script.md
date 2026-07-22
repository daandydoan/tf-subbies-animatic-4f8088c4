# Tenderfy for Subcontractors — Explainer Film
### Creative brief, script and capture plan

Draft v0.4 · 21 Jul 2026 · owner: Daniel
**v0.4 — feature section rebuilt, contractor-led.** Client feedback: the opening pain (chasing
prices by phone and email) lands, but "the section on the product features isn't really grabbing my
attention." Three consequences, all acted on below:
1. **A human opens the film.** A frustrated contractor in a site office, phone to ear, before any UI.
   This is the first live-action frame in either film.
2. **The features section is now contractor-led** and built on an explicit three-step spine —
   *review the pack → request the quote → let it chase itself*. v0.3 ran ~70% subcontractor POV; the
   buyer requesting the quotes is the contractor, and the feature story is his.
3. **Compliance and documents are back in the master film.** v0.3 pushed File Manager / expiry
   tracking and profile capabilities out to chapters as "admin, not communication." The feedback
   asks for them by name — insurances, certificates and capability statements visible from the
   subbie's profile *without asking*, and pulled into the tender in one request — so they return as
   scenes 7–8. That reverses a v0.3 decision deliberately.

**Thesis, adjusted.** v0.3: *neither side can see the other.* v0.4 keeps that as the opening pain
but resolves it toward the contractor's outcome: **you stop chasing — the request, the compliance
and the numbers all come back to you in one place.** Mutual blindness is still the enemy; "all under
one roof" is now the answer.

Companion piece to the landing-page product film (`C:\Users\tieun\tenderfy-landing\showcase.html`).

**Sources (read-only — never edited from here):**
`G:\Claude\Subbies\tenderfy-prototype\` (the UI being filmed) ·
`C:\Users\tieun\tenderfy-brandguide-v2\tokens.css` (brand values) ·
`C:\Users\tieun\tenderfy-landing\assets\` (wordmarks, existing app stills).
Capture scripts → `capture/`, raw takes → `footage/`, cuts → `exports/`.

**`animatic.html`** in this folder is the playable timing reference — **rebuilt to the v0.4 running
order (12 scenes, 1:55)**. The v0.3 cut is kept alongside as `animatic.v03.backup.html`.

**The eight UI screens show the WHOLE real screen**, not an isolated panel — full app shell, sidebar,
header, page furniture and all, exactly as a 1440×900 screenshot would look. They are extracted live
by `capture/build-screens.mjs` (contractor pages slice `.capp`; subbie pages slice `#screen` and get
their `display:none` stripped, since their shell is injected by a shared script) and re-inlined with
`capture/refresh-screens.mjs`. Nothing is hand-drawn, so a UI change is one command from being
reflected. Each frame renders the page at a true 1440×900 and is scaled to the window
(`--pfz = wrapWidth / 1440`), so type stays proportionally correct at any viewport.

⚠️ **Consequences of showing the whole screen — read before capture:**
- **Anything below 900px is off-frame.** On scene 7 the Capability/Insurance columns sit at the
  bottom edge of the fold; the recording needs to scroll to feature them.
- **Legibility.** §3's original advice (crop to the panel, hide the sidebar) was written for exactly
  this reason — a full screen scaled into a half-frame window renders body text small. The client has
  asked for the whole screen, so that advice is **overridden for v0.4**; compensate in the recording
  with a slow push-in on the region that matters rather than by cropping.
- **Scene 5 (SEND TO) still needs motion** — the subcontractor chips populate on interaction, so a
  still of that screen shows an empty search box. Same for the Ray package surfacing on scene 4.
(The v0.3 recreated screens are still in the file as unused `SCREENS` definitions, ~49KB, and remain
in the backup — restore from either if recreations are ever wanted again.)

Built to the
same chrome and scene mechanics as the landing film. It is **fully self-contained**: no external
fonts, scripts, images or network requests of any kind, so it works offline and can be handed on as a
single file. Outfit is used if installed locally, otherwise it falls back to the system sans.
Controls: space to play/pause, ← → for scenes, click any progress segment to seek. Two review
overlays are hidden by default — **S** toggles the 1080×1080 social safe area, **N** toggles the
shot/capture notes for the current scene.

---

## 1. Guideline (the brief)

**Audience.** ⚠️ **Changed in v0.4.** Primary is now the **head contractor** — the person who sends
the requests, carries the deadline and pays for the seat. Secondary: the subcontractor (a Wade
Bloomfield type — runs his own crew, quotes at 9pm, zero patience for another login), who has to
find the platform effortless or the contractor's list never moves onto it. The film still shows both
desks; it just resolves on the contractor's side now.

**The one job of this video.** Land one claim: *stop chasing subbies — request once, and the prices,
the paperwork and the totals come back to you in one place.* Every feature shown is evidence for
that claim. If a feature doesn't serve it, it belongs in a chapter video.

**The pain, stated properly.** It is not "email is messy." It is **chasing** — the week lost to
ringing round for prices, asking for insurance certificates, and not knowing who is even pricing the
job. Underneath it is mutual blindness (neither side can see the other), which is why the film opens
on both desks. But the resolution is the contractor's: he stops making the calls.

**Length.** ~115s master (v0.4b script times at **1:55 across 12 scenes**). Then cut down from the
same timeline:
- 30s social cut (scenes 1, 2, 3, 5, 11 — the human, the pain, the promise, the one-send, the total)
- 6× 15–25s feature chapters for in-app help + the support-video backlog item
- 6s silent loop for the landing page hero

**Tone.** Different register from the landing film. `showcase.html` is cinematic and aspirational
("One method. Eight steps."). Subbies is **plain, fast, and practical** — short sentences, trade
vocabulary, no AI evangelism. Ray barely appears; this is not the Ray story.

**Visual system — inherited from the landing film.**
The look is not invented for this piece; it's lifted from `tenderfy-landing/showcase.html` so the two
films read as one family:

- The same **chrome**: fixed full-viewport scenes, a top bar carrying the wordmark, the piece name and
  the live scene label, and a bottom bar of per-scene progress segments above a HUD transport
  (scene count, prev / play-pause / next, running time). Scene segments are clickable.
- Blurred **orbs** (teal / amber / blue) drifting behind every scene, plus masked **dot grids** and
  dashed **rotating rings** as secondary texture.
- The outlined **paperclip mark** (`clipSym` SVG, 32×65) as a large low-opacity watermark, bottom-left
  of dark scenes.
- Screens sit in **floating browser windows** — `.win` chrome with a teal first dot, entering on a 3D
  `winIn` (translateY + rotateX + scale). A second window sits behind at 55% for depth.
- **Eyebrow** labels with a leading rule, colour-shifted per scene background.
- Staged `.fx` / `.fxs` reveals with a `--d` delay variable — nothing appears all at once.
- Scene backgrounds alternate `dark` / `light` / `offwhite`; the 8-stop brand ramp is reserved for the
  end card. Easing is `cubic-bezier(.25,1,.3,1)` throughout, `.76,0,.24,1` for the curtain.

**Layout rule — this is fixed.**
Every scene is a **split: copy on one side, the live screen on the other.** Never text over UI, never
UI alone. Full-bleed is allowed in exactly two places: the **live-action opener (scene 1)** and the
**end card (scene 12)**. The opener carries its headline over the footage, lower third, no UI.

**The side is not decorative — it tells you whose screen you're looking at:**

| Side | Whose | Scenes (v0.4) |
|---|---|---|
| screen RIGHT, copy left | **Subcontractor** | 2, 8, 9 |
| screen LEFT, copy right | **Head contractor** | 3, 4, 5, 6, 7, 10 |
| full bleed, no split | **Live action / end card** | 1, 11 |

The film physically moves side to side as the conversation does — which is the thesis, expressed as
layout rather than stated. A small POV label sits in the top corner on the same side as the screen,
teal for the subbie, blue-grey for the contractor. Backgrounds reinforce it: subbie scenes light,
contractor scenes dark.

The copy column is a fixed stack: eyebrow → headline (2–3 short lines, one phrase in teal) →
supporting sentence → optional 2–3 item micro-list. Nothing else goes in that column.

Because there is no subtitle bar, **the supporting sentence carries anything the VO would otherwise
have added**. Keep it to roughly 15–33 words — long enough to stand alone muted, short enough to read
in the scene's runtime. Two scenes needed topping up when the subtitles came out: scene 2 gained
"He sent it to fourteen subcontractors and four came back", and scene 4 gained "Tenderfy puts the
conversation on the job itself". Every other scene's copy already said what its VO said.

**Rules of the format.**
- 1920×1080, 30fps. Keep all critical content inside a centre 1080×1080 safe area so the LinkedIn
  and IG square crops survive without a re-edit.
- **No subtitle bar.** The copy column carries the message — same as the landing film, which has no
  subtitle track either. This still has to work muted (it gets watched on a phone, on site), so the
  rule is that the headline plus the supporting line must convey the scene on their own, without the
  voiceover. If a scene only makes sense once you hear the VO, the copy is wrong, not the format.
  The VO script below remains the record for the final voice track.
- Brand: Outfit; teal `#1D9E75`; amber `#FFBC4A` for CTA accents only; dark `#2E3C3B`.
  ⚠️ See the brand fork warning in §4 before you record a single frame.
- Every claim on screen must exist in the prototype. No aspirational UI.
- Max 2 ideas per scene. If a scene needs three lines of VO to explain, it's a chapter, not a beat.

**What the master film does NOT cover** (push to chapters): template editor / quote branding,
external quotes to your own clients, invoicing details, self-signup flow, and the no-account document
access that used to open the film. All real, none serve the thesis inside the runtime.

⚠️ **Returned to the master film in v0.4** (they were on this list in v0.3): **document currency —
insurances, certificates and capability statements** — and **profile capabilities**. The client asked
for both by name. They are no longer framed as File Manager admin but as *compliance you don't have
to ask for*, which does serve the thesis: it removes another reason to pick up the phone.

---

## 2. Script — master film (~1:55)

Structure (v0.4): **a human opens on the pain, one beat of mutual blindness, then a three-step
contractor spine — review → request → automate — followed by the four payoffs the client named
(compliance without asking, documents in one request, the subbie's side made effortless, every quote
totalled).** The film still crosses desks, but it resolves on the contractor.

**The three-step spine is signposted on screen.** Scenes 4, 5 and 6 carry a `STEP 1 / 2 / 3 of 3`
marker in the eyebrow. The client asked for "a simple three-step review process" — if a viewer
remembers one structural thing, it should be that.

| # | t | POV | VO | Headline | Screen |
|---|---|---|---|---|---|
| 1 | 0:00–0:08 | **Live action** | "Half your week goes on the phone. Chasing prices, chasing certificates, chasing people who never saw the email." | Still **chasing prices.** | **No UI.** Site office: contractor on the phone, hold music face, sticky notes, a printed pack gone cold. Grade slightly desaturated. Headline lower-third over footage. |
| 2 | 0:08–0:16 | Sub | "On the other end, it's buried in a thread. He can't tell if the job's still live either." | No reply. No status. **No idea.** | Greyed-out clutter: dead thread, unread "any update on that price mate?", missed calls. Still no teal. Last frame before the product appears. |
| 3 | 0:16–0:24 | Con · **the turn** | "Here's what changes. You pick your subbies and send one request — same scope, same questions, same deadline, to all of them at once." | Request quotes from your subbies **in one go.** | **No UI.** Motion graphics: an amber *One request* chip fans out along five drawn lines to five subbie avatars (concrete, electrical, plumbing, steel, glazing). First teal in the film — this is where the problem act turns into the product. |
| 4 | 0:24–0:35 | Con · **Step 1** | "It starts where the work does. Open the tender pack, and Ray pulls out the packages that need pricing — you're reviewing scope, not hunting through a PDF." | **Step 1.** Review the pack. | `contractor/build-tender.html` — pack opens, Ray highlights trade packages down the left. Eyebrow reads STEP 1 OF 3. |
| 5 | 0:35–0:47 | Con · **Step 2** | "Pick your subbies and send one request. Same scope, same questions, same deadline — to all of them at once." | **Step 2.** Request the quote. | `contractor/new-request.html` → `subbies.html`. Multi-select subbies, one Send. Toast: *Request sent · 8 subcontractors*. This is the beat the client said was missing. |
| 6 | 0:47–0:58 | Con · **Step 3** | "Then it chases them for you. Follow-ups on your schedule, in your words, capped — so you're not the one ringing at seven at night." | **Step 3.** It chases, **not you.** | Nudge delay / max / window fields, then the nudge message. Toast *Nudge sent · 1 of 2*. Cap is the point. |
| 7 | 0:58–1:09 | Con | "And you never ask for an insurance certificate again. Their profile shows what's current and what's about to lapse — before you send anything." | Compliance **without asking.** | `contractor/subbies.html` — profile panel: public liability, workers comp, licence, capability statement. Currency chips: *Current* ×3, one amber *Expires in 21 days*. ⚠️ Expiry state is a capture-time override (see §4). |
| 8 | 1:09–1:18 | Con | "When you need those documents on the job, one request pulls them straight through into the tender." | One request. **Documents attached.** | `contractor/build-tender.html` — request documents, the four files land into the tender attachments list in sequence. |
| 9 | 1:18–1:30 | Sub | "His side is just as easy. The drawings and the scope open in the browser — nothing to download — and inclusions, exclusions and assumptions answer the three things you'd otherwise email him about." | Priced online. **Scope stated up front.** | `subbies/view-request.html` → `document-detail.html`. Doc opens inline, then line items stagger and I/E/A tags pop column by column. |
| 10 | 1:30–1:39 | Sub | "Anything unclear, he asks you on the job itself — one thread, one record, answered in minutes." | Ask direct. **Answered fast.** | Messages tab: question, reply, acknowledgement land in sequence. Frame as *the compliant record*, not chat. |
| 11 | 1:39–1:49 | Con | "Then every price lands in one place and totals itself. One subcontractor figure for the job — no spreadsheet, no transcription, no pricing mistakes." | Every quote. **One total.** | `contractor/compare.html` — quotes reveal row by row, then the **total counts up** and holds. The total is the hero frame of the film, not the table. |
| 12 | 1:49–1:55 | End card | "Tenderfy Subbies. Request once — everything comes back to you." | Everything **comes back to you.** | Brand ramp end card, wordmark, one line. Wipes over at 6.4s. |

**Why this order.** Scene 1 puts a face and a phone on the pain before a single pixel of product —
the client's note. Scene 2 keeps the mutual-blindness idea alive in one beat instead of two, so the
problem costs 16s rather than 19s and the features start sooner. Scene 3 states the promise in plain words before any UI appears — the client asked to hear
what Tenderfy does for them before being walked through it. Scenes 4–6 are the spine the
feedback asked for, signposted 1/2/3, and they run consecutively in one POV so the workflow reads as
one movement rather than a tour. Scenes 7–8 remove the two remaining reasons to phone a subbie
(paperwork chasing and document collection). Scene 9 shows the subbie's side is effortless — which is
what makes the contractor's list actually move onto Tenderfy — and 10 keeps the direct-chat beat the
client called out. Scene 11 is the commercial payoff and deliberately ends on a **number**, because
"reduces mistakes in their pricing" is the line most likely to sell a seat.

**What changed from v0.3, scene for scene.** Old 1+2 (matched pain pair) compress into new 1+2, with
live action replacing the subbie's clutter as the opener. Old 3 (messages) survives as new 9. Old 4
(quick respond) and old 8 (notification feed) are **cut from the master** — good beats, but they are
subbie-convenience, and the runtime went to the contractor spine; both move to chapters. Old 5
(status stepper) is absorbed into new 4's send toast. Old 6 (nudges) becomes new 5 / Step 3. Old 7
(I/E/A) merges into new 8. Old 9 (comparison) becomes new 10 and is re-pointed at the **total**. Old
10 (clean dashboard) is replaced by the end card.

**Open decisions before v0.5**
- **Live action (scene 1) is now a hard dependency.** Options, cheapest first: (a) licensed stock —
  "frustrated tradesman site office phone"; (b) shoot it on a phone in a real office, 20 minutes,
  which will look more honest than stock and is on-brand for a trades audience; (c) drop back to a
  UI-only opener. ⚠️ Note this reverses the landing film's "no stock-footage people" rule — that rule
  was written for `showcase.html`, and the client has explicitly asked for a human here.
- ✅ **Compliance currency state (scene 7) — RESOLVED, no override needed.** An earlier note here
  claimed the prototype had no "current / about to lapse" indicator. That was wrong: it was based on
  a text search for *expiry/expires*, but the real UI expresses it as **icons**.
  `contractor/subbies.html` carries **Capability** and **Insurance** columns with three live states —
  `.cap.ok` (green tick), `.cap.warn` (amber warning), `.cap.bad` (red cross) — seeded 6 / 2 / 4
  across the directory. That is exactly the beat, in real product UI. **Film it as-is.** The only
  thing the real screen lacks is an explicit date ("expires in 21 days"); the amber warning carries
  the meaning without it, so don't fake the date.
- **Scenes 3–8 are six consecutive contractor scenes (59s).** That is the deliberate consequence of
  the contractor-led pivot, but it's the longest single-POV run either version has had. Watch it in
  the animatic — if it drags, scene 9 (subbie) moves up between 6 and 7.
- The pricing line ("free for subcontractors") is still **out** — load-bearing and unconfirmed.
- **Old scenes 4 and 8 are now unbuilt chapters** (quick-respond; notification feed). They were cut
  for runtime, not quality — keep the animatic scenes on file for the chapter cuts.
- VO: real voice or nothing. Synthetic VO on a trades audience reads as spam.

---

## 3. Footage required

Everything below exists in `G:\Claude\Subbies\tenderfy-prototype`. Nothing needs to be built first.
Record at **1440×900** viewport (matches the existing `assets/app/*.png` set).

**Framing consequence of the split layout:** captures are *not* shown full-bleed. Each one is
composited into a floating window occupying roughly **half the frame (≈890×560 of a 1600×900
canvas)**. So:

- Capture the **region that matters**, not the whole app chrome — a 1440×900 grab scaled into a
  half-width window renders body text around 9px. Crop tight to the panel in question, or capture at
  1440×900 and scale the *crop*, not the page.
- The prototype's left sidebar is dead weight in every shot. Hide it at capture time
  (`.sidebar{display:none}` via `addStyleTag`) and gain ~200px of usable width.
- Anything that must be legible — line-item amounts, expiry chips, I/E/A tags — needs to survive at
  55% scale. Check each shot at final size before moving on.

Shot IDs are prefixed **P** (problem / motion graphics) and **C** (captured UI).

**v0.4 shot list.** Scene numbers below are the new ones. Shots marked ✂️ are v0.3 captures no longer
needed for the master (retained for chapter cuts); ⭐ are new for v0.4.

| Shot | Scene | Screen | Action to capture | Approx |
|---|---|---|---|---|
| ⭐ L1 | 1 | *(live action)* | Contractor in site office, phone to ear, hold-music face; pack on desk. Desaturate in grade | 8s |
| P1 | 2 | *(none — motion graphics)* | Dead thread, unread chase message, missed calls — desaturated | 8s |
| ⭐ C11 | 3 | `contractor/build-tender.html` | Tender pack open; Ray surfaces trade packages down the left | 11s |
| ⭐ C12 | 4 | `contractor/new-request.html` → `subbies.html` | Multi-select subcontractors, single **Send**, toast *Request sent · 8 subcontractors* | 12s |
| C5 | 5 | `contractor/settings.html` | NUDGE SETTINGS — delay, max, window — then NUDGE MESSAGE + *Nudge sent · 1 of 2* | 11s |
| ⭐ C13 | 6 | `contractor/subbies.html` | Subbie profile panel: PL, workers comp, licence, capability statement + currency chips (3 × *Current*, 1 × amber *Expires in 21 days*) ⚠️ override | 11s |
| ⭐ C14 | 7 | `contractor/build-tender.html` | Request documents → the four files land in the tender attachments list | 9s |
| C6 + ⭐ C15 | 8 | `subbies/view-request.html`, `document-detail.html`, `prepare-quote.html` | Document opens **inline in browser**, then line items total and I/E/A tags pop | 12s |
| C1 | 9 | `subbies/view-request.html` → Messages tab | Question, reply, acknowledgement land in sequence | 9s |
| C8 | 10 | `contractor/compare.html` | Quotes reveal row by row, then **the total counts up and holds** | 10s |
| C10 | 11 | *(none — motion graphics)* | Brand end card | 6s |
| ✂️ C2 | — | `subbies/view-request.html` | Quick-respond rail → **chapter only** | — |
| ✂️ C3 | — | `contractor/view-request.html` | REQUEST STATUS panel → absorbed into C12's toast | — |
| ✂️ C4 | — | `contractor/settings.html` | NOTIFY ME WHEN toggles → **chapter only** | — |
| ✂️ C7 | — | `subbies/notifications.html` | Notification feed → **chapter only** | — |
| ✂️ C9 | — | `subbies/dashboard.html` | Settled dashboard → replaced by end card | — |

**New capture notes for v0.4**
- **C13 (compliance currency)** is the one shot that cannot be filmed as-is — the prototype carries
  the documents but no currency/expiry chip. Inject at capture time alongside the existing sidebar
  hide, e.g. append chips to each document row and colour the fourth amber. Keep the wording to
  *Current* / *Expires in 21 days*; do not invent a compliance score.
- **C12** is the beat the client said was missing — give the multi-select and the single Send real
  screen time; don't cut away before the toast resolves.
- **C10 / scene 11** — the total is the payoff frame of the whole film. Capture it large enough to
  read at 55% scale, and hold it after the count-up finishes.

**Blockers — updated for v0.4:**

- ✅ **P2 is no longer a blocker — it's out of the master.** v0.3's biggest capture problem was the
  contractor recipient list (`contractor/tender-detail.html` `#rqSec`, rendered by `renderRQ()` from
  elements outside the panel, so it captures with no rows). v0.4 compresses the two problem scenes
  into one and tells the contractor's half of the pain through **live action** instead, so this shot
  is dropped. If the "fourteen sent, ten silent" beat is ever wanted for a chapter, the original note
  stands: reuse the subbie dashboard's `b-awaiting` / "Awaiting response" badge, seeded or overridden.
- ⚠️ **New blocker: C13, compliance currency.** The one shot in v0.4 that the prototype cannot
  produce as-is (no expiry/current state on documents). Capture-time override decided — see §4.

**Names must match the prototype, not the script's memory.** The Velocity Link thread is
**Tenderfy Civil** (contractor, avatar `TC` on `#38988A`), contact **Andrew Williams**, with the
tender client shown as **Dept of Transport & Main Roads**. "Bajgera Group" exists in the prototype
only on `contractor/build-tender.html` and is *not* part of this thread — it was wrongly attached to
Andrew Williams in earlier drafts and has been corrected throughout.
- **C13 / C14** — verify on `contractor/subbies.html` and `build-tender.html` that the four document
  types the client named (public liability, workers compensation, licence, **capability statement**)
  all actually appear on a subbie profile. Grep confirms the strings exist across `build-tender.html`,
  `subbies.html`, `tender-detail.html` and `view-request.html`; confirm they render together on one
  panel before scripting, not after.
- **C12** — confirm `new-request.html` supports selecting **multiple** subcontractors in one send. The
  "request quotes with ease" claim rests on it. If it's one-at-a-time, that's a prototype ticket, not
  a capture override — a faked multi-select would be aspirational UI.

**Dropped from the shot list in the pivot:** A2 (no-account doc view), A9–A11 (submit / track /
update-quote), A12–A13 (awarded screens), A15 (mobile). Mobile is worth reinstating as a chapter.
**A7/A8 (File Manager) are no longer dropped** — the document/compliance story returns in v0.4 as
scenes 7–8, filmed from the contractor side rather than as File Manager admin.

**Seed data must be consistent across every shot — and now across both sides.** The prototype uses
one worked example: *Velocity Link Highway Extension* / tender `TMRICT22076` / Traffic Management /
Andrew Williams of Tenderfy Civil / Wade Bloomfield Electrical. Because the film cuts between the two
parties five times, the same names, dates and dollar figure must line up **contractor-side and
subbie-side**: if the subbie sends a quick response at 6:52am in scene 5, the contractor's status
panel in scene 6 has to show 6:52am. Mismatched timestamps across a POV cut is the single most common
way a product film reads as fake.

---

## 4. How to capture — options

### ✅ Brand fork — resolved 21 Jul 2026
The portal was on the old Figma teal `#38988A` while the brand is `#1D9E75`, which would have made
every capture off-brand. **Migrated and pushed** (commit `1cbb485`): the `--teal` token, all
teal-derived `rgba()` tints, `logo-wordmark-teal.svg`, the portal-chooser tint and the superadmin
chart accent. No capture-time CSS override is needed — record the prototype as-is.

Two things this did *not* change, by design:
- **Per-contractor avatar colours.** TC `#38988A` belongs to a categorical identity set alongside HP
  `#5C6BC0`, AC `#EF6C00`, BQ `#6D4C41`, MS `#00838F`. Don't blanket-replace `#38988A` in this repo.
- **The Figma brand file `Primary` variable**, which is now the last source still on the old teal.
  Worth fixing before anyone designs new frames from it.

### Option A — Scripted browser capture (recommended)
Playwright driving the static prototype. Deterministic, re-runnable when the UI changes, and it
gives you a synthetic cursor instead of your real jittery mouse.

```js
// capture.mjs — npx playwright install chromium && node capture.mjs
import { chromium } from 'playwright';
const b = await chromium.launch();
const ctx = await b.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  recordVideo: { dir: 'out/', size: { width: 1440, height: 900 } },
});
const page = await ctx.newPage();
await page.goto('http://localhost:8000/subbies/view-request.html');
await page.addStyleTag({ content: `
  :root{--teal:#1D9E75}
  ::-webkit-scrollbar{display:none}
  *{caret-color:transparent}
` });
await page.waitForTimeout(1200);
await page.getByText('Schedule your response').hover();
await page.waitForTimeout(800);
await page.getByText('Schedule your response').click();
await page.waitForTimeout(2000);
await ctx.close(); await b.close();
```
Serve the prototype with the existing `subbie-portal` launch config (npx serve, port 8000).
Playwright's WebM is fine for editing; for grading-grade output capture PNG frames instead and
`ffmpeg -framerate 30 -i frame%04d.png` them.

*Pros:* exact, repeatable, version-controllable, no human hand. *Cons:* half a day of scripting;
smooth scroll needs manual `window.scrollTo` easing rather than `mouse.wheel`.

### Option B — Manual screen recording
OBS or ShareX at a locked 1440×900 window, cursor hidden, hardware-quiet room.
*Pros:* an hour, not a day. *Cons:* re-shoot everything whenever the UI changes, and every take has
a slightly different scroll rhythm. Fine for the internal-help chapters, weak for the master film.

### Option C — Composited stills (fastest to a watchable cut)
You already have 31 staging screens at `tenderfy-landing/assets/app/*.png`. Take the same approach
for Subbies: PNG per screen, then animate in the edit — Ken Burns, masked reveals, animated
highlight rings, a fake cursor layer. This is exactly what `showcase.html` does.
*Pros:* fastest, total control, no capture rig. *Cons:* interaction reads as a slideshow. Don't use
it for scenes 6 and 7, where the *doing* is the point.

### Option D — Coded scene film (the showcase.html approach)
Build the whole thing as a self-contained HTML film like the landing showcase — real screens in
floating browser windows, CSS-animated overlays, curtain/word-reveal transitions, auto-play loop.
*Pros:* embeddable, editable forever, no video pipeline, matches the landing film's language.
*Cons:* no VO track without adding audio, harder to post to LinkedIn/YouTube without a screen grab
of your own film.

### My recommendation — updated for v0.4
**Live action for scene 1, C for scenes 2, 3 and 12, A for scenes 4–11**, then edit in Premiere/Resolve.
The three-step spine (4–6) and the compliance/document beats (7–8) are all *doing*, so they must be
real captures, not stills. Then port the finished cut to Option D as a `showcase-subbies.html` for
the product page, reusing the master timing.

**Capture-time overrides — the sanctioned list.** These are DOM/style injections applied by the
capture script, never edits to the prototype repo:

| Override | Shot | Why |
|---|---|---|
| `.sidebar{display:none}` | all | Reclaims ~200px of usable width |
| Document currency chips (*Current* ×3, amber *Expires in 21 days*) | C13 | Prototype has the documents but no expiry state |

The line to hold: an override may **restage data the product genuinely has** (a document's expiry
date is real data the platform tracks). It may **not invent a capability** — which is why a faked
multi-select on C12 is explicitly out of bounds and would be a prototype ticket instead.

---

## 5. Real UI vs recreated UI

| | Real prototype UI | Recreated / mocked UI |
|---|---|---|
| Trust | High — it's the product | Risk: "that's not what it looks like" |
| Drift | Re-shoot every UI change | Ages independently, quietly becomes a lie |
| Ugly states | Empty rows, placeholder names, lorem | Fully controllable |
| Speed | Slower per shot | Faster once built |
| Effort of change | Cheap with Option A, dear with B | Dear either way |

**Position: real UI everywhere the user is being shown *how it works*.** This product's whole pitch
is "it's simpler than what you do now" — a recreated interface that's cleaner than the real one
sabotages that the first time a subbie logs in. Recreate only what has no UI: the opening clutter,
the "One link" transition, the end card.

Three things to fix in the prototype before capture, all cheap, all also on the backlog:
1. `--teal` → `#1D9E75` (§4).
2. Make sure every row in the captured screens has plausible data — no `Lorem`, no `Subbie 3`,
   no empty avatars. Seed once, capture everything in one session.
3. Check `view-request.html` documents list and `file-manager.html` expiry dates aren't in the past
   relative to 21 Jul 2026 — an expired Public Liability cert on screen is an own goal.

---

## 6. Next steps

**Blocking — answer before any capture work**
1. **Scene 1 live action** — stock, phone-shot, or drop back to UI-only? Nothing else in the film
   depends on it, but it's the client's headline note, so decide first. **This is now the only
   genuine blocker.**
2. ✅ **C12 multi-select — CONFIRMED, exists.** `new-request.html` has a real `SEND TO` panel with a
   subcontractor search and a live count chip reading **"3 selected"**. The three-step spine's Step 2
   is filmable as-is; no prototype ticket needed.
3. ✅ **Compliance columns — CONFIRMED.** See §2 open decisions: Capability + Insurance ship with
   ok / warn / bad states on the real subbie directory.

**Then**
4. ✅ **Done — `animatic.html` rebuilt to the v0.4 order** (12 scenes, 1:55 — the "how Tenderfy helps" turn was added at scene 3 on 23 Jul). Old scenes 4 and 8 are
   out, five new beats are in (live-action slate, Step 1/2/3 spine, compliance, documents), the
   POV/side mapping is flipped for the contractor scenes, and backgrounds now alternate for rhythm
   rather than strictly by POV — the `.pov` label and the layout side still carry whose screen it is.
   ⚠️ **Known animatic limitation:** Material Symbols is not embedded and there is no `@font-face`,
   so the ~65 `.ms` icon spans in the *older* screens render as literal words ("check",
   "chat_bubble"). The five new v0.4 screens avoid `.ms` and use plain glyphs instead. If the
   animatic is ever shown to the client rather than used as timing reference, embed the icon subset
   as base64 (keeps it self-contained) or convert the remaining `.ms` spans the same way.
5. Migrate the portal teal, seed the demo data, freeze the prototype for capture.
6. Record VO scratch on a phone against this script — time it before building anything. If the
   scratch runs past 2 minutes, cut now rather than after capture.
7. Build the Option A capture script for the v0.4 shot list (C11–C15, C5, C1, C8, C10).
8. Confirm the "free for subcontractors" line with Tom — still parked.

**Still open from v0.3, unchanged:** the five-consecutive-contractor-scenes risk (see §2 open
decisions) is the thing most likely to need a re-cut after the animatic.
