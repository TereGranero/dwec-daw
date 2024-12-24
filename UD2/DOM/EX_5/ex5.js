window.onload = function() {

    /*Fes que aparega una taula amb el nom de 5 paissos i la seua capital. 
    Els valors estaran guardats en un o vàrios vectors.*/

    const paissos = [
        {"Spain": "Madrid"}, 
        {"France": "Paris"}, 
        {"USA": "Washington"}, 
        {"Belgium": "Brussels"}, 
        {"Denmark":"Kopenhavn"}];

    function creaCabecera(){
        let cadenaHTML="<tr><th>PAIS</th><th>CAPITAL</th></tr>";
        return cadenaHTML;
    }
    function creaCos(paissos){
        let cadenaHTML="";
        paissos.forEach(pais => {
            let key = Object.keys(pais)[0];
            let value = pais[key];
            cadenaHTML+="<tr><td>" + `${key}` + "</td><td>" + `${value}` + "<td></tr>";
        });
        return cadenaHTML;
    }

    function creaTaula(){
        let cadenaHTML = "<table>" + creaCabecera() + creaCos(paissos) + "</table>";
        document.getElementById("content").innerHTML=cadenaHTML;
    }

    creaTaula();

}
