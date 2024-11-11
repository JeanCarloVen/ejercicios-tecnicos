/*
Enunciado Ejercicio 31:
Dado un texto, crea una función que sea capaz de invertir
el orden de sus palabras.
 
No podemos usar funciones nativas del lenguaje.
 
Ejemplos:
invertirPalabras("Hola soy Victor Robles"); // Devuelve: Robles Victor soy Hola
*/

function invertirPalabras(phrase){
    console.log(phrase)
    // separar la phrase en sus palabras
    let words = phrase.split( " ");
    let arr = [];
    
    //Invertir el orden de las palabras
    for(let i = words.length-1; i >= 0 ; i--){
        arr.push(words[i])
    }

    const response = arr.join( " " );

    return response;
}

console.log(invertirPalabras("Hola es un gusto saludarte"));
