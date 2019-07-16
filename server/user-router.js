const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db');
const router = express.Router();
const passport = require('passport');


router.get('/secret', (req, res) => {
  console.log(req.isAuthenticated());
  res.status(200).json({auth:req.isAuthenticated()});
});

router.post('/login',
  passport.authenticate('login'),
  (req, res) => {
    console.log('Login-route', req.isAuthenticated());
    res.json({ auth: req.isAuthenticated() });
  });

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ auth: req.isAuthenticated() });
});

router.post('/signup', (req, res) => {
  const saltRounds = 10;
  const { username, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    db.user.add(username, email, hash, (error, id) => {
      if(error) {
        res.status(409).json(error.constraint);
      }
      res.status(201).json(id);
    });
  });
});


module.exports = router;