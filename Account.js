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
        // Email and password are correct
        alert('Link sent to your email id');
        document.getElementById('loginemail').value = "";
        //document.getElementById('loginpassword').value = "";
        //window.location.href = 'Mainpage.html'; // Redirect to home page
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


function confirmlogin(event) {
  event.preventDefault();
  let attempt = 3;
  const email = document.getElementById('loginemail').value;
  const password = document.getElementById('loginpassword').value;
  if(email=="" || password ==""){
    alert("enter the empty fileds");
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
        window.location.href = 'Mainpage.html'; // Redirect to home page
      } else {
        // Email or password is incorrect
        attempt--;
        alert(`Incorrect email or password. ${attempt} attempts left.`);
        if (attempt === 0) {
          // Disable login form after three failed attempts
          document.getElementById('loginemail').disabled = true;
          document.getElementById('loginpassword').disabled = true;
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


  

