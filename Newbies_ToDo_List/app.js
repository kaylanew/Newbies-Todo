const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express();
const port = 3000;

//Postgresql database info
const pool = new Pool({
  user: 'robert',
  host: 'localhost',
  database: 'Newbies_ToDo',
  password: 'Cookers5',
  port: 5432,
});

app.use(bodyParser.json());

// Endpoint handler for creating a new task
app.post('/api/tasks', async (req, res) => {
  try {
    const { name, description, due_date } = req.body;

    const query = 'INSERT INTO tasks (name, description, due_date) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, description, due_date];

    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating task:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
