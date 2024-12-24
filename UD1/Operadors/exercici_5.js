/*
Demana el radi, comprova si és un número i calcula l'àrea de la circunferència fent ús de PI.
*/

// interface
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("Introdueix el radi: ", (input) => {
    var radius = Number(input);

    // checks if number
    if (Number.isNaN(radius)) {
        console.log("No és un numero."); 
    } else {
        // calculates
        let area = Math.PI * Math.pow(radius, 2);
        console.log(`L'àrea de la cincunferència és: ${area.toFixed(2)}`);
    }
    rl.close();
});