/**
* Report errors to user.
* @param {Array<string>} errors - Errors to report.
*/
export function showErrors(errors) {
   const errorsDiv = document.getElementById("errorsDiv");
   errors.forEach(error => {
     const errorElement = document.createElement("p");
     errorElement.textContent = error;
     errorsDiv.appendChild(errorElement);
   });
 }
 
 /**
 * Clears the inner HTML content of a specified div.
 * @param {string} id - The id of the div to be cleared.
 */
export function clearDiv(id) {
   const divToClear = document.getElementById(id);
   divToClear.innerHTML = "";
}



