const windowsFocus = document.getElementById('focus');
const menu = document.getElementById('mainMenu');
let windowsStatus = 'index';

windowsFocus.addEventListener("click", e => {
    if((e.target.id === 'buttonG') && (windowsStatus === 'index')){
        windowsFocus.classList.add('div__game');
        menu.classList.add('main__menu--active');
        windowsStatus = "game";
    }else if((e.target.id === 'buttonC') && (windowsStatus === 'index')){
        windowsFocus.classList.add('div__config');
        menu.classList.add('main__menu--active');
        windowsStatus = "config";
    }else if((e.target.id === 'buttonE') && (windowsStatus === 'config')){
        windowsFocus.classList.add('div__config--remove');
        windowsStatus = "configRemove";
    }else if((e.target.id === 'buttonA') && (windowsStatus === 'config')){
        windowsFocus.classList.add('div__config--add');
        windowsStatus = "configAdd";
    }
});
menu.addEventListener('click', e => {
    if((e.target.id === 'arrow') && (windowsStatus === 'game')){
        windowsFocus.classList.remove('div__game');
        menu.classList.remove('main__menu--active');
        windowsStatus = "index";
    }else if((e.target.id === 'arrow') && (windowsStatus === 'config')){
        windowsFocus.classList.remove('div__config');
        menu.classList.remove('main__menu--active');
        windowsStatus = "index";
    }else if((e.target.id === 'arrow') && (windowsStatus === 'configRemove')){
        windowsFocus.classList.remove('div__config--remove');
        windowsStatus = "config";
    }else if((e.target.id === 'arrow') && (windowsStatus === 'configAdd')){
        windowsFocus.classList.remove('div__config--add');
        windowsStatus = "config";
    }
});