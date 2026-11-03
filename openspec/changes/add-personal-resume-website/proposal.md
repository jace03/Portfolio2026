# Change: Add personal resume website

## Why

I want a personal website that shows my resume, links to my movie rating site, and includes a small game featuring my dog. It must cost as close to $0/month as possible, since traffic will be very low.

## What Changes

- New React + TypeScript single-page app (Vite) with:
  - A resume page (about, experience, skills, projects, contact) driven by a typed content file
  - A prominent link to my movie rating website
  - A small browser game starring my dog ("Fetch")
- New static hosting on AWS: private S3 bucket served through CloudFront (Origin Access Control, HTTPS, SPA routing)
- New optional Supabase integration used only by the game (global leaderboard), so the resume never depends on the database
- New deploy script (build → S3 sync → CloudFront invalidation) and a $1 AWS Budget alert

## Capabilities

### New Capabilities

- `resume-site`: Resume content, layout, navigation, and the external link to the movie rating site
- `dog-game`: A small, self-contained canvas game featuring my dog, with local and optional global high scores
- `static-hosting`: S3 + CloudFront hosting, SPA routing, deployment, and cost guardrails

### Modified Capabilities

- None (new project)

## Impact

- **New code:** Vite React TS app (`src/`), deploy script (`scripts/deploy.sh`)
- **AWS resources:** 1 S3 bucket, 1 CloudFront distribution (Free flat-rate plan or pay-as-you-go), 1 AWS Budget
- **External services:** Supabase free plan (optional; game leaderboard only)
- **Cost:** expected ~$0/month; custom domain optional (~$15–20 USD/year if added)
- **Risk:** the Supabase free plan pauses inactive projects. Mitigated by making the leaderboard optional and falling back to local high scores.
