function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); 
//console.log(carro);

if(true) {
  let carro = 'Fusca';
  console.log(carro);
}

//console.log(carro);

var i = 50;

//for(let i = 0; i < 10; i++){
//  console.log(`Número ${i}`);
//}

console.log(i * 10);

const semana = 'Sexta';

console.log(semana);

const data = {
  ano: 2018,
  mes: 'Dezembro',
}

data.ano = 2019;
data.dia = 25;

//Exercício
// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}


// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
