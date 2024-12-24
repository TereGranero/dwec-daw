/* En el formulari anterior, resalta en roig el borde d'aquells elements incorrectes.

Els elements de text han de tindre un tamany mínim de 3 lletres, no poden tindre números, etc.
Tots els camps són requerits.
Triar almenys dos temes per a rebre artícles.*/

function validarFormulario(event){

    let isValid = true;

    // input elements
    let inputElements = document.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="password"], input[type="date"], input[type="tel"], textarea');
    
        inputElements.forEach(element => {
            if (element.value == null || element.value.length == 0 || /^\s+$/.test(element.value) ) {
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

    // only send if no errors
    if (!isValid) {
        event.preventDefault();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener('submit', validarFormulario); 
  });



