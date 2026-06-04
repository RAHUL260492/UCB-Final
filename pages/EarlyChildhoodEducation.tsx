import React, { useEffect } from 'react';
import { Clock, Globe, DollarSign, TrendingUp, BookOpen, Briefcase, Award, GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import ProgramPageLayout, { ProgramBenefit, ProgramStat } from '../components/ProgramPageLayout';
import SEO from '../components/SEO';
import { buildCourseJsonLd, buildBreadcrumbJsonLd } from '../components/seo-data';

// ─── Icon helper for bilingual ────────────────────────────────────────────────
const MessageCircleIcon: React.ElementType = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const courses = [
    { title: "Principles of Management", desc: "Lead teams and projects effectively" },
    { title: "Business Communication", desc: "Write and speak professionally" },
    { title: "Introduction to Computer Applications", desc: "Master essential technology" },
    { title: "Introduction to Business", desc: "Understand how organizations work" },
    { title: "Principles of Accounting", desc: "Build financial literacy" },
    { title: "Business Ethics", desc: "Navigate professional responsibilities" }
];

const outcomes = [
    { title: "Administrative or Office Support", desc: "Manage schedules, communications, and daily operations. Competitive salary with strong demand." },
    { title: "Operations and Management Support", desc: "Help teams run smoothly and efficiently." },
    { title: "Bookkeeping or Business Assistant", desc: "Manage financial records and support business functions." },
    { title: "Entry-Level Leadership Roles", desc: "Take on supervisory responsibilities." },
    { title: "Entrepreneurship or Small Business Support", desc: "Start or support your own business." }
];

const benefits: ProgramBenefit[] = [
    { title: "Flexible Pace", desc: "Complete your 60 credits over about two years", icon: Clock },
    { title: "100% Online", desc: "Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Financial Aid", desc: "Personalized aid plans & options", icon: DollarSign },
    { title: "Learn in Your Language", desc: "Courses in English, Spanish, and Mandarin", icon: MessageCircleIcon },
    { title: "Transfer Credits", desc: "Credits transfer toward an associate or bachelor's degree", icon: TrendingUp },
    { title: "ESL Support", desc: "Tailored to each student's needs", icon: BookOpen },
    { title: "Career Growth", desc: "Build skills for career advancement and financial security", icon: Briefcase },
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: '60', icon: Award, sub: 'Credits' },
    { label: 'Time', value: '2 Years', icon: Clock, sub: 'To Complete' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'Start', value: 'Rolling', icon: Calendar, sub: 'Start Date' },
    { label: 'Aid', value: 'Yes', icon: GraduationCap, sub: 'Financial Aid' },
    { label: 'Language', value: 'Multilingual', icon: Globe, sub: 'EN, ES, Mandarin' },
    { label: 'Outcome', value: 'Job Ready', icon: CheckCircle, sub: 'Career Focused' },
];

const faqs = [
    { q: "What is the duration of the program?", a: "About two years (60 credits)." },
    { q: "Is it fully online?", a: "Yes, entirely online with various formats." },
    { q: "What languages?", a: "English, Spanish, and Mandarin." },
    { q: "Accredited?", a: "Yes, a fully accredited non-profit college and Hispanic-Serving Institution." },
    { q: "Will it help my career?", a: "Yes, for new jobs, promotions, or further studies." },
    { q: "Financial aid?", a: "Yes, federal, state, and institutional aid options are available for eligible students." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const EarlyChildhoodEducation: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <SEO
                title="Early Childhood Education Associate Degree"
                description="Earn an Associate Degree in Early Childhood Education at Urban College of Boston. EEC-aligned, multilingual instruction in English, Spanish, and Mandarin. Transferable credits."
                canonicalPath="/programs/early-childhood-education"
                jsonLd={[
                    buildCourseJsonLd({
                        name: "Early Childhood Education Associate Degree",
                        description: "Earn an Associate Degree in Early Childhood Education at Urban College of Boston. EEC-aligned, multilingual instruction in English, Spanish, and Mandarin. Transferable credits.",
                        path: '/programs/early-childhood-education',
                        credentialCategory: 'degree',
                        educationLevel: 'Associate',
                    }),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Programs', path: '/programs' },
                        { name: "Early Childhood Education Associate Degree", path: '/programs/early-childhood-education' },
                    ]),
                ]}
            />
        <ProgramPageLayout
            badge="Early Childhood Education Associate"
            title={<>Inspire Young Minds & <span style={{ color: '#E68325' }}>Build Your Future</span></>}
            subtitle="A 60-credit Associate Degree. Accessible, high-quality education designed for working adults."
            headerImageSrc="/Program%20Images%20for%20Website/ECE-AA-primary.jpg"
            secondaryImageSrc="/Program%20Images%20for%20Website/ECE-AA-secondary.jpg"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Early Childhood Education' }
            ]}

            tagline="Develop Skills That Get You Hired"
            taglineBody={
                <p>
                    Develop the actual business skills that will enable you to get a job, increase your salary, or earn a promotion—all without interrupting your life.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">Urban College of Boston's Early Childhood Education Associate</span> is a fully online, short-term program designed for modern working adults.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "Support daily business and office operations",
                        "Communicate professionally in writing, speaking, and digital tools",
                        "Work confidently in teams or leadership support roles"
                    ]
                },
                {
                    heading: "Ethical & Practical",
                    icon: Award,
                    items: [
                        "Apply ethical and responsible business practices",
                        "Use business skills in real workplace situations",
                        "Master essential technology for modern workplaces"
                    ]
                }
            ]}
            achievementNote="Courses are practical and designed to help you apply skills immediately on the job, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="This certificate helps prepare you for career-building roles where you can earn promotions, increase pay, or change career paths."
            outcomeTags={['Management', 'Administration', 'Bookkeeping', 'Entrepreneurship']}

            stats={stats}

            forWhom={[
                "Starting your professional career",
                "A working adult upgrading skills",
                "Returning to school after a break",
                "A multilingual learner seeking inclusive college programs",
                "An immigrant student looking for a supportive college in the USA",
                "Planning an associate's or bachelor's degree in the future"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="The Early Childhood Education Associate is a stackable, for-credit program. Credits may transfer toward an associate or bachelor's degree."
            pathwaySteps={[
                { label: 'Certificate (18 Credits)', credits: '18 Credits', active: false },
                { label: 'Associate Degree', credits: '60 Credits', active: true },
                { label: "Bachelor's Degree", credits: 'Transfer Ready', active: false },
            ]}

            testimonial={{
                quote: "The supportive environment and encouragement from faculty and peers instilled a sense of confidence that inspired me to take a bold step forward, allowing me to establish and operate my own family childcare center.",
                name: "Mariely M.",
                role: "Alum",
                imageSrc: "/assets/images/testimonials/mariely-m.jpg"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="Early Childhood Education"
        />
        </>
    );
};

export default EarlyChildhoodEducation;
