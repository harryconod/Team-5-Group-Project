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
      <button onclick="checkOut()" id="checkout-button" class="checkout">Checkout</button>
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

const checkOut = () => {
  const loggedIn = true;
  if (localStorage.getItem('username')) {
    const checkoutForm = `
      <form id="checkout-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="phoneno">Phone Number:</label>
        <input type="number" id="number" name="number" required>
        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required>
        <button type="submit">Checkout</button>
      </form>`;
    ShoppingCart.innerHTML = checkoutForm;

    const form = document.getElementById('checkout-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // prevent form submission
      const name = document.getElementById('name').value;
      const number=document.getElementById('number').value;
      const address = document.getElementById('address').value;
     
      const productData = JSON.parse(localStorage.getItem('data'));
     console.log(productData.name);

     let cartData = [];
  
  // fetch product data from API
  fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
      // check if there are any products in the cart
      if (basket.length !== 0) {
        // update the shopping cart element with product data
        ShoppingCart.innerHTML = basket.map((x) => {
          // get the product data for the current item in the cart
          let { id, item } = x;
          let search = data.find((x) => x.id === id) || [];
          let { img, price, name , category} = search;
          
          // create a new object with the necessary product data
          let productData ={
            productid: id,
            quantity: item,
            productname: name,
            price: price,
            image: img,
            category: category
          };
          
          // add the product data to the cartData array
          cartData.push(productData);
          
          
      
        }).join('');
        
      const mergedData = { name, number, address,   cartData };
      fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify(mergedData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        // handle success
        alert("your order success");
        document.getElementById('name').value="";
        document.getElementById('number').value="";
        document.getElementById('address').value="";
       
        clearCart();
      })
      .catch(error => {
        // handle error
      });
    }
})
})
}else {
  // User is not logged in, redirect to login page
  alert("Befor checkout login to your account")
  window.location.href = 'Account.html';
}
}