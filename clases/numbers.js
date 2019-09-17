console.log('Numbers!')

let precioDelVino = 200.3

let total = precioDelVino * 3
// Cuando preguntemos por total JavaScript nos va a devolver algo como 600.90000000001
// Esto sucede porque JS asigna solo una cantidad limitada de bytes para los decimales,
// por lo que no es tan preciso al trabajr con ellos.
// Una solución es:

let total = (precioDelVino * 100 * 3) / 100 // aca lo que hago es convertir precioDelVino a entero.
// devuelve 600.9 porque se que solo le estoy pasando precioDelVino con un solo decimal.

let total = Math.round(precioDelVino * 100 * 3) / 100
// De esta manera me aseguro que mi precioDelVino va a tener solamente 1 decimal,
// ya que utilizo el módulo Math con el método .round()
let totalStr = total.toFixed(2) // convierte a string y toma 2 decimales
let totalParse = parseFloat(totalStr) //  nos devuelve nuestro total con 2 decimales en type number
