var possuiGraduacao = false;

if (possuiGraduacao){
  console.log('Possui Graduação !')
} else {
  console.log('Nao possui Graduação !')
}

var corFavorita = 'Cinza';

switch (corFavorita){
  case 'Azul':
    console.log('Cor do céu !');
  break;
  case 'Amarelo':
    console.log('Olhe para o sol');
  break;
  case 'Preto':
    console.log('Olhe para a lua');
  break;
default:
  console.log('Feche os olhos');
}



// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idadeGabriel = 25, idadeGabriela = 31;
if(idadeGabriel > idadeGabriela){
  console.log('é maior')
} else if (idadeGabriel < idadeGabriela) {
  console.log ('é menor')
} else {
  console.log('é igual')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
if(expressao){
  console.log('Verdadeiro');
} else {
  console.log('Falso')
}

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}