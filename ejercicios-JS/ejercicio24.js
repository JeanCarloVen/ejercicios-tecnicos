/*
Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
 
Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]
 
*/

const files = ["Ubuntu", "Lazarus", "Ubuntu", "Lazarus", "Ubuntu", "Roni"];

function fileRename(fileNames){

    return fileNames.map( ( fileName, index ) =>{

        console.log( fileName, index);

        let filtered = fileNames.slice(0, index).filter(    filenameFilter =>{
            return fileName === filenameFilter
        })

        return filtered.length === 0 ? fileName : `${fileName}(${filtered.length})`;
        
    })
    
    
}

console.log(fileRename(files));


// for(let j=0; j<fileNames.length; j++){
        //     if(fileNames[i] === fileNames[j]){
        //         contador++;
        //         //Eliminar el elemento del arreglo
        //         newArr.push(fileNames);
        //     }
        // }