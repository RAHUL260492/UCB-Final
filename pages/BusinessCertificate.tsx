import React, { useEffect } from 'react';
import { Clock, Globe, DollarSign, TrendingUp, BookOpen, Briefcase, Award, GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import ProgramPageLayout, { ProgramBenefit, ProgramStat } from '../components/ProgramPageLayout';

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
    { title: "Fast Track", desc: "Finish in as little as one year (only 18 credits!)", icon: Clock },
    { title: "100% Online", desc: "Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Debt-Free Goal", desc: "Most students graduate debt-free!", icon: DollarSign },
    { title: "Bilingual Options", desc: "Study in English and/or Spanish", icon: MessageCircleIcon },
    { title: "Transfer Credits", desc: "Credits transfer toward an associate or bachelor's degree", icon: TrendingUp },
    { title: "ESL Support", desc: "Tailored to each student's needs", icon: BookOpen },
    { title: "Career Growth", desc: "Build skills for career advancement and financial security", icon: Briefcase },
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: '18', icon: Award, sub: 'Credits' },
    { label: 'Time', value: '1 Year', icon: Clock, sub: 'To Complete' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'Start', value: 'Rolling', icon: Calendar, sub: 'Start Date' },
    { label: 'Aid', value: 'Yes', icon: GraduationCap, sub: 'Financial Aid' },
    { label: 'Language', value: 'Bilingual', icon: Globe, sub: 'English & Spanish' },
    { label: 'Outcome', value: 'Job Ready', icon: CheckCircle, sub: 'Career Focused' },
];

const faqs = [
    { q: "What is the duration of the program?", a: "As little as one year." },
    { q: "Is it fully online?", a: "Yes, entirely online with various formats." },
    { q: "What languages?", a: "English and Spanish." },
    { q: "Accredited?", a: "Yes, a fully accredited non-profit college and Hispanic-Serving Institution." },
    { q: "Will it help my career?", a: "Yes, for new jobs, promotions, or further studies." },
    { q: "Financial aid?", a: "Yes, most students graduate debt-free." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const BusinessCertificate: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <ProgramPageLayout
            badge="Business Certificate Program"
            title={<>Build Real Business Skills & <span style={{ color: '#E68325' }}>Advance Your Career</span></>}
            subtitle="In as little as one year. Most students graduate debt-free."
            headerImageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Business Certificate' }
            ]}

            tagline="Develop Skills That Get You Hired"
            taglineBody={
                <p>
                    Develop the actual business skills that will enable you to get a job, increase your salary, or earn a promotion—all without interrupting your life.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">Urban College of Boston's Business Certificate Program</span> is a fully online, short-term program designed for modern working adults.
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
            pathwayDescription="The Business Certificate is a stackable, for-credit program. Credits may transfer toward an associate or bachelor's degree."
            pathwaySteps={[
                { label: 'Certificate (18 Credits)', credits: '18 Credits', active: false },
                { label: 'Associate Degree', credits: '60 Credits', active: true },
                { label: "Bachelor's Degree", credits: 'Transfer Ready', active: false },
            ]}

            testimonial={{
                quote: "I liked that I could do the work on my own schedule, but it still felt like I was part of a real college experience. I never felt alone.",
                name: "Elijah",
                role: "Business Cert Alum",
                imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="Business Certificate"
        />
    );
};

export default BusinessCertificate;
