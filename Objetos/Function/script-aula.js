// function somar(n1, n2) {
//   return n1 + n2
// }

// console.log(somar(2,2))


// function darOi(nome, idade) {
//   console.log('Oi pra você', nome, idade)
//   }

//   darOi.call({}, 'Gabriel', 25)

//   const carro = {
//     marca: 'Ford',
//     ano: 2018
//   }
  
//   function descricaoCarro(modelo) {
//     console.log(this.marca + ' ' + this.ano, modelo);
//   }
//   descricaoCarro.call({marca: 'Honda', ano: 2019}, 'Civic') // Ford 2018
  
// const carros = ['Ford', 'Fiat', 'VW'];

// carros.forEach((item) => {
//   console.log(item);
// }); // Log de cada Carro

// carros.forEach.call(carros, (item) => {
//   console.log(item);
// }); // Log de cada Carro

// const frutas = ['Banana', 'Pêra', 'Uva'];

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// }); // Log de cada Fruta

// function Dom(seletor) {
//   this.element = document.querySelector(seletor)
// }

// Dom.prototype.ativo = function(classe) {
//   this.element.classList.add(classe)
// }

// const li = new Dom('li')

// Dom.prototype.ativo.call(li, 'ativar')

// ul.ativo('ativo')

// console.log(ul)


// const frutas = ['Banana', 'Pêra', 'Uva'];

// Array.prototype.mostrarThis = function() {
//   console.log(this)
// }

// Array.prototype.pop.call(frutas)

// const arrayLike = {
//   1: 'Item 1',
//   2: 'Item 2',
//   3: 'Item 3',
//   length: 3
// }

// const li = document.querySelectorAll('li')
// const filtro = Array.prototype.filter.call(li, (item) => {
//   return item.classList.contains('ativo')
// })

// console.log(filtro)
// console.log(li)

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
      return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
  }
  carro.acelerar(100, 20);
  // Ford acelerou 100 em 20
  
  const honda = {
    marca: 'Honda',
  };
  const acelerarHonda = carro.acelerar.bind(honda);
  acelerarHonda(200, 10);
  // Honda acelerou 200 em 10
  
  
  