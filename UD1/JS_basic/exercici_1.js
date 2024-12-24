/* Classificació de notes
Demana la not d'un alumne (de 0 a 10) i mostra la classificació corresponent:

0-4.9: Insuficient
5-5.9: Suficient
6-6.9: Bé
7-8.9: markble
9-10: Excel·lent
Si la nota introduïda no és vàlida (fora del rang de 0 a 10), mostra un missatge d'error.
*/

// interface
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Classifies a mark
function classificator(mark) {

    if (mark >= 0 && mark < 5) {
        return "Insuficient";
    } else if (mark >= 5 && mark < 6) {
        return "Suficient";
    } else if (mark >= 6 && mark < 7) {
        return "Bé";
    } else if (mark >= 7 && mark < 9) {
        return "Notable";
    } else if (mark >= 9 && mark <= 10) {
        return "Excel·lent";
    } else {
        return "";
    }
}

function main() {
    rl.question("Introdueix la nota de l'alumne (de 0 a 10): ", (input) => {
        const mark = parseFloat(input);

        if (isNaN(mark) || mark < 0 || mark > 10) {
            console.log("La nota introduïda no és vàlida. Ha de ser un número entre 0 i 10.");
        } else {
            const round_mark = Math.round(mark * 10) / 10; // Rount to 1 decimal
            const label = classificator(round_mark);
            if (label != ""){
                console.log(`La classificació per a la nota ${round_mark.toFixed(1)} és: ${label}`);
            } else {
                console.log("S'ha produït un error.");
            }
        } 

        rl.close();
        return;
    });
}

main();
