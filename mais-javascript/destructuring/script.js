// const carro = {
//     marca: 'Fiat',
//     ano: 2018
// }   

// const {marca, ano} = carro
// console.log(marca, ano)


// const clientes = {
//     nome: 'Gabriel',
//     compras: {
//         digitais: {
//             livros: ['Livro 1', 'Livro 2'],
//             videos: ['Video JS', 'Video HTML']
//         },
//         fisicas: {
//             cadernos: ['Caderno 1']
//         }
//     }
// }

// const {digitais, fisicas, digitais: {livros, videos}} = clientes.compras

// console.log(digitais.videos)

// const cliente = {
//     nome: 'Gabriel',
//     compras: 10
// }

// const {nome: nomeGabriel} = cliente;

// console.log(nomeGabriel)


// const frutas = ['Banana', 'Uva', 'Morango'];

// const [primeiro, segunda, terceiro] = frutas

// const handleKeyBoard = ({key}) => {
//     console.log(key)
// }



// document.addEventListener('keyup', handleKeyBoard)



// // Extraia o backgroundColor, color e margin do btn
// const btn = document.querySelector('button');
// const btnStyles = getComputedStyle(btn);

// const {backgroundColor, color, margin} = btnStyles
// console.log(backgroundColor, color, margin)

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]

console.log(cursoInativo)
console.log(cursoAtivo)



const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
  }
  
  const {cor: bobCor} = cachorro;

  console.log(bobCor)