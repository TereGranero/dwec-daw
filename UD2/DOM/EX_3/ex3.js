window.onload = function() {
    /*Canvia dinàmicament el text del menú principal i els menús secundaris*/
    var main_menu = document.querySelectorAll('#menu ul li a');
    var second_menu = document.querySelectorAll('#sidebar ul li a');

    function change_menu(menu_to_change) {
        var menu = ["Inici", "Nosaltres", "Productes", "Blog", "Contacte"];
        menu_to_change.forEach((item, index) => {
            if (index < menu.length) {
                item.textContent = menu[index];
            }
        });
    }
    change_menu(main_menu);
    change_menu(second_menu);

    /*Canvia el color de la lletra dels menús dinàmicament.*/
    function color_menu(menu_to_change) {
        menu_to_change.forEach((item) => {
            item.classList.add('rojo');
        });
    }
    color_menu(main_menu);
    color_menu(second_menu);


    /*Esborra el contingut del <div> que té per id="content" i 
    fes que apareguen tres paragrafs predefinits per tu
    */
    var content_div = document.getElementById("content");
    
    //Clean content child by child
    while (content_div.firstChild) {
        content_div.removeChild(content_div.firstChild);
    }

    //Create nodes and append as childs
    for (var i = 0; i < 3; i++) {
        var text = document.createTextNode("Esto es un párrafo.");
        var paragraf = document.createElement("p");
        paragraf.appendChild(text);
        content_div.appendChild(paragraf);
    }
}