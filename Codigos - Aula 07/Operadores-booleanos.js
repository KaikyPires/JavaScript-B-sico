const numero1 = 10
const numero2 = 12

console.log(numero1 == numero2)
console.log(numero1 === "10")
//vai dar false pq com mais iguais compara o tipo tambem, com dois daria true
//funciona com exemplo de baixo tambem
console.log(numero1 != numero2)

console.log(numero1 > numero2)

//Conjuçoes logicas
const idadePessoa1 = 17
const idadePessoa2 = 21

console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18)
console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18)

console.log(!idadePessoa1 >= 18)
