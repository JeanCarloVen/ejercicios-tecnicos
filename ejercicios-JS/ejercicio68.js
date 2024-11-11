/*
Enunciado Ejercicio 68:
Crea una función que pueda generar contraseñas aleatorias.
 
Podrás pasar los siguientnes parámetros para las contraseñas:
- Longitud: Entre 6 y 20.
- Con o sin mayúsculas.
- Con o sin números.
- Con o sin símbolos.
 
Ejemplos:
generarContrasenia(12, true, true, false);
 
*/

function generatePassword(longitude, mayus, num, symb) {
  //Estructura del password
  // 12, true, true, false
  // abc 012 ABC $%&

  let letters = "abcdefghijklmnopqrstvwxyz";
  const numbers = "0123456789";
  const symbols = ["#", "$", "%", "&"];

  let arrLetters = [];
  let arrNumbers = [];
  
    //Concatenar digitos
  let password = "";
  let randOption = 0;
  //Combinaciones posibles:  
  while( password.length < longitude){
    if (mayus) {
      letters = letters.toUpperCase();
      arrLetters = letters.split("");
      randOption = Math.floor(Math.random() * 25);
      response = arrLetters[randOption];
      password += response
    }else{
      arrLetters = letters.split("");
      randOption = Math.floor(Math.random() * 25);
      response = arrLetters[randOption];
      password += response
    }
    
      
    if (num) {
      arrNumbers = numbers.split("");
      randOption = Math.floor(Math.random() * 10);
      response = arrNumbers[randOption];
      password += response
    }

    if (symb) {
      randOption = Math.floor(Math.random() * 4);
      response = symbols[randOption];
      password += response
    }

  }

  
  console.log(password.length);
  console.log(password);

}


generatePassword(12, true, true, true);

