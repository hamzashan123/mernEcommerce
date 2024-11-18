import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import authService from '../../services/authService';

const Profile = () => {
    const { user } = useContext(AuthContext); // Get the user from context
    const [username, setUsername] = useState(user.user.username);
    const [email, setEmail] = useState(user.user.email);
    const [password, setPassword] = useState("");

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedUser = {
            username,
            email,
            password
        };

        // Assuming there's an API to update user data
        const result = await authService.updateProfile(updatedUser);
        
        if (result) {
            alert("Profile updated successfully!");
        } else {
            alert("Failed to update profile.");
        }
    };

    return (
        <div style={styles.container}>
            <Navbar />
            <div style={styles.mainContent}>
                <Sidebar />
                <div style={styles.profileContent}>
                    <h1>Edit Profile</h1>
                    <form onSubmit={handleUpdate}>
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
                        <button type="submit">Update Profile</button>
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
        flex: 1, // Main area (content and sidebar) should expand
    },
    profileContent: {
        flex: 1,
        padding: '2rem',
    },
    formGroup: {
        marginBottom: '1rem',
    }
};

export default Profile;
