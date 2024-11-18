import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import authService from '../../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Add state to store error message
    const { user, login } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('login call', user);
        if (user) {
            navigate('/dashboard');  // Redirect to dashboard if already logged in
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');  // Clear error message before submitting

        const userData = await authService.login(email, password);

        if (userData) {
            login(userData);
        } else {
            setError('Invalid email or password. Please try again.'); // Set error message
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.loginBox}>
                <h2 style={styles.heading}>Login</h2>
                {error && <p style={styles.error}>{error}</p>}  {/* Display error if exists */}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        style={styles.input} // Add styling to input
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        style={styles.input} // Add styling to input
                    />
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                <p style={styles.linkText}>
                    Don't have an account? <Link to="/register" style={styles.link}>Register here</Link>  
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5', // Light background for contrast
    },
    loginBox: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
    },
    heading: {
        marginBottom: '1.5rem',
        color: '#333',
        fontSize: '1.5rem',
    },
    input: {
        width: '92%',
        padding: '0.8rem',
        marginBottom: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
    },
    button: {
        width: '100%',
        padding: '0.8rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    error: {
        color: 'red',
        marginBottom: '10px',
    },
    linkText: {
        marginTop: '1rem',
        fontSize: '0.9rem',
        color: '#333',
    },
    link: {
        color: '#007bff',
        textDecoration: 'none',
    }
};

export default Login;
