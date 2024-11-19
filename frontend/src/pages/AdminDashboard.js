// src/pages/AdminDashboard.js
import React from 'react';
import './AdminDashboard.css'; // Import your CSS file for styling

const AdminDashboard = () => {
    return (
        <div>
            <header>
                <div className="logo">Denix Admin</div>
                <nav>
                    <ul>
                        <li><a href="#analytics">Dashboard</a></li>
                        <li><a href="#products">Manage Products</a></li>
                        <li><a href="#orders">Orders</a></li>
                        <li><a href="#users">User  Management</a></li>
                        <li><a href="#settings">Settings</a></li>
                        <li><a href="#upload">File Upload</a></li>
                        <li><a href="logout.html">Logout</a></li>
                    </ul>
                </nav>
                <input type="text" className="search-bar" placeholder="Search..." />
            </header>

            <main>
                <section id="analytics">
                    <h2>Dashboard Overview</h2>
                    <div className="dashboard-summary">
                        <div className="card">Total Products: 150</div>
                        <div className="card">Total Orders: 300</div>
                        <div className="card">Total Users: 500</div>
                        <div className="card">Total Sales: $5000</div>
                    </div>
                </section>

                <section id="products">
                    <h2>Manage Products</h2>
                    <form id="product-form">
                        <label htmlFor="product-name">Product Name:</label>
                        <input type="text" id="product-name" name="product-name" required />
                        <label htmlFor="product-price">Price:</label>
                        <input type="number" id="product-price" name="product-price" required />
                        <button type="submit">Add Product</button>
                    </form>
                    <div className="product-list">
                        <h3>Product List</h3>
                        <ul>
                            <li>Product 1 - $20</li>
                            <li>Product 2 - $30</li>
                        </ul>
                    </div>
                </section>

                <section id="orders">
                    <h2>Recent Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12345</td>
                                <td>2024-01-15</td>
                                <td>$29.99</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <td>12346</td>
                                <td>2024-01-20</td>
                                <td>$49.99</td>
                                <td>Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="users">
                    <h2>User Management</h2>
                    <div className="user-list">
                        <ul>
                            <li>User 1 - Active</li>
                            <li>User 2 - Inactive</li>
                        </ul>
                    </div>
                </section>

                <section id="settings">
                    <h2>Settings</h2>
                    <form id="settings-form">
                        <label htmlFor="site-title">Site Title:</label>
                        <input type="text" id="site-title" placeholder="Enter site title" required />
                        <label htmlFor="site-description">Site Description:</label>
                        <textarea id="site-description" placeholder="Enter site description" required></textarea>
                        <button type="submit">Save Settings</button>
                    </form>
                </section>

                <section id="upload">
                    <h2>File Upload</h2>
                    <form id="upload-form" encType="multipart/form-data">
                        <input type="file" name="file" required />
                        <button type="submit">Upload</button>
                    </form </section>
            </main>

            <footer>
                <p>&copy; 2024 Denix Admin. All rights reserved.</p>
                <p>
                    <a href="#">Privacy Policy</a> | 
                    <a href="#">Terms of Service</a> | 
                    <a href="#">Follow us on Social Media</a>
                </p>
            </footer>
        </div>
    );
};

export default AdminDashboard;
