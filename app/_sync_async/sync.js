const fs = require('fs');

// Synchronous
console.log('Start');

fs.writeFileSync('test.txt', 'Hello World');

console.log('End');