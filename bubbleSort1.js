const edades = [33, 27, 34, 30, 34, 25];

let ordenar = (arr) =>{
    let temporal;

    for ( let i = 0; i < arr.length; i++ ){

        for ( let p = 0; p < arr.length - 1; p++ ){
            if (arr[p] > arr[p + 1]){
                temporal = arr[p];
                arr[p] = arr[p + 1];
                arr[p + 1] = temporal;
            }
        }
        
    }


}

//ordenar(edades)
//console.log(edades);


let ordenar2 = (arr) =>{
    let temporal;

    for ( let i = 0; i < arr.length; i++ ){

        for ( let p = 0; p < arr.length - 1; p++ ){
            if (arr[p] < arr[p + 1]){
                temporal = arr[p];
                arr[p] = arr[p + 1];
                arr[p + 1] = temporal;
            }
        }
        
    }


}

ordenar2(edades)
console.log(edades);



const letras = ["C", "A", "D", "E", "H", "Z", "J", "L" ]

ordenar2(letras)
//console.log(letras);


const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"}
        ]


/*         let ordenarObjeto = (obj) =>{
            let temporal;
            
        
            for ( let i = 0; i < obj.length; i++ ){
        
                for ( let p = 0; p < obj.length - 1; p++ ){
                    if (obj[p].saldo > obj[p + 1].saldo){
                        temporal = obj[p];
                        obj[p] = obj[p + 1];
                        obj[p + 1] = temporal;
                    }
                }
                
            }
        
        }

ordenarObjeto(arrayCuentas)
//console.log(arrayCuentas); */



let ordenarObjeto2 = (obj) =>{
    let temporal;
    

    for ( let i = 0; i < obj.length; i++ ){

        for ( let p = 0; p < obj.length - 1; p++ ){
            if (obj[p].edadTitular > obj[p + 1].edadTitular){
                temporal = obj[p];
                obj[p] = obj[p + 1];
                obj[p + 1] = temporal;
            }
        }
        
    }

}

ordenarObjeto2(arrayCuentas)
console.log(arrayCuentas);

//---------------------



let ordenarObjeto2 = (obj) =>{
    let temporal;
    

    for ( let i = 0; i < obj.length; i++ ){

        for ( let p = 0; p < obj.length - 1; p++ ){
            if (obj[p].edadTitular > obj[p + 1].edadTitular){
                temporal = obj[p];
                obj[p] = obj[p + 1];
                obj[p + 1] = temporal;
            }
        }
        
    }

}

ordenarObjeto2(arrayCuentas)
console.log(arrayCuentas);
