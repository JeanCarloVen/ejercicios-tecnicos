/*Enunciado Ejercicio 28:
Crea una función que me diga si un número es armstrong o no.
 
Un número es armstrong si la suma de los cubos de sus dígitos es igual al número. 
Por ejemplo, el número 371 es armstrong porque 3^3 + 7^3 + 1^3 = 371.
 
Si la cifra es de 4 digitos, se eleva a 4, y si es de 5 a 5.
 
Ejemplos:
esArmstrong(371)  // Devuelve: true
*/

function isArmstrong(number){
    //Separar el número en sus componentes
    const component = Array.from(number.toString());
    let result = 0;
    //Elevar cada componente al cubo
    for(let i=0; i<component.length;i++){
        //Sumar cada término y validar si es igual al numero indicado
        result += component[i]**3;
    }

    return result === number ? true : false;

    

}

console.log(isArmstrong(407));
