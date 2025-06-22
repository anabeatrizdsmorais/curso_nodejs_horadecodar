const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Qual é o seu nome? ', (nome) => {
    if(nome === "Ana"){
        console.log(`Olá ${nome}!`);
    } else {
        console.log(`Olá ${nome}! Você não é a Ana.`);
    }
    readline.close();
})