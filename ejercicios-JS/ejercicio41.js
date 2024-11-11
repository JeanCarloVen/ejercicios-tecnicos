/*
Enunciado Ejercicio 41:
Crea una función que invierta los números de un número entero.
 
Ejemplos:
invertirEntero(123)   // 321
invertirEntero(-123)  // -321
 
*/

function invertInteger(number) {
  let result = "";

  let numbString = Math.abs(number).toString();

  for (let i = numbString.length - 1; i >= 0; i--) {
    result += numbString[i];
  }
    
  if(number < 0 ){
    result = "-" + result
  }
  
  
  console.log(result);
}

invertInteger(123);
