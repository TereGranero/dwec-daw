/**
 * Hides all the divs with the names of the riders in the big2 div.
 */
export function hideAllNames() {
   // Get all name divs
   const allNameDivs = document.querySelectorAll("#big2Div div[id$='NameDiv']");
   // Hide all
   allNameDivs.forEach(div => {
      div.classList.remove("visible");
      div.classList.add("hidden");
   });
}

/**
 * Shows the div with the name of the clicked image and hides all other name divs.
 * @param {Event} event - The event object of the click event.
 */
function showName(event) {
   // Get clicked image id
   const clickedImageId = event.target.id;

   hideAllNames();

   // Show the NameDiv of the clicked image
   const divNameToShow = document.getElementById(clickedImageId + "NameDiv");
   divNameToShow.classList.remove("hidden");
   divNameToShow.classList.add("visible");
}

/**
 * Creates the big2 div with the two images of the riders, 
 * and adds event listeners to change the class which
 * handles the border color. When the mouse is over,
 * it changes the border color to blue, and
 * when the mouse is out it changes the border color to green.
 */
export function createBig2Div() {

   // Create div
   const big2Div = document.createElement("div");
   big2Div.id = "big2Div";

   // Create title
   const title = document.createElement("h2");
   title.textContent = "Tadej versus Jonas";
   big2Div.appendChild(title);

   // Create Name divs
   const tadejNameDiv = document.createElement("div");
   tadejNameDiv.id = "tadejNameDiv";
   tadejNameDiv.textContent = "Tadej Pogacar";
   tadejNameDiv.classList.add("hidden");
   big2Div.appendChild(tadejNameDiv);

   const jonasNameDiv = document.createElement("div");
   jonasNameDiv.id = "jonasNameDiv";
   jonasNameDiv.textContent = "Jonas Vingegaard";
   jonasNameDiv.classList.add("hidden");
   big2Div.appendChild(jonasNameDiv);

   // Create images
   const tadej = document.createElement("img");
   tadej.src = "../img/Pogacar.png";
   tadej.id = "tadej";
   tadej.classList.add("destacat_verd");
   big2Div.appendChild(tadej);

   const jonas = document.createElement("img");
   jonas.src = "../img/Vingegaard.png";
   jonas.id = "jonas";
   jonas.classList.add("destacat_verd");
   big2Div.appendChild(jonas);

   // Add to DOM
   document.getElementById("ciclismePhotoDiv").insertAdjacentElement('afterend', big2Div);

   // Select images
   const big2Images = document.querySelectorAll("#big2Div img");

   // Add event listeners to change class when mouse is over and out
   // Add event listener to show names
   big2Images.forEach((image) => {
      image.addEventListener("mouseover", () => {
         image.classList.remove("destacat_verd");
         image.classList.add("destacat_blau");
      });
      image.addEventListener("mouseout", () => {
         image.classList.remove("destacat_blau");
         image.classList.add("destacat_verd");
      });
      image.addEventListener("click", showName);
   });
}