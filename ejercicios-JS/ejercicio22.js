/*
Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH
 
*/

function invertirTexto(palabra){
    console.log(palabra)

    //console.log(Array.from(palabra));

    let rightWord = Array.from(palabra);

    let arr = new Array();
    let contador = rightWord.length;
    let i = 0;

    while(contador > 0){
        //console.log(rightWord[contador-1]);
        arr.push(rightWord[contador-1]);
        contador--;
        i++;
    }

    const inverseWord = arr.join("");

    console.log(inverseWord);

}

invertirTexto("jean");