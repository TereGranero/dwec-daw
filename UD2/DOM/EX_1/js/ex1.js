window.onload = function() {
    
    // Trau un alert informant del número d'enllaços que hi ha
    var enlaces = document.getElementsByTagName("a");
    alert("Hay "+enlaces.length+" enlaces en esta página.");


    /*Modifica dinàmicament la imatge del logo
    Change image on click */
    document.getElementById("logo").addEventListener('click', function() {
        const img1 = 'images/logo.gif';
        const img2 = 'images/logo2.gif';
        if (this.src.includes(img1)) {
            this.src = img2;
        } else {
            this.src = img1;
        }
    });
    
    /*Modifica dinàmicament els textos del menú principal
    Load new texts from array and replace attribute textContent*/
    var new_menu_elements = ["Inici", "Nosaltres", "Videos", "Feeds"];
    var menu_elements = document.querySelectorAll('#header ul li a');
    var original_menu_elements = Array.from(menu_elements).map(item => item.textContent);

    menu_elements.forEach((item, index) => {
        // Replace text on mouseover
        item.addEventListener('mouseover', function() {
            if (index < new_menu_elements.length) {
                item.textContent = new_menu_elements[index];
            }
        });
    });
    menu_elements.forEach((item, index) => {
        // Replace to original text on mouseout
        item.addEventListener('mouseout', function() {
            if (index < original_menu_elements.length) {
                item.textContent = original_menu_elements[index];
            }
        });
    });

    /*Elimina dinàmicament la part dels favorite links
    new class favourite added*/
    const elementsToRemove = document.querySelectorAll('.favourite');
    elementsToRemove.forEach(element => {
        element.remove();
    });
}
