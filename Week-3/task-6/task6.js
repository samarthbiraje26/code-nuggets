const fs = require('fs');

// Create backup folder
fs.mkdirSync('backup', { recursive: true });

// Read files in the current folder
const files = fs.readdirSync('.');
files.forEach(file => {
    if (file.endsWith('.txt')) {
        fs.copyFileSync(file, `backup/${file}`);
    }
});
console.log('All .txt files copied to backup folder');