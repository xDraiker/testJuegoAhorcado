if(!localStorage.getItem('palabras')){
    const Palabras = {
        "arrayPalabras" : ['GATO','PALETA','YOYO']
    }
    localStorage.setItem('palabras', JSON.stringify(Palabras));
}
let palabrasDB = JSON.parse(localStorage.getItem('palabras'));
const boxSelect = document.getElementById('configRemoveSelect');
const sectionGame = document.getElementById('sectionGame');
const fragmentList = document.createDocumentFragment();
const fragmentLetters = document.createDocumentFragment();

const validar = palabra => {
    const regex = /[á-źÁ-Ź]/g;
    return regex.test(palabra);
};
const noRepeat = palabra => {
    for(let i =0; i < palabrasDB.arrayPalabras.length; i++){
        if(palabra.toUpperCase() === palabrasDB.arrayPalabras[i]) return true;
    }
    return false;
};
const addPalabra = (palabra) =>{
    palabrasDB.arrayPalabras.push(palabra.toUpperCase());
    localStorage.setItem('palabras', JSON.stringify(palabrasDB));
};
const createList = () =>{
    const contentList = document.createElement('div');
    contentList.setAttribute('id','listSelect');
    contentList.classList.add('list--select');
    for(let i =0; i < palabrasDB.arrayPalabras.length; i++){
        const itemRadio = document.createElement('input');
        const itemLabel = document.createElement('label');

        itemRadio.setAttribute('type', 'radio');
        itemRadio.setAttribute('id',`${palabrasDB.arrayPalabras[i]}`);
        itemRadio.setAttribute('name','palabras');
        itemRadio.classList.add('select__radio');
       
        itemLabel.setAttribute('for',`${palabrasDB.arrayPalabras[i]}`);
        itemLabel.setAttribute('id',`${palabrasDB.arrayPalabras[i]}${i}`);
        itemLabel.classList.add('select__item');
        itemLabel.textContent = `${palabrasDB.arrayPalabras[i]}`;

        fragmentList.appendChild(itemRadio);
        fragmentList.appendChild(itemLabel);
    }
    contentList.appendChild(fragmentList);
    boxSelect.appendChild(contentList);
 };
 const removeList = () =>{
    const contentList = document.getElementById('listSelect');
    contentList.remove();
 };
const removeItem = () => {
    const labelRadio = document.querySelector('.select__radio:checked + label');

    labelRadio.classList.add('select__item--active');
    for(let i =0; i < palabrasDB.arrayPalabras.length; i++){
        if(labelRadio.textContent === palabrasDB.arrayPalabras[i]){
            palabrasDB.arrayPalabras.splice(i, 1);
            break;
        } 
    }
    localStorage.setItem('palabras', JSON.stringify(palabrasDB));
};
const palabraRandom = () => {
    let subindice = Math.round(Math.random() * (palabrasDB.arrayPalabras.length - 1));
    
    return palabrasDB.arrayPalabras[subindice];
};
const mostrarPalabra = palabra => {
    let arrayString = [...palabra];

    const letters = document.createElement('div');
    letters.setAttribute('id','lettersContine');
    letters.classList.add('game__letters');

    for(let i = 0; i < arrayString.length; i++){
        const letter = document.createElement('span');
        letter.classList.add('letter');
        letter.textContent = `${arrayString[i]}`;

        fragmentLetters.appendChild(letter);
    }
    
    letters.appendChild(fragmentLetters);
    sectionGame.appendChild(letters);
};
const eliminarPalabra = () => {
    const palabra = document.getElementById('lettersContine')
    palabra.remove()
}

//Descomentando la linea de abajo puedes borrar el local storage Daniel del futuro
// localStorage.removeItem('palabras');
export { validar, noRepeat, addPalabra, createList, removeList, removeItem, palabraRandom, mostrarPalabra, eliminarPalabra };