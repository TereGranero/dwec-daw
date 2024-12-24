/*
Genera un array de 25 números aleatoris sencers entre 0 i 100. 
Cap número es pot repetir. 
Mostra el resultat per consola.
*/

function generate_random (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Repeated cannot be added to a Set
const numbers = new Set();

while (numbers.size < 25) {
    const num = generate_random (0, 100);
    numbers.add(num);
}

const array = Array.from(numbers);

console.log(array);

