const db = require('../db');

const serialize = (user, done) => {
  console.log('Serialized:', user);
  done(null, user.id);
};

const deserialize = (id, done) => {
  console.log('Deserialized:', id);
  db.user.getById(id, function (err, user) {
    if (err) return done(err);
    done(null, user);
  });
};

module.exports = { serialize, deserialize };