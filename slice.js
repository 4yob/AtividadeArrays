//O método slice() é utilizado para copiar os elementos de um array.

//Sintaxe: nomedoarray.slice()

//Crio um array
let roupas = ['blusa', 'calça', 'sapato', 'chapéu'];

//Aplico o método
//roupas.slice();

//Realizo
//console.log(roupas.slice());

//E assim o array é copiado: ['blusa', 'calça', 'sapato', 'chapéu'].

//Ao colocar o index de um dos elementos dentro dos parênteses do método, o array será copiado a partir desse index/elemento:
roupas.slice(1);

console.log(roupas.slice(1));

//O index dentre os parênteses é 1, consequentemente, o array é copiado a partir do elemento correspondente 'calça':
//['calça', 'sapato', 'chapéu'].

//Exemplos:

//1.

let nomesMasc = ['Paulo', 'José', 'Roberto', 'Rafael', 'Pedro'];

nomesMasc.slice(2);

console.log(nomesMasc.slice(2));

//Saída: ['Roberto', 'Rafael', 'Pedro'].

//2.

let nomesFem = ['Márcia', 'Valentina', 'Cristiana', 'Caroline', 'ísis'];

nomesFem.slice(3);

console.log(nomesFem.slice(3));

//Saída: ['Caroline', 'Ísis'].