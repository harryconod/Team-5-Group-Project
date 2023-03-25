const endpoint = 'http://localhost:3000/products';

const filtersContainer = document.getElementById('filters-container');
const categorySelect = document.getElementById('category');
const priceSelect = document.getElementById('price');
const productsContainer = document.getElementById('shop');

// Fetch the products from the API and display them on the page
fetch(endpoint)
  .then(response => response.json())
  .then(products => {
    displayProducts(products);

    categorySelect.addEventListener('change', () => {
      const filteredProducts = filterProducts(products, categorySelect.value, priceSelect.value);
      displayProducts(filteredProducts);
    });

    priceSelect.addEventListener('change', () => {
      const filteredProducts = filterProducts(products, categorySelect.value, priceSelect.value);
      displayProducts(filteredProducts);
    });
  })
  .catch(error => console.error(error));

// Create and display the product cards on the page
function displayProducts(products) {
  productsContainer.innerHTML = '';
  products.forEach(product => {
      const li = document.createElement('div');

     
        li.innerHTML = `
        <div id=product-id-${product.id} class="item">
        <img width="220" src=${product.img} alt="">
        <div class="details">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>

          <div class="price-quantity">
            <h2>$ ${product.price} </h2>
            <div class="buttons">
              <i onclick="decrement(${product.id})" class="bi bi-dash-lg"></i>
              <div id=${product.id} class="quantity"></div>
              <i onclick="increment(${product.id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
        `;
        productsContainer.appendChild(li);
      
    });
  
}

// Filter the products array by category and price range
function filterProducts(products, category, priceRange) {
  return products.filter(product => {
    // Filter by category
    if (category && product.category !== category) {
      return false;
    }

    // Filter by price range
    if (priceRange) {
      const price = parseInt(product.price);
      const [minPrice, maxPrice] = priceRange.split('-').map(range => parseInt(range));

      if (price < minPrice || price > maxPrice) {
        return false;
      }
    }

    return true;
  });
}
