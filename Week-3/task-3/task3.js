const fs = require('fs');

const content = fs.readFileSync('text.txt', 'utf8');

const words = content.toLowerCase().split(/\W+/);

const count = words.filter(word => word === 'Node').length;

fs.writeFileSync('node_count.txt', `The word "Node" appears ${count} times.`);

console.log('Count written to node_count.txt');