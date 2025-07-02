const fs = require('fs');

const files = fs.readdirSync('projects');
const fileList = files.join('\n');

fs.writeFileSync('project-list.txt', fileList);
console.log('File list written to project-list.txt');