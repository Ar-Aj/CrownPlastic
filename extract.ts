
import * as fs from 'fs';
import * as path from 'path';

const configDir = path.join(process.cwd(), 'src/config/productDetails');

const files = [
  'upvcDrainageFittingsData.ts',
  'pvcHighPressureFittingsData.ts',
  'ductData.ts',
  'sch40Data.ts',
  'pprData.ts',
  'hdpeData.ts',
  'pexData.ts',
  'fabricationsData.ts'
];

const results = [];

files.forEach(file => {
  const filePath = path.join(configDir, file);
  if (!fs.existsSync(filePath)) {
    console.log('Missing file:', file);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  console.log('Found:', file, 'Size:', content.length);
});

