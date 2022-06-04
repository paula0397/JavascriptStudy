//Sumar todas las notas y dividirlas entre la cantidad de notas a promediar

let promedioNotas = (nota1, nota2, nota3) =>{
    let suma = nota1 + nota2 + nota3
    return suma / 3
}

//console.log(promedioNotas(8, 5, 4));


//--------------


//Algoritmo para convertir una cantidad de pesos a dlares

let convertirAdolares = function(cantidadPesos, valorDolar){
    return cantidadPesos / valorDolar

}

//console.log(convertirAdolares(300,150));


//------------------------------------------

//Hacer un programa que calcule el salario de un empleado
//si se descuenta el 20% de su salario actual

let salario= (suelcoActual)=>{
    return suelcoActual * 0.8 // al entero de 1 le resto el 20% es igual al 0.8
}

console.log(salario(100));


// ingresa un numero que muestre si es par o impar

let EsparOimpar = numero =>{
    if(numero % 2 ===0){
        return "es par"
    }else{
        return "es impar"
    }
}

//console.log(EsparOimpar(5));

//-----------------------------------------------------------

//tabla de multiplicar del 1 al 12

let tablaDeMultiplicar = (numero) =>{
    if(numero >= 1 && numero <= 13 ){
        for(let i = 1; i < 11; i ++){
            console.log(`${numero} x ${i} = ${numero * i}`  );
        }
    }

}

//tablaDeMultiplicar(9)