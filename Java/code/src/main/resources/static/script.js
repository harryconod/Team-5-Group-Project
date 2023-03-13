/*function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item=> {
		item.classList.remove('active');
	})
	form.classList.add('active');
}*/
function switchForm(className,e){
    e.preventDefault();
    const allForm = document.querySelectorAll('form');
    const form=document.querySelector(`form.${className}`);
    
    allForm.forEach(item=>{
        item.classList.remove('active');
    })
    form.classList.add('active');
}
function forgetpswd(){
    let email=document.getElementById("forgetemail").value;
    if(email==""){
        alert("enter your email id");
    }
    else if(email=="divya@gmail.com"){
        alert("password reset link has been sent to registered email id");
    }
    else{
        alert("your email id not exist");
    }
}
var attempt=3;
function confirmlogin(event){
    event.preventDefault();
    var email=document.getElementById("loginemail").value;
    var password=document.getElementById("loginpassword").value;
    if(email==""||password==""){
        alert("Fields are empty");
    }
    else if(email=="divya@gmail.com" && password=="Divy@1998"){
     
                alert("login successful");
                
               window.location.reload("http://127.0.0.1:5500/Mainpage.html");
       
       
    }
    else{
        attempt--;
        
        alert("you have left "+attempt+" attempt");
        if(attempt == 0){
            document.getElementById("loginemail").disabled=true;
            document.getElementById("password").disable=true;
            document.getElementById("btn-submit").disable=true;
            return false;
        }
    }
}
  
function confirmreg(){
    var name=document.getElementById("registername").value;
   var email=document.getElementById("registeremail").value;
   var password=document.getElementById("password").value;
   var confirmpassword=document.getElementById("confirmpassword").value;
   if(name==""|| email==""|| password==""|| confirmpassword=="" ){
    alert("Filed are in empty");
   }
   
    else if(name=="divya"&& email=="divya@gmail.com"&& password=="Divy@1998" && confirmpassword=="Divy@1998" ){
        
        alert("login successful");
        window.location=location;
       
    }
    
    else{
        
        attempt--;
        if(password!= confirmpassword){
            alert("your password and confirm password are not same and \n you have left "+attempt+" attempt");
        }
       
        if(attempt == 0){
            document.getElementById("registeremail").disabled=true;
            document.getElementById("registerpassword").disable=true;
            document.getElementById("btn-submit").disable=true;
            return false;
        }
    }

}








const registerPassword = document.querySelector('form.register #password');
const registerConfirmPassword = document.querySelector('form.register #confirm-pass');

registerPassword.addEventListener('input', function () {
	registerConfirmPassword.pattern = `${this.value}`;
})
