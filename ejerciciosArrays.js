// 2) DADO EL SIGUEINTE ARREGLO...

const arrayNumeros = [7, 16, 32, 27, 45, 27, 51, 12, 19, 21]

// // CREAR UNO NUEVO EL CUAL CONTENDRA LOS NUMEROS DE ESTE ARREGLO 
// // PERO SOLO LOS NUMERO QUE SEAN MAYORES QUE 15 Y MENORES o IGUALES QUE 30
// console.log("este es el ejercicio 2")

let crearArreglo = (x)=>{
    let nuevoArreglo = []

    for (let i =0; i < x.length; i++ ){
        if( x[i] > 15 && x[i] <= 30){
            nuevoArreglo.push(x[i])  //siempre despues de una funcion van () // [] para array y acceder a elementos 
            
        }
    } 
    return nuevoArreglo
    
}

let arregloNuevo = crearArreglo(arrayNumeros) 
//console.log(arregloNuevo[2]); //si es una posicion [] - llaves objetos 



//--------------------------------------------------

// 3) DADO EL SIGUIENTE ARREGLO...

let profesionales = [
    {
        nombre: "juancito",
        profesion: "programador"
    },
    {
        nombre: "maria",
        profesion: "comerciante"
    },
    {
        nombre: "pepito",
        profesion: "docente"
    }

]

// crear una funcion para que le agregue un metodo a cada objeto
// lo que debe hacer el metodo es retornar un string con el nombre y su profesion
// por ejemplo , " mi nombre es juancito y soy programador"

// LUEGO NOS DIMOS CUENTA QUE NO LE AGREGAMOS LA EDAD A NINGUNA PERSONA
// DEMOS CREAR OTRA FUNCION QUE LE AGREGUE ESA PROPIEDAD A TODOS LOS OBJETOS
// DATO DE COLOR ( LA EDAD DE LAS PERSONAS ES UN AÑO MAS CADA UNA Y LA MAS JOVEN TIENE 41 )


console.log(profesionales);
console.log("-------------");
let agregarEdad = () => {
    for (let i = 0; i< profesionales.length; i++) {
        profesionales[i].edad = 41 + i;
        
    }
}

let agregarFuncion = () => {
    for (let i = 0; i < profesionales.length; i++) {
        profesionales[i].descripcion = function(){
            return  `mi nombre es ${this.nombre} y soy ${this.profesion}`
        }
        
    }

}

agregarEdad()
agregarFuncion()
for (let i= 0; i < profesionales.length; i++) {
    console.log(profesionales[i].descripcion()); //los metodos los debemos activar con ()
    
}
