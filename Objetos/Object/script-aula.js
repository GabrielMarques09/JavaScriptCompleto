// const pessoa = new Object ({
//   nome: 'Gabriel',
// })

// console.log(pessoa)


// const carro = {
//   rodas: 4,

//   init(valor) {
//     this.marca = valor
//     return this
//   },
//   acelerar() {
//     return this.marca + ' Acelerou'
//   },
//   buzinar() {
//     return this.marca + ' buzinou'
//   }
// }

// const honda = Object.create(carro).init('Honda')

// console.log(honda.acelerar())

// const ferrari = Object.create(carro).init('Ferrari')
// console.log(ferrari.acelerar())


// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true
// }

// const onibus = {
//   rodas: 4,
//   bancos: 45
// }

// Object.assign(moto, funcaoAutomovel)
// Object.assign(onibus, funcaoAutomovel)

// console.log(`A moto: ${moto.acelerar()}`)
// console.log(`O ônibus: ${onibus.acelerar()} com ${onibus.bancos} poltronas`)

// const moto = {}
// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false, // impede deletar e mudança de valor
//     enumarable: true, // torna enumerável
//   },
//   capacete: {
//     value: true,
//     configurable: true,
//     writable: false, // impede mudança de valor
//   },
// })

const moto = {
    capacete: true
  }
  
  Object.defineProperties(moto, {
    rodas: {
      get() {
        return this._rodas
      },
  
      set(valor) {
        return this._rodas = valor * 4 + ' Total de rodas'
      }
    }
  })
  
  console.log(moto)
  