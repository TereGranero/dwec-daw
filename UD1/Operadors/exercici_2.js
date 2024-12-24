/*
Demana un número i comprova si és un número enter.
*/

// interface
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// checks if number is integer
const check_int = num => Number.isInteger(num) ? "El número és enter." : "El número no és enter.";

rl.question("Introdueix un número: ", (input) => {
    var num = Number(input);
    console.log(check_int(num)); 
    rl.close();
});