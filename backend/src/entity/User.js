import { query } from '../data-source.js';

export async function getUserById(id) {
  const result = await query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
}

export async function getUserByEmail(email) {
  const result = await query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
}

export async function createUser(user) {
  const { id, name, email, passwordHash, role, status } = user;
  const result = await query(
    'INSERT INTO users (id, name, email, password_hash, role, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [id, name, email, passwordHash, role, status]
  );
  return result.rows[0];
}

export async function updateUserStatus(id, status) {
  const result = await query('UPDATE users SET status = $1 WHERE id = $2 RETURNING *', [status, id]);
  return result.rows[0];
}

export async function getAllUsers() {
  const result = await query('SELECT * FROM users ORDER BY joined_at DESC');
  return result.rows;
}
