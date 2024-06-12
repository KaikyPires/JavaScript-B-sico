const prompt = require("readline-sync")
const nome = String(prompt.question("Qual o seu nome?"))
const idade = Number(prompt.question("Qual a sua idade?"))

//Estrutura de fluxo
    if(idade >= 18){
        console.log(nome,"é maior de idade")
    }
    else{
        console.log(nome,"é menor de idade")
    }
