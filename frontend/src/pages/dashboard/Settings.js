import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import settingService from '../../services/settingService';

const Settings = () => {
    const { user, login } = useContext(AuthContext); // Get the user and login function from context
    const [username, setUsername] = useState(user.user.username);
    const [email, setEmail] = useState(user.user.email);
    const [password, setPassword] = useState("");

    const handleSettingUpdate = async (e) => {
        e.preventDefault();

        const updatedSettings = {
            username,
            email,
            password: password !== "" ? password : undefined // Don't send password if empty
        };

        const userId = user.user.id;
        console.log("sending data", userId);
        console.log("sending data", updatedSettings);
        const result = await settingService.updateSettings(userId, updatedSettings);

        if (result) {
            // Update user data in the context (assuming response has updated user data)
            const updatedUser = {
                ...user.user, // Keep other data unchanged
                username: result.username,
                email: result.email
            };

            // Update context with the new user data
            login({ user: updatedUser, token: user.token });

            alert("Settings updated successfully!");

            // Update local state with the updated values
            setUsername(result.username);
            setEmail(result.email);
            setPassword(""); // Clear password field after update
        } else {
            alert("Failed to update Settings.");
        }
    };

    return (
        <div style={styles.container}>
            <Navbar />
            <div style={styles.mainContent}>
                <Sidebar />
                <div style={styles.profileContent}>
                    <h1>Edit Settings</h1>
                    <form onSubmit={handleSettingUpdate}>
                        <div style={styles.formGroup}>
                            <label>Username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label>Password (leave blank if you don't want to change):</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Update Settings</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    mainContent: {
        display: 'flex',
        flex: 1,
    },
    profileContent: {
        flex: 1,
        padding: '2rem',
    },
    formGroup: {
        marginBottom: '1rem',
    }
};

export default Settings;
