# Issue-Tracker

A simple issue-tracking application built with Next.js and TypeScript.

---

## Project Description  
This repository implements an Issue Tracker which allows users to create, manage and view issues (bugs, tasks, features) in a web application. The app uses Next.js for frontend and backend (via the app directory), along with supporting modules for authentication, database access (via Prisma), monitoring, and middleware handling.  
From your commit history: folders like `auth/`, `prisma/`, `app/` were gradually added, indicating the build-up of core features (authentication system, DB schema, UI pages). The presence of instrumentation, middleware and Sentry config files shows you made the app production-ready in terms of monitoring and error tracking.

---

## Contents Overview  
Here’s a breakdown of major files/folders and what they do:

| Path | Purpose |
|------|---------|
| `app/` | The main Next.js app directory: pages, layouts, components and API routes. |
| `auth/` | Authentication logic (e.g., login, session handling) supporting user access control. |
| `prisma/` | Database schema and migrations files for Prisma — defines models like Issue, User, etc. |
| `public/` | Static assets (images, icons, etc) served by the app. |
| `middleware.ts` | Custom middleware in Next.js (likely handles auth/redirects or route guarding). |
| `instrumentation.ts` & `instrumentation-client.ts` | Monitoring / telemetry setup (perhaps for performance tracking or logging). |
| `sentry.edge.config.ts` & `sentry.server.config.ts` | Configuration files for Sentry, enabling error-tracking in edge & server environments. |
| `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs` | Configuration files for Next.js build, TypeScript, linting and styling respectively. |
| `package.json`, `package-lock.json` | Dependency listing, scripts, versions. |
| `.gitignore` | Files/folders excluded from version control. |

---

## What the Project Does  
- Allows users to **authenticate** and gain access to the application via the auth folder.  
- Uses Prisma to define and interact with a database (models likely include Users, Issues, Comments, etc) via the prisma folder.  
- Implements UI pages and API routes under the app directory: viewing a list of issues, creating new ones, editing existing ones, filtering by status/assignee (based on structure).  
- Adds middleware to protect certain routes so only authenticated users can access issue management.  
- Sets up monitoring so any runtime errors or performance problems are captured and reported via Sentry.  
- Uses Next.js (and hence server-side rendering, API routes, app directory conventions) for a full-stack web app.  
- Uses TypeScript for type safety and maintainability, with ESLint & PostCSS to keep code clean and styling consistent.

---

## How to Run It Locally  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Dany-Agurcia99/Issue-Tracker.git
   cd Issue-Tracker
