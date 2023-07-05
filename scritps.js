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