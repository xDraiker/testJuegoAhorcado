import { validar, noRepeat, addPalabra, createList, removeList, removeItem, palabraRandom, mostrarPalabra, eliminarPalabra } from "./gestorPalabras.js";

const windowsFocus = document.getElementById('focus');
const menu = document.getElementById('mainMenu');
const configAdd = document.getElementById('formConfigAdd');
const configRemove = document.getElementById('formConfigRemove');
const alertConfigAdd = document.getElementById('addConfigAlert');

let windowsStatus = 'index';
let randomPalabra = palabraRandom();
let contadorWin = 0, contadorLose = 0;
let letrasElegidas = '';

windowsFocus.addEventListener("click", e => {
    if((e.target.id === 'buttonG') && (windowsStatus === 'index')){
        windowsFocus.classList.add('div__game');
        menu.classList.add('main__menu--active');
        menu.classList.remove('menu--config');
        document.querySelector('#arrow').classList.add('item__arrow--game');
        document.querySelector('#repeatArrow').classList.remove('repeatArrow--active');
        mostrarPalabra(randomPalabra);
        windowsStatus = "game";
    }else if((e.target.id === 'buttonC') && (windowsStatus === 'index')){
        windowsFocus.classList.add('div__config');
        menu.classList.add('main__menu--active', 'menu--config');
        document.querySelector('#repeatArrow').classList.add('repeatArrow--active');
        windowsStatus = "config";
    }else if((e.target.id === 'buttonE') && (windowsStatus === 'config')){
        windowsFocus.classList.add('div__config--remove');
        document.querySelector('#arrow').classList.add('arrow__config--remove');
        createList();
        windowsStatus = "configRemove";
    }else if((e.target.id === 'buttonA') && (windowsStatus === 'config')){
        windowsFocus.classList.add('div__config--add');
        document.querySelector('#arrow').classList.add('arrow__config--add');
        alertConfigAdd.textContent = "Lapalabra deve de tener una longitud de mm caracteres y no contener acentos";
        windowsStatus = "configAdd";
    }else if((e.target.id === 'buttonAdd') && (configAdd.textAdd.value)){ /* ! */
        if(validar(configAdd.textAdd.value)){
            alertConfigAdd.textContent = "Letra con acento detectada";
            return 0;
        } 
        if(noRepeat(configAdd.textAdd.value)){
            alertConfigAdd.textContent = "UPS esta palabra ya se encuentra en la lista";
            return 0;
        }
        alertConfigAdd.textContent = "Exelente: palabra añadida";  
        addPalabra(configAdd.textAdd.value);
        configAdd.textAdd.value = "";
    }else if(e.target.id === 'textAdd'){
        alertConfigAdd.textContent = "Lapalabra deve de tener una longitud de mm caracteres y no contener acentos";
    }
});
menu.addEventListener('click', e => {
    if((e.target.id === 'arrow') && (windowsStatus === 'game')){
        windowsFocus.classList.remove('div__game');
        menu.classList.remove('main__menu--active');
        document.querySelector('#arrow').classList.remove('item__arrow--game');
        eliminarPalabra();
        windowsStatus = "index";
    }else if((e.target.id === 'arrow') && (windowsStatus === 'config')){
        windowsFocus.classList.remove('div__config');
        menu.classList.remove('main__menu--active');
        windowsStatus = "index";
    }else if((e.target.id === 'arrow') && (windowsStatus === 'configRemove')){
        windowsFocus.classList.remove('div__config--remove');
        document.querySelector('#arrow').classList.remove('arrow__config--remove');
        removeList();
        windowsStatus = "config";
    }else if((e.target.id === 'arrow') && (windowsStatus === 'configAdd')){
        windowsFocus.classList.remove('div__config--add');
        document.querySelector('#arrow').classList.remove('arrow__config--add');
        alertConfigAdd.textContent = "";
        windowsStatus = "config";
    }else if(e.target.id === 'repeatArrow'){
        eliminarPalabra();
        mostrarPalabra(palabraRandom());
    }
});
configRemove.addEventListener('submit', e =>{
    e.preventDefault();
    removeItem();
});

window.addEventListener('keydown', e => {
    if(!document.getElementById('lettersContine')) return 0;
    let letter = e.key.toString().toUpperCase();
    const letras = [...document.querySelectorAll('.letter')];

    if(letrasElegidas.includes(letter)){
        console.log("letra eleguida");
        return 0;
    }else{
        letrasElegidas += letter;
    }
    if(!randomPalabra.includes(letter)){
        contadorLose++;
        console.log(contadorLose);
    }
    if(contadorLose === 10){
        console.log('you lose');
        letrasElegidas ='';
        contadorLose=0;
        return 0;
    }
    for(let i = 0; i < letras.length; i++ ){
        if(letter === letras[i].textContent){
            letras[i].classList.add('letter--active');
        }
    }
    for(let i = 0; i < letras.length; i++ ){
        if([...letras[i].classList].length > 1){
            contadorWin++;
        }
    }
    if (contadorWin === randomPalabra.length) {
        console.log('you win');
        letrasElegidas ='';
        contadorLose=0;
    } 
    contadorWin = 0;
});
