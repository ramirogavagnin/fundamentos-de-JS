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
const VARIABLE_DE_PESO = 0.3;
const META = ramiro.peso - 3;

const aumentaDePeso = persona => persona.peso += VARIABLE_DE_PESO;
const adelgaza = persona => persona.peso -= VARIABLE_DE_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
let dias = 0;


while (ramiro.peso > META)
{   
    // debugger  => voy a la consola de chrome/sources
    if (comeMucho())
    {
        aumentaDePeso(ramiro);
    }
    if (realizaDeporte())
    {
        adelgaza(ramiro);
    }
    dias += 1;
}


console.log(`Pasaron ${dias} dias hasta que ${ramiro.nombre} adelgazó 3KG`);