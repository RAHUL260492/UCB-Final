import { SITE_URL, SITE_NAME } from './SEO';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollegeOrUniversity',
  name: SITE_NAME,
  alternateName: 'Urban College',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logo.png`,
  sameAs: [
    'https://www.facebook.com/UrbanCollegeBoston',
    'https://www.instagram.com/urbancollegeofboston',
    'https://www.linkedin.com/school/urban-college-of-boston/',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2 Boylston Street, 5th Floor',
    addressLocality: 'Boston',
    addressRegion: 'MA',
    postalCode: '02116',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Admissions',
    telephone: '+1-617-449-7070',
    email: 'admissions@urbancollege.edu',
    areaServed: 'US',
    availableLanguage: ['English', 'Spanish', 'Mandarin'],
  },
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const buildBreadcrumbJsonLd = (
  items: { name: string; path: string }[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
  })),
});

export const buildCourseJsonLd = (params: {
  name: string;
  description: string;
  path: string;
  credentialCategory?: 'degree' | 'certificate';
  educationLevel?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: params.name,
  description: params.description,
  url: `${SITE_URL}${params.path}`,
  provider: {
    '@type': 'CollegeOrUniversity',
    name: SITE_NAME,
    sameAs: SITE_URL,
  },
  ...(params.credentialCategory && {
    educationalCredentialAwarded: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: params.credentialCategory,
    },
  }),
  ...(params.educationLevel && { educationalLevel: params.educationLevel }),
});

export const buildFaqJsonLd = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
});

type PageMeta = { title: string; description: string; path: string };

export const PAGE_META: Record<string, PageMeta> = {
  about: {
    title: 'About Urban College of Boston | 30+ Years of Accessible Higher Education',
    description: 'Founded in 1993, Urban College of Boston is a private, nonprofit institution serving working students with affordable, multilingual associate degrees and certificates.',
    path: '/about',
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with Urban College of Boston — campus address, administration hours, and department contacts for admissions, advising, registration, and financial aid.',
    path: '/contact',
  },
  donate: {
    title: 'Donate',
    description: 'Support Urban College of Boston. Your gift empowers determined, working students with accessible, affordable, multilingual higher education.',
    path: '/donate',
  },
  mission: {
    title: 'Our Mission',
    description: "Urban College's mission is to provide accessible, affordable, multilingual higher education that empowers Boston's working students, parents, and immigrants.",
    path: '/mission',
  },
  president: {
    title: "Office of the President",
    description: "Meet the leadership of Urban College of Boston and learn about the strategic vision guiding the institution's commitment to accessible, multilingual education.",
    path: '/president',
  },
  trustees: {
    title: 'Board of Trustees',
    description: "Urban College's Board of Trustees provides governance and strategic direction in support of our mission to deliver accessible, affordable higher education.",
    path: '/trustees',
  },
  foundation: {
    title: 'Urban College Foundation',
    description: 'The Urban College Foundation supports our mission by funding scholarships, student services, and programs that expand access to higher education.',
    path: '/foundation',
  },
  team: {
    title: 'Leadership & Staff',
    description: 'Meet the dedicated faculty and staff at Urban College of Boston who support student success across our multilingual academic programs.',
    path: '/team',
  },
  admissions: {
    title: 'Admissions',
    description: 'Apply to Urban College of Boston. Open admissions, affordable tuition, financial aid, and dedicated advisors to support working students every step of the way.',
    path: '/admissions',
  },
  infoSessions: {
    title: 'Information Sessions',
    description: 'Join an Urban College information session to learn about our programs, financial aid options, and student support services. Available in English, Spanish, and Mandarin.',
    path: '/info-sessions',
  },
  financialServices: {
    title: 'Financial Services & Funding Options',
    description: 'Explore federal financial aid, scholarships, employer reimbursement, and payment plans at Urban College of Boston. Personalized aid plans for every student.',
    path: '/financial-services-and-funding-options',
  },
  financialAid: {
    title: 'Financial Aid & Tuition',
    description: 'Affordable tuition, FAFSA-eligible federal aid, institutional scholarships, and one-on-one financial aid guidance at Urban College of Boston.',
    path: '/financial-aid',
  },
  tuitionPayment: {
    title: 'Tuition Payment Options',
    description: 'Flexible tuition payment plans, employer reimbursement, and accepted payment methods at Urban College of Boston.',
    path: '/tuition-payment-options',
  },
  programs: {
    title: 'Academic Programs',
    description: 'Explore Urban College of Boston associate degrees and certificates in Early Childhood Education, Human Services, Business, Mental Health, and more. Online, affordable, multilingual.',
    path: '/programs',
  },
  blog: {
    title: 'Blog',
    description: 'News, student stories, and resources from Urban College of Boston.',
    path: '/blog',
  },
  news: {
    title: 'News',
    description: 'Latest news and announcements from Urban College of Boston.',
    path: '/news',
  },
  learningResourceCenter: {
    title: 'Learning Resource Center',
    description: "The Learning Resource Center provides free tutoring, writing support, ESL resources, and academic coaching to every Urban College student.",
    path: '/learning-resource-center',
  },
  studentGovernment: {
    title: 'Student Government',
    description: "Urban College's Student Government Association represents student voices and organizes events that build community across our multilingual student body.",
    path: '/student-government',
  },
  mentalHealth: {
    title: 'Mental Health Resources',
    description: 'Confidential mental health support, counseling referrals, and wellness resources for Urban College of Boston students.',
    path: '/mental-health',
  },
  accreditation: {
    title: 'Accreditation',
    description: 'Urban College of Boston is accredited by the New England Commission of Higher Education (NECHE), ensuring our degrees and certificates meet rigorous academic standards.',
    path: '/accreditation',
  },
  espanol: {
    title: 'Urban College en Español',
    description: 'Urban College ofrece programas de grado asociado y certificados con instrucción en español. Aprenda mientras mejora su inglés.',
    path: '/espanol',
  },
  mandarin: {
    title: 'Urban College — 中文',
    description: 'Urban College 提供普通话授课的副学士学位和证书课程。在提高英语水平的同时获得职业技能。',
    path: '/mandarin',
  },
  employment: {
    title: 'Employment Opportunities',
    description: 'Explore career opportunities at Urban College of Boston. Join a mission-driven institution committed to accessible, multilingual higher education.',
    path: '/employment',
  },
  policies: {
    title: 'Policies & Disclosures',
    description: 'Urban College of Boston institutional policies, consumer information, and regulatory disclosures.',
    path: '/policies-disclosures',
  },
  registration: {
    title: 'Course Registration',
    description: 'Register for courses at Urban College of Boston. Step-by-step guidance, academic advising, and support for new and returning students.',
    path: '/course-registration',
  },
  studentServices: {
    title: 'Student Services',
    description: 'Tutoring, advising, mental health support, technology help, and career services for Urban College of Boston students.',
    path: '/student-services',
  },
  academicCalendar: {
    title: 'Academic Calendar',
    description: 'Important dates, term schedules, holidays, and registration deadlines for Urban College of Boston.',
    path: '/academic-calendar',
  },
  transferPathways: {
    title: 'College Transfer Pathways',
    description: 'Transfer your Urban College associate degree to a four-year university with articulation agreements that streamline your path to a Bachelor’s degree.',
    path: '/college-transfer-pathways',
  },
  technology: {
    title: 'Technology & Account Guide',
    description: 'Set up your Urban College student accounts, access learning platforms, and get IT support.',
    path: '/technology-account-guide',
  },
  transcripts: {
    title: 'Transcript Requests',
    description: 'Request official and unofficial transcripts from Urban College of Boston.',
    path: '/transcript-requests',
  },
  commencement: {
    title: 'Commencement',
    description: 'Celebrate Urban College of Boston graduates at our annual commencement ceremony.',
    path: '/commencement',
  },
  campusFacilities: {
    title: 'Campus & Facilities',
    description: 'Urban College of Boston is located in the heart of downtown Boston with classrooms, computer labs, and student spaces designed to support working adults.',
    path: '/campus-facilities',
  },
  collegeServices: {
    title: 'College Services & Resources',
    description: 'A complete directory of Urban College student services, academic resources, and community supports.',
    path: '/college-services-and-resources',
  },
  workforce: {
    title: 'Workforce Development',
    description: 'Urban College partners with employers to deliver customized workforce training in English, Spanish, Portuguese, and Haitian Creole — in person, remote, or hybrid.',
    path: '/workforce',
  },
  search: {
    title: 'Search',
    description: 'Search Urban College of Boston programs, resources, and pages.',
    path: '/search',
  },
};
