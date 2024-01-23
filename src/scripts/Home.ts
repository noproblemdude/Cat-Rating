import * as Leaflet from 'leaflet'

const leafMap = <HTMLButtonElement>document.getElementById("map");
const loadButton = <HTMLButtonElement>document.getElementById("loadbutton");


loadButton.addEventListener('click',loadJson);

function loadJson(){
    
    console.log(jsonParkingSpots)
    const spots = jsonParkingSpots.features

    console.log(spots)

    console.log(spots[0].geometry.coordinates);
    console.log(spots[0].geometry.coordinates[0]);

    for (let index = 0; index < jsonParkingSpots.totalFeatures; index++) {
        const marker = Leaflet.marker([spots[index].geometry.coordinates[1],spots[index].geometry.coordinates[0]]).addTo(map);
        let popupString = "<b>" + spots[index].properties.ADRESSE + "</b>"
        if(spots[index].properties.ANZ_SCOOTER == null){
            popupString = popupString + "<br>Anzahl Scooter: 0"
        }else{
            popupString = popupString + "<br>Anzahl Scooter:" + spots[index].properties.ANZ_SCOOTER 
        }
        marker.bindPopup(popupString).openPopup();
    }
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


const map = Leaflet.map(leafMap).setView([48.2082, 16.3719], 13);

Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



const parkingSpots = `
{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147459",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.47502169,
            48.21332074
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147459,
          "ABSTELL_ID": 128176,
          "BEZIRK": 22,
          "ADRESSE": "Wulzendorfstraße 89",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147460",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.44977065,
            48.22038553
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147460,
          "ABSTELL_ID": 128177,
          "BEZIRK": 22,
          "ADRESSE": "Kaisermühlenstraße 26",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147461",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30765658,
            48.20197071
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147461,
          "ABSTELL_ID": 127255,
          "BEZIRK": 14,
          "ADRESSE": "Breitenseer Straße 31-33",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147462",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30767012,
            48.20200623
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147462,
          "ABSTELL_ID": 127256,
          "BEZIRK": 14,
          "ADRESSE": "Breitenseer Straße 31-33",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147463",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38621216,
            48.21810803
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147463,
          "ABSTELL_ID": 127257,
          "BEZIRK": 2,
          "ADRESSE": "Zirkusgasse 46-48",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147464",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38617771,
            48.21805975
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147464,
          "ABSTELL_ID": 127258,
          "BEZIRK": 2,
          "ADRESSE": "Zirkusgasse 46-48",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147465",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30598887,
            48.21236317
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147465,
          "ABSTELL_ID": 127259,
          "BEZIRK": 16,
          "ADRESSE": "Maroltingergasse 69-71",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 16,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147466",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30610295,
            48.21269757
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147466,
          "ABSTELL_ID": 127260,
          "BEZIRK": 16,
          "ADRESSE": "Maroltingergasse 69-71",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 16,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147467",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34499893,
            48.19989108
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147467,
          "ABSTELL_ID": 127261,
          "BEZIRK": 7,
          "ADRESSE": "Zieglergasse 23",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 9,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147468",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35406152,
            48.20393266
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147468,
          "ABSTELL_ID": 127262,
          "BEZIRK": 7,
          "ADRESSE": "Stiftgasse 37",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147471",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34342691,
            48.19138929
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147471,
          "ABSTELL_ID": 127265,
          "BEZIRK": 6,
          "ADRESSE": "Sonnenuhrgasse 3-5",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147472",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34461266,
            48.19242898
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147472,
          "ABSTELL_ID": 127266,
          "BEZIRK": 6,
          "ADRESSE": "Liniengasse 17-19",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 31,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147473",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34970324,
            48.21080959
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147473,
          "ABSTELL_ID": 127267,
          "BEZIRK": 8,
          "ADRESSE": "Jodok-Fink-Platz 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147474",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35055619,
            48.19160976
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147474,
          "ABSTELL_ID": 127268,
          "BEZIRK": 6,
          "ADRESSE": "Marchettigasse 3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147475",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38202896,
            48.26515925
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147475,
          "ABSTELL_ID": 127269,
          "BEZIRK": 21,
          "ADRESSE": "Ampèregasse 8",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147476",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33313254,
            48.21646414
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147476,
          "ABSTELL_ID": 127270,
          "BEZIRK": 17,
          "ADRESSE": "Geblergasse 56-58",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 26,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147477",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35022806,
            48.20181199
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147477,
          "ABSTELL_ID": 127271,
          "BEZIRK": 7,
          "ADRESSE": "Zollergasse 41",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147478",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.43163905,
            48.16584854
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147478,
          "ABSTELL_ID": 127272,
          "BEZIRK": 11,
          "ADRESSE": "Florian-Hedorfer-Straße 20",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147479",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.42388071,
            48.23760159
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147479,
          "ABSTELL_ID": 128526,
          "BEZIRK": 22,
          "ADRESSE": "Kratochwjlestraße  12",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147480",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.46238448,
            48.15449896
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147480,
          "ABSTELL_ID": 127273,
          "BEZIRK": 11,
          "ADRESSE": "Svetelskystraße 6",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 72,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147481",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33963399,
            48.2293922
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147481,
          "ABSTELL_ID": 127274,
          "BEZIRK": 18,
          "ADRESSE": "Haizingergasse 37",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 52,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147482",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33983067,
            48.22924213
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147482,
          "ABSTELL_ID": 127275,
          "BEZIRK": 18,
          "ADRESSE": "Haizingergasse 35",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 52,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147484",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34096203,
            48.22429077
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147484,
          "ABSTELL_ID": 127277,
          "BEZIRK": 18,
          "ADRESSE": "Schopenhauerstraße 44-46-48",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 52,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147485",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33987955,
            48.19870049
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147485,
          "ABSTELL_ID": 127278,
          "BEZIRK": 7,
          "ADRESSE": "Kenyongasse 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147486",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33986361,
            48.19874418
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147486,
          "ABSTELL_ID": 127279,
          "BEZIRK": 7,
          "ADRESSE": "Kenyongasse 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147487",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33272115,
            48.21060668
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147487,
          "ABSTELL_ID": 127280,
          "BEZIRK": 16,
          "ADRESSE": "Grundsteingasse 48-56",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147488",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33276232,
            48.2106022
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147488,
          "ABSTELL_ID": 127281,
          "BEZIRK": 16,
          "ADRESSE": "Grundsteingasse 48-56",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147489",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33916354,
            48.25590795
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147489,
          "ABSTELL_ID": 127282,
          "BEZIRK": 19,
          "ADRESSE": "Mannagettagasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147490",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33909784,
            48.25583582
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147490,
          "ABSTELL_ID": 127283,
          "BEZIRK": 19,
          "ADRESSE": "Mannagettagasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147493",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38386665,
            48.19799349
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147493,
          "ABSTELL_ID": 127286,
          "BEZIRK": 3,
          "ADRESSE": "Reisnerstraße 43",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147494",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39716469,
            48.20985781
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147494,
          "ABSTELL_ID": 127288,
          "BEZIRK": 2,
          "ADRESSE": "Josef-Gall-Gasse 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147495",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39749104,
            48.20990791
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147495,
          "ABSTELL_ID": 127289,
          "BEZIRK": 2,
          "ADRESSE": "Josef-Gall-Gasse 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147496",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34836595,
            48.22521942
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147496,
          "ABSTELL_ID": 128527,
          "BEZIRK": 18,
          "ADRESSE": "Währinger Straße 75",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147497",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30585877,
            48.1929349
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147497,
          "ABSTELL_ID": 128528,
          "BEZIRK": 14,
          "ADRESSE": "Diesterweggasse ggü. 36",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147498",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31471037,
            48.16602939
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147498,
          "ABSTELL_ID": 128529,
          "BEZIRK": 12,
          "ADRESSE": "Eckartsaugasse ggü. 5",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147499",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35643613,
            48.22512344
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147499,
          "ABSTELL_ID": 128530,
          "BEZIRK": 9,
          "ADRESSE": "Pfluggasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147500",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35908455,
            48.22906442
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147500,
          "ABSTELL_ID": 128531,
          "BEZIRK": 9,
          "ADRESSE": "Althanstraße 14",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147501",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31995491,
            48.18576336
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147501,
          "ABSTELL_ID": 128533,
          "BEZIRK": 13,
          "ADRESSE": "Grünbergstraße - Schönbrunner Brücke",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147502",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3166881,
            48.15007227
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147502,
          "ABSTELL_ID": 128534,
          "BEZIRK": 23,
          "ADRESSE": "Elisabeth-Bergner-Weg Höhe Erilaweg",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147503",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.28261209,
            48.13525339
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147503,
          "ABSTELL_ID": 128430,
          "BEZIRK": 23,
          "ADRESSE": "Liesinger Platz/ Lehmanngasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147504",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3303809,
            48.17467585
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147504,
          "ABSTELL_ID": 128431,
          "BEZIRK": 12,
          "ADRESSE": "Meidlinger Hauptstraße 79",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147505",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33120919,
            48.1812036
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147505,
          "ABSTELL_ID": 128433,
          "BEZIRK": 12,
          "ADRESSE": "Vivenotgasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147506",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31541409,
            48.17663896
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147506,
          "ABSTELL_ID": 128434,
          "BEZIRK": 12,
          "ADRESSE": "Hohenbergstraße 23",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147507",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40793727,
            48.21285707
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147507,
          "ABSTELL_ID": 128445,
          "BEZIRK": 2,
          "ADRESSE": "Südportalstraße 3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147508",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34404656,
            48.22633951
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147508,
          "ABSTELL_ID": 128446,
          "BEZIRK": 18,
          "ADRESSE": "Währinger Straße 97",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147509",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32214338,
            48.22113646
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147509,
          "ABSTELL_ID": 128447,
          "BEZIRK": 17,
          "ADRESSE": "Hernalser Hauptstraße 127",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147510",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35428944,
            48.22499433
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147510,
          "ABSTELL_ID": 128535,
          "BEZIRK": 9,
          "ADRESSE": "Sechsschimmelgasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147511",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30583337,
            48.19221667
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147511,
          "ABSTELL_ID": 128536,
          "BEZIRK": 14,
          "ADRESSE": "Diesterweggasse 34",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147512",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34953307,
            48.22623344
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147512,
          "ABSTELL_ID": 128538,
          "BEZIRK": 18,
          "ADRESSE": "Währinger Gürtel - Sechsschimmelgasse",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147513",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33539514,
            48.20883417
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147513,
          "ABSTELL_ID": 128540,
          "BEZIRK": 16,
          "ADRESSE": "Brunnengasse 32",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147515",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33928289,
            48.19106389
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147515,
          "ABSTELL_ID": 127609,
          "BEZIRK": 6,
          "ADRESSE": "Liniengasse  53",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 9,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147516",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37019186,
            48.2034158
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147516,
          "ABSTELL_ID": 128107,
          "BEZIRK": 1,
          "ADRESSE": "Kärntner Straße ggü. 51",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147517",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3068092,
            48.1981891
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147517,
          "ABSTELL_ID": 128105,
          "BEZIRK": 14,
          "ADRESSE": "Drechslergasse ggü. 44",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147518",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3603084,
            48.209934
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147518,
          "ABSTELL_ID": 128106,
          "BEZIRK": 1,
          "ADRESSE": "Universitätsring - Rathausplatz",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147519",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.26277179,
            48.13359564
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147519,
          "ABSTELL_ID": 128097,
          "BEZIRK": 23,
          "ADRESSE": "Ketzergasse 435-437",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147520",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35094715,
            48.19870394
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147520,
          "ABSTELL_ID": 128114,
          "BEZIRK": 7,
          "ADRESSE": "Mariahilfer Straße 62",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147521",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32978901,
            48.20277935
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147521,
          "ABSTELL_ID": 128099,
          "BEZIRK": 15,
          "ADRESSE": "Markgraf-Rüdiger-Straße ggü. 17",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147522",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3604673,
            48.20662595
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147522,
          "ABSTELL_ID": 128109,
          "BEZIRK": 1,
          "ADRESSE": "Dr.-Karl-Renner-Ring ggü. 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147523",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.28316175,
            48.13443603
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147523,
          "ABSTELL_ID": 128101,
          "BEZIRK": 23,
          "ADRESSE": "Franz-Parsche-Gasse ggü. 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147524",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34145898,
            48.19675509
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147524,
          "ABSTELL_ID": 128115,
          "BEZIRK": 7,
          "ADRESSE": "Kaiserstraße 5",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147525",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34580519,
            48.19748493
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147525,
          "ABSTELL_ID": 128103,
          "BEZIRK": 7,
          "ADRESSE": "Zieglergasse 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147526",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3607307,
            48.21175122
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147526,
          "ABSTELL_ID": 128116,
          "BEZIRK": 1,
          "ADRESSE": "Universitätsring ggü. 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147527",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.28841811,
            48.14715448
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147527,
          "ABSTELL_ID": 128112,
          "BEZIRK": 23,
          "ADRESSE": "Gatterederstraße ggü. 26A",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147529",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37112558,
            48.20220391
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147529,
          "ABSTELL_ID": 128117,
          "BEZIRK": 1,
          "ADRESSE": "Kärntner Ring 5-7",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147530",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36122811,
            48.21467988
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147530,
          "ABSTELL_ID": 128118,
          "BEZIRK": 9,
          "ADRESSE": "Währinger Straße ggü. 2-4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147531",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.347004,
            48.21540263
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147531,
          "ABSTELL_ID": 128119,
          "BEZIRK": 9,
          "ADRESSE": "Alser Straße 28",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147533",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37744623,
            48.2156907
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147533,
          "ABSTELL_ID": 127571,
          "BEZIRK": 2,
          "ADRESSE": "Kleine Sperlgasse 2A - Friedrich-Kiesler-Schule",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147534",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.41575168,
            48.18053293
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147534,
          "ABSTELL_ID": 127797,
          "BEZIRK": 11,
          "ADRESSE": "Fuchsröhrenstraße 32",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147535",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35252174,
            48.20535516
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147535,
          "ABSTELL_ID": 128130,
          "BEZIRK": 7,
          "ADRESSE": "Neustiftgasse 22",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147536",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34319792,
            48.19659834
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147536,
          "ABSTELL_ID": 128131,
          "BEZIRK": 7,
          "ADRESSE": "Mariahilfer Straße 112",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147537",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.42053919,
            48.21105102
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147537,
          "ABSTELL_ID": 128121,
          "BEZIRK": 2,
          "ADRESSE": "Vorgartenstraße ggü. 210",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147538",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35786524,
            48.20489434
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147538,
          "ABSTELL_ID": 128122,
          "BEZIRK": 7,
          "ADRESSE": "Burggasse / Museumsplatz 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147539",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3769858,
            48.20331966
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147539,
          "ABSTELL_ID": 128123,
          "BEZIRK": 1,
          "ADRESSE": "Parkring ggü. 20",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147540",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38045158,
            48.20671232
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147540,
          "ABSTELL_ID": 128124,
          "BEZIRK": 1,
          "ADRESSE": "Parkring ggü. 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147541",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.28206678,
            48.16794455
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147541,
          "ABSTELL_ID": 128125,
          "BEZIRK": 13,
          "ADRESSE": "Hermesstraße ggü. 1B",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147542",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33704728,
            48.19505901
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147542,
          "ABSTELL_ID": 128126,
          "BEZIRK": 15,
          "ADRESSE": "Mariahilfer Straße 136",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147543",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32439185,
            48.16147312
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147543,
          "ABSTELL_ID": 128127,
          "BEZIRK": 12,
          "ADRESSE": "Am Schöpfwerk (U-Bahn Station)",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147544",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34337466,
            48.19650231
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147544,
          "ABSTELL_ID": 128128,
          "BEZIRK": 6,
          "ADRESSE": "Mariahilfer Straße 113",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147545",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36330737,
            48.19515801
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147545,
          "ABSTELL_ID": 128129,
          "BEZIRK": 4,
          "ADRESSE": "Margaretenstraße 35",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147546",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37561509,
            48.17911073
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147546,
          "ABSTELL_ID": 128541,
          "BEZIRK": 10,
          "ADRESSE": "Keplerplatz ggü. 9",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147547",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37472253,
            48.18405365
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147547,
          "ABSTELL_ID": 128542,
          "BEZIRK": 10,
          "ADRESSE": "Johannitergasse 5",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147548",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32815609,
            48.21553363
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147548,
          "ABSTELL_ID": 128543,
          "BEZIRK": 17,
          "ADRESSE": "Weißgasse 25-27",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147549",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30437531,
            48.1713329
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147549,
          "ABSTELL_ID": 128546,
          "BEZIRK": 13,
          "ADRESSE": "Am Fasangarten 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147550",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33783158,
            48.19147885
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147550,
          "ABSTELL_ID": 128547,
          "BEZIRK": 6,
          "ADRESSE": "Mariahilfer Gürtel ggü. 6",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147551",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36676819,
            48.19955072
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147551,
          "ABSTELL_ID": 128548,
          "BEZIRK": 4,
          "ADRESSE": "Operngasse 11",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147552",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37874307,
            48.17275301
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147552,
          "ABSTELL_ID": 128549,
          "BEZIRK": 10,
          "ADRESSE": "Favoritenstraße 134-136",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147553",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33218944,
            48.20072606
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147553,
          "ABSTELL_ID": 128550,
          "BEZIRK": 15,
          "ADRESSE": "Hütteldorfer Straße ggü. 27",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147554",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33572744,
            48.20387159
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147554,
          "ABSTELL_ID": 128551,
          "BEZIRK": 15,
          "ADRESSE": "Wurzbachgasse 21",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147555",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.41572026,
            48.18048005
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147555,
          "ABSTELL_ID": 127682,
          "BEZIRK": 11,
          "ADRESSE": "Fuchsröhrenstraße 32",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147556",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.42362258,
            48.22606843
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147556,
          "ABSTELL_ID": 128179,
          "BEZIRK": 22,
          "ADRESSE": "Schüttauplatz ggü. 22",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147557",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30246951,
            48.1877895
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147557,
          "ABSTELL_ID": 128143,
          "BEZIRK": 13,
          "ADRESSE": "Eduard-Klein-Gasse ggü. 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147558",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38588004,
            48.21566326
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147558,
          "ABSTELL_ID": 128132,
          "BEZIRK": 2,
          "ADRESSE": "Praterstraße 43",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147559",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34946232,
            48.19461232
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147559,
          "ABSTELL_ID": 128134,
          "BEZIRK": 6,
          "ADRESSE": "Worellstraße 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147560",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36810649,
            48.19971557
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147560,
          "ABSTELL_ID": 128135,
          "BEZIRK": 4,
          "ADRESSE": "Karlsplatz / Treitlstraße ggü. 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147561",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.26181479,
            48.19806391
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147561,
          "ABSTELL_ID": 128136,
          "BEZIRK": 14,
          "ADRESSE": "Keißlergasse 18",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147562",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.49831189,
            48.22462277
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147562,
          "ABSTELL_ID": 128137,
          "BEZIRK": 22,
          "ADRESSE": "Maria-Tusch-Straße 6",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147563",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35281109,
            48.204162
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147563,
          "ABSTELL_ID": 128138,
          "BEZIRK": 7,
          "ADRESSE": "Burggasse 31-33",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147564",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36095359,
            48.20223784
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147564,
          "ABSTELL_ID": 128139,
          "BEZIRK": 7,
          "ADRESSE": "Platz der Menschenrechte",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147565",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34626639,
            48.19722954
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147565,
          "ABSTELL_ID": 128140,
          "BEZIRK": 7,
          "ADRESSE": "Mariahilfer Straße 90",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147566",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35230618,
            48.20213122
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147566,
          "ABSTELL_ID": 128141,
          "BEZIRK": 7,
          "ADRESSE": "Siebensterngasse 29",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147567",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3668957,
            48.2096149
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147567,
          "ABSTELL_ID": 128142,
          "BEZIRK": 1,
          "ADRESSE": "Wallnerstraße 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147568",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35314181,
            48.21946745
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147568,
          "ABSTELL_ID": 128553,
          "BEZIRK": 9,
          "ADRESSE": "Sensengasse 2A",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147569",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34128509,
            48.20964127
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147569,
          "ABSTELL_ID": 127687,
          "BEZIRK": 8,
          "ADRESSE": "PFeilgasse 42",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147570",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39865471,
            48.25612149
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147570,
          "ABSTELL_ID": 128554,
          "BEZIRK": 21,
          "ADRESSE": "Franz-Jonas-Platz 12",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147571",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37720789,
            48.23946682
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147571,
          "ABSTELL_ID": 128555,
          "BEZIRK": 20,
          "ADRESSE": "Höchstädtplatz - FH Technikum",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147572",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36578948,
            48.1971926
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147572,
          "ABSTELL_ID": 128556,
          "BEZIRK": 4,
          "ADRESSE": "Margaretenstraße - Operngasse ggü. 36",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147573",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37871766,
            48.23651193
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147573,
          "ABSTELL_ID": 128557,
          "BEZIRK": 20,
          "ADRESSE": "Hellwagstraße 6-8",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147574",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38060886,
            48.23755415
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147574,
          "ABSTELL_ID": 128558,
          "BEZIRK": 20,
          "ADRESSE": "Hellwagstraße 15",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147575",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33373322,
            48.22981626
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147575,
          "ABSTELL_ID": 127602,
          "BEZIRK": 18,
          "ADRESSE": "Köhlergasse 9",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147576",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36000422,
            48.19677811
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147576,
          "ABSTELL_ID": 128419,
          "BEZIRK": 4,
          "ADRESSE": "Rechte Wienzeile 39",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147577",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35199144,
            48.19898551
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147577,
          "ABSTELL_ID": 128154,
          "BEZIRK": 6,
          "ADRESSE": "Mariahilfer Straße 61",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147578",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35116436,
            48.21314525
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147578,
          "ABSTELL_ID": 128144,
          "BEZIRK": 8,
          "ADRESSE": "Lange Gasse 66",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147579",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38067511,
            48.21572995
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147579,
          "ABSTELL_ID": 128145,
          "BEZIRK": 2,
          "ADRESSE": "Schmelzgasse 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147580",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37221605,
            48.21593712
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147580,
          "ABSTELL_ID": 128147,
          "BEZIRK": 1,
          "ADRESSE": "Franz-Josefs-Kai ggü. 49",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147581",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37130896,
            48.19720283
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147581,
          "ABSTELL_ID": 128148,
          "BEZIRK": 4,
          "ADRESSE": "Gußhausstraße 14",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147582",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32612625,
            48.21973667
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147582,
          "ABSTELL_ID": 128149,
          "BEZIRK": 17,
          "ADRESSE": "Hernalser Hauptstraße 104-106",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147583",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36090218,
            48.20219031
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147583,
          "ABSTELL_ID": 128150,
          "BEZIRK": 7,
          "ADRESSE": "Mariahilfer Straße - Platz der Menschenrechte 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147584",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34142729,
            48.19739356
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147584,
          "ABSTELL_ID": 128151,
          "BEZIRK": 7,
          "ADRESSE": "Kaiserstraße 10",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147585",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37319125,
            48.21071713
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147585,
          "ABSTELL_ID": 128152,
          "BEZIRK": 1,
          "ADRESSE": "Hoher Markt 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147586",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39008896,
            48.2028427
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147586,
          "ABSTELL_ID": 128153,
          "BEZIRK": 3,
          "ADRESSE": "Landstraßer Hauptstraße 48",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147587",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34244379,
            48.18839911
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147587,
          "ABSTELL_ID": 128385,
          "BEZIRK": 5,
          "ADRESSE": "Margaretengürtelbrücke ",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147588",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34659007,
            48.21219958
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147588,
          "ABSTELL_ID": 128920,
          "BEZIRK": 8,
          "ADRESSE": "Florianigasse 45",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147591",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3371195,
            48.23713221
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147591,
          "ABSTELL_ID": 128628,
          "BEZIRK": 19,
          "ADRESSE": "Peter-Jordan-Straße 62",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147592",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3151925,
            48.19002138
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147592,
          "ABSTELL_ID": 128631,
          "BEZIRK": 14,
          "ADRESSE": "Schloßallee - Mariahilfer Straße",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147593",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.28686658,
            48.19080451
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147593,
          "ABSTELL_ID": 128652,
          "BEZIRK": 13,
          "ADRESSE": "Hietzinger Kai 111",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147594",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37954179,
            48.19137485
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147594,
          "ABSTELL_ID": 128872,
          "BEZIRK": 3,
          "ADRESSE": "Prinz-Eugen-Straße 27",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147595",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37773361,
            48.16813693
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147595,
          "ABSTELL_ID": 128899,
          "BEZIRK": 10,
          "ADRESSE": "Wirerstraße 15A",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147597",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.49838302,
            48.22460873
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147597,
          "ABSTELL_ID": 128950,
          "BEZIRK": 22,
          "ADRESSE": "Maria-Tusch-Straße 6",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147598",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.26082918,
            48.19777307
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147598,
          "ABSTELL_ID": 128970,
          "BEZIRK": 14,
          "ADRESSE": "Keißlergasse - Bahnhof Hütteldorf",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147599",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40844764,
            48.19096949
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147599,
          "ABSTELL_ID": 128814,
          "BEZIRK": 3,
          "ADRESSE": "Baumgasse 83",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147600",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.41714856,
            48.18536382
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147600,
          "ABSTELL_ID": 128815,
          "BEZIRK": 3,
          "ADRESSE": "Rosa-Fischer-Gasse 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147601",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37656853,
            48.19939314
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147601,
          "ABSTELL_ID": 128818,
          "BEZIRK": 3,
          "ADRESSE": "Am Heumarkt 39",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147602",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39827573,
            48.19311697
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147602,
          "ABSTELL_ID": 128832,
          "BEZIRK": 3,
          "ADRESSE": "Landstraßer Hauptstraße 146",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147605",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.42052944,
            48.265015
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147605,
          "ABSTELL_ID": 128987,
          "BEZIRK": 21,
          "ADRESSE": "Leopoldine-Padaurek-Straße 9",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147606",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37599831,
            48.1845579
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147606,
          "ABSTELL_ID": 128993,
          "BEZIRK": 10,
          "ADRESSE": "Am Hauptbahnhof 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147607",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37803687,
            48.18557141
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147607,
          "ABSTELL_ID": 128995,
          "BEZIRK": 10,
          "ADRESSE": "Gertrude-Fröhlich-Sandner-Straße 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147608",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.46208989,
            48.24548474
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147608,
          "ABSTELL_ID": 128845,
          "BEZIRK": 22,
          "ADRESSE": "Clara-Zetkin-Gasse - Gewerbepark Stadlau",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147609",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3339133,
            48.18428261
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147609,
          "ABSTELL_ID": 128658,
          "BEZIRK": 12,
          "ADRESSE": "Schönbrunner Straße - Längenfeldgasse 225",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147610",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40951388,
            48.21776061
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147610,
          "ABSTELL_ID": 128692,
          "BEZIRK": 2,
          "ADRESSE": "Ausstellungsstraße 50",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147611",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38937962,
            48.19972989
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147611,
          "ABSTELL_ID": 128714,
          "BEZIRK": 3,
          "ADRESSE": "Sebastianplatz 3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147613",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40030744,
            48.19715327
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147613,
          "ABSTELL_ID": 128919,
          "BEZIRK": 3,
          "ADRESSE": "Rüdengasse 20",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147615",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31631827,
            48.16716555
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147615,
          "ABSTELL_ID": 128895,
          "BEZIRK": 12,
          "ADRESSE": "Altmannsdorfer Straße 61-63",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147618",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37557546,
            48.18562952
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147618,
          "ABSTELL_ID": 128994,
          "BEZIRK": 10,
          "ADRESSE": "Wiedner Gürtel 13",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147621",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36948025,
            48.23533552
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147621,
          "ABSTELL_ID": 128696,
          "BEZIRK": 20,
          "ADRESSE": "Leipziger Straße 21",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147624",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38168669,
            48.18770974
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147624,
          "ABSTELL_ID": 128654,
          "BEZIRK": 3,
          "ADRESSE": "Arsenalstraße (parkseitig)/ Bhf. Quartier Belvedere",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147625",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38651071,
            48.24006778
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147625,
          "ABSTELL_ID": 128655,
          "BEZIRK": 20,
          "ADRESSE": "Wehlistraße 57",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147634",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33075948,
            48.18021347
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147634,
          "ABSTELL_ID": 128941,
          "BEZIRK": 12,
          "ADRESSE": "Reschgasse 20",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147635",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36305889,
            48.21401494
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147635,
          "ABSTELL_ID": 128645,
          "BEZIRK": 1,
          "ADRESSE": "Schottenring 2-6",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147636",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.41153675,
            48.17951499
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147636,
          "ABSTELL_ID": 128649,
          "BEZIRK": 11,
          "ADRESSE": "Rinnböckstraße 54",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147637",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.41985938,
            48.18568721
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147637,
          "ABSTELL_ID": 128650,
          "BEZIRK": 11,
          "ADRESSE": "Paragonstraße 5",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147638",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38260437,
            48.20868238
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147638,
          "ABSTELL_ID": 128738,
          "BEZIRK": 1,
          "ADRESSE": "Oskar-Kokoschka-Platz - Stubenring",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147639",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38085784,
            48.17786489
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147639,
          "ABSTELL_ID": 128740,
          "BEZIRK": 10,
          "ADRESSE": "Gudrunstraße 121",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147643",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3749006,
            48.19820228
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147643,
          "ABSTELL_ID": 128739,
          "BEZIRK": 10,
          "ADRESSE": "Schwarzenbergplatz 11",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147646",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32737276,
            48.17625899
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147646,
          "ABSTELL_ID": 128758,
          "BEZIRK": 12,
          "ADRESSE": "Spittelbreitengasse 14",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147647",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40571807,
            48.21777521
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147647,
          "ABSTELL_ID": 128708,
          "BEZIRK": 2,
          "ADRESSE": "Ausstellungsstraße 44",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147648",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40461176,
            48.2150192
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147648,
          "ABSTELL_ID": 128711,
          "BEZIRK": 2,
          "ADRESSE": "Freudplatz 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147649",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32076605,
            48.18858662
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147649,
          "ABSTELL_ID": 128663,
          "BEZIRK": 15,
          "ADRESSE": "Siebeneichengasse 17",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147652",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38047826,
            48.1690621
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147652,
          "ABSTELL_ID": 128642,
          "BEZIRK": 10,
          "ADRESSE": "Favoritenstraße 159",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147653",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.42040945,
            48.170368
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147653,
          "ABSTELL_ID": 128643,
          "BEZIRK": 11,
          "ADRESSE": "Simmeringer Hauptstraße 151",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147654",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.44216782,
            48.15465779
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147654,
          "ABSTELL_ID": 128644,
          "BEZIRK": 11,
          "ADRESSE": "Simmeringer Hauptstraße 341",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147655",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38308944,
            48.22164604
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147655,
          "ABSTELL_ID": 128646,
          "BEZIRK": 2,
          "ADRESSE": "Josefinengasse 12",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147656",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.41521193,
            48.17534871
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147656,
          "ABSTELL_ID": 128624,
          "BEZIRK": 11,
          "ADRESSE": "Simmeringer Hauptstraße 80-82",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147657",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36753399,
            48.25953011
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147657,
          "ABSTELL_ID": 128629,
          "BEZIRK": 19,
          "ADRESSE": "Heiligenstädter Straße  172",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147658",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.42104041,
            48.16935384
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147658,
          "ABSTELL_ID": 128630,
          "BEZIRK": 11,
          "ADRESSE": "Simmeringer Hauptstraße 128",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147659",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34290997,
            48.18731088
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147659,
          "ABSTELL_ID": 128637,
          "BEZIRK": 5,
          "ADRESSE": "Schönbrunner Straße",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147661",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40466519,
            48.18860076
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147661,
          "ABSTELL_ID": 129014,
          "BEZIRK": 3,
          "ADRESSE": "Maria-Jacobi-Gasse 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147662",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37908997,
            48.20226716
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147662,
          "ABSTELL_ID": 128816,
          "BEZIRK": 3,
          "ADRESSE": "Johannesgasse ggü. 28",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147663",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33768089,
            48.19790468
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147663,
          "ABSTELL_ID": 128827,
          "BEZIRK": 15,
          "ADRESSE": "Felberstraße 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147664",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.44034348,
            48.22711479
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147664,
          "ABSTELL_ID": 128846,
          "BEZIRK": 22,
          "ADRESSE": "Industriestraße 65",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147201",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38779726,
            48.24625758
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147201,
          "ABSTELL_ID": 127109,
          "BEZIRK": 21,
          "ADRESSE": "Donauinselplatz",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 39,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147202",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37427354,
            48.23153304
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147202,
          "ABSTELL_ID": 127110,
          "BEZIRK": 20,
          "ADRESSE": "Greiseneckergasse 29-31",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 31,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147203",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35024174,
            48.20800094
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147203,
          "ABSTELL_ID": 127111,
          "BEZIRK": 8,
          "ADRESSE": "Zeltgasse 3-5",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147204",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36233524,
            48.2211336
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147204,
          "ABSTELL_ID": 127112,
          "BEZIRK": 9,
          "ADRESSE": "Grünentorgasse 11",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147205",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34021785,
            48.17799286
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147205,
          "ABSTELL_ID": 127113,
          "BEZIRK": 12,
          "ADRESSE": "Karl-Löwe-Gasse 20",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 23,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147206",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40508823,
            48.22045856
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147206,
          "ABSTELL_ID": 127114,
          "BEZIRK": 2,
          "ADRESSE": "Schönngasse 2-4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147207",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35019335,
            48.15550442
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147207,
          "ABSTELL_ID": 127115,
          "BEZIRK": 10,
          "ADRESSE": "Tesarekplatz 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147208",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38382103,
            48.20057558
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147208,
          "ABSTELL_ID": 127116,
          "BEZIRK": 3,
          "ADRESSE": "Reisnerstraße 25",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 9,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147209",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35016943,
            48.15546921
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147209,
          "ABSTELL_ID": 127117,
          "BEZIRK": 10,
          "ADRESSE": "Tesarekplatz 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147210",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33928445,
            48.22544659
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147210,
          "ABSTELL_ID": 127118,
          "BEZIRK": 18,
          "ADRESSE": "Schulgasse 58A",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147211",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33932753,
            48.22543935
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147211,
          "ABSTELL_ID": 127119,
          "BEZIRK": 18,
          "ADRESSE": "Schulgasse 58A",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147212",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34223255,
            48.22058279
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147212,
          "ABSTELL_ID": 127120,
          "BEZIRK": 18,
          "ADRESSE": "Klettenhofergasse 3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 9,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147213",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34245586,
            48.22054248
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147213,
          "ABSTELL_ID": 127121,
          "BEZIRK": 18,
          "ADRESSE": "Klettenhofergasse 3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 9,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147214",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39040731,
            48.2351682
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147214,
          "ABSTELL_ID": 127122,
          "BEZIRK": 20,
          "ADRESSE": "Engerthstraße 134",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147215",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39043481,
            48.23514489
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147215,
          "ABSTELL_ID": 127123,
          "BEZIRK": 20,
          "ADRESSE": "Engerthstraße 134",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147216",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39046231,
            48.23512158
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147216,
          "ABSTELL_ID": 127124,
          "BEZIRK": 20,
          "ADRESSE": "Engerthstraße 134",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147217",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34402029,
            48.21245589
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147217,
          "ABSTELL_ID": 127125,
          "BEZIRK": 8,
          "ADRESSE": "Albertgasse 38",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147218",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30302861,
            48.19662268
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147218,
          "ABSTELL_ID": 127126,
          "BEZIRK": 14,
          "ADRESSE": "Märzstraße 178-180",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 9,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147219",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32093932,
            48.20749394
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147219,
          "ABSTELL_ID": 127128,
          "BEZIRK": 16,
          "ADRESSE": "Brüßlgasse 16",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147220",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31572347,
            48.224874
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147220,
          "ABSTELL_ID": 127129,
          "BEZIRK": 17,
          "ADRESSE": "Halirschgasse 25",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147221",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32290139,
            48.21982834
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147221,
          "ABSTELL_ID": 127130,
          "BEZIRK": 17,
          "ADRESSE": "Kulmgasse 35",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147222",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33552636,
            48.19893565
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147222,
          "ABSTELL_ID": 127131,
          "BEZIRK": 15,
          "ADRESSE": "Goldschlagstraße 14-16",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147223",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33445646,
            48.1943913
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147223,
          "ABSTELL_ID": 127132,
          "BEZIRK": 15,
          "ADRESSE": "Gasgasse 13",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147224",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33467804,
            48.19468815
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147224,
          "ABSTELL_ID": 127133,
          "BEZIRK": 15,
          "ADRESSE": "Gasgasse 11",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147225",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35227865,
            48.20412964
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147225,
          "ABSTELL_ID": 127134,
          "BEZIRK": 7,
          "ADRESSE": "Burggasse 37",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147226",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32182834,
            48.21945502
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147226,
          "ABSTELL_ID": 127135,
          "BEZIRK": 17,
          "ADRESSE": "Wichtelgasse 67",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147227",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.29031741,
            48.19157246
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147227,
          "ABSTELL_ID": 127136,
          "BEZIRK": 14,
          "ADRESSE": "Astgasse 3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147228",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3130471,
            48.18817974
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147228,
          "ABSTELL_ID": 128582,
          "BEZIRK": 14,
          "ADRESSE": "Hadikgasse - Schloßallee 12",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147229",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3177083,
            48.19027874
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147229,
          "ABSTELL_ID": 128421,
          "BEZIRK": 14,
          "ADRESSE": "Mariahilfer Straße  212",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147230",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33820779,
            48.19288304
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147230,
          "ABSTELL_ID": 128423,
          "BEZIRK": 15,
          "ADRESSE": "Mariahilfer Gürtel - Maria vom Siege",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147231",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.29480358,
            48.20737161
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147231,
          "ABSTELL_ID": 128466,
          "BEZIRK": 16,
          "ADRESSE": "Flötzersteig 55",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147232",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35128379,
            48.20198441
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147232,
          "ABSTELL_ID": 128155,
          "BEZIRK": 7,
          "ADRESSE": "Mondscheingasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147233",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35068981,
            48.20115373
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147233,
          "ABSTELL_ID": 128156,
          "BEZIRK": 7,
          "ADRESSE": "Mondscheingasse 12",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147234",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38223323,
            48.21116048
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147234,
          "ABSTELL_ID": 128157,
          "BEZIRK": 1,
          "ADRESSE": "Julius-Raab-Platz 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147235",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38480384,
            48.2340949
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147235,
          "ABSTELL_ID": 128188,
          "BEZIRK": 20,
          "ADRESSE": "Traisengasse 6",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147236",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40044116,
            48.22304982
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147236,
          "ABSTELL_ID": 128189,
          "BEZIRK": 2,
          "ADRESSE": "Radingerstraße 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147237",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.46590739,
            48.15423409
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147237,
          "ABSTELL_ID": 128191,
          "BEZIRK": 11,
          "ADRESSE": "Svetelskystraße 11",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147238",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40716812,
            48.17493212
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147238,
          "ABSTELL_ID": 128192,
          "BEZIRK": 11,
          "ADRESSE": "Geiselbergstraße ggü. 50 /Hauffgasse neben 30",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147239",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.41514283,
            48.19059528
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147239,
          "ABSTELL_ID": 128193,
          "BEZIRK": 3,
          "ADRESSE": "Erdbergstraße ggü. 202",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147240",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.25534947,
            48.20280513
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147240,
          "ABSTELL_ID": 128496,
          "BEZIRK": 14,
          "ADRESSE": "Bujattigasse ggü. 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147241",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39575176,
            48.20538644
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147241,
          "ABSTELL_ID": 128196,
          "BEZIRK": 3,
          "ADRESSE": "Kundmanngasse 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147242",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3868087,
            48.193983
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147242,
          "ABSTELL_ID": 128195,
          "BEZIRK": 3,
          "ADRESSE": "Obere Bahngasse 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147244",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31648834,
            48.20355848
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147244,
          "ABSTELL_ID": 128415,
          "BEZIRK": 15,
          "ADRESSE": "Possingergasse 11",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147245",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35964784,
            48.19206407
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147245,
          "ABSTELL_ID": 128416,
          "BEZIRK": 5,
          "ADRESSE": "Margaretenstraße 69-71-73",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147246",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31984801,
            48.19885823
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147246,
          "ABSTELL_ID": 128596,
          "BEZIRK": 15,
          "ADRESSE": "Hütteldorfer Straße 81B",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147247",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32616762,
            48.18434282
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147247,
          "ABSTELL_ID": 128597,
          "BEZIRK": 15,
          "ADRESSE": "Pillergasse 24",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147248",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31412256,
            48.18687608
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147248,
          "ABSTELL_ID": 128598,
          "BEZIRK": 13,
          "ADRESSE": "Schönbrunner Schloßbrücke",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147249",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40061938,
            48.2175629
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147249,
          "ABSTELL_ID": 128599,
          "BEZIRK": 2,
          "ADRESSE": "Präuscherplatz/ Kratky-Baschik-Weg",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147250",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3948918,
            48.21784416
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147250,
          "ABSTELL_ID": 128600,
          "BEZIRK": 2,
          "ADRESSE": "Ausstellungsstraße - Straße des Ersten Mai",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147251",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39161333,
            48.21943662
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147251,
          "ABSTELL_ID": 128601,
          "BEZIRK": 2,
          "ADRESSE": "Praterstern 3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147252",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.29034875,
            48.19156807
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147252,
          "ABSTELL_ID": 127137,
          "BEZIRK": 14,
          "ADRESSE": "Astgasse 3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147253",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36931498,
            48.2114001
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147253,
          "ABSTELL_ID": 127138,
          "BEZIRK": 1,
          "ADRESSE": "Parisergasse 3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147254",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37874325,
            48.15606139
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147254,
          "ABSTELL_ID": 127139,
          "BEZIRK": 10,
          "ADRESSE": "Holeyplatz 3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147255",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36557365,
            48.19414176
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147255,
          "ABSTELL_ID": 127140,
          "BEZIRK": 4,
          "ADRESSE": "Kleinschmidgasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147256",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36520062,
            48.19443751
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147256,
          "ABSTELL_ID": 127141,
          "BEZIRK": 4,
          "ADRESSE": "Schäffergasse 3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147257",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31896629,
            48.22162506
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147257,
          "ABSTELL_ID": 127143,
          "BEZIRK": 17,
          "ADRESSE": "Redtenbachergasse 79",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147258",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3850597,
            48.22220831
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147258,
          "ABSTELL_ID": 127144,
          "BEZIRK": 2,
          "ADRESSE": "Darwingasse 14",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147259",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32585715,
            48.19613733
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147259,
          "ABSTELL_ID": 127145,
          "BEZIRK": 15,
          "ADRESSE": "Goldschlagstraße 57A",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147260",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36336795,
            48.22447207
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147260,
          "ABSTELL_ID": 127146,
          "BEZIRK": 9,
          "ADRESSE": "Glasergasse 8",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147261",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30640352,
            48.20079829
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147261,
          "ABSTELL_ID": 127147,
          "BEZIRK": 14,
          "ADRESSE": "Spallartgasse 18",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147262",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3821196,
            48.2409048
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147262,
          "ABSTELL_ID": 127148,
          "BEZIRK": 20,
          "ADRESSE": "Vorgartenstraße 42",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147263",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32795488,
            48.20992654
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147263,
          "ABSTELL_ID": 127149,
          "BEZIRK": 16,
          "ADRESSE": "Richard-Wagner-Platz 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147264",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39739874,
            48.19446902
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147264,
          "ABSTELL_ID": 127150,
          "BEZIRK": 3,
          "ADRESSE": "Landstraßer Hauptstraße 137A",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147265",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.29961714,
            48.18814316
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147265,
          "ABSTELL_ID": 127151,
          "BEZIRK": 13,
          "ADRESSE": "Dommayergasse 12",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147266",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38074248,
            48.14988796
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147266,
          "ABSTELL_ID": 127152,
          "BEZIRK": 10,
          "ADRESSE": "Stockholmer Platz 18",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147267",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34400542,
            48.20949449
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147267,
          "ABSTELL_ID": 127153,
          "BEZIRK": 8,
          "ADRESSE": "Albertgasse 18-22",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147268",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36143671,
            48.18970353
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147268,
          "ABSTELL_ID": 128201,
          "BEZIRK": 5,
          "ADRESSE": "Mittersteig 26",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147269",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36121967,
            48.1996141
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147269,
          "ABSTELL_ID": 128203,
          "BEZIRK": 6,
          "ADRESSE": "Lehargasse 17",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147270",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34314459,
            48.20203176
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147270,
          "ABSTELL_ID": 128204,
          "BEZIRK": 7,
          "ADRESSE": "Schottenfeldgasse 49",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147272",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31524912,
            48.22322123
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147272,
          "ABSTELL_ID": 128209,
          "BEZIRK": 17,
          "ADRESSE": "Heigerleinstraße ggü. 84-86",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147273",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34122832,
            48.20965485
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147273,
          "ABSTELL_ID": 127648,
          "BEZIRK": 8,
          "ADRESSE": "Pfeilgasse 42",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 36,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147274",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35108945,
            48.1971567
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147274,
          "ABSTELL_ID": 128244,
          "BEZIRK": 6,
          "ADRESSE": "Amerlingstraße 6",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147275",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33834046,
            48.19729413
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147275,
          "ABSTELL_ID": 128245,
          "BEZIRK": 15,
          "ADRESSE": "Europaplatz ggü. 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147276",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3548062,
            48.19796114
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147276,
          "ABSTELL_ID": 128247,
          "BEZIRK": 6,
          "ADRESSE": "Windmühlgasse - Fritz-Grünbaum-Platz ggü. 32",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147277",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36438627,
            48.21175934
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147277,
          "ABSTELL_ID": 128248,
          "BEZIRK": 1,
          "ADRESSE": "Freyung 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147278",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35754094,
            48.19635124
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147278,
          "ABSTELL_ID": 128249,
          "BEZIRK": 5,
          "ADRESSE": "Falcostiege",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147279",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33440622,
            48.22115695
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147279,
          "ABSTELL_ID": 128250,
          "BEZIRK": 17,
          "ADRESSE": "Dornerplatz 12",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147280",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30973772,
            48.20525141
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147280,
          "ABSTELL_ID": 128251,
          "BEZIRK": 16,
          "ADRESSE": "Kendlerstraße 40",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147281",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33430182,
            48.19341976
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147281,
          "ABSTELL_ID": 128252,
          "BEZIRK": 15,
          "ADRESSE": "Mariahilfer Straße 161",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147282",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3633795,
            48.2144985
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147282,
          "ABSTELL_ID": 128253,
          "BEZIRK": 1,
          "ADRESSE": "Schottenring ggü. 5",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147283",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32794285,
            48.20989687
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147283,
          "ABSTELL_ID": 128254,
          "BEZIRK": 16,
          "ADRESSE": "Richard-Wagner-Platz ggü. 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147284",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38216878,
            48.21947213
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147284,
          "ABSTELL_ID": 128257,
          "BEZIRK": 2,
          "ADRESSE": "Novaragasse 8-10",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147285",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36197788,
            48.20556321
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147285,
          "ABSTELL_ID": 128259,
          "BEZIRK": 1,
          "ADRESSE": "Heldenplatz Heldentor",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147286",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37299401,
            48.20921002
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147286,
          "ABSTELL_ID": 128260,
          "BEZIRK": 1,
          "ADRESSE": "Rotenturmstraße 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147287",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37066597,
            48.19879355
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147287,
          "ABSTELL_ID": 128261,
          "BEZIRK": 4,
          "ADRESSE": "Karlsplatz 13",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147288",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31103549,
            48.2001575
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147288,
          "ABSTELL_ID": 128263,
          "BEZIRK": 14,
          "ADRESSE": "Breitenseer Straße ggü. 18",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147289",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39247219,
            48.21959323
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147289,
          "ABSTELL_ID": 128602,
          "BEZIRK": 2,
          "ADRESSE": "Anitta-Müller-Cohen-Platz/  Praterstern",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147290",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32972599,
            48.18383199
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147290,
          "ABSTELL_ID": 128605,
          "BEZIRK": 15,
          "ADRESSE": "Lobkowitzbrücke",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147291",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38541628,
            48.21826692
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147291,
          "ABSTELL_ID": 127154,
          "BEZIRK": 2,
          "ADRESSE": "Blumauergasse 21",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147294",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37426761,
            48.24866058
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147294,
          "ABSTELL_ID": 127157,
          "BEZIRK": 20,
          "ADRESSE": "Robert-Blum-Gasse 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147295",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.2982284,
            48.19759227
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147295,
          "ABSTELL_ID": 127158,
          "BEZIRK": 14,
          "ADRESSE": "Hütteldorfer Straße 130C",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147296",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35115427,
            48.1970768
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147296,
          "ABSTELL_ID": 127159,
          "BEZIRK": 6,
          "ADRESSE": "Amerlingstraße 6",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147297",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33264322,
            48.21208632
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147297,
          "ABSTELL_ID": 127160,
          "BEZIRK": 16,
          "ADRESSE": "Gaullachergasse 49-51",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147298",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33285825,
            48.21206274
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147298,
          "ABSTELL_ID": 127161,
          "BEZIRK": 16,
          "ADRESSE": "Gaullachergasse 49-51",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147299",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3385733,
            48.18529213
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147299,
          "ABSTELL_ID": 127162,
          "BEZIRK": 12,
          "ADRESSE": "Haebergasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147300",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40427168,
            48.22015674
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147300,
          "ABSTELL_ID": 127163,
          "BEZIRK": 2,
          "ADRESSE": "Feuerbachstraße 1-3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147301",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.29198371,
            48.23263413
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147301,
          "ABSTELL_ID": 127164,
          "BEZIRK": 17,
          "ADRESSE": "Dornbacher Straße 111",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147302",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40429127,
            48.22014131
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147302,
          "ABSTELL_ID": 127165,
          "BEZIRK": 2,
          "ADRESSE": "Feuerbachstraße 1-3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147303",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32820685,
            48.22908587
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147303,
          "ABSTELL_ID": 127168,
          "BEZIRK": 18,
          "ADRESSE": "Scheidlstraße 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 9,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147304",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3281381,
            48.21569322
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147304,
          "ABSTELL_ID": 127169,
          "BEZIRK": 17,
          "ADRESSE": "Parhamerplatz 5",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147306",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33582186,
            48.21465545
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147306,
          "ABSTELL_ID": 128211,
          "BEZIRK": 16,
          "ADRESSE": "Ottakringer Straße 31",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147307",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30874442,
            48.20380784
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147307,
          "ABSTELL_ID": 128212,
          "BEZIRK": 16,
          "ADRESSE": "Steinbruchstraße 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147308",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32672979,
            48.19091118
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147308,
          "ABSTELL_ID": 128213,
          "BEZIRK": 15,
          "ADRESSE": "Schwendergasse 31",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147309",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.27463355,
            48.19221969
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147309,
          "ABSTELL_ID": 128214,
          "BEZIRK": 13,
          "ADRESSE": "Hietzinger Kai 169-171",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147310",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30979746,
            48.1297633
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147310,
          "ABSTELL_ID": 128217,
          "BEZIRK": 23,
          "ADRESSE": "Porschestraße ggü. 21-23",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147311",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33089794,
            48.1802131
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147311,
          "ABSTELL_ID": 128220,
          "BEZIRK": 12,
          "ADRESSE": "Reschgasse 20",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147312",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34594741,
            48.18381464
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147312,
          "ABSTELL_ID": 128221,
          "BEZIRK": 5,
          "ADRESSE": "Arbeitergasse/Gaudenzdorfer Gürtel",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147314",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36107018,
            48.20182842
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147314,
          "ABSTELL_ID": 128265,
          "BEZIRK": 6,
          "ADRESSE": "Rahlstiege / Rahlgasse 8",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147315",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37340638,
            48.18653199
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147315,
          "ABSTELL_ID": 128400,
          "BEZIRK": 4,
          "ADRESSE": "Südtiroler Platz  2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147316",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34337779,
            48.16905039
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147316,
          "ABSTELL_ID": 128401,
          "BEZIRK": 10,
          "ADRESSE": "Carl-Appel-Straße  9",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147317",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30320838,
            48.16555672
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147317,
          "ABSTELL_ID": 127845,
          "BEZIRK": 12,
          "ADRESSE": "Hermann-Broch-Gasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147320",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38520025,
            48.2188046
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147320,
          "ABSTELL_ID": 127173,
          "BEZIRK": 2,
          "ADRESSE": "Novaragasse 28",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147321",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38955071,
            48.19107049
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147321,
          "ABSTELL_ID": 127174,
          "BEZIRK": 3,
          "ADRESSE": "Kleistgasse 12",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147322",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3901066,
            48.21029478
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147322,
          "ABSTELL_ID": 127176,
          "BEZIRK": 3,
          "ADRESSE": "Kolonitzgasse 15",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147323",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33469163,
            48.19930565
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147323,
          "ABSTELL_ID": 127177,
          "BEZIRK": 15,
          "ADRESSE": "Zinckgasse 16",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147324",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36125085,
            48.18258614
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147324,
          "ABSTELL_ID": 127179,
          "BEZIRK": 5,
          "ADRESSE": "Gassergasse 46",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 9,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147325",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36142263,
            48.182646
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147325,
          "ABSTELL_ID": 127180,
          "BEZIRK": 5,
          "ADRESSE": "Gassergasse 44",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 9,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147326",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36896271,
            48.19929507
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147326,
          "ABSTELL_ID": 127181,
          "BEZIRK": 4,
          "ADRESSE": "Karlsplatz 14",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147327",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36891168,
            48.19930906
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147327,
          "ABSTELL_ID": 127182,
          "BEZIRK": 4,
          "ADRESSE": "Karlsplatz 14",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147328",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.44398632,
            48.24287155
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147328,
          "ABSTELL_ID": 127183,
          "BEZIRK": 22,
          "ADRESSE": "Natorpgasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147329",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36902941,
            48.19925394
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147329,
          "ABSTELL_ID": 127184,
          "BEZIRK": 4,
          "ADRESSE": "Karlsplatz 14",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147330",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.44401818,
            48.24292114
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147330,
          "ABSTELL_ID": 127185,
          "BEZIRK": 22,
          "ADRESSE": "Natorpgasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147331",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36409597,
            48.18956394
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147331,
          "ABSTELL_ID": 127186,
          "BEZIRK": 4,
          "ADRESSE": "Phorusgasse 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147332",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36406393,
            48.18959092
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147332,
          "ABSTELL_ID": 127187,
          "BEZIRK": 4,
          "ADRESSE": "Phorusgasse 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147333",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35529284,
            48.17610055
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147333,
          "ABSTELL_ID": 128223,
          "BEZIRK": 10,
          "ADRESSE": "Kundratstraße 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147334",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38469334,
            48.17845234
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147334,
          "ABSTELL_ID": 128224,
          "BEZIRK": 10,
          "ADRESSE": "Hlawkagasse 6",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147335",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37219242,
            48.17349653
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147335,
          "ABSTELL_ID": 128225,
          "BEZIRK": 10,
          "ADRESSE": "Arthaberplatz 17",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147336",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35478996,
            48.16850497
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147336,
          "ABSTELL_ID": 128226,
          "BEZIRK": 10,
          "ADRESSE": "Windtenstraße 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147337",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34831385,
            48.15434266
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147337,
          "ABSTELL_ID": 128227,
          "BEZIRK": 10,
          "ADRESSE": "Otto-Probst-Straße 20",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147338",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38391753,
            48.16091698
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147338,
          "ABSTELL_ID": 128228,
          "BEZIRK": 10,
          "ADRESSE": "Favoritenstraße ggü. 220",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147339",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38626542,
            48.16704672
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147339,
          "ABSTELL_ID": 128229,
          "BEZIRK": 10,
          "ADRESSE": "Absberggasse ggü. 53",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147340",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36795639,
            48.24850433
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147340,
          "ABSTELL_ID": 128230,
          "BEZIRK": 19,
          "ADRESSE": "Leopold-Ungar-Platz",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147341",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38967639,
            48.21103253
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147341,
          "ABSTELL_ID": 128233,
          "BEZIRK": 3,
          "ADRESSE": "Radetzkystraße 17",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147342",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33537621,
            48.17547208
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147342,
          "ABSTELL_ID": 128427,
          "BEZIRK": 12,
          "ADRESSE": "Eichenstraße 48",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147343",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32535845,
            48.2127603
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147343,
          "ABSTELL_ID": 128428,
          "BEZIRK": 16,
          "ADRESSE": "Ottakringer Platz ggü. 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147344",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33853622,
            48.22470106
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147344,
          "ABSTELL_ID": 128429,
          "BEZIRK": 18,
          "ADRESSE": "Leitermayergasse 46",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147345",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30846194,
            48.22622031
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147345,
          "ABSTELL_ID": 128448,
          "BEZIRK": 17,
          "ADRESSE": "Hernalser Hauptstraße 230",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147346",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31864075,
            48.21413736
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147346,
          "ABSTELL_ID": 128450,
          "BEZIRK": 16,
          "ADRESSE": "Familienplatz ggü. 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147347",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35664523,
            48.22039216
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147347,
          "ABSTELL_ID": 128426,
          "BEZIRK": 9,
          "ADRESSE": "Ehrenhaft-Steindler-Platz",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147348",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36462975,
            48.18248723
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147348,
          "ABSTELL_ID": 128444,
          "BEZIRK": 5,
          "ADRESSE": "Landgutgasse - Margaretengürtel",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147349",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31210121,
            48.21123355
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147349,
          "ABSTELL_ID": 128449,
          "BEZIRK": 16,
          "ADRESSE": "Hasnerstraße ggü. 124B",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147350",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3698316,
            48.25215879
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147350,
          "ABSTELL_ID": 128451,
          "BEZIRK": 19,
          "ADRESSE": "Muthgasse 62",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147351",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40445751,
            48.13760525
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147351,
          "ABSTELL_ID": 127188,
          "BEZIRK": 10,
          "ADRESSE": "Ober-Laaer Platz 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147352",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36456386,
            48.18848649
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147352,
          "ABSTELL_ID": 127189,
          "BEZIRK": 4,
          "ADRESSE": "Wiedner Hauptstraße 82",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147353",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36449178,
            48.18827595
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147353,
          "ABSTELL_ID": 127190,
          "BEZIRK": 4,
          "ADRESSE": "Wiedner Hauptstraße 82",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147354",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30274848,
            48.1965701
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147354,
          "ABSTELL_ID": 128355,
          "BEZIRK": 14,
          "ADRESSE": "Märzstraße 180",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 46,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147355",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38571206,
            48.21869579
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147355,
          "ABSTELL_ID": 127204,
          "BEZIRK": 2,
          "ADRESSE": "Novaragasse 30",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147356",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34155509,
            48.21083302
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147356,
          "ABSTELL_ID": 127205,
          "BEZIRK": 8,
          "ADRESSE": "Josefstädter Straße 93-97",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147357",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32566697,
            48.22168727
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147357,
          "ABSTELL_ID": 128459,
          "BEZIRK": 17,
          "ADRESSE": "Gschwandnergasse ggü. 60",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147358",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.40207679,
            48.19291965
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147358,
          "ABSTELL_ID": 128460,
          "BEZIRK": 3,
          "ADRESSE": "Paulusplatz 9-11",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 9,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147359",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.28051805,
            48.19753435
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147359,
          "ABSTELL_ID": 128512,
          "BEZIRK": 14,
          "ADRESSE": "Hütteldorfer Straße 293",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147360",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3485846,
            48.1896435
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147360,
          "ABSTELL_ID": 128514,
          "BEZIRK": 6,
          "ADRESSE": "Brückengasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147361",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30612506,
            48.22043796
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147361,
          "ABSTELL_ID": 128515,
          "BEZIRK": 16,
          "ADRESSE": "Nietzscheplatz ggü. 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147362",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34264286,
            48.22105223
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147362,
          "ABSTELL_ID": 128517,
          "BEZIRK": 18,
          "ADRESSE": "Antonigasse ggü. 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147363",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.41126875,
            48.17896882
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147363,
          "ABSTELL_ID": 128623,
          "BEZIRK": 11,
          "ADRESSE": "Simmeringer Hauptstraße 48",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147364",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38890371,
            48.19159104
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147364,
          "ABSTELL_ID": 127206,
          "BEZIRK": 3,
          "ADRESSE": "Hegergasse 20",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147365",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.42099964,
            48.22824481
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147365,
          "ABSTELL_ID": 127207,
          "BEZIRK": 22,
          "ADRESSE": "Schödlbergergasse 20",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147366",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32104453,
            48.18860466
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147366,
          "ABSTELL_ID": 127208,
          "BEZIRK": 15,
          "ADRESSE": "Siebeneichengasse 15",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147367",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36853956,
            48.18457961
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147367,
          "ABSTELL_ID": 127209,
          "BEZIRK": 4,
          "ADRESSE": "Wiedner Gürtel 68",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 36,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147368",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34085029,
            48.19870203
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147368,
          "ABSTELL_ID": 127210,
          "BEZIRK": 7,
          "ADRESSE": "Stollgasse 8A",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147369",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32091672,
            48.16259737
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147369,
          "ABSTELL_ID": 127211,
          "BEZIRK": 12,
          "ADRESSE": "Hetzendorfer Straße 11",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147370",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33139989,
            48.18562111
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147370,
          "ABSTELL_ID": 127212,
          "BEZIRK": 15,
          "ADRESSE": "Ortnergasse 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 36,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147371",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34401619,
            48.2095831
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147371,
          "ABSTELL_ID": 127213,
          "BEZIRK": 8,
          "ADRESSE": "Albertgasse 18-22",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147372",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.27918329,
            48.14080527
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147372,
          "ABSTELL_ID": 127214,
          "BEZIRK": 23,
          "ADRESSE": "Anton-Krieger-Gasse 25",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 12,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147373",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39895829,
            48.19672861
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147373,
          "ABSTELL_ID": 127215,
          "BEZIRK": 3,
          "ADRESSE": "Lustgasse 13",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 9,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147374",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.47277128,
            48.24618765
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147374,
          "ABSTELL_ID": 127216,
          "BEZIRK": 22,
          "ADRESSE": "Pastinakweg 10",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 16,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147375",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.47282171,
            48.24623695
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147375,
          "ABSTELL_ID": 127217,
          "BEZIRK": 22,
          "ADRESSE": "Pastinakweg 10",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147376",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.28866253,
            48.18627481
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147376,
          "ABSTELL_ID": 127218,
          "BEZIRK": 13,
          "ADRESSE": "Fichtnergasse 15",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147377",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.28867786,
            48.18630266
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147377,
          "ABSTELL_ID": 127219,
          "BEZIRK": 13,
          "ADRESSE": "Fichtnergasse 15",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147378",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32596462,
            48.1815485
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147378,
          "ABSTELL_ID": 127220,
          "BEZIRK": 12,
          "ADRESSE": "Rosasgasse 1-3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147379",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3439144,
            48.21038567
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147379,
          "ABSTELL_ID": 128234,
          "BEZIRK": 8,
          "ADRESSE": "Albertgasse 25",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147380",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38456098,
            48.2419177
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147380,
          "ABSTELL_ID": 128237,
          "BEZIRK": 20,
          "ADRESSE": "Maria-Restituta-Platz",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147381",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36625689,
            48.21914088
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147381,
          "ABSTELL_ID": 128238,
          "BEZIRK": 9,
          "ADRESSE": "Berggasse 34",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147382",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34385513,
            48.18841472
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147382,
          "ABSTELL_ID": 128239,
          "BEZIRK": 5,
          "ADRESSE": "Wackenroderbrücke",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147383",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31992873,
            48.21779438
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147383,
          "ABSTELL_ID": 128480,
          "BEZIRK": 16,
          "ADRESSE": "Wattgasse 45",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147384",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35008116,
            48.21495092
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147384,
          "ABSTELL_ID": 128486,
          "BEZIRK": 8,
          "ADRESSE": "Alser Straße 25",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147385",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37922096,
            48.21162346
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147385,
          "ABSTELL_ID": 128494,
          "BEZIRK": 1,
          "ADRESSE": "Franz-Josefs-Kai - Schwedenbrücke",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147386",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33923713,
            48.2123215
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147386,
          "ABSTELL_ID": 128495,
          "BEZIRK": 17,
          "ADRESSE": "Hernalser Gürtel ggü. 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147387",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.21197928,
            48.21069266
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147387,
          "ABSTELL_ID": 128499,
          "BEZIRK": 14,
          "ADRESSE": "Herzmanskystraße 14",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147388",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3179369,
            48.19782814
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147388,
          "ABSTELL_ID": 128500,
          "BEZIRK": 15,
          "ADRESSE": "Meiselstraße 26",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147389",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33005291,
            48.19892206
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147389,
          "ABSTELL_ID": 128501,
          "BEZIRK": 15,
          "ADRESSE": "Pouthongasse 13",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147390",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37169499,
            48.23006611
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147390,
          "ABSTELL_ID": 128577,
          "BEZIRK": 20,
          "ADRESSE": "Wallensteinstraße 34",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147391",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30670657,
            48.20113452
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147391,
          "ABSTELL_ID": 128318,
          "BEZIRK": 14,
          "ADRESSE": "Muthsamgasse",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147393",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35888532,
            48.234047
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147393,
          "ABSTELL_ID": 128350,
          "BEZIRK": 9,
          "ADRESSE": "Bahnhof Spittelau",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147394",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34153074,
            48.21653175
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147394,
          "ABSTELL_ID": 128351,
          "BEZIRK": 17,
          "ADRESSE": "Hernalser Gürtel ggü. 43",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147439",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33891092,
            48.20271722
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147439,
          "ABSTELL_ID": 127240,
          "BEZIRK": 7,
          "ADRESSE": "Kandlgasse 39-43",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147440",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30600727,
            48.21241746
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147440,
          "ABSTELL_ID": 127241,
          "BEZIRK": 16,
          "ADRESSE": "Maroltingergasse 69-71",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 8,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147441",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30608458,
            48.21264335
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147441,
          "ABSTELL_ID": 127242,
          "BEZIRK": 16,
          "ADRESSE": "Maroltingergasse 69-71",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 8,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147442",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33898526,
            48.22454454
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147442,
          "ABSTELL_ID": 127243,
          "BEZIRK": 18,
          "ADRESSE": "Schopenhauerstraße 49",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147443",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33893439,
            48.22456649
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147443,
          "ABSTELL_ID": 127244,
          "BEZIRK": 18,
          "ADRESSE": "Schopenhauerstraße 49",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147444",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33882921,
            48.22461201
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147444,
          "ABSTELL_ID": 127245,
          "BEZIRK": 18,
          "ADRESSE": "Schopenhauerstraße 49",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147445",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33872746,
            48.22465592
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147445,
          "ABSTELL_ID": 127246,
          "BEZIRK": 18,
          "ADRESSE": "Schopenhauerstraße 49",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147446",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33877833,
            48.22463396
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147446,
          "ABSTELL_ID": 127247,
          "BEZIRK": 18,
          "ADRESSE": "Schopenhauerstraße 49",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147447",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37808986,
            48.20662883
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147447,
          "ABSTELL_ID": 127248,
          "BEZIRK": 1,
          "ADRESSE": "Stubenbastei 5",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147448",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37807319,
            48.20663642
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147448,
          "ABSTELL_ID": 127249,
          "BEZIRK": 1,
          "ADRESSE": "Stubenbastei 5",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147449",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34447689,
            48.24045176
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147449,
          "ABSTELL_ID": 127250,
          "BEZIRK": 19,
          "ADRESSE": "Krottenbachstraße 11",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147450",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34456018,
            48.24045496
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147450,
          "ABSTELL_ID": 127251,
          "BEZIRK": 19,
          "ADRESSE": "Krottenbachstraße 11",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147454",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33534897,
            48.21799213
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147454,
          "ABSTELL_ID": 128522,
          "BEZIRK": 17,
          "ADRESSE": "Bergsteiggasse 31-33",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147456",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.44738711,
            48.27190696
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147456,
          "ABSTELL_ID": 128171,
          "BEZIRK": 21,
          "ADRESSE": "Kürschnergasse 9",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147457",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.43400708,
            48.24387913
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147457,
          "ABSTELL_ID": 128173,
          "BEZIRK": 22,
          "ADRESSE": "Dr.-Adolf-Schärf-Platz ggü. 8",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147395",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.27516363,
            48.20320731
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147395,
          "ABSTELL_ID": 128497,
          "BEZIRK": 14,
          "ADRESSE": "Flötzersteig 179",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147396",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.27908982,
            48.20396219
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147396,
          "ABSTELL_ID": 128498,
          "BEZIRK": 14,
          "ADRESSE": "Flötzersteig Höhe Waidhausenstraße",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147397",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32746159,
            48.19764616
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147397,
          "ABSTELL_ID": 128502,
          "BEZIRK": 15,
          "ADRESSE": "Stättermayergasse 21",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147398",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30729816,
            48.20076804
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147398,
          "ABSTELL_ID": 128505,
          "BEZIRK": 14,
          "ADRESSE": "Spallartgasse ggü. 17",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147399",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32568812,
            48.18156025
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147399,
          "ABSTELL_ID": 127221,
          "BEZIRK": 12,
          "ADRESSE": "Rosasgasse 1-3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147400",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32644999,
            48.18152787
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147400,
          "ABSTELL_ID": 127222,
          "BEZIRK": 12,
          "ADRESSE": "Rosasgasse 1-3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147401",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32672418,
            48.18151602
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147401,
          "ABSTELL_ID": 127223,
          "BEZIRK": 12,
          "ADRESSE": "Rosasgasse 1-3",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147402",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38957254,
            48.23447034
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147402,
          "ABSTELL_ID": 127226,
          "BEZIRK": 20,
          "ADRESSE": "Vorgartenstraße 95-97",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147403",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38954516,
            48.23449371
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147403,
          "ABSTELL_ID": 127227,
          "BEZIRK": 20,
          "ADRESSE": "Vorgartenstraße 95-97",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147404",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38959992,
            48.23444697
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147404,
          "ABSTELL_ID": 127228,
          "BEZIRK": 20,
          "ADRESSE": "Vorgartenstraße 95-97",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147405",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32469796,
            48.23382641
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147405,
          "ABSTELL_ID": 127229,
          "BEZIRK": 18,
          "ADRESSE": "Bischof-Faber-Platz 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147406",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.42096547,
            48.22827024
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147406,
          "ABSTELL_ID": 127230,
          "BEZIRK": 22,
          "ADRESSE": "Schödlbergergasse 20",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147407",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32750625,
            48.17640536
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147407,
          "ABSTELL_ID": 127231,
          "BEZIRK": 12,
          "ADRESSE": "Erlgasse 32-34",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147408",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34124995,
            48.20598236
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147408,
          "ABSTELL_ID": 127232,
          "BEZIRK": 7,
          "ADRESSE": "Neustiftgasse 100",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147409",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36158483,
            48.20158187
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147409,
          "ABSTELL_ID": 127233,
          "BEZIRK": 6,
          "ADRESSE": "Rahlgasse 4",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147411",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35467461,
            48.18860096
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147411,
          "ABSTELL_ID": 127235,
          "BEZIRK": 5,
          "ADRESSE": "Pannaschgasse 6",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 26,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147412",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.38387098,
            48.19804973
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147412,
          "ABSTELL_ID": 127236,
          "BEZIRK": 3,
          "ADRESSE": "Reisnerstraße 43",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 18,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147413",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36516094,
            48.22297545
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147413,
          "ABSTELL_ID": 128287,
          "BEZIRK": 9,
          "ADRESSE": "Hahngasse 35",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147414",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33389378,
            48.18479925
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147414,
          "ABSTELL_ID": 128365,
          "BEZIRK": 15,
          "ADRESSE": "Linke Wienzeile 224",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147415",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.30550845,
            48.19839102
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147415,
          "ABSTELL_ID": 128504,
          "BEZIRK": 14,
          "ADRESSE": "Missindorfstraße 41",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147416",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.27213015,
            48.1988763
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147416,
          "ABSTELL_ID": 128506,
          "BEZIRK": 14,
          "ADRESSE": "Hütteldorfer Straße ggü. 280",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147417",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.22219896,
            48.2100703
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147417,
          "ABSTELL_ID": 128507,
          "BEZIRK": 14,
          "ADRESSE": "Pevetzgasse ggü. 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147418",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.37351095,
            48.21794754
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147418,
          "ABSTELL_ID": 128509,
          "BEZIRK": 2,
          "ADRESSE": "Herminengasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147419",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.31219602,
            48.21281561
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147419,
          "ABSTELL_ID": 128510,
          "BEZIRK": 16,
          "ADRESSE": "Paltaufgasse 21",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147420",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34882174,
            48.23617909
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147420,
          "ABSTELL_ID": 128511,
          "BEZIRK": 19,
          "ADRESSE": "Gymnasiumstraße 85",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147421",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33718452,
            48.22374116
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147421,
          "ABSTELL_ID": 128513,
          "BEZIRK": 18,
          "ADRESSE": "Johann-Nepomuk-Vogl-Platz 9A",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147422",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3187679,
            48.21081693
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147422,
          "ABSTELL_ID": 128516,
          "BEZIRK": 16,
          "ADRESSE": "Schuhmeierplatz ggü. 10",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147423",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33753219,
            48.2178296
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147423,
          "ABSTELL_ID": 128518,
          "BEZIRK": 17,
          "ADRESSE": "Syringgasse 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147424",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.36932697,
            48.20733791
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147424,
          "ABSTELL_ID": 128158,
          "BEZIRK": 1,
          "ADRESSE": "Dorotheergasse 9",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147425",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34074585,
            48.20023239
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147425,
          "ABSTELL_ID": 128159,
          "BEZIRK": 7,
          "ADRESSE": "Kaiserstraße 35",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147426",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34096839,
            48.20031642
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147426,
          "ABSTELL_ID": 128160,
          "BEZIRK": 7,
          "ADRESSE": "Seidengasse 37",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147427",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34467168,
            48.2056754
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147427,
          "ABSTELL_ID": 128161,
          "BEZIRK": 7,
          "ADRESSE": "Neustiftgasse 105",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147428",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34746053,
            48.20551101
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147428,
          "ABSTELL_ID": 128162,
          "BEZIRK": 7,
          "ADRESSE": "Neustiftgasse 79",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147429",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32310592,
            48.19681675
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147429,
          "ABSTELL_ID": 128163,
          "BEZIRK": 15,
          "ADRESSE": "Märzstraße neben 70",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147430",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.39032937,
            48.21850989
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147430,
          "ABSTELL_ID": 128164,
          "BEZIRK": 2,
          "ADRESSE": "Praterstern 9",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147431",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3350855,
            48.22862413
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147431,
          "ABSTELL_ID": 128165,
          "BEZIRK": 18,
          "ADRESSE": "Aumannplatz ggü. 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147432",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.41430028,
            48.25311113
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147432,
          "ABSTELL_ID": 128167,
          "BEZIRK": 21,
          "ADRESSE": "Donaufelder Straße 46",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147433",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.3342219,
            48.23702808
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147433,
          "ABSTELL_ID": 128168,
          "BEZIRK": 18,
          "ADRESSE": "Peter-Jordan-Straße ggü. 78",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147434",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.34466647,
            48.24440721
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147434,
          "ABSTELL_ID": 128169,
          "BEZIRK": 19,
          "ADRESSE": "Billrothstraße 75A",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147435",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.41054228,
            48.27781405
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147435,
          "ABSTELL_ID": 128170,
          "BEZIRK": 21,
          "ADRESSE": "Kantnergasse ggü. 68",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147436",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.35237008,
            48.19596371
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147436,
          "ABSTELL_ID": 127237,
          "BEZIRK": 6,
          "ADRESSE": "Kopernikusgasse 15",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147437",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33042318,
            48.20267959
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147437,
          "ABSTELL_ID": 127238,
          "BEZIRK": 15,
          "ADRESSE": "Burjanplatz 2",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147438",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.33332863,
            48.19458287
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147438,
          "ABSTELL_ID": 127239,
          "BEZIRK": 15,
          "ADRESSE": "Friedrichsplatz 1",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": 13,
          "WEBLINK1": null,
          "ANL_TYP": "SC",
          "ANL_TYP_TXT": "Scooterabstellanlage"
        }
      },
      {
        "type": "Feature",
        "id": "SCOOTERABSTELLOGD.147458",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.48427552,
            48.240507
          ]
        },
        "geometry_name": "SHAPE",
        "properties": {
          "OBJECTID": 147458,
          "ABSTELL_ID": 128174,
          "BEZIRK": 22,
          "ADRESSE": "Pirquetgasse 10",
          "STATUS": "R",
          "STATUS_TXT": "realisiert",
          "ANZ_SCOOTER": null,
          "WEBLINK1": null,
          "ANL_TYP": "BS",
          "ANL_TYP_TXT": "Leih-E-Scooterabstellfläche"
        }
      }
    ],
    "totalFeatures": 413,
    "numberMatched": 413,
    "numberReturned": 413,
    "timeStamp": "2024-01-23T12:10:12.713Z",
    "crs": {
      "type": "name",
      "properties": {
        "name": "urn:ogc:def:crs:EPSG::4326"
      }
    }
  }
`
const jsonParkingSpots = JSON.parse(parkingSpots)