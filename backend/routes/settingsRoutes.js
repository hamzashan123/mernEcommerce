// routes/settingsRoutes.js
const express = require('express');
const { updateSettings } = require('../controllers/SettingsController');
const { verifyToken, adminRole } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/:userId', verifyToken, updateSettings);

module.exports = router;
