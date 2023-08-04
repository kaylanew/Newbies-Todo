const Task = require('../models/Task');

// Controller to get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to create a new task
const createTask = async (req, res) => {
  const { name, description, due_date } = req.body;
  try {
    const task = await Task.create({
      name,
      description,
      due_date,
    });
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getAllTasks, createTask };
