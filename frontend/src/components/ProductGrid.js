// src/components/ProductGrid.js
import React, { useEffect, useState } from 'react';
import './ProductGrid.css'; // Import your CSS file for styling

const ProductGrid = () => {
    const [products, setProducts] = useState([
        { name: 'Product 1', price: '$20', image: 'path/to/image1.jpg' },
        { name: 'Product 2', price: '$30', image: 'path/to/image2.jpg' },
        { name: 'Product 3', price: '$25', image: 'path/to/image3.jpg' },
    ]);

    const [file, setFile] = useState(null);

    // Function to handle adding a product to the cart
    const handleAddToCart = (productName) => {
        alert(`${productName} has been added to the cart!`);
    };

    // Function to handle file upload
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.text();
            console.log('Upload successful:', result);
            alert('File uploaded successfully!');
            // Optionally refresh or update UI (e.g., file list)
            // refreshFileList();
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload the file. Please try again.');
        }
    };

    return (
        <div>
            <div className="product-grid">
                {products.map((product, index) => (
                    <div className="product-item" key={index}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button className="add-to-cart" onClick={() => handleAddToCart(product.name)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <form id="upload-form" onSubmit={handleUpload}>
                <label htmlFor="file-upload">Upload File:</label>
                <input type="file" id="file-upload" onChange={handleFileChange} required />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default ProductGrid;
