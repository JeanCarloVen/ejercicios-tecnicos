/*
Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 */


let diferenciaDeDias = (fecha1, fecha2) => {

    //Se debe de transformar a un objeto de tipo fecha
    let fechaA = new Date(fecha1);
    let fechaB = new Date(fecha2);

    //Se valida que la fechaB deba ser mayor que la fechaA
    if(fechaA>fechaB) return "la primer fecha debe ser mayor que la segunda";

    let diff = fechaB-fechaA;

    let diffDays = Math.floor(diff/(1000*60*60*24));

    //return fechaB.getDate()-fechaA.getDate();
    return diffDays
}

console.log(diferenciaDeDias('Dec 2, 2023','Dec 24, 2023'));