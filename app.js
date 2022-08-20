function showMenu() {
    let x = document.getElementsByTagName("nav")[0];
    x.style.display = "block";
}
function hideMenu() {
    let x = document.getElementsByTagName("nav")[0];
    x.style.display = "none";
}

window.addEventListener('resize', () => {
    let x = document.getElementsByTagName("nav")[0];
    if (window.innerWidth >= 768) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});