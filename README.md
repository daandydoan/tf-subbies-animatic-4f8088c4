# Tenderfy — Subcontractor Explainer (animatic)

Internal review copy of the **v0.4 animatic** for the Tenderfy for Subcontractors
explainer film. 11 scenes, ~1:47.

**▶ [Play the animatic](animatic.html)** — space = play/pause, ← → = scenes,
click any progress segment to seek. **S** toggles the 1080×1080 social safe area,
**N** toggles the shot/capture notes.

## What this is

A *timing reference*, not the finished film. The eight UI screens are the real
prototype UI (whole screens, extracted live), standing in until the actual screen
recordings are captured. Scene 1 is a marked slate — the live-action opener has
not been shot yet.

The script, shot list and capture plan live in `brief-and-script.md`.

## Not for distribution

This is a pre-release product film containing unreleased UI and placeholder demo
data. It is `noindex`ed and is not intended for public circulation.

## Regenerating the screens

```
node capture/build-screens.mjs     # re-extract real UI from the prototype
node capture/refresh-screens.mjs   # re-inline it into animatic.html
```
The prototype at `G:\Claude\Subbies\tenderfy-prototype` is read-only from here.
