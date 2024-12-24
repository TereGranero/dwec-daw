/**
 * Create a div that will show a random photo from a gallery of
 * ciclisme img. The photo is selected randomly until it is
 * different than the last one and it is updated every 2 seconds.
 */
export function createCiclismePhotoDiv() {

   // Create div
   const ciclismePhotoDiv = document.createElement("div");
   ciclismePhotoDiv.id = "ciclismePhotoDiv";

   //Create title
   const title = document.createElement("h2");
   title.textContent = "Fotos";
   ciclismePhotoDiv.appendChild(title);

   // Add to DOM
   document.getElementById("tourClockDiv").insertAdjacentElement('afterend', ciclismePhotoDiv);
   
   const ciclismeGallery = [
      "../img/ciclisme1.jpg",
      "../img/ciclisme2.jpg",
      "../img/ciclisme3.jpg",
      "../img/ciclisme4.jpg",
      "../img/angliru.jpg",
      "../img/coll-gallina.jpg",
      "../img/lagos-covadonga.jpg",
      "../img/tourmalet.jpg"
   ];

   let last_index = -1;
  
   /**
    * Selects a random photo from the ciclismeGallery and updates the
    * "ciclismePhoto" div with it. The photo is selected randomly
    * until it is different than the last one.
    */
   function updatePhoto() {

      let index;
      //Select random index until it is different than the last one
      do {
         index = Math.floor(Math.random() * ciclismeGallery.length);
      }
      while(index === last_index);

      last_index = index;

      // Clear previous image
      const previousPhoto = document.getElementById("ciclismePhoto");
      if (previousPhoto) {
         previousPhoto.remove(); 
      }

      // Add new image
      const ciclismePhoto = document.createElement("img");
      ciclismePhoto.src = ciclismeGallery[index];
      ciclismePhoto.id = "ciclismePhoto";
      ciclismePhoto.style.height = "300px";
      ciclismePhotoDiv.appendChild(ciclismePhoto);
   }

   // Update photo every 2 seconds
   const timer = setInterval(updatePhoto, 2000); 
   updatePhoto();
}