// CLASE 15
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

console.log(`Al comienzo del año ${ramiro.nombre} pesa ${ramiro.peso}KG`);

const DIAS_DEL_ANO = 365;
const VARIABLE_DE_PESO = 0.2

const aumentaDePeso = persona => persona.peso += VARIABLE_DE_PESO;
const adelgaza = persona => persona.peso -= VARIABLE_DE_PESO;


for (let i = 0; i < 365; i++)
{
    let random = Math.random();
    
    if (random < 0.25)
    {
        aumentaDePeso(ramiro);
    }
    else if (random < 0.5)
    {
        adelgaza(ramiro);
    }
}

console.log(`Al final del año ${ramiro.nombre} pesa ${ramiro.peso.toFixed(1)}KG`);