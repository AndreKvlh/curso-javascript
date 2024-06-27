let num = [5,8,2,9,3]
let pesq = 4
let pos = num.indexOf(pesq) != -1 ? `na posição ${num.indexOf(pesq)}` : 'em nenhuma posição'
console.log(`O valor ${pesq} está ${pos}`)