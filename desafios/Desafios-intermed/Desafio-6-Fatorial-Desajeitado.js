// Desafio
// O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.

// Entrada
// A entrada consiste em um valor inteiro positivo N.

// Saída
// A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.

// Exemplo 1:

// Entrada	Saída
// 4	7
// Explicação: 7 = 4 * 3 / 2 + 1 

// Exemplo 2:

// Entrada	Saída
// 10	12
// Explicação: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1

var lines = gets().split("\n");
var n = parseInt(lines.shift());
var r = 0;
var arrSoma = [];

if (n <= 2) {
  print(n);
} else {
  r = n;
  fatorial();
}

function fatorial() {
  n -= 1;
  if (n == 0) {
    return;
  }
  r = r * n;
  divide();
}

function divide() {
  n -= 1;

  if (n == 0) {
    arrSoma.push(r);
    return;
  }

  r = Math.round(r / n);
  arrSoma.push(r);

  r = 0;

  soma();
}

function soma() {
  n -= 1;

  if (n == 0) {
    return;
  }
  arrSoma.push(`+${n}`);

  subtrai();
}

function subtrai() {
  n -= 1;

  if (n == 0) {
    return;
  }

  r = -n * (n - 1);

  n -= 1;

  if (n == 0) {
    return;
  }

  divide();
}

print(Math.round(eval(arrSoma.join(""))));