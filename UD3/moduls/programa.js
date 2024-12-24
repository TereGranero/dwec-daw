import {suma, resta, multiplica, pi} from './matematica.js';

const a = 10;
const b = 2;

let content = document.getElementById("msg");
let piElement = document.getElementById("show_pi");
piElement.innerHTML += `El valor de pi es ${pi}`;

let btn_suma = document.getElementById("sum");
btn_suma.addEventListener("click", () => {
    content.innerHTML = `La suma de ${a} y ${b} es ${suma(a, b)}`;
})

let btn_restar = document.getElementById("res");
btn_restar.addEventListener("click", () => {
    content.innerHTML = `La resta de ${a} menos ${b} es ${resta(a, b)}`;
})

let btn_multiplica = document.getElementById("mul");
btn_multiplica.addEventListener("click", () => {
    content.innerHTML = `La multiplicación de ${a} por ${b} es ${multiplica(a, b)}`;
})

