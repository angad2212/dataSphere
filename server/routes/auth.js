const express = require('express');
const { login } = require('../controllers/auth');
const router = express.Router();

// Example route handler
router.post('/login', login);

module.exports = router; // Correct export statement