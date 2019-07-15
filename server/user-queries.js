const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('./db');

const authStrategy = new LocalStrategy(
  function (username, password, done) {
    db.getUserByName(username, result => {
      if (result.length > 0) {
        const user = result[0];
        bcrypt.compare(password, user.password, function (err, res) {
          if (res) {
            done(null, user)
          } else {
            done(null, false)
          }
        })
      } else {
        done(null, false)
      }
    });
  }
)

const createUser = (req, res) => {
  console.log(req.user);
  const saltRounds = 10;
  const { username, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    db.addUser(username, email, hash, id => {
      res.status(201).json(id);
    });
  });
};

module.exports = {
  authStrategy,
  createUser,
};