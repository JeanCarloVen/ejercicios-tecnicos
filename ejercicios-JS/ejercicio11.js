/*
 
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
 
*/

function sumarDos(arr, result){

    let pila = new Array();

    //RECORRER EL ARRAY 
    for(var i=0; i<arr.length;i++){
        // console.log(arr[i+1]);
        // console.log(arr[i]);
        // console.log(result);
        //SUMAR PRIMER Y SEGUNDO ELEMENTO SI SE CUMPLE = RESULT GUARDAR EN PILA AMBOS ELEMENTOS
        if(arr[i+1]+arr[i] === result){
            pila.push(arr[i], arr[i+1]);
            break;
        }

    }

    //DEVOLVER ARRAY
    console.log(pila);

}

sumarDos([3, 7, 8, 2], 10)