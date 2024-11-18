// controllers/SettingsController.js
const settingService = require('../services/settingService');

// update settings
exports.updateSettings = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userId = req.params.userId; // Get userId from route params
    const settings = await settingService.updateSettings({userId, username, email, password });
    res.status(201).json(settings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

