window.onload = function() {
    const image = document.getElementById('draggableImg');
    const dropzone = document.getElementById('dropzone');

    // Start dragging
    image.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    });

    // Drag over dropzone
    dropzone.addEventListener('dragover', function (event) {
        event.preventDefault(); 
        dropzone.classList.add('hover');
    });

    // Drag leaving dropzone
    dropzone.addEventListener('dragleave', function (event) {
        dropzone.classList.remove('hover');
    });

    // Drop image
    dropzone.addEventListener('drop', function (event) {
        event.preventDefault(); 
        dropzone.classList.remove("hover");
        const imageId = event.dataTransfer.getData('text/plain');
        const draggedImage = document.getElementById(imageId);
        dropzone.appendChild(draggedImage);
    });
}
