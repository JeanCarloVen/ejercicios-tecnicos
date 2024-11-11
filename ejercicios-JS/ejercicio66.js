/*
Enunciado Ejercicio 66:
Crea una función que pueda filtrar la información de los superhéroes por afiliación. 
Puedes hacer que la función tome una afiliación como parámetro 
y muestre la información de los superhéroes que pertenecen a esa afiliación.
 
Ejemplos:
filtrarPorAfiliacion('Crimen organizado')

ejemplo:

'Crimen Organizado' : [
        Joker : {
            nombreReal : 'Desconocido',
            poderes: ['Manipulación psicológica', 'Inteligencia sobresaliente']
        }, 
         Harley Quinn : {
            nombreReal : 'Harleen Quinzel',
            poderes: ['Agilidad sobresaliente', 'Expertise en artes marciales']
            }
        ]


*/

const personajesDC = {
    'Superman' : {
        nombreReal : 'Clark Kent',
        poderes: ['Superfuerza', 'Vuelo', 'Vision láser'],
        afiliacion: 'Justice League'
    },
    'Batman' : {
        nombreReal : 'Bruce Wayne',
        poderes: ['Inteligencia sobresaliente', 'Artes Marciales'],
        afiliacion: 'Justice League'
    },
    'Joker' : {
        nombreReal : 'Desconocido',
        poderes: ['Manipulación psicológica', 'Inteligencia sobresaliente'],
        afiliacion: 'Crimen organizado'
    },
    'Harley Quinn' : {
        nombreReal : 'Harleen Quinzel',
        poderes: ['Agilidad sobresaliente', 'Expertise en artes marciales'],
        afiliacion: 'Crimen organizado'
    }
}


function filterByAffiliation(characters, Affiliation){
    let result = {};

    for( character of Object.keys(characters)){
        if( characters[character].afiliacion === Affiliation ){
            result[character] = { 'nombreReal' : characters[character]['nombreReal'], 
                                   'poderes' :  characters[character]['poderes']
                                }
        }
    }

    return result

}


console.log(filterByAffiliation(personajesDC, 'Justice League'))