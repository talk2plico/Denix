// src/pages/ProductManagement.js
import React, { useState } from 'react';
import './ProductManagement.css'; // Import your CSS file for styling

const ProductManagement = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 20, description: 'Description for Product 1' },
        { id: 2, name: 'Product 2', price: 30, description: 'Description for Product 2' },
    ]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const productToAdd = { ...newProduct, id: products.length + 1 };
        setProducts([...products, productToAdd]);
        setNewProduct({ name: '', price: '', description: '' }); // Reset form
    };

    const handleDelete = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div>
            <header>
                <h1>Denix Admin - Product Management</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/logout">Logout</a>
                </nav>
            </header>
            <main className="container">
                <h2>Manage Products</h2>
                <form id="product-form" onSubmit={handleSubmit}>
                    <label htmlFor="product-name">Product Name:</label>
                    <input
                        type="text"
                        id="product-name"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="product-price">Price:</label>
                    <input
                        type="number"
                        id="product-price"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="product-description">Description:</label>
                    <textarea
                        id="product-description"
                        name="description"
                        value={newProduct.description}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Add Product</button>
                </form>
                <h3>Existing Products</h3>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                            <button>Edit</button>
                            <button onClick={() => handleDelete(product.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </main>
            <footer>
                <p>&copy; 2024 Denix. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ProductManagement;
