//O método toString() é semelhante ao join(), porém é utilizado para, ao invés de apenas elementos, também concatenar objetos de um array em uma única string.
//Além disso, diferentemente do join(), não possui um parâmetro, no caso, um separador personalizado. De forma que seu separador padrão seja a vírgula.

//Sintaxe: nomedoarray.toString()

//Crio um array
let meses = [ "Jan", "Fev", "Mar"];

//Aplico e realizo
console.log(meses.toString());

//Saída: "Jan,Fev,Mar"

//Exemplos

//1.

//Concatenando objetos em uma única string
let sequencia = [1, 2, 3, 4, 5];

console.log(sequencia.toString());

//Saída: "1,2,3,4,5" 

//2.

let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];

console.log(alfabeto.toString());

//Saída: "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o" .