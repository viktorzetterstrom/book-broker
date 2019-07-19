const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  db.trade.getAll((err, allTrades) => {
    if (err) return res.status(204).json('error');
    res.status(200).json(allTrades);
  });
});

router.get('/:id', async (req, res) => {
  db.trade.getById(req.params.id, (err, trade) => {
    if (err) return res.status(204).json('error');
    res.status(200).json(trade);
  });
});

router.post('/', async (req, res) => {
  const trade = req.body;
  db.trade.add(trade, (result) => {
    res.status(201).json({ result });
  });
});

module.exports = router;
