// settingService.js
const API_URL = "http://localhost:5000/api/settings";

const settingService = {
    
    updateSettings: async (userId, updatedData) => {
        
        try {
            const token = localStorage.getItem('token');
            
            const response = await fetch(`${API_URL}/${userId}`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}` // Send the token for auth
                },
                body: JSON.stringify(updatedData)
            });

            const data = await response.json();
            alert(data);
            if (response.ok) {
                // Return updated user from the response
                return data;
            } else {
                throw new Error(data.message || "Settings update failed");
            }
        } catch (error) {
            console.error("Settings update error:", error);
            return null;
        }
    }
};

export default settingService;
