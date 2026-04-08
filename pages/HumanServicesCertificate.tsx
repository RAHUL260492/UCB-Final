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
    { title: "Professional Seminar I", desc: "Build professional skills for success in human services." },
    { title: "Introduction to Human Services", desc: "Understand the field, the systems, and the people." },
    { title: "Case Management", desc: "Master the core skills employers want most." },
    { title: "Human Services Electives", desc: "Customize your education." },
    { title: "Counseling & Interviewing", desc: "Connect with clients effectively." },
    { title: "Human Behavior and Social Environment", desc: "Understand the people you'll serve." }
];

const outcomes = [
    { title: "Case Manager", desc: "Coordinate care and connect clients to essential services. (Median salary: $46,340 in MA)" },
    { title: "Social Services Assistant", desc: "Support social workers in helping clients navigate services." },
    { title: "Behavior Technician", desc: "Apply intervention strategies to support individuals with behavioral needs." },
    { title: "Direct Support Professional", desc: "Provide hands-on support to individuals with disabilities." },
    { title: "Community Health Worker", desc: "Connect communities with vital health and social resources." },
    { title: "Family Support Worker", desc: "Help families navigate housing, childcare, and financial assistance." }
];

const benefits: ProgramBenefit[] = [
    { title: "Fast Track", desc: "Finish in as little as one year (only 21 credits)", icon: Clock },
    { title: "100% Online", desc: "Learn on a schedule that fits your busy life", icon: Globe },
    { title: "Debt-Free Goal", desc: "Most students graduate debt-free!", icon: DollarSign },
    { title: "Growing Field", desc: "8% job growth—faster than the national average!", icon: TrendingUp },
    { title: "High Demand in MA", desc: "MA ranks #3 nationwide for these roles", icon: Award },
    { title: "Bilingual Options", desc: "ESL support and English/Spanish tracks", icon: MessageCircleIcon },
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
    { q: "Can I work while completing this certificate?", a: "Absolutely! Designed for working adults with flexible online scheduling." },
    { q: "Is the program entirely online?", a: "Yes, 100% online with synchronous and asynchronous options." },
    { q: "Do I need prior experience?", a: "No, the program covers all foundational knowledge." },
    { q: "Will my credits transfer?", a: "Yes, all 21 credits transfer to the Human Services Administration Associate Degree." },
    { q: "Can I study in Spanish?", a: "Yes, courses are available in both English and Spanish." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const HumanServicesCertificate: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <ProgramPageLayout
            badge="Human Services Certificate"
            title={<>Launch Your Career <span style={{ color: '#E68325' }}>Helping Others</span></>}
            subtitle="In as little as one year. Most students graduate debt-free."
            headerImageSrc="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2940&auto=format&fit=crop"
            breadcrumbs={[
                { label: 'Programs', path: '/#programs' },
                { label: 'Human Services Certificate' }
            ]}

            tagline="Start Helping People Now—Don't Wait"
            taglineBody={
                <p>
                    The Human Services Certificate is designed so you can work while earning your credential to advance your career in social services.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">No matter where you are in your career</span>, this program helps you build a strong understanding of the U.S. human services system, key social issues, and how to work effectively across diverse cultures.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "Understand the U.S. human services system and how to navigate it",
                        "Manage cases effectively—connect people to the services they need",
                        "Address key social issues like housing, healthcare, mental health"
                    ]
                },
                {
                    heading: "Ethical & Practical",
                    icon: Award,
                    items: [
                        "Work across diverse cultures with cultural humility",
                        "Build professional skills for success in human services",
                        "Apply knowledge through real-world scenarios and case studies"
                    ]
                }
            ]}
            achievementNote="Courses are practical and designed to help you apply skills immediately on the job, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="Earn $46,340/year as a Social and Human Services Assistant in Massachusetts (ranked #3 nationwide!). Enter a growing field with 8% job growth."
            outcomeTags={['Social Services', 'Human Services', 'Case Management', 'Community']}

            stats={stats}

            forWhom={[
                "Passionate about advancing your career in social services",
                "Want to work while earning your credential",
                "Looking for an online program with bilingual support",
                "Planning to transfer into a Human Services Administration Associate degree",
                "Want to build a strong understanding of key social issues"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="This certificate is designed to stack into the Associate Degree in Human Services Administration at Urban College."
            pathwaySteps={[
                { label: 'Certificate', credits: '21 Credits', active: true },
                { label: 'Associate Degree', credits: '60 Credits', active: false },
                { label: "Bachelor's Degree", credits: 'Transfer Ready', active: false },
            ]}

            testimonial={{
                quote: "My favorite thing about Urban College of Boston is the support they offer students both academically and financially, and the communication between students and teachers.",
                name: "Jennifer",
                role: "Urban College Student",
                imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="Human Services Certificate"
        />
    );
};

export default HumanServicesCertificate;
