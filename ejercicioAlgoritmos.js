let numeros = [2, 5, 12, 1, 6, 19, 23, 3];
// encontrar el numero mayor de un array

let mayorYmenor = (x) => {
let numMayor = x[0];
let numMenor = x[0];
let arrResultado = []

for (let i = 0; i < x.length; i++) {

    if (x[i] > numMayor ) {
    numMayor = x[i];
    } else if (x[i] < numMenor)  {
    numMenor = x[i];
    }
}

arrResultado.push(numMayor, numMenor)
return arrResultado

};


let arrMaxMin = mayorYmenor(numeros)
console.log(arrMaxMin)