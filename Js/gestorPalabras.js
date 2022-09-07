if(!localStorage.getItem('palabras')){
    const Palabras = {
        "arrayPalabras" : ['GATO','PALETA','YOYO']
    }
    localStorage.setItem('palabras', JSON.stringify(Palabras));
}
let palabrasDB = JSON.parse(localStorage.getItem('palabras'));

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

//Descomentando la linea de abajo puedes borrar el local storage Daniel del futuro
// localStorage.removeItem('palabras');
export {validar, noRepeat,addPalabra};