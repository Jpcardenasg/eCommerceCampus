

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

function obtenerProducto(event) {

    const tarjetaActual = event.currentTarget.closest('.card');
    const card = tarjetaActual.cloneNode(true);

    const botonCerrar = document.createElement('button');
    botonCerrar.innerHTML = '<i class="bx bx-x"></i>';
    botonCerrar.onclick = () => {
        cerrarAgregarProducto();
    };

    const imagenes = card.querySelector(".imagenes");
    const borrarImagenes = imagenes.querySelector(".listaImagenes");
    imagenes.removeChild(borrarImagenes);
    imagenes.appendChild(botonCerrar);

    const footCard = card.querySelector('.footCard');
    const boton = card.querySelector('#obtener');
    boton.innerHTML = 'Agregar';
    const input = document.createElement('input');
    footCard.appendChild(input);


    const agregarProducto = document.getElementById('agregarProducto');
    agregarProducto.innerHTML = '';
    agregarProducto.appendChild(card);
    agregarProducto.style.display = "block";
}

function cerrarAgregarProducto() {
    const agregarProducto = document.getElementById('agregarProducto');
    agregarProducto.style.display = "none";
}

function mostrarProductosAgregados() {
    const productosAgregados = document.getElementById("productosAgregados");
    productosAgregados.style.display = "flex";
}

function cerrarProductosAgregados() {
    const productosAgregados = document.getElementById("productosAgregados");
    productosAgregados.style.display = "none";
}