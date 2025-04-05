// Sample product data
const products = [
    {
      id: 1,
      name: "iPhone 13 Pro",
      description: "Experience cutting-edge performance and advanced photography.",
      image: "iphone13pro.jpg",
      price: 999
    },
    {
      id: 2,
      name: "MacBook Pro",
      description: "A powerhouse notebook designed for professionals.",
      image: "macbookpro.jpg",
      price: 2399
    },
    {
      id: 3,
      name: "Apple Watch Series 7",
      description: "Stay connected and monitor your health with style.",
      image: "applewatch7.jpg",
      price: 399
    },
    {
      id: 4,
      name: "iPad Pro",
      description: "A versatile tablet for work and play.",
      image: "ipadpro.jpg",
      price: 799
    },
    {
      id: 5,
      name: "AirPods Pro",
      description: "Immersive sound with active noise cancellation.",
      image: "airpodspro.jpg",
      price: 249
    }
  ];
  
  let filteredProducts = [...products];
  
  // Function to display products on the page
  function displayProducts(productArray) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    if (productArray.length === 0) {
      productList.innerHTML = '<p>No products found.</p>';
      return;
    }
  
    productArray.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">$${product.price}</p>
        <button onclick="alert('You selected ${product.name}')">Buy Now</button>
      `;
      productList.appendChild(card);
    });
  }
  
  // Filter products based on search input
  function filterProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchInput) ||
      product.description.toLowerCase().includes(searchInput)
    );
    applySort();
  }
  
  // Sort products based on selected filter
  function sortProducts(sortValue) {
    if (sortValue === "name-asc") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
    displayProducts(filteredProducts);
  }
  
  // Apply sort when the filter changes
  function applySort() {
    const sortSelect = document.getElementById('sort-select');
    const sortValue = sortSelect.value;
    sortProducts(sortValue);
  }
  
  // Event listeners for the search input and sort dropdown
  document.getElementById('search-input').addEventListener('input', filterProducts);
  document.getElementById('sort-select').addEventListener('change', applySort);
  
  // Initial product display when the page loads
  window.onload = function() {
    displayProducts(filteredProducts);
  };
  