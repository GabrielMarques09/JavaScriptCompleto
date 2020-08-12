// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// dados[2]('Ford');
// dados[1][2].cor; // azul

// const carros = new Array('Ford', 'Fiat', 'Honda');

// console.log(carros);

// const li = document.querySelectorAll('li');
// const arrayLi = Array.from(li);

// const obj = {
//   0: 'Gabriel',
//   1: 'Alcantara',
//   2: 'Teste',
//   length: 3,
// }

// const objArray = Array.from(obj);

// console.log(li);
// console.log(arrayLi);

const frutas = ['Banana', 'Pêra', 'Uva', ['Uva Roxa', 'Uva Verde']];

// console.log(frutas.length);

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];

// instrumentos.sort();

// console.log(instrumentos);

// const carros = ['Ford', 'Fiat', 'VW'];
// console.log(carros);

// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// console.log(carros);
// carros.splice(2, 0, 'Kia', 'Mustang'); // []
// console.log(carros) // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

// carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
// console.log(carros) // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0));

const indexUva = frutas.findIndex(item => {
    return item === 'Uva';
})

console.log(indexUva)


const frutas1 = ['Banana', undefined, null, 'Maçã', 0, 'Uva'];

const arrayFrutas = frutas1.filter((item) => {
   return true
    console.log(item);
})

console.log(arrayFrutas)