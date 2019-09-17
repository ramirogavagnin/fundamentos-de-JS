function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

// Persona.prototype.saludar = function() {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }

// Persona.prototype.serAlto = function() {
//     return this.altura > 1.8
// }

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

const ramiro = new Persona('Ramiro', 'Gavagnin', 1.7)
const agustin = new Persona('Agustín', 'Salguero', 1.74)
const manuel = new Persona('Manuel', 'Ginovili', 1.93)

ramiro.saludar()

// Si el método saludar fuese declarado como () => {}
// devolveria `Hola, me llamo undefined undefined`
// Esto se debe a que el () => {} toma como THIS a el contexto de donde fue decalrada la función
// en este caso el contexto sería el espacio global, haciendo referencia al objeto Window
// y dentro de este no exiten niguna de esas variables (nombre, apellido)
