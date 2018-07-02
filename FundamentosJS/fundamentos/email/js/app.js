// Variables
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const btnReset = document.querySelector('#resetBtn');

// EventListeners
eventsListeners()

function eventsListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);

    inputEmail.addEventListener('blur', validarCampos);
    inputAsunto.addEventListener('blur', validarCampos);
    inputMensaje.addEventListener('blur', validarCampos);

    btnEnviar.addEventListener('click', enviarEmail);
    btnReset.addEventListener('click', restablecerFormulario);
}

// Funciones
function inicioApp() {
    btnEnviar.disabled = true;
}

function validarCampos() {
    camposVacios(this);

    //Validar el email
    if (this.type === 'email') {
        let emailCorrecto = validarEmail(this);
        if (!emailCorrecto) {
            this.style.borderBottomColor = 'red';
            this.classList.add('error');
        }
    }

    let errores = document.querySelectorAll('.error');
    if (inputEmail.value !== '' && inputAsunto !== '' && inputMensaje !== '' ) {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

function camposVacios(campoInput) {
    if (campoInput.value.length > 0) {
        campoInput.style.borderBottomColor = 'green';
        campoInput.classList.remove('error');
    } else {
        campoInput.style.borderBottomColor = 'red';
        campoInput.classList.add('error');
    }
}

function validarEmail(campo) {

    let emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

    return emailRegex.test(campo.value);;
}

function restablecerFormulario() {
    formulario.reset();
}

function enviarEmail(evt) {
    evt.preventDefault();

    let spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    setTimeout(() => {
        spinnerGif.style.display = 'none';
        
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(() => {
            enviado.remove();
            restablecerFormulario();
        }, 5000)
    }, 2000)

}