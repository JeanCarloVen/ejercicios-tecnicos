 /*
Enunciado Ejercicio 42:
Dado un objeto de superheroes, crear una función que sea capaz
de ordenarlos por su nombre real o por su nombre de superheroe.
 
Superheroes: 
 
let informacionSuperheroes = {
    "Superman": {
      "nombreReal": "Clark Kent",
      "afiliacion": "DC Comics",
      "poderes": ["vuelo", "super fuerza", "super velocidad", "rayos x"]
    },
    "Spider-Man": {
      "nombreReal": "Peter Parker",
      "afiliacion": "Marvel Comics",
      "poderes": ["telarañas", "agilidad", "sensores arácnidos"]
    },
    "Batman": {
      "nombreReal": "Bruce Wayne",
      "afiliacion": "DC Comics",
      "poderes": ["inteligencia", "habilidades físicas sobresalientes", "ricos recursos"]
    },
    "Iron Man": {
      "nombreReal": "Tony Stark",
      "afiliacion": "Marvel Comics",
      "poderes": ["armadura de hierro", "inteligencia", "ricos recursos"]
    },
    "Wonder Woman": {
      "nombreReal": "Diana Prince",
      "afiliacion": "DC Comics",
      "poderes": ["super fuerza", "vuelo", "resistencia sobrenatural"]
    },
    "Thor": {
      "nombreReal": "Thor Odinson",
      "afiliacion": "Marvel Comics",
      "poderes": ["martillo mágico", "vuelo", "trovador"]
    },
    "The Flash": {
      "nombreReal": "Barry Allen",
      "afiliacion": "DC Comics",
      "poderes": ["super velocidad", "manipulación del tiempo"]
    },
    "Captain America": {
      "nombreReal": "Steve Rogers",
      "afiliacion": "Marvel Comics",
      "poderes": ["super fuerza", "agilidad", "resistencia sobrenatural", "escudo indestructible"]
    },
    "Green Lantern": {
      "nombreReal": "Hal Jordan",
      "afiliacion": "DC Comics",
      "poderes": ["anillo mágico", "manipulación de la energía"]
    },
    "Hulk": {
      "nombreReal": "Bruce Banner",
      "afiliacion": "Marvel Comics",
      "poderes": ["super fuerza", "resistencia sobrenatural", "transformación en Hulk"]
    }
  }
 
 
Ejemplos:
ordenarSuperheroes("nombre")
 
Devuelve:
[
  {
    nombre: 'Batman',
    nombreReal: 'Bruce Wayne',
    poderes: [
      'inteligencia',
      'habilidades físicas sobresalientes',
      'ricos recursos'
    ]
  },
  ...
]
 
*/

//  {
        //hero :
        // {   }
//  }

let informacionSuperheroes = {
    "Superman": {
      "nombreReal": "Clark Kent",
      "afiliacion": "DC Comics",
      "poderes": ["vuelo", "super fuerza", "super velocidad", "rayos x"]
    },
    "Spider-Man": {
      "nombreReal": "Peter Parker",
      "afiliacion": "Marvel Comics",
      "poderes": ["telarañas", "agilidad", "sensores arácnidos"]
    },
    "Batman": {
      "nombreReal": "Bruce Wayne",
      "afiliacion": "DC Comics",
      "poderes": ["inteligencia", "habilidades físicas sobresalientes", "ricos recursos"]
    },
    "Iron Man": {
      "nombreReal": "Tony Stark",
      "afiliacion": "Marvel Comics",
      "poderes": ["armadura de hierro", "inteligencia", "ricos recursos"]
    },
    "Wonder Woman": {
      "nombreReal": "Diana Prince",
      "afiliacion": "DC Comics",
      "poderes": ["super fuerza", "vuelo", "resistencia sobrenatural"]
    },
    "Thor": {
      "nombreReal": "Thor Odinson",
      "afiliacion": "Marvel Comics",
      "poderes": ["martillo mágico", "vuelo", "trovador"]
    },
    "The Flash": {
      "nombreReal": "Barry Allen",
      "afiliacion": "DC Comics",
      "poderes": ["super velocidad", "manipulación del tiempo"]
    },
    "Captain America": {
      "nombreReal": "Steve Rogers",
      "afiliacion": "Marvel Comics",
      "poderes": ["super fuerza", "agilidad", "resistencia sobrenatural", "escudo indestructible"]
    },
    "Green Lantern": {
      "nombreReal": "Hal Jordan",
      "afiliacion": "DC Comics",
      "poderes": ["anillo mágico", "manipulación de la energía"]
    },
    "Hulk": {
      "nombreReal": "Bruce Banner",
      "afiliacion": "Marvel Comics",
      "poderes": ["super fuerza", "resistencia sobrenatural", "transformación en Hulk"]
    }
  }

function superHerosSort(superHeros,option){    
    //Ordenar por orden de superheroes    
    //Ordenar por su nombre real

    let newArrayHeros = [];
    
    for( let hero in superHeros){
        let info = superHeros[hero];
        //console.log(info)

        newArrayHeros.push({
            nombre: hero,
            nombreReal: info.nombreReal,
            poderes: info.poderes
        })

    }

    newArrayHeros.sort( (a,b) => {
        if(a[option] > b[option]) return -1;
        //if(a[option] > b[option]) return -1; 
        //return 0;
    })
    
    return newArrayHeros;
}


console.log(superHerosSort(informacionSuperheroes,"nombre"));

//Practicas ejercicios de Ordenacion

// if( a < b ) return 1;