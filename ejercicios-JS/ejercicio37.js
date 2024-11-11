/*Enunciado Ejercicio 38:

Crea una función que convierta un número a binario.
 
Ejemplos:
aBinario(10) // 1010
aBinario(76) // 1001100
*/

function toBinary(decimal) {
    let binary = ""

    while(decimal !==0){

        binary = (decimal % 2) + binary;

        decimal = Math.floor(decimal / 2);
        console.log(decimal);
    }

    console.log(binary);

}
toBinary(76);


// //Function 2
// function allEven(arrNumbers){
//   return arrNumbers.every( number => {
//       return number % 2 === 0
//   })
// }

// //console.log(allEven([1,2,3,4]));
// console.log(allEven([2,4,6,8]));