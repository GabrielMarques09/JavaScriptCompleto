var pessoa = {
  nome: 'Gabriel',
  idade: 25,
}

var quadrado = {
  lados: 4,
  area(lado){
    return lado * lado;
  },
  perimetro(lado){
    return this.lados * lado;
  }
}
 console.log(quadrado.area(5));
 console.log(quadrado.perimetro(5));


 // Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'Eduardo',
  sobrenome: 'Alcantara',
  idade: 25,
  cidade: 'Salvador',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`;
}
console.log(dados.nomeCompleto());
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'latir';
    } else {
      return 'de boa na lagoa';
    }
  }
}

