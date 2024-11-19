// src/pages/Profile.js
import React, { useState } from 'react';
import './Profile.css'; // Import your CSS file for styling

const Profile = () => {
    const [name, setName] = useState('Current Name');
    const [email, setEmail] = useState('user@example.com');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle profile update logic here
        console.log('Profile updated:', { name, email, password });
        // Reset password field after submission
        setPassword('');
    };

    return (
        <div>
            <header>
                <h1>Denix</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/logout">Logout</a>
                </nav>
            </header>
            <main className="container">
                <h2>Your Profile</h2>
                <form id="profile-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">New Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Update Profile</button>
                </form>
            </main>
            <footer>
                <p>&copy; 2024 Denix. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Profile;
