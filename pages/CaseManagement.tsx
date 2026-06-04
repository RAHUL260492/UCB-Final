import React, { useEffect } from 'react';
import { Clock, Globe, DollarSign, TrendingUp, BookOpen, Briefcase, Award, CheckCircle } from 'lucide-react';
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
    { title: "Business Ethics", desc: "Navigate professional responsibilities" },
];

const outcomes = [
    { title: "Administrative or Office Support", desc: "Manage schedules, communications, and daily operations." },
    { title: "Operations and Management Support", desc: "Help teams run smoothly and efficiently." },
    { title: "Bookkeeping or Business Assistant", desc: "Manage financial records and support business functions." },
    { title: "Entry-Level Leadership Roles", desc: "Take on supervisory responsibilities." },
    { title: "Entrepreneurship or Small Business Support", desc: "Start or support your own business." },
];

const benefits: ProgramBenefit[] = [
    { title: "Fast Track", desc: "Finish in as little as 9 months (only 21 credits)", icon: Clock },
    { title: "100% Online", desc: "Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Financial Aid", desc: "Personalized aid plans & options", icon: DollarSign },
    { title: "Transfer Credits", desc: "Credits transfer toward an associate or bachelor's degree", icon: TrendingUp },
    { title: "ESL Support", desc: "Tailored to each student's needs", icon: BookOpen },
    { title: "Career Growth", desc: "Build skills for career advancement and financial security", icon: Briefcase },
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: '21', icon: Award, sub: 'Credits' },
    { label: 'Time', value: '9 Months', icon: Clock, sub: 'To Complete' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'Aid', value: 'Yes', icon: Award, sub: 'Financial Aid Available' },
    { label: 'Outcome', value: 'Job Ready', icon: CheckCircle, sub: 'Career Focused' },
];

const faqs = [
    { q: "What is the duration of the program?", a: "As little as 9 months." },
    { q: "Is it fully online?", a: "Yes, entirely online with various formats including asynchronous and live options." },
    { q: "What languages are courses available in?", a: "Courses are offered in English." },
    { q: "Is Urban College accredited?", a: "Yes, Urban College is a fully accredited non-profit college and Hispanic-Serving Institution." },
    { q: "Will this program help my career?", a: "Absolutely — whether you're seeking a new job, a promotion, or planning to continue your education." },
    { q: "Is financial aid available?", a: "Yes, federal, state, and institutional aid options are available for eligible students." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const CaseManagement: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <SEO
                title="Case Management Certificate Program"
                description="Train as a case manager with Urban College of Boston. Practical skills in client advocacy, assessment, and human services delivery — online and affordable."
                canonicalPath="/programs/case-management"
                jsonLd={[
                    buildCourseJsonLd({
                        name: "Case Management Certificate",
                        description: "Train as a case manager with Urban College of Boston. Practical skills in client advocacy, assessment, and human services delivery — online and affordable.",
                        path: '/programs/case-management',
                        credentialCategory: 'certificate',
                    }),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Programs', path: '/programs' },
                        { name: "Case Management Certificate", path: '/programs/case-management' },
                    ]),
                ]}
            />
        <ProgramPageLayout
            // Header
            badge="Case Management Certificate"
            title={<>Build a Career Connecting People & <span style={{ color: '#E68325' }}>Changing Lives</span></>}
            subtitle="In as little as 9 months. Accessible, high-quality education designed for working adults."
            headerImageSrc="/Program%20Images%20for%20Website/Case%20Management%20Cert%201.jpg"
            secondaryImageSrc="/Program%20Images%20for%20Website/Case%20Management%20Cert%202.jpg"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Case Management' }
            ]}

            // Tagline
            tagline="Develop Skills That Get You Hired"
            taglineBody={
                <p>
                    Develop the actual business skills that will enable you to get a job, increase your salary,
                    or earn a promotion — all without interrupting your life.{' '}
                    <span className="text-ucb-blue font-semibold">
                        Urban College of Boston's Case Management Program
                    </span>{' '}
                    is a fully online, short-term program designed for modern working adults.
                </p>
            }

            // Benefits
            benefits={benefits}

            // Achievements
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

            // Courses & Outcomes
            courses={courses}
            outcomes={outcomes}
            outcomesIntro="This certificate helps prepare you for career-building roles where you can earn promotions, increase pay, or change career paths."
            outcomeTags={['Management', 'Administration', 'Bookkeeping', 'Entrepreneurship']}

            // Stats
            stats={stats}

            // Who is it for
            forWhom={[
                "Starting your professional career",
                "A working adult upgrading skills",
                "Returning to school after a break",
                "A multilingual learner seeking inclusive college programs",
                "An immigrant student looking for a supportive college in the USA",
                "Planning an associate's or bachelor's degree in the future"
            ]}

            // Pathway
            pathwayTitle="Build Toward Your Future"
            pathwayDescription="The Case Management Program is a stackable, for-credit program. Credits may transfer toward an associate or bachelor's degree."
            pathwaySteps={[
                { label: 'Certificate', credits: '18 Credits', active: false },
                { label: 'Associate Degree', credits: '60 Credits', active: true },
                { label: "Bachelor's Degree", credits: 'Transfer Ready', active: false },
            ]}

            // Testimonial
            testimonial={{
                quote: "I wouldn't be able to do the work I do without my certificates and degree from Urban College. If you have any dreams, go forward. When I first came here, I didn't speak English, but I was pushed to continue to study and get my diploma.",
                name: "Ramona S.",
                role: "Alum",
                imageSrc: "/assets/images/testimonials/ramona-s.webp"
            }}

            // FAQ
            faqs={faqs}

            // CTA
            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="Case Management"
        />
        </>
    );
};

export default CaseManagement;
