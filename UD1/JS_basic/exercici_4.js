/* Ordenar un array
Genera un array de 15 números enters aleatoris i els ordena de menor a major
*/

function generate_values() {
// Generates an array with 15 integers with values [1,100]
    let values = [];

    for (let i = 0; i < 15; i++) {  
        values.push(Math.floor(Math.random() * 100) + 1);
    }
    return values;
}

function sort_array(values) {
    const n = values.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
        // iterates all array elements
            if (values[i] > values[i + 1]) {
                // interchanges elements
                let temp = values[i];
                values[i] = values[i + 1];
                values[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return values;
}

// Generates an array with 15 integers with values [1,100]
const values = generate_values();
console.log("Array original:", values);

// Sorts array
const sorted_values = sort_array(values);
console.log("Array ordenat:", sorted_values);
