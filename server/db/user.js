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
      cb(null, result.rows[0]);
    });
};

const deletePinnedTradeById = (tradeId, userId, cb) => {
  pool.query('DELETE FROM "pinned_trade" WHERE trade_id=$1 AND user_id=$2',
    [tradeId, userId],
    (error, result) => {
      if (error) return cb(error);
      cb(null, result.rows);
    });
};

const addPinnedTrade = (tradeId, userId, cb) => {
  pool.query('INSERT INTO "pinned_trade" (trade_id, user_id) VALUES ($1, $2)',
    [tradeId, userId],
    (error, result) => {
      if (error) return cb(error);
      cb(null, result.rows);
    });
};

const getPinnedTrades = (id, cb) => {
  pool.query('SELECT "trade".* FROM "trade" INNER JOIN "pinned_trade" ON "pinned_trade".trade_id = "trade".id AND "pinned_trade".user_id = $1',
    [id],
    (error, result) => {
      if (error) return cb(error);
      cb(null, result.rows);
    });
};

module.exports = {
  add,
  getByName,
  getById,
  addPinnedTrade,
  getPinnedTrades,
  deletePinnedTradeById
};
