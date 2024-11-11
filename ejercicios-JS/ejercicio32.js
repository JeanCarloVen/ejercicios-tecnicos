/*Enunciado Ejercicio 32:
Dado un texto, crea una función que sea capaz de generar
un nuevo texto que incluya solo las palabras de 4 caracteres o más.
 
Ejemplos:
fraseFiltrada("Hola soy Victor Robles, hoy hace frio"); 
 
// Devuelve: Hola Victor Robles, hace frio
*/

// function filterPhrase(phrase){

//     const words = phrase.split( " " );

//     let phraseFix = [];

//     for( let word of words){
        
//         if(word.length >= 4){
//             phraseFix.push(word)
//         }
//     }

//     console.log(phraseFix.join( " " ));

// }


function filterPhrase(phrase){

    const words = phrase.split( " " );

    const filterword = words.filter( word => {
        return word.length >= 4
    })

    console.log(filterword.join(" "));

}


filterPhrase("Hola soy Victor Robles, hoy hace frio"); 