import { Guerrero, Mago, Picaro } from './personajes.mjs'

export function crearPersonaje(jugador, nombreJugador) {
    let continuar = true

    while (continuar) {
        let eleccionpersonaje = prompt(`${nombreJugador}, ¿qué personaje desea crear?\n1. Guerrero\n2. Mago\n3. Pícaro\n4. Ver mis personajes creados\n5. Terminar de crear personajes`)

        switch (eleccionpersonaje) {
            case "1":
                try {
                    let nombreGuerrero = prompt("¿Qué nombre quiere ponerle a su guerrero?")
                    
                    if (!nombreGuerrero || nombreGuerrero.trim() === "") {
                        alert("Nombre inválido. Intente de nuevo.")
                        continue
                    }

                    let idGuerrero = prompt("Póngale un ID numérico a su guerrero")
                    if (!idGuerrero || isNaN(parseInt(idGuerrero))) {
                        alert("ID inválido. Debe ser un número. Intente de nuevo.")
                        continue
                    }

                    const guerrero = new Guerrero({
                        name: nombreGuerrero.trim(),
                        id: parseInt(idGuerrero)
                    })
                    jugador.personajes.push(guerrero)
                    alert(`Personaje creado:\nNombre: ${guerrero.name}\nID: ${guerrero.id}\nClase: Guerrero\nNivel: ${guerrero.nivel}\nHP: ${guerrero.hp}\nMP: ${guerrero.mp}\nFuerza: ${guerrero.fuerza}\nInteligencia: ${guerrero.inteligencia}\nDestreza: ${guerrero.destreza}\nHabilidades: ${guerrero.habilidades.map(h => h.nombre).join(', ')}\nItem: ${guerrero.items && guerrero.items.length > 0 ? guerrero.items.map(h => h.nombre).join(', ') : 'No hay items'}`)
                } catch (error) {
                    alert("Error al crear el guerrero. Intente nuevamente.")
                    console.error("Error creando guerrero:", error)
                }
                break

            case "2":
                try {
                    let nombreMago = prompt("¿Qué nombre quiere ponerle a su mago?")
                    if (!nombreMago || nombreMago.trim() === "") {
                        alert("Nombre inválido. Intente de nuevo.")
                        continue
                    }

                    let idMago = prompt("Póngale un ID numérico a su mago")
                    if (!idMago || isNaN(parseInt(idMago))) {
                        alert("ID inválido. Debe ser un número. Intente de nuevo.")
                        continue
                    }

                    const mago = new Mago({
                        name: nombreMago.trim(),
                        id: parseInt(idMago)
                    })
                    jugador.personajes.push(mago)
                    alert(`Personaje creado:\nNombre: ${mago.name}\nID: ${mago.id}\nClase: Mago\nNivel: ${mago.nivel}\nHP: ${mago.hp}\nMP: ${mago.mp}\nFuerza: ${mago.fuerza}\nInteligencia: ${mago.inteligencia}\nDestreza: ${mago.destreza}\nHabilidades: ${mago.habilidades.map(h => h.nombre).join(', ')}\nItem: ${mago.items && mago.items.length > 0 ? mago.items.map(h => h.nombre).join(', ') : 'No hay items'}`)
                } catch (error) {
                    alert("Error al crear el mago. Intente nuevamente.")
                    console.error("Error creando mago:", error)
                }
                break

            case "3":
                try {
                    let nombrePicaro = prompt("¿Qué nombre quiere ponerle a su pícaro?")
                    if (!nombrePicaro || nombrePicaro.trim() === "") {
                        alert("Nombre inválido. Intente de nuevo.")
                        continue
                    }

                    let idPicaro = prompt("Póngale un ID numérico a su pícaro")
                    if (!idPicaro || isNaN(parseInt(idPicaro))) {
                        alert("ID inválido. Debe ser un número. Intente de nuevo.")
                        continue
                    }

                    const picaro = new Picaro({
                        name: nombrePicaro.trim(),
                        id: parseInt(idPicaro)
                    })
                    jugador.personajes.push(picaro)
                    alert(`Personaje creado:\nNombre: ${picaro.name}\nID: ${picaro.id}\nClase: Pícaro\nNivel: ${picaro.nivel}\nHP: ${picaro.hp}\nMP: ${picaro.mp}\nFuerza: ${picaro.fuerza}\nInteligencia: ${picaro.inteligencia}\nDestreza: ${picaro.destreza}\nHabilidades: ${picaro.habilidades.map(h => h.nombre).join(', ')}\nItem: ${picaro.items && picaro.items.length > 0 ? picaro.items.map(h => h.nombre).join(', ') : 'No hay items'}`)
                } catch (error) {
                    alert("Error al crear el pícaro. Intente nuevamente.")
                    console.error("Error creando pícaro:", error)
                }
                break

            case "4":
                let personajesInfo = `Personajes creados:\n`
                if (jugador.personajes.length === 0) {
                    personajesInfo += `No has creado personajes aún.\n`
                } else {
                    jugador.personajes.forEach((personaje, index) => {
                        personajesInfo += `${index + 1}. ${personaje.name} (ID: ${personaje.id}) - ${personaje.constructor.name}\n`
                        personajesInfo += `   HP: ${personaje.hp}, MP: ${personaje.mp}, Nivel: ${personaje.nivel}\n`
                        personajesInfo += `   Fuerza: ${personaje.fuerza}, Inteligencia: ${personaje.inteligencia}, Destreza: ${personaje.destreza}\n`
                        personajesInfo += `   Habilidades: ${personaje.habilidades.map(h => h.nombre).join(', ')}\n`
                        personajesInfo += `   Items: ${personaje.items && personaje.items.length > 0 ? personaje.items.map(i => i.nombre).join(', ') : 'No hay items'}\n\n`
                    })
                }
                alert(personajesInfo)
                break

            case "5":
                if (jugador.personajes.length === 0) {
                    alert("Debes crear al menos un personaje antes de continuar.")
                } else {
                    continuar = false
                }
                break

            default:
                alert("Opción no válida")
        }
    }
}
export function mostrarEstadisticas() {
    return "Estadísticas de personajes:\n\nGuerrero: Salud(100-170), Mana(30-50), Fuerza(25-40), Inteligencia(5-15), Destreza(5-15)\n\nMago: Salud(60-120), Mana(50-100), Fuerza(5-15), Inteligencia(25-40), Destreza(5-15)\n\nPícaro: Salud(80-130), Mana(40-70), Fuerza(5-15), Inteligencia(5-20), Destreza(25-40)"
}

export function mostrarHabilidades() {
    return "Posibles habilidades por personaje:\n\n" +
        "GUERRERO:\n- Hachazo (Daño: 15, Mana: 5)\n- Golpe Destructor (Daño: 25, Mana: 15)\n- Grito de Guerra (Daño: 5, Mana: 10)\n- Golpe Desmoralizador (Daño: 5, Mana: 10)\n- Golpe Brutal (Daño: 50, Mana: 20)\n\n" +
        "MAGO:\n- Bola de Fuego (Daño: 15, Mana: 5)\n- Explosión (Daño: 25, Mana: 15)\n- Intelecto Arcano (Daño: 5, Mana: 10)\n- Congelar (Daño: 5, Mana: 10)\n- Piroexplosión (Daño: 50, Mana: 20)\n\n" +
        "PÍCARO:\n- Corte (Daño: 15, Mana: 5)\n- Eviscerar (Daño: 25, Mana: 15)\n- Sigilo (Daño: 5, Mana: 10)\n- Porrazo (Daño: 5, Mana: 10)\n- Danza de la Muerte (Daño: 50, Mana: 20)"
}

export function mostrarItems() {
    return "Posibles items por personaje:\n\n" +
        "POCIÓN DE SANACIÓN:\n- Efecto: Cura entre 30 y 60 de salud\n- Uso: Restaura HP durante el combate\n\n" +
        "POCIÓN DE MANA:\n- Efecto: Restaura entre 15 y 45 de mana\n- Uso: Recupera MP para usar habilidades\n\n" +
        "CHANCLAS:\n- Efecto: Aumenta la destreza del portador en 20 puntos\n- Uso: Mejora permanente de destreza mientras se lleva equipado\n\n" +
        "NOTA: Cada personaje recibe aleatoriamente 1 item al ser creado."
}

export function RandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}



// batalla

/*let continuarBatalla = true
while (continuarBatalla) {
    alert("Para iniciar la batalla, cada jugador deberá elegir uno de sus personajes")
    let seleccion = prompt(`Empecemos con ${jugador1.name}. Elige tu personaje\n${jugador1.Mos}`)

    switch (seleccion) {
        case "1":
            alert(`Turno de ${nombreJugador1} para crear personajes`)
            crearPersonaje(jugador1, nombreJugador1)

            alert(`Turno de ${nombreJugador2} para crear personajes`)
            crearPersonaje(jugador2, nombreJugador2)
            break

        case "2":
            alert(mostrarEstadisticas())
            break

        case "3":
            alert(mostrarHabilidades())
            break

        case "4":
            alert(mostrarItems())
            break

        case "5":
            if (jugador1.personajes.length === 0 || jugador2.personajes.length === 0) {
                alert("Ambos jugadores deben tener al menos un personaje para comenzar la batalla.")
            } else {
                alert("¡Función de batalla en desarrollo!")
                // Aquí puedes implementar la lógica de combate
            }
            break

        case "6":
            continuarJuego = false;
            alert("¡Gracias por jugar Paragon!")
            break

        default:
            alert("Opción no válida")
            break
    }
}*/