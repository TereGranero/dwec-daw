window.onload = function() {
    //-------------------------- INIT ------------------------------

    // Map centered in Tavernes
    const map = L.map('map').setView([39.0728, -0.2672], 13);

    // OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker
    L.marker([39.0728, -0.2672])
        .bindPopup("<h3>Tavernes de la Valldigna</h3><p>Estàs a Tavernes de la Valldigna!</p>")
        .addTo(map);

    // ----------------------- Add Marker Mode --------------------------

    let addMarkerMode = false;   

    function toggleAddMarkerMode() {
        // Activates-deactivates marker mode on click 'Afegir Marcador' button
        addMarkerMode = !addMarkerMode;
        const mapContainer = map.getContainer();

        // Changes cursor to pointer when in Add Marker mode
        if (addMarkerMode) {
            mapContainer.classList.add('pointer');
        } else {
            mapContainer.classList.remove('pointer');
        }
    }

    function addMarker(latlng) {
        if (addMarkerMode) {
            // Add marker where clicked
            L.marker(latlng)
                .bindPopup("<h3>Nou Marcador</h3>")
                .addTo(map);
        }
    }

    // ----------------------- Toggle cursor -------------------------

    let changeCursorActive = false;

    function toggleCursor() {
        // Toggle cursor on click 'Canviar cursor' button
        changeCursorActive = !changeCursorActive;
        document.getElementById('map').classList.toggle('cursor');
    }

    // ------------------------- Circle Mode -------------------------

    let circleMode = false;
    let circle = null;

    function activateCircleMode() {
        // Activates-deactivates circle mode on click 'Afegir/Llevar circle' button
        circleMode = !circleMode;
        const mapContainer = map.getContainer();
        if (circleMode) {
            mapContainer.classList.add('pointer');
        } else {
            mapContainer.classList.remove('pointer');
            removeCircle(); 
        }
    }
    
    function deactivateCircleMode() {
        circleMode = false;
        const mapContainer = map.getContainer();
        mapContainer.classList.remove('pointer');
    }

    function drawCircle(latlng) {
        removeCircle(); 
    
        // Create new circle
        circle = L.circle([latlng.lat, latlng.lng], {
            radius: 500, 
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            weight: 2     
        }).addTo(map);
    }

    function removeCircle() {
        if (circle) {
            map.removeLayer(circle);
            circle = null;
        }
    }

    // -------------------- Handle events on buttons ------------------

    const eventMapping = {
        "addMarkerBtn": toggleAddMarkerMode,
        "toggleCursorBtn": toggleCursor,
        "toggleCircleBtn": activateCircleMode,
    };

    Object.keys(eventMapping).forEach(id => {
        document.getElementById(id).addEventListener('click', eventMapping[id]);
    });



    // ---------------------- Handle click on map ----------------------

    map.on('click', function(e) {

        if (circleMode) {
            // Draw circle
            drawCircle(e.latlng);
            deactivateCircleMode();
        } 
        else if (addMarkerMode) {
            // Add marker 
            addMarker(e.latlng);
            toggleAddMarkerMode();
        }
        else {
            // Show coordinates
            L.popup()
                .setLatLng(e.latlng)
                .setContent("Coordenades: " + e.latlng.lat.toFixed(4) + ", " + e.latlng.lng.toFixed(4))
                .openOn(map);
        }
    });

    // Add scale
    L.control.scale().addTo(map);
}
