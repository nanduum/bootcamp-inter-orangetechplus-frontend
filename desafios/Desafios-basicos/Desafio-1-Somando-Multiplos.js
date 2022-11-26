// Desafio
// Dado um numero A e o seu limite N, encontre a soma de todos os multiplos A ate o seu limite N.

// Entrada
// A entrada devera ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

// Saida
// A saida devera retornar o valor da soma de todos os multiplos A ate o seu limite N.

// Exemplo 1

// Entrada	Saida
// 5
// 20	50
// Exemplo 2

// Entrada	Saida
// 3
// 18	63



var a = parseInt(gets());
var N = parseInt(gets());

let soma = 0;
for (i = 1; i <= N; i++) {
  if (i % a == 0) {
    soma += i;
  }
}
print(soma);
