function contar() {
    //Obtendo os inputs do usuário
    var inputInicio = document.querySelector('#inicio')
    var inputFim = document.querySelector('#fim')
    var inputPasso = document.querySelector('#passo')
    var inputResultado = document.querySelector('#resultado')

    //Verificando se os campos não estão vazios e se 
    //o valor de passo não é zero
    if (inputInicio.value == '' || inputFim.value == '' || inputPasso.value == '') {
        alert('ERRO! Favor preencher todos os campos!')
    } else {
        //Obtendo os valores de inicio, fim e passo
        var inicio = Number(inputInicio.value)
        var fim = Number(inputFim.value)
        var passo = inputPasso.value == 0 ? 1 : Math.abs(Number(inputPasso.value))

        var resultado = '<p>Contagem: '

        if (inicio <= fim) {
            for (var i = inicio; i <= fim; i += passo) {
                resultado += `${i} &#x1F449; `
            }
        } else {
            for (var i = inicio; i >= fim; i -= passo) {
                resultado += `${i} &#x1F449; `
            }
        }
        resultado += ` &#x1F3C1;</p>`
        inputResultado.innerHTML = resultado
    }
}