const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const user = require('./user-queries');
const db = require('./db');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
passport.use(user.authStrategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  db.getUserById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

app.post('/api/login',
  passport.authenticate('local', { failureRedirect: '/doesnotwork' }),
  (req, res) => {
    res.redirect('/home');
  });
app.post('/api/users', user.createUser);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
