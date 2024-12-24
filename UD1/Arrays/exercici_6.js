/*
Genera un vector amb noms d'animals. 
Demana per pantalla a l'usuari que introduisca un nom 
i determina si existeix al vector o no amb includes().
*/

// interface
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const animals = ["gos", "gat", "pardal", "elefant"];

rl.question("Introdueix un animal: ", (input) => {
    
    if (animals.includes(input)) {
        console.log(`${input} està inclós.`);
    } else {
        console.log(`${input} no està inclós.`);
    } 

    rl.close();
});