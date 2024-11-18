// services/userService.js
const User = require('../models/User');

// Register a new user
exports.registerUser = async ({ username, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists with this email');
  }
  const newUser = new User({ username, email, password });
  await newUser.save();
  return newUser;
};

// Login user
exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    throw new Error('Invalid credentials');
  }
  return user;
};

// Login user
exports.getAllUsers = async () => {
  const users = await User.find();
  return users;
};

