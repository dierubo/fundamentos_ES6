// Variables
const listaTweets = document.querySelector('#lista-tweets');
const txtAreaTweets = document.querySelector('#tweet');
let btnSave = document.querySelector('.button-primary');
const lista = document.createElement('ul');

listaTweets.appendChild(lista);

//Eventos

btnSave.addEventListener('click', (evt) => {
    evt.preventDefault();
    insertarElemento();
});

// Cargar información del localStorage
document.addEventListener('DOMContentLoaded', loadLocalStorage);

// Funciones
function insertarElemento() {
    // Se inserta el elemento en la lista
    let createItem = document.createElement('li');
    createItem.innerHTML = txtAreaTweets.value;
    lista.appendChild(createItem);

    // Guardar localStorage
    insertarTweetLocalStorage(txtAreaTweets.value);
    
    // Se limpia el input
    txtAreaTweets.value = '';

}

function insertarTweetLocalStorage(newTweet) {
    let obtTweets = obtenerTweets();

    obtTweets.push(newTweet);

    localStorage.setItem('tweets', JSON.stringify(obtTweets));
}

function obtenerTweets() {
    let tweets;

    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}

function loadLocalStorage() {
    
    let allTweets = obtenerTweets();
    allTweets.forEach(element => {
        let createItem = document.createElement('li');
        createItem.innerHTML = element;
        lista.appendChild(createItem);
    });
}