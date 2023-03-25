const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('shop');
let basket1 = JSON.parse(localStorage.getItem("data")) || [];
searchInput.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  const apiUrl = `http://localhost:3000/products?q=${query}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      searchResults.innerHTML = '';
      console.log(data);
      
      data.forEach(product => {
        let search = basket1.find((y) => y.id === product.id) || [];
        let stockMessage = product.stock === 0 ? "Out of stock" : `In stock: ${product.stock} `;
        const productHtml = `
        <div id=product-id-${product.id} class="item">
        <img width="220" src=${product.img} alt="">
        <div class="details">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <h6>${product.category}</h6>
          <h4>${stockMessage}</h4>
          <div class="price-quantity">
            <h2>$ ${product.price} </h2>
            <div class="buttons">
              <i onclick="decrement(${product.id})" class="bi bi-dash-lg"></i>
              <div id=${product.id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
        </div>
              <i onclick="increment(${product.id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>
        `;

        searchResults.insertAdjacentHTML('beforeend', productHtml);
      });
    });
});
