import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pagesDir = path.join(__dirname, 'pages');
const outputDir = path.join(__dirname, 'src', 'content', 'pages');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const programFiles = [
    'BusinessCertificate.tsx',
    'CaseManagement.tsx',
    'ChildrensBehavioralHealth.tsx',
    'DigitalMarketing.tsx',
    'EarlyChildhoodEducation.tsx',
    'EarlyChildhoodEducationCertificate.tsx',
    'ElderCare.tsx',
    'GeneralStudiesAssociate.tsx',
    'GeneralStudiesCertificate.tsx',
    'HumanServicesAdministration.tsx',
    'HumanServicesCertificate.tsx',
    'ParaprofessionalEducator.tsx',
    'ProjectManagement.tsx'
];

function extractObject(source, varName) {
    const regex = new RegExp(`const\\s+${varName}(?:\\s*:\\s*[\\w\\[\\]]+)?\\s*=\\s*(\\[[\\s\\S]*?\\]);`, 'm');
    const match = source.match(regex);
    if (!match) return [];
    
    let objStr = match[1];
    
    objStr = objStr.replace(/icon:\s*([A-Z][a-zA-Z]+)(?!['"])/g, "icon: '$1'");
    objStr = objStr.replace(/icon:\s*<?[A-Za-z]+Icon\s*\/?>(?!['"])/g, "icon: 'MessageCircle'");
    
    try {
        return eval(`(${objStr})`);
    } catch (e) {
        console.warn(`Failed to parse ${varName}`);
        return [];
    }
}

function extractProp(source, propName) {
    const regex = new RegExp(`${propName}=["'{](.*?)["'}]\\s*(?:\\n|\\w+=|>|\\/)`, 's');
    const match = source.match(regex);
    if (!match) return "";
    
    let val = match[1].trim();
    if (val.startsWith('<>') && val.endsWith('</>')) val = val.substring(2, val.length - 3);
    val = val.replace(/<span[^>]*>/g, '').replace(/<\/span>/g, '');
    val = val.replace(/<p>/g, '').replace(/<\/p>/g, '');
    return val.trim();
}

console.log("Starting Local JSON Migration...");

for (const file of programFiles) {
    const filePath = path.join(pagesDir, file);
    if (!fs.existsSync(filePath)) continue;
    
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(`Processing ${file}...`);

    const courses = extractObject(content, 'courses');
    const outcomes = extractObject(content, 'outcomes');
    let benefits = extractObject(content, 'benefits');
    let stats = extractObject(content, 'stats');
    const faqs = extractObject(content, 'faqs');

    const badge = extractProp(content, 'badge');
    const subtitle = extractProp(content, 'subtitle');
    const tagline = extractProp(content, 'tagline');
    const taglineBody = extractProp(content, 'taglineBody');
    const programName = extractProp(content, 'programName');
    const outcomesIntro = extractProp(content, 'outcomesIntro');
    const pathwayTitle = extractProp(content, 'pathwayTitle');

    const slugStr = file.replace('.tsx', '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    const doc = {
        title: programName || file.replace('.tsx', ''),
        slug: slugStr,
        type: 'program',
        badge: badge || 'Program',
        subtitle: subtitle || 'In as little as one year.',
        tagline: tagline || 'Develop Skills That Get You Hired',
        taglineBody: taglineBody || '',
        benefits: benefits,
        stats: stats,
        courses: courses,
        outcomes: outcomes,
        outcomesIntro: outcomesIntro,
        faqs: faqs,
        pathwayTitle: pathwayTitle || 'Build Toward Your Future',
    };

    fs.writeFileSync(path.join(outputDir, `${slugStr}.json`), JSON.stringify(doc, null, 2));
    console.log(`✅ Success: ${slugStr}.json generated!`);
}

console.log("\nJSON Migration Complete!");
