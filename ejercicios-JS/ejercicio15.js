/*
Enunciado Ejercicio 15:
Dada un array de palabras, crear una función que lo devuelva ordenado
por la longitud de sus palabras de menor a mayor
 
Ejemplos:
ordenarPorLongitud([
  "Hola",
  "soy",
  "Víctor Robles",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
  "a",
  "estudiar",
  "ahora"
]);
 
*/

const palabras = [
    "Hola",
    "soy",
    "Víctor Robles",
    "como",
    "estas",
    "hoy",
    "amigo",
    "yo",
    "voy",
    "a",
    "estudiar",
    "ahora"
  ];

function ordenarPorLongitud(words){
    //Recorrer el array
    //Generar un array que se podrá ordenar segun el valor
    let pila = [];

    words.forEach( word => {
        //eliminar los espacios en las palabras
        //console.log(word.replace(" ", ""));
        //let wordWE= word.replace(" ", "");
         //Coloca el tamaño de la palabra y la palabra en un nuevo objeto: key : value, key sería la palabra y value sería el tamaño
        pila.push([word,word.length])
    });

    //ordenar el objeto segun el valor;
    console.log(pila.sort( (a,b) => {
        return b[1]-a[1];
    }));

}


ordenarPorLongitud(palabras);