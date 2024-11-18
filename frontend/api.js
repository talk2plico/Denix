// backend/routes/userRoutes.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    const { name, email, password, language } = req.body;
    const newUser  = new User({ name, email, password, language });
    await newUser .save();
    res.status(201).json(newUser );
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && user.password === password) {
        res.status(200).json(user);
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
