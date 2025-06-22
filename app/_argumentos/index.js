//nome

console.log(process.argv); 
//'C:\\Program Files\\nodejs\\node.exe',
//'C:\\Users\\abeat\\Documents\\programação\\PROGRAMAÇÃO - PROJETOS\\aula nodejs\\app\\_argumentos\\index.js',
//'name=Ana'

const args = process.argv.slice(2);
console.log(args);

const nome = args[0].split('=')[1];
console.log(nome);

const idade = args[1].split('=')[1];
console.log(idade);

// node .\index.js nome=biatriz
console.log(`O nome dele é ${nome} e ele tem ${idade} anos`);