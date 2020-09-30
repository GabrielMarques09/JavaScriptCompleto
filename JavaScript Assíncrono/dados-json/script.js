fetch('./dados.json')
.then(r => r.json())
.then(jsonReq => {
    jsonReq.forEach(materia => {
        console.log(materia.aula)
    });
})