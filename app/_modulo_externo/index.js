const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args["nome"];
const profissao = args["profissao"];

//node index.js --nome=biatriz
//node index.js --nome=biatriz --profissao=Desenvolvedfora
console.log(`Olá ${nome}, seja bem vindo! Sua profissao é ${profissao}`);