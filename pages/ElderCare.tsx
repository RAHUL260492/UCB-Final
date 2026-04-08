import React, { useEffect } from 'react';
import { BookOpen, Clock, Globe, Briefcase, CheckCircle, TrendingUp, Users, DollarSign, Calendar, Award, GraduationCap, ArrowRight } from 'lucide-react';
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
    { title: "Concepts and Practices in Elder Care", desc: "Master the foundations of gerontology" },
    { title: "Human Behavior and Development", desc: "Understand the aging process" },
    { title: "Core Competencies for Community Behavioral Health Workers", desc: "Prepare for CHW certification" },
    { title: "Communication & Conflict in the Helping Professions", desc: "Build essential interpersonal skills" },
    { title: "Case Management", desc: "Coordinate care effectively" },
    { title: "Behavioral Health Internship", desc: "Gain hands-on experience!" }
];

const outcomes = [
    { title: "Community Health Worker", desc: "Connect seniors with vital health resources. Average salary: $55,090/year in Massachusetts!" },
    { title: "Case Manager", desc: "Coordinate care and services for older adults." },
    { title: "Residential Support Specialist", desc: "Support seniors in assisted living and residential settings." },
    { title: "Home Health Aide", desc: "Provide compassionate in-home care." },
    { title: "Elder Care Coordinator", desc: "Manage services for seniors in agency settings." },
    { title: "Private Homecare Agency Owner", desc: "Launch your own business providing vital care." }
];

const benefits: ProgramBenefit[] = [
    { title: "Fast Track", desc: "Finish in as little as one year (21 credits)", icon: Clock },
    { title: "100% Online", desc: "Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Debt-Free Goal", desc: "Most students graduate debt-free!", icon: DollarSign },
    { title: "Built-In CHW Credential", desc: "Earn your Community Health Worker credential", icon: Award },
    { title: "Credit for Prior Learning", desc: "Your experience counts!", icon: TrendingUp },
    { title: "Bilingual Options", desc: "ESL support available", icon: MessageCircleIcon },
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: '21', icon: Award, sub: 'Credits' },
    { label: 'Time', value: '1 Year', icon: Clock, sub: 'To Complete' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'Start', value: 'Rolling', icon: Calendar, sub: 'Start Date' },
    { label: 'Aid', value: 'Yes', icon: GraduationCap, sub: 'Financial Aid' },
    { label: 'Language', value: 'Bilingual', icon: Globe, sub: 'English & Spanish' },
    { label: 'Outcome', value: 'Job Ready', icon: CheckCircle, sub: 'Career Focused' },
];

const faqs = [
    { q: "Is the program entirely online?", a: "Absolutely! The program is fully online with both synchronous and asynchronous options." },
    { q: "How long does the program take?", a: "In as little as one year! Complete your 21 credits full-time, or take it at your own pace." },
    { q: "Can I afford this?", a: "Yes! Urban College is one of the most affordable colleges in Massachusetts. Most students graduate debt-free." },
    { q: "Do I need experience?", a: "No experience needed. This certificate gives you all the foundational skills you need." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const ElderCare: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <ProgramPageLayout
            badge="Elder Care Certificate"
            title={<>Make a Difference in Seniors' Lives & <span style={{ color: '#E68325' }}>Build Your Career</span></>}
            subtitle="In as little as one year. Most students graduate debt-free."
            headerImageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2940&auto=format&fit=crop"
            breadcrumbs={[
                { label: 'Programs', path: '/#programs' },
                { label: 'Elder Care' }
            ]}

            tagline="Transform Lives While Building Your Career"
            taglineBody={
                <p>
                    Urban College of Boston's Elder Care Certificate empowers you to master the skills that help older adults and their families thrive—all while fitting into your busy life.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">With 58% projected job growth</span> in Massachusetts, you'll graduate ready to succeed in one of the state's fastest-growing fields!
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "Understand the biological, physiological, and social dimensions of aging",
                        "Provide compassionate, person-centered care to older adults",
                        "Navigate healthcare and social services systems effectively"
                    ]
                },
                {
                    heading: "Ethical & Practical",
                    icon: Award,
                    items: [
                        "Advocate for seniors and their families",
                        "Manage case coordination and connect clients to vital resources",
                        "Apply best practices in elder care and gerontology"
                    ]
                }
            ]}
            achievementNote="Courses are practical and designed to help you apply skills immediately on the job, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="This certificate prepares you for career-building roles in one of Massachusetts' fastest-growing fields."
            outcomeTags={['Healthcare', 'Elder Care', 'Case Management', 'Community']}

            stats={stats}

            forWhom={[
                "Passionate about helping older adults",
                "Seeking to become a Community Health Worker",
                "Looking for a fast-growing, secure career field",
                "Already working in care and want college credit",
                "Planning to earn an AA in Human Services"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="Your certificate is your first step—not your last! Apply your Elder Care credits toward an Associate of Arts in Human Services."
            pathwaySteps={[
                { label: 'Certificate (21 Credits)', credits: '21 Credits', active: false },
                { label: 'AA in Human Services', credits: '60 Credits', active: true },
                { label: "Bachelor of Social Work (BSW)", credits: 'Transfer Ready', active: false },
            ]}

            testimonial={{
                quote: "My favorite thing about Urban College of Boston is the support they offer students both academically and financially, and the communication between students and teachers.",
                name: "Jennifer",
                role: "Urban College Student",
                imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="Elder Care Certificate"
        />
    );
};

export default ElderCare;
