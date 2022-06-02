//EJERRCICIO SUMAR TODOS

let matrix = [

    [2, 6, 7, 1, 3], // FILAAAAAAAAA
    [6, 1, 8, 12, 7], // FILAAAAAAAAA
    [7, 43, 12, 76, 12], // FILAAAAAAAAA
    [7, 12, 41, 13, 1], // FILAAAAAAAAA
    [5, 4, 32, 13, 3], // FILAAAAAAAAA

];
let suma= 0
for(let fila= 0; fila<matrix.length; fila++){
    for(let col=0; col<matrix[fila].length; col++){
        suma += matrix[fila][col]

    }
}
//console.log(suma);


// sumar numeros impares

/* let suma= 0
for (let fila = 0; fila < matrix.length; fila++) {
    for (let col = 0; col < matrix[fila].length; col++) {
        if( matrix[fila][col] % 2 != 0){
            suma += matrix[fila][col]
        }

        
    }
    
}
console.log(suma);*/