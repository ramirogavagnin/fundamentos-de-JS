// Variables globales y locales

let nombre = 'Ramiro';

function imprimirNombre()
{
    nombre = nombre.toUpperCase();
    console.log(nombre)
    // Cuando invoque a esta función me va a modificar mi var global "nombre".
}

function imprimirNombre(n)
{
    n = n.toUpperCase();
    console.log(n)
     // En cambio esta función NO va a modificar mi var global "nombre" 
     // porque cree la var local "n", solo "n" se vera modificada a mayúsculas.
}