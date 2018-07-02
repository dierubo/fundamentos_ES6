// Clases

class Gasto {
    constructor(presupuestoTotal, nombreGasto, cantidadGasto) {
        this.presupuestoTotal = presupuestoTotal;
        this.nombreGasto = nombreGasto;
        this.cantidadGasto = cantidadGasto;
    }

    getNombreGasto() {
        return this.nombreGasto;
    }

    setNombreGasto(nombreGasto) {
        this.nombreGasto = nombreGasto;
    }

    getCantidadGasto() {
        return this.cantidadGasto;
    }

    setCantidadGasto(cantidadGasto) {
        this.nombreGasto = cantidadGasto;
    }

    getPresupuestoTotal () {
        return this.presupuestoTotal;
    }

    setpresupuestoTotal(presupuestoTotal) {
        this.presupuestoTotal = presupuestoTotal;
    }

    calculoPresupuesto() {
        return this.presupuestoTotal - this.cantidadGasto;
    }
}

// Variables
const presupuesto = prompt('¿Cual es el presupuesto inicial?');
const nombreGastoInput = document.querySelector('#gasto');
const cantidadGastoInput = document.querySelector('#cantidad');
const totalPresupuesto = document.querySelector('#total');
const guardarGastoForm = document.querySelector('#agregar-gasto');
const presupuestoRestante = document.querySelector('#restante');
const listadoGasto = document.querySelector('#gastos ul');
console.log(listadoGasto);

// Eventos

guardarGastoForm.addEventListener('submit', grabarGasto);

// Funciones
function grabarGasto(evt) {
    evt.preventDefault();

    let newNombreGasto = nombreGastoInput.value;
    let newCantidadGasto = cantidadGastoInput.value;

    let newGasto = new Gasto(presupuesto, newNombreGasto, newCantidadGasto);

    presupuestoRestante.innerHTML = newGasto.calculoPresupuesto();

    // Insertar en el listado el gasto y la cantidad
    let itemGastoListado = document.createElement('li');
    itemGastoListado.innerHTML = `<span>${newGasto.getNombreGasto()}</span><span>${newGasto.getCantidadGasto()}</span>`;
    listadoGasto.appendChild(itemGastoListado);

    limpiarInputs();

}

function limpiarInputs() {
    nombreGastoInput.value = '';
    cantidadGastoInput.value = '';
}

(() => { // Función anónima para imprimir el presupuesto inicial
    totalPresupuesto.innerHTML = presupuesto;
})(presupuesto);