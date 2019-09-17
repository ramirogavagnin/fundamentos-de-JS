console.log('reducir un array a un solo valor')

let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111,
}

let alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78,
}

let martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132,
}

let dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90,
}

let vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91,
}

let paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182,
}

let personas = [sacha, alan, martin, dario, vicky, paula]

const reducer = (acumulador, { cantidadDeLibros }) => acumulador + cantidadDeLibros
// mi función reducer recibe el acumulador y el valor del atributo cantidadDeLibros

let totalDeLibros = personas.reduce(reducer, 0) /// >> Recibe .reduce(function, valorInicialDelAcumulador)

console.log(`En total todos tienen ${totalDeLibros} libros`)
