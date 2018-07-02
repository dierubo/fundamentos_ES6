class Interfaz {
    
    constructor() {
        this.init();
    }

    init() {
        this.construirSelect(); // Para que se ejecute una vez instanciado la clase
    }

    construirSelect() {
       cotizador.obtenerMonedasAPI()
        .then(monedas => {
            // Crear select con las opciones
            const arrMonedas = monedas.monedas.data;
            const select = document.getElementById('criptomoneda');

            for (let indexMoneda in arrMonedas) {
                const option = document.createElement('option');
                option.value = arrMonedas[indexMoneda].symbol;
                option.appendChild(document.createTextNode(arrMonedas[indexMoneda].name));
                select.appendChild(option);
            }
        }); 
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        // Div para mensajes del html
        const divMensaje = document.querySelector('.mensajes');
        // agregamos el div mensajes
        divMensaje.appendChild(div);

        setTimeout(() => {
            document.querySelector('.mensajes div').remove()
        }, 3000);
    }

    mostrarResultado(resultado, moneda) {
        const etiquetaMoneda = `price_${moneda}`;
        console.log(moneda);
        console.log(etiquetaMoneda);
        // Leer el valor de la criptomoneda en esa moneda
        console.log(resultado.quotes)
        //const valor = resultado;
    }
}