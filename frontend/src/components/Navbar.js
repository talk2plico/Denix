// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Import styles for the Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">MyApp</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
