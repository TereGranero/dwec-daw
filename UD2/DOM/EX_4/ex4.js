window.onload = function() {
    /*Esborra el contingut del <div> que té per id="content" i 
    fes que aparega una imatge aleatòria cada vegada que carregues la pàgina*/

    const content_div = document.getElementById("content");
    
    // parameters
    const width = 400;
    const height = 300;
    const id = Math.floor(Math.random() * 1000);

    //web ramdom photos
    const src = `https://picsum.photos/${width}/${height}?random=${id}`;

    content_div.innerHTML = `<img src=${src}>`;
}