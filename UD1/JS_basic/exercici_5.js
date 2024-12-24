/* Menú d'operations aritmètiques
Fes un programa que mostre un menú amb 5 opcions:
1.Sumar
2.Restar
3.Multiplicar
4.Dividir
5.Eixir
Quan es tria una operació (sumar, restar, multiplicar o dividir), 
demana dos números i mostra el resultat de l'operació. 
Si es tria l'opció Eixir, el programa es tancarà.
*/

// Interface
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Object operations
const operations = {
  1: { nom: 'Sumar', func: (a, b) => a + b },
  2: { nom: 'Restar', func: (a, b) => a - b },
  3: { nom: 'Multiplicar', func: (a, b) => a * b },
  4: { nom: 'Dividir', func: (a, b) => b !== 0 ? a / b : 'Error: No es pot dividir per zero' }
};

function show_menu() {

  Object.entries(operations).forEach(([key, { nom }]) => {
    console.log(`${key}. ${nom}`);
  });
  console.log('5. Eixir');
  rl.question('Selecciona una opció: ', handle_option);
}

function handle_option(opcio) {
  if (opcio === '5') {
    console.log('Adéu!');
    return rl.close();
  }
  
  if (operations[opcio]) {
    rl.question('Introdueix el primer número: ', (num1) => {
      rl.question('Introdueix el segon número: ', (num2) => {
        const result = operations[opcio].func(parseFloat(num1), parseFloat(num2));
        console.log(`Resultat: ${result}`);
        show_menu();
      });
    });
  } else {
    console.log('Opció no vàlida.');
    show_menu();
  }
}

show_menu();
