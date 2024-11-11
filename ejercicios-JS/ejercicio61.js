/*
Enunciado Ejercicio 61:
Dado una cadena de números, devuelve todas las combinaciones de letras posibles 
que el número podría representar.
 
Aqui tienes un mapeo de dígitos a letras 
(como en los botones de un teléfono).
 
    const mapeo = [
      ' ', // 0
      '', // 1
      'abc', // 2
      'def', // 3
      'ghi', // 4
      'jkl', // 5
      'mno', // 6
      'pqrs', // 7
      'tuv', // 8
      'wxyz' // 9
    ];
 
Ejemplos:
combinacionesLetras("23")
 
Devuelve:
["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

*/


function exchangeLetters(numbers){

    let num = parseInt(numbers)

    //Converir a numero la entrada (Validar)
    if(isNaN(num)) return; //Sino es numero retorna

    // Catalogo de letras con numeros 
    const mapeo = [
        ' ', // 0
        '', // 1
        'abc', // 2
        'def', // 3
        'ghi', // 4
        'jkl', // 5
        'mno', // 6
        'pqrs', // 7
        'tuv', // 8
        'wxyz' // 9
      ];

      //Crear array para guardar resultado
      let resultado = [''];

      // Recorer cada uno de los digitos del numero

      for(const digito of numbers){
        console.log(mapeo[digito]);
        
        for(let i=0, longitud = resultado.length; i < longitud; i++){
            const elementoAnterior = resultado.shift();

            for(letra of mapeo[digito]){
                console.log(letra);
                resultado.push(elementoAnterior + letra);
            }
        }        
      }

      console.log(resultado)
}

console.log(exchangeLetters("23"));