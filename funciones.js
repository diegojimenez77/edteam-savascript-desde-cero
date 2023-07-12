/**
 * Funciones
 */

//Declaracion de mi funcion saludar

alert("Dame un nombre para poder Saludar")
var dato = prompt("Proporcionar nombre");

function saludar(nombre) {
    console.log(typeof nombre);
    if (typeof nombre === "string"){
        console.log(`Hola ${nombre}, muy buenos dias! `)
    } else console.log("no es posible saludar sin un nombre")
}

//Llamado a la funcion saludar
saludar(dato);

/**
 * Valores de retorno
 * 
 */

function obtenerNombreCompleto (nombre, apellidos){
    let nombreCompleto = `${nombre} ${apellidos}`
    // console.log(nombreCompleto);

    return nombreCompleto; // en el return muere la ejecucion de la funcion.
}

obtenerNombreCompleto("Beto", "Quiroga M.")

console.log(obtenerNombreCompleto("Beto", "Quiroga M."));


/**
 * Funciones de primera clase
 * Cuando nos referimos a primera clase
 * En computacion los tipos de datos primitivos 
 * se consideran de primera clase, todo lo que se puede 
 * almacenar en una variable se considera de primera clase.
 */

let nombreComp = obtenerNombreCompleto("Diego", "Jimenez");
console.log(nombreComp)

// En el caso anterior estamos almacenando una funcion en una variable, por lo que la funcion se convierte en 
// una fincion de primera clase.


/**
 * Funciones anonimas
 * son aquellas que no tienen nombre, se escriben los parametros
 * y se ejecuta la funcion
 * veremos la sintaxis
 */

// (function (a, b, c){
//  console.log(a+b+c)
// }(2, 4, 5))


// Las funciones anonimas tambien pueden ser auto invocadas.
// cada vez se utilizan en menor proporcion.


/**
 * Funciones como constantes
 */

const saludar2 = function(nombre){
    console.log(`Hola ${nombre}`)
    return "otrodato"/// el return lo muestra directamente en la consola cuando se llama la funcion.
}

console.log( saludar2("juan") );
// siempre que se declaren funciones deben ser declaradas como const porque la funcion ensi no cambia, cambia el valor de entrada pero no la funcion.
// Siempre Siempre las funciones se escriben con la palabra reservada const.


/**
 * Scope
 * El Scope es el alcance que tiene los datos
 * En este caso lo revisaremos de las variables
 * let = es una variable local, solo existe dentro de un bloque de codigo, si let no es declarada dentro de un bloque de codigo tiene un alcance global.
 * las funciones solo deben tener variables locales.
 * es mejor no utilizar variables globales.
 * si tenemos una const no se puede reasignar.
 */

/**
 * var
 * ambito =  dentro de una funcion, estan limitadas al bloque, si se declaran fuera de funcion tienen ambito global
 * hoisting = se mueven automaticamente al principio del ambito, se pueden usar antes de declararse anque se muestran como undefined hasta que se le asigne un valor.
 * reasignacion y declaracion = pueden ser reasignadas y redeclaradas en cualquier momento, puedes cambiar su valor en el mismo ambito. 
 */

/**
 * let
 * ambito = de bloque
 * hoisting = no son movidas al principio del ambito, evitan problemas asociados con el hoisting
 * reasignacion = no se puede redeclarar dentro del mismo ambito.
 */

/**
 * const
 * ambito = de bloque
 * hoisting = no se mueven el principio del ambito.
 * reasignacion = no es posible reasignarla tienen asignacion unica.
 * inmutabilidad = la referencia al objeto o arreglo es constante , no se puede asignar un nuevo objeto o arreglo, sin embargo los miembros internos pueden ser modificados.
 */

/**
 * Funciones flecha o arrow function.
 * fue presentada en ECMA script 6
 */

const sumar = function (a,b){
    return a+b
}

const restar = function(c,d){
    return c-d
}

console.log(sumar(1,2))
console.log(restar(3,4))

// con las arrow function se reduce la sintaxis se elimina la funcion anonima
const sumar2 = (a,b) => a+b
const restar2 = (c,d) => c-d

console.log(sumar2(1,2))
console.log(restar2(3,4))

const saludar3 = (nombre3) => `Hola ${nombre3}, buenos dias`
console.log(saludar3("diego"))

// Nota, cuando la funcion flecha solo recibe un parametro se le puede quitar el parentesis
const saludar4 = nombre4 => `Hola ${nombre4}, buenos dias`
console.log(saludar4("diego"))

// si se necesita escribir logica, se le ponen los {} y debe tener un return

const saludar5 = nombre5 => {
    if(typeof nombre5 === "string") {
        console.log(`Hola ${nombre5}`)
    } else {
        console.error("Tipo de dato equivocado!!!")
    }
}

saludar5("334")

// todo problema se recomieda dividir en partes mas pequenias, o funciones, una funcion entre mas pequenia o atomica mejor.
// si la funcion se esta haciendo muy grande lo mejor es revisar y partirla en mas pequenias.