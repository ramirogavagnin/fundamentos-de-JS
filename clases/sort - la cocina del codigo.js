// El método sort() recibe una función, la cúal recibe 2 parámetros A y B,
// que son dos objetos random del array. Si el valor de retorno es negativo (-1) A va a ir antes que B.
// si el valor es positivo A va a ir después que B, y si el valor es 0 quiere decir que son iguales.
// Si al método no le pasamos ninguna función va a ordenar de menor a mayor haciendo comparaciones
// de string. EJ const arr = [458, 2, 9872, 7]
// luego de aplicar sort el resutado sera [2, 458, 7, 9872]
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}

const ramiro = new Persona('Ramiro', 29)
const agustin = new Persona('Agustin', 26)
const nadia = new Persona('Nadia', 38)

const arr = [ramiro, agustin, nadia]
// Si son Números
const ordenarNumeros = (a, b) => a.edad - b.edad
// Si es por orden alfabético
const ordenarLetras = (a, b) => {
    if (a.nombre < b.nombre) return -1
    if (b.nombre < a.nombre) return 1

    return 0
}
const ordenadoPorEdad = [arr.sort(ordenarNumeros)]
const ordenadoPorNombre = [arr.sort(ordenarLetras)]

// Si nuestro array tiene valores repetidos y no podemos usar algun otro atributo
// para romper la igualdad podemos hacer lo siguiente:

let huevos = [
    {
        valor: 1,
        color: 'blanco',
    },

    {
        valor: 6,
        color: 'rojo',
    },
    {
        valor: 4,
        color: 'blanco',
    },
    {
        valor: 3,
        color: 'blanco',
    },
    {
        valor: 6,
        color: 'azul',
    },
    {
        valor: 5,
        color: 'blanco',
    },
    {
        valor: 2,
        color: 'blanco',
    },
]
const ordenarHuevos = (a, b) => {
    if (a.valor < b.valor) return -1
    if (b.valor > a.valor) return 1
    return a.key - b.key
}
let huevosCopia = [...huevos]
huevosCopia = huevosCopia.map((element, index) => {
    return { ...element, key: index }
})

huevosCopia.sort(ordenarHuevos)

// Cuando llamamos a sort sin una función de comparación JS convierte los valores a string
// y compara el valor del primer caracter de cada elemento segun su valor en ASCII

const tiposDeComida = ['Pizza', 'Árabe', 'Hamburguesa', 'Asiática', 'Étnica']
const tiposDeComidaCopia = [...tiposDeComida]
const ordenarPalabras = (a, b) => a.localeCompare(b)

tiposDeComida.sort(ordenarPalabras) // output ["Árabe", "Asiática", "Étnica", "Hamburguesa", "Pizza"]
tiposDeComidaCopia.sort() // output ["Asiática", "Hamburguesa", "Pizza", "Árabe", "Étnica"]

// Lo que sucede aquí es que al llamar a sort() sin pasarle una función de comparación,
// JS ordena los tipos de comida por orden de alfabético y por orden de aparición en la tabla ASCII
// Los carecteres con tilde aparecen despues que no llevan tilde, las mayúsculas aparecen
// antes que las minúsculas, y así...
