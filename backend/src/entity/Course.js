import { query } from '../data-source.js';

export async function getAllCourses() {
  const result = await query('SELECT * FROM courses ORDER BY students DESC');
  return result.rows;
}

export async function getCourseById(id) {
  const result = await query('SELECT * FROM courses WHERE id = $1', [id]);
  return result.rows[0];
}

export async function createCourse(course) {
  const { id, title, category, level, instructorId, price, rating, lessons, duration, status, description } = course;
  const result = await query(
    `INSERT INTO courses (id, title, category, level, instructor_id, price, rating, lessons, duration, status, description) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
    [id, title, category, level, instructorId, price, rating, lessons, duration, status, description]
  );
  return result.rows[0];
}

export async function updateCourse(id, course) {
  const { title, category, level, instructorId, price, rating, lessons, duration, status, description } = course;
  const result = await query(
    `UPDATE courses SET title = $1, category = $2, level = $3, instructor_id = $4, price = $5, 
     rating = $6, lessons = $7, duration = $8, status = $9, description = $10 
     WHERE id = $11 RETURNING *`,
    [title, category, level, instructorId, price, rating, lessons, duration, status, description, id]
  );
  return result.rows[0];
}

export async function deleteCourse(id) {
  await query('DELETE FROM courses WHERE id = $1', [id]);
}
