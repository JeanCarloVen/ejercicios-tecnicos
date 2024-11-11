/*
Enunciado Ejercicio 23:
Crea una función que a la cual le pase unos números en un array y me decodifique
el mensaje teniendo en cuenta que cada letra tiene un numero asignado.
 
Las letras del abecedario de la A a la Z tienen un número
por ejemplo la A es el numero 1 y la Z es el numero 26
 
Ejemplos:
decodificarMensaje([8, 15, 12, 1]);
 
Devuelve: 
HOLA
 
*/

const mensaje = [8, 15, 12, 1];


function decryptMessage(encrypt){

    const alphabet = ["a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

    //console.log(alphabet);
    //console.log(encrypt);
    let dec = "";
    encrypt.forEach(el => {
        for(let key in alphabet){
            //RECORRER LA PALABRASECRETA Y TODOS LOS 8 O 15 QUE ENCUENTRE LOS SUSTITUYE POR LA LETRA DEL ABECEDARIO
            if( parseInt(key) === el ){
                //dec.push(alphabet[key-1]);
                dec += alphabet[key-1]
            }
        }
    });
   console.log(dec);
}
 
decryptMessage(mensaje);

