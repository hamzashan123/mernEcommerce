// authService.js
const API_URL = "http://localhost:5000/api/users";

const authService = {
    login: async (email, password) => {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Return user and token from the response
                return {
                    user: data.user,
                    token: data.token
                };
            } else {
                throw new Error(data.message || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            return null;
        }
    },

    register: async (username, email, password) => {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Return user from the response
                return data;
            } else {
                throw new Error(data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Registration error:", error);
            return null;
        }
    },

    updateProfile: async (userId, updatedData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/${userId}`, {
                method: "PUT", // Assuming you have a PUT API for updating
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}` // Send the token for auth
                },
                body: JSON.stringify(updatedData)
            });

            const data = await response.json();

            if (response.ok) {
                // Return updated user from the response
                return data;
            } else {
                throw new Error(data.message || "Profile update failed");
            }
        } catch (error) {
            console.error("Profile update error:", error);
            return null;
        }
    }
};

export default authService;
