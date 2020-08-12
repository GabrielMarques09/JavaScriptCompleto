function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);

function imc(peso, altura){
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(68, 1.7));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
console.log(corFavorita(''));

function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Por favor preencha um número';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

//console.log(terceiraIdade(90));
//var totalPaises = 193;
//function faltaVisitar(paisesVisitados) {

 // return `Falta visitar ${totalPaises - paisesVisitados} países`
//}

//console.log(totalPaises);

// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor){
  return !!valor;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return lado * 4;
  
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return nome + ' ' + sobrenome;
}
// Crie uma função que verifica se um número é par
function numeroPar(numero){
  var modulo = numero % 2;
  if (modulo === 0 ){
    return 'é par'
  } else {
    return 'é impar'
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado (dado){
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('click', function(){
  console.log('Gabriel Marques')
});
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

