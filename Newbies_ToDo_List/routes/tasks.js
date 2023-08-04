const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

// Route to get all tasks
router.get('/tasks', tasksController.getAllTasks);

// Route to create a new task
router.post('/tasks', tasksController.createTask);

// Other routes and handlers related to tasks can be defined here...

module.exports = router;
