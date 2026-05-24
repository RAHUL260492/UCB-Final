import fs from 'fs';
import path from 'path';
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import https from 'https';

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

function downloadImage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download image: ${res.statusCode}`));
                return;
            }
            const data = [];
            res.on('data', (chunk) => data.push(chunk));
            res.on('end', () => resolve(Buffer.concat(data)));
        }).on('error', reject);
    });
}

function extractObject(source, varName) {
    // Looks for `const varName = [...];` or `const varName: Type = [...];` or `const varName = {...};`
    const regex = new RegExp(`const\\s+${varName}(?:\\s*:\\s*[\\w\\[\\]]+)?\\s*=\\s*([\\[\\{][\\s\\S]*?[\\]\\}]);`, 'm');
    const match = source.match(regex);
    if (!match) return null;
    
    let objStr = match[1];
    
    // Convert unquoted icon references like `icon: Clock` to `icon: 'Clock'`
    objStr = objStr.replace(/icon:\s*([A-Z][a-zA-Z0-9]+)(?!['"])/g, "icon: '$1'");
    // Support custom icons e.g. `<MessageCircleIcon />` or `MessageCircleIcon`
    objStr = objStr.replace(/icon:\s*<?[A-Za-z]+Icon\s*\/?>(?!['"])/g, "icon: 'MessageCircle'");
    
    try {
        return eval(`(${objStr})`);
    } catch (e) {
        console.warn(`Failed to parse ${varName}:`, e.message);
        return null;
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

    // Allow running on a single file if specified via command line arguments
    const targetFileArg = process.argv[2];
    const filesToProcess = targetFileArg ? [targetFileArg] : programFiles;

    for (const file of filesToProcess) {
        const filePath = path.join(pagesDir, file);
        if (!fs.existsSync(filePath)) {
            console.error(`File not found: ${filePath}`);
            continue;
        }
        
        const content = fs.readFileSync(filePath, 'utf-8');
        console.log(`\nProcessing ${file}...`);

        const courses = extractObject(content, 'courses') || [];
        const outcomes = extractObject(content, 'outcomes') || [];
        const benefits = extractObject(content, 'benefits') || [];
        const stats = extractObject(content, 'stats') || [];
        const faqs = extractObject(content, 'faqs') || [];
        const achievements = extractObject(content, 'achievements') || [];
        const forWhom = extractObject(content, 'forWhom') || [];
        const pathwaySteps = extractObject(content, 'pathwaySteps') || [];
        const testimonial = extractObject(content, 'testimonial');
        const ctaRequirements = extractObject(content, 'ctaRequirements') || [];

        // Extract layout props
        const badge = extractProp(content, 'badge');
        const subtitle = extractProp(content, 'subtitle');
        const tagline = extractProp(content, 'tagline');
        const taglineBody = extractProp(content, 'taglineBody');
        const programName = extractProp(content, 'programName');
        const outcomesIntro = extractProp(content, 'outcomesIntro');
        const pathwayTitle = extractProp(content, 'pathwayTitle');
        const pathwayDescription = extractProp(content, 'pathwayDescription');
        const headerImageSrc = extractProp(content, 'headerImageSrc');
        const achievementNote = extractProp(content, 'achievementNote');

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
            pathwayDescription: pathwayDescription || '',
            pathwaySteps: pathwaySteps.map(step => ({ _key: Math.random().toString(36).substr(2, 9), label: step.label, credits: step.credits || '', active: !!step.active })),
            forWhom: forWhom,
            achievements: achievements.map(ach => ({ _key: Math.random().toString(36).substr(2, 9), heading: ach.heading, icon: ach.icon || 'Star', items: ach.items || [] })),
            achievementNote: achievementNote || '',
            ctaRequirements: ctaRequirements.length > 0 ? ctaRequirements : ['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']
        };

        if (testimonial) {
            doc.testimonial = {
                quote: testimonial.quote || '',
                name: testimonial.name || '',
                role: testimonial.role || '',
            };
            if (testimonial.imageSrc) {
                try {
                    console.log(`Uploading testimonial image for ${doc.title}...`);
                    const imageBuffer = await downloadImage(testimonial.imageSrc);
                    const asset = await client.assets.upload('image', imageBuffer, {
                        filename: `${slugStr}-testimonial.jpg`
                    });
                    doc.testimonial.image = {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: asset._id
                        }
                    };
                    console.log(`✅ Testimonial image uploaded successfully.`);
                } catch (e) {
                    console.warn(`⚠️ Failed to upload testimonial image:`, e.message);
                }
            }
        }

        try {
            // Find existing document with same slug to get its _id and avoid duplicates
            const existing = await client.fetch(`*[_type == "program" && slug.current == $slug][0]`, { slug: slugStr });
            if (existing) {
                console.log(`Updating existing ${doc.title} (${existing._id})...`);
                await client.createOrReplace({ ...doc, _id: existing._id });
            } else {
                console.log(`Creating new ${doc.title}...`);
                await client.create(doc);
            }
            console.log(`✅ Success: ${doc.title} (${slugStr})`);
        } catch (err) {
            console.error(`❌ Failed to upload ${doc.title}:`, err.message);
        }
    }
    console.log("\nMigration Complete!");
}

run();
