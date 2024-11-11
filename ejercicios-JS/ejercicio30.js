/*
Enunciado Ejercicio 30:
Dado un array de numeros, permitir los numeros duplicados
un maximo de 2 veces y devolver la longitud del array.
 
Ejemplos:
eliminarDuplicados([4, 4, 4, 2, 2, 3]); // 5
eliminarDuplicados([6, 6, 2, 2, 2, 3]); // 5
eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9]); // 5

*/

function deleteDuplicate(arrNumbers){
    const counter = {};

    for( const number of arrNumbers){
        
        if(counter[number] === undefined){
            counter[number] = 1;
        }else{
            counter[number]++;
            if(counter[number] >= 3) counter[number] = 2;
        }
    }
    
    console.log(counter);
    
    const result = Object.values(counter).reduce( (acumulator, value) => {
        return acumulator + value;
    }, 0)

    return result;
}

console.log(deleteDuplicate([4, 4, 2, 2, 3]));