//prática guiada 1
//a) utilicando if aninhado
/*
const idadeDependente = Number(prompt(`Qual é a idade da pessoa dependente?`))
if (idadeDependente >= 13) {
if (idadeDependente < 18) {
console.log(`Cartão de crédito para Dependente APROVADO!`)
} else {
console.log(`Consulte outras opções do Labank.`)
}
} else {
console.log(`IDADE ABAIXO: consulte outras opções do Labank.`)
}



//b)utilizando operador lógico

if(idade >= 13 && idade < 18) {
    console.log(`Cartão de crédito para Dependente APROVADO!`)
} else {
    console.log(`Consulte outras opções do Labank.`)
}


//prática guiada 2
//verificar se a idade é exatamente 13 anos usando if ternário
//SINTAXE DO TERNÁRIO
// condição ? expressao1 : expressao2

idadeDependente === 13 ? console.log(`A idade é 13, já pode ter o cartão`) : console.log(`Verifique as opções do Labank.`)

// prática guiada - 3

const tipoCartao = Number(prompt(`Digite o número correspondente ao cartão escolhido:`))

switch(tipoCartao) {
    case 1:
    console.log(`Cartão de crédito FÁCIL`)
 break
    case 2: 
    console.log(`Cartão de crédito BLACK`)
  break
    case 3:
    console.log(`Cartão de crédito PLATINUM`)
   break
    case 4: 
    console.log(`Cartão de crédito MASTER GOLD`)
    break
    default:
    console.log(`Escolha uma das opções acima.`)
    

}
*/

// exercício de fixacão
// a)

const ehDivisivel = Number(prompt(`Digite um número:`))
/*
if (ehDivisivel % 2 === 0 && ehDivisivel % 3 === 0) {
   console.log(`O némero ${ehDivisivel} é divisivel por 2 e por 3.`)
    // verificando se o número 30 é tenário
    //ehDivisivel === 30 ? console.log(`UFA, ACERTEI!`) : console.log(`Não foi dessa Vez!`)

} else {
    console.log(`O número ${ehDivisivel} não é divisivel por 2 e por 3.`)
}
} else {
    console.log(`O número ${ehDivisivel} não é divisivel por 2 e por 3.`)
}
*/
//b)
if (ehDivisivel % 2 === 0 && ehDivisivel % 3 === 0) {
    console.log(`O número ${ehDivisivel} é divisivel por 2 e por 3.`)
   
    switch (ehDivisivel) {
        case 6:
        console.log(`meia duzia!`)
        break
        case 12:
        console.log(`uma duzia!`)
        break
        case 18:
        console.log(`Tente novamente!`)
        break
        case 24:
        console.log(`Vai tentando!`)
        break
        case 30:
        console.log(`Não foi agora!`)
        break
        default:
        console.log(`O número é maior que 30 ou menor que 6!`)
    } 

}else {
    console.log(`O número ${ehDivisivel} não é divisivel por 2 e por 3.`)
}



