/*
Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);  
 
*/

const personas = [
    "Jean Cruz",
    "Ximena Sanchez",
    "Claudia Gualito",
    
]


function ordenarPorApellidos(arr){
    
    let pila = new Array();

    personas.forEach( persona => {
        let indexApellido = persona.indexOf(" ")+1;
        let temp = persona.substring(0,indexApellido) //se obtiene el nombr
        pila.push(persona.substring(indexApellido).concat(" "+ temp));
    })

    let ordenamiento = pila.sort();

    console.log("pila ordenada: " + ordenamiento);
}


ordenarPorApellidos(personas);