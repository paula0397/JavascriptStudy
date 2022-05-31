const prompt = require("prompt-sync")({ sigint: true });




// Crear una función sumar, esta deberá recibir dos parámetros y retornar la
// suma de los mismos.


let sumar = (num1, num2) =>{
    return num1 + num2
}

//console.log(sumar(9, 6));


//-----------------------------------------------------------------------------------------

// Crear una función restar, la cual deberá recibir dos parámetros y retornar la
// resta del primero menos el segundo.


let restar = (a, b)=>{
    return a - b
}

//console.log(restar(8, 6));


//-----------------------------------------------------------------------------------------

// Crear una función multiplicar, la misma deberá recibir dos parámetros y
// retornar el resultado de su multiplicación.

let multiplicar = (numero1, numero2) =>{
    return numero1 * numero2
}

//console.log(multiplicar(8, 5));


//-----------------------------------------------------------------------------------------

// Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado
// de la división del primero sobre el segundo.

let dividir = (c, d)=>{
    return c / d
}

//console.log(dividir(10,0));


//-----------------------------------------------------------------------------------------


/* let saludo = prompt("Ingrese su nombre ")
console.log(`Hola ${saludo} !`); */

// let numeroUno = prompt("Ingrese un numero")
// let numeroDos = prompt("Ingrese segundo numero")

// let suma = +numeroUno + +numeroDos 

// console.log(suma);  */

console.log("-------------- Testeo de Operaciones / Calculadora --------------")


//let num1 = prompt("Ingrese un numero")
//let num2 = prompt("Ingreso el segundo")

// let suma = +num1 + +num2
// //console.log(suma);

// let resta = -num1 - -num2
// //console.log(resta);

// let multiplicacion = num1 * num2
// //console.log(multiplicacion);

// let division = num1 / num2
//console.log(division);


//-----------------------------------------------------------------------------------------


// Crear una función que se llame cuadradoDeUnNumero, la cual recibe un
// número como parámetro y deberá retornar ese número elevado al cuadrado.



let cuadradoDeUnNumero = (numero)=>{
    return numero * numero
}

//console.log(cuadradoDeUnNumero(5));

//-----------------------------------------------------------------------------------------


// Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
// de 3 números, que serán ingresados por parámetro.

let promedioDeTresNumeros = (n1, n2, n3) =>{
    return  (n1 + n2 + n3) / 3 //se suman los 3 numeros y se divide por la cantidad de numeros
}

//console.log(promedioDeTresNumeros(8,5,7));


//-----------------------------------------------------------------------------------------



// Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
// total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
// Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.

let calcularPorcentaje = (numeroTotal, porcentaje) =>{
    return (numeroTotal * porcentaje) / 100
}

//console.log(calcularPorcentaje(50, 100));




//-----------------------------------------------------------------------------------------




function calcularPorcentaje(numero ,porcentaje){
    return multiplicar(numero, dividir(porcentaje,100));
}
function generadorDePorcentaje(a, b){
    return dividir(multiplicar(a,100),b)
}

console.log(generadorDePorcentaje(2,200));