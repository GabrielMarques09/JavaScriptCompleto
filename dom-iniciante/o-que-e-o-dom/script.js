const href = window.location.href;
console.log(href);

if (href === 'http://127.0.0.1:5500/o-que-e-o-dom/'){
  console.log('é igual');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callbackh1(){
  console.log('Clicou em: ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);

// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.azul');

// Retorne a linguagem do navegador
const navegador = window.navigator.language;
console.log(navegador);
// Retorne a largura da janela 
const largura = window.innerWidth;
console.log(largura);
