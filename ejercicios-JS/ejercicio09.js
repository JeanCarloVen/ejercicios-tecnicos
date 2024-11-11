/*
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/

function sumarPares(arr){
    let suma = 0;

    //Detectar numeros pares
    arr.forEach( el => {
        if(el % 2 === 0){
            //console.log("el numero es par: " + el);
            //Guardaar pares en una pila
            suma +=el; 
        }
    })
    
    console.log(suma)

}

sumarPares([5,2,3,7,6,8,9,2]);