let shop = document.getElementById("shop");
let input = document.querySelector("#input");
/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem("data")) || [];

/**
 * ! Generates the shop with product cards composed of
 * ! images, title, price, buttons, description
 */



fetch('/api/products')
  .then(response => response.json())
  .then(data =>{
    return (shop.innerHTML =data
      .map((x) => {
        let { product_id, product_name, productDesc,  product_imgURL
          , product_price , stockLevel , category} = x;
        let search = basket.find((y) => y.product_id === product_id) || [];
        //console.log(search);
        return `
      <div product_id=product-product_id-${product_id} class="item row  ">
      <div class="">
        <img class="img-fluid"  src=${product_imgURL} alt="">
        <div class="details">
          <h3>${product_name}</h3>
          <p>${productDesc}</p>
          <div class="price-quantity">
            <h2>£${product_price} </h2>
            <div class="buttons">
              <i onclick="decrement(${product_id})" class="bi bi-dash-lg"></i>
              <div product_id=${product_id} class="quantity">${
          search.item === undefined ? 0 : search.item
        }</div>
              <i onclick="increment(${product_id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
        </div>
    </div>
      `;
      })
      .join(""));
      
  })

  /*
let generateShop = () => {
  
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { product_id, name, desc, img, price } = x;
      let search = basket.find((y) => y.product_id === product_id) || [];
      //console.log(search);
      return `
    <div product_id=product-product_id-${product_id} class="item row  ">
    <div class="">
      <img class="img-fluid"  src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>$ ${price} </h2>
          <div class="buttons">
            <i onclick="decrement(${product_id})" class="bi bi-dash-lg"></i>
            <div product_id=${product_id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</div>
            <i onclick="increment(${product_id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
      </div>
  </div>
    `;
    })
    .join(""));
};*/

generateShop();






/**
 * ! used to increase the selected product item quantity by 1
 */

let increment = (product_id) => {
  let selectedItem = product_id;
  let search = basket.find((x) => x.product_id === selectedItem.product_id);

  if (search === undefined) {
    basket.push({
      product_id: selectedItem.product_id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  console.log(basket);
  update(selectedItem.product_id);
  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! used to decrease the selected product item quantity by 1
 */

let decrement = (product_id) => {
  let selectedItem = product_id;
  let search = basket.find((x) => x.product_id === selectedItem.product_id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.product_id);
  basket = basket.filter((x) => x.item !== 0);
  console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! To update the digits of picked items on each item card
 */

let update = (product_id) => {
  let search = basket.find((x) => x.product_id === product_id);
  document.getElementById(product_id).innerHTML = search.item;
  calculation();
};

/**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
