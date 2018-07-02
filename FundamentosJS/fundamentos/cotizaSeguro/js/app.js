
// Clases
class Seguro {
    constructor(marca, anio, tipo) {
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }

    getMarca() {
        return this.marca;
    }
    
    getAnio() {
        return this.anio;
    }
    
    getTipo() {
        return this.tipo;
    }

    calcularSeguro() {
        let precioSeguro;
        let calculoAnios = new Date().getFullYear() - this.anio;
        let descuentoAnios = 3 * calculoAnios;
        let precioUltimoAnio;

        if(this.tipo === 'basico') {
            precioUltimoAnio = 5000;
            precioSeguro = precioUltimoAnio - (precioUltimoAnio * (descuentoAnios / 100));
            console.log(precioSeguro);
        } else {
            precioUltimoAnio = 10000;
            precioSeguro = precioUltimoAnio - (precioUltimoAnio * (descuentoAnios / 100));
        }
        return precioSeguro;
    }
}

// Variables
const formulario = document.querySelector('#cotizar-seguro');
const selectAnio = document.querySelector('#anio');
const marca = document.querySelector('#marca');
const showInfo = document.querySelector('#cargando');

// Eventos Listeners
document.addEventListener('DOMContentLoaded', loadYearSelect);
formulario.addEventListener('submit', getInfoForm);

// Funciones
function getInfoForm(evt) {
    evt.preventDefault();

    let getMarca = marca.options[marca.selectedIndex].textContent;
    let getAnio = selectAnio.options[selectAnio.selectedIndex].value;

    let getTipo;
    let getAllTipo = document.querySelectorAll('.form-check-input');

    getAllTipo.forEach(tipo => {
        console.log(tipo)
        if (tipo.checked) {
            getTipo = tipo.value;
        }
    });

    let seguro = new Seguro(getMarca, getAnio, getTipo);

    resumen(seguro);
}

function resumen(seguro) {
    // Mostrar spinner
    showInfo.children[0].style.display = 'block';

    setTimeout(() => {
        showInfo.children[0].style.display = 'none';
        let boxInfo = document.createElement('div');
        boxInfo.innerHTML = `<div> Año: ${seguro.getAnio()}</div><div> Marca: ${seguro.getMarca()}</div>
                            <div> Tipo: ${seguro.getTipo()}</div><div> Precio: ${seguro.calcularSeguro()}</div>`;
        showInfo.appendChild(boxInfo);

    }, 3000);

}

function loadYearSelect() {
    
    let fecha = new Date();
    let anioActual = fecha.getFullYear();

    let i = 0;
    while (i < 20) {
        let opt = document.createElement('option');
        opt.value = anioActual;
        anioActual--;

        opt.innerHTML = opt.value;
        selectAnio.appendChild(opt);
        i++;
    }
}