class Cotizador {
    // Obtiene el JSON con las criptomonedas
    async obtenerMonedasAPI() {
        const urlObtenerMonedas = await fetch ('https://api.coinmarketcap.com/v2/ticker/');
        
        // Respuesta en JSON de las monedas
        const monedas = await urlObtenerMonedas.json();

        return { // Devuelve un objeto
            monedas
        }
    }

    async obtenerValores(moneda, criptomoneda) {
        const urlConvertir = await fetch(`https://api.coinmarketcap.com/v2/ticker/${criptomoneda}/?convert=${moneda}`);

        const resultado = await  urlConvertir.json()

        return {
            resultado
        }
    }
}