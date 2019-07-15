const { Pool } = require('pg');

const pool = new Pool({
  user: 'viktor',
  host: 'localhost',
  database: 'project',
  port: 5432,
});

const addUser = (username, email, hash, cb) => {
  pool.query('INSERT INTO "user" (username, email, password) VALUES ($1, $2, $3) RETURNING id',
    [username, email, hash],
    (error, result) => {
      if (error) throw error;
      cb(result.rows[0].id);
  });
}

const getUserByName = (username, cb) => {
  pool.query('SELECT * FROM "user" WHERE username = $1',
    [username],
    (error, result) => {
      if (error) throw error;
      cb(result.rows);
  });
}

const getUserById = (id, cb) => {
  pool.query('SELECT * FROM "user" WHERE id = $1',
    [id],
    (error, result) => {
      if (error) throw error;
      cb(result.rows);
  });
}

module.exports = {
  addUser,
  getUserByName,
  getUserById
};
