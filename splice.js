//O método splice() é utilizado para adicionar, remover e substituir elementos de um array.

//Sintaxe: nomedoarray.splice(index, qtdade de elementos a serem adicionados/removidos/substituídos, elementos em strings para serem adicionados ou substituídos)
//Em casos de remoção, a última parte da sintaxe não existe por não haver o propósito de um novo elemento

//Exemplos:

//1. Remoção de elementos

//Crio um array
let sobremesas = ['pudim', 'sorvete', 'bolo', 'chocolate', 'bala'];

//Aplico o método
sobremesas.splice(1, 2); //A partir do index 1 serão removidos 2 elementos

//Realizo
console.log(sobremesas);

//Saída: [ 'pudim', 'chocolate', 'bala' ]
//Os elementos 'sorvete' e 'bolo' foram removidos do array.

//2. Substituição de elementos

//Crio um array
let comidas = ['arroz', 'feijão', 'carne', 'frango', 'peixe'];

//Aplico o método
comidas.splice(2, 1, 'salada'); //A partir do index 2, 1 elemento será substituído por 'salada'

//Realizo
console.log(comidas);

//Saída: [ 'arroz', 'feijão', 'salada', 'frango', 'peixe' ]
//O elemento 'carne' foi substituído por 'salada' no array.

//3. Adição de elementos

//Crio um array
let bebidas = ['suco', 'água', 'vitamina'];

//Aplico
bebidas.splice(3, 1, 'leite'); //A partir do index 3, 1 elemento será adicionado e ele terá o nome de 'leite'

//Realizo
console.log(bebidas);

//Saída: [ 'suco', 'água', 'vitamina', 'leite' ]
//O elemento 'leite' foi adicionado ao array, sendo 3 o seu index.