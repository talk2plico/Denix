// src/pages/Home.js
import React from 'react';
import ProductGrid from '../components/ProductGrid'; // Import the ProductGrid component
import './Home.css'; // Optional: Import a CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Denix</h1>
                <p>Your one-stop shop for all your needs!</p>
            </header>
            <section className="featured-products">
                <h2>Featured Products</h2>
                <ProductGrid /> {/* Include the ProductGrid component */}
            </section>
            <section className="promotions">
                <h2>Current Promotions</h2>
                <div className="promotion-banner">
                    <p>Get 20% off on your first purchase!</p>
                </div>
            </section>
            <footer className="home-footer">
                <p>&copy; 2024 Denix. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
