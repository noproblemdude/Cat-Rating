import * as Leaflet from 'leaflet'
import {parkingSpots } from './parkingSpot';

const leafMap = <HTMLButtonElement>document.getElementById("map");
const loadButton = <HTMLButtonElement>document.getElementById("loadbutton");


loadButton.addEventListener('click',fetchParkingSpots);

function setMarkers(){

  const spots = new parkingSpots();

  for (let index = 0; index < spots.getSpotNumber(); index++) {
      const marker = Leaflet.marker([spots.getSpot(index).getLongitude(),spots.getSpot(index).getLatitude()]).addTo(map);
      let popupString = "<b>" + spots.getSpot(index).getAddress() + "</b>"
      popupString = popupString + "<br>Anzahl Scooter:" + spots.getSpot(index).getScooterNumber;
      marker.bindPopup(popupString).openPopup();
  }

}

async function fetchParkingSpots(){

    //const url = 'https://corsproxy.io/?' + encodeURIComponent('https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SCOOTERABSTELLOGD&srsName=EPSG:4326&outputFormat=json');

    const url = 'https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SCOOTERABSTELLOGD&srsName=EPSG:4326&outputFormat=json';
    const parkingsResponse = await fetch(url/*, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        'Host':'data.wien.gv.at',
        'Origin':'213.47.84.184'
      },
    }*/);
      
    console.log(parkingsResponse)
}


const map = Leaflet.map(leafMap).setView([48.2082, 16.3719], 13);

Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

