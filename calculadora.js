// Debe poder resolver las 4 operaciones básicas: suma, resta, multiplicación y división. Cada una debe corresponder con una función.
// Cada operación debe recibir dos operandos. 
// Solo debe recibir números en cada operando. En el caso de que se envíe otro valor, debe mostrar un mensaje de error.
// Debe contener una función main donde se envíe como parámetros el primer operando, el segundo operando y la operación. 
// Ayuda: Se puede implementar con un IF o con SWITCH en base a la operación a realizar.
// Realizar varios ejemplos de ejecución con distintos tipos de datos enviados como operandos. El programa debe generar una salida controlada de error en los siguientes casos:

let suma = (a, b) => {
    if (typeof a == "number" && typeof b == "number") {
        console.log(a + b);
    } else {
        console.log("Error");
    }
};


let resta = (a, b) => {
    if (typeof a == "number" && typeof b == "number") {
        console.log(a - b);
    } else {
        console.log("Error");
    }
};


let multiplicacion = (a, b) => {
    if (typeof a == "number" && typeof b == "number") {
      console.log(a * b);
    } else {
        console.log("Error");
    }
};


let division = (a, b) => {
    if (typeof a == "number" && typeof b == "number") {
        console.log(a / b);
    } else {
        console.log("Error");
    }
};


let calcular = (a, b, c) => {
    switch (c) {
    case "multiplicacion":
        multiplicacion(a, b);
    break;
    case "suma":
        suma(a, b);
    break;
    case "resta":
        resta(a, b);
    break;
    case "division":
        division(a, b);
    break;
    }
};

let operacionSuma = calcular(2,null,"suma");
let operacionResta = calcular("a",3,"resta");
let operacionMultiplicacion = calcular(5,2.3,"multiplicacion");
let operacionDivision = calcular(20,0,"division");
let operacionSinDatos = calcular();