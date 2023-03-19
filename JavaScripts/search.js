function search() {

    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let s=document.querySelector('#shop')
    
    s.innerHTML = "";
   
    for (i = 0; i < data.length; i++) {
      let obj = data[i];
      console.log(obj);
      if (obj.name.toLowerCase().includes(input)) {
        const elem = document.createElement("div");
        elem.innerHTML = `<div id=product-id-${obj.id} class="item">
        <img width="220" src=${obj.img} alt="">
        <div class="details">
          <h3>${obj.name}</h3>
          <p>${obj.desc}</p>
          <div class="price-quantity">
            <h2>$ ${obj.price} </h2>
            <div class="buttons">
              <i onclick="decrement(${obj.id})" class="bi bi-dash-lg"></i>
              <div id=${obj.id} class="quantity">
            
        </div>
              <i onclick="increment(${obj.id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>`
        console.log(elem);
        s.appendChild(elem)
      }
    }
  }