
function carregaImatge(){
    //utilitzem una cadena de text per a emmagatzemar el codi html a injectar
    cadenaHTML='<img id="foto" src="./img/Estany_de_Sant_Maurici_-_panoramio_(1).jpg" alt="">'
    //injectem el codi en el <div> amb id=contingut
    document.getElementById("contingut").innerHTML=cadenaHTML;
    //com acabem de crear la imatge, li assignem un listener
    document.getElementById("foto").addEventListener("click", saludarImatge);
}

function saludarImatge(){
    alert("hola, açò és una imatge");
}

/*per a assegurar-nos que el DOM està creat quan assignem funcions 
per a manejar events, ho fem d'aquesta forma*/
window.onload=function(){
    /*cal tindre la precaució de no assignar les funcions amb el parèntesi,
    ja que si ho fem amb carregaImatge() assigna i executa, és una 
    particularitat de Javascript*/
    document.getElementById("saludo").onclick = carregaImatge;
}
