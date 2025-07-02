const fs = require('fs');

const content = fs.readFileSync('names.txt', 'utf8');

const names = content.trim().split('\n').reverse();

fs.writeFileSync('reversed_names.txt', names.join('\n'));

console.log('Names reversed and written to reversed_names.txt');