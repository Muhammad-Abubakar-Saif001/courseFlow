# CourseFlow Marketplace

A full-stack online course marketplace and learning platform built with React, Node.js, Express, and PostgreSQL.

## Features

- React frontend with role-aware student, instructor, and admin workspaces
- Node.js/Express backend API
- PostgreSQL schema and seed data
- Real email/password authentication with JWT-protected API actions
- Student registration by default
- Admin-created instructor accounts
- Admin approval or denial for new instructor course submissions
- Course CRUD operations
- Marketplace search, filters, sorting, and pagination
- Enrollment and lesson progress tracking
- Student view for enrolled courses
- Instructor view for students enrolled in their courses
- Admin panel for users, instructors, moderation, reports, and platform metrics

## Project Structure

```text
frontend/
  index.html
  vite.config.js
  src/main.jsx
  src/styles.css
backend/
  db/schema.sql
  db/seed.sql
  server.js
  src/auth.js
  src/db.js
```

## Setup

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
copy .env.example .env
```

Update `.env` with your PostgreSQL connection:

```text
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/courseflow
JWT_SECRET=replace-this-with-a-long-random-secret
```

Create and seed the database:

```bash
createdb courseflow
npm run db:schema
npm run db:seed
```

Run the full app:

```bash
npm run dev
```

Frontend: `http://127.0.0.1:5173/`

Backend: `http://127.0.0.1:4000/api/health`

## Seeded Admin Accounts

The seed file creates three admins:

```text
abubakar@gmail.com / 11223344
awais@gmail.com / 11223344
bilal@gmail.com / 11223344
```

New public registrations are always created as students. Admins can create instructor accounts from the admin panel.

## Useful Commands

```bash
npm run dev:frontend
npm run dev:api
npm run lint
npm run build
```

## GitHub

This folder is ready to push to GitHub:

```bash
git add .
git commit -m "Build full-stack CourseFlow marketplace"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
