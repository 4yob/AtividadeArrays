//O método flat() é utilizado para criar um novo array com os elementos de sub-arrays concatenados nele até uma profundidade específica.
//É possível achatar buracos ou espaços vazios do array utilizando este método.

//Sintaxe: nomedoarray.flat(profundidade)

//Crio um array
let array1 = [1, 2, [3, 4]]; //Os elementos [3, 4] estão em um sub-array

//Aplico e realizo 
console.log(array1.flat(2)); //Dois elementos do sub-array serão achatados ao array principal

//Saída: [ 1, 2, 3, 4 ] -> Os elementos [3, 4] estão agora achatados ao array principal.

//Exemplos:

//1.

//Achatando buracos no array
let array2 = [1, 2, 3, , 4, 5, 6]; //Há um buraco desnecessário no array, simbolizado por uma vírgula

console.log(array2.flat()); //O espaço vazio será removido do array principal

//Saída: [ 1, 2, 3, 4, 5, 6 ] -> A vírgula foi retirada e o array foi achatado.

//2. 

//Achatando todos os elelementos dos sub-arrays ao array principal
let array3 = [1, 2, [3, 4, [5, 6, [7, 8]]]]; //Há muitos sub-arrays dentro do principal

console.log(array3.flat(6)); //Seis elementos sairão de sub-arrays

//Saída: [
  //1, 2, 3, 4,         -> Os elementos [3, 4, [ 5, 6, [7, 8]]] foram achatados ao array principal.
  //5, 6, 7, 8
 //]