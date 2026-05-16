create table if not exists users (
  id text primary key,
  name text not null,
  email text unique not null,
  password_hash text,
  role text not null default 'student',
  status text not null default 'Active',
  joined_at timestamptz not null default now()
);

alter table users add column if not exists password_hash text;
alter table users add column if not exists role text not null default 'student';
alter table users add column if not exists status text not null default 'Active';
alter table users add column if not exists joined_at timestamptz not null default now();

alter table users drop constraint if exists users_role_check;
alter table users add constraint users_role_check check (role in ('student', 'instructor', 'admin'));
alter table users drop constraint if exists users_status_check;
alter table users add constraint users_status_check check (status in ('Active', 'Pending', 'Suspended'));

create table if not exists courses (
  id text primary key,
  title text not null,
  category text not null,
  level text not null,
  instructor_id text references users(id) on delete set null,
  instructor text not null,
  price numeric(10, 2) not null default 0,
  rating numeric(2, 1) not null default 4.7,
  students integer not null default 0,
  lessons integer not null default 0,
  duration text not null default '4h 00m',
  status text not null default 'Pending',
  progress integer not null default 0,
  description text not null,
  denial_reason text,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

alter table courses add column if not exists instructor_id text references users(id) on delete set null;
alter table courses add column if not exists denial_reason text;
alter table courses add column if not exists created_at timestamptz not null default now();
alter table courses drop constraint if exists courses_status_check;
update courses set status = 'Approved' where status in ('Published', 'Review');
update courses set status = 'Pending' where status = 'Draft';
alter table courses add constraint courses_status_check check (status in ('Pending', 'Approved', 'Denied'));
alter table courses drop constraint if exists courses_level_check;
alter table courses add constraint courses_level_check check (level in ('Beginner', 'Intermediate', 'Advanced'));
alter table courses drop constraint if exists courses_progress_check;
alter table courses add constraint courses_progress_check check (progress >= 0 and progress <= 100);

create table if not exists enrollments (
  id text primary key,
  student_id text not null references users(id) on delete cascade,
  course_id text not null references courses(id) on delete cascade,
  progress integer not null default 0 check (progress >= 0 and progress <= 100),
  enrolled_at timestamptz not null default now(),
  unique (student_id, course_id)
);

create index if not exists courses_search_idx on courses using gin (
  to_tsvector('english', title || ' ' || category || ' ' || level || ' ' || instructor || ' ' || description)
);

create index if not exists courses_status_idx on courses(status);
create index if not exists courses_category_idx on courses(category);
create index if not exists courses_instructor_idx on courses(instructor_id);
create index if not exists enrollments_student_idx on enrollments(student_id);
create index if not exists enrollments_course_idx on enrollments(course_id);
