const panelbar=document.getElementById('panelbar')
function menubar() {
    const panelbar = document.getElementById('panelbar');  
    if (panelbar.style.display === "none" || panelbar.style.display === "") {
        panelbar.style.display = "block";  
    } else {
        panelbar.style.display = "none";   
    }
}