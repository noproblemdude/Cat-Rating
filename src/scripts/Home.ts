require('../styles/styles.css')

import * as Leaflet from 'leaflet'
import {parkingSpots } from './parkingSpot';
import data from './SCOOTERABSTELLOGD.json';

const leafMap = <HTMLButtonElement>document.getElementById("map");
const loadButton = <HTMLButtonElement>document.getElementById("loadbutton");
const markersButton = <HTMLButtonElement>document.getElementById("markersbutton");
const signOutButton = <HTMLButtonElement>document.getElementById("signoutbutton");

loadButton.addEventListener('click',setMarkers);
markersButton.addEventListener('click',markersList);
signOutButton.addEventListener('click',signOut);

console.log(data.totalFeatures);

function setMarkers(){

  const spots = new parkingSpots();

  for (let index = 0; index < spots.getSpotNumber(); index++) {
      const marker = Leaflet.marker([spots.getSpot(index).getLongitude(),spots.getSpot(index).getLatitude()]).addTo(map);
      let popupString = "<b>" + spots.getSpot(index).getAddress() + "</b>"
      popupString = popupString + "<br>Anzahl Scooter:" + spots.getSpot(index).getScooterNumber();
      marker.bindPopup(popupString).openPopup();
  }

}

function markersList(){
  window.location.href = 'parkingSpot.html';
}

function signOut() {
  window.location.href = 'index.html';
}

const map = Leaflet.map(leafMap).setView([48.2082, 16.3719], 13);

Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


