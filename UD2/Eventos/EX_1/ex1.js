window.onload = function() {
    
    // Images urls
    const images = {
        aliny: [
            './images/aliny1.png',
            './images/aliny2.jpg',
            './images/aliny3.jpg',
        ],
        verdolaga: [
            './images/corn.jpg',
            './images/cucumbers.jpg',
            './images/cabbage.jpg',
            './images/tomatoes.jpg',
            './images/carrots.jpg'
        ],
        proteines: [
            './images/cheese.jpg',
            './images/salmon.jpeg',
            './images/chicken.jpg',
            './images/egg.jpg'
        ]
    };


    function addProduct(event) {
        const id = event.target.id;
        const contentDiv = document.getElementById("content");
        
        if (images[id]) {
            // Select ramdom index
            const randomUrl = images[id][Math.floor(Math.random() * images[id].length)];
            // Create element
            const image = document.createElement('img');
            image.src = randomUrl;
            // Remove image on double click
            image.addEventListener('dblclick', function() {
                this.remove();
            });
            // Add image to content
            contentDiv.appendChild(image);
        }
    }


    function startSalad() {
        // Create initial add products screen

        // Content
        let content_div = document.getElementById("content");
        content_div.innerHTML = '';
  
        // Menu
        const buttons = [
            { id: 'verdolaga', text: 'Afegir verdolaga', onClick: addProduct},
            { id: 'proteines', text: 'Afegir proteines', onClick: addProduct},
            { id: 'aliny', text: 'Afegir alinyament', onClick: addProduct},
            { id: 'clear', text: 'Començar', onClick: startSalad}
        ];
        let menu = document.getElementById("menu");

        // First create buttons
        menu.innerHTML = buttons.map(button => 
            `<button id="${button.id}">${button.text}</button>`
        ).join('');

        // Then add addEventListener to buttons
        buttons.forEach(button => {
            if (button.onClick) {
                document.getElementById(button.id).addEventListener('click', button.onClick);
            }
        });
    }


    // Start button
    let start_btn = document.getElementById("start");
    start_btn.addEventListener("click", startSalad);

}