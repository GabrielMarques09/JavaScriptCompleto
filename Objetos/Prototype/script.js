// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
const gabriel = new Pessoa('Gabriel', 'Alcantara', 25);
Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // li.constructor.name, HTMLLIElement.prototype
li.click; // li.click.constructor.name function
li.innerText; // li.innerText.constructor.name String
li.value; // li.value.constructor.name Number
li.hidden; // li.hidden Boolean;
li.offsetLeft; // li.ofsetLeft Number
li.click(); // li.click undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
