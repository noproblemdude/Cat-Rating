import jsonParkingSpots from './SCOOTERABSTELLOGD.json';

const backhomebutton = <HTMLButtonElement>document.getElementById("backHomeButton");

if(backhomebutton != null){
    backhomebutton.addEventListener('click',backHome);
}

function backHome(){
    window.location.href = 'Home.html';
}


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

        const addressElement = document.createElement("h1");
        addressElement.textContent= spots.getSpot(i).getAddress();

        const coordinatesElement = document.createElement("p");
        coordinatesElement.textContent= "longitude: " + spots.getSpot(i).getLongitude() +" latitude: " + spots.getSpot(i).getLatitude();

        divElement.appendChild(addressElement);
        divElement.appendChild(coordinatesElement);
        container.appendChild(divElement);

    }
}

if(<HTMLDivElement>document.getElementById("parkings") != null){
    listParkings()
}

