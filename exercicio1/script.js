/* Exercicio 1

a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

b) Declare uma função que imprima a tabuada do 6. Chame esta função.

c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__
*/

//a)
// function chamada(nome){
//     console.log(`Olá, ${nome}!`)
// }

// chamada(prompt("Digite o seu nome:"))

const chamada = (nome) =>{
    console.log(`Olá, ${nome}!`)
}
chamada(prompt("Digite o seu nome:"))

console.log("-----------------------------")

//b)
// const tabuadaNumb = (num) =>{
//     for(let i = 0; i <= 10; i++){
//         console.log(`${num} X ${i} = ${i*num}`)
//     }
// }
// tabuadaNumb(6)

function tabuadaNumb(num){
    for(let i = 0; i <= 10; i++){
        console.log(`${num} X ${i} = ${i*num}`)
    }
}
tabuadaNumb(6)

// console.log("----------------------------")
