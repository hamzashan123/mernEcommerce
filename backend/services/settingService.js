// services/settingService.js
const User = require('../models/User');

// update settings 
exports.updateSettings = async ({ userId, username, email, password }) => {
    try {
        // Create an object to hold the updated fields
        const updateFields = {
            username,
            email
        };

        // If password is provided, hash it before updating (optional)
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10); // Ensure bcrypt is imported
            updateFields.password = hashedPassword;
        }

        // Find the user by userId and update the provided fields
        const updatedSettings = await User.findOneAndUpdate(
            { _id: userId }, // Find user by _id (assuming userId is the unique identifier)
            updateFields, // Fields to update
            { new: true } // Return the updated document
        );

        // Check if the user exists
        if (!updatedSettings) {
            throw new Error('User not found');
        }

        return updatedSettings; // Return updated user settings
    } catch (error) {
        throw new Error(`Error updating settings: ${error.message}`);
    }
};