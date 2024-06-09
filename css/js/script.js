document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript loaded!");
    // Add any JavaScript functionality here
});

// Example: Dynamically add products to the featured products section
const products = [
    { name: "Product 1", description: "Description for Product 1", link: "#" },
    { name: "Product 2", description: "Description for Product 2", link: "#" },
    { name: "Product 3", description: "Description for Product 3", link: "#" }
];

const productList = document.querySelector(".product-list");

products.forEach(product => {
    const productItem = document.createElement("div");
    productItem.className = "product-item";
    productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="${product.link}">Buy Now</a>
    `;
    productList.appendChild(productItem);
});
