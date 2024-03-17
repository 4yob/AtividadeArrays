//O método join() é utilizado para juntar os elementos de um array em uma única string, ou seja, uma única "caixa" de texto.
//Para isso, ele possui um separador, como um parâmetro, para ser usado entre os elementos. Ele pode ser convertido em string.

//Sintaxe: nomedoarray.join(separador)

//Crio um array
let palavra0 = ['O', 'l', 'á'];

palavra0.join('-');

//Neste caso, o separador é: '-' .

//Realizo
console.log(palavra0.join('-'));

//E assim os elementos do array serão unidos em uma única string, mas separados por um - : O-l-á .

//Exemplos:

//1.

let palavra1 = ['S', 'E', 'S', 'I'];

palavra1.join(' ');

//Neste caso o separador é o caractere de espaço.

console.log(palavra1.join(' '));

//Saída: S E S I .

//2.

let palavra2 = ['S', 'E', 'N', 'A', 'I'];

palavra2.join('.');

console.log(palavra2.join('.'));

//Saída: S.E.N.A.I .