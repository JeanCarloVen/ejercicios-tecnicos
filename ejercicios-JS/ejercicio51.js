/*
Enunciado Ejercicio 51:
Crea una función que dibuje un diamante de asteriscos.
 
Ejemplos:
generarDiamante(5);
 
Devuelve: 
  *
 *** 
*****
 *** 
  *  
 
*/

function generateDiamon(size){

  if(size % 2 === 0 ) size--;

    const half = Math.floor(size/2);

    for(let currectRow =0; currectRow < size; currectRow++){

      let row = "";

      //Calcula numero de espacios
      const spaces = Math.abs(half - currectRow);
       
      for(let currentSpace = 0; currentSpace < spaces; currentSpace++){
        row += " ";
      }
  
      for(let currentAstherisc = 0; currentAstherisc <  size - (spaces*2 ); currentAstherisc++){
        row += "*";
      }

      console.log(row);

    }
}

generateDiamon(7)