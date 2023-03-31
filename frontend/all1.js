let shop = document.getElementById("shop");
let input = document.querySelector("#input");

/**
 * Basket to hold all the selected items
 * The getItem part is retrieving data from the local storage
 * If local storage is blank, basket becomes an empty array
 */
let basket = JSON.parse(localStorage.getItem("data")) || [];

/**
 * Generates the shop with product cards composed of
 * images, title, price, buttons, description
 */
let generateShop = (data) => {
    shop.innerHTML = data.map((x) => {
        let { id, name, desc, image, price, stock, category } = x;
        let search = basket.find((y) => y.id === id) || [];
        let stockMessage = stock === 0 ? "Out of stock" : `In stock: ${stock} `;

        // Fetch the image data from the API
        fetch(`http://localhost:3000/products/${id}`)
          .then((response) => response.blob())
          .then((blob) => {
            // Convert the image data to base64 format
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              
              // Assign the img tag with the base64 image data
            // Assume the base64 image data is stored in the `base64data` variable
                //let imageElement = `<img class="img-fluid" src="${image}" alt="" >`;
                let imageElement=`<img class="img-fluid"  src="${image}" alt="" onclick="showImageDetails('${name}', '${desc}', '${category}', '${image}','${price}')">`;
                console.log(imageElement);
              // Generate the product card template string with the img tag
              let productCard = `
                <div id="product-id-${id}" class="item row">
                  <div class="">
                    ${imageElement}
                    <div class="details">
                      <h3>${name}</h3>
                      <h6>${category}</h6>
                      <h4>${stockMessage}</h4>
                      <div class="price-quantity">
                        <h2>£ ${price} </h2>
                        <div class="buttons">
                          <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                          <div id="${id}" class="quantity">
                            ${search.item === undefined ? 0 : search.item}
                          </div>
                          <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `;
              shop.innerHTML += productCard;
            };
          });
    }).join("");
};

function showImageDetails(name, desc, category, image, price) {
    console.log(name, price);
    // Create the modal HTML code
    let modalHtml = `
      <div class="modal fade" id="image-modal" tabindex="-1" role="dialog" aria-labelledby="image-modal-label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="image-modal-label">${name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-6">
                  <img src="${image}" alt="" class="img-fluid">
                </div>
                <div class="col-sm-6">
                  <p><strong>Category:</strong> ${category}</p>
                  <p>${desc}</p>
                  <h2>£ ${price} </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  
    // Add the modal to the HTML document
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  
    // Show the modal
    document.getElementById('image-modal').classList.add('show');
    document.getElementById('image-modal').style.display = 'block';
  
    // Add an event listener to the close button
    document.querySelector('#image-modal .close').addEventListener('click', () => {
      // Hide the modal
      document.getElementById('image-modal').classList.remove('show');
      document.getElementById('image-modal').style.display = 'none';
  
      // Remove the modal from the HTML document
      document.body.removeChild(document.getElementById('image-modal'));
    });
  } 
  
  
  





/**
 * Used to increase the selected product item quantity by 1
 */

let increment = (id) => {
  let selectedItem = id;
  console.log(id);
  console.log(selectedItem.id);
  let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
    } else {
    search.item += 1;
    }

  console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};


/**
 * Used to decrease the selected product item quantity by 1
 */

 
let decrement = (id) => {
  let selectedItem = id;
  console.log(selectedItem.id);
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};


/**
 * To update the digits of picked items on each item card
 */

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  let quantityElement = document.getElementById(id)

  if (quantityElement) {
    quantityElement.innerHTML = search.item;
    calculation();
  }
};

/**
 * To calculate total amount of selected Items
 */

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    generateShop(data);
    calculation();
  });

  const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Function to fetch products based on search query
function fetchProducts(queryvalue) {
  console.log(queryvalue);
  console.log(typeof queryvalue);
  const apiUrl = `http://localhost:3000/products?q=${queryvalue}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      shop.innerHTML = '';
      // console.log(data);
      data.forEach(product => {
        let search = basket.find((y) => y.id === product.id) || [];
        let stockMessage = product.stock === 0 ? "Out of stock" : `In stock: ${product.stock} `;
        const productHtml = `
          <div id=product-id-${product.id} class="item">
          <img class="img-fluid"  src="${product.image}" alt="" onclick="showImageDetails('${product.name}', '${product.desc}', '${product.category}', '${product.img}','${product.price}')">
            <div class="details">
              <h3>${product.name}</h3>
              
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
  
        shop.insertAdjacentHTML('beforeend', productHtml);
      });
    });
}

// Initial fetch of all products
fetchProducts('');

// Add event listener to search input field
searchInput.addEventListener('input', () => {
  const inputValue = searchInput.value.toUpperCase();
 // console.log(typeof inputValue);
 // console.log(inputValue);
  if (inputValue === '') {
    // If search input is empty, fetch all products
    fetchProducts('');
  }
});

// Add event listener to search button
searchBtn.addEventListener('click', () => {
  const inputValue = searchInput.value.toUpperCase();
 // console.log(typeof inputValue);
 // console.log(inputValue);
  if (inputValue !== '') {
    // If search input is not empty, fetch products based on search query
    fetchProducts(inputValue);
  }
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const inputValue = searchInput.value.toUpperCase();
    if (inputValue !== '') {
      // If search input is not empty, fetch products based on search query
      fetchProducts(inputValue);
    }
  }
});





/**
 * Fiter a products using category and price
 */
const filtersContainer = document.getElementById('filters-container');
const categorySelect = document.getElementById('category');
const priceSelect = document.getElementById('price');

// Fetch the products from the API and display them on the page

fetch('http://localhost:3000/products')
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
  shop.innerHTML = '';
  products.forEach(product => {
      const li = document.createElement('div');
      let search = basket.find((y) => y.id === product.id) || [];
      let stockMessage = product.stock === 0 ? "Out of stock" : `In stock: ${product.stock} `;
     
        li.innerHTML = `
        <div id=product-id-${product.id} class="item">
        <img class="img-fluid"  src="${product.image}" alt="" onclick="showImageDetails('${product.name}', '${product.desc}', '${product.category}', '${product.img}','${product.price}')">
        <div class="details">
          <h3>${product.name}</h3>
         
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
    shop.appendChild(li);
      
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