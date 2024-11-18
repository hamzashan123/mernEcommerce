// controllers/userController.js
const userService = require('../services/usersService');
const generateToken = require('../utils/generateToken');

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await userService.registerUser({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser(email, password);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = generateToken(user._id,user.role);

    res.json({ token, user: { id: user._id, username: user.username, email: user.email , role: user.role } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// getAll user
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json({ users: users });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
