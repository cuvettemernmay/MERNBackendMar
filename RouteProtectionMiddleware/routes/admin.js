const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/auth');

router.use(isAuthenticated);

router.get('/dashboard', (req, res) => {
  res.send('Hello from Admin Dashboard');
});

router.get("/settings", (req, res) => {
  res.send('Hello from Admin Settings');
});

module.exports = router;


