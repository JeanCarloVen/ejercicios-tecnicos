/*
Enunciado Ejercicio 39:
Dado un número crea una función que genere todas las combinaciones
de parentesis válidas.
 
Ejemplos:
combinacionesParentesis(3);
 
Devuelve:
Con 2
[
    "(())", listo
    "()()", Independiente Listo
]
    
Con 3
[
    "((()))", listo
    "()()()", Independiente Listo

    "(()())", Anidados  
    "(())()",
    "()(())",
    
]

Con 4
[
    "(((())))", listo
    "()()()()", Independiente Listo

    "(()()())", Anidados  
    "(())()()",
    "()(())()",
    "()()(())",
    
]
*/

// function combinateParentheses(number){

//     let parentheseOpen = "(";
//     let parentheseClose = ")";

//     //Determinar el número de combinaciones posibles
//     // Si es 2 -> 
//     // Si es 3 -> 5 combinaciones
    

//     //Combinaciones posibles: 
//     // parentesis independientes ()()()
//     // parentesis univoco ((()))
//     // parentesis anidados en cada elemento (())()
//     let parentheseJoin = parentheseOpen+parentheseClose;

//     //parentesis independientes
//     let parIndependiente = parentheseJoin.repeat(number);
//     console.log(parIndependiente);
//     // parIndependiente = parIndependiente.repeat(number);

//     //parentesis univoco
//     let parUnivoco = parentheseOpen.repeat(number)+parentheseClose.repeat(number);
//     console.log(parUnivoco);

//     //parentesis anidados en cada elemento, caso par o impar
    
//     if(number > 2){
//         //console.log(parIndependiente.lastIndexOf("("));
//         //let parAnidadoA = parIndependiente.substring(0,number+2); // 4-> 6
//         let parAnidadoA = "(" + parentheseJoin.repeat(number-1) + ")" ;
//         console.log(parAnidadoA);
        
//         let parAnidadoB =  parentheseJoin.repeat(number-1);

//         console.log(Array.from(parAnidadoB));

//         let newArr = Array.from(parAnidadoB)

//         const newArray = [ 
//             ...newArr.slice(0,0),
//             "(",
//             ...newArr.slice(0)
//         ]

//         console.log(newArray)

//         //regresa a su función normal elementos al array
//         let join = newArray.join("");
//         console.log(join);
        
//     }


// }


function combinacionesParentesis(numero){
    let resultados = [];

    if(numero < 1) return resultados;

    //Función recursiva
    generateParentesis('', numero, numero, resultados);

    return resultados;

}


// Contador de ejecuciones
let contadorEjecucionesRecursivas = 0; 


function generateParentesis(combinaciones, abiertos, cerrados, resultados){

    if(abiertos === 0 && cerrados ===0 ){
        resultados.push(combinaciones);
        return true;
    }

    if(abiertos > 0){
        generateParentesis(combinaciones + '(', abiertos - 1, cerrados, resultados)
    }

    if(cerrados > 0 && abiertos < cerrados){
        generateParentesis(combinaciones + ")", abiertos, cerrados - 1, resultados)
    }

    contadorEjecucionesRecursivas++;

    console.log("Ejecuciones: ", contadorEjecucionesRecursivas, combinaciones, resultados)


}


console.log(combinacionesParentesis(3));