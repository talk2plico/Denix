const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit on failure
    }
};

// User Schema and Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    language: { type: String, default: 'en', enum: ['en', 'es', 'fr', 'de'] }, // Example languages
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt
});

// Pre-save middleware for password hashing
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Instance method to compare passwords
userSchema.methods.comparePassword = async function (inputPassword) {
    return bcrypt.compare(inputPassword, this.password);
};

// User Model
const User = mongoose.model('User', userSchema);

module.exports = { connectDB, User };
