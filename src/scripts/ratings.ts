import { Rating, RatingsList } from "./rating";

const ratingsList = new RatingsList();
Object.assign(ratingsList,JSON.parse(sessionStorage.getItem("ratingsList")))
console.log(ratingsList)
ratingsList.copyRatings(ratingsList.ratings)
console.log(ratingsList)
console.log(ratingsList.ratings[0].getid())


function listRatings(){

    for(let i=0;i<ratingsList.ratings.length;i++){

        const container = <HTMLDivElement>document.getElementById("ratings");

        const divElement = document.createElement("div");

        const nameElement = document.createElement("p");
        nameElement.textContent= ratingsList.ratings[i].getName();

        const scoreElement = document.createElement("p");
        scoreElement.textContent= ratingsList.ratings[i].getRating().toString();

        const emailElement = document.createElement("p");
        emailElement.textContent= ratingsList.ratings[i].getEmail();

        
        divElement.appendChild(nameElement);
        divElement.appendChild(scoreElement);
        divElement.appendChild(emailElement);
        container.appendChild(divElement);

    }
}


listRatings();

