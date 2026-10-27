const fs = require('fs');
const path = require('path');

const svgFolder = path.join(__dirname, 'src', 'images', 'tops');
const outputFolder = path.join(__dirname, 'extracted-images');

if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder, { recursive: true });

fs.readdirSync(svgFolder).forEach(file => {
    if (path.extname(file).toLowerCase() === '.svg') {
        const svgContent = fs.readFileSync(path.join(svgFolder, file), 'utf8');
        const match = svgContent.match(/data:image\/jpeg;base64,([^"']+)/);
        
        if (match && match[1]) {
            const buffer = Buffer.from(match[1], 'base64');
            const outputFileName = `${path.basename(file, '.svg')}.jpg`;
            fs.writeFileSync(path.join(outputFolder, outputFileName), buffer);
            console.log(`Extracted: ${outputFileName}`);
        } else {
            console.log(`Could not find base64 data in: ${file}`);
        }
    }
});

console.log('Extraction complete!');