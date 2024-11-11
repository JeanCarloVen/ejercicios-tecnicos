 /*
Enunciado Ejercicio 19:
Crea una función que simule el lanzamiento de dos dados.
 
Ejemplos:
dados();
 
*/

const dados = () => {
    
    //Math.random(); //Devuelve entre 0 y 1
    
    let dado1 = Math.floor(Math.random()*6 + 1);
    let dado2 = Math.floor(Math.random()*6 + 1);

    let resultado = dado1 + dado2;

    return `Dado 1: ${dado1}, Dado 2: ${dado2}, Suma de los dados: ${resultado}`;


}

console.log(dados());

//OBSERVACIONES DE MEJORA
// FALTÓ SUMAR EL +1 PARA QUE AL TIRAR EL DADO SIEMPRE DE MAYORES A 0 PORQUE NUNCA UN DADO DA CERO.
// POR LO TANTO CUANDO SE TRATA DE ESTE TIPO DE EJERCICIOS ES IMPORTANTE DEFINIR CLARAMENTE LOS INTERVALOS
// POR ELLO DEBEMOS DE HACERLO DEL 1 AL 6
// MATH.FLOOR REDONDEA AL ENTERO MENOR REALMENTE NO CONCIDERA DECIMALES POR EJEMPLO: 5.95 SERÍA 5