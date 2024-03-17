//O método findIndex() é similar ao método find(), porém é utilizado para encontrar elementos dentro de um array de acordo com o índice (index) deles.

//Sintaxe: nomedoarray.findIndex(função a ser executada por cada elemento do array)

//Crio um array
let estudantes = [
    { nome: "João", idade: 15 },
    { nome: "Pedro", idade: 17 },
    { nome: "Felipe", idade: 12 },
];

//Crio uma variável para o método com a função a ser executada, para facilitar o retorno do código
let index = estudantes.findIndex(i => i.nome === "Felipe" && i.idade === 12); //Neste caso, quero que o index retornado seja o do elemento com nome "Felipe" e idade 12 (2).

console.log(index);

//Na saída, retorna: 2 .

//Exemplos:

//1.

let funcionarios = [
    { nome: "Gabriel", idade: 27 }, //index 0
    { nome: "Augusto", idade: 33 }, //index 1
    { nome: "Carlos", idade: 45 },  //index 2
];

let maisNovo = funcionarios.findIndex(i => i.nome === "Gabriel" && i.idade === 27);

console.log(maisNovo);

//Saída: 0 .

//2.

let demitidos = [
    { nome: "Paulo", idade: 34 }, //index 0
    { nome: "Miranda", idade: 43 }, //index 1
    { nome: "Roberto", idade: 55 },  //index 2
];

let mulher = demitidos.findIndex(i => i.nome === "Miranda" && i.idade === 43);

console.log(mulher);

//Saída: 1 .