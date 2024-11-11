/*
Enunciado Ejercicio 50:
Crea una función que dada una temperatura la pase a grados
celsius o grados fahrenheit.
 
Ejemplos:
convertirTemperatura('29°C')  // Devuelve: "84.20°F"
convertirTemperatura('77°F')  // Devuelve: "25.00°C"
*/

function convertTemperature( temperature ){
    
    let result = 0;

    let tempo = temperature.substring(0,temperature.indexOf("°"));
    if( temperature.includes("°C") ){
        //Convertir de Celcius a Farenhait
        result = parseInt(tempo)*1.8 + 32 + "°F";

    }else if( temperature.includes("°F") ){
        //Convertir de Farenhait a Celcius 
        result = (parseInt(tempo) - 32)*1.8 + "°C";
    }else{
        result = "NO SE PUEDE CONVERTIR"
    }

    return result;
}

console.log(convertTemperature("77°"));