//O método find() é utilizado para encontrar elementos dentro de um array de acordo com uma condição ou propriedade.

//Sintaxe: nomedoarray.find(condição/prorpiedade de um elemento)

//Crio um array
let inventario = [ //Neste caso, defini os elementos com "nome:" e "quantidade:"
    { nome: "maçãs", quantidade: 2 },
    { nome: "bananas", quantidade: 0 },
    { nome: "cerejas", quantidade: 5 },
  ];
  
  //Posso acrescentar uma função, especificando sua propriedade, neste caso, cerejas com o valor de fruta
  function cerejas(fruta) { //Ainda especifico o nome do elemento para que me seja retornado corretamente ("cerejas")
    return fruta.nome === "cerejas";
  }
 
  //Aplico e realizo
  console.log(inventario.find(cerejas));

  //Logo, na saída terá o elemento que pedi: { nome: 'cerejas', quantidade: 5 } .

//Exemplos:

//1.

let acessorios = [
    { nome: "brincos", quantidade: 2 },
    { nome: "colares", quantidade: 3 },
    { nome: "pulseiras", quantidade: 4 },
    { nome: "aneis", quantidade: 5 },
];

function colares(objeto) {
    return objeto.nome === "colares";
}

console.log(acessorios.find(colares));

//Saída: { nome: 'colares', quantidade: 3 }

//2.

let cosmeticos = [
    { nome: "sabonetes", quantidade: 6 },
    { nome: "cremes", quantidade: 7 },
    { nome: "batons", quantidade: 8 },
    { nome: "sombras", quantidade: 9 },
];

function batons(objeto) {
    return objeto.nome === "batons";
}

console.log(cosmeticos.find(batons));

//Saída: { nome: 'batons', quantidade: 8 } .