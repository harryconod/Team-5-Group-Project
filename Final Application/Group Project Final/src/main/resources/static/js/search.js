const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('shop');
let basket1 = JSON.parse(localStorage.getItem("data")) || [];
searchInput.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  const apiUrl = `/api/products/search?q=${query}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      searchResults.innerHTML = '';
      console.log(data);

      data.forEach(product => {
        let search = basket1.find((y) => y.product_id === product.product_id) || [];
        let stockMessage = product.stockLevel === 0 ? "Out of stock" : `In stock: ${product.stockLevel} `;
        const productHtml = `
        <div id=product-id-${product.product_id} class="item">
        <img width="220" src=${product.product_imgURL} alt="">
        <div class="details">
          <h3>${product.product_name}</h3>
          <p>${product.productDesc}</p>
          <h6>${product.category}</h6>
          <h4>${stockMessage}</h4>
          <div class="price-quantity">
            <h2>£${product.product_price} </h2>
            <div class="buttons">
              <i onclick="decrement(${product.product_id})" class="bi bi-dash-lg"></i>
              <div id=${product.product_id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
        </div>
              <i onclick="increment(${product.product_id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>
        `;

        searchResults.insertAdjacentHTML('beforeend', productHtml);
      });
    });
});
