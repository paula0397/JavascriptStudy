//Suma
console.log( 3 + 4 );

//Resta
console.log( 10 - 6 );

//Multiplicacion
console.log( 9 * 5 );

// Division
console.log( 94 / 8 );

//Modulo
console.log( 10 % 2);

15 % 5 // Módulo, el resto de dividir 15 entre 5 → 0
15 % 2 // Módulo, el resto de dividir 15 entre 2 → 1

//Incremento
let numero = 5
console.log( ++numero );

15++ // Incremento, es igual a 15 + 1 → 16
15-- // Decremento, es igual a 15 - 1 → 14

//Decremento
let otroNumero = 8
console.log( --otroNumero );

//COMPARACION SIMPLE - Comparan dos valores, devuelven verdadero o falso.
console.log( 5 == '5' );

10 == 15 // Igualdad → false
10 != 15 // Desigualdad → true

//Comparacion estricta - Comparan el valor y el tipo de dato también.
console.log( 5 === '5');

10 === "10" // Igualdad estricta → false
10 !== 15 // Desigualdad estricta → true

//Desigualdad simple
console.log( 5 != '5' );

//Desigualdad estricta
console.log( 5 !== '5' );

//mayor que
console.log( 6 > 6 );

//Mayor o igual que
console.log(6 >= 6 );

//Menor que
console.log( 7 < 7 );

//Menor o igual que
console.log( 7 >= 7 );

//CONTENACION
let nombre = 'Teodoro';
let apellido = 'García';
let nombreCompleto = 'Me llamo ' + nombre + ' ' + apellido;



//----------------------------------
//EJERCICIO
/* Declarar y asigna dos variables: primerNumero y segundoNumero.
Luego, declarar las variables resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision y en cada una almacena el resultado que corresponda.
Por último, imprimir cada uno de los resultados utilizando console.log(nombreDeLaVariable). */

let primerNumero = 100
let segundoNumero = 5

let resultadoSuma = primerNumero + segundoNumero
let resultadoResta = primerNumero - segundoNumero
let resultadoMultiplicacion = primerNumero * segundoNumero
let resultadoDivision = primerNumero / segundoNumero


console.log(resultadoSuma)
console.log(resultadoResta)
console.log(resultadoMultiplicacion)
console.log(resultadoDivision)