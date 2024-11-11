/*
Enunciado Ejercicio 40:
Crea una función que convierta un número romano a decimal.
 
Ejemplos:
romanoAEntero("XVIII")   // 18
romanoAEntero("CXX")     // 120
 
*/

function romanToInteger(roman){

    let resultado = 0;

    const tablaRomanos = {
        M: 1000,
        CM: 900,
        D:  500,
        CD: 400,
        C:  100,
        XC: 90,
        L:  50,
        XL: 40,
        X:  10,
        V:  5,
        IX: 9,
        IV: 4,
        I: 1
    }

    for(let i=0; i<roman.length; i++){
        //console.log(roman[i], tablaRomanos[roman[i]]);

        if( i === roman.length -1 || tablaRomanos[roman[i+1]] <= tablaRomanos[roman[i]]){
            resultado += tablaRomanos[roman[i]];
        }else{
            resultado -= tablaRomanos[roman[i]];
        }

    }

    return resultado;
}


//console.log(romanToInteger("XVIII"));
//console.log(romanToInteger("CXX"));
console.log(romanToInteger("XIV"));