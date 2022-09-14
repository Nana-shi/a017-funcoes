/*Exercicio 3

Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas 
(soma, subtração, multiplicação e divisão).

Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
Por fim, imprima no console o resultado das operações

*/

const soma = (num1, num2) =>{
    return num1 + num2
}

const subtra = (num1, num2) =>{
    return num1 - num2
}

const multi = (num1, num2) =>{
    return num1 * num2
}

const divi = (num1, num2) =>{
    return num1 / num2
}

let num1 = Number(prompt("Digite o primeiro numero:"))
let num2 = Number(prompt("Digite o segundo numero:"))

console.log(`A soma é: ${soma(num1, num2)}, a subtração é: ${subtra(num1, num2)}, a multiplicação é: 
${multi(num1, num2)}, a divisão é: ${divi(num1, num2)} .`)