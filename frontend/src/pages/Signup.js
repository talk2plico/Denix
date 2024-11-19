// src/pages/Signup.js
import React, { useState } from 'react';
import './Signup.css'; // Import your CSS file for styling

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [language, setLanguage] = useState('en');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('User  signed up:', { name, email, password, language });
        // Reset form fields after submission
        setName('');
        setEmail('');
        setPassword('');
        setLanguage('en');
    };

    return (
        <div>
            <header>
                <h1>Denix</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/login">Login</a>
                </nav>
            </header>
            <main className="container">
                <h2>Create an Account</h2>
                <form id="signup-form" onSubmit={handleSubmit}>
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
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="language">Preferred Language:</label>
                    <select
                        id="language"
                        name="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="zh">Mandarin Chinese</option>
                        <option value="ar">Arabic</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="it">Italian</option>
                        <option value="pt">Portuguese</option>
                        <option value="ru">Russian</option>
                        <option value="ja">Japanese</option>
                        <option value="ko">Korean</option>
                    </select>
                    <button type="submit">Sign Up</button>
                </form>
            </main>
            <footer>
                <p>&copy; 2024 Denix. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Signup;
