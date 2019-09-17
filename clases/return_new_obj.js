
const ramiro = 
{
    nombre: 'Ramiro',
    apellido: 'Gavagnin',
    edad: 29,
    peso: 101
}

const agustin = 
{
    nombre: 'Agustín',
    apellido: 'Salguero',
    edad: 17,
    peso: 72
}


// De esta manero nuestro objeto "ramiro" se ve modificado globalmente... persona.edad

function cumpleanos (persona)
{
    persona.edad += 1
}


// Aquí estamos retornando un nuevo objeto persona ("ramiro" o "agustin"), y le estamos pisando
// el valor persona.edad - Nuestro objeto global no se vera modificado.
function cumpleanos (persona)
{
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

const ramiroMasViejo = cumpleanos(ramiro)