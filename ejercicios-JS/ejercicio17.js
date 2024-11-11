/*
Enunciado Ejercicio 17:
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Devuelve: 12
 
*/
 
function contarPalabras(phrases){

    let firstLine;
    let secondLine;
    let pila = new Array();
    let contador = 0;
    //eliminar los espacios

    phrases.forEach( phrase => {
        firstLine = phrase.split(", ");  
        pila.push(firstLine);     

    })
    
    pila.forEach( phrase => {
        for( word of phrase){
            secondLine = word.split(" ");
            //console.log(secondLine)
            //console.log(secondLine.length);
            contador += secondLine.length
        }
        
    })

    console.log(contador);
    
}

contarPalabras([
    "Hola, soy Víctor Robles WEB",
    "Me gusta programar",
    "Y soy desarrollador web"
]);