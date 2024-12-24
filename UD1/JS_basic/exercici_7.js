/* Quadrícula amb bombes
Simula un camp de mines en una quadrícula de 5x5. 
Hi ha 10 bombes amagades a coordenades aleatòries. 
L'usuari ha d'introduir les coordenades X i Y, 
i el programa indicarà si hi ha una bomba o no en aquesta posició. 
El joc continuarà fins que es descobrisquen totes les bombes o l'usuari decideixi parar.
*/

// syncronous input
const readlineSync = require('readline-sync');


// initializes
function generate_field() {

  // genenerates matrix
  const field = Array(5).fill().map(() => Array(5).fill(false));

  // selects 10 coordinates for bombs
  for (let k = 0; k < 10; k++) {
    let x, y
    do {
      x = Math.floor(Math.random() * 5);
      y = Math.floor(Math.random() * 5);
    } while (field[y][x]); //is already a bomb
    field[y][x] = true; // x is x-axis horizontal, columns
  }
  console.log(field);
  return field;
}

function get_coordinates() {

  const input = readlineSync.question('Coordenades (X, Y) (valors 1-5): ')
  
  // Finish game
  if (input === '*') {
    console.log("Adèu!")
    return [-1, -1];
  } 

  // Split each coordinate, delete blanks, convert to integer base10
  // and convert into index 0-4
  const [x, y] = input.split(',').map(num => parseInt(num.trim(), 10) -1);
  
  // Validate coordinates
  if ((x<0) || (x>4) || (y<0) || (y>4)) {
    console.log("El valors no són correctes.")
    return get_coordinates();
  } 
  //OK
  return [x, y];

}

function find_bomb(coordinates, field) {
  const [x, y] = coordinates;

  switch(field[y][x]) {
    case 'open':
      console.log("Cel.la ja oberta");
      return [false, field];
    case false:
      console.log("Sense bomba.");
      field[y][x] = 'open'
      return [false, field];
    case true:
      console.log("Bomba!");
      field[y][x] = 'open'
      return [true, field];
    default:
      return [false, field];
  }
}


function start_game() {

  let field = generate_field();
  let bombs_found = 0

  console.log("Comença el joc. Tria coordenades (* per a eixir):");

  while(true){
    const coordinates = get_coordinates();
    const [x, y] = coordinates;

    if (x === -1 && y === -1) {
      return;
    }

    //Check coordinates
    const [bomb, new_field] = find_bomb([x, y], field);
    field = new_field;
    if (bomb) {
      bombs_found++;
      if (bombs_found === 10) {
        console.log('Has trobat les 10 bombes.');
        return;
      } 
    }
  }
}

start_game();
