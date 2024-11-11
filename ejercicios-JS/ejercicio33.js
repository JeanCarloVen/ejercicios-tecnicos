/*
Enunciado Ejercicio 33:
Crea una función a la cual le pase un string y lo convierta 
a un listado en un objeto que cuente el número de elementos.
 
Las palabras no deben incluir guiones ni guiones bajos.
 
Ejemplos:
contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"); 
 
Devuelve: 
{ pc: 1, ordenador: 2, computadora: 1, consola: 1, ps5: 1, theLastOfUs: 1 }
*/


function countElements(words){


    const arr = [];

    let counter = {};

    //Eliminar guiones
    let theWord = words.replaceAll("-", "").replaceAll("_", "").split( " ");

    console.log(theWord);

    arr.push(theWord);

    //console.log(arr);

    for( let word of theWord){

        if(counter[word] === undefined ){

            counter[word] = 1;

        }else{

            counter[word]++;

        }
    }

    console.log(counter);

    


}

countElements("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador")