
let edadEntrar = (edad) =>{

    if(edad < 18 && edad >= 0) {
        return "No pude pasar"
    
    } else if (edad < 21 && edad >= 18){
        return "Si puede pasar"
    
    } else if(edad < 0 ){
        return "Error, edad invalida"

    }else if(edad == 21){
        return "bienvenida, felicitaciones por haber llegado a la mayoria de edad"

    //}else if(edad % 2 == 0){
    //   return "Sabías que tu edad es impar?"

    }else {
        return "Puede pasar al bar y tomar alcohol"
    }
}

/* let edadImpar = (edad) => {
    if(edad % 2 == 0){
        return "Sabías que tu edad es impar?"
    }else{
        return ""
    }
} */

console.log(edadEntrar (29));
console.log(edadImpar (29));


//EJERCICIO 2

let totalAPagar = (vehiculo, litrosConsumidos) =>{

    switch (vehiculo, litrosConsumidos) {
        case "coche":
            return "el precio por litro es de $86"
        
        case "moto":
            return "el precio por litro es de $70"

        case "autobus":
            return "el precio por litro es de $55"

    
        default:
            break;
    }

}




switch (mascota){
    case "gato":
        //console.log("soy un gato")
        break;
    case "lobo":
        //console.log("soy un lobo")
        break;
    case "perro":
        //console.log("soy un perro");
        break;
    default:
        //console.log("no tengo un emoji para esa mascota");
} 