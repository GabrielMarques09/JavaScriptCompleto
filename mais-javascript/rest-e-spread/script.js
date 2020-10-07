function perimetroForma(...listaArgumentos) {
    // const argArray = Array.from(arguments)
    // argArray.forEach(arg => {
    //   console.log(arg)
    // })
    console.log(listaArgumentos)
    listaArgumentos.forEach(item => console.log(item))
    // return lado * totalLados;
  }
  
  console.log(perimetroForma(10, 4, 50, 'oi')) // 40
  // console.log(perimetroForma(10))// NaN
   
   
  function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => {
      console.log(ganhador + ' ganhou um ' + premio)
    });
  }
  
  anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria', 'Gabi');