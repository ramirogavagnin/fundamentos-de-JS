class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}
// con el EXTENDS la clase desarrollador hereda los métodos de la clase Persona

const ramiro = new Persona('Ramiro', 'Gavagnin', 1.7)
const agustin = new Persona('Agustín', 'Salguero', 1.74)
const manuel = new Desarrollador('Manuel', 'Ginovili', 1.93)
