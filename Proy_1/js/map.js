import {ports} from "./ports.js";


function getDataMarkers() {
   const markersData = [];

   for (const serralada in ports) {
      ports[serralada].forEach(port =>{
         markersData.push({
            "coords": port.coords,
            "message": port.portName
         });
      });
   }
   return markersData;
}


export function createMap() {

   // Create div 
   const mapDiv = document.createElement("div");
   mapDiv.id = "mapDiv";

   // Xuso token
   mapboxgl.accessToken = 'pk.eyJ1Ijoiam9ydGkiLCJhIjoiY2xvaWNwMTkyMW9ubjJxbjA5aTg2YmFycyJ9.w0zdUqxA_kjatKYu7sdneA';

   // Get current location in case we are allowed to
   navigator.geolocation.getCurrentPosition(pos => {
      var map = new mapboxgl.Map({
         container: 'mapDiv', 
         style: 'mapbox://styles/mapbox/satellite-v9', 
         center: [-3.7003, 40.4167],
         zoom: 5 
      });
  
      // Add navigation controls
      map.addControl(new mapboxgl.NavigationControl());
   
      // Update current location in case we are allowed to get it
      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(new mapboxgl.FullscreenControl());
      map.addControl(new mapboxgl.GeolocateControl({
         positionOptions: {
            enableHighAccuracy: true
         },
         trackUserLocation: true
      }));

      function addMarker(coords, message, colour) {
         new mapboxgl.Marker({ color: colour })
            .setLngLat([coords.longitude, coords.latitude])
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${message}</h3>`))
            .addTo(map);
      }

      addMarker(pos.coords, "Estàs ací", "red");

      // Add port markers
      const markersData = getDataMarkers();
      markersData.forEach(item => addMarker(item.coords, item.message, "yellow"));

   });

   // Add to DOM
   document.getElementById("big2Div").insertAdjacentElement('afterend', mapDiv);
}
