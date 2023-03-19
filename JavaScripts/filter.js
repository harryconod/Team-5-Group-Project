function filter(){
    let s=document.querySelector('#shop');
    s.innerHTML="";
    
  
    for(i=0;i<data.length;i++){
      var data_filter =data[i];
      console.log(data_filter);
      if(data_filter.name=="Shampoo Bar"||data_filter.name=="shampoo Bar" ){
        const elem = document.createElement("div");
        elem.innerHTML = `<div id=product-id-${data_filter.id} class="item">
        <img width="220" src=${data_filter.img} alt="">
        <div class="details">
          <h3>${data_filter.name}</h3>
          <p>${data_filter.desc}</p>
          <div class="price-quantity">
            <h2>$ ${data_filter.price} </h2>
            <div class="buttons">
              <i onclick="decrement(${data_filter.id})" class="bi bi-dash-lg"></i>
              <div id=${data_filter.id} class="quantity">
            
        </div>
              <i onclick="increment(${data_filter.id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>`
        console.log(elem);
        s.appendChild(elem)
      }
    }
   
  }
  function filter1(){
    let s=document.querySelector('#shop');
    s.innerHTML="";
    for(i=0;i<data.length;i++){
      var data_filter =data[i];
      console.log(data_filter);
      if(data_filter.name=="Moisturizer"||data_filter.name=="moisturizer" ){
        const elem = document.createElement("div");
        elem.innerHTML = `<div id=product-id-${data_filter.id} class="item">
        <img width="220" src=${data_filter.img} alt="">
        <div class="details">
          <h3>${data_filter.name}</h3>
          <p>${data_filter.desc}</p>
          <div class="price-quantity">
            <h2>$ ${data_filter.price} </h2>
            <div class="buttons">
              <i onclick="decrement(${data_filter.id})" class="bi bi-dash-lg"></i>
              <div id=${data_filter.id} class="quantity">
            
        </div>
              <i onclick="increment(${data_filter.id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>`
        console.log(elem);
        s.appendChild(elem)
      }else{
        console.log("no data");
      }
    }
   
  }
  function filter2(){
    let s=document.querySelector('#shop');
    s.innerHTML="";
    for(i=0;i<data.length;i++){
      var data_filter =data[i];
      console.log(data_filter);
      if(data_filter.name=="Moisturizing Cream" ){
        const elem = document.createElement("div");
        elem.innerHTML = `<div id=product-id-${data_filter.id} class="item">
        <img width="220" src=${data_filter.img} alt="">
        <div class="details">
          <h3>${data_filter.name}</h3>
          <p>${data_filter.desc}</p>
          <div class="price-quantity">
            <h2>$ ${data_filter.price} </h2>
            <div class="buttons">
              <i onclick="decrement(${data_filter.id})" class="bi bi-dash-lg"></i>
              <div id=${data_filter.id} class="quantity">
            
        </div>
              <i onclick="increment(${data_filter.id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>`
        console.log(elem);
        s.appendChild(elem)
      }else{
        console.log("no data");
      }
    }
   
  }
  function filter3(){
    let s=document.querySelector('#shop');
    s.innerHTML="";
    for(i=0;i<data.length;i++){
      var data_filter =data[i];
      console.log(data_filter);
      if(data_filter.name=="Serum"){
        const elem = document.createElement("div");
        elem.innerHTML = `<div id=product-id-${data_filter.id} class="item">
        <img width="220" src=${data_filter.img} alt="">
        <div class="details">
          <h3>${data_filter.name}</h3>
          <p>${data_filter.desc}</p>
          <div class="price-quantity">
            <h2>$ ${data_filter.price} </h2>
            <div class="buttons">
              <i onclick="decrement(${data_filter.id})" class="bi bi-dash-lg"></i>
              <div id=${data_filter.id} class="quantity">
            
        </div>
              <i onclick="increment(${data_filter.id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>`
        console.log(elem);
        s.appendChild(elem)
      }else{
        console.log("no data");
      }
    }
   
  }
  function filter4(){
    let s=document.querySelector('#shop');
    s.innerHTML="";
    for(i=0;i<data.length;i++){
      var data_filter =data[i];
      console.log(data_filter);
      if(data_filter.name=="Oil"){
        const elem = document.createElement("div");
        elem.innerHTML = `<div id=product-id-${data_filter.id} class="item">
        <img width="220" src=${data_filter.img} alt="">
        <div class="details">
          <h3>${data_filter.name}</h3>
          <p>${data_filter.desc}</p>
          <div class="price-quantity">
            <h2>$ ${data_filter.price} </h2>
            <div class="buttons">
              <i onclick="decrement(${data_filter.id})" class="bi bi-dash-lg"></i>
              <div id=${data_filter.id} class="quantity">
            
        </div>
              <i onclick="increment(${data_filter.id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>`
        console.log(elem);
        s.appendChild(elem)
      }else{
        console.log("no data");
      }
    }
   
  }