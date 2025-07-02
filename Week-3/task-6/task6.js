const fs = require('fs');

fs.mkdirSync('backup', { recursive: true });

const files = fs.readdirSync('.');
files.forEach(file => {
    if (file.endsWith('.txt')) {
        fs.copyFileSync(file, `backup/${file}`);
    }
});

console.log('All .txt files copied to backup folder');