class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(funcion) {
        let { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (funcion) {
            funcion(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(funcion) {
        let { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if (funcion) {
            funcion(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, dev) {
    console.log(`Hola ${nombre}, como estas?`)
    if (dev) {
        console.log(`No sabía que eras desarrollador/a`)
    }
}

const ramiro = new Persona('Ramiro', 'Gavagnin', 1.7)
const agustin = new Persona('Agustín', 'Salguero', 1.74)
const manuel = new Desarrollador('Manuel', 'Ginovili', 1.93)

ramiro.saludar(responderSaludo)
agustin.saludar(responderSaludo)
manuel.saludar(responderSaludo)
