import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/dashboard/Profile'; // Import Profile page
import Settings from './pages/dashboard/Settings';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';


function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    {/* Protect both Dashboard and Profile with PrivateRoute */}
                    <Route 
                        path="/dashboard" 
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        } 
                    />
                    <Route 
                        path="/profile" 
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        } 
                    />
                    <Route 
                        path="/settings" 
                        element={
                            <PrivateRoute>
                                <Settings />
                            </PrivateRoute>
                        } 
                    />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
