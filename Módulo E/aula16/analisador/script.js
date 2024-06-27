var vetor = []

function adicionarNumero() {
    var inputNumero = document.querySelector('#numero')
    
    if(inputNumero.value == '') {
        alert('ERRO! Favor digitar um número para adicionar a lista.')
    } else if(inputNumero.value < 1 || inputNumero.value > 100) {
        alert('ERRO! Favor digitar um número entre 1 e 100.')
    } else {
        var numeroDig = Number(inputNumero.value)
        if (estaNoVetor(numeroDig)) {
            alert('Número já está incluso na lista!')
        } else {
            vetor.push(numeroDig)
            exibirVetor()
            inputNumero.value = ''
            inputNumero.focus()
        }
    }
}

var inputResultado = document.querySelector('#resultado')

function exibirVetor() {
    var inputVetor = document.querySelector('#numerosAdicionados')
    
    inputVetor.innerHTML = ''
    inputResultado.innerHTML = ''
    for (let pos in vetor) {
        inputVetor.innerHTML += `<option>Número ${vetor[pos]} adicionado</option>`
    }
}

function estaNoVetor(numero) {
    return vetor.indexOf(numero) != -1 ? true : false
}

function exibirResultado() {
    if (vetor.length == 0) {
        alert('ERRO! Favor adicionar no mínimo um valor antes de finalizar.')
    } else {
        inputResultado.innerHTML = ''
        inputResultado.innerHTML += `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>`
        maiorMenor()
        somaMedia()
    }
}

function maiorMenor() {
    var vetorCopia = vetor.slice()
    vetorCopia.sort((a,b) => a - b)
    inputResultado.innerHTML += `<p>O maior valor informado foi ${vetorCopia[vetorCopia.length - 1]}.</p>`
    inputResultado.innerHTML += `<p>O menor valor informado foi ${vetorCopia[0]}.</p>`
}

function somaMedia() {
    var soma = 0
    for (let pos in vetor) {
        soma += vetor[pos]
    }
    var media = soma / vetor.length
    inputResultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    inputResultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}