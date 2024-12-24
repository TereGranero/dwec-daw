/*
Genera una matriu on cada fila serà el nom d'un producte i el seu preu en euros. 
Posa el preu entre 0 i 100€. 
Aplica les funcions necessàries per a, a partir d'aquesta matriu, 
obtindre altra matriu amb aquells productes que 
el seu preu siga major de 75€ i s'haja aplicat una rebaixa del 10%.
*/

const productes = [
    ["producte1", 25],
    ["producte2", 95],
    ["producte3", 60],
    ["producte4", 76],
    ["producte5", 45]
];

console.log("Els productes són: ");
console.table(productes);

const filtered = productes
    .filter(product => product[1] > 75)
    .map(product => [product[0], product[1] * 0.9]);

console.log("Els nous productes són: ");
console.table(filtered);
