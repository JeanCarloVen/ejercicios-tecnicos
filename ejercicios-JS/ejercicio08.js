/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano
 
Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
 
*/


function enteroARomano(number){

    if(number <= 3){
        //I, II, III
        console.log("I".repeat(number));
        
    }

    if(number === 4) console.log( "IV");
    
    if(number >= 5 || number <=8){
        let num = number - 5;
        console.log("V"+"I".repeat(num)); 
    }

    if(number === 9) console.log("IX");

    if(number === 10) console.log("X")

    //multiplos de 10;
    if(number & 10 === 0 ) console.log("Es un multiplo de 10")

    //40 => XL
    //50 => L
    //60 => LX
    //70 => LXX
    //80 => LXXX
    //90 => XC

    if( number === 40 ) console.log( "XL");


    if( number === 50 ) console.log("L"+"X");

    if( number === 60 ) console.log("LXX");


    //Separar la cantidad 8 en sus partes 8 = 5+3

    //1,2,3, 4,5, 6,7,8, 9,10
    //I,II,III, IV,V, VI,VII,VIII, IX,X

    //si el numero es decimal se puede dividr entre 10  11/10 = 1.1 o 11mod10 = 1

    //11,12,13,14,15,16,17,18,19,20
    //XI,XII,XIII,XIV,XV,XVI,XVII,XVIII,XIX,XX

    //21,22,23,24,25,26,27,28,29,30
    //XXI,XXII,XXIII,XXIV,XXV,XXVI,XXVII,XXVIII,XXIX,XXX

    
    
    //Separar en decenas, centenas, millares etc..



}

enteroARomano(11);