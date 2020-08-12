const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'teste');
// menu.classList.remove('ativo');
console.log(menu.classList);

if (menu.classList.contains('ativo')){
  menu.classList.add('possui-ativo');
} else {
  menu.classList.add('nao-possui-ativo');
}

menu.className += ' vermelho';

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');
console.log(img.getAttribute('alt'));

const srcImg = img.getAttribute('alt');
img.setAttribute('alt', 'Uma Raposa');

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

console.log(srcImg);

const carro = {
  portas: 4,
  andar: function(km){
    console.log(`Andou ${km} km`);
  }
}

// Adicione a classe ativo a todos os itens do menu
  const itensMenu = document.querySelectorAll('.menu a');
  itensMenu.forEach((item) => {
    item.classList.add('ativo')
  });
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo')
});

itensMenu[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt

// Modifique o href do link externo no menu

