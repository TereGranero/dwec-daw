/**
* Ensures a number is a two digit number by adding a leading 0 if needed.
* @param {number} i - The number to check.
* @returns {string} The number as a two digit string.
*/
function checkTime(i) {
   i = Math.floor(i);
   if (i < 10) {
       i = "0" + i;
   }
   return i;
}

/**
 * Updates the clock on the page to show how many days, hours, minutes and
 * seconds are left until the Tour de France 2025 starts.
 * When the clock reaches 0, it stops and shows a message saying the Tour
 * has started.
 */
function startTourClock() {
   const dataTour = new Date(2025, 6, 5, 16, 0, 0, 0); //january is 0

   function updateClock() {
       const now = new Date();
       const dif = dataTour - now;

       // Stop the clock if it's over
       if (dif <= 0) {
           clearInterval(timer); 
           document.getElementById("clockMessage").textContent = "El Tour de França 2025 ha començat!";
           return;
       }
       const seconds = Math.floor(dif / 1000);
       const minutes = Math.floor(seconds / 60);
       const hours = Math.floor(minutes / 60);
       const days = Math.floor(hours / 24);

       const secondsRemaining = checkTime(seconds % 60);
       const minutesRemaining = checkTime(minutes % 60);
       const hoursRemaining = checkTime(hours % 24);

       const dataTourClock = `${days} dies, ${hoursRemaining} hores, ${minutesRemaining} minuts i ${secondsRemaining} segons.`;
       document.getElementById("clockMessage").textContent = dataTourClock;
   }

   // Update the clock every second
   const timer = setInterval(updateClock, 1000); 
   updateClock(); // Initial update
}

/**
 * Create a div that will show the countdown to the Tour de France 2025.
 * The div will have a title and a paragraph with the countdown.
 * The function will also start the countdown.
 */
export function createTourClockDiv() {
   
   // Create div
   const tourClockDiv = document.createElement("div");
   tourClockDiv.id = "tourClockDiv";

   // Create title
   const title = document.createElement("h2");
   title.textContent = "Comte enrere per al Tour de França 2025";
   tourClockDiv.appendChild(title);

   // Create parraph
   const clockMessage = document.createElement("p");
   clockMessage.id = "clockMessage";
   tourClockDiv.appendChild(clockMessage);

   // Add to DOM
   document.getElementById("contingut").insertAdjacentElement('afterend', tourClockDiv);

   startTourClock();
}
