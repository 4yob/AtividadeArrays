//O método concat() é utilizado para unir, ou melhor, mesclar arrays e transformá-los em um só.

//Sintaxe: nomedoarray1.concat(array2, array3, ..., arrayN)

//Crio mais de um array
let horarios1 = ["11h", "12h", "13h"];
let horarios2 = ["14h", "15h", "16h"];

//Aplico criando mais um array, que será correspondente à junção dos arrays anteriores
let horariosTotais = horarios1.concat(horarios2);

//Realizo
console.log(horariosTotais);

//E de imediato, aparecerá um único array na saída: [ '11h', '12h', '13h', '14h', '15h', '16h' ] .

//Exemplos:

//1.

let coresFrias = ["azul", "verde", "violeta"];
let coresQuentes = ["vermelho", "amarelo", "laranja"];
let coresNeutras = ["marrom", "bege"];

let coresTotais = coresFrias.concat(coresQuentes,coresNeutras);

console.log(coresTotais);

//Saída:
// [
//  'azul',    'verde',
//  'violeta', 'vermelho',
//  'amarelo', 'laranja',
//  'marrom',  'bege'
//]

//2.

let marcas1 = ["Motorola", "Lenovo"];
let marcas2 = ["LG", "Apple"];

let marcasTotais = marcas1.concat(marcas2);

console.log(marcasTotais);

//Saídas: [ 'Motorola', 'Lenovo', 'LG', 'Apple' ] .