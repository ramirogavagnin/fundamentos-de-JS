// CLASE 14
console.log('Arrow Functions')

const ramiro = {
    nombre: 'Ramiro',
    apellido: 'Gavagnin',
    edad: 29,
    peso: 101,
}

const agustin = {
    nombre: 'Agustín',
    apellido: 'Salguero',
    edad: 17,
    peso: 72,
}

const MAYORIA_DE_EDAD = 18

// #A
function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

// #B
const esMayorDeEdad = function(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

// Con => puedo ejecutar una funcion anónima, y si solo recibe 1 solo paramatro puedo eliminar los ()

// #C
const esMayorDeEdad = persona => {
    return persona.edad >= MAYORIA_DE_EDAD
}

// También => me permite borrar el return y las { } si mi función lo ÚNICO que hace es retornar algo.

const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad })

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    } else {
        console.log('BIENVENIDO!')
    }
}
