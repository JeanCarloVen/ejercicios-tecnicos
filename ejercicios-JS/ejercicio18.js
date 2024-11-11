/*
Enunciado Ejercicio 18:
Dado un array de usuarios, mostrar sólo los que tengan más de 20 años
y en su nombre tengan la letra "o" y "n"
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
 
Ejemplos:
filtrarUsuarios(usuarios);
 
Devuelve: 
[
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Jason', edad: 56}
]
 
*/

const usuarios = [
  { nombre: 'Antonio', edad: 20 },
  { nombre: 'Juan', edad: 23 },
  { nombre: 'Pepe', edad: 12 },
  { nombre: 'Raul', edad: 28 },
  { nombre: 'Paco', edad: 38 },
  { nombre: 'Jason', edad: 56}
];


function filtrarUsuarios(users){
  //console.log(users[0].nombre);

  //Filtrar los que tengan más de 20 años
  //Filtrar los que tengan en el nombre "o" y "n"

  let rightAgeAndName = new Array();

  users.forEach( el => {
    if(el.edad >= 20 && el.nombre.includes("o") && el.nombre.includes("n")){
      rightAgeAndName.push(el);
    }
  })  

  console.log(rightAgeAndName);

}

filtrarUsuarios(usuarios);

//OBSERVACIONES DE MEJORA:

// VALIDAR STRING EN MÍNUSCULAS
// EN LUGAR DE USAR IF VALIDANDO LAS TRES CONDICIONES, MEJOR USAR FILTER
