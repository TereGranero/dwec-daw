/*
Genera un array de 100 números aleatoris sencers entre 0 i 9. 
Fes que siguen 0 totes les caselles des de la 25 fins a la 75.
*/

// Array generation
const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 10));

const numbers = [
    ...array.slice(0, 25),
    ...Array(51).fill(0),  // 51 zeros
    ...array.slice(76)
];

console.log(numbers);