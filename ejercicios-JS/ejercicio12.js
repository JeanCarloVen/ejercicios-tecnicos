/*Enunciado Ejercicio 12:
Crea un programa que cuente las palabras de un texto
 
Ejemplos:
contarPalabras("El perro de san roque no tiene el rabo 
porque es un perro muy muy malo");
 
Devuelve:
{
  el: 2,
  perro: 2,
  de: 1,
  san: 1,
  roque: 1,
  no: 1,
  tiene: 1,
  rabo: 1,
  porque: 1,
  es: 1,
  un: 1,
  muy: 2,
  malo: 1
}
*/
 
function contarPalabras(phrase){
    //CONVERTIR TODA LA ORACION A MINUSCULAS
    let minPhrase = phrase.toLowerCase();

    //SEPARAR LA FRASE EN SUS ELEMENTOS (PALABRAS) 
    //console.log(minPhrase.split(" "));
    let arrPhrase = minPhrase.split(" ");

    let wordCounter = {};

    arrPhrase.forEach( word => {
        if(word in wordCounter){
            wordCounter[word] = wordCounter[word] + 1;
        }else{
            wordCounter[word] = 1;
        }
    })

    console.log(wordCounter);


}

contarPalabras("El perro de san roque no tiene el rabo porque es un perro muy muy malo")