# Change: Add personal resume website

## Why

I want a personal website for my job search: hybrid roles on the Sunshine Coast, or remote roles with Brisbane-based teams. It should show my resume and my movie ratings app, which visitors can try out. Keeping both in one project means one codebase, one deployment, and one Supabase project. It must cost as close to $0/month as possible, since traffic will be very low.

## What Changes

- New React + TypeScript single-page app (Vite) with two sections:
  - **Portfolio front / resume:** about, experience, skills, projects, education, references, contact. Driven by a typed content file, `src/content/resume.ts`, which already holds the full resume. It mentions that I'm Canadian, living on the Sunshine Coast, QLD.
  - **Movie ratings app:** my existing movie app (`HalloweenListFrontEndOnly`, `supabaseConnect` branch) brought in as is. Anyone who visits the site can browse, add, and edit ratings; no sign-in.
- Professional look with blue and white as the main colours
- New static hosting on AWS: private S3 bucket served through CloudFront (Origin Access Control, HTTPS, SPA routing), on the free CloudFront address for now
- Reuse the movie app's existing Supabase project as is. The resume never depends on the database.
- New deploy script (build → S3 sync → CloudFront invalidation) and a $1 AWS Budget alert

## Capabilities

### New Capabilities

- `resume-site`: Resume content, layout, and navigation between the resume and the movie ratings app
- `movie-ratings`: The existing movie ratings app, brought in as is; any visitor can browse, add, and edit ratings
- `static-hosting`: S3 + CloudFront hosting, SPA routing, deployment, and cost guardrails

### Modified Capabilities

- None (new project)

## Impact

- **New code:** Vite React TS app (`src/`), resume content (`src/content/resume.ts`), movie app code from `HalloweenListFrontEndOnly`, deploy script (`scripts/deploy.sh`)
- **AWS resources:** 1 S3 bucket, 1 CloudFront distribution (Free flat-rate plan or pay-as-you-go), 1 AWS Budget. Default region `ap-southeast-2` (Sydney).
- **External services:** the movie app's existing Supabase project (free plan)
- **Cost:** expected ~$0/month; custom domain optional later (~$15–20 USD/year)
- **Privacy:** no phone numbers or email addresses (mine or my references') are stored in the repo or shown on the site. Visitors contact me through LinkedIn; references are listed by name and role only, with contact details available on request.
- **Risk:** open editing means any visitor can change or delete ratings, or add junk. Acceptable for a demo; the Supabase row-level security policies must still limit visitors to the movie tables only, and backups of the ratings data should be kept so it can be restored.
- **Risk:** the Supabase free plan pauses inactive projects. The resume is unaffected; the movie ratings app shows a friendly "ratings unavailable" message instead of breaking.

## Out of Scope (later changes)

- A small browser game starring my dog, Doug the pug
- A custom domain (would also need a CloudFront certificate in `us-east-1`)
