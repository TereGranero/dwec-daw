import {showErrors, clearDiv} from './utilities.js';
import {initialize} from './main.js';

/**
 * Validates the form by checking if Nom and Cognoms fields have been filled, 
 * at least one gender has been selected and at least one bicycle type has 
 * been selected. If errors are found, displays them in the "errorsDiv" div 
 * and disables the submit button. If all is valid, enables the submit button. 
 * Returns true if the form is valid, false otherwise.
 */
function validateForm() {

  // Clear previous errors
  clearDiv("errorsDiv");
  
  // Variables to control and store errors
  let isValid = true;
  let errors = [];

  // Validate Nom and Cognoms
  const textElements = document.querySelectorAll('input[type="text"]');
  textElements.forEach(element => {
    if (!element.value.trim()) {
      isValid = false;
      errors.push('El camp ' + element.name + ' és obligatori.');
    }
  });

  // Validate gender
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  let genderSelected = false;
  genderInputs.forEach(input => {
    if (input.checked) genderSelected = true;
  });
  if (!genderSelected) {
    isValid = false;
    errors.push('Has de seleccionar un gènere.');
  }

  // Validate bicycle type
  const bicycleTypes = ["carretera", "gravel", "rígida", "doble", "elèctrica"];
  let bicycleSelected = false;
  bicycleTypes.forEach(type => {
    if (document.getElementById(type).checked) {
      bicycleSelected = true;
    }
  });
  if (!bicycleSelected) {
    isValid = false;
    errors.push('Has de seleccionar almenys un tipus de bicicleta.');
  }

  // Display errors
  if (!isValid) {
    showErrors(errors);
  }

  // Disable submit button if errors
  document.querySelector('input[type="submit"]').disabled = !isValid;

  return isValid;
}

/**
 * Creates a form with inputs for name, surname, gender and bicycle type preferences.
 * Also creates an errors div to display any errors that may occur during form
 * submission. The form is added to the "contingut" div and event listeners are
 * added to each input element to validate the form data. The form is only
 * submitted if all data is valid.
 */
export function createForm() {

  // Clear previous content
  clearDiv("contingut");

  // Create errors div inside contingut
  const errorsDiv = document.createElement("div");
  errorsDiv.id = "errorsDiv";
  errorsDiv.style.color = "red";
  errorsDiv.style.backgroundColor = "lightgray";
  document.getElementById("contingut").appendChild(errorsDiv);

  // Create form
  const form = document.createElement("form");
  form.id = "contactForm";
  
  // Input name
  const nameLabel = document.createElement("label");
  nameLabel.for = "name";
  nameLabel.textContent = "Nom:";
  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "Nom";
  form.appendChild(nameInput);
  form.appendChild(document.createElement("br"));

  // Input surname
  const surnameLabel = document.createElement("label");
  surnameLabel.for = "surname";
  surnameLabel.textContent = "Cognoms:";
  form.appendChild(surnameLabel);

  const surnameInput = document.createElement("input");
  surnameInput.type = "text";
  surnameInput.id = "surname";
  surnameInput.name = "Cognoms";
  form.appendChild(surnameInput);

  // Radio gender
  const genderTitle = document.createElement("p");
  genderTitle.textContent = "Selecciona el teu gènere:";
  form.appendChild(genderTitle);

  // Radio gender male
  const genderLabelMale = document.createElement("label");
  genderLabelMale.textContent = "Masculí";
  genderLabelMale.setAttribute("for", "male");

  const genderInputMale = document.createElement("input");
  genderInputMale.type = "radio";
  genderInputMale.name = "gender";
  genderInputMale.id = "male";
  genderInputMale.value = "male";

  form.appendChild(genderInputMale);
  form.appendChild(genderLabelMale);
  form.appendChild(document.createElement("br"));

  // Radio gender female
  const genderLabelFemale = document.createElement("label");
  genderLabelFemale.textContent = "Femení";
  genderLabelFemale.setAttribute("for", "female");

  const genderInputFemale = document.createElement("input");
  genderInputFemale.type = "radio";
  genderInputFemale.name = "gender";
  genderInputFemale.id = "female";
  genderInputFemale.value = "female";

  form.appendChild(genderInputFemale);
  form.appendChild(genderLabelFemale);
  form.appendChild(document.createElement("br"));

  // Radio gender other
  const genderLabelOther = document.createElement("label");
  genderLabelOther.textContent = "Altres";
  genderLabelOther.setAttribute("for", "other");

  const genderInputOther = document.createElement("input");
  genderInputOther.type = "radio";
  genderInputOther.name = "gender";
  genderInputOther.id = "other";
  genderInputOther.value = "other";

  form.appendChild(genderInputOther);
  form.appendChild(genderLabelOther);
  form.appendChild(document.createElement("br"));


  // Checkbox bicycle
  const bicycleTypeTitle = document.createElement("p");
  bicycleTypeTitle.textContent = "Tipus de bicicleta que t'agrada:";
  form.appendChild(bicycleTypeTitle);

  const bicycleTypes = ["carretera", "gravel", "rígida", "doble", "elèctrica"];
  bicycleTypes.forEach(bicycleType => {

    // Label for checkbox
    const typeLabel = document.createElement("label");
    typeLabel.textContent = bicycleType;
    typeLabel.setAttribute("for", bicycleType);

    // Checkbox
    const bicycleTypeInput = document.createElement("input");
    bicycleTypeInput.type = "checkbox";
    bicycleTypeInput.id = bicycleType;
    bicycleTypeInput.name = bicycleType;
    bicycleTypeInput.value = bicycleType;
    bicycleTypeInput.textContent = bicycleType;

    form.appendChild(bicycleTypeInput);
    form.appendChild(typeLabel);
  });

  form.appendChild(document.createElement("br"));

  // Submit button
  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.value = "Enviar";
  submitBtn.disabled = true;
  form.appendChild(submitBtn);

  // Add form to div
  document.getElementById("contingut").appendChild(form);

  // Add event listeners
  const textElements = ['name', 'surname'];
  textElements.forEach(id => {
      document.getElementById(id).addEventListener('input', validateForm);
      document.getElementById(id).addEventListener('change', validateForm);
  });

  const genderInputs = document.querySelectorAll('input[name="gender"]');
  genderInputs.forEach(radio => {
      radio.addEventListener('change', validateForm);
  });

  const bicycleTypesCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  bicycleTypesCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', validateForm);
  });

  // Validation is mandatory to submit the form
  form.addEventListener('submit', function(e) {
      if (!validateForm()) {
          e.preventDefault();
      } else {
          alert('Formulari enviat.');
          initialize();
      }
  });
}
  
