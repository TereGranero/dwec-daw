/*
Demana un número enter, comprova si és un número enter i ho converteix en float.
*/

// interface
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Introdueix un número: ", (input) => {
    var num = Number(input);

    // checks if integer
    if (Number.isInteger(num)) {
        // to float
        console.log(`${num.toFixed(2)}`);
    } else {
        console.log("El número no és enter."); 
    }
    rl.close();
});