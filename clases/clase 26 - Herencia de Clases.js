// La herencia de clases no existe como tal en JS. Solo existe la herencia entre prototipos.

function heredaDe(prototipoHijo, prototipoPadre) {
    let fn = function() {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn()
    prototipoHijo.prototype.contructor = prototipoHijo
} // Esta función toma como paramentros el prototipoHijo y el prototipoPadre
// se le asigna a fn el prototipo padre y luego esto es es asignado al prototipo hijo y se le pisa el
// constructor del padre con el del hijo

/// clase 25

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

///

function Desarrollador(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

heredaDe(Desarrollador, Persona)
// Aqui se llama a heredaDe() pisandole el método saludar() y heredando de Persona
// el método soyAlto()

Desarrollador.prototype.saludar = function() {
    console.log(
        `Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
    )
}

// const ramiro = new Persona('Ramiro', 'Gavagnin', 1.7)
// const agustin = new Persona('Agustín', 'Salguero', 1.74)
// const manuel = new Persona('Manuel', 'Ginovili', 1.93)
