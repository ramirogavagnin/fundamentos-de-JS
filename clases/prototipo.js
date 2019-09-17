function heredaDe(prototipoHijo, prototipoPadre) {
    let fn = function() {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn()
    prototipoHijo.prototype.contructor = prototipoHijo
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

function Desarrollador(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

// const ramiro = new Persona('Ramiro', 'Gavagnin', 1.70)
// const agustin = new Persona('Agustín', 'Salguero', 1.74)
// const manuel = new Persona('Manuel', 'Ginovili', 1.93)
