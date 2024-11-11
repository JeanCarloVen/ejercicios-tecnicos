/*
Enunciado Ejercicio 63:
Crea una función para conseguir las sumas acumuladas de una array de numeros
 
Ejemplos:
sumasAcumuladas([1, 2, 3, 4])   // [1, 3, 6, 10] 
 
(se calcula como: [1, 1+2, 1+2+3, 1+2+3+4])
*/
 
function accumulatedSum(numbers){

    let tmp = [];
    let sum = 0;
    const initialValue = 0;


    let result = numbers.reduce(
        (currentNumber) => {
            //return accumulator + currentNumber
            sum += currentNumber 
        
            return tmp.push(sum);
        },
        initialValue,
    );

    console.log(tmp);



}


accumulatedSum([1,2,3,4])
