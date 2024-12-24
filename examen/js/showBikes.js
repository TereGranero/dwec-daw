// Objecte JSON amb informació de bicicletes
const bikeData = {
   "bikes": [
       { "id": "1", "model": "Pinarello Dogma", "rider": "Carlos Rodríguez", "team": "INEOS", "image": "./img/dogma.avif", "preu": 12000 },
       { "id": "2", "model": "Specialized Tarmac", "rider": "Primoz Roglic", "team": "BORA-hansgrohe", "image": "./img/tarmac.webp", "preu": 10000 },
       { "id": "3", "model": "Cervelo S5", "rider": "Wout van Aert", "team": "Jumbo-Visma", "image": "./img/cervelo.jpg", "preu": 9000 }
   ]
};

// Funció per a gestionar el clic sobre bicicletes i mostrar el preu. No pot rebre cap argument.
function handleClick(elEvento) {
    /*Quan fem clic sobre una bici ens mostrarà una alerta amb el preu. 
    Cal fer-ho identificant el id de la bici que ha provocat l'event i buscant el preu.*/

    var evento = elEvento || window.event;
    const clickedImageId = evento.target.id;

    let model = "";
    let preu = 0;
    
    bikeData.bikes.forEach(bike => {
        let [key, id] = Object.entries(bike)[0];
        if (id == clickedImageId) {
            [key, model] = Object.entries(bike)[1];
            [key, preu] = Object.entries(bike)[5];
        }
    });
    alertMessage = `Preu de la bicicleta ${model}: ${preu} €.`; 
    alert(alertMessage);
}

// Funció per a mostrar bicicletes
export function showBikes() {

    // Clear content Div
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML="";

    // Display bikeData in cards

    bikeData[bikes].forEach(bike => {
        const bikeCard = document.createElement("div");
        bikeCard.id = bike.id;
        bikeCard.classList.add("bike-card");
        contentDiv.appendChild(bikeCard);

        const bikeTitle = createElement("h3");
        bikeTitle.textContent = bike.model;
        bikeCard.appendChild(bikeTitle);

        const bikeImage = document.createElement("img");
        bikeImage.id = bike.id;
        bikeImage.src = bike.image;
        bikeImage.alt = bike.model;
        bikeImage.classList.add("bike-image");
        bikeCard.appendChild(bikeImage);

        const rider = document.createElement("p");
        rider.textContent = `Corredor: ${bike.rider}`;
        bikeCard.appendChild(rider);

        const team = document.createElement("p");
        team.textContent = `Equip: ${bike.team}`;
        bikeCard.appendChild(team);
    });

    // Add event listeners to bikes images
   const bikesImages = document.querySelectorAll("div.bike-card img");

   bikesImages.forEach((image) => {
      image.addEventListener("click", handleClick);
   });

}

