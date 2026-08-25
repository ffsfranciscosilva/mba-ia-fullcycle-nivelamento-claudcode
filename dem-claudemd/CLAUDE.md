# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This repo currently contains a single Next.js application in `dem-claudemd/` (App Router, TypeScript, Tailwind CSS v4). The repo root has no build tooling of its own — all commands below must be run from inside `dem-claudemd/`.

Note: `dem-claudemd/` is currently untracked in git (shows as `??` in `git status`).

## Commands

Run from `dem-claudemd/`:

```bash
npm run dev     # start dev server on http://localhost:4000 (custom port, not the Next.js default 3000)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

There is no test suite configured in this project.

## Environment

`app/page.tsx` reads `process.env.NEXT_PUBLIC_APP_NAME` at module load and throws if it is unset. Before running dev/build, copy `.env.exemplo` to `.env.local` and set `NEXT_PUBLIC_APP_NAME`.

## Architecture

Standard Next.js App Router structure: `app/layout.tsx` defines the root HTML shell and loads the Geist fonts; `app/page.tsx` is the home page and is the only route implemented so far. Path alias `@/*` resolves to the `dem-claudemd/` directory root (see `tsconfig.json`).

A senha da aula é "MBA - FullCycle"
