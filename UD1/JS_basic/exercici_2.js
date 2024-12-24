/* Trobar el mínim i màxim d'un array
Fes un programa que genere un array de 15 números enters aleatoris entre 1 i 100, 
i determine quin és el valor mínim i màxim de l'array. 
No es permet l'ús de funcions predefinides com Math.min() o Math.max().
*/


// Generates an array with 15 integers with values [1,100]
let values = [];

for (let i = 0; i < 15; i++) {  
//loops from 0 to 14
    // Math.random() [0,1[ --> [0,99]  -->  [1,100]
    values.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array generat: ", values);

// Calculates max and min values
let min = values[0];
let max = values[0];

for (let i = 1; i < values.length; i++) {
    if (values[i] < min) {
        min = values[i];
    }
    if (values[i] > max) {
        max = values[i];
    }
}

console.log("Valor mínim: ", min);
console.log("Valor màxim: ", max);

