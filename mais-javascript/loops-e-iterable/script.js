// const frutas = ['Banana', 'Morango', 'Uva'];
// const frase = 'Isso é JavaScript';

// for(const fruta of frutas){
//   console.log(fruta)
// }

// // fetch('https://pokeapi.co/api/v2/pokemon/')
// // .then(({headers}) => console.log(headers));

// const bntUnico = document.querySelector('button')
// const btnStyles = getComputedStyle(bntUnico)

// for(const style of btnStyles) {
//   console.log(`${style}: ${btnStyles[style]}`)
// }


// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const itens = document.querySelectorAll('li')
for(const item of itens) {
  item.classList.add('teste')
  console.log(item)
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const valueWindow in window){
  console.log(`${valueWindow}: ${window[valueWindow]}`)
}