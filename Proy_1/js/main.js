import {addSelectPorts, addPortsListDiv, showPorts} from './ports.js';
import {createForm} from './form.js';
import {showErrors, clearDiv} from './utilities.js';
import {createTourClockDiv} from './tourClock.js';
import {createCiclismePhotoDiv} from './ciclismePhoto.js';
import {createBig2Div, hideAllNames} from './big2.js';
import {createMap} from './map.js';


export function initialize() {
  clearDiv("contingut");

  // Create select element
  addSelectPorts();

  // Create ports list div   
  addPortsListDiv();

  // Show info for selected serralada
  const select = document.getElementById("selectSerralada");
  select.addEventListener("change", (event) => {
    const selectedSerralada = event.target.value;
    if (selectedSerralada === "") {
      showErrors(["Selecciona una serralada"]);
    } else {
      showPorts(selectedSerralada);
    }
  });
  
  // Create Tour Clock if does not exist
  if (!document.getElementById('tourClockDiv')) {
    createTourClockDiv();
  }

  // Create Ciclisme random image if does not exist
  if (!document.getElementById('ciclismePhotoDiv')) {
    createCiclismePhotoDiv();
  }

  // Create Big2 if does not exist
  if (!document.getElementById('big2Div')) {
    createBig2Div();
  } else {
    hideAllNames();
  }

  // Create map if does not exist
  if (!document.getElementById('mapDiv')) {
    createMap();
  }
}

document.addEventListener("DOMContentLoaded", function() {

    initialize();

    // Inici button
    const iniciBtn = document.getElementById("start");
    if (iniciBtn) {
        iniciBtn.addEventListener("click", initialize);
    }
    
    // Contacte button
    const contactBtn = document.getElementById("contact");
    if (contactBtn) {
      contactBtn.addEventListener("click", createForm);
  }
});
