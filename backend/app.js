// app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');
const settingsRoutes = require('./routes/settingsRoutes');



dotenv.config();
connectDB();

const app = express();
app.use(cors()); // Use cors middleware to handle CORS
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/settings', settingsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
