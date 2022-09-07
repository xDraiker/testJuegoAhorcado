import { validar, noRepeat, addPalabra } from "./gestorPalabras.js";

const windowsFocus = document.getElementById('focus');
const menu = document.getElementById('mainMenu');
const configAdd = document.getElementById('formConfigAdd');
const alertConfigAdd = document.getElementById('addConfigAlert');
let windowsStatus = 'index';

windowsFocus.addEventListener("click", e => {
    if((e.target.id === 'buttonG') && (windowsStatus === 'index')){
        windowsFocus.classList.add('div__game');
        menu.classList.add('main__menu--active');
        menu.classList.remove('menu--config');
        document.querySelector('#arrow').classList.add('item__arrow--game');
        document.querySelector('#repeatArrow').classList.remove('repeatArrow--active');
        windowsStatus = "game";
    }else if((e.target.id === 'buttonC') && (windowsStatus === 'index')){
        windowsFocus.classList.add('div__config');
        menu.classList.add('main__menu--active', 'menu--config');
        document.querySelector('#repeatArrow').classList.add('repeatArrow--active');
        windowsStatus = "config";
    }else if((e.target.id === 'buttonE') && (windowsStatus === 'config')){
        windowsFocus.classList.add('div__config--remove');
        document.querySelector('#arrow').classList.add('arrow__config--remove');
        windowsStatus = "configRemove";
    }else if((e.target.id === 'buttonA') && (windowsStatus === 'config')){
        windowsFocus.classList.add('div__config--add');
        document.querySelector('#arrow').classList.add('arrow__config--add');
        windowsStatus = "configAdd";
    }else if((e.target.id === 'buttonAdd') && (configAdd.textAdd.value)){ /* ! */
        if(validar(configAdd.textAdd.value)){
            alertConfigAdd.textContent = "Letra con acento detectada";
            console.log("ERROR 1");
            return 0;
        } 
        if(noRepeat(configAdd.textAdd.value)){
            alertConfigAdd.textContent = "UPS esta palabra ya se encuentra en la lista";
            console.log("ERROR 2");
            return 0;
        }
        alertConfigAdd.textContent = "Exelente: palabra añadida";  
        addPalabra(configAdd.textAdd.value);
        configAdd.textAdd.value = "";
    }
});
menu.addEventListener('click', e => {
    if((e.target.id === 'arrow') && (windowsStatus === 'game')){
        windowsFocus.classList.remove('div__game');
        menu.classList.remove('main__menu--active');
        document.querySelector('#arrow').classList.remove('item__arrow--game');
        windowsStatus = "index";
    }else if((e.target.id === 'arrow') && (windowsStatus === 'config')){
        windowsFocus.classList.remove('div__config');
        menu.classList.remove('main__menu--active');
        windowsStatus = "index";
    }else if((e.target.id === 'arrow') && (windowsStatus === 'configRemove')){
        windowsFocus.classList.remove('div__config--remove');
        document.querySelector('#arrow').classList.remove('arrow__config--remove');
        windowsStatus = "config";
    }else if((e.target.id === 'arrow') && (windowsStatus === 'configAdd')){
        windowsFocus.classList.remove('div__config--add');
        document.querySelector('#arrow').classList.remove('arrow__config--add');
        windowsStatus = "config";
    }
});
