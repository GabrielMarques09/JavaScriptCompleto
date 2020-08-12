const img = document.querySelector('img');

 function callback() {
 console.log('clicou');
}

// img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}

//animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event);
}

linkExterno.addEventListener('click', handleLinkExterno);


const h1 = document.querySelector('h1');

const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.target);
}

imgs.forEach((img) => {
  console.log(img);
  img.addEventListener('click', handleImg)
});
