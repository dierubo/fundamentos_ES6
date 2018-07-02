// Variables
let carrito = document.querySelector('#carrito');
let listaCursos = document.querySelector('#lista-cursos');
let vaciarCarrito = document.querySelector('#vaciar-carrito');

// Eventos Listners
eventosListeners();

function eventosListeners() {
    listaCursos.addEventListener('click', clickBtnAgregarCarrito);
    carrito.addEventListener('click', borrarCursoCarrito);

    vaciarCarrito.addEventListener('click', vaciarCursosCarrito)

    // Cargar información del localStorage
    document.addEventListener('DOMContentLoaded', loadLocalStorage);
}

// Funciones
function clickBtnAgregarCarrito(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('agregar-carrito') ) { // Si en la zona de escucha del click y donde se ha hecho click tiene la clase 'agregar-carrito'
        insertarCarrito(evt.target.parentElement.parentElement);
    }
}

function insertarCarrito(datosCursos) {

    let info = {
        imgCurso: datosCursos.querySelector('img').getAttribute('src'),
        tituloCurso: datosCursos.querySelector('h4').textContent,
        precioCurso: datosCursos.querySelector('.precio .u-pull-right').textContent
    }
    
    let itemCarrito = document.createElement('div');
    itemCarrito.className = 'item-carrito';
    itemCarrito.innerHTML = `<span class="datos-cursos"><img src="${info.imgCurso}" /></span><span class="datos-cursos title-curso-carrito">${info.tituloCurso}</span>
                            <span class="datos-cursos precio-curso-carrito">${info.precioCurso}</span><span class="datos-cursos curso-close"><div class="close">X</div></span>`;
    carrito.appendChild(itemCarrito);

    grabarLocalStorage(info);
    
}

function borrarCursoCarrito(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('close') ) {
        let itemCarrito = evt.target.parentElement.parentElement;

        let obtenerCursos = obtenerLocalStorage();
        // Se borra el item del local storage
        obtenerCursos.forEach((curso, index) => {
            if (itemCarrito.querySelector('.title-curso-carrito').textContent.includes(curso.tituloCurso)) {
                obtenerCursos.splice(index, 1);
            }
        });

        // Se guarda el array de objetos modificado en el localstorage
        localStorage.setItem('cursos', JSON.stringify(obtenerCursos));

        // Se borra del listado
        itemCarrito.remove();

    }
}

function grabarLocalStorage(infoCurso) {
    let setCursos = obtenerLocalStorage();

    setCursos.push(infoCurso);

    localStorage.setItem('cursos', JSON.stringify(setCursos));
}

function obtenerLocalStorage() {
    let obtCursos;

    if (localStorage.getItem('cursos') === null) {
        obtCursos = [];
    } else {
        obtCursos = JSON.parse(localStorage.getItem('cursos'));
    }

    return obtCursos;
}

function loadLocalStorage() {
    let obtCursos = obtenerLocalStorage();

    obtCursos.forEach(curso => {
        let itemCarrito = document.createElement('div');
        itemCarrito.className = 'item-carrito';
        itemCarrito.innerHTML = `<span class="datos-cursos"><img src="${curso.imgCurso}" /></span><span class="datos-cursos title-curso-carrito">${curso.tituloCurso}</span>
                            <span class="datos-cursos precio-curso-carrito">${curso.precioCurso}</span><span class="datos-cursos curso-close"><div class="close">X</div></span>`;
        carrito.appendChild(itemCarrito);
    });
}

function vaciarCursosCarrito() {
    localStorage.clear();
    let itemCarrito = document.querySelectorAll('.item-carrito');

    itemCarrito.forEach(item => {
        item.remove();
    });
}