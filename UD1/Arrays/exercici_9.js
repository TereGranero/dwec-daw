/*
Fes un vector de noms. 
Amb filter() torna un vector que tinga aquells noms amb 6 o més lletres.
*/

let noms = ['María', 'Juan', 'Paco', 'Ursula', 'Anna'];
console.log(`Vector de noms: ${noms}`);

let filtered = noms.filter(nom => nom.length >= 6);
console.log(`Noms filtrats: ${filtered}`);
