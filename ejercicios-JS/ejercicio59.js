/*
Enunciado Ejercicio 59:
Crea una función que retorne el número total de bumeranes de un 
array de números enteros e imprima cada uno de ellos.
 
Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, 
en el que el primero y el último son iguales, y el segundo es diferente. 
Por ejemplo [2, 1, 2].
 
Ejemplos:
contrarBumeranes([2, 1, 2, 3, 3, 4, 2, 4])
 
Devuelve:
Hay 2 bumeranes: [[2, 1, 2], [4, 2, 4]]
 */

function findBumerans(numbers){

    let contador = 0;
    let result = [];
    let tmp = [];
    
    //Segmentar el array en triadas
    for(let i = 0; i<numbers.length; i++){
        tmp = numbers.slice( i, i+3 );
        //Validar si la triada el primer y último valor son iguales y el mitad diferente
        if(tmp[0] === tmp[2] && tmp[1] !== tmp[0]){
            console.log("Es un boomerang")
            //Si se cumple se guarda en un arreglo nuevo
            contador++;
            result.push(tmp)
        }else{
            console.log("No es un boomerang")
        }    
    }

    return [contador, result]

}


let bum = findBumerans([2, 1, 2, 3, 3, 4, 2, 4]);

console.log(" Hay ", bum[0] , "bumeranes: " , bum[1]);
