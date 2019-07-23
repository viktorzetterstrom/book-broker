const pool = require('./pool');

const add = ({ workId, authorId, bookTitle, authorName, publicationYear, averageRating, bookImgUrl, description, condition, id }, cb) => {
  pool.query(`INSERT INTO "trade" (goodreads_book_id, goodreads_author_id, book_title, book_author,
                                    book_publication_year, book_rating, book_image, trade_description,
                                    book_condition, owner_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id`,
  [workId, authorId, bookTitle, authorName, publicationYear, averageRating, bookImgUrl, description, condition, id],
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
  pool.query('SELECT "trade".*, "user".username, "user".email FROM "trade" INNER JOIN "user" ON "user".id = "trade".owner_id WHERE "trade".id = $1',
    [id],
    (error, result) => {
      if (error) return cb(error);
      cb(null, result.rows[0]);
    });
};

const getByOwnerId = (ownerId, cb) => {
  pool.query('SELECT * FROM trade WHERE owner_id = $1', [ownerId],
    (error, results) => {
      if (error) return cb(error);
      cb(null, results.rows);
    });
};

const updateById = (description, condition, ownerId, id, cb) => {
  pool.query('UPDATE "trade" SET trade_description = $1, book_condition = $2 WHERE id = $4 AND owner_id = $3',
    [description, condition, ownerId, id],
    (error) => {
      if (error) return cb(error);
      cb(null, true);
    });
};

const deleteById = (id, cb) => {
  pool.query('DELETE FROM trade WHERE id = $1', [id],
    (error) => {
      if (error) return cb(error);
      cb(null, true);
    });
};

const completeById = (id, cb) => {
  pool.query('UPDATE "trade" SET trade_status = true WHERE id = $1',
    [id],
    (error) => {
      if (error) return cb(error);
      cb(null, true);
    });
};

module.exports = {
  add,
  getAll,
  getById,
  getByOwnerId,
  updateById,
  deleteById,
  completeById
};
