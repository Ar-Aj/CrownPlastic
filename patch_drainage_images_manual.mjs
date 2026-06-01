import fs from 'fs';

let tsFile = fs.readFileSync('src/config/productDetails/drainageData.ts', 'utf8');

// Function to safely replace the image lines based on name
const patchArray = (block, mappings, buildReplacement) => {
    let newBlock = block;
    mappings.forEach(m => {
        // Find the exact line with the name, then find the image line to replace within that object
        // Use a regex that precisely targets the object containing this exact name
        // We escape special regex characters from the targetName
        const escapedName = m.targetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const pattern = new RegExp(`(name:\\s*['"]${escapedName}['"][\\s\\S]*?image:\\s*)(['"].*?['"])(,)`, 'g');
        
        let replacedCount = 0;
        newBlock = newBlock.replace(pattern, (match, prefix, imageString, suffix) => {
            if (replacedCount === 0) { // replace only first occurrence just in case
                replacedCount++;
                return prefix + buildReplacement(m) + suffix;
            }
            return match;
        });

        if (replacedCount === 0) {
            console.log(`WARNING: Could not find mapping for ${m.targetName}`);
        }
    });
    return newBlock;
};

// -----------------------------------------------------
// 1329 Mappings
// -----------------------------------------------------
const greyBase = '/images/fittings/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/';
const oliveBase = '/images/fittings/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/';

const mappings1329 = [
    { targetName: "ACCESS CAP/CLEAN OUT", grey: "accesscap.png", olive: "accesscap3.png" },
    { targetName: "ACCESS/DOOR TEE 87.5°", grey: "accessdoortee87.5.png", olive: "accessdoortee87.5.png" },
    { targetName: "ACCESS/DOOR ELBOW 90°", grey: "accesselbow90.png", olive: "accesselbow90.png" },
    { targetName: "ELBOW 45°", grey: "elbow45.png", olive: "elbow45.png" },
    { targetName: "ELBOW 90° MALE/FEMALE", grey: "elbow90malefemale.png", olive: "elbow90malefemale.png" },
    { targetName: "FEMALE THREADED SOCKET", grey: "femalesocket.png", olive: "femalesocket.png" },
    { targetName: "FEMALE THREADED ELBOW", grey: "femalethreadedelbow.png", olive: "femalethreadedelbow.png" },
    { targetName: "ELBOW 90°", grey: "grey-elbow90.png", olive: "olive-elbow90.png" },
    { targetName: "INSPECTION PORT/ DOOR SOOKET", grey: "inspectiondoorsocket.png", olive: "inspectiondoorsocket.png" }, // accounting for the typo in the file!
    { targetName: "PARAPET ROOF DRAIN", grey: "parapetfloordrain.png", olive: "parapetfloordrain.png" },
    { targetName: "REDUCER BUSH/SOCKET", grey: "reducerbush.png", olive: "remove_the_side_202604082341.png" },
    { targetName: "ROOF DRAIN", grey: "roofdrain.png", olive: "roofdrain.png" },
    { targetName: "SOCKET/COUPLER", grey: "socketcoupler.png", olive: "socketcoupler.png" },
    { targetName: "TEE 87.5°", grey: "tee87.5.png", olive: "tee87.5.png" },
    { targetName: "TEE 87.5° MALE/FEMALE", grey: "tee87.5malefemale.png", olive: "tee87.5malefemale.png" },
    { targetName: "VENT COWL", grey: "ventcap.png", olive: "ventcap.png" },
    { targetName: "Y - 45°/SKEW TEE", grey: "y45skew.png", olive: "y45skew.png" }
];

const build1329 = (m) => {
    const gPath = greyBase + m.grey;
    const oPath = oliveBase + m.olive;
    // NOTE: Add a comma after image path since suffix will go at the end of colorVariants!
    return `'${gPath}',\n      colorVariants: { grey: '${gPath}', olive: '${oPath}' }`;
};

// -----------------------------------------------------
// 1401 Mappings
// -----------------------------------------------------
const orangeBase = '/images/fittings/UPVC Drainage Fittings BS EN 1401/orange/';

const mappings1401 = [
    { targetName: "ACCESS CAP/CLEAN OUT", file: "accesscap.png" },
    { targetName: "ACCESS/DOOR ELBOW 90°", file: "accesselbow90.png" }, // mapped to "closest matching fitting" based on user instruction
    { targetName: "ELBOW 45°", file: "elbow45.png" },
    { targetName: "ELBOW 90°", file: "elbow90.png" },
    { targetName: "REDUCER BUSH/SOCKET", file: "reducerbush.png" },
    { targetName: "SOCKET/COUPLER", file: "socketcoupler.png" },
    { targetName: "ΤΕΕ 87.5°", file: "tee87.5.png" }, // accounting for the weird Greek T in "ΤΕΕ" from the print_names script
    { targetName: "Y - 45°/SKEW TEE", file: "y45skew.png" }
];

const build1401 = (m) => {
    return `'${orangeBase}${m.file}'`;
};

// -----------------------------------------------------
// Execution
// -----------------------------------------------------

// For freshness, try to remove previously injected colorVariants first so it doesn't leave duplicates!
tsFile = tsFile.replace(/colorVariants:\s*\{[\s\S]*?\},\n?/g, ''); // cleanly strip old colorVariants

const parts = tsFile.split('export const bsEn1401Fittings');
if (parts.length >= 2) {
    parts[0] = patchArray(parts[0], mappings1329, build1329);
    parts[1] = patchArray(parts[1], mappings1401, build1401);
    const finalResult = parts.join('export const bsEn1401Fittings');
    fs.writeFileSync('src/config/productDetails/drainageData.ts', finalResult);
    console.log("Success! Hardcoded mappings fully applied to drainageData.ts.");
} else {
    console.error("Critical failure: Could not find export const bsEn1401Fittings boundary.");
}
