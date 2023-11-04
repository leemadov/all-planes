function adjustLayout() {
    if (window.innerWidth < 600) {
    } else {
    }
}

window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);
