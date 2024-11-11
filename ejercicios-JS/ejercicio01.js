//Dado un array de superhéroes de Marvel, haz un programa que pueda mostrar la información de un superheroe.

//Y añade una capacidad de buscar la información de varios superhéroes a la vez.

//Ejemplo:
//MostrarInformacionSuperHeroe('Iron Man');

//Salida:
// Nombre real: Tony Stark
// Poderes: Tecnología Avanzada, Movilidad aérea
// Equipo: Los Vengadores


//Ejemplo 2: 
//MostrarInformacionSuperheroes([array de nombres]);

//Salida:
//Mostrar la información de todos los superheroes


//Array de superherores

var superheroes = new Array();

superheroes = [
    {
        nombre: 'Iron Man',
        NombreReal : 'Tony Stark',
        Equipo : 'Los Vengadores'
    },
    {
        nombre: 'SpiderMan',
        NombreReal : 'Peter',
        Equipo : 'Los Vengadores'
    },
    {
        nombre: 'Wolverine',
        NombreReal : 'Logan',
        Equipo : 'X-Men'
    }
]

//Crear función que busque al superheroe

function MostrarInformacionSuperHeroe(heroe){
    console.log(heroe);
    let sHeroe;
    superheroes.forEach(superHeroe => {
        if(superHeroe.nombre === heroe){
            sHeroe = superHeroe;
        }
    });
    console.log(sHeroe);
}

//MostrarInformacionSuperHeroe('Wolverine');


//MostrarInformacionSuperheroes([array de nombres]);

function MostrarInformacionSuperheroes(heroes){
    let sHeroes = new Array();
    for(i=0; i<heroes.length; i++){
        superheroes.forEach(superHeroe => {
            if(heroes[i] === superHeroe.nombre ){

                sHeroes.push(superHeroe);

            }
        })
    }

    sHeroes.forEach(element => {
        console.log(element);
    });
    
}

MostrarInformacionSuperheroes(['Wolverine', 'SpiderMan', 'Iron Man']);