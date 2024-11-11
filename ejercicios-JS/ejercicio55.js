/*
 Enunciado Ejercicio 55:
Dado un conjunto de enteros distintos, 
devuelve todos los subconjuntos posibles.
 
Ejemplos:
subconjuntos([1,2,3]);
 
Devuelve:
[
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2],
[]
]
*/

function subconjuntos(numeros){

    let resultados = [[]];

    // Ordenar numeros
    numeros.sort( (a,b) => {
        a-b
    })

    // Recorrer todos los numeros
    for(let i=0; i<numeros.length; i++){

        //Calcular el tamaño de la lista de subconjuntos actuales
        const tamanio = resultados.length;
        
        //Iterar subconjunto actual
        for(let j=0; j< tamanio; j++){
            //Añadir a resultados una copia del subconjunto actual
            // con el numero actual agregado
            //Añede el numero actual al subconjunto previo 
            resultados.push([...resultados[j], numeros[i]])
        }


    }

    return resultados;

}

console.log(subconjuntos([1,2,3]));