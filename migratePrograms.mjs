import fs from 'fs';
import path from 'path';
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load .env.local
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env.local') });

// Sanity Client
const client = createClient({
  projectId: "xcg6w47a",
  dataset: 'production',
  token: "skzlExMiusDioOe0KvQ3GiZDMa6bxZeEr6DeEhVFL8Ql8UrbusYhqsn8D6Df6YuoCIs4I9JtC7ndmBwoeSoEmqG7gYtqULQZXi1WZMMlA253nIwxgey3Ufvp2tGkdLSoARvHCsg95yFwjnOseArclHjwYvhxOyalO3EdYZ1RQHfkl4HBZpfx",
  useCdn: false,
  apiVersion: '2024-04-08'
});

const pagesDir = path.join(__dirname, 'pages');
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
    // Looks for `const varName = [...];` or `const varName: Type = [...];`
    const regex = new RegExp(`const\\s+${varName}(?:\\s*:\\s*[\\w\\[\\]]+)?\\s*=\\s*(\\[[\\s\\S]*?\\]);`, 'm');
    const match = source.match(regex);
    if (!match) return [];
    
    let objStr = match[1];
    
    // Convert unquoted icon references like `icon: Clock` to `icon: 'Clock'`
    objStr = objStr.replace(/icon:\s*([A-Z][a-zA-Z]+)(?!['"])/g, "icon: '$1'");
    // Support custom icons e.g. `<MessageCircleIcon />` or `MessageCircleIcon`
    objStr = objStr.replace(/icon:\s*<?[A-Za-z]+Icon\s*\/?>(?!['"])/g, "icon: 'MessageCircle'");
    
    try {
        return eval(`(${objStr})`);
    } catch (e) {
        console.warn(`Failed to parse ${varName}`);
        return [];
    }
}

function extractProp(source, propName) {
    const regex = new RegExp(`${propName}=["'{](.*?)["'}]\\s*(?:\\n|\\w+=)`, 's');
    const match = source.match(regex);
    if (!match) return "";
    
    let val = match[1].trim();
    // Clean up JSX brackets
    if (val.startsWith('<>') && val.endsWith('</>')) val = val.substring(2, val.length - 3);
    // Strip inline styles or spans (e.g. <span style={{ color: '#E68325' }}>Changing Lives</span>)
    val = val.replace(/<span[^>]*>/g, '').replace(/<\/span>/g, '');
    val = val.replace(/<p>/g, '').replace(/<\/p>/g, '');
    return val.trim();
}

async function run() {
    console.log("Starting Migration...");

    for (const file of programFiles) {
        const filePath = path.join(pagesDir, file);
        if (!fs.existsSync(filePath)) continue;
        
        const content = fs.readFileSync(filePath, 'utf-8');
        console.log(`\nProcessing ${file}...`);

        const courses = extractObject(content, 'courses');
        const outcomes = extractObject(content, 'outcomes');
        let benefits = extractObject(content, 'benefits');
        let stats = extractObject(content, 'stats');
        const faqs = extractObject(content, 'faqs');

        // Extract layout props
        const badge = extractProp(content, 'badge');
        const subtitle = extractProp(content, 'subtitle');
        const tagline = extractProp(content, 'tagline');
        const taglineBody = extractProp(content, 'taglineBody');
        const programName = extractProp(content, 'programName');
        const outcomesIntro = extractProp(content, 'outcomesIntro');
        const pathwayTitle = extractProp(content, 'pathwayTitle');
        const headerImageSrc = extractProp(content, 'headerImageSrc');

        // Generate slug from file name
        const slugStr = file.replace('.tsx', '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

        // Build Sanity Doc
        const doc = {
            _type: 'program',
            title: programName || file.replace('.tsx', ''),
            slug: { _type: 'slug', current: slugStr },
            type: subtitle.toLowerCase().includes('certificate') ? 'Certificate' : 'Degree',
            badge: badge || 'Program',
            subtitle: subtitle || 'In as little as one year.',
            tagline: tagline || 'Develop Skills That Get You Hired',
            taglineBody: taglineBody || '',
            benefits: benefits.map(b => ({ _key: Math.random().toString(36).substr(2, 9), title: b.title, desc: b.desc, icon: b.icon })),
            stats: stats.map(s => ({ _key: Math.random().toString(36).substr(2, 9), label: s.label, value: s.value, sub: s.sub, icon: s.icon })),
            courses: courses.map(c => ({ _key: Math.random().toString(36).substr(2, 9), title: c.title, desc: c.desc })),
            outcomes: outcomes.map(o => ({ _key: Math.random().toString(36).substr(2, 9), title: o.title, desc: o.desc })),
            outcomesIntro: outcomesIntro,
            faqs: faqs.map(f => ({ _key: Math.random().toString(36).substr(2, 9), q: f.q, a: f.a })),
            pathwayTitle: pathwayTitle || 'Build Toward Your Future',
        };

        try {
            console.log(`Uploading ${doc.title} to Sanity...`);
            await client.create(doc);
            console.log(`✅ Success: ${doc.title} (${slugStr})`);
        } catch (err) {
            console.error(`❌ Failed to upload ${doc.title}:`, err.message);
        }
    }
    console.log("\nMigration Complete!");
}

run();
