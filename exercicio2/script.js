/*Exercicio 2

Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado.
Invoque a função e imprima no console o resultado.

b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

c) Uma função que receba um número e imprima se ele é par ou não

d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
juntamente com uma versão dela contendo apenas letras maiúsculas.

*/

//a)
function soma(num1, num2){
    return num1 + num2
}
console.log(soma(15, 12))
//b)
function numero(num1, num2){
    let primeiroMaior = num1 > num2
    return primeiroMaior
}
console.log(numero(3, 10))
//c)
function numeroPar(num){
    if(num % 2 == 0){
        console.log(`O numero ${num} é PAR!`)
    } else{
        console.log(`O numero ${num} é IMPAR!`)
    }
}
numeroPar(6)
//d)
const menssagem = (String) =>{
    console.log(String.length)
    console.log(String.toUpperCase())
}
menssagem(prompt("Digite uma frase:"))