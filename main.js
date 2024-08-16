// script.js
function toggleInfo() {
    // Get the info element
    const infoElement = document.getElementById("info");
    
    // Toggle its visibility
    if (infoElement.style.display === 'none' || infoElement.style.display === '') {
        infoElement.style.display = 'block';
    } else {
        infoElement.style.display = 'none';
    }
}
