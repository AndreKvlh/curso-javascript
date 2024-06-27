function criarTabuada() {
    var inputNumero = document.querySelector('#numero')
    var inputTabuada = document.querySelector('#tabuada')

    if (inputNumero.value == '') {
        alert('ERRO! Favor preencher um número para calcular a tabuada!')
    } else {
        var numero = Number(inputNumero.value)
        inputTabuada.innerHTML = ''
        for (var i = 1; i <= 10; i++) {
            var multi = numero * i
            inputTabuada.innerHTML += `<option>${numero} X ${i} = ${multi}</option>`
        }
    }
}