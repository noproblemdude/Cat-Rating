import { Rating, RatingsList } from "./rating";

const rateButton = <HTMLButtonElement>document.getElementById("ratebutton");
const generateButton = <HTMLButtonElement>document.getElementById("generatebutton");
const seeRatingsButton = <HTMLButtonElement>document.getElementById("seeRatingButton");
const nickName = <HTMLInputElement>document.getElementById("Nickname");
const rating = <HTMLInputElement>document.getElementById("Rating");
const email = <HTMLInputElement>document.getElementById("Email");
const message = <HTMLInputElement>document.getElementById("message");
const picDiv = <HTMLDivElement>document.getElementById("catpic");

rateButton.addEventListener('click',rate);
generateButton.addEventListener('click',generatePic);
seeRatingsButton.addEventListener('click',seeRatings);


const ratingsList = new RatingsList();
Object.assign(ratingsList,JSON.parse(sessionStorage.getItem("ratingsList")))
ratingsList.copyRatings(ratingsList.ratings)


sessionStorage.clear();

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
    const catImg= document.getElementById("catimg");
    if(catImg!=null){
        catImg.remove();
    }

    const imgElement = document.createElement("img");
    const pictureResponse = await (await fetch("https://api.thecatapi.com/v1/images/search?api_key=live_fY5kaLZT5mD5lSpviYYpTxXf4YyilhFVLnT9j75Rst466CsvWWmxUsUEfcuCtcDm")).json();

    imgElement.id = "catimg"
    imgElement.src = pictureResponse[0].url;
    imgElement.width = 700;
    
    picDiv.appendChild(imgElement);

}

function seeRatings(){
    sessionStorage.setItem("ratingsList",JSON.stringify(ratingsList))
    window.location.href = 'ratings.html';
}

function rateNewCat(){

    console.log(ratingsList);
    
    let newID = ratingsList.ratings.length;
    let newRating = new Rating(newID,nickName.value,rating.valueAsNumber,email.value);

    ratingsList.addTolist(newRating);

    nickName.value="";
    rating.value="";
    email.value="";
    generatePic();
}

generatePic()