console.log("eso!");

let agustin = {
  nombre: "Agustin",
  apellido: "Salguero",
  edad: 26
};
// Modifica mi objeto
function cumpleanos(persona) {
  persona.edad += 1;
}
cumpleanos(agustin);

// No modifica mi objeto
function cumpleanos({ edad }) {
  edad += 1;
}
cumpleanos(agustin);  */

// No modifica mi obj y me devuelve un nuevo objeto con los atributos modificados
// También se le pueden agregar nuevos atributos dentro del return

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  };
}
let agustinMasViejo = cumpleanos(agustin);
