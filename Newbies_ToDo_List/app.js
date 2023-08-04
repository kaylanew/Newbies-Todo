const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Route to get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await db.query('SELECT * FROM tblTask');
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to create a new task
app.post('/tasks', async (req, res) => {
  const { name, description, due_date } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO tblTask (name, description, due_date) VALUES ($1, $2, $3) RETURNING *',
      [name, description, due_date]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.listen(3000, () => {
  console.log('Server started on port 3000');
});
