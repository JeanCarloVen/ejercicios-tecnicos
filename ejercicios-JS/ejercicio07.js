/* 
Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al ultimo número del array.
 
En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
 
Devolver el número faltante más grande.
 
El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4
*/

const enteros = [1,2,3,4,5,6,7,8,9];
//const enteros = [9,7,3,5,1]; //Falta el 2,4,6

function permutacion(numbers){
    //Acomodar los numeros en orden ascendente
    let sortNumbers = numbers.sort();
    let flag = false;

    let pila = new Array();

    console.log(sortNumbers);
    //Detectar si falta algún número en la serie del arreglo
    for(var i = 0; i<sortNumbers.length-1; i++){
        let diff = sortNumbers[i+1] - sortNumbers[i];
        //console.log("La diferencia es: " + diff );
        //Si son diferentes de 1 quiere decir que no es conscutivo
        if(sortNumbers[i+1] - sortNumbers[i] !== 1 ){
            //Guardar valores que faltan en la serie
            pila.push(sortNumbers[i+1]-1);
            flag = true;
        }
    }

    //console.log(pila);

    if(!flag){
        console.log("El arreglo es correcto y su último numero es: " + sortNumbers[sortNumbers.length-1]);    
    }else{
        console.log("el último valor más grande es: " + pila[pila.length-1]);
    }

}


permutacion(enteros);