# M.A.R.A. Web

> **Project Status: Discontinued / Portfolio Archive**

M.A.R.A. (Moto Auto Road Assistant) was my first major software project, created to bring together automotive and motorcycle enthusiasts, workshops, events, and related services.

## What This Repository Contains

The web part of M.A.R.A.: the public pages of the product and the pages embedded in the mobile application.

## Tech Stack

- Next.js 14 (Pages Router)
- React 18
- TypeScript
- NextAuth (Apple and Google providers)
- Axios and Zod
- Geolib

## Main Features

- Main, About, Privacy Policy, and Terms of Use pages
- Instructions for deleting a user account
- Mobile-embedded versions of the About, Privacy Policy, Terms of Use, and account deletion pages
- Localization support
- Authentication routes through NextAuth

## Notes

The Apple sign-in private key that used to be embedded in the source has been replaced by a placeholder. Provide your own credentials through environment variables to run authentication.

## Project Status

- The project is **discontinued** and no longer maintained.
- The production services of M.A.R.A. have been shut down.
- This repository is preserved for reading and reference only.
- Some external integrations (Firebase, push notifications, SMS, maps, and similar third-party services) may no longer work.
- The code is not intended to run in production without additional setup, new credentials, and new infrastructure.

## Why This Repository Is Public

The project was eventually discontinued because it was no longer relevant to my current priorities. I decided to preserve the source code as part of my development portfolio, documenting my early experience in building and maintaining a multi-component software product.

M.A.R.A. consisted of four repositories: `MARA-app` (mobile app), `MARA-api` (backend), `MARA-web` (web part), and `MARA-websocket` (real-time service).

No license has been chosen for this repository, so all rights are reserved by the author.
