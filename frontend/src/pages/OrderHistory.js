// src/pages/OrderHistory.js
import React from 'react';
import './OrderHistory.css'; // Import your CSS file for styling

const OrderHistory = () => {
    // Sample order data (this could come from props or state in a real application)
    const orders = [
        { id: '12345', date: '2024-01-15', total: '$29.99', status: 'Completed' },
        { id: '12346', date: '2024-01-20', total: '$49.99', status: 'Pending' },
    ];

    return (
        <div>
            <header>
                <h1>Denix</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/profile">Profile</a>
                </nav>
            </header>
            <main className="container">
                <h2>Your Order History</h2>
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
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.date}</td>
                                <td>{order.total}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <footer>
                <p>&copy; 2024 Denix. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default OrderHistory;
