/*Enunciado Ejercicio 20:
Crea una función que ordene un array de objetos en base a las propiedades
que le pase por parametro.
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
 
Ejemplos:
ordenarObjetos(usuarios, "edad");
 
*/

const users = [
  { nombre: 'Antonio', edad: 20 },
  { nombre: 'Juan', edad: 23 },
  { nombre: 'Pepe', edad: 12 },
  { nombre: 'Raul', edad: 28 },
  { nombre: 'Paco', edad: 38 },
  { nombre: 'Jason', edad: 56}
];

const users1 = [
  { nombre: 'José', edad: 20 },
  { nombre: 'Ana', edad: 23 }
];

function SortObjects(users, param){
  //Dependiendo del parametro ordenará
  //1) nombre
  //2) edad    
  if(param === "nombre"){
      //Ordenar de acuerdo al nombre de manera alfabética A-Z
      //Array de nombres

      //Generar una matriz con los nombres
      const names = users.map( el => {
          return el.nombre;
      })

      //Ordenamiento de nombres
      names.sort();
          
      // Del arreglo ordenado se irá comparando nombre a nombre con el arreglo original 
      // Cada que se encuentre que el nombreArreglado es igual al nombre en el arreglo oroginal se regresará 
      // el objeto ya ordenado por nombre
      const sortPersonsByName = names.map( name => {
          console.log(name);
          //Ir checando del arreglo original e irlo comparando con el arreglo ordenado por nombre
          const originalPerson = users.find( ({nombre}) => nombre === name);

          return originalPerson;
      })

      console.log(sortPersonsByName)

  }
  else if(param === "edad"){
      
      //Generar una matriz con las edades
      const ages = users.map( el => {
          return el.edad;
      })

      //Ordenamiento de edades
      ages.sort();
      
      console.log(ages)
      //console.log(names.sort()); //Ordena el array
      
      // Del arreglo ordenado se irá comparando edad con edad con el arreglo original 
      // Cada que se encuentre que el edad arreglada es igual a la edad en el arreglo original se regresará 
      // el objeto ya ordenado por edad
      const sortPersonsByAge = ages.map( age => {
          console.log(age);
          //Ir checando del arreglo original e irlo comparando con el arreglo ordenado por edad
          const originalPerson = users.find( ({edad}) => edad === age);

          return originalPerson;
      })

      console.log(sortPersonsByAge)
  }

  

}

SortObjects(users, "nombre");