/*
Enunciado Ejercicio 53:
Crea una función para encontrar la longitud del mayor
subconjunto de caracteres que no se repiten.
 
Ejemplos:
encontrarSubcadenaSinRepetir("abcabcbb")  // abc, 3
encontrarSubcadenaSinRepetir("bbbbb")     // b, 1
encontrarSubcadenaSinRepetir("pwwkew")    // wke, 3
*/

function findSubStringsWithOutRepeat(texto){
    // Crear un objeto donde se guardará el resultado
    let subCadenaSinRepetir = "";

    let subCadenaActual = "";

    for( caracter of texto){
        console.log( "el caracter es: " + caracter);
        if(subCadenaActual.indexOf(caracter) !== -1) { 
            subCadenaActual = ""; //Si no encuentra el caracter en la subcadena entonces a la subcadena la reinicia}
        }

        subCadenaActual += caracter;

        console.log(subCadenaActual);
        console.log(subCadenaActual.length);

        if(subCadenaActual.length > subCadenaSinRepetir.length){
            subCadenaSinRepetir = subCadenaActual;
        }
    }
    
    console.log( subCadenaSinRepetir, subCadenaSinRepetir.length)
    


}

findSubStringsWithOutRepeat("abcabcbb")
// findSubStringsWithOutRepeat("bbbbb")     // b, 1
// findSubStringsWithOutRepeat("pwwkew")