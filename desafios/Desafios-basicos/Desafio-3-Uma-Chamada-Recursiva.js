// Descrição
// Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

// Entrada
// A Entrada será composta por um número inteiro, N. 

// Saída
// Será  impresso o somatório de N até 0, como no exemplo a baixo: 

// EXEMPLO DE ENTRADA

// EXEMPLO DE SAÍDA

// 10	55
// 4	10
// 15	120


let n = parseInt(gets());

function somatorio(n) {
  if (n == 0) return 0;
  else return n + somatorio(n - 1);
}
console.log(somatorio(n));
