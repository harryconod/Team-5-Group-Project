/**
 * 
 * Account page javascript , Create Account with name email and password
 * login with name and password , forget password form with emailId
 * 
 */


        
/**Switch login to create account  , create account to login, login to forget password */
function switchForm(className,e){
  e.preventDefault();
  const allForm = document.querySelectorAll('form');
  const form=document.querySelector(`form.${className}`);
  
  allForm.forEach(item=>{
      item.classList.remove('active');
  })
  form.classList.add('active');
}

/**
* Forget password
*/
function forgetpswd(){
  let attempt = 3;
  let email=document.getElementById("forgetemail").value;
  if(email==""){
      alert("enter your email id");
  }

  fetch(`http://localhost:3000/products?email=${email}`)
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
     
      alert('Link sent to your email id');
      document.getElementById('loginemail').value = "";
      
    } else {
      // Email or password is incorrect
      attempt--;
      alert(`Incorrect email or email doen't exist. you have ${attempt} attempts left.`);
      if (attempt === 0) {
        // Disable login form after three failed attempts
        document.getElementById('forgetemail').disabled = true;
       
        document.getElementById('btn-submit').disabled = true;
        alert('Maximum login attempts reached. Please try again later.');
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
}
/**
* LOGIN
*/
// Check if user is already logged in
if (localStorage.getItem('username')) {
const accountLink = document.getElementById('cart-account-link');
const logoutLink = document.createElement('a');
const name = localStorage.getItem('username');

accountLink.textContent = name;

logoutLink.href = '#';
logoutLink.textContent = 'Logout';
logoutLink.onclick = () => {
  localStorage.removeItem('username');
  accountLink.textContent = 'Account';
  accountLink.href = 'Account.html';
  logoutLink.remove();
};

accountLink.parentNode.insertBefore(logoutLink, accountLink.nextSibling);
}
let attempt1 = 3;
function confirmlogin(event) {
event.preventDefault();

const email = document.getElementById('loginemail').value;
const password = document.getElementById('loginpassword').value;
if (email=="" || password =="") {
  alert("enter the empty fields");
}

// Send a GET request to check if email and password are correct
fetch(`http://localhost:3000/products?email=${email}&password=${password}`)
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      // Email and password are correct
      alert('Login successful');
      document.getElementById('loginemail').value = "";
      document.getElementById('loginpassword').value = "";

      // Save user's name
      const name = data[0].name;
      const email = data[0].email;
      console.log(name);
      console.log(email);
      localStorage.setItem('username', name);
      localStorage.setItem('email', email);
      // Update navbar with user's name and logout link
      const accountLink = document.getElementById('cart-account-link');
      accountLink.textContent = name;

      // Check if logout link already exists
      const logoutLink = document.querySelector('#cart-account-link + a');
      if (!logoutLink) {
        // Create logout link
        const logoutLink = document.createElement('a');
        logoutLink.href = '#';
        logoutLink.textContent = 'Logout';
        logoutLink.onclick = () => {
          // Clear user's name and redirect to login page
          localStorage.removeItem('username');
          accountLink.textContent = 'Account';
          accountLink.href = 'Account.html';
          logoutLink.remove();
        };
        accountLink.parentNode.insertBefore(logoutLink, accountLink.nextSibling);
      }

      // Redirect to cart page
      window.location.href="newcart.html";
    } else {
      // Email or password is incorrect
      if(attempt1>0){
        attempt1--;
        alert(`Incorrect email or password. ${attempt1} attempts left.`);
      }
      
     
      if (attempt1 <= 0) {
        // Disable login form after three failed attempts
        document.getElementById('loginemail').disabled = true;
        document.getElementById('loginpassword').disabled = true;
         //document.getElementById('btn-submit').disabled = true;
        alert('Maximum login attempts reached. Please try again later.');
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}



/**
* CREATE ACCOUNT
*/

function confirmreg() {
  const name = document.getElementById('registername').value;
  const email = document.getElementById('registeremail').value;
  const password = document.getElementById('password').value;
  const confirmpassword = document.getElementById('confirmpassword').value;

  if (name === '' || email === '' || password === '' || confirmpassword === '') {
    alert('Please fill out all fields');
    return;
  }

  if (password !== confirmpassword) {
    alert('Passwords do not match');
    return;
  }

  // Send a GET request to check if email already exists
  fetch(`http://localhost:3000/products?email=${email}`)
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      // Email already exists in JSON data
      alert('User already exists');
    } else {
      // Email does not exist, send POST request to add new user
      const userData = {
        name: name,
        email: email,
        password: password
      };

      fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        alert("Account created");
        document.getElementById('registername').value = '';
        document.getElementById('registeremail').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmpassword').value = '';
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}





