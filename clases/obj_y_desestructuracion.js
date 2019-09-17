
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

// De esta manera puedo desmenuzar mi objeto y pasarle directamente los atributos 
// como variables a mi función. {} ;)
// Al desestructurar un obj como serian variables y no atributos como persona.nombre,
// el objeto global no se vería modificado luego de ejecutar mi función.

// También cabe resaltar que en este ejemplo los valores del obj "ramiro" no se verán modificados,
// ya que nombre, apellido y edad, si bien son atributos de nuestro obj que le pasamos por parametro 
// a nuestra función, son variables locales de imprimirNombre().
// Si hubisemos pasado el obj "ramiro" por parametro en nuestra función y ejecutamos una 
// modificación en los valores de los atributos, nuestro obj se vería modificado por fuera
// de esa función, ya que JS se comporta diferente con los objetos. Le asigna un espacio en memoria,
// y siempre apunta al mismo lugar o punto de referencia.

function modificarNombre({nombre, apellido, edad})
{
    nombre = nombre.toUpperCase()
    apellido = apellido.toUpperCase()
    edad = 22
    console.log(nombre, apellido, edad);
}

function modificarNombre({nombre, apellido, edad})
{
    nombre = nombre.toUpperCase()
    apellido = apellido.toUpperCase()
    edad = 22
    console.log(nombre, apellido, edad);
}


function imprimirNombre(persona)
{ 
//    let nombre = persona.nombre;

//    let {nombre} = persona;
//    console.log(nombre);

   // Estos dos ejemplos son exactamente iguales.
   // También puedo pasarle multiples keys de mis objeto como variables

   let {nombre, apellido, edad} = persona;
   console.log(nombre, apellido, edad);
}



function imprimirNombreYEdad (persona)
{
    let {nombre, edad} = persona;
    console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
}

