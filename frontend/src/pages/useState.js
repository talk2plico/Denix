import React, { useState } from 'react';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleProductSubmit = (event) => {
        event.preventDefault();
        const newProduct = { name: productName, price: productPrice };
        setProducts([...products, newProduct]);
        setProductName('');
        setProductPrice('');
    };

    return (
        <div>
            {/* ... other sections ... */}
            <section id="products">
                <h2>Manage Products</h2>
                <form onSubmit={handleProductSubmit}>
                    <label htmlFor="product-name">Product Name:</label>
                    <input
                        type="text"
                        id="product-name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                    <label htmlFor="product-price">Price:</label>
                    <input
                        type="number"
                        id="product-price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                    />
                    <button type="submit">Add Product</button>
                </form>
                <div className="product-list">
                    <h3>Product List</h3>
                    <ul>
                        {products.map((product, index) => (
                            <li key={index}>{product.name} - ${product.price}</li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* ... other sections ... */}
        </div>
    );
};
