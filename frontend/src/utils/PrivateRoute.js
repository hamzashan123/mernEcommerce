import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    // If the user is authenticated, render the child components
    if (user) {
        return children;
    }

    // Otherwise, redirect to the login page
    return <Navigate to="/login" />;
};

export default PrivateRoute;
