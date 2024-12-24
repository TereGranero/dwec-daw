import {showBikes} from './showBikes.js';
import {showCountdown} from './showCountdown.js';
import {showMap} from './showMap.js';


// Array d'imatges per a la pàgina inicial
const ciclistesFoto = ["./img/remco.webp", "./img/vdp.webp", "./img/pogacar.webp"];


// Funció per mostrar una imatge aleatòria a la pàgina inicial
function showRandomImage() {
   let index = Math.floor(Math.random() * ciclistesFoto.length);
   const homeImage = document.getElementById("homeImage");
   homeImage.src = ciclistesFoto[index];
}


// Funció per a tornar a la pàgina inicial
function backHome() {
   /*La imatge inicial de la pàgina ha de ser aleatòria. 
   Has de fer-ho modificant l'atribut corresponent de la etiqueta, no "maxacant-la"*/

   // Clean content Div
   const contentDiv = document.getElementById("content");
   contentDiv.innerHTML = "";

   // Create image element
   const homeImage = document.createElement("img");
   homeImage.src = "";
   homeImage.id = "homeImage";
   homeImage.alt = "Ciclisme Aleatori"
   contentDiv.appendChild(homeImage);

   showRandomImage();

}

// Configuració d'esdeveniments per als botons
document.addEventListener("DOMContentLoaded", function(){
   
   backHome();

   // Button showBikes
   const showBikesBtn = document.getElementById("showBikes");
   if (showBikesBtn) {
      showBikesBtn.addEventListener("click", showBikes);
   }

   // Button showCountdown
   const showCountdownBtn = document.getElementById("showCountdown");
   if (showCountdownBtn) {
      showCountdownBtn.addEventListener("click", showCountdown);
   }

   // Button showMap
   const showMapBtn = document.getElementById("showMap");
   if (showMapBtn) {
      showMapBtn.addEventListener("click", showMap);
   }

   // Button backHome
   const backHomeBtn = document.getElementById("backHome");
   if (backHomeBtn) {
      backHomeBtn.addEventListener("click", backHome);
   }

})