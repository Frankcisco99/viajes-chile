//configuraciones de bootstrap para que funcionen los tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


//función encargada de añadir clase en caso de hacer scroll en la pagina web color de fondo al navbar (tipo fiverr)
const isActive = () => {
    window.scrollY > 0 ? document.getElementById("menu").classList.add("bg-color") : document.getElementById("menu").classList.remove("bg-color");
};

//se añade un event listener a la pantalla con la función anterior
window.addEventListener("scroll", isActive);

