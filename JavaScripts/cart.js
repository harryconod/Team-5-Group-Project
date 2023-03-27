let ShoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem("data")) || [];

/**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

/**
 * ! Generates the Cart Page with product cards composed of
 * ! images, title, price, buttons, & Total price
 * ? When basket is blank -> show's Cart is Empty
 */

let generateCartItems = () => {
  fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    if (basket.length !== 0) {
      return (ShoppingCart.innerHTML = basket
        .map((x) => {
          let { id, item } = x;
          let search = data.find((x) => x.id === id) || [];
          console.log(search);
          let { img, price, name } = search;
          return `
        <div class="cart-item">
          <img class="img-fluid1" src=${img} alt="" />
  
          <div class="details">
          
            <div class="title-price-x">
              <h4 class="title-price">
                <p>${name}</p>
                <p class="cart-item-price">$ ${price}</p>
              </h4>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>
  
            <div class="cart-buttons">
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">${item}</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
  
            <h3>$ ${item * price}</h3>
          
          </div>
        </div>
        `;
        })
        .join(""));
    } else {
      ShoppingCart.innerHTML = "";
      label.innerHTML = `
      <h2>Cart is Empty</h2>
      <a href="newindex.html">
        <button class="HomeBtn">Continue Shopping</button>
      </a>
      `;
    }
  });
 
};

generateCartItems();

/**
 * ! used to increase the selected product item quantity by 1
 */

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  console.log(generateCartItems());
  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! used to decrease the selected product item quantity by 1
 */

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! To update the digits of picked items on each item card
 */

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

/**
 * ! Used to remove 1 selected product card from basket
 * ! using the X [cross] button
 */

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  calculation();
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! Used to calculate total amount of the selected Products
 * ! with specific quantity
 * ? When basket is blank, it will show nothing
 */

let TotalAmount = () => {
  fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    if (basket.length !== 0) {
      let amount = basket
        .map((x) => {
          let { id, item } = x;
          let filterData = data.find((x) => x.id === id);
          return filterData.price * item;
        })
        .reduce((x, y) => x + y, 0);
  
      return (label.innerHTML = `
      <h2>Total Bill : $ ${amount}</h2>
      <button onclick="checkOut()"class="checkout">Checkout</button>
      <button onclick="clearCart()" class="removeAll">Clear Cart</button>
      `);
    } else return;
  });
 
};

TotalAmount();

/**
 * ! Used to clear cart, and remove everything from local storage
 */

let clearCart = () => {
  
  basket = [];
  generateCartItems();
  calculation();
  
  localStorage.setItem("data", JSON.stringify(basket));
};

let cart = [
  { name: "Item 1", quantity: 2, price: 10 },
  { name: "Item 2", quantity: 1, price: 5 },
  { name: "Item 3", quantity: 3, price: 18 }
];

let checkOut = () => {
  let cartData=[] ;
  fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    if (basket.length !== 0) {
      return (ShoppingCart.innerHTML = basket
        .map((x) => {
          let { id, item } = x;
          cartData = data.find((x) => x.id === id) || [];
          console.log(cartData);
          let { img, price, name } = cartData;
          return `
        <div class="cart-item">
          <img class="img-fluid1" src=${img} alt="" />
  
          <div class="details">
          
            <div class="title-price-x">
              <h4 class="title-price">
                <p>${name}</p>
                <p class="cart-item-price">$ ${price}</p>
              </h4>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>
  
            <div class="cart-buttons">
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">${item}</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
  
            <h3>$ ${item * price}</h3>
          
          </div>
        </div>
        `;
        })
        .join(""));
        
    } 
    console.log(cartData)
  });

  // iterate over each item in the cart and create an object with its details
/*cart.forEach(item => {
    let itemData = {
      name: item.name,
      quantity: item.quantity,
      price: item.price
    };
    cartData.push(itemData);
  });
*/
  // convert the array to JSON
  let jsonData = JSON.stringify(cartData);
 console.log(jsonData);
    // send the JSON data to an API using fetch
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: jsonData
    })
    .then(response => {
      // handle response from API
      alert("you order successful");
      clearCart();
      console.log(response);
      console.log("Checkout successful");
    })
    .catch(error => {
      // handle error
      console.error("Checkout failed: ", error);
    });
};



