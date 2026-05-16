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
  ('c-104', 'UX Research Sprint Masterclass', 'Design', 'Intermediate', 'instructor-nora', 'Nora Patel', 99, 4.9, 0, 36, '7h 40m', 'Denied', 0, 'Run fast research cycles, synthesize evidence, and translate findings into product decisions.', 'Needs clearer learning outcomes before publication.', '2026-03-18'),
  ('c-105', 'Advanced React Patterns', 'Development', 'Advanced', 'instructor-nora', 'Nora Patel', 199, 4.9, 0, 45, '10h 20m', 'Approved', 0, 'Master render props, HOCs, and advanced hooks for scalable React applications.', null, '2026-05-12'),
  ('c-106', 'Data Visualization with D3.js', 'Data', 'Advanced', 'instructor-daniel', 'Daniel Morris', 159, 4.8, 0, 50, '12h 00m', 'Approved', 0, 'Create interactive and dynamic data visualizations for the web.', null, '2026-05-11'),
  ('c-107', 'Cybersecurity Fundamentals', 'Security', 'Beginner', 'instructor-daniel', 'Daniel Morris', 79, 4.6, 0, 30, '5h 30m', 'Approved', 0, 'Learn the basics of network security, cryptography, and risk management.', null, '2026-05-09'),
  ('c-108', 'DevOps with Docker & Kubernetes', 'Operations', 'Intermediate', 'instructor-nora', 'Nora Patel', 169, 4.7, 0, 55, '14h 15m', 'Approved', 0, 'Modernize your deployment workflow with containerization and orchestration.', null, '2026-05-08'),
  ('c-109', 'Digital Marketing Strategy', 'Business', 'Beginner', 'instructor-daniel', 'Daniel Morris', 95, 4.5, 0, 25, '4h 45m', 'Approved', 0, 'Master SEO, SEM, and social media marketing to grow your business.', null, '2026-05-07'),
  ('c-110', 'Python for Data Science', 'Data', 'Intermediate', 'instructor-daniel', 'Daniel Morris', 110, 4.8, 0, 60, '15h 00m', 'Approved', 0, 'Use Pandas, NumPy, and Matplotlib to analyze and visualize data.', null, '2026-05-06'),
  ('c-111', 'Mastering Figma for UI/UX', 'Design', 'Beginner', 'instructor-nora', 'Nora Patel', 85, 4.7, 0, 20, '4h 00m', 'Approved', 0, 'Design beautiful interfaces and interactive prototypes with Figma.', null, '2026-05-05'),
  ('c-112', 'Cloud Computing with AWS', 'Operations', 'Intermediate', 'instructor-nora', 'Nora Patel', 180, 4.6, 0, 65, '18h 30m', 'Approved', 0, 'Get hands-on experience with EC2, S3, RDS, and Lambda.', null, '2026-05-04'),
  ('c-113', 'Node.js Microservices Architecture', 'Development', 'Advanced', 'instructor-nora', 'Nora Patel', 210, 4.9, 0, 40, '11h 45m', 'Approved', 0, 'Build and scale distributed systems using Node.js and message queues.', null, '2026-05-03'),
  ('c-114', 'Agile & Scrum for Teams', 'Business', 'Intermediate', 'instructor-daniel', 'Daniel Morris', 120, 4.7, 0, 22, '5h 15m', 'Approved', 0, 'Improve team productivity with agile methodologies and scrum frameworks.', null, '2026-05-02'),
  ('c-115', 'SQL for Data Analysis', 'Data', 'Beginner', 'instructor-daniel', 'Daniel Morris', 75, 4.8, 0, 28, '6h 00m', 'Approved', 0, 'Master complex queries and data manipulation using PostgreSQL.', null, '2026-05-01'),
  ('c-116', 'Mobile App Dev with Flutter', 'Development', 'Intermediate', 'instructor-nora', 'Nora Patel', 145, 4.7, 0, 48, '10h 30m', 'Approved', 0, 'Build beautiful cross-platform apps for iOS and Android with a single codebase.', null, '2026-04-30'),
  ('c-117', 'Ethical Hacking Workshop', 'Security', 'Advanced', 'instructor-daniel', 'Daniel Morris', 250, 4.9, 0, 70, '20h 00m', 'Approved', 0, 'Learn penetration testing and find vulnerabilities in web applications.', null, '2026-04-29'),
  ('c-118', 'Machine Learning Foundations', 'Data', 'Intermediate', 'instructor-daniel', 'Daniel Morris', 135, 4.8, 0, 52, '12h 45m', 'Approved', 0, 'Implement linear regression, classification, and clustering algorithms.', null, '2026-04-28'),
  ('c-119', 'GraphQL API Design', 'Development', 'Advanced', 'instructor-nora', 'Nora Patel', 155, 4.7, 0, 34, '8h 20m', 'Approved', 0, 'Design and implement efficient and flexible APIs using GraphQL and Apollo.', null, '2026-04-27'),
  ('c-120', 'Product Design Strategy', 'Design', 'Advanced', 'instructor-nora', 'Nora Patel', 175, 4.6, 0, 38, '9h 10m', 'Approved', 0, 'Align user needs with business goals through strategic design thinking.', null, '2026-04-26'),
  ('c-121', 'Financial Modeling for Startups', 'Business', 'Intermediate', 'instructor-daniel', 'Daniel Morris', 195, 4.8, 0, 32, '7h 50m', 'Approved', 0, 'Build robust financial projections and pitch to investors with confidence.', null, '2026-04-25'),
  ('c-122', 'Serverless Apps with Firebase', 'Development', 'Beginner', 'instructor-nora', 'Nora Patel', 80, 4.5, 0, 24, '5h 00m', 'Approved', 0, 'Build real-time apps quickly with Firebase Auth, Firestore, and Functions.', null, '2026-04-24'),
  ('c-123', 'Network Administration with Linux', 'Operations', 'Intermediate', 'instructor-nora', 'Nora Patel', 130, 4.6, 0, 44, '11h 10m', 'Approved', 0, 'Master Linux command line, shell scripting, and network configuration.', null, '2026-04-23'),
  ('c-124', 'Content Marketing Excellence', 'Business', 'Beginner', 'instructor-daniel', 'Daniel Morris', 65, 4.4, 0, 18, '3h 30m', 'Approved', 0, 'Create and distribute valuable content to attract and retain a clear audience.', null, '2026-04-22'),
  ('c-125', 'TypeScript for Large Projects', 'Development', 'Advanced', 'instructor-nora', 'Nora Patel', 125, 4.8, 0, 40, '9h 45m', 'Approved', 0, 'Improve code quality and maintainability with advanced TypeScript features.', null, '2026-04-21'),
  ('c-126', 'Deep Learning with TensorFlow', 'Data', 'Advanced', 'instructor-daniel', 'Daniel Morris', 220, 4.9, 0, 62, '16h 20m', 'Approved', 0, 'Build and train neural networks for computer vision and NLP.', null, '2026-04-20'),
  ('c-127', 'Modern CSS with Grid & Flexbox', 'Design', 'Beginner', 'instructor-nora', 'Nora Patel', 55, 4.7, 0, 15, '3h 00m', 'Approved', 0, 'Master modern layouts and responsive design without frameworks.', null, '2026-04-19'),
  ('c-128', 'API Security Best Practices', 'Security', 'Advanced', 'instructor-daniel', 'Daniel Morris', 185, 4.8, 0, 36, '8h 40m', 'Approved', 0, 'Secure your REST and GraphQL APIs from common attacks and exploits.', null, '2026-04-18'),
  ('c-129', 'Project Management with Jira', 'Business', 'Beginner', 'instructor-daniel', 'Daniel Morris', 70, 4.5, 0, 20, '4h 20m', 'Approved', 0, 'Efficiently manage tasks, sprints, and roadmaps using Jira Software.', null, '2026-04-17')
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
