const cpfsList = document.querySelectorAll('.cpf li')

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText)
}

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '')
}

const contruirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCPF = (cpfs) => {
  return cpfs.map(limparCPF).map(contruirCPF)
}

const substituiCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPF(cpfs)

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index]
  })
}

substituiCPFS(cpfsList)


// console.log(limparCPF('048.955.145-95'))
// console.log(contruirCPF('04895514595'))
// console.log(formatarCPF(resultado))