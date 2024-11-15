document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');

    // Array of products
    const products = [
        { name: 'Product 1', price: '$20', image: 'path/to/image1.jpg' },
        { name: 'Product 2', price: '$30', image: 'path/to/image2.jpg' },
        { name: 'Product 3', price: '$25', image: 'path/to/image3.jpg' }, // Example additional product
    ];

    // Function to render products
    const renderProducts = (productList) => {
        productGrid.innerHTML = ''; // Clear existing products
        productList.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            `;
            productGrid.appendChild(productItem);
        });
    };

    // Render initial products
    renderProducts(products);

    // Add-to-cart button handler
    productGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productName = event.target.parentElement.querySelector('h3').textContent;
            alert(`${productName} has been added to the cart!`);
        }
    });
});

// Upload form handler
document.getElementById('upload-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);

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

        // Optionally, provide user feedback
        alert('File uploaded successfully!');
        
        // Optionally, refresh or update UI (e.g., file list)
        // refreshFileList();
    } catch (error) {
        console.error('Error uploading file:', error);
        alert('Failed to upload the file. Please try again.');
    }
});
