/*
Enunciado Ejercicio 21:
Crea una función que reciba un numero y me genere una matriz
con el numero de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);
 
Devuelve: 
[
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
]
 
*/

function generateMatrix(size){
    
    //Generar un array de arrays 
    //Cada array interno será del tamaño indicado por size y se repetirá el mismo numero de veces 
    let rows = new Array();
    let columns = new Array();
    //Genera todo el arreglo completo
    for(let j=0; j<=size*size; j++){
        columns.push(j);
    }

    //GENERAR FILAS
    //Ir metiendo valores dentro del array
    //Comienza por la fila 
    for(let i=0 ;i<size; i++){
        rows[i] = columns.slice(size*i+1, size*i+size+1)
    }
    
    console.log(rows);

}

generateMatrix(6);