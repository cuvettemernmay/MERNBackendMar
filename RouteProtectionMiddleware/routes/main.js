const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/auth');
const requestLogger = require('../middlewares/logger');

router.use(requestLogger);

// Public Route
router.get('/', (req, res) => {
    try {
        console.log('Root route hit');
        res.send('Hello from Home Page');
    } catch (error) {
        console.error('Error in root route:', error);
        res.status(500).send('Server Error');
    }
});

// Protected Route
router.get('/profile', isAuthenticated, (req, res) => {
    res.send('User Profile Page');
});

module.exports = router;