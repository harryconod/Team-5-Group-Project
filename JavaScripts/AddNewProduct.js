/*let productItemsContainer = document.getElementById("productItemsContainer");
let buttonSaveAnp = document.getElementById("buttonSaveAnp");
let buttonAddAnp = document.getElementById("buttonAddAnp");

function getProductListFromLocalStorage() {
    let stringifiedproductList = localStorage.getItem("productList");
    let parsedProductList = JSON.parse(stringifiedproductList);
    if (parsedProductList === null){
        return [];
    } else {
        return parsedProductList;
    }
}

let productList = getProductListFromLocalStorage();
let productCount = productList.length;

buttonSaveAnp.onclick = function() {
    localStorage.setItem("productList", JSON.stringify(productList));
}

function onAddProduct() {
    let productNameInput = document.getElementById("productNameInput");
    let productPriceInput = document.getElementById("productPriceInput");
    let productStockInput = document.getElementById("productStockInput");
    let productDescriptionInput = document.getElementById("productDescriptionInput");
    let productShippingRateInput = document.getElementById("productShippingRateInput");
    let productCategoryInput = document.getElementById("productCategoryInput");

    let productImageInput = document.getElementById("productImageInput");

    let productName = productNameInput.value;
    let productPrice = productPriceInput.value;
    let productStock = productStockInput.value;
    let productDescription = productDescriptionInput.value;
    let productShipping = productShippingRateInput.value;
    let productCategory = productCategoryInput.value;

    let productImage = productImageInput.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(productImageInput.files[0]);
    let productImageURL = reader.result;
    console.log(productImageURL);

    /*if (productImage) {
        let reader = new FileReader();
        localStorage.setItem("productImage", reader.result);
    }
    let imageURL = reader.readAsDataURL(productImage);

    if (productName === "") {
        alert ("Enter valid product name");
        return;
    }
    if (productPrice === "") {
        alert ("Enter valid product price");
        return;
    }
    if (productStock === "") {
        alert ("Enter valid product stock");
        return;
    }
    if (productDescription === "") {
        alert ("Enter valid product description");
        return;
    }
    if (productShipping === "") {
        alert ("Enter valid product shipping rate");
        return;
    }
    if (productCategory === "") {
        alert ("Enter valid product category");
        return;
    }

    productCount = productCount + 1;

    let newProduct = {
        name: productName,
        price: productPrice,
        stock: productStock,
        description: productDescription,
        shipping: productShipping,
        category: productCategory,
        uniqueId: productCount,
        image: productImageURL,
        isChecked: false
    };
    productList.push(newProduct);
    createAndAppendProduct(newProduct);
    
    productNameInput.value = "";
    productPriceInput.value = "";
    productStockInput.value = "";
    productDescriptionInput.value = "";
    productShippingRateInput.value = "";
    productCategoryInput.value = "";
    productImageInput.value = null;

}

buttonAddAnp.onclick = function() {
    onAddProduct();
}

function onProductStatusChange(checkboxId, labelId, productId) {
    let checkBoxElement = document.getElementById(checkboxId);
    labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");

    let productObjectIndex = productList.findIndex(function(eachproduct){
        let eachProductId = "product" + eachproduct.uniqueId;

        if (eachProductId === productId) {
            return true;
        } else {
            return false;
        }
    });

    let productObject = productList[productObjectIndex];

    if (productObject.isChecked === true) {
        productObject.isChecked = false;
    } else {
        productObject.isChecked = true;
    }
}

function onDeleteproduct(productId) {
    let productElement  = document.getElementById(productId);
    productItemsContainer.removeChild(productElement);

    let deleteElementIndex = productList.findIndex(function(eachProduct) {
        let eachProductId = "product" + eachProduct.uniqueId;
        if (eachProductId === productId) {
            return true;
        } else {
            return false;
        }
    });

    productList.splice(deleteElementIndex, 1);
}

function createAndAppendProduct(product) {
    let productId = "product" + product.uniqueId;
    let checkboxId = "checkbox" + product.uniqueId;
    let labelId = "label" + product.uniqueId;

    let productElement = document.createElement("li");
    productElement.classList.add("product-items-container", "d-flex", "flex-row", "mb-3", "mt-3");
    productElement.id = productId;
    productItemsContainer.appendChild(productElement);

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
}

for (let product of productList) {
    createAndAppendProduct(product);
} */


     // const fileInput = document.getElementById("fileInput");
const imageValue = document.getElementById('image-value');
const previewImage = document.getElementById("previewImage");

imageValue.addEventListener("change", function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", function() {
      previewImage.setAttribute("src", this.result);
    });
    reader.readAsDataURL(file);
  }
});
       const postsList = document.querySelector('.posts-list');
       const addPostForm = document.querySelector('.add-post-form'); 
       const titleValue = document.getElementById('title-value');
       const bodyValue = document.getElementById('body-value');
       const priceValue = document.getElementById('price-value');
       const stockValue = document.getElementById("stock-value");
       const shippingRateValue = document.getElementById("shipping-rate-value");
       const categoryValue = document.getElementById("category-value");
      // const imageValue = document.getElementById('image-value');
       
       const btnSubmit = document.querySelector('.btn');
       let output ='';
        const renderPosts = (posts) =>{
            posts.forEach(post => {
               // console.log(post);
               output += `
                <div class="card mt-4 col-md-6 bg-light">
                    <div class="card-body" data-id=${post.id}>
                        <h5 class="card-title">${post.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${post.price}</h6>
                        <p class="card-text">${post.body}</p>
                        <h5 class="card-stock mb-2">${post.stock}</h5>
                        <h5 class="card-shipping-rate mb-2">${post.shippingRate}</h5>
                        <h5 class="card-category mb-2">${post.category}</h5>
                        <img class="image-block" src="${post.image}">
                        <a href="#" class="card-link" id="edit-post">Edit</a>
                        <a href="#" class="card-link" id="delete-post">Delete</a>
                    </div>
                </div>`;
            })
            postsList.innerHTML =output;
        }
        const url =' http://localhost:3000/products';
        fetch(url)
            .then(res => res.json())
            .then(data =>renderPosts(data))
           
        postsList.addEventListener('click', (e) =>{
            //console.log(e.target.id);
           
            e.preventDefault();
            let delButtonIsPressed = e.target.id =='delete-post';
            let editButtonIsPressed = e.target.id =='edit-post';
            let id=e.target.parentElement.dataset.id;

            //Delete - Remove the exisiting post
            //method : DELETE
            if(delButtonIsPressed){
                //console.log('remove post');
                fetch(`${url}/${id}`,{
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(()=> location.reload())
            }
            if(editButtonIsPressed){
                //console.log('edit ');
                const parent = e.target.parentElement;
                let titleContent = parent.querySelector('.card-title').textContent;
                let bodyContent = parent.querySelector('.card-text').textContent;
                let priceContent = parent.querySelector('.card-subtitle').textContent;
                let stockContent = parent.querySelector('.card-stock').textContent;
                let shippingRateContent = parent.querySelector('.card-shipping-rate').textContent;
                let categoryContent = parent.querySelector('.card-category').textContent;
                let imageContent = parent.querySelector('.image-block').getAttribute('src');
                let imageBase64 = imageContent.split(',')[1];
                let imageName = parent.querySelector('.image-block').getAttribute('alt');
                console.log(imageBase64);
                
                //console.log(titleContent, bodyContent);
                titleValue.value = titleContent;
                bodyValue.value = bodyContent;
                priceValue.value = Number(priceContent);
                stockValue.value = Number(stockContent);
                shippingRateValue.value = Number(shippingRateContent);
                categoryValue.value = categoryContent;
                //imagevalue.value=imageName; 
                previewImage.setAttribute('src', imageContent);
                
                console.log('Edit button clicked');
            }
            // Update - update the existing post
            // Method :PATCH
            btnSubmit.addEventListener('click',(e)=>{
                //console.log('post updated');

                e.preventDefault();
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                const base64Image = reader.result;
                fetch(`${url}/${id}`,{
                    method:'PATCH',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body : JSON.stringify({
                        name: titleValue.value,
                        body: bodyValue.value,
                        price:Number( priceValue.value),
                        stock: Number(stockValue.value),
                        shippingRate: Number(shippingRateValue.value),
                        category: categoryValue.value,
                        imgname: imageValue.files[0].name,
                        image: base64Image
                    })
                })
                .then(res => res.json())
                .then(() => location.reload())
            })
            reader.readAsDataURL(imageValue.files[0]);
        })
            
        });
        
        addPostForm.addEventListener('submit', (e)=>{
        e.preventDefault();
  
        const reader = new FileReader();
        reader.addEventListener('load', () => {
        const base64Image = reader.result;
       
        fetch(url,{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        name: titleValue.value,
        body: bodyValue.value,
        price: Number(priceValue.value),
        imgname: imageValue.files[0].name,
        image: base64Image,
        stock: Number(stockValue.value),
        shippingRate: Number(shippingRateValue.value),
        category: categoryValue.value
        })
        })
        .then(res => res.json())
        .then(() => location.reload())
  });
  reader.readAsDataURL(imageValue.files[0]);
});