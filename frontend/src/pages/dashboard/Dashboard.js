import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    console.log("dashboard",user);
    return (
        <div style={styles.container}>
            <Navbar />
            <div style={styles.mainContent}>
                <Sidebar />
                <div style={styles.dashboardContent}>
                     <h1>Welcome, {user.user.username}!</h1>
                    <p>This is your dashboard content area.</p>
                   
                    {/* Add dashboard components/content here */}
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
    dashboardContent: {
        flex: 1,
        padding: '2rem',
    }
};

export default Dashboard;
