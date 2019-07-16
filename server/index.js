const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const user = require('./user-queries');
const db = require('./db');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
passport.use('login', user.loginStrategy);
passport.use('signup', user.signUpStrategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log("serialize", user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log("deserialize", id);
  db.getUserById(id, function (err, user) {
    if (err) return done(err);
    done(null, user);
  });
});

app.get('/api/secret',
  passport.authenticate('session'), (req, res) => {
    console.log('secret', req.isAuthenticated());
    res.json({ auth: true });
  });

app.post('/api/login',
  passport.authenticate('local'),
  (req, res) => {
    console.log('login', req.isAuthenticated());
    res.json({ auth: true });
  });

app.post('/api/signup',
  passport.authenticate('signup'),
  (req, res) => {
    console.log('signup', req.isAuthenticated());
    res.json({ auth: true });
  });

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
