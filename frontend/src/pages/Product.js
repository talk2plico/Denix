// src/pages/Product.js
import React from 'react';
import './Product.css'; // Import your CSS file for styling

const Product = () => {
    const product = {
        name: 'Product Name',
        description: 'This is a great product.',
        price: 29.99,
        rating: '★★★★☆',
        images: [
            'images/product1.jpg',
            'images/product2.jpg',
        ],
        relatedProducts: [
            {
                name: 'Related Product 1',
                price: 19.99,
                rating: '★★★★☆',
                image: 'images/related1.jpg',
            },
            {
                name: 'Related Product 2',
                price: 24.99,
                rating: '★★★★☆',
                image: 'images/related2.jpg',
            },
        ],
    };

    return (
        <div>
            <header>
                <h1>Denix</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </nav>
                <input type="text" className="search-bar" placeholder="Search..." />
            </header>
            <main className="container">
                <h2>{product.name}</h2>
                <div className="product-info">
                    <p>Description: {product.description}</p>
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <p>Rating: {product.rating}</p>
                </div>
                <div className="product-images">
                    {product.images.map((image, index) => (
                        <img key={index} src={image} alt={`Product Image ${index + 1}`} />
                    ))}
                </div>
                <h3>Related Products</h3>
                <div className="product-grid">
                    {product.relatedProducts.map((relatedProduct, index) => (
                        <div className="product-card" key={index}>
                            <img src={relatedProduct.image} alt={relatedProduct.name} />
                            <h3>{relatedProduct.name}</h3>
                            <p>Price: ${relatedProduct.price.toFixed(2)}</p>
                            <p>Rating: {relatedProduct.rating}</p>
                        </div>
                    ))}
                </div>
            </main>
            <footer>
                <p>&copy; 2024 Denix. All rights reserved.</p>
                <p>
                    <a href="#">Privacy Policy</a> | 
                    <a href="#">Terms of Service</a> | 
                    <a href="#">Follow us on Social Media</a>
                </p>
            </footer>
        </div>
    );
};

export default Product;
