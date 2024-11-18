import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { logout } = useContext(AuthContext); // Access logout function from context

    return (
        <nav style={styles.navbar}>
            <h1 style={styles.brand}>My Dashboard</h1>
            <div style={styles.navLinks}>
                {/* Replace a href with Link for client-side navigation */}
                <Link to="/profile" style={styles.link}>Profile</Link>
                <Link to="/settings" style={styles.link}>Settings</Link>
                <button onClick={logout} style={styles.logoutButton}>Logout</button> 
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#333',
        color: '#fff',
    },
    brand: {
        fontSize: '1.5rem',
    },
    navLinks: {
        display: 'flex',
        gap: '1rem',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
    logoutButton: {
        background: 'none',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        textDecoration: 'underline',
        padding: 0,
        fontSize: 'inherit',
    }
};

export default Navbar;
