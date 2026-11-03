# Change: Add personal resume website

## Why

I want a personal website that shows my resume, hosts my movie ratings, and includes a small game featuring my dog. Putting the movie ratings app inside this project (instead of linking to a separate site) means one codebase, one deployment, and one Supabase project in total. It must cost as close to $0/month as possible, since traffic will be very low.

## What Changes

- New React + TypeScript single-page app (Vite) with:
  - A resume page (about, experience, skills, projects, education, references, contact) driven by a typed content file, `src/content/resume.ts`, which already holds the full resume
  - A movie ratings section, built into this app, where visitors can browse my movie ratings and I can add and edit them
  - A small browser game starring my dog ("Fetch")
- New static hosting on AWS: private S3 bucket served through CloudFront (Origin Access Control, HTTPS, SPA routing)
- New Supabase integration: a single Supabase project shared by the movie ratings section (movies and ratings) and the game (global leaderboard). The resume never depends on the database.
- New deploy script (build → S3 sync → CloudFront invalidation) and a $1 AWS Budget alert

## Capabilities

### New Capabilities

- `resume-site`: Resume content, layout, and navigation between the resume, movie ratings, and game
- `movie-ratings`: Browse my movie ratings publicly; add, edit, and delete ratings when signed in as me (Supabase Auth + row-level security)
- `dog-game`: A small, self-contained canvas game featuring my dog, with local and optional global high scores
- `static-hosting`: S3 + CloudFront hosting, SPA routing, deployment, and cost guardrails

### Modified Capabilities

- None (new project)

## Impact

- **New code:** Vite React TS app (`src/`), resume content (`src/content/resume.ts`), deploy script (`scripts/deploy.sh`)
- **AWS resources:** 1 S3 bucket, 1 CloudFront distribution (Free flat-rate plan or pay-as-you-go), 1 AWS Budget
- **External services:** 1 Supabase project on the free plan, holding the movie ratings tables and the game leaderboard table. Only my account can write movie ratings; anyone can read them.
- **Replaces:** the separate movie rating website, which this project absorbs (existing ratings to be migrated into the new Supabase tables)
- **Cost:** expected ~$0/month; custom domain optional (~$15–20 USD/year if added)
- **Privacy:** no phone numbers or email addresses (mine or my references') are stored in the repo or shown on the site. Visitors contact me through LinkedIn; references are listed by name and role only, with contact details available on request.
- **Risk:** the Supabase free plan pauses inactive projects. The resume is unaffected. The game falls back to local high scores. The movie ratings section shows a friendly "ratings unavailable" message instead of breaking; regular use of the ratings section (and the game leaderboard) keeps the project active.
