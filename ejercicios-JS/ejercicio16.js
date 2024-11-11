/*
Enunciado Ejercicio 16:
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Víctor Robles WEB');
 
**********
* Hola   *
* soy    *
* Víctor *
* Robles *
* WEB    *
**********
*/
 
function mostrarTextoCaja(message){

    //Separar la frase en sus elementos
    let messageWE = message.split(" ");
    
    console.log(messageWE);

    console.log(message)

    //Agregar una linea superios de asteriscos ***** se dejará de 10 asteriscos
    const size = 15;
    // Generar asteríscos superior
    console.log("*".repeat(15));

    //Diferencia entre los 15 assteriscos y las palabras

    // Generar un asterísco izquierdo
    for( word of messageWE){
        
        let wordy = "*" + " " + word ;
        //console.log(size - wordy.length);
        console.log(wordy.concat(" ".repeat(size-wordy.length-1) + "*"));
    }


    // Generar asteríscos inferiores
    console.log("*".repeat(15));
    


}

mostrarTextoCaja("Hola como te va");