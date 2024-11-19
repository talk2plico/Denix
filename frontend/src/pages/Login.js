// src/pages/Login.js
import React, { useState } from 'react';
import './Login.css'; // Optional: Import a CSS file for styling

const Login = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login:', { email: loginEmail, password: loginPassword });
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Register:', { username: registerUsername, email: registerEmail, password: registerPassword });
    };

    return (
        <div className="container">
            <header>
                <div className="logo">Denix</div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <input type="text" className="search-bar" placeholder="Search..." />
            </header>

            <main>
                <h2>Login or Register</h2>
                <div className="form-tabs">
                    <button onClick={() => setIsLoginActive(true)} className={isLoginActive ? 'active' : ''}>Login</button>
                    <button onClick={() => setIsLoginActive(false)} className={!isLoginActive ? 'active' : ''}>Register</button>
                </div>

                {/* Login Form */}
                {isLoginActive && (
                    <form id="login-form" className="form-section active" onSubmit={handleLoginSubmit}>
                        <label htmlFor="login-email">Email:</label>
                        <input
                            type="email"
                            id="login-email"
                            name="email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="login-password">Password:</label>
                        <input
                            type="password"
                            id="login-password"
                            name="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                        <p>Don't have an account? <a href="#" onClick={() => setIsLoginActive(false)}>Register here</a></p>
                    </form>
                )}

                {/* Registration Form */}
                {!isLoginActive && (
                    <form id="register-form" className="form-section" onSubmit={handleRegisterSubmit}>
                        <label htmlFor="register-username">Username:</label>
                        <input
                            type="text"
                            id="register-username"
                            name="username"
                            value={registerUsername}
                            onChange={(e) => setRegisterUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="register-email">Email:</label>
                        <input
                            type="email"
                            id="register-email"
                            name="email"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="register-password">Password:</label>
                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Register</button>
                        <p>Already have an account? <a href="#" onClick={() => setIsLoginActive(true)}>Login here</a></p>
                    </form>
                )}
            </main>

            <footer>
                <p>&copy; 2024 Denix. All rights reserved.</p>
                <p>
                    <a href="#">Privacy Policy</a> | 
                    <a href="#">Terms of Service</a> | 
                    <a href="#">Follow us on Social Media</a>
                </p>
            </footer>
        </div ```javascript
    );
};

export default Login;
