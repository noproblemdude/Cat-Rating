import { Rating, RatingsList } from "./rating";
import * as Leaflet from 'leaflet'

const leafMap = <HTMLButtonElement>document.getElementById("map");
const rateButton = <HTMLButtonElement>document.getElementById("ratebutton");
const generateButton = <HTMLButtonElement>document.getElementById("generatebutton");
const seeRatingsButton = <HTMLButtonElement>document.getElementById("seeRatingButton");
const signOutButton = <HTMLButtonElement>document.getElementById("signoutbutton");
const nickName = <HTMLInputElement>document.getElementById("Nickname");
const rating = <HTMLInputElement>document.getElementById("Rating");
const email = <HTMLInputElement>document.getElementById("Email");
const message = <HTMLInputElement>document.getElementById("message");
const picDiv = <HTMLDivElement>document.getElementById("catpic");

rateButton.addEventListener('click',fetchParkingSpots);
generateButton.addEventListener('click',generatePic);
seeRatingsButton.addEventListener('click',seeRatings);
signOutButton.addEventListener('click',signout);


const ratingsList = new RatingsList();


Object.assign(ratingsList,JSON.parse(sessionStorage.getItem("ratingsList")))
ratingsList.copyRatings(ratingsList.ratings)


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
    sessionStorage.clear();
    sessionStorage.setItem("ratingsList",JSON.stringify(ratingsList))
    window.location.href = 'ratings.html';
}

function signout(){
    window.location.href = 'index.html';
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


async function fetchParkingSpots(){
    
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SCOOTERABSTELLOGD&srsName=EPSG:4326&outputFormat=json",false)
    xhttp.send()
    console.log(xhttp.responseText)

    const parkingsResponse = await fetch("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SCOOTERABSTELLOGD&srsName=EPSG:4326&outputFormat=json", {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
        }
      })
      
    console.log(parkingsResponse)
}


const map = Leaflet.map(leafMap).setView([51.505, -0.09], 13);

Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


generatePic()


