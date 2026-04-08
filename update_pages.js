const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') && !['Home.tsx', 'BusinessCertificate.tsx', 'ParaprofessionalEducator.tsx'].includes(f));

const titles = {
    'CaseManagement': 'Make a Difference with Case Management',
    'ChildrensBehavioralHealth': 'Support Children\\'s Behavioral Health',
  'DigitalMarketing': 'Master Digital Marketing Strategies',
    'EarlyChildhoodEducation': 'Nurture the Next Generation',
    'EarlyChildhoodEducationCertificate': 'Begin Your Journey in Early Childhood Ed',
    'ElderCare': 'Provide Compassionate Elder Care',
    'GeneralStudiesAssociate': 'Build Your Educational Foundation',
    'GeneralStudiesCertificate': 'Explore General Studies',
    'HumanServicesAdministration': 'Lead in Human Services Administration',
    'HumanServicesCertificate': 'Gain Skills in Human Services',
    'ProjectManagement': 'Lead Projects to Success'
};

const images = {
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
    'ProjectManagement': 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2940&auto=format&fit=crop'
};

let count = 0;
files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    const baseName = file.replace('.tsx', '');

    if (!content.includes('ProgramPageHeader') && content.includes('{/* Hero Section */}')) {
        // 1. Add import
        content = content.replace(
            "import { Link } from 'react-router-dom';",
            "import { Link } from 'react-router-dom';\nimport ProgramPageHeader from '../components/ProgramPageHeader';"
        );

        // 2. Extract badge name from component name
        const badgeName = baseName.replace(/([A-Z])/g, ' $1').trim() + (baseName.includes('Certificate') ? '' : ' Program');
        const title = titles[baseName] || badgeName;
        const imgUrl = images[baseName] || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop';

        // 3. Replace Hero
        const startIdx = content.indexOf('{/* Hero Section */}');
        const introSectionIdx = content.indexOf('{/* Intro Section */}');

        if (startIdx !== -1 && introSectionIdx !== -1) {
            // Find the start of the line for {/* Intro Section */}
            const endIdx = content.lastIndexOf('\\n', introSectionIdx) + 1 || introSectionIdx;

            const newHero = `{/* Hero Section */}
            <ProgramPageHeader
                badge="${badgeName}"
                title={<>${title}</>}
                subtitle="In as little as one year. Most students graduate debt-free."
                imageSrc="${imgUrl}"
                breadcrumbs={[
                    { label: 'Programs', path: '/#programs' },
                    { label: '${badgeName.replace(' Program', '')}' }
                ]}
            />\n\n            `;

            content = content.substring(0, startIdx) + newHero + content.substring(endIdx);
        }
    }

    // Replace UCB with Urban College
    content = content.replace(/UCB/g, 'Urban College');

    fs.writeFileSync(filePath, content, 'utf8');
    count++;
});

console.log('Updated ' + count + ' files successfully!');
