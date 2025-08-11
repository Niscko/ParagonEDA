import { Personaje, Guerrero, Mago, Picaro, Jugador } from './personajes.mjs'
import { mostrarEstadisticas, mostrarHabilidades, RandomNum, crearPersonaje, mostrarItems } from './auxiliares.mjs'

let nombreJugador1 = prompt("Bienvenido a Paragon, Jugador 1 ¿Cuál es tu nombre?")
let jugador1 = new Jugador({ name: nombreJugador1 })

let nombreJugador2 = prompt("Bienvenido a Paragon, Jugador 2 ¿Cuál es tu nombre?")
let jugador2 = new Jugador({ name: nombreJugador2 })

let continuarJuego = true

while (continuarJuego) {
    let estadoJugadores = `\n--- ESTADO ACTUAL ---\n${nombreJugador1}: ${jugador1.personajes.length} personaje(s)\n${nombreJugador2}: ${jugador2.personajes.length} personaje(s)\n\n`
    
    let seleccion = prompt(estadoJugadores + "Seleccione una opción: \n1. Crear personajes \n2. Ver estadísticas de cada personaje \n3. Ver posibles habilidades por personaje\n4. Ver posibles items\n5. Comenzar batalla\n6. Salir del juego")

    switch (seleccion) {
        case "1":
            // Menú para seleccionar qué jugador creará personajes
            let quienCrea = prompt(`¿Qué jugador creará personajes?\n1. ${nombreJugador1}\n2. ${nombreJugador2}\n`)
            
            switch (quienCrea) {
                case "1":
                    alert(`Turno de ${nombreJugador1} para crear personajes`)
                    crearPersonaje(jugador1, nombreJugador1)
                    continue
                    
                case "2":
                    alert(`Turno de ${nombreJugador2} para crear personajes`)
                    crearPersonaje(jugador2, nombreJugador2)
                    continue
                                
                default:
                    alert("Opción no válida");
                    continue
            }
            break

        case "2":
            alert(mostrarEstadisticas())
            continue

        case "3":
            alert(mostrarHabilidades())
            continue


        case "4":
            alert(mostrarItems())
            continue

        case "5":
            if (jugador1.personajes.length === 0 || jugador2.personajes.length === 0) {
                alert("Ambos jugadores deben tener al menos un personaje para comenzar la batalla.")
            } else {
                
                
            }
            continue

        case "6":
            continuarJuego = false;
            alert("¡Gracias por jugar Paragon!")
            break

        default:
            alert("Opción no válida")
            continue
    }
    break
}
