/*
Enunciado Ejercicio 38:
Crea una función que convierta un número a binario.
 
Ejemplos:
aBinario(10) // 1010
aBinario(76) // 1001100
*/

function DecimaltoBinary(number){
    
  let binary = [];
  
  let residue = number % 2;

  let result = number / 2;
  
  //console.log(residue);
  console.log(Math.floor(result));

  while(Math.floor(result) !== 1){
      result = Math.floor(result / 2 ) ;
      console.log(result)
  }


}   

DecimaltoBinary(34);