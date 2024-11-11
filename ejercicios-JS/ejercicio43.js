/*
Enunciado Ejercicio 43:
Dada una colección de letras:
[
   ['A','B','C','D'],
   ['Z','V','K','S'],
   ['F','G','O','E']
]
 ;
Crea una función que me diga si la palabra que le paso como parametro 
se puede formar con las letras de la colección
 
Ejemplos:
puedeFormarPalabra('PERRO', coleccion)  // false
puedeFormarPalabra('CASO', coleccion)   // true
 
*/
const collection = [
    ['A','B','C','D'],
    ['Z','V','K','S'],
    ['F','G','O','E']
 ]

function canFormWord(word, collection){

    //APLANAR TODO EL ARRAY EN UNO SOLO "USANDO FUNCTION FLAT"
    let joinArrays = collection.flat();

    console.log(joinArrays);
    for(let letter of word){
        if( !joinArrays.includes(letter)) return false;
    }
    return true;


}

//canFormWord('PERRO', collection)
console.log(canFormWord('CASO', collection));