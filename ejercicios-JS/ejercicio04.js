/*
Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
// Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
 
*/

const secretWords = [
    {
        1 : "j____",
        2 : "j___s",
        3 : "je__s",
        4 : "je_ns",
        "respuestaCorrecta" : "jeans"
    },
    {
        1 : "____s",
        2 : "t___s",
        3 : "ta__s",
        4 : "taz_s",
        "respuestaCorrecta" : "tazas"
    }        
]

function juegoDelahorcado(){
    //console.log(Math.floor(Math.random() * secretWords.length));

    let selectSecretWord = secretWords[(Math.floor(Math.random() * (secretWords.length)))];

    //Mostrará la palabra a descubrir considerando una letra: _e__

    //Ocultar carácteres de la palabra a descubrir
    let objectValues = Object.values(selectSecretWord);

    for(let i=0; i< objectValues.length; i++){

        let word = prompt("Escribe la palabra secreta");

        //validar coincidencia entre la palabra y la palabra a descubrir
        if(selectSecretWord.respuestaCorrecta === word){
            console.log("Se logró descubrir la palabra: " + selectSecretWord.respuestaCorrecta);
            //Descrubir la siguiente letra: _ea_
            alert("Excelente le atinaste a la palabra: " + selectSecretWord.respuestaCorrecta);
            break
        }else{
            //Mostrar intentos restantes
            //Descubre la siguiente letra
            console.log("Siguiente letra: " + objectValues[i] + " intentos: " + i);
            alert("Siguiente letra: " + objectValues[i]);
        }
            
    }

    

}

juegoDelahorcado();

// const secretWords = [
//   {
//       1 : "j____",
//       2 : "j___s",
//       3 : "je__s",
//       4 : "je_ns",
//       5 : "jeans"
//   },
//   {
//       1 : "____s",
//       2 : "t___s",
//       3 : "ta__s",
//       4 : "taz_s",
//       5 : "tazas"
//   }        
// ]



// function juegoDelahorcado(word){

// console.log(secretWords.length);
// //console.log(Math.floor(Math.random() * secretWords.length));

// let selectSecretWord = secretWords[(Math.floor(Math.random() * (secretWords.length)))];

// //Mostrará la palabra a descubrir considerando una letra: _e__
// console.log("Palabra insertada: " + word);
// console.log("Palabra a descubrir: " + selectSecretWord);

// //Ocultar carácteres de la palabra a descubrir
// let objectValues = Object.values(selectSecretWord);

// for(let i=0; i< objectValues.length; i++){
//   console.log(objectValues[i]);
//   let intentos = 5;
//   //validar coincidencia entre la palabra y la palabra a descubrir
//   if(selectSecretWord === word){
//       console.log("Se logró descubrir la palabra");
//       //Descrubir la siguiente letra: _ea_

//   }else{
//       //Mostrar intentos restantes
//       console.log("Se tienen: " + intentos + " intentos");
//   }

// }

// }

// juegoDelahorcado("holi");