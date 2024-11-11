/*
Enunciado Ejercicio 14:
Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de
javascript, solo estructuras de control
 
Los palíndromos son palabras que se leen igual aun estando invertidas. 
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false
 
*/

function esPalindromo(word){
    //TAMAÑO DE LA PALABRA SI ES PAR O IMPAR
    let sizeWord = word.length;

    //SI ES PAR SÓLO COMPARAR PRIMERA Y ULTIMA
    //console.log(sizeWord % 2 === 0);

    let arrWord = Array.from(word);

    //console.log(arrWord);
    //console.log(arrWord[arrWord.length-1]);

    let lastIndex = arrWord.length-1;
    //console.log(lastIndex);

    let pila = new Array();

    // SI SE CUMPLE 
    if(sizeWord % 2 === 0){
        //ES PAR
        //VALIDA INDICES: PRIMERO Y ÚLTIMO
        for(let i = 0; i<=lastIndex; i++){
            //console.log(i);
            //console.log(arrWord[i]);
            if(arrWord[i] === arrWord[lastIndex]){
                pila.push(true);
                lastIndex--;
            }
            else{
                pila.push(false);
            }
        }
    }else{
        //ES IMPAR
        //ejemplo: Ana
        //Eliminar el elemento de la mitad: aaNaa => Aaaa
        arrWord[lastIndex/2] = "";

        //Reacomodo del arreglo sin espacios
        let arrWordEmpty = arrWord.filter(el => el != '');

        let newlastIndex = arrWordEmpty.length-1;

        for(let i = 0; i<=newlastIndex; i++){
            //console.log(i);
            //console.log(arrWord[i]);
            if(arrWordEmpty[i] === arrWordEmpty[newlastIndex]){
                pila.push(true);
                newlastIndex--;
            }
            else{
                pila.push(false);
            }
        }
    }

    //console.log("la pila es: " +pila);

    //DEVOLVER TRUE O FALSE 
    const allRight = pila.every( el => {
        return el === true;
    })

    if(allRight){
        response = "la palabra es un palíndromo";
    }else{
        response = "la palabra NO es un palíndromo";
    }

    return response;

}

console.log(esPalindromo("ahkl"));