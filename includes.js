//O método includes() é utilizado para determinar se o array possui um determinado elemento.
//Se esse elemento de fato estiver dentro do array, retornará 'true' na saída, caso contrário, retornará 'false'.

//Sintaxe: nomedoarray.includes(elemento)

//Crio um array
let flores = ["orquídea", "girassol", "rosa", "margarida"];

//Aplico e realizo
console.log(flores.includes("orquídea"));

//Saída: true

//Exemplos:

//1.

let automoveis = ["carro", "ônibus", "caminhão"];

console.log(automoveis.includes("caminhão"));

//Saída: true

//2.

let tecidos = ["renda", "seda", "poliéster"];

console.log(tecidos.includes("cetim"));

//Saída: false