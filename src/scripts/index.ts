var icon = document.querySelector(".fas")
var loginButton = <HTMLButtonElement>document.getElementById("loginButton");
var password = <HTMLInputElement>document.getElementById("password");
var username = <HTMLInputElement>document.getElementById("username");
var errorMessage = <HTMLParagraphElement>document.getElementById("errorMessage");

icon.addEventListener('click',show)
loginButton.addEventListener('click',login)


function show(){
    
    // ========== Checking type of password ===========
    if(password.type === "password"){
      password.type = "text";
    }
    else {
      password.type = "password";
    }

  };


function login(){
    if(username.value!=""&&password.value!=""){
        window.location.href = 'Home.html';
    }
    else{
        errorMessage.textContent = "Please enter a Username and Password"
    }
}


  