// async function puxarDados() {
//     try {
//         const responseDados = await fetch('./dados.json')
//         const dadosJson = await responseDados.json()
//         document.body.innerText = dadosJson.aula
//     } catch(erro) {
//         console.log(erro)
//     }
    
// }
async function puxarDados() {
    const responseDados = await fetch('./dados.json')
    const responseClientes = await fetch('./clientes.json')

    const dadosJson = await (await responseDados).json();
    const clientesJson = await (await responseClientes).json();

    console.log(dadosJson)
    console.log(clientesJson)
}

puxarDados()