const x = "10" //da erro
const y = 10 //n da error

if(!Number.isInteger(y)){
    throw new Error("Não é um número inteiro")
}

console.log("Continuando o código..")