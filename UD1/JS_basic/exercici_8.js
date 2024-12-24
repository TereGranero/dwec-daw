/* Loteria primitiva.
Genera 6 número aleatoris sense repetir entre 1 i 49.
L'usuari ha de introduir 6 números i el programa indica
quants encercerts ha tingut.
*/

// syncronous
const readlineSync = require('readline-sync');

// initializes
function generate_lottery() {
  let lottery = [];

  // genenerates random numbers
  for (let k = 0; k < 6; k++) {
    let x
    do {
      x = Math.floor(Math.random() * 49) + 1;
    } while (lottery.includes(x)); 
    lottery.push(x);
  }
  return lottery;
}

function get_numbers() {

  let count = 0;
  let numbers = [];

  while (count < 6) {
    let input = readlineSync.question("Introdueix un número (valors 1-49): ");
    const num = parseInt(input);
    if ((!isNaN(num)) && (num>0) && (num<50)) {
      if (!numbers.includes(num)) {
        numbers.push(num);
        count++;
      } else {
        console.log("El número és repetit.");
      }
    } else {
      console.log("El número no és vàlid.");
    }
  }
  console.log(`Aquests són els teus números: ${numbers}`)
  return (numbers);
}

function comprobacio(lottery, numbers) {
  
  let goals = 0;
  
  numbers.forEach(function(num) {
    if (lottery.includes(num)) {
      goals++;
    }
  });

  return goals;
}

function main() {
  let lottery = generate_lottery();
  let numbers = get_numbers();
  console.log(`Aquests són els números aleatoris: ${lottery}`)
  let goals = comprobacio(lottery, numbers);
  console.log(`Has encertat ${goals} números.`)
}

main();
