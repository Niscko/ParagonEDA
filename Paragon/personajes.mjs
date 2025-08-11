import { RandomNum } from './auxiliares.mjs'

export class Jugador {
    constructor({
        name,
        personajes
    }) {
        this.name = name
        this.personajes = []
    }
    agregarPersonaje(personaje){
        this.personajes.push(personaje)
    }
    mostrarPersonajes() {
    return this.personajes.map((p, index) => 
        `${index + 1}. ${p.name} - ${p.constructor.name} (Nivel ${p.nivel})`
    ).join('\n')
}
}
export class Personaje {
    constructor({
        name,
        id,
        nivel = 1,
        hp,
        mp,
        fuerza,
        inteligencia,
        destreza,
        habilidades,
        items
    }) {
        this.name = name
        this.id = id
        this.nivel = nivel
        this.hp = hp
        this.mp = mp
        this.fuerza = fuerza
        this.inteligencia = inteligencia
        this.destreza = destreza
        this.habilidades = habilidades
        this.items = items
    }

    Habilidades() {
        if (this instanceof Guerrero) {
            this.habilidades = [
                {
                    nombre: "hachazo",
                    daño: 15,
                    costo_mana: 5
                },
                {
                    nombre: "golpeDestructor",
                    daño: 25,
                    costo_mana: 15
                },
                {
                    nombre: "gritoDeGuerra",
                    daño: 5,
                    costo_mana: 10 // añadir fuerza al utilizarla 
                },
                {
                    nombre: "golpeDesmoralizador",
                    daño: 5,
                    costo_mana: 10 // Restar fuerza al oponente al utilizarla 
                },
                {
                    nombre: "golpeBrutal",
                    daño: 50,
                    costo_mana: 20 // Se hace 10 de daño a si mismo
                }
            ]
            while (this.habilidades.length > 2) {
                this.habilidades.splice(RandomNum(0, this.habilidades.length - 1), 1)
            }
        }
        if (this instanceof Mago) {
            this.habilidades = [
                {
                    nombre: "bolaDeFuego",
                    daño: 15,
                    costo_mana: 5
                },
                {
                    nombre: "explosion",
                    daño: 25,
                    costo_mana: 15
                },
                {
                    nombre: "intelectoArcano",
                    daño: 5,
                    costo_mana: 10 // añadir inteligencia al utilizarla 
                },
                {
                    nombre: "congelar",
                    daño: 5,
                    costo_mana: 10 // Restar destreza al oponente al utilizarla 
                },
                {
                    nombre: "piroexplosion",
                    daño: 50,
                    costo_mana: 20 // Se hace 10 de daño a si mismo
                }
            ]
            while (this.habilidades.length > 2) {
                this.habilidades.splice(RandomNum(0, this.habilidades.length - 1), 1);
            }
        }
        if (this instanceof Picaro) {
            this.habilidades = [
                {
                    nombre: "corte",
                    daño: 15,
                    costo_mana: 5
                },
                {
                    nombre: "eviscerar",
                    daño: 25,
                    costo_mana: 15
                },
                {
                    nombre: "sigilo",
                    daño: 5,
                    costo_mana: 10 // añadir destreza al utilizarla 
                },
                {
                    nombre: "porrazo",
                    daño: 5,
                    costo_mana: 10 // Restar inteligencia al oponente al utilizarla 
                },
                {
                    nombre: "danzaDeLaMuerte",
                    daño: 50,
                    costo_mana: 20 // Se hace 10 de daño a si mismo
                }
            ]
            while (this.habilidades.length > 2) {
                this.habilidades.splice(RandomNum(0, this.habilidades.length - 1), 1);
            }
        }
    }

    Items() {
        this.items = [{
            nombre: "pocionSanacion",
            efecto: "Cura entre 30 y 60 de salud"
        },
        {
            nombre: "pocionMana",
            efecto: "Restaura entre 15 y 45 de mana"
        },
        {
            nombre: "Chanclas",
            efecto: "Aumenta la destreza del portador en 20 puntos"
        }]
        while (this.items.length > 1) {
            this.items.splice(RandomNum(0, this.items.length - 1), 1)
        }
    }

}

export class Guerrero extends Personaje {
    constructor({
        name,
        id,
        nivel = 1,
        hp = RandomNum(100, 170),
        mp = RandomNum(30, 50),
        fuerza = RandomNum(25, 40),
        inteligencia = RandomNum(5, 15),
        destreza = RandomNum(5, 15),
        habilidades = [],
        items = []
    }) {
        super({
            name,
            id,
            nivel,
            hp,
            mp,
            fuerza,
            inteligencia,
            destreza,
            habilidades,
            items
        })
        this.Habilidades()  // Asignar habilidades automáticamente
        this.Items()  // Asignar items automáticamente
    }
}

export class Mago extends Personaje {
    constructor({
        name,
        id,
        nivel = 1,
        hp = RandomNum(60, 120),
        mp = RandomNum(50, 100),
        fuerza = RandomNum(5, 15),
        inteligencia = RandomNum(25, 40),
        destreza = RandomNum(5, 15),
        habilidades = [],
        items = []
    }) {
        super({
            name,
            id,
            nivel,
            hp,
            mp,
            fuerza,
            inteligencia,
            destreza,
            habilidades,
            items
        })
        this.Habilidades()  // Asignar habilidades automáticamente
        this.Items()  // Asignar items automáticamente
    }
}

export class Picaro extends Personaje {
    constructor({
        name,
        id,
        nivel = 1,
        hp = RandomNum(80, 130),
        mp = RandomNum(40, 70),
        fuerza = RandomNum(5, 15),
        inteligencia = RandomNum(5, 20),
        destreza = RandomNum(25, 40),
        habilidades = [],
        items = []
    }) {
        super({
            name,
            id,
            nivel,
            hp,
            mp,
            fuerza,
            inteligencia,
            destreza,
            habilidades,
            items
        })
        this.Habilidades()  // Asignar habilidades automáticamente
        this.Items()  // Asignar items automáticamente
    }
}


