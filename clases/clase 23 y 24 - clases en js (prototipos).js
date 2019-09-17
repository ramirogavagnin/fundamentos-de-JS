// Para definir un prototipo hay que definir una Función

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.serAlto = function() {
    /*     this.altura > 1.8 ? console.log(`${this.nombre} mide ${this.altura}`)
    : console.log(`Lo siento, mides menos de 1.8 mts`);  */
    return this.altura > 1.8
}

const ramiro = new Persona('Ramiro', 'Gavagnin', 1.7)
const agustin = new Persona('Agustín', 'Salguero', 1.74)
const manuel = new Persona('Manuel', 'Ginovili', 1.93)
