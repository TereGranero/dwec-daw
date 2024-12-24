/* ------------------------ ENUNCIAT --------------------------------------

Crea una matriu de 3 files i 5 columnes. 
El contingut de les cel·les ha de ser un indicador de la fila 
i la columna de manera que la primera fila quede f1c1, f1c2, f1c3...

Recorre tota la matriu empalmant dos forEach() i mostra el resultat en consola.
*/



/* ----------------------- MATRIX CREATION ------------------------------------

Array.from creates an array from an iterable object. 
    1st arg is Object length property
    2nd arg is an arrow function which applies to each element of array.
        function args are actual indexes of new array
*/

const matrix = Array.from({ length: 3 }, (_, i) => 
    Array.from({ length: 5 }, (_, j) => `f${i+1}c${j+1}`)
);
  

/* --------------------- PRINT MATRIX ------------------------------------------

An arrow function is applied for each element
    matrix.forEach for each row. i is row index
    row.forEach for each value. j is column index
*/
matrix.forEach((row, i) => {
    row.forEach((value, j) => {
        console.log(value);
    });
});

