//Estructura básica

function sumar(k, l) {
    return k + l
}


//Funciones declaradas

function saludar(nombre) {
    return 'Hola' + nombre
}

//Funciones expresadas
let triplicar = function (numero) {
    return numero * 3;
}

//Invocando una función

function saludar(nombre, apellido) {
    return 'Hola' + nombre + ' ' + apellido;
}

saludar('Paula', 'hernandez');
console.log(saludar);