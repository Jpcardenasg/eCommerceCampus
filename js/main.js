

const marcaSelector = document.getElementById("marcaSelector");

marcaSelector.onclick = () => {
    const listaMarcas = document.getElementById("listaMarcas");
    listaMarcas.classList.toggle("active");
}


function seleccionarMarca(event) {
    const marcaSeleccionada = event.target.dataset.marca;
    const listaMarcas = document.getElementById("listaMarcas");

    listaMarcas.classList.remove("active");

    const seccionesMarcas = document.querySelectorAll(".seccionMarca");
    seccionesMarcas.forEach(seccion => {
        if (seccion.id === marcaSeleccionada) {
            seccion.classList.remove("hidden");
        } else {
            seccion.classList.add("hidden");
        }
    });
}