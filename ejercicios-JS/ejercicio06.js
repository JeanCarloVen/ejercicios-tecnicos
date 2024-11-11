/*
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

function bisiestos(year){
    //Definición de un año Bisiestos
    // Un año es bisiesto si es:
    // Divisible por 4.
    // No divisible por 100.
    // Salvo si es divisible por 400. (2000 y 2400 son bisiestos pues aún siendo divisibles por 100 lo son también por 400. Pero los años 1900, 2100, 2200 y 2300 no lo son porque solo son divisibles por 100).
    
    let pila = new Array();
    //aumentar año con año
    for(let i=0; i<29; i++){
        year++;
        console.log(year);
        if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
            //console.log("El año es bisiesto");
            pila.push(year);
        }
    }
    console.log(pila);
}

bisiestos(2024)