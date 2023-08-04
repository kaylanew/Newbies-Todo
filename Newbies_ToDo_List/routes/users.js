const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Route to create a new user
router.post('/users', usersController.createUser);

// Route to login a user
router.post('/login', usersController.loginUser);

// Other routes and handlers related to users can be defined here...

module.exports = router;
