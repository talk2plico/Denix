// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'; // Home component
import Contact from './pages/Contact'; // Contact component
import Cart from './pages/Cart'; // Cart component
import Login from './pages/Login'; // Login component
import Signup from './pages/Signup'; // Signup component
import ProductDetail from './pages/ProductDetail'; // ProductDetail component
import AdminDashboard from './pages/AdminDashboard'; // AdminDashboard component
import OrderHistory from './pages/OrderHistory'; // OrderHistory component
import ProductManagement from './pages/ProductManagement'; // ProductManagement component
import Product from './pages/Product'; // Product component
import Profile from './pages/Profile'; // Profile component
import Wishlist from './pages/Wishlist'; // Wishlist component
import Navbar from './components/Navbar'; // Navbar component
import Footer from './components/Footer'; // Footer component
import './App.css'; // Optional: Import your global styles

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/product/:id" component={ProductDetail} />
                    <Route path="/admin-dashboard" component={AdminDashboard} />
                    <Route path="/order-history" component={OrderHistory} />
                    <Route path="/product-management" component={ProductManagement} />
                    <Route path="/product/:id" component={Product} /> {/* Assuming product has an ID */}
                    <Route path="/profile" component={Profile} />
                    <Route path="/wishlist" component={Wishlist} />
                    {/* Add more routes as needed */}
                </Switch>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
