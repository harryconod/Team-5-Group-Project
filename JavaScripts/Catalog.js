//let productDetails = localStorage.getItem("productList");
//let parsedProductList = JSON.parse(productDetails);
//console.log(parsedProductList);
let shop = document.getElementById("productItemsContainer");
let input = document.querySelector("#input");
fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data =>{
    return (shop.innerHTML =data
      .map((x) => {
        let { id, name, desc,  productimg, price } = x;
        //let search = basket.find((y) => y.productid === productid) || [];
        //console.log(search);
        return `
      <div id=product-id-${id} class="item row mb-5">
      <div class="">
        <img class="img-fluid"  src=${productimg} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            
          </div>
        </div>
        </div>
    </div>
      `;
      })
      .join(""));
  })

/*
fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(product => {
     console.log(product);
        let productId = "product" + product.id;
        //console.log(productId);
        let checkboxId = "checkbox" + product.id;
        let labelId = "label" + product.uniqueId;
  //  console.log(productId);
        let productElement = document.createElement("li");
        productElement.classList.add("product-items-container", "d-flex", "flex-row", "mb-3", "mt-3");
        productElement.id = productId;
        productItemsContainer.appendChild(productElement);
       console.log(product.id);
        let inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        inputElement.id = checkboxId;
        inputElement.checked = product.isChecked;
    
        inputElement.onclick = function() {
            onProductStatusChange(checkboxId, labelId, productId);
        };
    
        inputElement.classList.add("checkbox-input");
        productElement.appendChild(inputElement);
    
        let labelContainer = document.createElement("div");
        labelContainer.classList.add("label-container", "mb-3");
        productElement.appendChild(labelContainer);
    
        let labelElementImage = document.createElement("img");
        labelElementImage.setAttribute("for", checkboxId);
        labelElementImage.id = labelId;
        labelElementImage.classList.add("checkbox-label", "product-image");
        labelElementImage.setAttribute = ("src", "Company-logo-2.png");
        if (product.isChecked === true) {
            labelElementName.classList.add("checked");
        }
        productElement.appendChild(labelElementImage);
     console.log(product.name);
        let labelElementName = document.createElement("label");
        labelElementName.setAttribute("for", checkboxId);
        labelElementName.id = labelId;
        labelElementName.classList.add("checkbox-label");
        labelElementName.textContent = "Product Name: " + product.name;
        if (product.isChecked === true) {
            labelElementName.classList.add("checked");
        }
        labelContainer.appendChild(labelElementName);
    
        let labelElementId = document.createElement("label");
        labelElementId.setAttribute("for", checkboxId);
        labelElementId.id = labelId;
        labelElementId.classList.add("checkbox-label");
        labelElementId.textContent = "Product ID: " + product.uniqueId;
        if (product.isChecked === true) {
            labelElementId.classList.add("checked");
        }
        labelContainer.appendChild(labelElementId);
    
        let labelElementPrice = document.createElement("label");
        labelElementPrice.setAttribute("for", checkboxId);
        labelElementPrice.id = labelId;
        labelElementPrice.classList.add("checkbox-label", "price-label");
        labelElementPrice.textContent = "Product Price: " + product.price;
        if (product.isChecked === true) {
            labelElementPrice.classList.add("checked");
        }
        productElement.appendChild(labelElementPrice);
    
        let labelElementStock = document.createElement("label");
        labelElementStock.setAttribute("for", checkboxId);
        labelElementStock.id = labelId;
        labelElementStock.classList.add("checkbox-label");
        labelElementStock.textContent = "Available Stock: " + product.stock;
        if (product.isChecked === true) {
            labelElementStock.classList.add("checked");
        }
        labelContainer.appendChild(labelElementStock);
    
        let labelElementDescription = document.createElement("label");
        labelElementDescription.setAttribute("for", checkboxId);
        labelElementDescription.id = labelId;
        labelElementDescription.classList.add("checkbox-label");
        labelElementDescription.textContent = "Product Description: " + product.description;
        if (product.isChecked === true) {
            labelElementDescription.classList.add("checked");
        }
        labelContainer.appendChild(labelElementDescription);
    
        let labelElementShipping = document.createElement("label");
        labelElementShipping.setAttribute("for", checkboxId);
        labelElementShipping.id = labelId;
        labelElementShipping.classList.add("checkbox-label");
        labelElementShipping.textContent = "Product Shipping Price: " + product.shipping;
        if (product.isChecked === true) {
            labelElementShipping.classList.add("checked");
        }
        labelContainer.appendChild(labelElementShipping);
    
        let labelElementCategory = document.createElement("label");
        labelElementCategory.setAttribute("for", checkboxId);
        labelElementCategory.id = labelId;
        labelElementCategory.classList.add("checkbox-label");
        labelElementCategory.textContent = "Product Category: " + product.category;
        if (product.isChecked === true) {
            labelElementCategory.classList.add("checked");
        }
        labelContainer.appendChild(labelElementCategory);
    
        let deleteIconContainer = document.createElement("div");
        deleteIconContainer.classList.add("delete-icon-container");
        productElement.appendChild(deleteIconContainer);
    
        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    
        deleteIcon.onclick = function() {
            onDeleteproduct(productId);
        }
    
        deleteIconContainer.appendChild(deleteIcon);
    
  })
  .catch(error => console.error(error));

*/

/*
for (let product of parsedProductList) {
    createAndAppendProduct(product);
}*/



  
  
 
  