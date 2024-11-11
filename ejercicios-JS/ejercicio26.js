/*
Enunciado Ejercicio 26:
Optimizar el gasto en mi gasolinera favorita.
 
Tiene dos opciones:
 
- Gasolina individual: Cuesta 10 euros por cada llenado.
- Tarjeta de socio: Cuesta 90 euros anuales pero cada vez que llenas 
te cuesta 8.2 euros el tanque pagas sólo el 78% del precio del llenado.

1 - 10 - 7.8 - 78%
2 - 7.8 - 6.084 - 60.84% **
3 - 6.084 - 4.74552 - 47.45%
4 - 4.74552 - 3.7015 - 37.01%

Cada vez que llenas el tanque, se paga el 78% del precio del llenado que pagaste la última vez hasta llegar a un descuento maximo del 50%. Acumula el descuento (0.78 ^ 3).
 
Hacer una función que, al pasarle las veces que voy a llenar el tanque, 
me diga si vale la pena comprar la tarjeta de socio o no.
 
Ejemplos:
deboSerSocio(15);
 
Devuelve: 
Como usuario casual te sale a: 150        
Como socio te sale a: 154.68487999999994 
No te sale a cuenta ser socio ser socio  
 
*/

function deboSerSocio(timesFullService){
    //Calculo de Gasolina Individual 
    let costOil = timesFullService * 10;

    //Tarjeta de socio
    let costOilMembership = 90;

    //Calcular precio total llendaos como socio
    //Bucle del 1 al total de veces
    for(let i = 1; i<= timesFullService; i++){
        //Calcular el descuentro
        let descount = (0.78)**(i);

        //Bloquear descuento a un máximo del 50%
        if( descount <= 0.50){
            descount = 0.50; 
        }

        //Actualizar variable llenado socio y sumarle valores
        costOilMembership += 8.2 * descount;

    }

    console.log("Llenado individual: " + costOil.toFixed(2));

    console.log("Llenado Descuento: " + costOilMembership.toFixed(2));

}

deboSerSocio(15);