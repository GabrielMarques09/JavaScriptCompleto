// // Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// // crie um formulário onde o usuário pode digitar o cep
// // e o endereço completo é retornado ao clicar em buscar

// const inputCep = document.querySelector('.cep');
// const btnCep = document.getElementById('btnCep');
// const resultadoCep = document.querySelector('.resultadoCep');

// btnCep.addEventListener('click', handleClick)

// function handleClick(event) {
//     event.preventDefault();
//     const cep = inputCep.value;
//     buscaCep(cep)
// }

// function buscaCep(cep) {
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//     .then(response => response.json())
//     .then(body => {
//         resultadoCep.innerText = body.logradouro || body.localidade
//     })
// }

// // Utilizando a API https://blockchain.info/ticker
// // retorne no DOM o valor de compra da bitcoin and reais.
// // atualize este valor a cada 30s

// const resultBtc = document.querySelector('.btc')

// function fetchBtn() {
//     fetch('https://blockchain.info/ticker').then(response => response.json()).then(body => {
//         resultBtc.innerText = ('R$: '+ body.BRL.buy).replace('.', ',')
//     })
// }

// //setInterval(fetchBtn, 1000 * 30 )

// fetchBtn();



// // Utilizando a API https://api.chucknorris.io/jokes/random
// // retorne uma piada randomica do chucknorris, toda vez que
// // clicar em próxima

// const piadaP = document.querySelector('.piada')
// const btnPiada = document.querySelector('.proximaPiada')


// function puxarPiada() { 
//     fetch('https://api.chucknorris.io/jokes/random').then(r => r.json()).then(piada => {
//         piadaP.innerText = piada.value
//     })
// }

// btnPiada.addEventListener('click', puxarPiada)

// puxarPiada()


const btnTabela = document.querySelector('.mostrarUsuarios')
btnTabela.addEventListener('click', fetchTest)

function fetchTest() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(body => {
        let table = document.getElementById("myTable");
        btnTabela.classList.add('disable')
        for(let i = 0; i < body.length; i++){
            let row = table.insertRow(i+1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);

            cell1.innerHTML = body[i].id
            cell2.innerHTML = body[i].name
            cell3.innerHTML = body[i].username
            cell4.innerHTML = body[i].website
        }
        
        document.querySelector('.mostrarUsuarios').disabled = true;
    })
}

