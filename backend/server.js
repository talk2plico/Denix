const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./db'); // Import database connection function
const userRoutes = require('./routes/userRoutes'); // Import user routes

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Constants
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes); // User routes
app.get('/health', (req, res) => res.status(200).send('Server is healthy')); // Health check route

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'An unexpected error occurred' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
