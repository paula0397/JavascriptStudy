const prompt = require("prompt-sync")({ sigint: true})




// let edad = 20


// if (edad < 18) {
//     console.log("no entra");
// }else if (edad >= 16 && edad <= 18){
//     console.log("con un mayor de edad")
// }else{
//     console.log("permitido")
// }




//------------------------
//TERNARIO



let clima = "sol"
let salgoConSombrilla = clima === "lluvia" ? "si llevalo" : "no, no hace falta"

//console.log(salgoConSombrilla);



//-------------------------------------

let dia = 'miercoles'

function tengoClases(dia) {
	switch (dia) {
    case 'lunes':
		console.log("tenés clases");
		break;
		
		case 'miercoles':
		console.log("tenés clases");
		break;

		case 'viernes':
		console.log("tenés clases");
		break;
	
		default:
		console.log("no tenés clases");
		

	}
}

//console.log(tengoClases(miercoles));

//-------------------------------------



let edad = 40

if (edad >= 21) {
	console.log("Bienvenido");
}else if(edad < 0){
	console.log("INVALIDO");
}else if(edad % 2 === 1){
	console.log("tu edad es impar");
}else{
	console.log("error");
}



//-------------------------------------

// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
// litrosConsumidos.
// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones:
// ● Si el vehículo es “coche”, el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.




let vehiculo = prompt("Ingrese el tipo de vehiculo")
let litrosConsumidos = prompt("Ingrese los litros consumidos")

let TotalAPagar = () =>{
	let valor

	if (vehiculo = "coche") {
		console.log("el precio por litro es de $86.");
	}else if (vehiculo = "moto") {
		console.log("el precio por litro es de $70");
	}else if(vehiculo = "autobus") {
		console.log("el precio por litro es de $55");
	}

	if (litrosConsumidos > 0 && litrosConsumidos <= 25 ) {
		valor = valor * litrosConsumidos + 50
		console.log("El monto a pagar es de $" + valor);
	} else if(litrosConsumidos > 25){
		valor = valor * litrosConsumidos + 25
		console.log("El monto a pagar es de $" + valor);
	}
}

TotalAPagar(vehiculo, litrosConsumidos)