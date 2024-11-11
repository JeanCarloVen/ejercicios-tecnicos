/*Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/

//Ruta de linux /home/carpeta/archivo.txt
//Ruta simplificada => /archivo.txt

// Debe de identificar los slash "/" 
// el último slash se elimina
// Si hay dos o más slashes debe quitarlos y sólo debe haber uno
// eliminar los puntos
//
//Solución:
//Contar slashes en el string, si observa que hay un slash seguido de otro eliminar el anterior
// 1) Etapa de simplificación: eliminar puntos en el string
// 2) Si al eliminar puntos en el string quedan dos slashes juntos, sólo dejar uno.
// 3) Usar regular expressions

//const regex = /pattern/flags;
const searchValuePoints = /\./g;
const searchValuePointsSlashes = /\/\//g;

function simplicarRuta(ruta){

    ruta = ruta.replace( searchValuePoints, "" );

    ruta = ruta.replace( searchValuePointsSlashes, "/" )

    // //Quita slashes por derecha
    while(ruta.slice(-1) === "/"){
        ruta = ruta.substring(0, ruta.length - 1);
        //console.log("La nueva ruta es: " + ruta);
    }
    console.log(ruta);

}

simplicarRuta("/x/./y/../../z/");

