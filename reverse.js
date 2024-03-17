//O método reverse() é utilizado para reverter a ordem dos elementos de um array.

//Sintaxe: nomedoarray.reverse()

//Crio um array
let letras = ['a', 'b', 'c', 'd', 'e', 'f'];

//Aplico
letras.reverse();

//Realizo
console.log(letras);

//E imediatamente, na "Saída" aparecerá os elementos do array invertidos: [ 'f', 'e', 'd', 'c', 'b', 'a' ].

//Exemplos:

//1.

let cardinais = ['1', '2', '3', '4', '5', '6'];

cardinais.reverse();

console.log(cardinais);

//Saída: [ '6', '5', '4', '3', '2', '1' ]

//2.

let fracionados = ['1', '1/2', '1/3', '1/4', '1/5', '1/6'];

fracionados.reverse();

console.log(fracionados);

//Saída: [ '1/6', '1/5', '1/4', '1/3', '1/2', '1' ].