/*
Enunciado Ejercicio 25:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]);
 
Devuelve: 
[ 'nombre.jpg', 'apellido.doc', 'nombre.png', 'nombre(1).png', 'nombre(1).jpg', 'nombre(2).jpg']
 
*/

const files = ["Ubuntu.jpg", "Lazarus.doc", "Ubuntu.png", "Lazarus.png", "Ubuntu.jpg", "Roni.jpg"];

function fileRename(fileNames){

    //mapea el nombre del archivo junto con el indice
    return fileNames.map( ( fileName, index ) =>{

        //Detectar extensión
        let split = fileName.split( "." );

        console.log(split); //Devuelve un array [ "palabra", extensión ]

        console.log( fileName, index);
        //Valida indice por indice comenzando por el primero y en adelante
        let filtered = fileNames.slice(0, index).filter(    filenameFilter =>{
            //Existe repetición
            //si el nombre del mapeo coincide con el nombre que va avanzando regresa el nombre filtrado
            return fileName === filenameFilter
        });
        
        //si el filtrado es de tamaño cero, entonces regresa el nombre de lo contrario el nombre con su repetición
        return filtered.length === 0 ? fileName : `${fileName}(${filtered.length})`;
        
    })
        
}

// console.log(fileRename(files));

// const renombrarArchivos = (fileNames) => {
//   //Usaba la función map

//   const arr = fileNames.map( (el, index )=> {
//       return el + " " + index;
//   })

//   console.log(arr);
// }

// renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]);
 