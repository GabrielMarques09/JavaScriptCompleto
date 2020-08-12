console.log(Number.isNaN(NaN));

console.log(Number.isInteger(1.4));

console.log(Number.parseFloat('4.50'));

console.log(Number.parseInt('4.50'));

const preco = 10.32323;

console.log(+preco.toFixed(2));

let valor = 48.49;
let valor2 = 48.49;

valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });
valor2 = valor2.toLocaleString('en-US', {style: 'currency', currency: 'USD' });

console.log(valor);
console.log(valor2);




