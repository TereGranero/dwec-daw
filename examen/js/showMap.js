// Ports de muntanya amb coordenades
const mountainPasses = [
   { name: "Stelvio", lat: 46.5286, lon: 10.4524 },
   { name: "Lagos de Covadonga", lat: 43.2633, lon: -4.9884 },
   { name: "Tourmalet", lat: 42.9067, lon: 0.1943 }
];

// Funció per a mostrar un mapa individual per a cada port de muntanya amb el nom del port
export function showMap() {

   const contentDiv = document.getElementById("content");
   contentDiv.innerHTML="";

   const title = document.createElement("h2");
   title.textContent = "Ports de Muntanya";
   contentDiv.appendChild(title);


   // Token per a Mapbox
   mapboxgl.accessToken = 'pk.eyJ1Ijoiam9ydGkiLCJhIjoiY2xvaWNwMTkyMW9ubjJxbjA5aTg2YmFycyJ9.w0zdUqxA_kjatKYu7sdneA';

   mountainPasses.forEach(port => {
      const title = document.createElement("h3");
      title.textContent = port.name;
      contentDiv.appendChild(title);

      const mapDiv = document.createElement("div");
      mapDiv.id = port.name + "mapDiv";

      navigator.geolocation.getCurrentPosition(pos => {
         var map = new mapboxgl.Map({
            container: 'mapDiv', 
            style: 'mapbox://styles/mapbox/satellite-v9', 
            center: [-3.7003, 40.4167],
            zoom: 5 
         });
      });

      function addMarker(longitude, latitude, message, colour) {
         new mapboxgl.Marker({ color: colour })
            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${message}</h3>`))
            .addTo(map);
      }
      addMarker(port.lon, port.lat, port.name, "red");

   });
      
};