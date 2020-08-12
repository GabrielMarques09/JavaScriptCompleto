const listaAnimais = document.querySelector('.animais-lista');

console.log(listaAnimais.scrollHeight); //tamanho total da scroll

console.log(listaAnimais.clientHeight); // tamanho total sem scroll 

const animaisTop = listaAnimais.offsetTop;

console.log(animaisTop);

const primeirah2 = document.querySelector('h2');

const h2left = primeirah2.offsetLeft;

console.log(h2left);

const rect = primeirah2.getBoundingClientRect();

console.log(rect.top);

if (rect.top < 0) {
  console.log('Passou do Elemento - Animar');
}

console.log(
  window.innerWidth, 
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset

);

const small = window.matchMedia('(max-width: 600px)').matches;
console.log(small);

if (small){
  console.log('Usuario Mobile');
} else {
  console.log('Usuario Desktop');
}

//Exercicio

// Verifique a distância da primeira imagem
// em relação ao topo da página
  const primeiraImg = document.querySelector('img');
  console.log(primeiraImg);

  const topo = primeiraImg.offsetTop;
  console.log(topo);
// Retorne a soma da largura de todas as imagens
function somaImagens(){
  const todasImg = document.querySelectorAll('img');
  let soma = 0;
  todasImg.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}
window.onload = function(){
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if (linkWidth >= 48 && linkHeight >= 48){
      console.log(link, ' Possui boa acessibilidade');
    } else {
      console.log(link, ' Não possui acessibilidade');
    }
  });

  console.log(links);
  
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
 const browserSmall = window.matchMedia('(max-width: 720px)').matches;

 if (browserSmall) {
   const menu = document.querySelector('.menu');
   menu.classList.add('menu-mobile');
   
 }