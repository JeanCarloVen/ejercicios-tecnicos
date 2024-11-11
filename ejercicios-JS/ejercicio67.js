/*
Enunciado Ejercicio 67:
Dada una frase devuelve la longitud de la última palabra que tenga más de 4
caracteres y que contenga la vocal A.
 
Ejemplos:
longitudUltimaPalabra('El cielo está encapotado quien lo desencapotará hoy')
 
*/


function lengthLastWord(phrase){
    // más de 4 carácteres
    // tenga la vocal "A"
    let phraseArr = phrase.split(" ");
    let response = "";

    //Seleccionar la última palabra
    const lastWord = phraseArr[phraseArr.length-1];
    // validar tamaño de la palabra y Validar vocal "A"
    if( lastWord.length >= 4 && lastWord.toLowerCase().includes("a")){
        response = lastWord.length;
    }else{
        response = "No se cumplen los criterios"
    }

    return response;

}

console.log(lengthLastWord('El cielo está encapotado quien lo desencapotará hoy'));
//console.log(lengthLastWord('El cielo está encapotado'));