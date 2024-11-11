/*
Enunciado Ejercicio 65:
Dado un array de objetos de usuarios, con nombre y fecha,
crea una función que los ordene por fecha.
 
[
  {
    nombre: "Juan",
    fecha: new Date(1984, 7, 10),
  },
  {
    nombre: "Paco",
    fecha: new Date(2017, 8, 12),
  },
  {
    nombre: "Pepe",
    fecha: new Date(1991, 12, 6),
  },
]
 
Ejemplos:
ordenarPorFecha(usuarios)
 
// Devolver solo nombre
*/

const data = [
    {
      nombre: "Juan",
      fecha: new Date(1984, 7, 10),
    },
    {
      nombre: "Paco",
      fecha: new Date(2017, 8, 12),
    },
    {
      nombre: "Pepe",
      fecha: new Date(1991, 12, 6),
    },
  ]
 
  
  function sortByDate(users){
    
    let result = [];

    let sort = users.sort( ( a, b ) => {
        return a.fecha - b.fecha
    })

    sort.forEach(element => {
        result.push(element.nombre);
    });

    console.log(result)

  }

  sortByDate(data);

