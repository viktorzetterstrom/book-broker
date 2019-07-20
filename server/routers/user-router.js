const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();
const passport = require('passport');

router.get('/:id', (req, res) => {
  db.user.getById(req.params.id, (err, user) => {
    if (err) return res.status(404).json('');
    res.status(200).json(user);
  });
});

router.post('/login',
  passport.authenticate('login'),
  (req, res) => {
    res.json({
      username: req.user.username,
      id: req.user.id,
      email: req.user.email
    });
  });

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ auth: req.isAuthenticated() });
});

router.post('/register', (req, res) => {
  const saltRounds = 10;
  const { username, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    db.user.add(username, email, hash, (error) => {
      if(error) {
        return res.status(409).json(false);
      }
      res.status(201).json(true);
    });
  });
});

module.exports = router;
