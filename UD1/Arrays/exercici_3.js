/* Genera un array de 100 números aleatoris sencers entre 0 i 9. 
Conta el número de vegades que apareix cadascun dels dígits i mostra-ho per consola.
*/


// Array generation
const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 10));

// Save number of occurrences for each digit = index
const counter = Array(10).fill(0);

// Count occurrences of each digit
array.forEach(digit => counter[digit]++);

// Print
counter.forEach((value, index) => {
    console.log(`Dígit ${index}: ${value} vegades.`);
});