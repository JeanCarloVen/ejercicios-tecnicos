/*
Enunciado Ejercicio 64:
Crea un programa que compruebe si los paréntesis, llaves y corchetes 
de una expresión están equilibrados, es decir, que estos delimitadores 
se abren y cieran de forma adecuada.
 
Ejemplos:
expresionEquilibrada('{ [ x * ( y + z ) ] * 12 }');  // imprime true
expresionEquilibrada('{ x * ( y + z ) ] + 12 }');  // imprime false
*/

function equalExpressions(expression){
    //Si existe "{" debe existir "}"

    //Debe ir recorriendo la expressión con base a un catálogo de datos.

    const catalogo = [ "{", "}", "[", "]", "(", ")"];

    let response = false; 

    for( delimiter of catalogo){
        //console.log(delimiter);
        //console.log(expression.includes(delimiter));
        if(!expression.includes(delimiter)){
            return false; 
        }
    }

    return true; 

}

//console.log(equalExpressions('{ [ x * ( y + z ) ] * 12 }'));
console.log(equalExpressions('{ x * ( y + z ) ] + 12 }'));