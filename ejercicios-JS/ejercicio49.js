/*
Enunciado Ejercicio 49:
Crea una función que dado un array de números devuelva el número 
más pequeño de la matriz.
 
No puedes ordenar el array, solo usar estructuras de control.
 
Ejemplos:
elMasPequenio([8,9,99,88,77,1,12,13,6,7])  // Devuelve: 1
*/


function smallestNumber(arrNumbers){

    let small = arrNumbers[0];

    for ( number of arrNumbers ){
        if( number < small ) small = number; 
    }
    return small;
    
    

}

console.log(smallestNumber([8,9,99,88,77,1,12,13,6,7]));
