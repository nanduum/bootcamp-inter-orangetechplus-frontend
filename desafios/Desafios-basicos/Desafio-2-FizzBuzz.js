// Desafio
// Neste desafio, voce tera que criar uma funcao que faca um numero como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

// Entrada
// Voce recebera um numero onde: 
// Se o numero for um multiplo de 3 e 5 -> "FizzBuzz" ; 
// Se o numero for apenas multiplo de 3 -> "Fizz" ; 
// Se o numero for apenas multiplo de 5 -> "Buzz"; 
// Se o numero nao for um multiplo de 3 ou 5, o numero deve ser exibido; 

// Saida
// Retorne a palavra correta de acordo com o seu multiplo. Caso o valor nao seja multiplo de 3 ou 5, exiba o numero, conforme exemplo abaixo:

// EXEMPLO DE ENTRADA 

// EXEMPLO DE SAIDA 

// 3

// Fizz

// 5

// Buzz

// 15

// FizzBuzz 

// 4 

// 4 


var N = parseInt(gets());

if (N % 3 == 0 && N % 5 == 0) {
  console.log("FizzBuzz");
} else if (N % 3 == 0) {
  console.log("Fizz");
} else if (N % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(N);
}
