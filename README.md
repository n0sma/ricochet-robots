# Slide Bots: solo sliding-robot puzzle trainer

A single-player trainer for sliding-robot puzzles: 16×16 board, 4 (or 5) robots that slide until they hit a wall or another robot, 17 targets. It has an optimal BFS solver, hints, solution replay, difficulty filters, a "think first" mode, stats and seed codes.

## Mac

Double-click `ricochet-robots.html` (opens in Safari/Chrome). It works offline in one file, with no build step.

## iPhone (offline)

The folder is a ready-to-host static site. Put it on any HTTPS static host (Vercel, GitHub Pages, Netlify), then on the phone:

1. Open the address in Safari once while online. Everything is cached on that first visit.
2. Tap Share → **Add to Home Screen**.
3. Open it from the Home Screen icon. It runs full-screen and works with no connection.

Controls on the phone: tap a robot, then swipe anywhere on the board to slide it. Swipe left/right during a solution replay to step through it.

Files used for the phone version: `index.html` (redirects to the game), `manifest.webmanifest`, `sw.js` (offline cache), `icon-*.png`. After changing the game, bump `CACHE` in `sw.js` so phones pick up the new version.

## Tests

In the page, open **Dev → Run tests**, or headless with `node test-node.mjs`.
