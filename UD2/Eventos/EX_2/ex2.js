window.onload = function() {
    
    // Data
    const capitals = [
        {
            "url": './images/croatia.png',
            "capital": "Belgrado",
            "country": "Croacia"
        },
        {
            "url": './images/belgium.png',
            "capital": "Bruselas",
            "country": "Bélgica"
        },
        {
            "url": './images/denmark.png',
            "capital": "Copenague",
            "country": "Dinamarca"
        },
        {
            "url": './images/france.png',
            "capital": "Paris",
            "country": "Francia"
        },
        {
            "url": './images/norway.png',
            "capital": "Oslo",
            "country": "Noruega"
        },
        {
            "url": './images/ireland.png',
            "capital": "Dublin",
            "country": "Irlanda"
        },
        {
            "url": './images/austria.png',
            "capital": "Viena",
            "country": "Austria"
        },
        {
            "url": './images/germany.png',
            "capital": "Berlin",
            "country": "Alemania"
        },
        {
            "url": './images/uk.png',
            "capital": "Londres",
            "country": "UK"
        },
        {
            "url": './images/swiss.png',
            "capital": "Berna",
            "country": "Suiza"
        },
        {
            "url": './images/italy.png',
            "capital": "Roma",
            "country": "Italia"
        },
        {
            "url": './images/portugal.png',
            "capital": "Lisboa",
            "country": "Portugal"
        },
        {
            "url": './images/hungary.png',
            "capital": "Budapest",
            "country": "Hungría"
        },
        {
            "url": './images/greece.png',
            "capital": "Atenas",
            "country": "Grecia"
        },
        {
            "url": './images/china.png',
            "capital": "Pekin",
            "country": "China"
        },
        {
            "url": './images/japan.png',
            "capital": "Tokio",
            "country": "Japón"
        }
    ];

    function shuffleArray(array) {
        // each element is interchanged by a ramdom element
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    function displayTable(level) {

        // Shuffle array and select elements
        const capitalsSelected = shuffleArray(capitals).slice(0, level * level);

        // Content
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = "";

        // Create table
        const table = document.createElement('table');
        
        // Create rows
        for (let i = 0; i < level; i++) {
            const row = document.createElement('tr');

            // Create columns
            for (let j = 0; j < level; j++) {

                const column = document.createElement('td');

                // Change color
                column.style.backgroundColor = 'lightyellow';
                column.addEventListener('mouseover', function() {
                    this.style.backgroundColor = 'lightgrey';
                });
                column.addEventListener('mouseout', function() {
                    this.style.backgroundColor = 'lightyellow';
                });

                let indexCapital = (i * level) + j; 
                if (indexCapital < capitalsSelected.length){
                    const image = document.createElement('img');
                    image.src = capitalsSelected[indexCapital]["url"];
                    image.addEventListener('click', function() {
                        alert(`La capital de ${capitalsSelected[indexCapital]["country"]} es ${capitalsSelected[indexCapital]["capital"]}.`);
                    });
                    column.appendChild(image);
                } //end column
                row.appendChild(column);
            }

            table.appendChild(row);

        } // end row

        contentDiv.appendChild(table);
    }
        
    // Level buttons
    for (let level = 1; level <5; level++){
        document.getElementById(level.toString()).onclick = () => displayTable(level);
    }

}