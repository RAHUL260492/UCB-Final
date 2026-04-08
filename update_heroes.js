const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f =>
    f.endsWith('.tsx') &&
    f !== 'Home.tsx' &&
    f !== 'BusinessCertificate.tsx' &&
    f !== 'ParaprofessionalEducator.tsx'
);

const programImages = {
    'CaseManagement': 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2940&auto=format&fit=crop',
    'ChildrensBehavioralHealth': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2940&auto=format&fit=crop',
    'DigitalMarketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop',
    'EarlyChildhoodEducation': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2940&auto=format&fit=crop',
    'EarlyChildhoodEducationCertificate': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2940&auto=format&fit=crop',
    'ElderCare': 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2940&auto=format&fit=crop',
    'GeneralStudiesAssociate': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop',
    'GeneralStudiesCertificate': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop',
    'HumanServicesAdministration': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2940&auto=format&fit=crop',
    'HumanServicesCertificate': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2940&auto=format&fit=crop',
    'ProjectManagement': 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2940&auto=format&fit=crop',
};

let successCount = 0;
let errorCount = 0;

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    const baseName = file.replace('.tsx', '');
    const imgUrl = programImages[baseName] || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop';

    // Check if already has ProgramPageHeader
    if (content.includes('ProgramPageHeader')) {
        console.log('SKIP (already updated):', file);
        return;
    }

    // Check if file has the old hero section pattern
    if (!content.includes("min-h-[50vh] flex items-center")) {
        console.log('SKIP (no match):', file);
        return;
    }

    // Add import after react-router-dom import
    content = content.replace(
        "import { Link } from 'react-router-dom';",
        "import { Link } from 'react-router-dom';\nimport ProgramPageHeader from '../components/ProgramPageHeader';"
    );

    // Extract the badge text
    const badgeMatch = content.match(/text-blue-100[^>]*>([^<]+)<\/span>/);
    let badge = badgeMatch ? badgeMatch[1].trim() : baseName.replace(/([A-Z])/g, ' $1').trim();

    // Replace old fullscreen hero with compact ProgramPageHeader
    // Find the section start index
    const heroStart = content.indexOf('{/* Hero Section */}');
    const sectionStart = content.indexOf('<section className="relative pt-32', heroStart);

    if (sectionStart === -1) {
        console.log('ERROR: Could not find hero section in:', file);
        errorCount++;
        return;
    }

    // Find the matching closing </section> tag
    let depth = 0;
    let i = sectionStart;
    let sectionEnd = -1;

    while (i < content.length) {
        if (content.slice(i, i + 8) === '<section') depth++;
        else if (content.slice(i, i + 9) === '</section') {
            depth--;
            if (depth === 0) {
                sectionEnd = i + 9 + content.slice(i + 9).indexOf('>') + 1;
                break;
            }
        }
        i++;
    }

    if (sectionEnd === -1) {
        console.log('ERROR: Could not find section end in:', file);
        errorCount++;
        return;
    }

    const heroReplacement = `<ProgramPageHeader
                badge="${badge}"
                title={"${badge}"}
                subtitle="In as little as one year. Most students graduate debt-free."
                imageSrc="${imgUrl}"
                breadcrumbs={[
                    { label: 'Programs', path: '/#programs' },
                    { label: '${badge}' }
                ]}
            />`;

    content = content.slice(0, sectionStart) + heroReplacement + content.slice(sectionEnd);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('UPDATED:', file, '| Badge:', badge);
    successCount++;
});

console.log('\nDone! Updated:', successCount, '| Errors:', errorCount);
