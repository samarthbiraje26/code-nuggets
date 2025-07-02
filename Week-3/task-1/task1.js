const fs = require('fs');


const name = 'Samarth Biraje'; 
fs.writeFileSync('name.txt', name);
console.log(name);


const content = fs.readFileSync('name.txt', 'utf8');
console.log('Content of name.txt:', content);


const age = '21';
fs.appendFileSync('name.txt', age);
console.log('Age appended to name.txt');


const updatedContent = fs.readFileSync('name.txt', 'utf8');
console.log('Updated content of name.txt:', updatedContent);


fs.mkdirSync('users');
fs.writeFileSync('users/hello.txt', 'Hello!');
console.log('users folder created and hello.txt written');


const files = fs.readdirSync('users');
console.log('Files in users folder:', files);


fs.unlinkSync('name.txt');
console.log('name.txt deleted');