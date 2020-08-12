function Carro() {
  this.marca = 'Marca',
  this.ano = 0,
  this.preco = 0;
}

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.ano = 2015;
fiat.preco = 35000;

const toyota = new Carro();
toyota.marca = 'Toyota';
toyota.ano = 2009;
toyota.preco = 40000;

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca,
  this.preco = precoFinal;
}

const renault = new Carro2('Renault', 3000);