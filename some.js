//O método some() é utilizado para testar se um elemento do array possui a condição imposta por uma função.
//Em caso afirmativo, retornará na saída 'true', em caso negativo, 'false'.

//Sintaxe: nomedoarray.some(condição imposta pela função)

//Crio um array
let numeros = [1, 2, 3, 4, 5];

// Crio uma variável para checar se no array há números pares (exemplo)
//let pares = (elemento) => elemento % 2 === 0;

//Aplico e realizo
//console.log(numeros.some(pares));

//Em retorno, na saída: true

//Exemplos

//1.

let numeros1 = [1, 3, 5, 7, 9];

let pares = (elemento) => elemento % 2 === 0;

console.log(numeros1.some(pares));

//Saída: false

//2.

let numeros2 = [11, 12, 13, 14, 15, 16];

let impares = (elemento) => elemento % 2 !== 0;

console.log(numeros2.some(impares));

//Saída: true