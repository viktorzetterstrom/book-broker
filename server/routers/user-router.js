const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();
const passport = require('passport');

router.get('/loggedin', (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({
      username: req.user.username,
      id: req.user.id,
      email: req.user.email,
      loggedIn: true
    });
  } else {
    return res.json({
      loggedIn: false
    });
  }
});

router.get('/:id', (req, res) => {
  db.user.getById(req.params.id, (err, user) => {
    if (err) return res.status(404).json('');
    res.status(200).json(user);
  });
});

router.get('/:id/trades', (req, res) => {
  db.trade.getByOwnerId(req.params.id, (err, trades) => {
    if (err) return res.status(204).json('error');
    res.status(200).json(trades);
  });
});

router.post('/login',
  passport.authenticate('login'),
  (req, res) => {
    return res.json({
      username: req.user.username,
      id: req.user.id,
      email: req.user.email
    });
  },
);

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ auth: req.isAuthenticated() });
});

router.post('/register', (req, res) => {
  const saltRounds = 10;
  const { username, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    db.user.add(username, email, hash, (error) => {
      if (error) {
        return res.status(409).json(false);
      }
      res.status(201).json(true);
    });
  });
});

router.post('/:id/pinned', (req, res) => {
  const userId = req.params.id;
  const { tradeId } = req.body;
  db.user.addPinnedTrade(tradeId, userId, (error) => {
    if (error) {
      return res.status(409).json(false);
    }
    res.status(201).json(true);
  });
});

router.get('/:id/pinned', (req, res) => {
  db.user.getPinnedTrades(req.params.id, (error, trades) => {
    if (error) {
      return res.status(409).json(error);
    }
    res.status(200).json(trades);
  });
});

router.delete('/:id/pinned', (req, res) => {
  const userId = req.params.id;
  const { tradeId } = req.body;
  db.user.deletePinnedTradeById(tradeId, userId, (error) => {
    if (error) return res.status(204).json(false);
    res.status(204).json(true);
  });
});

module.exports = router;
