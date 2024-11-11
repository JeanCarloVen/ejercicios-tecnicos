/*
Enunciado Ejercicio 44:
Crea una función que detecte si un string es un pangrama o no.
 
Un pangrama es una frase que incluye todas las letras del abecedario.
 
Ejemplos:
esPangrama("El pequeño jabato erizo se balanceaba sobre la rama del árbol.") // true
esPangrama("Hola soy Víctor Robles") // false
*/

function isPangrama(phrase){
    //let abecedario = [ 'a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    const abecedario = "abcdefghijklmnñopqrstuvwxyz".split("");
    console.log(abecedario);

    phrase = phrase.toLowerCase().replace(/\s/g, '');
    
    //convertir a abecedario, mayúsculas y minusculas

    return abecedario.every( letter => {
        return phrase.includes(letter);
    })

}

console.log(isPangrama("El viejo Señor Gómez pedía queso, kiwi y habas, pero le ha tocado un saxofón"));
//console.log(isPangrama("Hola soy Víctor Robles"));