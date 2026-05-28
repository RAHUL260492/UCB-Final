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
    { title: "College Writing I and II", desc: "Master professional communication" },
    { title: "General Psychology", desc: "Understand human behavior and motivation" },
    { title: "Computer Information Systems", desc: "Build essential technology skills" },
    { title: "Electives Based on Your Interests", desc: "Customize your education" },
    { title: "Humanities & Social Sciences", desc: "Develop a broad foundation of knowledge" },
    { title: "Natural Sciences", desc: "Enhance critical thinking and problem-solving" }
];

const outcomes = [
    { title: "Customer Service Representative", desc: "Assist customers and solve problems." },
    { title: "Administrative Assistant", desc: "Support office operations and management." },
    { title: "Office Coordinator", desc: "Manage daily office activities and schedules." },
    { title: "Data Entry Specialist", desc: "Input and manage critical business information." },
    { title: "Bank Teller", desc: "Assist customers with financial transactions." },
    { title: "Sales Associate", desc: "Build relationships and drive retail success." }
];

const benefits: ProgramBenefit[] = [
    { title: "Fast Track", desc: "Finish in as little as one year (21 credits)", icon: Clock },
    { title: "100% Online", desc: "Learn on a schedule that fits to your busy life", icon: Globe },
    { title: "Financial Aid", desc: "Personalized aid plans & options", icon: DollarSign },
    { title: "Stackable Credits", desc: "Credits transfer to an Associate or Bachelor's degree", icon: TrendingUp },
    { title: "No Application Fee", desc: "Start your journey today for free", icon: BookOpen },
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
    { q: "Is the program entirely online?", a: "Yes! 100% online with synchronous and asynchronous options." },
    { q: "How long does the program take?", a: "In as little as one year! Complete 21 credits at your own pace." },
    { q: "Can I transfer my credits?", a: "Yes! The program is designed to be transferable to 4-year colleges." },
    { q: "Am I eligible for financial aid?", a: "Yes! Most students receive financial aid. Contact our advisors to find options that work for you." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const GeneralStudiesCertificate: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <ProgramPageLayout
            badge="General Studies Certificate"
            title={<>Explore Your Possibilities & <span style={{ color: '#E68325' }}>Build Your Future</span></>}
            subtitle="In as little as one year. Accessible, high-quality education designed for working adults."
            headerImageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'General Studies Certificate' }
            ]}

            tagline="Explore Your Possibilities—Build Your Future on Your Terms"
            taglineBody={
                <p>
                    Not sure what you want to study? That's okay—this certificate is for you. The General Studies Certificate is perfect for students who want a college credential but aren't sure what career path to pursue.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">This versatile program empowers you to explore different subjects</span> while earning accredited college credits—all online, all on your schedule.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "Communicate effectively in written and oral forms",
                        "Think critically and solve complex problems",
                        "Develop a broad foundation of knowledge"
                    ]
                },
                {
                    heading: "Ethical & Practical",
                    icon: Award,
                    items: [
                        "Gain essential computer and technology skills",
                        "Explore different career paths and industries",
                        "Prepare for transfer to a degree program"
                    ]
                }
            ]}
            achievementNote="Courses are practical and designed to help you apply skills immediately on the job, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="The General Studies Certificate provides a solid foundation for a variety of entry-level careers and further education."
            outcomeTags={['General', 'Business', 'Administrative', 'Customer Service']}

            stats={stats}

            forWhom={[
                "Not sure what career path to pursue",
                "Want to earn general education credits affordably",
                "Need a flexible 100% online schedule",
                "Planning to transfer to a Bachelor's program",
                "Seeking to build foundational professional skills"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="Earning your Certificate in General Studies is the first step toward a wide range of career and educational opportunities."
            pathwaySteps={[
                { label: 'Certificate', credits: '21 Credits', active: true },
                { label: 'Associate Degree', credits: '60 Credits', active: false },
                { label: "Bachelor's Degree", credits: 'Transfer Ready', active: false },
            ]}

            testimonial={{
                quote: "It really drove me to understand the concept of working and also going to school. That's when Urban College became my pathway to where I am today—I work in cyber security, and earned my master's.",
                name: "Miguel De Los Santos",
                role: "General Studies Alum",
                imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="General Studies Certificate"
        />
    );
};

export default GeneralStudiesCertificate;
