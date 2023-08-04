const { Pool } = require('pg');

// Pool instance to manage connections
const pool = new Pool({
    user: 'robert',
    host: 'localhost', 
    database: 'Newbies_ToDo',
    password: 'cookers5', 
    port: 5432,
  });

// Function to query the database
const query = async (sql, values) => {
  try {
    const client = await pool.connect();
    const result = await client.query(sql, values);
    client.release();
    return result.rows;
  } catch (err) {
    throw err;
  }
};

module.exports = { query };
