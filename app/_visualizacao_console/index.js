const chalk = require('chalk');

// const nota = 9;
// console.log(chalk.green("Parabéns você passou!"));
console.log(chalk.blue('Hello world!'));
const nota = 8;

if (nota >= 7) {
    console.log(chalk.green.bold("Parabéns, você passou!"));
} else {
    //background vermelho e cor preta
    console.log(chalk.bgRed.black("Você precisa fazer a prova final!"));
}