/**
 * 3 - 3.1Operadores de asignacion
 * el (=) es un operador de asignacin
 */

let alumno4 
alumno4 = "Beto" // uso de operador de asignacion

// Operadores aritmeticos basicos
// son 5 (+, -, *, /, %)

let operacion = 50 + 60;
console.log(operacion);

let operacion2 = 50 - 60;
console.log(operacion2);

let operacion3 = 5 * 60;
console.log(operacion3);

let operacion4 = 60 / 4;
console.log(operacion4)

let operacion5 = 60 % 4;
console.log(operacion5);

let numero1 = 10
let numero2 = 4

let operacion6 = numero1 + numero2;
console.log(operacion6);

/**
 * 3.2 Operadores de asignacion
 */
let a = 10
let b = 4

a -= b //en un solo paso hace una suma y una asignacion esto quiere decir que suma b a a y reasigna el nuevo valor.
// mismo se puede hacer con *, / y %, + y -

// para exponencial se hace con ** console.log(a**b)
// a **= b potencia con reasignacion.
console.log(a ** b);

/**
 * 3.3 Operadores de Concatenacion
 * El operador + sirve para hacer operaciones con textos
 */

let nombre2 = "Beto"
let apellido2 = "Quiroga"

let nombreCompleto = nombre2 + " " +apellido2

console.log(nombreCompleto)

// Template Strings, la ventaja que nos da es que se pueden escribir dentro variables y operaciones. 
// Yo las conocia anteriormente como template literals
let nickname = `Mi nombre es: ${nombre2} y mi apellido ${apellido2}`
let nickname2 = `Mi nombre es: ${20>10} y mi apellido ${apellido2}`
console.log(nickname)
console.log(nickname2)