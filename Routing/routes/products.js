const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from products');
});

router.get('/:id', (req, res) => {
  res.send(`Hello from products  ${req.params.id}`);
});

router.post('/', (req, res) => {
  res.json(req.body);
});


module.exports = router;
