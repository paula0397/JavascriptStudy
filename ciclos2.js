// FOR / WHILE / DO WHILE

//CICLO FOR

// el for tiene 3 partes que se separan por ; 
//primera parte la inicializacion - la segunda condicion y la tercera modificador

/* for( let numero = 1 ; numero < 5 ; numero++ ){

    console.log('estoy dando la vuelta: ${numero}');

}

for( let i = 1 ; i < 5 ; i++ ){

    console.log('estoy dando la vuelta: ${i}');
    
} */


/* let contarHastaCinco = ()=>{
    for( let i = 1 ; i < 5 ; i++ ){

        console.log('estoy dando la vuelta: ${i}')

    }} */

//WHILE
// INICUALIZACION / CONDICION / MODIFICADOR
//solo dentro de los parentssis estan las condiciones

/* let j = 1
while (j <= 3) {
    console.log(j);
    j++
} */



//DO WHILE
// primero el console log - 
/* let h = 12

do{

    console.log(h);
    h++
    
}while( h < 7 ) */






//----------------------------------------------------



/* let sumarNumeros = () => {
    let resultado = 0; 

    for (let i = 1; i <= 2; i++) {

    console.log(resultado);
    resultado = resultado + i;
    }

    return resultado;
};

console.log(sumarNumeros());



 */

//----------------------------------------------------






//EJERCICIOS
// 1 un codigo que muestre los nuemros del 1 al 10

let contarHastaDiez = ()=>{

    for (let i = 0; i <= 10; i++) {
        //console.log(i);
        
    }
}

contarHastaDiez()


// 2 hacer un codigopara visualizar una cuenta de 1 a 10 y a la ve<, una cuenta inversa

let contarYdescontar = ()=>{

    for (let i = 1; i <= 10; i++) {


        //console.log(i);
        //console.log(11-i);
        
        
    }
}
contarYdescontar()

//3  crear una funcion 

let mostrarImpares = ( num )=>{

    for( let i = 1 ; i < num ; i++ ){
        if( i % 2 !== 0){

            //console.log(i + 5);
        }
    }
    
}
mostrarImpares(7)




// Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.

let numerosSiguientes = (numero)=>{

    for(let i = 10; i <= 20; i++ )
    console.log(i);
}

//console.log(numerosSiguientes());




//------------------------------------------------------

// Imprimir los números entre el 5 y el 20, saltando de tres en tres.

let saltarTresEnTres = () =>{
    for(let i = 6; i <= 20; i += 3 )
    console.log(i);
}

//saltarTresEnTres()



//------------------------------------------



// Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100

let sumatoriaTodosLosNumeros = () =>{
    for (let i = 0; i <= 100; i++)
    console.log();
}