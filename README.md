# Training by Recept Heritage

Marketing/referral site for Training by Recept Heritage, intended to launch at
`lbnow.co.uk`. Built as a separate app/repo from Statement Now (see the
design-parameters note this was built from) - deliberately not merged into
that repo or its deploy, but matching its visual conventions (Tailwind v4,
neutral palette, the "[Product] by Recept Heritage" header/footer lockup)
so a future shared design package is a small extraction, not a rebuild.

## What's here (Phase 1)

No accounts, no course platform, no payment yet - this is the marketing
shell plus a working referral pathway:

- `/` - home: value proposition, audiences, how it works, course teaser.
- `/courses` - the two planned course tracks, both "in preparation" (not
  open for registration).
- `/about` - Recept Heritage's relevance as a training provider.
- `/refer` - the referral form. Submitting it emails Recept Heritage
  directly via Resend (see below) - there is no database in Phase 1, so
  this email **is** the referral record.
- `/terms-and-conditions`, `/privacy-policy`, `/cookie-policy` - kept
  honest to what this phase actually collects (referral form data only,
  no non-essential cookies at all). Update these before adding accounts,
  payment, or analytics.

## Running locally

```bash
npm install
npm run dev
```

## Referral email

The referral form (`app/refer`) is inert - submissions show a clear error,
never a false success - until three environment variables are set. Copy
`.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` - from [resend.com](https://resend.com).
- `REFERRAL_NOTIFICATION_EMAIL` - the inbox referrals should land in.
- `REFERRAL_NOTIFICATION_FROM_EMAIL` - a sending address on a domain
  verified with Resend.

## Not yet built

Per the design-parameters note's own phasing: learner accounts, course
content/modules, progress tracking, certificates, and anything requiring
a database. None of that needs deciding to ship Phase 1 - add it (and a
real backend, e.g. Supabase) when a course is ready to actually open.
