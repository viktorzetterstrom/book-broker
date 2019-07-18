const express = require('express');
const router = express.Router();
const db = require('../db');

// router.get('/', async (req, res) => {

//   res.status(200).json(result);
// });

// router.get('/:id', async (req, res) => {

//   res.status(200).json(result);
// });

router.post('/', async (req, res) => {
  console.log(req.body);
  // db.trade.add(trade, () => {

  // });
  res.status(200).json('result');
});

module.exports = router;
