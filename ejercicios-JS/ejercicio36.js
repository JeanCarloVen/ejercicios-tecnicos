/*
Enunciado Ejercicio 36:
Crea un programa que encuentre las parejas de números que como resultado
dan un número que pasamos a la función por parametro.
 
Ejemplos:
encontrarParejasConSuma([1, 2, 3, 4], 5);
 
Devuelve: 
[ [ 1, 4 ], [ 2, 3 ] ]
 
*/

// function findSumPartners(arrayNumbers, sumValueUser){
//     let arr = [];  
//     arrayNumbers.forEach( (number, index) => {
//         for (let i = 1; i < arrayNumbers.length; i++) {
//             if (arrayNumbers[i + 1] === undefined) return;
//             let sumValue = number + arrayNumbers[i + 1];
//             if (sumValue === sumValueUser) {
//                 arr.push([number, arrayNumbers[i + 1]]);
//                 //arrayNumbers.shift();
//                 arrayNumbers.splice(i + 1, 1); // Elimina el elemnto del array
//             }
//         }
//     })
//     return arr;    
// }

function findSumPartners( arrayNumbers, sumValueUser){

  let partners = [];

  for (let currentNumber of arrayNumbers){

      for( let nextNumber of arrayNumbers.slice(arrayNumbers.indexOf(currentNumber) + 1)){
          if( currentNumber + nextNumber === sumValueUser){
              partners.push([currentNumber, nextNumber]);
          }
      }

  }
  return partners;
}


//findSumPartners([1,2,3,4], 5);

console.log(findSumPartners([1,2,3,4], 7));