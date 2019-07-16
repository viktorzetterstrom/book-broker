const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('./db');

const loginStrategy = new LocalStrategy(
  (username, password, done) => {
    db.getUserByName(username, result => {
      if (result.length > 0) {
        const user = result[0];
        bcrypt.compare(password, user.password, function (err, res) {
          if (res) {
            console.log('user logs in', user.username);
            done(null, user)
          } else {
            console.log('Failure login');
            done(null, false)
          }
        })
      } else {
        console.log('Username does not exist');
        done(null, false)
      }
    });
  }
);

const signUpStrategy = new LocalStrategy(
  (username, password, done) => {
      const saltRounds = 10;
      bcrypt.hash(password, saltRounds, (_, hash) => {
        db.addUser(username, email, hash, (error, user) => {
          if(error) {
            console.error('Could not create user', error);
            return done(null, false);
          };
          console.log('User creates', user.username);
          done(null, user)
        });
      });
  }
)

// const createUser = (req, res) => {
//   const saltRounds = 10;
//   const { username, email, password } = req.body;

//   bcrypt.hash(password, saltRounds, (err, hash) => {
//     db.addUser(username, email, hash, (error, id) => {
//       if(error) {
//         res.status(409).json(error.constraint);
//       }
//       res.status(201).json(id);
//     });
//   });
// };


module.exports = {
  loginStrategy,
  signUpStrategy
};