

import jsonParkingSpots from './SCOOTERABSTELLOGD.json';


export class parkingSpot{
    
    private longitude: number;
    private latitude: number;
    private address: string;
    private scooterNumber: number;

    constructor(longitude: number, latitude: number, address: string, scooterNumber: number){
        
        this.longitude = longitude;
        this.latitude = latitude;
        this.address = address;
        this.scooterNumber = scooterNumber;

    }

    getLongitude(){
        return this.longitude;
    }

    getLatitude(){
        return this.latitude;
    }

    getAddress(){
        return this.address;
    }

    getScooterNumber(){
        return this.scooterNumber;
    }

}

export class parkingSpots{
    private totalSpots: number;
    private spots: [parkingSpot];
    private timeStamp: string;

    constructor(){

            this.spots = [new parkingSpot(0,0,"das",113)]

            
            this.totalSpots = jsonParkingSpots.totalFeatures;
            this.timeStamp = jsonParkingSpots.timeStamp;
            

            for (let index = 0; index < jsonParkingSpots.totalFeatures; index++) {
                let num = 0;
                if(jsonParkingSpots.features[index].properties.ANZ_SCOOTER != null){
                    num = jsonParkingSpots.features[index].properties.ANZ_SCOOTER;
                }                

                this.spots[index] = new parkingSpot(jsonParkingSpots.features[index].geometry.coordinates[1],jsonParkingSpots.features[index].geometry.coordinates[0],jsonParkingSpots.features[index].properties.ADRESSE,num)

            }
            
    }
    
    getSpotNumber(){
        return this.totalSpots;
    }

    getTimestamp(){
        return this.timeStamp;
    }

    getSpot(index: number){
        return this.spots[index];
    }

}


function listParkings(){

    const spots = new parkingSpots()
    
    
    for(let i=0;i<spots.getSpotNumber();i++){

        const container = <HTMLDivElement>document.getElementById("parkings");

        const divElement = document.createElement("div");
        divElement.className = "parkingBox";

        const addressElement = document.createElement("h1");
        addressElement.textContent= spots.getSpot(i).getAddress();
        addressElement.className = "text"

        const coordinatesElement = document.createElement("p");
        coordinatesElement.textContent= "longitude: " + spots.getSpot(i).getLongitude() +" latitude: " + spots.getSpot(i).getLatitude();
        coordinatesElement.className = "text"
        
        const scootersElement = document.createElement("p");
        scootersElement.textContent= "Number of scooters in the parking: " + String(spots.getSpot(i).getScooterNumber());
        scootersElement.className = "text"

        divElement.appendChild(addressElement);
        divElement.appendChild(coordinatesElement);
        divElement.appendChild(scootersElement);
        container.appendChild(divElement);

    }
}

function backHome(){
    window.location.href = 'Home.html';
}


try {

    require('../styles/styles.css')

    if(<HTMLButtonElement>document.getElementById("backHomeButton") != null){
        const backhomebutton = <HTMLButtonElement>document.getElementById("backHomeButton");
        backhomebutton.addEventListener('click',backHome);
    }
    
    
    
    if(<HTMLDivElement>document.getElementById("parkings") != null){
        listParkings()
    }
    
} catch (error) {
    console.log("testing");
    
}


