/* Suma fins a 1000
El programa demana números a l'usuari. 
Suma el números fins que la suma arribe o supere 1000.
Quan això passe, mostra la suma final i es tanca.
*/

// Interface
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Accumulator
let acc_sum = 0;

function request_number() {
  rl.question('Introdueix un número: ', (input) => {
    const num = parseFloat(input);

    if (isNaN(num)) {
      console.log('Número no vàlid.');
      request_number();
    } else {
      acc_sum += num;

      if (acc_sum >= 1000) {
        console.log(`La suma final és: ${acc_sum}`);
        rl.close();
      } else {
        request_number();
      }
    }
  });
}

request_number();
