var numero = 20;

numero += 10; // numero = numero + 10
console.log(numero);


var idade = 18;
var naoPossuiDiabetes = true;

var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode Beber' : 'Não pode beber';;
console.log(podeBeber);

var possuiFaculdade = false;

if(possuiFaculdade)
  console.log('Possui');
else
  console.log('Não possui');

//Exercicio

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 10;
console.log(scroll);
// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa) ? 'Conceder crédito' : 'Não pode no momento';
console.log(darCredito);