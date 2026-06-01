const fs = require('fs');
let code = fs.readFileSync('src/config/productDetails/pvcHighPressureFittingsData.ts', 'utf8');

// 1. Delete UNION objects entirely
function removeBlock(str, idSubstr) {
    const idx = str.indexOf(idSubstr);
    if (idx === -1) return str;
    
    let start = -1;
    for (let i = idx; i >= 0; i--) {
        if (str[i] === '{') {
            start = i;
            break;
        }
    }
    
    let depth = 1;
    let end = -1;
    for (let i = start + 1; i < str.length; i++) {
        if (str[i] === '{') depth++;
        if (str[i] === '}') depth--;
        if (depth === 0) {
            end = i;
            break;
        }
    }
    
    if (start !== -1 && end !== -1) {
        let removeEnd = end + 1;
        while(str[removeEnd] === ' ' || str[removeEnd] === '\n' || str[removeEnd] === '\r') removeEnd++;
        if (str[removeEnd] === ',') removeEnd++;
        return str.substring(0, start) + str.substring(removeEnd);
    }
    return str;
}

code = removeBlock(code, "id: 'union-din-8063'");
code = removeBlock(code, "id: 'union-bs-en-1452-3'");

const dinMap = {
    'elbow-90': 'elbow-90.png',
    'elbow-45': 'elbow-45.png',
    'female-elbow-90': 'female-elbow-90.png',
    'socket-coupler': 'socket-coupler.png',
    'reducer-bush-socket': 'reducer-bush.png',
    'male-threaded-adaptor-socket-nipple-socket': 'male-threaded-adaptor.png',
    'female-threaded-adaptor-socket': 'female-threaded-adaptor.png',
    'equal-tee': 'equal-tee.png',
    'female-threaded-tee': 'female-threaded-tee.png',
    'reducing-tee': 'reducing-tee.png',
    'female-reducer-bush': 'female-reducer-bush.png',
    'end-cap': 'end-cap.png'
};

const bsEnMap = {
    'elbow-90': 'elbow-90.png',
    'elbow-45': 'elbow-45.png',
    'female-elbow-90': 'female-elbow-90.png',
    'socket-coupler': 'socket-coupler.png',
    'reducer-bush-socket': 'reducer-bush.png',
    'male-threaded-adaptor-socket-nipple-socket': 'male-threaded-adaptor.png',
    'female-threaded-adaptor-socket': 'female-threaded-adaptor.png',
    'equal-tee': 'equal-tee.png',
    'reducing-tee': 'reducing-tee.png',
    'female-threaded-reducing-tee': 'female-threaded-tee.png',
    'female-threaded-equal-tee': 'female-threaded-tee.png',
    'female-threaded-reducer-bush': 'female-reducer-bush.png',
    'flanges-with-stub': 'Flange-with-stub.png',
    'hex-nipple': 'hex-nipple.png',
    'end-cap': 'end-cap.png'
};

Object.keys(dinMap).forEach(key => {
    const id = `id: '${key}--din-8063'`;
    const altRegexId = `id: '${key}-din-8063'`;
    const imagePath = `/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/${dinMap[key]}`;
    
    let regex = new RegExp(`(${id.replace(/'/g, "\\'")}[\\s\\S]*?image:\\s*')([^']+)(')`, 'g');
    code = code.replace(regex, `$1${imagePath}$3`);

    let regex2 = new RegExp(`(${altRegexId.replace(/'/g, "\\'")}[\\s\\S]*?image:\\s*')([^']+)(')`, 'g');
    code = code.replace(regex2, `$1${imagePath}$3`);
});

Object.keys(bsEnMap).forEach(key => {
    const id = `id: '${key}-bs-en-1452-3'`;
    const altRegexId = `id: '${key}--bs-en-1452-3'`;
    const imagePath = `/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/${bsEnMap[key]}`;
    
    let regex = new RegExp(`(${id.replace(/'/g, "\\'")}[\\s\\S]*?image:\\s*')([^']+)(')`, 'g');
    code = code.replace(regex, `$1${imagePath}$3`);
    
    let regex2 = new RegExp(`(${altRegexId.replace(/'/g, "\\'")}[\\s\\S]*?image:\\s*')([^']+)(')`, 'g');
    code = code.replace(regex2, `$1${imagePath}$3`);
});

fs.writeFileSync('src/config/productDetails/pvcHighPressureFittingsData.ts', code);
console.log('SUCCESS');
