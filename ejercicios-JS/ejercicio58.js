/*
Enunciado Ejercicio 58:
Crea una función que tome una cadena de caracteres como argumento 
y devuelva una nueva cadena que contenga únicamente las letras 
únicas de la cadena original. 
 
Las letras deben aparecer en el mismo orden en que se 
encontraron en la cadena original.
 
Ejemplos:
letrasUnicas("Hola soy Victor Robles WEB")
 
Devuelve:
Hola syVictrRbeWEB
 
*/

function uniquesLetters(phrase){

    let palabraActual = "";
    let palabraAcumulada = "";

    for(let i=0; i<phrase.length; i++){
        //console.log(phrase[i])
        //console.log(palabraActual.indexOf(phrase[i]))
        if(palabraActual.includes(phrase[i])) {
            //El indice que se repite se remplaza por espacio vacio
            palabraActual += ""
        }else{
            palabraActual += phrase[i];
        }

        //console.log(palabraActual)

        if(palabraActual.length > palabraAcumulada.length ){
            palabraAcumulada = palabraActual
        }

        //console.log(palabraAcumulada)
    }

    console.log(palabraAcumulada)
}

uniquesLetters("Holocame jean carlo")