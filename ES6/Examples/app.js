

let num = 1;

// Con triple igual lo que hace es comprobar tanto el valor como el tipo. En cambio, con el doble igual solamente comprueba que sean dos 1
if (num === '1') {
    console.log('entra');
} else {
    console.log('else');
}

//////////////////////

let saludo = 'Hola Mundo';
console.log( saludo.includes("m") ); // Misma función que el indexOf pero en este caso devuelve un TRUE o FALSE
//////////////////

let texto = "Hola";

console.log( texto.repeat(2) ) // se mostrará HolaHola

//////////////////////////////

let nombre = 'Maria';
let apellido = 'Martinez'

let nombreCompleto = `El nombre completo es ${nombre} ${apellido}`

console.log(nombreCompleto);


function obtenerNombre() {
    return 'John Nimelavo';
}

let nombreCompleto3 = `El nombre completo es ${obtenerNombre()} ${ 1 + 2 }`;
console.log( nombreCompleto3 );

// Para un salto de línea también valen
let multiLinea = `<h1 class="algo">${nombre}</h1>
<p>Hola mundo ${apellido}</p>`;

console.log(multiLinea);

/////////////////////

function etiqueta( literales, ...substituciones) {

    let resultado = "";

    console.log(literales); // La primera posición siempre es un caracter vacío
    console.log(substituciones);

    for (let i = 0; i < substituciones.length; i++) {
        resultado += literales[i];
        resultado += substituciones[i];
    }

    return resultado;
}

let unidades = 5,
    costes = 10;

let mensaje = etiqueta `${unidades} lapices cuestan ${unidades * costes} euros`;

console.log( mensaje );

///////////////////////////////////////

function saludar (fn = fnTemporal) {
    
    console.log( typeof fn);

    if (typeof fn === 'undefined') {
        console.error ('No es una función');
        return;
    }

    fn();
}

function fnTemporal() {
    console.log("Hola Mundo FN");
}

saludar();

//////////////////////////////////

function agregar_alumno( arr_alumnos, ...alumnos) {

    console.log( arguments );

    for (let i = 0; i < alumnos.length; i++) {
        arr_alumnos.push( alumnos[i]);
    }

    return arr_alumnos;

}

let alumnos_arr = ["Fernando"];
let alumnos_arr2 = agregar_alumno(alumnos_arr, "Maria", "Pedro", "Susana", "Juan");

console.log( alumnos_arr2 );

//////////////////////////////////

function saludarRest( saludo, ...nombres ) {
    console.log( nombres.length);
    for ( i in nombres ) {
        console.log( `${saludo} ${nombres[i]}` );
    }
}

function saludarSpread( saludo, ...nombres ) {
    console.log( nombres.length);
    for ( i in nombres ) {
        console.log( `${saludo} ${nombres}.` );
    }
}

saludarRest( "Hola", "fernando", "maria", "susana"); // Aquí cogerá el array de 3 posiciones

let personas = ["melissa", "hernando", "juan"];
saludarSpread("Que tal!", personas); // Aquí cogerá el array de una posición

let partes = ["brazos", "piernas"];
let cuerpo = ["cabeza", "cuello", ...partes, "pies", "dedos"];

console.log(cuerpo);

///////////////////////////////////////////////

function Persona (nombre) {

    //if ( typeof new.target !== 'undefined) { // Para comprobar que se ha creado con 'new'
        //this.nombre = nombre;
    //} else {
        //throw new Error ('Esta función debe de ser utilizada con el new);
    //}
    this.nombre = nombre;
}

var persona = new Persona("Fernando");
var noEsPersona = Persona("Fernando");

console.log(persona); // Sale el valor porque está declarado como objeto y se puede acceder al valor this
console.log(noEsPersona); // sale undefined porque con el this intenta acceder a una variable global del navegador y como no la encuentra lo muestra como undefined


//////////


function whatAreYouWritingAbout()
{
    var subject = "About Closures";

    var message = function () { return subject; };
    return message();
}

console.log(whatAreYouWritingAbout());

/////////////////////////////

let autoGuardado = {
    archivo: "app.js",
    cursor: {
        linea: 2,
        columna: 16
    },
    ultimoArchivo: {
        archivo: "index",
        cursorUlt: {
            linea: 8,
            columna: 22
        }
    }
}

let  { cursor:cursorActivo } = autoGuardado;
console.log( cursorActivo );

let  { ultimoArchivo:{ cursorUlt } } = autoGuardado;
console.log( cursorUlt );

//////////////////////////////////

let personasSet = new Set(["fernando", "Maria"]);
console.log( personasSet );

///////////////////////////

let mapa2 = new Map( [ [ 'nombre', 'fernando' ], ['nombre', 'Maria'], ['nombre', 'John'] ]);

console.log( mapa2 );

//////////////////////////////

let mapa3 = new Map( [ [ 'nombre', 'fernando' ], ['edad', 31] ]);

mapa3.forEach( ( valor, llave, mapaOrigen ) => console.log(`Clave: ${llave}, valor: ${valor}`) )