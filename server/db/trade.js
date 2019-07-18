const pool = require('./pool');

const add = ({ bookId, authorId, title, author, year, rating, image, description, condition, userId }, cb) => {
  pool.query(`INSERT INTO "trade" (goodreads_book_id, goodreads_author_id, book_title, book_author,
                                    book_publication_year, book_rating, book_image, trade_description,
                                    book_condition, owner_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
  [bookId, authorId, title, author, year, rating, image, description, condition, userId],
  (error, result) => {
    if (error) return cb(error.constraint);
    cb(null, result.rows[0]);
  });
};

const getAll = cb => {
  pool.query('SELECT * FROM "trade"',
    (error, result) => {
      if (error) return cb(error);
      cb(null, result.rows);
    });
};

const getById = (id, cb) => {
  pool.query('SELECT * FROM "trade" WHERE id = $1',
    [id],
    (error, result) => {
      if (error) return cb(error);
      cb(null, result.rows);
    });
};

module.exports = {
  add,
  getAll,
  getById
};
