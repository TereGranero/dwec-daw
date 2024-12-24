/* ------------------------ ENUNCIAT --------------------------------------

Repeteix l'exercici anterior però has de crear la matriu a partir de tres files 
i afegir-les una a una fent ús del mètode push().
*/


/* ----------------------- ROW CREATION FUNCTION ------------------------------------

Array.from creates an array from an iterable object. 
    1st arg is Object length property
    2nd arg is an arrow function which applies to each element of array.
        function args are actual indexes of new array
*/

const create_row = (i, num_columns) => {
    return Array.from({ length: num_columns }, (_, j) => `f${i+1}c${j+1}`);
  };
  


// -------------------------- MATRIX CREATION ---------------------------------

  const matrix = [];
  const num_rows = 3;
  const num_cols = 5;
  
  for (var i = 0; i < num_rows; i++) {
    matrix.push(create_row(i, num_cols));
  }
  


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



