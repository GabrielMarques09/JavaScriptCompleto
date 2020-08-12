function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function() {
  return this.nome + ' andou !';
}

Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou !';
}

const gabriel = new Pessoa('Gabriel', 25);

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

//transformar em array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar () {
    return true;
  }
}
