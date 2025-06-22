const minimist = require('minimist');

//modulo externo
const args = minimist(process.argv.slice(2));

//modulo interno
const soma = require('./soma').soma

soma(2,2)

const a = parseInt(args['a']);
const b = parseInt(args['b']);

//node index.js --a=10 --b=20
soma(a,b)