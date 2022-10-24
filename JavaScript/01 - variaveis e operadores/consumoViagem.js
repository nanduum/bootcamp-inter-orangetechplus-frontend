//Faça um programa para calcular o valor gasto de combustivel em uma viagem

//você terá 3 variaveis. Sendo elas:
// 1. preço do combustivel
// 2. Valor medio de combustivel do carro por KM
// 3. Distancia em KM de viagem

//Imprima no console o valor que sera gasto de combustivel para realizar a viagem

const precoCombustivel = 5.79;
const KmPorLitros = 10;
const distanciaEmKm = 100;

let litrosConsumidos = distanciaEmKm / KmPorLitros;
let valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));

//toFixed arredonda o numero para não aparecer mais numeros apos a virgola
