localStorage.setItem('nom', 'Teresa');
localStorage.setItem('cognoms', 'Granero Ruiz');
localStorage.setItem('email', 'teregraneroruiz@gmail.com');

const nom = localStorage.getItem('nom');
const apellidos = localStorage.getItem('cognoms');
const email = localStorage.getItem('email');

console.log(`Nom: ${nom}`);
console.log(`Cognoms: ${cognoms}`);
console.log(`Email: ${email}`);

