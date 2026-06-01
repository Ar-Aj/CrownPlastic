const fs = require('fs');
let content = fs.readFileSync('src/config/productDetails/drainageData.ts', 'utf8');

const regex = /name:\s*'([^']+)'[\s\S]*?table:\s*\{\s*id:\s*'([^']+)',(\s*)columns:/g;

content = content.replace(regex, (match, name, id, space) => {
    // If it already has title somehow, don't break
    if (match.includes('title:')) return match;
    
    // Replace with title added
    return `name: '${name}'` + match.substring(`name: '${name}'`.length).replace(
        `id: '${id}',${space}columns:`, 
        `id: '${id}',${space}title: '${name}',${space}columns:`
    );
});

fs.writeFileSync('src/config/productDetails/drainageData.ts', content);
console.log('SUCCESS');
