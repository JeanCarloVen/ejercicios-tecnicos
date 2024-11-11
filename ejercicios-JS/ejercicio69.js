/*
Enunciado Ejercicio 69:
Crea una función que dado un texto, sea capaz de censurar palabras.
 
Ejemplos:
censurar("Texto de prueba", "texto") // ***** de prueba
 
*/
  
function censure(phrase, word){

  if(!phrase.includes(word)) return "No se encuentra la palabra dentro de la frase";

  //ENCONTRAR EN LA PHRASE LA PALABRA 
  const arrPhrase = phrase.split(" ");

  //obtener el índice de la palabra que debemos de censurar
  let index = arrPhrase.indexOf(word)

  // SUSTITUIR LA PALABRA CON LOS ASTERISCOS
  //insertamos en el array la censura
  arrPhrase.splice( index, 1, "*****");

  //regresamos el array a un string
  const censurePhrase = arrPhrase.join(" ");

  return censurePhrase

  // RETORNAR LA PALABRA ORIGINAL CON LOS ASTERISCOS

}


console.log(censure( "hola como estas", 'como'));
