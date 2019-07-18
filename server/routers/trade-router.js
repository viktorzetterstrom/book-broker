const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  db.trade.getAll((err, allTrades) => {
    if (err) res.status(204).json('error');
    res.status(200).json(allTrades);
  });
});

// router.get('/:id', async (req, res) => {

//   res.status(200).json(result);
// });

router.post('/', async (req, res) => {
  const trade = req.body;
  db.trade.add(trade, (result) => {
    res.status(201).json({ result });
  });
});

module.exports = router;
