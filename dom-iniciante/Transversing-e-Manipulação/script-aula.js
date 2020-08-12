const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');
console.log(h1.innerHTML);
console.log(h1.outerHTML);

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement);

console.log(lista.nextElementSibling);

console.log(lista.children[--lista.children.length]); //ultimo item da lista

console.log(lista.childNodes);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

animais.appendChild(titulo);