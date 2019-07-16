const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../db');

const loginStrategy = new LocalStrategy(
  (username, password, done) => {
    db.user.getByName(username, (_, result) => {
      if (result.length > 0) {
        const user = result[0];
        bcrypt.compare(password, user.password, function (err, res) {
          if (res) {
            console.log('User logged in:', user.username);
            done(null, user);
          } else {
            console.log('Login: wrong password.');
            done(null, false);
          }
        });
      } else {
        console.log('Login: username does not exist.');
        done(null, false);
      }
    });
  }
);


module.exports = {
  loginStrategy,
};