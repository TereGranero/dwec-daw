/* Deshabilita el botó d'enviament fins que el formulari siga correcte. 
Informa a l'usuari dels errors.*/

function validarFormulario(){

    let isValid = true;

    // input elements
    let inputElements = document.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="password"], input[type="date"], input[type="tel"], textarea');
    
        inputElements.forEach(element => {
            if (element.value.trim().length === 0){
                element.classList.add('invalido');
                isValid = false;
            } else {
            element.classList.remove('invalido');
            }
        });

    // text elements
    let textElements = document.querySelectorAll('input[type="text"], textarea');
    
    textElements.forEach(element => {
        // only letters, minlength 3
        let regex = /^[a-zA-Z]{3,}$/;
        if (!regex.test(element.value)) {
          element.classList.add('invalido');
          isValid = false;
        } else {
          element.classList.remove('invalido');
        }
      });
    
    // checkbox
    let checkbox = document.getElementById("checkbox");
    if (checkbox.checked) {
        checkbox.classList.remove('invalido');
    } else {
        checkbox.classList.add('invalido');
        isValid = false;
    }

    // radiobuttons opcion
    let radiobutton = document.querySelector('input[name=opcion]:checked')
    if (radiobutton) {
        document.querySelectorAll('input[name="opcion"]').forEach(element => element.classList.remove('invalido'));
    } else {
        document.querySelectorAll('input[name="opcion"]').forEach(element => element.classList.add('invalido'));
        isValid = false;
    }

    // select seleccion
    let seleccion = document.getElementById("seleccion");
    if (seleccion.options[seleccion.selectedIndex].value === "" ) {
        seleccion.classList.add('invalido');
        isValid = false;
    } else {
        seleccion.classList.remove('invalido');
    }

    // disable button submit if errors
    let submitBtn = document.querySelector('input[type=submit]');
    submitBtn.disabled = !isValid;
}

function addListeners(){
    let elements = document.querySelectorAll('input, select, textarea');
    elements.forEach(elem => {
        elem.addEventListener('input', validarFormulario);
        elem.addEventListener('change', validarFormulario);
    });
}

// addEventListener to form
document.addEventListener("DOMContentLoaded", function() {

    // disable button submit on load
    let submitBtn = document.querySelector('input[type=submit]');
    submitBtn.disabled = true;

    addListeners();

    document.querySelector("form").addEventListener('submit', function(event) {
        event.preventDefault();
        if (!document.querySelector('input[type=submit]').disabled) {
            event.preventDefault();
            alert('Formulari enviat.');
        }
    }); 
});

