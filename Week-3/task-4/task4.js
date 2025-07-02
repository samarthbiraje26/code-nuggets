const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const today = new Date().toISOString().split('T')[0]; 

const fileName = `${today}.txt`;

rl.question('Enter your note: ', (note) => {
    fs.appendFileSync(fileName, `${note}\n`, { flag: 'a' });
    console.log(`Note appended to ${fileName}`);
    rl.close();
});