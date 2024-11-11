/*
Enunciado Ejercicio 45:
Dado un array de números, elimina los números duplicados.
 
Ejemplos:
eliminarDuplicados([1, 1, 2, 2, 3, 4, 5, 5, 5, 6])
 
// Devuelve:
[ 1, 2, 3, 4, 5, 6 ]
*/

function deleteDuplicates(arrNumbers){
    
    const onlyNumbers = ( number, index ) => {
        return number !== arrNumbers[index+1]
    }

    let newArrNumbers = arrNumbers.filter( onlyNumbers );

    console.log(newArrNumbers);


}

deleteDuplicates([1, 1, 2, 2, 3, 4, 5, 5, 5, 6]);