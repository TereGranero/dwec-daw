/* CÍndex de Massa Corporal (IMC)
Demana l'alçada (en metres) i el pes (en kg) d'una persona, i
calcule el seu IMC (Índex de Massa Corporal) amb la fórmula:

IMC = pes(kg) / alçada(m)^2

Després, mostra el seu estat segons la següent taula:

IMC < 18.5: Pes insuficient
IMC 18.5 - 24.9: Pes normal
IMC 25 - 29.9: Sobrepès
IMC ≥ 30: Obesitat
*/

// Creates a readline interface
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificator(imc) {
    /* Classifies imc
    Args:
        imc (float)
    Returns:
        (str): label
    */
        if (imc >= 0 && imc < 18.5) {
            return "Pes isuficient";
        } else if (imc >= 18.5 && imc < 24.9) {
            return "Pes normal";
        } else if (imc >= 25 && imc < 29.9) {
            return "Sobrepès";
        } else if (imc >= 30) {
            return "Obesitat";
        } else {
            return "";
        }
    }

function calcula_IMC() {
    rl.question("Introdueix el teu pes en kg: ", (weight) => {
        rl.question("Introdueix la teua alçada en metres: ", (height) => {
            weight = parseFloat(weight);
            height = parseFloat(height);

            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                console.log("No són valors vàlids.");
            } else {
                const imc = weight / (height ** 2);
                console.log(`El teu IMC és: ${imc.toFixed(2)}`);
                const classificacio = classificator(imc);
                if (classificacio !== ""){
                    console.log(`${classificacio}`);
                } else {
                    console.log("S'ha produït un error.");
                }
            }

            rl.close();
        });
    });
}

calcula_IMC();
