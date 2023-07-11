/**
 * Condicionales
 */

/**
 * Invitacion a una fiesta 
 * Si eres mayor de edad y menor de 65 anios puedes venir a la fiesta.
 * Si tienes permiso firmado de tus padres, puedes venir
 * Si no cumples con la edad, por favor quedate en casa.
 */
let persona = "Juan Alexis";
let permiso = true;
let edad = 18

if(edad >= 18 && edad < 65) {
    console.log(`${persona} puedes venir a la fiesta`)
} else if (permiso === true && edad >= 18 && edad < 65){
    console.log("Puedes venir, tienes permiso")
} else {
    console.log(`no tienes la edad para aisistir a la fiesta, quedate en casa ${persona}`)
}

/**
 * Condicionales multiples o switch
 * 
 * Que personaje de Dragon Ball Eres
 * Sieres fuerte y comelon eres Goku
 * Sie eres veloz y egoista eres Vegueta
 * Si eres pequenio y debil eres Krilin
 * Si eres travieso y jugueton eres Trunks
 * Si no eres ninguno, eres una sabandija
 */

let personalidad = "Pequenio y debil"

if (personalidad === "Fuerte y comelon") {
    console.log("Eres Goku")
}else if (personalidad === "Veloz y egoista"){
    console.log("Eres Vegueta")
}else if (personalidad === "Pequenio y debil"){
    console.log("Eres Krilin")
} else if (personalidad === "Travieso y jugueton"){
    console.log("Eres Trunks")
}else {
    console.log("Eres una sabandija")
}


let personalidad2 = "Pequenio y dbil"

switch (personalidad2){
    case "Fuerte y comelon":
        console.log("Eres Goku")
        break
    case "Veloz y egoista":
        console.log("Eres Vegueta")
        break
    case "Pequenio y debil":
        console.log("Eres Krilin")
        break
    case "Travieso y jugueton":
        console.log("Eres Trunks")
        break
    default: 
        console.log("Eres una sabandija!!!")
}