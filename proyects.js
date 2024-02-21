// Datos de ejemplo para tus proyectos
const proyectos = [
    {
        nombre: "Proyecto 1",
        imagen: "./image/Tablas.jpeg",
        detalles: "./proyectos/proyecto1.txt",
        link:"./Practica1-HTML/tabla/Tabla_y_formulario.html"
    
    },
    {
        nombre: "Proyecto 2",
        imagen: "./image/website.jpeg",
        detalles: "./proyectos/proyecto2.txt",
        link:"./Practica1-HTML/mi sitio/Mi_sitio.html"
    
    },
    {
        nombre: "Proyecto 3",
        imagen: "./image/menu.jpeg",
        detalles: "./proyectos/proyecto3.txt",
        link:"./Practica1-HTML/menu/menu.html"
    },
    {
        nombre: "Proyecto 4",
        imagen: "./image/ultimo_proyecto.jpeg",
        detalles: "./proyectos/proyecto4.txt",
        link:"./Practica1-HTML/ultimo proyecto/ultimo_proyecto.html"
    },
    {
        nombre: "Proyecto 5",
        imagen: "./image/Listado.jpeg",
        detalles: "./proyectos/proyecto5.txt",
        link:"./Practica1-HTML/Listado de cursos/Listado_de_cursos.html"
    },
     {
        nombre: "Proyecto 6",
        imagen: "./image/pedido.jpeg",
        detalles: "./proyectos/proyecto6.txt",
        link:"./Practica1-HTML/pedidos/pedido.html"
    },
 {
        nombre: "Proyecto 7",
        imagen: "./image/busqueda.jpeg",
        detalles: "./proyectos/proyecto7.txt",
        link:"./Practica1-HTML/Busqueda/busqueda.html"
    },
 {
        nombre: "Proyecto 8",
        imagen: "./image/pagina_navegable.jpeg",
        detalles: "./proyectos/proyecto8.txt",
        link:"./Practica1-HTML/pagina web navegable/Pagina_principal.html"
    },
 {
        nombre: "Proyecto 9",
        imagen: "./image/galeria.jpeg",
        detalles: "./proyectos/proyecto9.txt",
        link:"./Practica1-HTML/galeria de imagenes/galeria.html"
    },
 {
        nombre: "Proyecto 10",
        imagen: "./image/clases.jpeg",
        detalles: "./proyectos/proyecto10.txt",
        link:"./Practica1-CSS/primera practica css/Primera.html"
    },
 {
        nombre: "Proyecto 11",
        imagen: "./image/bordes.jpeg",
        detalles: "./proyectos/proyecto11.txt",
        link:"./Practica1-CSS/primera practica css/segunda pratica css/Bordes.html",
        
    },
 {
        nombre: "Proyecto 12",
        imagen: "./image/sombras.jpeg",
        detalles: "./proyectos/proyecto12.txt",
        link:"./Practica1-CSS/primera practica css/tercera practica css/sombras.html"
    },
 {
        nombre: "Proyecto 13",
        imagen: "./image/Lista.jpeg",
        detalles: "./proyectos/proyecto13.txt",
        link:"./Practica1-CSS/segunda practica css/listas/listas.html"
    },
 {
        nombre: "Proyecto 14",
        imagen: "./image/Style.jpeg",
        detalles: "./proyectos/proyecto14.txt",
        link:"./Practica1-CSS/tercera practica css/style.html"
    },


];

// Función para generar tarjetas de proyecto
function generarTarjetaProyecto(proyecto, index) {
    let linkButton = "";
    let linkDetalles = "";

    if (proyecto.link && proyecto.detalles) {
        linkButton = `<a href="${proyecto.link}" class="btn btn-warning" target="_blank">Ver Proyecto</a>`;
        linkDetalles = `<a href="${proyecto.detalles}" class="btn btn-primary" target="_blank">Ver Código</a>`;
    }

    return `
    <div class="col-md-4">
        <div class="card">
            <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${proyecto.nombre}</h5>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#proyectoModal${index}">Ver Detalles</button>
                ${linkButton}
            </div>
        </div>
    </div>
    `;
}

function generarModalProyecto(proyecto, index) {
    let linkDetalles = "";

    if (proyecto.detalles) {
        linkDetalles = `<a href="${proyecto.detalles}" class="btn btn-primary" target="_blank">Ver Código</a>`;
    }

    return `
    <div class="modal fade" id="proyectoModal${index}" tabindex="-1" aria-labelledby="proyectoModal${index}Label" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="proyectoModal${index}Label">${proyecto.nombre}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${linkDetalles}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.getElementById("project-container");
    const modalContainer = document.createElement("div");

    proyectos.forEach((proyecto, index) => {
        projectContainer.innerHTML += generarTarjetaProyecto(proyecto, index);
        modalContainer.innerHTML += generarModalProyecto(proyecto, index);
    });

    document.body.appendChild(modalContainer);
});
