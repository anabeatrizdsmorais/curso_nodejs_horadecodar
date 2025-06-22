const inquirer = require('inquirer');

inquirer
    .prompt([
    {
        name: 'p1',
        message: 'Qual a sua idade?'
    }, {
        name: 'p2',
        message: 'Qual o seu nome?'
    }]).then((answers) => {
        console.log(`Olá ${answers.p2}, você tem ${answers.p1} anos.`);
    }).catch((err) => {
        console.log(err);
    });