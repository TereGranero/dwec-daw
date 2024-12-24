/* Llig tots els camps del formulari i mostra en un alert
el que ha emplenat l'usuari en fer el submit */

function validarFormulario(evento){
    evento.preventDefault();

    let output = '';
    
    // nombre
    let nombre = document.getElementById("nombre").value;
    output += `Nombre: ${nombre} \n`;
    
    // correo
    let correo = document.getElementById("correo").value;
    output += `Correo: ${correo} \n`;

    //contrasena
    let contrasena = document.getElementById("contrasena").value;
    output += `Contraseña: ${contrasena} \n`;

    // fecha nacimiento
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    output += `Fecha nacimiento: ${fecha_nacimiento} \n`;

    // numero
    let numero = document.getElementById("numero").value;
    output += `Número: ${numero} \n`;

    // checkbox
    if (document.getElementById("checkbox").checked) {
        output += `Se han aceptado los términos y condiciones. \n`;
    } else {
        output += `No se han aceptado los términos y condiciones. \n`;
    }

    // radiobuttons opcion
    let radiobutton = document.querySelector('input[name=opcion]:checked')
    if (radiobutton) {
        output += `Opción radiobuttons: ${radiobutton.value}.\n`;
    } else {
        output += 'Ninguna opción ha sido seleccionada en radiobuttons.\n';
    }

    // select seleccion
    let seleccion = document.getElementById("seleccion");
    if (seleccion.selectedIndex > 0 ) {
        let texto = seleccion.options[seleccion.selectedIndex].text;
        output += `Opción lista: ${texto}\n`;
    } else {
        output += 'Ninguna opción ha sido seleccionada en el desplegable.\n'
    }

    // comentarios
    let comentarios = document.getElementById("area_texto").value;
    output += `Comentarios: ${comentarios}`;

    // alert
    alert(output);

    // send form
    //this.submit();
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener('submit', validarFormulario); 
  });

