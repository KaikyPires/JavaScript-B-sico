const prompt = require("readline-sync")

const idade = prompt.question("Qual a sua idade?")//Tudo é string


const idadeNumber = Number(idade)
console.log("idade informada é" ,idadeNumber);

//Conversão manual

console.log(String(10));

console.log(Boolean(2));//todo numero menos o 0 vai dar true

//Coerção inplicita

console.log(1 + "1"); // "11" - O número 1 é convertido para string e concatenado.
console.log("2" + 3); // "23" - O número 3 é convertido para string e concatenado.
console.log(4 + 5 + "6"); // "96" - Primeiro, 4 e 5 são somados (9), depois concatenado com a string "6".
console.log("7" + 8 + 9); // "789" - A string "7" é concatenada com os números 8 e 9, que são convertidos para string.
console.log(10 + "20" + 30); // "102030" - O número 10 é convertido para string e concatenado com "20" e "30".
console.log("5" + (1 + 2)); // "53" - Primeiro, 1 e 2 são somados (3), depois concatenado com a string "5".
console.log("Hello" + 5); // "Hello5" - O número 5 é convertido para string e concatenado.

console.log(10 - "5"); // 5 - A string "5" é convertida para número e subtraída de 10.
console.log("20" - 3); // 17 - A string "20" é convertida para número e 3 é subtraído.
console.log(15 - "5" - 2); // 8 - As strings são convertidas para números e a subtração é realizada.
console.log("30" - "10"); // 20 - Ambas strings são convertidas para números e subtraídas.
console.log("40" - (10 + 5)); // 25 - A expressão dentro dos parênteses é avaliada primeiro.
console.log("50" - 5 + "5"); // "455" - 50 e 5 são subtraídos (45), depois concatenado com a string "5".
