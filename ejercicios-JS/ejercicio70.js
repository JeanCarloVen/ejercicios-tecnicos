/*
Enunciado Ejercicio 70:
Crea una función que dado un texto que contenga varias frases en minusculas,
logre poner en mayusculas las letras correctas del texto. 
 
Ejemplos:
capitalizarFrase("hola. como estas. soy Víctor Robles. me gusta programar.");
 
Devuelve:
Hola. Como estas. Soy Victor Robles. Me gusta programar.
*/

function capitalicePhrase(phrase) {
  //Meter en un array la frase
  const arrPhrase = phrase.split(" ");
  let arrResult = [];

  //console.log(arrPhrase);
  // Detectar las mayusculas
  // Si la palabra anterior incluye punto entonces la siguiente cambia primera letrra a mayuscula
  arrPhrase.forEach((word, index) => {

    //Si es la primera palabra colocar mayúsuclas
    if(index === 0){
      let result = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
      arrPhrase[index] = result;
    }

    //console.log(word)
    if(word.includes(".") && arrPhrase[index+1]){
      //modificar la siguienta palabra
      //console.log(word);
      let nextWord = arrPhrase[index+1];
      let result = nextWord.replace(nextWord.charAt(0), nextWord.charAt(0).toUpperCase());
      //console.log(result);
      //Sustituir la palabra considerando el indice
      arrPhrase[index+1] = result; 
    }

   
  });

  console.log(arrPhrase);

  const resultPhrase = arrPhrase.join( " " );

  return resultPhrase;
  
  //
}

console.log(capitalicePhrase("hola. como estas. soy Víctor Robles. me gusta programar."));
