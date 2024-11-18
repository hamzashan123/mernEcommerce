import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside style={styles.sidebar}>
            <ul style={styles.sidebarList}>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </aside>
    );
};

const styles = {
    sidebar: {
        width: '250px',
        backgroundColor: '#f4f4f4',
        height: '100vh',
        padding: '1rem',
    },
    sidebarList: {
        listStyleType: 'none',
        padding: 0,
    }
};

export default Sidebar;
