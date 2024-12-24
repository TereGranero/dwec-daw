import { clearDiv } from "./utilities.js";

// Data structure for our purposes
export const ports = {
  "Pirineus": [
    {
      "portName": "Tourmalet",
      "params": [
        {"altitud": 2115},
        {"longitud": 17},
        {"pendent": 7.3},
        {"desnivell": 1268},
        {"coeficiente APM": 315}
      ],
      "urlAltimetria": "https://www.altimetrias.net/Francia/Pirineos/Tourmalet2.gif",
      "photo": "./img/tourmalet.jpg",
      "coords": { "longitude": 0.1451, "latitude": 42.9081 }
    },
    {
      "portName": "Coll de la Gallina",
      "params": [
        {"altitud": 1910},
        {"longitud": 11.76},
        {"pendent": 8.36},
        {"desnivell": 982},
        {"coef_APM": 263}
      ],
      "urlAltimetria": "https://www.altimetrias.net/Mundo/Andorra/LaGallina.gif",
      "photo": "./img/coll-gallina.jpg",
      "coords": { "longitude": 1.4516, "latitude": 42.4592 }
    }
  ],
  "Pics d'Europa": [
    {
      "portName": "Lagos de Covadonga",
      "params": [
        {"altitud": 1124},
        {"longitud": 13.9},
        {"pendent": 6.92},
        {"desnivell": 962},
        {"coef_APM": 268}
      ],
      "urlAltimetria": "https://www.altimetrias.net/Asturias/Lagos.gif",
      "photo": "./img/lagos-covadonga.jpg",
      "coords": { "longitude": -4.9858, "latitude": 43.2682}
    },
    {
      "portName": "Angliru",
      "params": [
        {"altitud": 1572},
        {"longitud": 12.4},
        {"pendent": 10.21},
        {"desnivell": 1266},
        {"coef_APM": 514}
      ],
      "urlAltimetria": "https://biketourexperience.com/wp-content/uploads/2022/02/alto_ANGLIRU_altimetria.jpg",
      "photo": "./img/angliru.jpg",
      "coords": { "longitude": -5.9422, "latitude": 43.2213}

    }
  ]
};


/**
 * Adds a select element to the page for selecting
 * a serralada (Pirineus, Pics d'Europa, or all).
 * The select is added to div with the id "contingut".
 */
export function addSelectPorts() {

  // Create select
  const select = document.createElement("select");
  select.id = "selectSerralada";
  select.name = "selectSerralada";

  // Define select options
  const options = [
    { value: "", text: "- Selecciona la serralada -" },
    { value: "Pirineus", text: "Pirineus" },
    { value: "Pics d'Europa", text: "Pics d'Europa" },
    { value: "all", text: "Totes" }
  ];

  // Add options elements to select
  options.forEach(optionData => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.text;
    select.appendChild(option);
  });

  // Add select to contingut
  const contingut = document.getElementById("contingut");
  contingut.prepend(select); // at the beginning
}

/**
* Create a div to show serralada info
* inside contingut
*/
export function addPortsListDiv() {

  // Create div to show serralada info
  const portsListDiv = document.createElement("div");
  portsListDiv.id = "portsList";

  // Add ports List Div to contingut before Select
  const contingut = document.getElementById("contingut");
  const firstChild = contingut.firstElementChild;
  if (firstChild && firstChild.tagName === "SELECT") {
    contingut.insertBefore(portsListDiv, firstChild.nextSibling); //antes del siguiente al Select
  } else {
    contingut.appendChild(portsListDiv);  //just in case
  }
}


/**
 * Selects the ports to show given the selected serralada.
 * @param {string} selectedSerralada - The name of the selected serralada, 
 *                                     or "all" for all serraladas.
 * @returns {Array} An array of ports objects.
 */
function selectPortsToShow(selectedSerralada) {

  let selectedPorts = [];

  if (selectedSerralada === "all") {
    // loop all serraladas and push ports
    for(const serralada in ports) {
      selectedPorts.push(...ports[serralada]); //avoiding nesting arrays
    }
  } else {
    selectedPorts = ports[selectedSerralada];
  }
  return selectedPorts;
}


/**
 * Shows the list of ports for the selected serralada.
 * The list is shown in the div with the id "portsList".
 * The list is composed by a clickable h3 element for each port name,
 * a unordered list of params, and an img for the port's altimetry.
 * When a port name is clicked, the port's photo is shown in the div
 * with the id "contingut".
 * @param {string} selectedSerralada - The name of the selected serralada.
 */
export function showPorts(selectedSerralada) {

  // Clear previous content
  clearDiv("portsList");

  // Get ports to show
  const selectedPorts = selectPortsToShow(selectedSerralada);

  // Create ports list
  const ulPorts = document.createElement("ul");

  // Create li for each port
  selectedPorts.forEach(portData => {
    const portLi = document.createElement("li");

    // Create a clickable h3 element for port name
    const portNameHeader = document.createElement("h3");
    portNameHeader.textContent = portData.portName;
    
    // Add click event to port name
    portNameHeader.addEventListener("click", () => {
      clearDiv("contingut");
      const photoPort = document.createElement("img");
      photoPort.src = portData.photo;
      document.getElementById("contingut").appendChild(photoPort);
    });

    portLi.appendChild(portNameHeader);

    // Create ul for params in port
    const paramsUl = document.createElement("ul");

    // Create li for each param
    portData.params.forEach(param => {
      // Convert object param in array of pair key-value
      const [key, value] = Object.entries(param)[0]; //only one pair
      const paramLi = document.createElement("li");
      paramLi.innerHTML = `<strong>${key}:</strong> ${value}`;
      paramsUl.appendChild(paramLi);
      });
    
    portLi.appendChild(paramsUl);

    // Create img for port
    const img = document.createElement("img");
    img.src = portData.urlAltimetria;
    portLi.appendChild(img);

    ulPorts.appendChild(portLi);
  });

  // Add main list to ports list div
  document.getElementById("contingut").appendChild(ulPorts);  
}


