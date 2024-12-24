/*
Demana dos números, comprova quin és el major i el menor.
Fa la divisió i mostra el resultat total, el de la part entera i el resto.
*/

// interface
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Introdueix un número: ", (x_input) => {
    rl.question("Introdueix altre número: ", (y_input) => {
        const x = Number(x_input);
        const y = Number(y_input);

        // checks if numbers
        if (Number.isNaN(x) || Number.isNaN(y)) {
            console.log("Error a l'entrada dels números."); 
        } else {
            // checks which is major
            let dividend = (y > x) ? y : x;
            // divide
            let divisor = (dividend == y) ? x : y;
            console.log(`El resultat de la divisió es: ${Math.floor(dividend / divisor)} amb reste: ${dividend % divisor} `)
        }
        rl.close();
    });
});