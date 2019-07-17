const pool = require('./pool');

const add = (username, email, hash, cb) => {
  pool.query('INSERT INTO "user" (username, email, password) VALUES ($1, $2, $3) RETURNING id',
    [username, email, hash],
    (error, result) => {
      if (error) return cb(error.constraint);
      cb(null, result.rows[0]);
    });
};

const getByName = (username, cb) => {
  pool.query('SELECT * FROM "user" WHERE username = $1',
    [username],
    (error, result) => {
      if (error) return cb(error);
      cb(null, result.rows);
    });
};

const getById = (id, cb) => {
  pool.query('SELECT * FROM "user" WHERE id = $1',
    [id],
    (error, result) => {
      if (error) return cb(error);
      cb(null, result.rows);
    });
};

module.exports = {
  add,
  getByName,
  getById
};
