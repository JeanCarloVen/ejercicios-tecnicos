/*
Enunciado Ejercicio 62:
Dado un diccionario de letras disponibles:
[
   ['A','B','C','D'],
   ['S','V','C','S'],
   ['A','D','O','E']
 ]
 
 Crea una función que me diga si la palabra que le paso
 como parametro se puede formar con las letras del
 diccionario disponibles.
 
¡PERO OJO! Cada vez que se usa una letra, se eliminia del array.
 
Ejemplos:
puedeFormarPalabra('BESO', diccionario)   // true
puedeFormarPalabra('SOSO', diccionario)   // false   
 
*/

const diccionario = [
    ['A','B','C','D'],
    ['S','V','C','S'],
    ['A','D','O','E']
  ]
  

function canFormWord(word, dictionary){

    const dt = dictionary.flat();

    console.log(dt);
    let response = false; 

    for( letter of word ){
        console.log(letter);
        if(dt.includes(letter)){
            console.log( "esta incluida en el diccionario")
            //ELIMINA LA LETRA DEL DICCIONARIO 
            // console.log(dt.indexOf(letter));
            dt.splice(dt.indexOf(letter),1);
            response = true;
        }else{
            console.log( "No esta incluida en el diccionario")
            return false; 
        }
    }

    return response; 


}

console.log(canFormWord('BESO', diccionario));
//console.log(canFormWord('SOSO', diccionario));
