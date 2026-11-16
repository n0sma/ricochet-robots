# Slide Bots: solo sliding-robot puzzle trainer

A single-player trainer for sliding-robot puzzles: 16×16 board, 4 (or 5) robots that slide until they hit a wall or another robot, 17 targets. It has an optimal BFS solver, hints, solution replay, difficulty filters, a "think first" mode, stats and seed codes.

**Play:** double-click `ricochet-robots.html` (opens in Safari/Chrome). It works offline in one file, with no build step.

**Tests:** in the page, open **Dev → Run tests**, or headless with `node test-node.mjs`.
