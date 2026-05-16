insert into users (id, name, email, password_hash, role, status, joined_at) values
  ('admin-abubakar', 'Abubakar', 'abubakar@gmail.com', '$2b$10$euMv0cL4G7q2RKw5rd1ryOsO.Tx35yex/RNU58n55QlIHRNJHwC2O', 'admin', 'Active', '2026-01-01'),
  ('admin-awais', 'Awais', 'awais@gmail.com', '$2b$10$euMv0cL4G7q2RKw5rd1ryOsO.Tx35yex/RNU58n55QlIHRNJHwC2O', 'admin', 'Active', '2026-01-01'),
  ('admin-bilal', 'Bilal', 'bilal@gmail.com', '$2b$10$euMv0cL4G7q2RKw5rd1ryOsO.Tx35yex/RNU58n55QlIHRNJHwC2O', 'admin', 'Active', '2026-01-01'),
  ('instructor-daniel', 'Daniel Morris', 'daniel@courseflow.io', '$2b$10$euMv0cL4G7q2RKw5rd1ryOsO.Tx35yex/RNU58n55QlIHRNJHwC2O', 'instructor', 'Active', '2026-01-12'),
  ('instructor-nora', 'Nora Patel', 'nora@courseflow.io', '$2b$10$euMv0cL4G7q2RKw5rd1ryOsO.Tx35yex/RNU58n55QlIHRNJHwC2O', 'instructor', 'Active', '2026-02-04'),
  ('student-ayesha', 'Ayesha Khan', 'ayesha@student.com', '$2b$10$euMv0cL4G7q2RKw5rd1ryOsO.Tx35yex/RNU58n55QlIHRNJHwC2O', 'student', 'Active', '2026-03-11'),
  ('student-sara', 'Sara Lin', 'sara@student.com', '$2b$10$euMv0cL4G7q2RKw5rd1ryOsO.Tx35yex/RNU58n55QlIHRNJHwC2O', 'student', 'Active', '2026-04-08')
on conflict (id) do update set
  name = excluded.name,
  email = excluded.email,
  password_hash = excluded.password_hash,
  role = excluded.role,
  status = excluded.status,
  joined_at = excluded.joined_at;

insert into courses
  (id, title, category, level, instructor_id, instructor, price, rating, students, lessons, duration, status, progress, description, denial_reason, updated_at)
values
  ('c-101', 'AI Product Management', 'Business', 'Advanced', 'instructor-daniel', 'Daniel Morris', 129, 4.9, 0, 42, '9h 30m', 'Approved', 0, 'Plan, validate, and launch AI-enabled products with measurable business outcomes.', null, '2026-05-05'),
  ('c-102', 'Full-Stack React Systems', 'Development', 'Intermediate', 'instructor-nora', 'Nora Patel', 149, 4.8, 0, 58, '13h 10m', 'Approved', 0, 'Build production React apps with APIs, routing, authentication, and deployment workflows.', null, '2026-04-22'),
  ('c-103', 'Learning Analytics for Teams', 'Data', 'Beginner', 'instructor-daniel', 'Daniel Morris', 89, 4.7, 0, 31, '6h 15m', 'Pending', 0, 'Turn learning behavior into actionable dashboards, cohorts, and completion insights.', null, '2026-05-10'),
  ('c-104', 'UX Research Sprint Masterclass', 'Design', 'Intermediate', 'instructor-nora', 'Nora Patel', 99, 4.9, 0, 36, '7h 40m', 'Denied', 0, 'Run fast research cycles, synthesize evidence, and translate findings into product decisions.', 'Needs clearer learning outcomes before publication.', '2026-03-18')
on conflict (id) do update set
  title = excluded.title,
  category = excluded.category,
  level = excluded.level,
  instructor_id = excluded.instructor_id,
  instructor = excluded.instructor,
  price = excluded.price,
  rating = excluded.rating,
  students = excluded.students,
  lessons = excluded.lessons,
  duration = excluded.duration,
  status = excluded.status,
  progress = excluded.progress,
  description = excluded.description,
  denial_reason = excluded.denial_reason,
  updated_at = excluded.updated_at;

insert into enrollments (id, student_id, course_id, progress, enrolled_at) values
  ('enr-1', 'student-ayesha', 'c-101', 62, '2026-05-02'),
  ('enr-2', 'student-ayesha', 'c-102', 28, '2026-05-04'),
  ('enr-3', 'student-sara', 'c-101', 14, '2026-05-06')
on conflict (student_id, course_id) do update set
  progress = excluded.progress,
  enrolled_at = excluded.enrolled_at;

update courses
set students = coalesce(
  (select count(*)::integer from enrollments where enrollments.course_id = courses.id),
  0
);
