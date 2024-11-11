/*
Enunciado Ejercicio 27:
Crea una función a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de mayusculas y minusculas.
 
Ejemplos:
buscarPalabra('Hola como estas', 'Hola')  // Devuelve: true
*/

function searchWord(phrase, word){
    // Convertir a minúsculas
    let phraseLowerCase = phrase.toLowerCase();
    
    console.log( word )
    // Encontar la palabra dentro de la frase.
    const result = phraseLowerCase.split( " " ).find( w => {
        return w === word;
    })
    
    return result === undefined ? false : true; 

    

}

console.log(searchWord('Hola como estas', 'estas'));