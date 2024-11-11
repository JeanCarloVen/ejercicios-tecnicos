/*
Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
 
Devuelve: 27
 
*/

const Figura = {
   
}

function calcularAreaPoligono(obj){

    //area de un cuadrado: base x altura
    //área de un rectangulo: base x altura
    //área de un triángulo: base x altura /2
    
    let area;
    switch (obj.tipo){
        case 'cuadrado':
            area = (obj.base * obj.base);
            break;
        case 'rectangulo':
            area = (obj.base * obj.altura);
            break;
        case 'triangulo':
            area = (obj.base * obj.altura)/2;
            break;
    }
    console.log(`Devuelve el area: ${area}`);

}


calcularAreaPoligono({ tipo: 'cuadrado', base: 6});





