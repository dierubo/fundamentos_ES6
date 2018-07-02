// TRY CATCH

try {
    algo();
} catch(error) {
    console.log(error);
} finally {
    console.log("Se ejecuta igualmente");
}

obtenerCliente();

function obtenerCliente() {
    console.log("hola");
}


// Fecha específica

let navidad2017 = new Date('12-25-2017');
console.log(navidad2017);

const diaValor = new Date();
let valor;

// Mes
valor = diaValor.getMonth();
// Día
valor = diaValor.getDate();
valor = diaValor.getDay();
// Año
valor = diaValor.getFullYear();
// Minutos
valor = diaValor.getMinutes();
// Hora
valor = diaValor.getHours();
// Milisegundos desde 1970
valor = diaValor.getTime();


valor = diaValor.setFullYear(2016);
valor = diaValor.getFullYear();


console.log(valor);

// MAPSS

const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Guitarra'},
    {id: 4, producto: 'Disco'},
]

const nombreProducto = carrito.map((carrito) => {
    return carrito.producto;
});

console.log(nombreProducto);

// OTRA FORMA DE ITERAR OBJETOS

const automovil = {
    modelo: 'Camaro',
    motor: 6,
    anio: 1999,
    marca: 'Chevrolet'
}

for( let auto in automovil) {
    console.log(`${auto}: ${automovil[auto]}`)
}


// CREAR ENLACE

const enlace = document.createElement('a');
enlace.className = 'enlace';
enlace.id = 'nuevo-id';
enlace.setAttribute('href', '#');
enlace.textContent = 'Nuevo Enlace';

console.log(enlace);

// Agregarlo al HTML
document.querySelector('body').appendChild(enlace);


/////////////////////////////////////////////////////////////////////
///////////////////////////  LOCAL STORAGE //////////////////////////
/////////////////////////////////////////////////////////////////////

// Permite añadir cierta información al navegador de los visitantes para así no consultarla en BD
localStorage.setItem('nombre', 'dierubo');
console.log(localStorage.getItem('nombre'));

// Eliminar un item
localStorage.removeItem('nombre');
// Elimina todo el localStorage
localStorage.clear();

/////////////////////////////////////////////////////////////////////
/////////////////////////  SESSION STORAGE //////////////////////////
/////////////////////////////////////////////////////////////////////

// Cuando se cierra el navegador la información que se haya escrito se pierde

sessionStorage.setItem('nombre', 'diegominola');


//////////////// OBJETOS //////////////

// En ES 5 sería así
function Cliente (nombre, saldo) { // La Clase sería con function delante y el nombre de la clase en Mayúscula
    this.nombre = nombre;
    this.saldo = saldo;
}

const persona = new Cliente('John', 2000);

//////////////// PROTOTYPE //////////////

function Cliente2 (nombre, saldo) { // La Clase sería con function delante y el nombre de la clase en Mayúscula
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente2.prototype.tipoCliente = function() {
    let tipo;
    if (this.saldo > 100) {
        tipo = 'Gold';
    } else if (this.saldo > 500) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

Cliente2.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo} y el tipo cliente ${this.tipoCliente()}`
}

Cliente2.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
}

const persona2 = new Cliente2('John', 2000);

persona2.retirarSaldo();
console.log(persona2.tipoCliente());
console.log(persona2.nombreClienteSaldo());


//////// HEREDAR PROTOTYPES A OTRO OBJETO //////

function Empresa(nombre, saldo, telefono, tipo) {
    Cliente2.call(this, nombre, saldo); // Está heredando el nombre y saldo de la clase Cliente2
    this.telefono = telefono;
    this.tipo = tipo;
}

Empresa.prototype = Object.create(Cliente2.prototype); // Se pone antes de la instancia de una clase. Empresa hereda los prototypes de Cliente2

const empresa = new Empresa('Udemy', 110000, 234123412, 'Educación');
console.log(empresa);


/////////// OBJECT CREATE ///////////////

const ClienteObjeto = {
    imprimirSaldo: function() {
        return `Hola: ${this.nombre}, tu saldo es de ${this.saldo}`;
    },
    retirarSaldo: function(retiro) {
        return this.saldo -= retiro;
    }
}

// Crear Objeto
const mary = Object.create(ClienteObjeto);
console.log(mary); // Mostrará un objeto vacio. Hasta que no se asigne propiedades no saldrá nada ni siquiera el Prototype
mary.nombre = 'Mary';
mary.saldo = 1000;

mary.retirarSaldo(300);

console.log(mary.imprimirSaldo());


/////////// CLASES ES 6 //////////////////

class Cliente3 {
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

Cliente3.bienvenida(); // A los métodos estáticos se les puede llamar sin declarar una instancia de la clase

const Maria = new Cliente3('María', 'Garcia', 100000);
console.log(Maria.imprimirSaldo());

////// HEREDAR CLASES EN ES 6 //////////

class Empresa2 extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        // constructor padre
        super(nombre, saldo);
        // no existen en el constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenida() {
        return `Bienvenido al cajero de la empresa`;
    }
}

console.log(Empresa2.bienvenida());

const empresa2 = new Empresa2('Empresa1', 1000, 324234, 'Construcción');
console.log(empresa2.imprimirSaldo());



/////////////////////////////
//////////// AJAX ///////////
/////////////////////////////

function cargarDatos() {
    // Crear el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Abrir una conexión. Si fuese una petición de inserción a la base de datos se haría con POST, si es de actualización con PUT y de borrado con DELETE
    // El segundo parámetro es la URL. En este caso es el archivo.
    // Tercer parámetro poniendolo a true será asincrono
    xhr.open('GET', 'datos.txt', true);

    // Una vez que carga lo anterior
    xhr.onload = function() {
        // status --- 200: Correcto | 403: Prohibido | 404: NOT FOUND
        // THIS se refiere a la conexión que se ha abierto anteriormente
        if (this.status === 200) {
            // responseText es la respuesta de los datos que se están solicitanto
            document.querySelector('#listado').innerHTML = this.responseText;
        }
    }

    // Enviar el request
    xhr.send();

}

////////////////////////////
//////// ENDPOINT //////////
////////////////////////////

// Una REST API cuenta con endpoints (URLS)  para hacer operaciones CRUD (create, read, update y delete)
// Con REST sirve para definir las URLS
// Listar, por ejemplo cliente ---> GET
// Crear un cliente ---> POST
// Editar un cliente --> PUT
// Borrar cliente --> DELETE


/////// ASYNC //////////

// - CALLBACKS

// Función que corre dentro de otra función para que se ejecute. Por ejemplo, forEach:
// ciudades.forEach((ciudad) { console.log(ciudad) }) ------> Esto es lo que se llama INLINE CALLBACK
/*
    function callback(ciudad) {
        console.log(ciudad)
    }

    ciudades.forEach( callback )
*/

// - PROMISE
// Resolve es cuando se cumple la promesa y reject para cuando no
const esperando = new Promise((resolve, reject => {
    setTimeout(function() {
        resolve('Se ejecutó'); // Resolve envía el mensaje a then en caso de que todo esté correcto
    }, 5000)
}));

esperando.then((mensaje) => {
    console.log(mensaje);
});

// Reject por ejemplo cuando no exista el dominio
const aplicarDescuento = new Promise((resolve, reject => {
    const descuento = false;

    if ( descuento ) {
        resolve('Descuento aplicado');
    } else {
        reject('No se puede aplicar el descuento');
    }
}));

aplicarDescuento.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => { // Aquí se ejecutará el REJECT con su mensaje
    console.log(error)
});


///////////////////////
////// FETCH /// //////
///////////////////////

// Lo nuevo de  XMLHttpRequest en ES6
function cargarTXT() {
    fetch('datos.txt') // Fetch es una promesa, por lo tanto tiene resolve y reject
        .then((res) => { // Conectar y traer la información porque esto devuelve una promesa
            return res.text(); // Este text viene en dentro de la promesa como un prototype del objeto.
            //console.log(res); Se recomienda hacer un console.log para ver lo que devuelve y ver los prototypes para ver cual se ajusta más a cada caso
        })
        .then((data) => { // Como es una promesa lo anterior hay que poner el then para que nos devuelva los datos después de haber llamado a la función del prototype
            console.log(data); // Aquí sí que devolvería el texto 
        })
        .catch((error) => { // En caso de que falle (Reject)
            console.log(error); 
        })
}

///////////////////////
////// FETCH API //////
///////////////////////

function cargarJSON() {
    fetch('datos.txt') // Fetch es una promesa, por lo tanto tiene resolve y reject
        .then((res) => { // Conectar y traer la información porque esto devuelve una promesa
            return res.json(); // Este json viene en dentro de la promesa como un prototype del objeto. Lo convierte a objeto de Javascript
            //console.log(res); Se recomienda hacer un console.log para ver lo que devuelve y ver los prototypes para ver cual se ajusta más a cada caso
        })
        .then((data) => { // Como es una promesa lo anterior hay que poner el then para que nos devuelva los datos después de haber llamado a la función del prototype
            console.log(data); // Aquí sí que devolvería el array de objetos. Después habría que hacer un FOREACH 
        })
        .catch((error) => { // En caso de que falle (Reject)
            console.log(error); 
        })
}


////////////////////////
//// ASYNC AWAIT ///////
////////////////////////

// Una función asíncrona siempre va a requerir una promesa. Con await siempre va async al comienzo de la función
// Await 'detiene' la ejecución hasta que termine la promesa. Una vez terminada la promesa sigue ejecutándose el código
async function obtenerClientes() {
    // Crear un promise
    const clientes = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Clientes descargandose....');
        }, 2000)
    });

    // error o no.....
    const error = false;

    if (!error) {
        const respuesta = await clientes;
        return respuesta;
    } else {
        await Promise.reject('Hubo un error');
    }
}

obtenerClientes().then(res => console.log(res)) // Se pone un then porque la función devuelve la respuesta de una promesa


/////// API REAL CON ASYNC AWAIT

async function leerDatos() {
    const respuesta = await fetch ('https://jsonplaceholder.typicode.com/todos');

    // Se ejecuta cuando la respuesta está hecha
    const datos = await respuesta.json();

    return datos;
}

//console.log(leerTodos() );

leerDatos().then(usuarios => console.log(usuarios));

////////////////// 
/// GENERADORES //
//////////////////

// Es muy parecido a los iteradores, pero este es creador de forma manual
function *crearGenerador() {
    // yield
    yield 1;
    yield 'Nombre;
    yield 3 + 3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

function *nuevoGenerador(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4']

// Se recorre el iterador
let iterador = nuevoGenerador(carrito);

console.log( iterador.next());
console.log( iterador.next().value);
console.log( iterador.next());

/////////////////////////
// ITERADORES JS ///////
///////////////////////

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set ([123, 231, 131, 102]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador');


// Entries iterator
for (let entradas of ciudades.entries()) {
    console.log(entrada);
}

// Values iterator
for (let entradas of ciudades) {
    console.log(entrada); // Se imprimirá el value de las claves
}

//Keys iterator
for (let entradas of ciudades.keys()) {
    console.log(entrada); // Se imprimirá el value de las claves
}

/////
for (let entradas of ordenes.entries()) {
    console.log(entrada); // Clave y valor son iguales
}

for (let entradas of ordenes.values()) {
    console.log(entrada);
}

for (let entradas of ordenes.keys()) {
    console.log(entrada);
}
/////////
for (let entradas of datos.entries()) {
    console.log(entrada); // Clave y valor son iguales
}

for (let entradas of datos.values()) {
    console.log(entrada);
}

for (let entradas of datos.keys()) {
    console.log(entrada);
}