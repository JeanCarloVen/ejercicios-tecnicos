/*

Enunciado Ejercicio 54:
En la película de Avatar, existen diferentes tribus de Na'vi 
que habitan Pandora. Cada tribu tiene una habilidad especial y 
un valor de poder entre 1 y 5:
 
Tribus pacifistas: Omaticaya (1), Tawkami (2), Kekunan (3)
Tribus guerreras: Rda (2), Hometree (3), Toruk Makto (5)
 
Crea un programa que calcule el resultado de una guerra 
entre dos ejércitos de Na'vi
Ejemplos:
calcularResultadoGuerra(tribusBuenas, tribusMalas);
 
Devuelve:
"¡Gana el mal!"
*/
 
const tribusBuenas = [
    { 
        nombre: 
            { 
                valor: 1, 
                nombre: "Omaticaya" 
            }, 
        cantidad: 
            10 
        },
    { nombre: { valor: 2, nombre: "Tawkami" }, cantidad: 5 },
    { nombre: { valor: 3, nombre: "Kekunan" }, cantidad: 3 },
];
 
const tribusMalas = [
    { nombre: { valor: 2, nombre: "Rda" }, cantidad: 10 },
    { nombre: { valor: 3, nombre: "Hometree" }, cantidad: 5 },
    { nombre: { valor: 5, nombre: "Toruk Makto" }, cantidad: 1 },
];

function calculateWarResult( goodOnes, badOnes){
    // console.log(goodOnes[0].nombre.valor);
    // console.log(goodOnes[0].cantidad);

    //Valor de Poder del las tribus valor * cantidad

    // let forceGoodOnes = goodOnes[1].nombre.valor * goodOnes[1].cantidad; 
    // let forceBadOnes = badOnes[0].nombre.valor * badOnes[0].cantidad; 

    let forceGoodOnes = 0;
    let forceBadOnes = 0;
    // console.log(forceGoodOnes);
    // console.log(forceBadOnes);


    for( goodOne of goodOnes){
        // console.log(goodOne.nombre.valor);
        // console.log(goodOne.cantidad);
        forceGoodOnes += goodOne.nombre.valor * goodOne.cantidad;
    }

    for( badOne of badOnes){
        // console.log(goodOne.nombre.valor);
        // console.log(goodOne.cantidad);
        forceBadOnes += badOne.nombre.valor * badOne.cantidad;
    }

    console.log(forceGoodOnes, forceBadOnes);

    if(forceGoodOnes > forceBadOnes){
        console.log( "GANA EL BIEN")
    }else if( forceGoodOnes < forceBadOnes ){
        console.log( "GANA EL MAL ")
    }else{
        console.log( "NO GANA NADIE")
    }

}


calculateWarResult(tribusBuenas, tribusMalas);

 