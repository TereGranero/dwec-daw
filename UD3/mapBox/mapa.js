window.onload = function() {
    // Xuso token
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9ydGkiLCJhIjoiY2xvaWNwMTkyMW9ubjJxbjA5aTg2YmFycyJ9.w0zdUqxA_kjatKYu7sdneA';

    //-------------------------- INIT ------------------------------
    
    // Map centered at Tavernes
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [-0.2672, 39.0728], // longitude, latitude!!
        zoom: 13
    });

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.ScaleControl());

    // Initial marker at Tavernes
    new mapboxgl.Marker({ color: 'red' })
        .setLngLat([-0.2672, 39.0728])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Tavernes de la Valldigna</h3><p>Estàs a Tavernes de la Valldigna!</p>"))
        .addTo(map);

    // Initial status
    let addMarkerMode = false;
    let changeCursorActive = false;
    let circleMode = false;


    // ------------------------ Handle cursor --------------------------

    function updateCursor() {
        const canvas = map.getCanvas();
        if (addMarkerMode || circleMode) {
            canvas.style.cursor = 'crosshair';
        } else if (changeCursorActive) {
            canvas.style.cursor = 'crosshair';
        } else {
            canvas.style.cursor = '';
        }
    }

    // ----------------------- Add Marker Mode --------------------------

    function toggleAddMarkerMode() {
        circleMode = false;
        addMarkerMode = !addMarkerMode;
        updateCursor();
    }

    function addMarker(lngLat) {
        if (addMarkerMode) {
            new mapboxgl.Marker({ color: 'yellow' })
                .setLngLat(lngLat)
                .setPopup(new mapboxgl.Popup().setHTML("<h3>Nou Marcador</h3>"))
                .addTo(map);
        }
    }

    // ----------------------- Toggle cursor -------------------------

    function toggleCursor() {
        addMarkerMode = false;
        circleMode = false;
        changeCursorActive = !changeCursorActive;
        updateCursor();
    }

    // ------------------------- Circle Mode -------------------------
    
    let currentCircle = null;

    function activateCircleMode() {
        addMarkerMode = false;
        circleMode = !circleMode;
        updateCursor();

        if (!circleMode) {
            removeCircle();
        }
    }

    function deactivateCircleMode() {
        circleMode = false;
        updateCursor();
    }

    function drawCircle(lngLat) {
        removeCircle();

        // Create a circle
        const center = [lngLat.lng, lngLat.lat];
        const radius = 0.5; // kilometres
        const options = {
            steps: 64,
            units: 'kilometers'
        };
        const circle = turf.circle(center, radius, options);

        // Get source for new layer
        if (!map.getSource('circle-source')) {
            map.addSource('circle-source', {
                type: 'geojson',
                data: circle
            });
        } else {
            map.getSource('circle-source').setData(circle);
        }

        // Add new layer
        if (!map.getLayer('circle-layer')) {
            map.addLayer({
                id: 'circle-layer',
                type: 'fill',
                source: 'circle-source',
                paint: {
                    'fill-color': '#f03',
                    'fill-opacity': 0.5
                }
            });

            map.addLayer({
                id: 'circle-outline',
                type: 'line',
                source: 'circle-source',
                paint: {
                    'line-color': '#f03',
                    'line-width': 2
                }
            });
        }

        currentCircle = circle;
    }

    function removeCircle() {
        if (currentCircle && map.getLayer('circle-layer')) {
            map.removeLayer('circle-layer');
            map.removeLayer('circle-outline');
            map.removeSource('circle-source');
            currentCircle = null;
        }
    }

    // -------------------- Handle events on buttons ------------------

    const eventMapping = {
        "addMarkerBtn": toggleAddMarkerMode,
        "toggleCursorBtn": toggleCursor,
        "toggleCircleBtn": activateCircleMode
    };

    Object.keys(eventMapping).forEach(id => {
        document.getElementById(id).addEventListener('click', eventMapping[id]);
    });

    // ---------------------- Handle click on map ----------------------

    map.on('click', function(e) {
        if (circleMode) {
            drawCircle(e.lngLat);
            deactivateCircleMode();
        }
        else if (addMarkerMode) {
            addMarker(e.lngLat);
            toggleAddMarkerMode();
        }
        else {
            // Show coordinates
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML("Coordenades: " + e.lngLat.lat.toFixed(4) + ", " + e.lngLat.lng.toFixed(4))
                .addTo(map);
        }
    });
}