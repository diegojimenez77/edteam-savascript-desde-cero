// Comentarios 
//2. Sintaxis 2.1 Comentarios

// Esto es un comentario de una linea

/*
Este es un comentario de bloque....
En este archivo se genera el listado de usuarios
buscando por su ID en la base de datos
o tambien buscando por medio de su correo electronico
*/

/** En este caso con el doble asterisco el 
 * edtor automaticamente lo cierra 
 * y va poniendo los asteriscos de cada linea
 * es mas elegante y como de utilizar
 */

// En este caso todas las lineas se pueden comentar con ctrl+/ en windows y cmmd+shift+7 en mac
// var hola = "Saludos";
// console.log(hola);
// console.log("Adios");

console.log("Saludos desde VS Code");
alert("Saludos desde alerta");

/** 
 * 2. Sintaxis 2.2 Tipos de Datos
 * Tipos de datos
 */

//Number

console.log(typeof 50); // prints number
console.log(typeof 'a'); // prints string
console.log(typeof ' '); // prints string
console.log(typeof false); // prints boolean
console.log(typeof true); // prints boolean
console.log(typeof "false"); // prints string , *** ojo false y true son palabras reservadas, si se ponen entre comillas las considera como string.

/**
 * 2. Sintaxis 2.3 Tipos de dato objeto o coleccion de datos.
 * Objetos: colecciones de datos (informacion) que tienen un identificador y un valor.
 */

console.log(typeof "Jose", "Juan", "Jean", "Oto" ); // prints string, "Juan", "Jean", "Oto"
console.log(typeof ["Jose", "Juan", "Jean", "Oto"]); //prints object, cuando se usan [] square brakets es para definir objetos.
console.log(["Jose", "Juan", "Jean", "Oto"]); //prints full array  (4) ["Jose", "Juan", "Jean", "Oto"] el 4 es la longitud del objeto [0,1,2,3], length 4
let arreglo = ["Jose", "Juan", "Jean", "Oto"]; // estamos declarando el arreglo como let
console.log(arreglo[0]);// estamos imprimiendo el elemento en la posicion cero del arreglo, prints "Jose"
console.log(arreglo[1]);// estamos imprimiendo el elemento en la posicion 1 del arreglo, prints "Juan"
console.log(arreglo[2]);// estamos imprimiendo el elemento en la posicion 2 del arreglo, prints "Jean"
console.log(arreglo[3]);// estamos imprimiendo el elemento en la posicion 3 del arreglo, prints "Oto"

//Objetos
console.log ({
    nombre: "Beto",
    apellido:"Quiroga"
}); //imprime el objeto en orden alfabetico
console.log(typeof {
    nombre: "Beto",
    apellido:"Quiroga"
});//imprime que es de tipo objeto.

//Nulo o null, hace referencia a valores que no existen
console.log(typeof null); // prints object, dato curioso aunque no es una coleccion de datos JavaScript define a null como un objeto
//commet for commit 

/**
 * 2.4 Declaracion y Asignacion
 */
console.log(typeof undefined); //prints undefined

/**
 * Variables
 * Hata ECMA Script 5 las variables se declaraban var, var alumno, declaracion de variable
 * var daba muchos conflictos, porque se tenia que utilizar var para todo, eso hacia que las variables no fuera constantes o de otros tipos, se generaban errores
 * ahora se usa let, let alumno
 */

// Declaracion, se reserva un espacio en memoria RAM para guardar un valor.
var alumno; // en este caso no tienen ningun valor
console.log(alumno);// prints undefined

//Asignacion de variable
alumno = "Beto Quiroga";
console.log(alumno);// prints 'Beto Quiroga'

let alumno2 = "Diego"; // declaracion y asignacion en una misma linea
console.log(alumno2);//prints 'Diego' ya se le asigno un valor

// Reasignacion, es darle un nuevo valor a las variables
alumno2 = "Alvaro Felipe"; // se reasigna el valor de la variable alumno2
console.log(alumno2); // prints Alvaro Felipe

alumno2 = 12345; // estamos cambiando el tipo de dato a number
console.log(alumno2);
console.log(typeof alumno2);// pints number

/**
 * 2.5 Asignacion por referencia
 */

let profesor = "Alexys"
let alumno3 = profesor;

profesor = "Alvaro"

console.log(profesor);
console.log(alumno3);// prints Alexys, mantiene el valor del profesor en el momento antes de la reasignacion 

alumno3 = "Beto";

console.log(alumno3);// prints Beto ya que se reasigno el valor.

/**
 * 2.6 Constantes
 * las variables nos permiten la declaracion, la asignacion y reasignacion
 */

let nombre // delcaracion

nombre = "Beto" // asignacion

let apellido = "Quiroga" // delcaracion y asignacion en una linea
apellido = "Hernandez" // reasignacion

// en las constantes se guardan datos que no van a cambiar, las constantes por buena practica se escriben con mayusculas y snake Case NOMBRE_EMPRESA
const NOMBRE_EMPRESA = "EDteam"
const SITIO_WEB = "https://ed.team"

NOMBRE_EMPRESA = "EDteam SAC"

