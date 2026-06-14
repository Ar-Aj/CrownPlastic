const fs = require('fs');
const path = require('path');

const dir = './src/config/productDetails';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

const frMap = {
  "ELBOW 90°": "COUDE 90°",
  "ELBOW 45°": "COUDE 45°",
  "SOCKET/COUPLER": "MANCHON",
  "REDUCER BUSH/SOCKET": "RÉDUCTION",
  "TEE 87.5°": "TÉ 87.5°",
  "Y - 45°/SKEW TEE": "CULOTTE 45°",
  "ELBOW 90° MALE/FEMALE": "COUDE MÂLE/FEMELLE 90°",
  "TEE 87.5° MALE/FEMALE": "TÉ MÂLE/FEMELLE 87.5°",
  "ACCESS CAP/CLEAN OUT": "BOUCHON DE VISITE",
  "ACCESS/DOOR ELBOW 90°": "COUDE AVEC BOUCHON 90°",
  "ACCESS/DOOR TEE 87.5°": "TÉ AVEC BOUCHON 87.5°",
  "FEMALE THREADED ELBOW": "COUDE TARAUDÉ FEMELLE",
  "INSPECTION PORT/ DOOR SOCKET": "TAMPON DE VISITE",
  "VENT COWL": "CHAPEAU DE VENTILATION",
  "FEMALE THREADED SOCKET": "MANCHON TARAUDÉ FEMELLE",
  "PARAPET ROOF DRAIN": "NAISSANCE DE BALCON",
  "ROOF DRAIN": "NAISSANCE DE TOITURE",
  "FLOOR DRAIN/TRAP TYPE - A": "SIPHON DE SOL TYPE - A",
  "FLOOR DRAIN/TRAP TYPE - C": "SIPHON DE SOL TYPE - C",
  "FLOOR DRAIN/TRAP COVER TYPE - A I": "COUVERCLE DE SIPHON TYPE - A I",
  "FLOOR DRAIN/TRAP COVER TYPE - A II": "COUVERCLE DE SIPHON TYPE - A II",
  "FLOOR DRAIN/TRAP COVER TYPE - B": "COUVERCLE DE SIPHON TYPE - B",
  "ΤΕΕ 87.5°": "TÉ 87.5°",
  "GULLY TRAP A": "SIPHON DE COUR A",
  "GULLY TRAP B": "SIPHON DE COUR B",
  "HOPPER TRAP": "SIPHON DE DESCENTE",
  "P TRAP": "SIPHON P",
  "45° ELBOW WITH TWO RUBBER RINGS": "COUDE 45° À DEUX JOINTS",
  "90° ELBOW M/F": "COUDE 90° M/F",
  "REDUCING SKEW TEE M/F": "CULOTTE RÉDUITE M/F",
  "SKEW TEE M/F": "CULOTTE M/F",
  "TEE M/F WITH GASKET": "TÉ M/F À JOINT",
  "REDUCING COUPLER": "MANCHON DE RÉDUCTION",
  "COUPLING": "MANCHON",
  "30° SWEEP WITH SINGLE RUBBER SOCKETS": "COUDE GRAND RAYON 30° À JOINT SIMPLE",
  "90° SWEEP WITH DOUBLE SOCKET RINGS": "COUDE GRAND RAYON 90° À DEUX JOINTS",
  "90° SWEEP WITH SINGLE SOCKET RINGS": "COUDE GRAND RAYON 90° À JOINT SIMPLE",
  "REDUCING TEE M/F": "TÉ RÉDUIT M/F",
  "90° SADDLE BRANCH": "SELLE DE BRANCHEMENT 90°",
  "INSPECTION ELBOW M/F": "COUDE DE VISITE M/F",
  "INSPECTION PORT M/F": "TAMPON DE VISITE M/F",
  "TEE WITH 3 SOCKET RUBBER (EQUAL TEE)": "TÉ ÉGAL À 3 JOINTS",
  "PVC DOOR ELBOW": "COUDE AVEC PORTE PVC",
  "SKEW TEE WITH THREE RUBBER RINGS": "CULOTTE À TROIS JOINTS",
  "DUCT END CAPS": "BOUCHON DE GAINE",
  "DUCT SOCKETS": "MANCHON DE GAINE",
  "DUCT BELLMOUTHS": "PAVILLON DE GAINE",
  "DUCT 90/45° LR BENDS": "COUDE GRAND RAYON GAINE 90/45°",
  "DUCT 90° LIGHTING LR BENDS 4\"": "COUDE GRAND RAYON ÉCLAIRAGE 90° 4\"",
  "DUCT 90° STREET LIGHTING L R BENDS 3\"": "COUDE GRAND RAYON ÉCLAIRAGE PUBLIC 90° 3\"",
  "GRP Bucket": "SEAU SVR",
  "Dry Manholes": "REGARD SEC",
  "UPVC End Cap": "BOUCHON UPVC",
  "UPVC Gully Trap": "SIPHON DE COUR UPVC",
  "UPVC Hopper": "ENTONNOIR UPVC",
  "UPVC Pressure Breaking Manhole": "REGARD BRISE-PRESSION UPVC",
  "UPVC Double Y": "CULOTTE DOUBLE UPVC",
  "UPVC Saddle": "SELLE UPVC",
  "UPVC Sand Trap Bucket": "SEAU DESSABLEUR UPVC",
  "UPVC Segmented Bend": "COUDE SEGMENTÉ UPVC",
  "UPVC Vent Cowl": "CHAPEAU DE VENTILATION UPVC",
  "UPVC Catch Basin": "REGARD AVALOIR UPVC",
  "Roof Outlet": "NAISSANCE DE TOITURE",
  "Pressure Header": "COLLECTEUR DE PRESSION",
  "UPVC Puddle Flange": "COLLERETTE D'ÉTANCHÉITÉ UPVC",
  "Weeping Puddle Flange": "COLLERETTE DE DRAINAGE",
  "FEMALE ELBOW 90°": "COUDE TARAUDÉ FEMELLE 90°",
  "MALE THREADED ADAPTOR/SOCKET/ NIPPLE SOCKET": "EMBOUT FILETÉ MÂLE",
  "FEMALE THREADED ADAPTOR/SOCKET": "EMBOUT TARAUDÉ FEMELLE",
  "EQUAL TEE": "TÉ ÉGAL",
  "FEMALE THREADED TEE": "TÉ TARAUDÉ FEMELLE",
  "REDUCING TEE": "TÉ RÉDUIT",
  "FEMALE REDUCER BUSH": "BOUCHON DE RÉDUCTION FEMELLE",
  "END CAP": "BOUCHON",
  "MALE THREADED ADAPTOR /SOCKET/NIPPLE SOCKET": "EMBOUT FILETÉ MÂLE",
  "FEMALE THREADED REDUCING TEE": "TÉ RÉDUIT TARAUDÉ FEMELLE",
  "FEMALE THREADED EQUAL TEE": "TÉ ÉGAL TARAUDÉ FEMELLE",
  "FEMALE THREADED REDUCER BUSH": "BOUCHON DE RÉDUCTION TARAUDÉ FEMELLE",
  "FLANGES WITH STUB": "BRIDE AVEC COLLET",
  "HEX NIPPLE": "MAMELON HEXAGONAL",
  "REPAIR SOCKET/ CONVERTABLE SOCKET": "MANCHON DE RÉPARATION",
  "FEMALE THREADED ADAPTOR/SOCKET G": "EMBOUT TARAUDÉ FEMELLE G",
  "UNION": "RACCORD UNION",
  "125 ml / 4 Fl. Oz": "125 ml / 4 Fl. Oz",
  "250 ml / 8 Fl. Oz": "250 ml / 8 Fl. Oz",
  "500 ml / 16 Fl. Oz - 1 Pint": "500 ml / 16 Fl. Oz - 1 Pint"
};

let filesUpdated = [];

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Find all name: 'X', and inject nameFr: 'Y', right below it
  // But wait, there might be nameAr: 'Z', so let's just make sure we only inject if nameFr isn't already there
  
  content = content.replace(/(name:\s*'([^']+)'\s*,)(?!\s*nameFr)/g, (match, p1, nameVal) => {
    let fr = frMap[nameVal];
    if (!fr) {
      console.warn('MISSING MAPPING FOR:', nameVal);
      fr = nameVal; // Fallback to same name if missing
    }
    // inject nameFr
    // check what line ending / indentation p1 has. We'll just do a simple replace with indentation
    // Let's get the whitespace right before "name:"
    return `${p1}\n      nameFr: '${fr.replace(/'/g, "\\'")}',`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesUpdated.push(f);
  }
});

console.log("Updated files:", filesUpdated.join(", "));
