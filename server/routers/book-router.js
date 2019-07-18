const express = require('express');
const router = express.Router();
const goodreads = require('./goodreads-service');

router.get('/', async (req, res) => {
  // if (!req.isAuthenticated()) return res.status(401).send();
  const query = req.query.q;
  const page = req.query.page;
  const field = req.query.field;

  const result = await goodreads.getBooks(query, page, field);
  res.status(200).json(result);
});

module.exports = router;
