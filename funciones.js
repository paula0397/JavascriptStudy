const prompt = require("prompt-sync")({ sigint: true });

//funciones declaradas y expresadas = anonima

//DECLARADA
function sumar(){

}

//EXPRESADA
let restar = function(){

}

//FUNCION FLECHA O ARROW FUNCTION

let multiplicar = ()=>{}


//-----------------


//crear una funcion que diga si es par


let esPar = (numero) =>{
    return numero % 2 === 0
}

//console.log(esPar(5));


//--------------


//Crea una funcion para contabilizar los segundos que pasaron
//desde qye enpezo el dia hasta la hora qe le indiquemos

let contadorSegundos = (horas, minutos) =>{
    let segundos = horas * 60 * 60
    let segundos2 = minutos * 60
    let resultado = segundos + segundos2
    return resultado
}

//console.log(contadorSegundos(1, 2));



//---------------------------------------------------------

// Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.


let convertirPulgadas = (pulgadas) =>{
    let centimetros = pulgadas * 2.54
    let resultado = centimetros
    return resultado

}

//console.log(convertirPulgadas(5));

//---------------------------------------------------------



// Crear una función que recibe un string y lo convierte en una URL.
// Ej: “pepito” es devuelto como “http://www.pepito.com”

//opc 1
let convertirUrl = (nombre) =>{
    return 'http://www.' + nombre + '.com'

}

//console.log(convertirUrl("paula"));

//opc 2

function nombreDominio(dominio) {
    return 'http://www.' + dominio
}

console.log(nombreDominio("paula.com"));


//---------------------------------------------------------



// Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.

let admiracionPalabra = (frase) =>{
    return '¡' + frase + '!'
}

console.log(admiracionPalabra("buenaaassss"));


//---------------------------------------------------------



// Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.

let edadPerros = (edad) =>{
    let edad1 = edad * 7
    let resultado = edad1 * 1
    return resultado
}

console.log(edadPerros(8));


//---------------------------------------------------------



// Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 40 horas.

let valorHora = (sueldo) =>{
    let hora = sueldo 
    let resultado = hora * 40
    return resultado

}

console.log(valorHora(10));


//---------------------------------------------------------



// Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// probando diferentes valores.

function imc (pesoEnKg, alturaEnM){
    return pesoEnKg / (alturaEnM * alturaEnM)

}

console.log(imc(40, 1.45));



//---------------------------------------------------------



// Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
// y lo retorne. Investigá qué hace el método de strings .toUpperCase()

let nombre = "paula"
//console.log(nombre .toUpperCase())



//---------------------------------------------------------


// Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
// parámetro.

let numero = 5
let forma = "cuadrado"

console.log(typeof 5);
console.log(typeof forma);



//---------------------------------------------------------


// Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
// Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi

function circunferenciaCirculo (radio){
    return 2 * Math.PI * radio
}

console.log(circunferenciaCirculo(2));