// Instanciar Clases

const cotizador = new Cotizador();
const ui = new Interfaz();

// Variables
const form = document.querySelector('#formulario');

// Eventos
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log("www");
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        // Faltan datos, imprimir alerta
        ui.mostrarMensaje('Ambos campos son obligatorios', 'deep-orange darken-4 card-panel')
    } else  {
        
        // Coge los valores del select y ejecutar la busqueda
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(resultado => {
                ui.mostrarResultado(resultado.resultado.data, criptoMonedaSeleccionada);
            })
    }
})
// Funciones