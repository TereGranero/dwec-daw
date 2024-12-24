/*
Demana un número entre 0 i 50 i retorna el seu quadrat.
*/

// interface
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Introdueix un número entre 0 i 50: ", (input) => {
    var num = Number(input);

    if ((num < 0) || (num > 50)) {
        console.log("El número no és vàlid.")
    } else {
        console.log(`El seu quadrat és: ${Math.pow(num, 2)}`); 
    }
    rl.close();
});
