// Dates de les competicions
const competitionDates = {
   "Tour de France": new Date("2024-07-01"),
   "Giro d'Italia": new Date("2024-05-11"),
   "Vuelta a España": new Date("2024-08-24")
};

// Funció per a mostrar el compte enrere
export function showCountdown() {
   const contentDiv = document.getElementById("content");
   contentDiv.innerHTML="";

   const title = document.createElement("h2");
   title.textContent = "Compte enrere per a les competicions";
   contentDiv.appendChild(title);

   competitionDates.forEach(competicio => {
      const [key, value] = Object.entries(competicio)[0];
      const now = new Date();
      const dif = value - now;
      const seconds = Math.floor(dif / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      const titlecompeticio = document.createElement("p");
      titlecompeticio.textContent = `${key}: -${days} dies`;
      contentDiv.appendChild(titlecompeticio);
   });
   
}