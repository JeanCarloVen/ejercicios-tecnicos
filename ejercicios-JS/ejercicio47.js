/*
Enunciado Ejercicio 47:
Crea un simulador de pieda, papel o tijera.
 
El resultado podrá ser: "Jugador 1", Jugador 2" o "Empate"
 
Ejemplos:
 
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PIEDRA"], ["PAPEL", "TIJERA"]]); 
// Devuelve: "Jugador 2"
 
quienGana([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]]); 
// Devuelve: "Empate"
 
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PAPEL"], ["PAPEL", "PIEDRA"]]); 
// Devuelve "Jugador 1"
*/


function whoWins(matches){
    let ptosJugador1 = 0;
    let ptosJugador2 = 0;

    for( match of matches) {
        console.log(match);
        const jugador1 = match[0];
        const jugador2 = match[1];
        
        if(jugador1 === jugador2) continue;

        if( (jugador1 === "PIEDRA" &&  jugador2 === "TIJERA" ) ||
            (jugador1 === "PAPEL" &&  jugador2 === "PIEDRA" ) ||
            (jugador1 === "TIJERA" &&  jugador2 === "PAPEL" ) )
            {
            ptosJugador1++;   
        }else{
            ptosJugador2++;  
        }
    }

    if(ptosJugador1 > ptosJugador2) return "Gana jugador 1"
    if(ptosJugador1 < ptosJugador2) return "Gana jugador 2"
    if(ptosJugador1 === ptosJugador2) return "Empate"

}






console.log(whoWins([["PIEDRA", "TIJERA"], ["TIJERA", "PIEDRA"], ["PAPEL", "TIJERA"]]));
// Devuelve: "Jugador 2"

//console.log(whoWins([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]]));


/*
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PIEDRA"], ["PAPEL", "TIJERA"]]); 
// Devuelve: "Jugador 2"
 
quienGana([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]]); 
// Devuelve: "Empate"
 
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PAPEL"], ["PAPEL", "PIEDRA"]]); 
// Devuelve "Jugador 1"
*/


