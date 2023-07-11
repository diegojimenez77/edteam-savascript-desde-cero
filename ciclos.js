/**
 * Ciclos
 * Bucles o loops
 */

// for

// for (valor de inicializacion; condicion; incremento de valor){
//     accion
// }

for ( let i = 0; i < 10; i++) {
    console.log(i);
}

// i vale 0, i es menor que 10? si => console.log(i), i se incrementa y ahora vale 1
// i vale 1, i es menor que 10? si => console.log(i), i se incrementa y ahora vale 2
// ....
// i vale 9, i es menor que 10? si => console.log(i), i se incrementa y ahora bale 10
// i vale 10, i es menor que 10? No => Termina!!!

//Dado un texto deseamos imprimir su contenido letra por letra
// Ejemplo "beto"

let texto = "betoquiroga"
// console.log(texto[0]);
for ( let i = 0; i < texto.length; i++){
    console.log(texto[i])
}


/**
 * Ciclo While
 * Mientras!
 * 
 */
// Regalar juguetes
let juguetes = 10;

while (juguetes > 0) {
    juguetes--;
    console.log(`Regalamos un juguete. Nos quedan ${juguetes}`);
}