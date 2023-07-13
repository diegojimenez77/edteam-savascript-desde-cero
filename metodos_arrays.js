/**
 * Arrays
 */

let amigos = ["Pedro", "Gabriel", "Erick", "Daniel"];
console.log(amigos);

//Agregar elementos a mi array
let dato = amigos.push("Juanga");
console.log(dato); // dato solo guarda el tamanio del arreglo.

// Metodos que no modifican el array original
let dato2 = amigos.pop() // guarda el elemento del arreglo al que se le hizo pop

console.log(dato2) // imprime el elemento eliminado del arreglo que en este caso fue el el ultimo, jaunga
console.log(amigos) // imprime el arreglo ya modificado 

// los metodos pop y push midifican el array original.

// slice parte el array en 2, require 2 parametos, PERO no modifica el arreglo original
//donde iniciar la particion
//donde terminar la particion, hasta antes de que posicion
let dato3 = amigos.slice(0,2)// parte el arreglo y toma los elementos de la posicion 0 y 1.
console.log(dato3)
console.log(amigos)

/**
 * Metodo ForEach, no modifica el arreglo original, solo hace algo con los elementos del arreglo.
*/
for (let i=0; i < amigos.length; i++){
    console.log(amigos[i])
}
console.log("------------------")
// forEach requiere com oparametro una funcion
amigos.forEach(function(amigo){
    console.log(amigo)
})
console.log("------------------")
amigos.forEach(amigo => console.log(amigo));

let dato4 = amigos.forEach(amigo => console.log(`Hola ${amigo}`)) // por cada elemento del arreglo imprime un Hola amigo
console.log(dato4)
console.log("------------------")// vemos que no se modifica el arreglo original
console.log(amigos)


/**
 * ForEach vs Map
 * El map lo que hace es lo mismo que el forEach, pero la diferencia es que la variable dato es un nuevo arreglo.
 */

console.log("------------------")
// .map tiene la misma funcionalidad que for each pero .map me regresa un nuevo arreglo con la accion que yo le pida hacer, en este caso un elemento con hola nombre.
let dato5 = amigos.map(amigo => `Hola ${amigo}`) //crea un nuevo arreglo con Hola ${nombre de cada amigo}
console.log(dato5)/ 
console.log("------------------")// vemos que no se modifica el arreglo original
console.log(amigos)

// El uso de for each esta algo descontinuado, se usa si solose necesita recorrer los elementos pero no guardarlos.
// .map devuelve un nuevo arrar adicional a recorrer los elementos del arreglo.

/**
 * Filter
 * filtra elementos de un arreglo creando un arreglo nuevo
 */

let numeros = [10, 20, 30, 40, 50, 60, 70, 80];
let may30 = [];
numeros.map( num => {
    if (num > 30){
        console.log(num)
    }
})

for ( i = 0; i < numeros.length; i++){
    if(numeros[i]>30){
    console.log(numeros[i])
    may30.push(numeros[i])
    }
}

console.log(may30)

let filtro = numeros.filter(num => num>30)
console.log(filtro);

/**
 * Find, includes, some y every
 */

let nums = [23, 534, 2, 23, 44, 55, 3, 5, 6, "juanga"]

let dat = nums.find(num => num>25)// solo devuelve el primer dato que cumpla la condicion
console.log(dat)

let dat2 = nums.includes(23); // solo devuelve true o false si es que el elemento se encuentra en el arreglo ya sea una ovarias veces.
console.log(dat2)

let dat3 = nums.some(num => num>534)// muestra si almenos 1 elemento del array cumple con la condicion, devueve true o false
console.log(dat3)

let dat4 = nums.every(num => typeof num === "number")// valida si todos los elementos del array cumplen una condicion, con un elemento que no cumpla devuelve falso.
console.log(dat4);

/**
 * Manipulando strings
 */

let texto = "Alberto Junior Quiroga Munoz"
let tex = texto.slice(3,10)//cortal el string a partir de la posicion 3, y hasta la posicion 10.
console.log(tex);

let tex2 = texto.split("r")// hace los cortes exactamente en donde se encuantra el elemento pero no los inlcluye, si quiero separar cada letra doy un espacio ""
console.log(tex2)

let tex3 = texto.search()// metodo search requiere una expresion regular, 
let tex4 = texto.toLocaleLowerCase() // hace todo el texto a minusculas, hay varios metodos.
console.log(tex4)

//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Indexed_collections#M%C3%A9todos_de_array
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String#M%C3%A9todos

/**
 * Objetos
 */

let alumno = {
    nombre: "Beto",
    edad: 21,
    suscriptor: false,
    ciudad: "Lima"
}


console.log(alumno)// imprime el objeto completo en orden alfabetico
console.log(alumno.ciudad)// accede al atriburo ciudad
console.log(alumno["edad"])//da la edad
console.log(alumno.edad)// tambien imprime la edad

let valores = Object.values(alumno)
console.log(valores)// solo imprime los valores del objeto sin los atributos

let atributos = Object.keys(alumno)
console.log(atributos)// solo imprime los atributos del objeto sin valores

/**
 * Math y Date
 * Math nos permite tener valores matematicos
 * Date valores de fecha
 */

const valor = Math.random()// da un numero aleatorio entre cero y 1
console.log(valor)

const valor2 = Math.random()*10//da un numero aleatorio entre cero y 10s
console.log(valor2)

const valor3 = Math.max(50, 2, 26, 88)// devuelve el numero mayor del arreglo
console.log(valor3)

const valor4 = new Date()
console.log(valor4.getUTCDate())
