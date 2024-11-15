document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const products = [
        { name: 'Product 1', price: '$20', image: 'path/to/image1.jpg' },
        { name: 'Product 2', price: '$30', image: 'path/to/image2.jpg' },
        // Add more products as needed
    ];

    products.forEach(product => {
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
});
