/*
Enunciado Ejercicio 34:
Crea una función a la cual le pase un array y me devuelva 
un objeto con los elementos agrupados
 
Ejemplos:
agrupar([7.2, 5.3, 7.4], Math.floor)  
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }
 
agrupar(['uno', 'dos', 'tres', 'cuatro'], 'length') 
// Devuelve: { 3: ['uno', 'dos', 'tres'], 6: ['cuatro'] }
 
agrupar([{nombre: "victor", edad: 33}, {nombre: "paco", edad: 44}], 'edad') 
// Devuelve: { 33: [{edad: 33}], 44: [{edad: 44}] }
 
*/


function group(array, type){
  // Dependiendo del tipo de información se acomoda
  // Si es un numero los separa, en sus decimales
  // Si es un string, cuenta las letras y los separa por el tamaño de la palabra
  // Si es un objeto se separa por aluno de las propiedades del objeto.

  //Template string
  
  let obj = {};
  let arr = [];

  const arraySort = array.sort();

  //Separar los elementos del array 

  
  // console.log(arraySort);

  // let arrFilter = arraySort.filter( (el, index) => {
  //     // console.log(el, index);
  //     // obj[el.length] = index;
  //     return obj[el] = el.length;
  // });

  //Formar el objeto

  //clave : valor
  array.forEach( (el, index) => {
      
      // clave => el.length => 3
      // valor => el => uno

      // clave => el.length => 3
      // valor => el => dos

      // Guardar en un array los valores
      // console.log(index);
      
      // console.log(el);
      if( arr[index] === undefined ){
          console.log('holi');
          arr.push( el );
      }else{
          arr.push( el );
      }
      console.log(arr[index]);
      
      //console.log(obj[el.length] = el);
      
      return obj[el.length] = arr;
  });

  console.log(obj);
  console.log(arr);

}

group(['uno', 'dos', 'tres', 'cuatro'], Math.floor);

