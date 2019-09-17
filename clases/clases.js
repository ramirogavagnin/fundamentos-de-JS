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
    constructor(nombre, apellido, altura, hobby, genero) {
        super(nombre, apellido, altura)
        this.hobby = hobby
        this.genero = genero
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}

const ramiro = new Persona('Ramiro', 'Gavagnin', 1.7)
const agustin = new Persona('Agustín', 'Salguer', 1.74)
const manuel = new Desarrollador('Manuel', 'Ginovili', 1.93)

// Otra reflexion
class Persona {
    constructor(nombre) {
        this.nombre = nombre
        this.imprimirNombre = () => console.log(`Hola mi nombre es ${this.nombre}`)
        // Aquí el contexto es el objeto Persona
    }

    metodoSaludar = () => {
        const saludo = () => console.log(`Hola, soy un método y mi nombre es ${this.nombre}`)
        saludo()
    }
}
Persona.prototype.saludar = () => {
    console.log(`Hola mi nombre es ${this.nombre}`)
} // Aquí el contexto es el objeto Windows

const pepe = new Persona('Pepe')
const obj = {
    nombre: 'Pedro',
    imprimirNombre: () => console.log(`Hola mi nombre es ${this.nombre}`),
}
pepe.saludar() // => retorna Hola mi nombre es undefined
pepe.imprimirNombre() // => retorna Hola mi nombre es Pepe
obj.imprimirNombre() // => retorna Hola mi nombre es undefined
pepe.metodoSaludar() // => retorna Hola, soy un método y mi nombre es Pepe
