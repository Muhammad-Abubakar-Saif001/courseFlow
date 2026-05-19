<div align="center">

<img src="https://img.shields.io/badge/🎓-CourseFlow-4f46e5?style=for-the-badge&logoColor=white" height="60" />

### The interactive platform for seamless learning and course management.

Create engaging courses · Discover new skills · Manage with ease

<br/>

![React](https://img.shields.io/badge/React_18+-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-1a1a2e?style=flat-square&logo=vite&logoColor=646CFF)
![Node.js](https://img.shields.io/badge/Node.js_18+-1a1a2e?style=flat-square&logo=node.js&logoColor=4ADE80)
![Express](https://img.shields.io/badge/Express-1a1a2e?style=flat-square&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-1a1a2e?style=flat-square&logo=postgresql&logoColor=4169E1)
![Supabase](https://img.shields.io/badge/Supabase-1a1a2e?style=flat-square&logo=supabase&logoColor=3ECF8E)

<br/>

[![Live Demo](https://img.shields.io/badge/Live_Demo-0ea5e9?style=for-the-badge&logo=vercel&logoColor=white)](#)
[![API Reference](https://img.shields.io/badge/API_Reference-6366f1?style=for-the-badge&logo=swagger&logoColor=white)](#api-reference)
[![Report Bug](https://img.shields.io/badge/Report_Bug-ef4444?style=for-the-badge&logo=github&logoColor=white)](../../issues)
[![Request Feature](https://img.shields.io/badge/Request_Feature-10b981?style=for-the-badge&logo=github&logoColor=white)](../../issues)

</div>

---

## Features

| Feature | Description |
|---|---|
| **Role-based workspaces** | Distinct, secure dashboards tailored for Students, Instructors, and Admins. |
| **Marketplace discovery** | Robust search, category filtering, sorting, and pagination for live courses. |
| **Course lifecycle** | Instructors create courses; Admins review, approve, or deny them before they go live. |
| **Manual payments (NayaPay)** | Secure offline payment verification workflow handled by platform Admins. |
| **Learning tracking** | Enrolled students can track their progress and mark lessons as complete. |
| **Instructor analytics** | Instructors can monitor student rosters and view progress metrics for active courses. |
| **Admin control panel** | Centralized management for users, roles, course approvals, and pending enrollments. |
| **Unified dashboard API** | Performance-optimized endpoints reducing network round-trips for data fetching. |
| **Modular architecture** | Scalable React frontend with centralized state and database entity abstraction. |

---

## Architecture

```text
┌─────────────────────────────────────────────────────────────┐
│                         Browser                             │
│                                                             │
│   React (Vite)  +  Centralized State Management             │
│   ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐   │
│   │  Auth Layer │  │ Dashboards   │  │ Course Viewer    │   │
│   └─────────────┘  └──────────────┘  └──────────────────┘   │
│                                                             │
│   Modular Components  ·  JWT Auth  ·  Role-Based Routing    │
└──────────────────────────┬──────────────────────────────────┘
                           │  HTTP / JSON
┌──────────────────────────▼──────────────────────────────────┐
│                    Express API Backend                      │
│                                                             │
│   unified dashboard endpoints  ·  role middleware           │
│                                                             │
│   auth  ·  users  ·  courses  ·  enrollments                │
│                                                             │
│   Entity Data Access Layer (src/entity/)                    │
└──────────────────────────┬──────────────────────────────────┘
                           │  pg (node-postgres)
┌──────────────────────────▼──────────────────────────────────┐
│                    PostgreSQL (Supabase)                    │
│                                                             │
│   users ──► courses ──► enrollments                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## State Machines

```text
  === COURSE LIFECYCLE ===
  
  [Draft]
     │  Instructor submits course
     ▼
  [Pending] ──────────────────────────┐
     │                                │ Admin denies
     │ Admin approves                 ▼
     ▼                            [Denied]
  [Approved / Live in Marketplace]
  
  
  === ENROLLMENT LIFECYCLE ===
  
  Student clicks "Enroll" ──► Student pays via NayaPay
                                       │
                                       ▼
                                 [Payment Pending]
                                       │
         ┌─────────────────────────────┴────────────────────────┐
         │ Admin denies (Payment not received)                  │ Admin approves
         ▼                                                      ▼
  [Request Removed]                                       [Enrolled / Active]
                                                                │
                                                                ▼
                                                        [Completed Lessons]
```

---

## Project Structure

```text
CourseFlow/
├── backend/
│   ├── db/
│   │   ├── schema.sql         # PostgreSQL schema definition
│   │   └── seed.sql           # Sample data for testing
│   ├── src/
│   │   ├── entity/            # Database entities for structured data access
│   │   │   ├── Course.js
│   │   │   └── ...
│   │   ├── auth.js            # JWT Authentication middleware and logic
│   │   ├── db.js              # PostgreSQL connection setup
│   │   └── server.js          # Express API server and routes
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── store/             # Centralized state management slices
    │   │   ├── authSlice.js
    │   │   ├── eventSlice.js
    │   │   └── store.js
    │   ├── App.jsx            # Main route definition and component composition
    │   ├── main.jsx           # Application entry point
    │   └── styles.css         # UI Design system and styling
    ├── index.html
    ├── vite.config.js
    └── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **PostgreSQL** (via Supabase or local instance)

### 1 — Clone

```bash
git clone https://github.com/your-username/courseflow.git
cd courseflow
```

### 2 — Configure Environment

```bash
# Copy example environment variables
cp .env.example .env
```
Fill in `.env` with your PostgreSQL database credentials and a strong `JWT_SECRET`. **Never commit these secrets.**

For the frontend, configure the API URL (e.g., in `frontend/.env`):
```text
VITE_API_URL=http://localhost:4000/api
```

### 3 — Set up the Database

```bash
# Create the schema and seed initial data
npm run db:schema
npm run db:seed
```

### 4 — Start the Application

```bash
# Run both frontend and backend concurrently
npm run dev
```

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:4000

---

## API Reference

All endpoints are typically prefixed with `/api`.

<details>
<summary><strong>Auth & Users</strong></summary>
<br/>

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/auth/register` | — | Register a new student account |
| `POST` | `/auth/login` | — | Sign in, returns JWT |
| `POST` | `/auth/change-password` | Bearer | Update user password |
| `GET` | `/users` | Admin | Get list of all users |
| `POST` | `/users/instructors` | Admin | Create an instructor account |

</details>

<details>
<summary><strong>Dashboards</strong></summary>
<br/>

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/dashboard/summary` | Bearer | Unified endpoint returning data based on role (Admin stats, Instructor roster, Student courses) |

</details>

<details>
<summary><strong>Courses</strong></summary>
<br/>

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/courses` | Optional | List marketplace courses |
| `POST` | `/courses` | Instructor/Admin | Submit a new course |
| `PATCH` | `/courses/:id/status` | Admin | Approve or deny a course |

</details>

<details>
<summary><strong>Enrollments</strong></summary>
<br/>

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/enrollments` | Student | Request enrollment (triggers Payment Pending) |
| `GET` | `/enrollments/pending` | Admin | List pending payment approvals |
| `PATCH` | `/enrollments/:id/status` | Admin | Approve or deny an enrollment request |
| `PATCH` | `/enrollments/:id/progress`| Student | Update completed lessons |

</details>

---

## Database Schema

| Table | Purpose |
|---|---|
| `users` | Accounts for Students, Instructors, and Admins |
| `courses` | Course details, pricing, descriptions, and approval status |
| `enrollments` | Links students to courses, tracks progress and payment approval status |

---

## Scripts

```bash
npm run dev              # Starts both the API and Vite dev servers
npm run dev:api          # Starts only the Express backend (with watch mode)
npm run dev:frontend     # Starts only the Vite frontend
npm run build            # Builds the frontend for production
npm run lint             # Runs ESLint
npm run db:psql:supabase # Connects to the Supabase database via CLI
```

---

## Deployment

### Backend — Render
1. Create a Web Service connected to your repository.
2. Set the Root Directory (if required) or deploy from the main project root.
3. Configure `DATABASE_URL` and `JWT_SECRET` in the Environment tab.
4. Set the Start Command to `npm run start:api`.

### Frontend — Vercel
1. Import the project into Vercel.
2. Set the Framework Preset to Vite.
3. Add the `VITE_API_URL` environment variable pointing to your deployed Render backend.
4. Deploy.


