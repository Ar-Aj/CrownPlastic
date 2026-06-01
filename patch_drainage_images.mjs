import fs from 'fs';

let tsFile = fs.readFileSync('src/config/productDetails/drainageData.ts', 'utf8');

const applyMappings = () => {
    const greyBase = '/images/fittings/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/';
    const oliveBase = '/images/fittings/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/';
    
    const targets1329 = {
        "elbow-90": ["grey-elbow90.png", "olive-elbow90.png"],
        "elbow-45": ["elbow45.png", "elbow45.png"],
        "socket-coupler": ["socketcoupler.png", "socketcoupler.png"],
        "tee-87-5": ["tee87.5.png", "tee87.5.png"],
        "y-45-skew": ["y45skew.png", "y45skew.png"],
        "reducer-bush": ["reducerbush.png", "remove_the_side_202604082341.png"],
        "tee-87-5-with-access-door": ["accessdoortee87.5.png", "accessdoortee87.5.png"],
        "access-cap": ["accesscap.png", "accesscap3.png"],
        "vent-cap": ["ventcap.png", "ventcap.png"],
        "female-threaded-elbow": ["femalethreadedelbow.png", "femalethreadedelbow.png"],
        "elbow-90-male-female": ["elbow90malefemale.png", "elbow90malefemale.png"],
        "female-socket": ["femalesocket.png", "femalesocket.png"],
        "inspection-door-socket": ["inspectiondoorsocket.png", "inspectiondoorsocket.png"],
        "roof-drain": ["roofdrain.png", "roofdrain.png"],
        "parapet-roof-drain": ["parapet floordrain.png", "parapet floordrain.png"]
    };

    const parts = tsFile.split('export const bsEn1401Fittings');

    Object.keys(targets1329).forEach(id => {
        const [gName, oName] = targets1329[id];
        const gPath = greyBase + gName;
        const oPath = oliveBase + oName;
        
        // Match only once with no 'g' flag
        const rx = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?image:\\s*)(['"].*?['"])(,)`, '');
        parts[0] = parts[0].replace(rx, `$1'${gPath}'$3\n    colorVariants: { grey: '${gPath}', olive: '${oPath}' },`);
    });

    const orangeBase = '/images/fittings/UPVC Drainage Fittings BS EN 1401/orange/';
    const targets1401 = {
        "elbow-90": "elbow90.png",
        "elbow-45": "elbow45.png",
        "socket-coupler": "socketcoupler.png",
        "tee-87-5": "tee87.5.png",
        "y-45-skew": "y45skew.png",
        "reducer-bush": "reducerbush.png",
        "access-cap": "accesscap.png",
        "access-elbow-90": "accesselbow90.png"
    };

    Object.keys(targets1401).forEach(id => {
        const oName = targets1401[id];
        const oPath = orangeBase + oName;
        
        // Match only once
        const rx = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?image:\\s*)(['"].*?['"])(,)`, '');
        parts[1] = parts[1].replace(rx, `$1'${oPath}'$3`);
    });

    tsFile = parts.join('export const bsEn1401Fittings');
    fs.writeFileSync('src/config/productDetails/drainageData.ts', tsFile);
};

applyMappings();
console.log("Patched drainageData.ts with fixed id targeting safely");
