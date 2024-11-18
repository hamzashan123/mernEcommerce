import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>© 2024 My Dashboard. All Rights Reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem',
    }
};

export default Footer;
