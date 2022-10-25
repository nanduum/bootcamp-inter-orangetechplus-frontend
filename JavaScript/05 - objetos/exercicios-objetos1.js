// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePerscurso(distanciaEmKm, precoComsbustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoComsbustivel;


    }
}

const uno = new Carro('fiat','Prata', 1/12)
console.log(uno.calcularGastoDePerscurso(70,5));

const palio = new Carro ('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePerscurso(70, 5));



    



