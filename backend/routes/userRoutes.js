// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, getAllUsers } = require('../controllers/UserController');
const { verifyToken, adminRole } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getAllUsers', verifyToken , adminRole, getAllUsers); // Middlewares and controller

module.exports = router;
