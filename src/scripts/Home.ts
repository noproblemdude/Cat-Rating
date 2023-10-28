var rateButton = <HTMLButtonElement>document.getElementById("ratebutton");
var generateButton = <HTMLButtonElement>document.getElementById("generatebutton");
var nickName = <HTMLInputElement>document.getElementById("Nickname");
var rating = <HTMLInputElement>document.getElementById("Rating");
var email = <HTMLInputElement>document.getElementById("Email");
var message = <HTMLInputElement>document.getElementById("message");
let picDiv = <HTMLDivElement>document.getElementById("catpic");

rateButton.addEventListener('click',rate);
generateButton.addEventListener('click',generatePic);



function rate(){
    let validInput  = true;
    message.textContent = "";

    if(nickName.value==""){
        message.textContent = message.textContent + "enter a nickname ";
        validInput = false;
    }
    if(email.value==""){
        message.textContent = message.textContent + "enter an email ";
        validInput = false;
    }
    if(rating.value==""){
        message.textContent = message.textContent + "enter a rating ";
        validInput = false;
    }
    if(rating.valueAsNumber<0||rating.valueAsNumber>10){
        message.textContent = message.textContent + "the rating must be between 0 amd 10 ";
        validInput = false;
    }
    if(validInput == true){
        message.textContent = message.textContent + "The Cat has been rated! Rate another one!";
        rateNewCat();
    }

}

async function generatePic(){
    let catImg= document.getElementById("catimg");
    if(catImg!=null){
        catImg.remove();
    }

    let imgElement = document.createElement("img");
    let pictureResponse = await (await fetch("https://api.thecatapi.com/v1/images/search?api_key=live_fY5kaLZT5mD5lSpviYYpTxXf4YyilhFVLnT9j75Rst466CsvWWmxUsUEfcuCtcDm")).json();

    imgElement.id = "catimg"
    imgElement.src = pictureResponse[0].url;
    imgElement.width = 700;
    
    picDiv.appendChild(imgElement);

}

function rateNewCat(){
    nickName.value="";
    rating.value="";
    email.value="";
    generatePic();
}

generatePic()