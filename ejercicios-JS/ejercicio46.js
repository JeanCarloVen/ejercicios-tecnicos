/*
Enunciado Ejercicio 46:
Crea una función a la que le pasemos una nota y nos de una calificación:
 
0-3: Deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
 
Ejemplos:
calificar(8.2) // Notable
*/

const grade = (nota) => {

    if(isNaN(nota)) return; 
    
    let mensaje = "";

    if(0 <= nota && nota <= 3){
        mensaje = "Deficiente";
        console.log(1)
    }else if( 3 < nota && nota <= 5){
        console.log(1)
        mensaje = "Insuficiente";
    }else if( 5 < nota && nota <= 6){
        mensaje = "Suficiente";
    }else if( 6 < nota && nota <= 7){
        mensaje = "Bien";
    }else if( 7 < nota && nota <= 9){
        mensaje = "Notable";
    }else if( 9 < nota && nota <= 10){
        mensaje = "Sobresaliente";
    }

    return mensaje; 

}



console.log(grade(5.1));
