const pool = require('./pool');

const add = (message, tradeId, userId, cb) => {
  pool.query('INSERT INTO "message" (message, trade_id, user_id) VALUES ($1, $2, $3) RETURNING user_id, timestamp',
    [message, tradeId, userId],
    (error, message) => {
      if (error) return cb(false);
      pool.query('SELECT username FROM "user" WHERE id=$1', [message.rows[0].user_id], (error, result) => {
        if (error) return cb(false);
        cb(null, {username: result.rows[0].username, timestamp: message.rows[0].timestamp});
      });
    });
};

const getByTradeId = (id, cb) => {
  pool.query('SELECT "message".*, "user".username, "user".id FROM "message" INNER JOIN "user" ON "user".id = "message".user_id WHERE "message".trade_id = $1 ORDER BY "message".timestamp DESC',
    [id],
    (error, result) => {
      if (error) return cb(error);
      cb(null, result.rows);
    });
};

module.exports = {
  getByTradeId,
  add
};
