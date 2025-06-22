const fs = require('fs');
console.log('Start');

fs.writeFile('test_1.txt', 'Hello World 2', function (err) {
    setTimeout(function () {
        console.log('Arquivo criado');
    }, 1000)
});

console.log('End');