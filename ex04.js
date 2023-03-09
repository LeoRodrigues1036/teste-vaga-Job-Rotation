const SP = 67836.43
const RJ = 36678.66
const MG = 29229.88
const ES = 27165.48
const Outros = 19849.53

let total = SP+RJ+MG+ES+Outros

function calculo(numero){
     let x = numero * 100 / total
     return x
}

let sp = calculo(SP)
let rj = calculo(RJ)
let mg = calculo(MG)
let es = calculo(ES)
let outros =calculo(Outros)

console.log(`${sp.toFixed(2)}%`)
console.log(`${rj.toFixed(2)}%`)
console.log(`${mg.toFixed(2)}%`)
console.log(`${es.toFixed(2)}%`)
console.log(`${outros.toFixed(2)}%`)