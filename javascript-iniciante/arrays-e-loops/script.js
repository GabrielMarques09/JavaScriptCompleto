

for (var numero = 1; numero <= 4; numero++){
  console.log(numero);
}

var i = 0;
while (i <= 4){
  console.log(i);
  i++;
}

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
for (var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4'){
    break;
  }
}



// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCopas = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilCopas.forEach(function(c){
  console.log(`Brasil ganhou a copa de ${c}`)
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (var i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
  if(frutas[i] === 'Pera'){
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];