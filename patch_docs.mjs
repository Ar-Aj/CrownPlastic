import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_PDF_PATHS = {
  UPVC_PRESSURE_PIPES: '/pdfs/UPVC%20PRESSURE%20PIPES.pdf',
  UPVC_DRAINAGE_FITTINGS_1329: '/pdfs/UPVC%20DRAINAGE%20FITTING%20BS%20EN%201329-1%2C2014%20-%20SUPERSEDED%20BS%205255%20AND%20BS4514.pdf',
  UPVC_DRAINAGE_FITTINGS_1401: '/pdfs/UPVC%20DRAINAGE%20FITTINGS%20BS%20EN%201401%20-%20SUPERSEDED%20BS%204660%20AND%20BS%205481.pdf',
  UPVC_DRAINAGE_PIPES: '/pdfs/UPVC%20DRAINAGE%20PIPES.pdf',
  UPVC_DUCT_PIPES: '/pdfs/UPVC%20DUCT%20PIPES%20AND%20ACCESSORIES.pdf',
  PPR_PIPES: '/pdfs/PPR%20PIPES.pdf',
};

const regexMapping = [
  { pattern: /PVC%20HIGH%20PRESSURE%20PIPES%20CATALOGUE\.pdf/g, replace: DOCS_PDF_PATHS.UPVC_PRESSURE_PIPES.replace('/pdfs/', '') },
  { pattern: /UPVC%20DRAINAGE%20FITTING%20BS%20EN%201329-1%202014%20-%20SUPERSEDED%20BS%205255%20%26%20BS%204514\.pdf/g, replace: DOCS_PDF_PATHS.UPVC_DRAINAGE_FITTINGS_1329.replace('/pdfs/', '') },
  { pattern: /UPVC%20DRAINAGE%20FITTINGS%20BS%20EN%201401%20-%20SUPERSEDED%20BS%204660%20%26%20BS%205481\.pdf/g, replace: DOCS_PDF_PATHS.UPVC_DRAINAGE_FITTINGS_1401.replace('/pdfs/', '') },
  { pattern: /UPVC%20DRAINAGE%20PIPES%20CATALOGUE\.pdf/g, replace: DOCS_PDF_PATHS.UPVC_DRAINAGE_PIPES.replace('/pdfs/', '') },
  { pattern: /PVC%20DUCT%20PIPES%20CATALOGUE\.pdf/g, replace: DOCS_PDF_PATHS.UPVC_DUCT_PIPES.replace('/pdfs/', '') },
  { pattern: /PVC%20DUCT%20FITTINGS%20CATALOGUE\.pdf/g, replace: DOCS_PDF_PATHS.UPVC_DUCT_PIPES.replace('/pdfs/', '') },
  { pattern: /PPR%20PIPES%20CATALOGUE\.pdf/g, replace: DOCS_PDF_PATHS.PPR_PIPES.replace('/pdfs/', '') },
  { pattern: /PVC%20HP%20Valves%20Catalogue\s*\(PDF\)/g, replace: 'PVC HP Valves Catalogue (PDF)' },
  { pattern: /\s*downloads:\s*\[\s*\{\s*label:\s*'PEX Pipes Catalogue \(PDF\)',\s*href:\s*'\/pdfs\/PEX%20PIPES%20CATALOGUE\.pdf'\s*\}\s*\],\s*/g, replace: '\n' }
];

const dir = path.join(process.cwd(), 'src', 'config', 'productDetails');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  regexMapping.forEach(mapping => {
    content = content.replace(mapping.pattern, mapping.replace);
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
