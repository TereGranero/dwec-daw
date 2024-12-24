/*
Demana un número, comprova si és un número i redondeja a dos xifres decimals.
*/

// interface
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("Introdueix un número: ", (input) => {
    var num = Number(input);
    if (Number.isNaN(num)) {
        console.log("No és un numero."); 
    } else {
        console.log(`El número és: ${num.toFixed(2)}`);
    }
    rl.close();
});

