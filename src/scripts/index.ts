const icon = document.querySelector(".fas")
const loginButton = <HTMLButtonElement>document.getElementById("loginButton");
const password = <HTMLInputElement>document.getElementById("password");
const username = <HTMLInputElement>document.getElementById("username");
const errorMessage = <HTMLParagraphElement>document.getElementById("errorMessage");

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

  }


function login(){
    if(username.value!=""&&password.value!=""){
        window.location.href = 'Home.html';
    }
    else{
        errorMessage.textContent = "Please enter a Username and Password"
    }
}


  