console.log("== && ===");

let x = 4,
  y = "4";

x == y; // devuelve TRUE, transforma las variables a un mismo tipo y las compara
// en este caso convierte ambas a string

x === y; // devuelve FALSE, x = number y = string

let ramiro = {
  nombre: "Ramiro"
};

let otraPersona = {
  nombre: "Ramiro"
};

ramiro == otraPersona
ramiro === otraPersona // Ambos devuelven FALSE ya que otraPersona apunta a una dirección
// diferente en memoria que ramiro 
// ramiro y otraPersona son dos objetos distintos con los mismos atributos.


let ramiro {
    nombre: "Ramiro"
}
let otraPersona = ramiro 

ramiro == otraPersona
ramiro === otraPersona // Ambas comparaciones devuelven TRUE ya que ahora otraPersona apunta
// a la misma dirección en memoria que el objeto ramiro.

otraPersona.nombre = "Pepe" // Tanto otraPersona como ramiro se veran modificados ya que son
// el mismo objeto