const User = require('../models/User');
const bcrypt = require('bcrypt');

// Controller to create a new user
const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      email,
      password_hash: hashedPassword, // Store the hashed password in the database
    });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (passwordMatch) {
      return res.json(user);
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createUser, loginUser };

