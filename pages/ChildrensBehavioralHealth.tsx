import React, { useEffect } from 'react';
import { Clock, Globe, DollarSign, TrendingUp, Award, Briefcase, CheckCircle } from 'lucide-react';
import ProgramPageLayout, { ProgramBenefit, ProgramStat } from '../components/ProgramPageLayout';

const MessageCircleIcon: React.ElementType = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
);

const courses = [
    { title: "Fundamentals of Children's Behavioral Health", desc: "Build your foundation in understanding children's behavioral needs." },
    { title: "Trauma & Resiliency in Children's Behavioral Health", desc: "Understand what children face and how to support their recovery." },
    { title: "Introduction to Behavior Analysis & Intervention Skills", desc: "Prepares you for the RBT® certification exam!" },
    { title: "Core Competencies for Community Behavioral Health Workers", desc: "Accelerate your CHW certification path." },
    { title: "Behavioral Health Internship", desc: "Gain hands-on experience in real work settings!" },
];

const outcomes = [
    { title: "Registered Behavior Technician (RBT)", desc: "Provide behavioral therapy to children with autism. Avg. salary: $53,298" },
    { title: "Community Health Worker", desc: "Connect families with vital behavioral health resources. Avg. salary: $44,057" },
    { title: "Residential Counselor", desc: "Support children in residential treatment and group home settings." },
    { title: "Youth Worker", desc: "Guide young people through behavioral and emotional challenges." },
    { title: "Behavioral Health Specialist", desc: "Work in schools, clinics, and community organizations." },
    { title: "Direct Support Professional", desc: "Provide hands-on support to children with special needs." },
];

const benefits: ProgramBenefit[] = [
    { title: "Fast Track", desc: "Finish in as little as 9 months (only 16 credits!)", icon: Clock },
    { title: "100% Online", desc: "Study 100% online at your own pace", icon: Globe },
    { title: "Debt-Free Goal", desc: "Most students graduate debt-free!", icon: DollarSign },
    { title: "RBT® Exam Prep", desc: "Prepare to pass the Registered Behavior Technician exam", icon: Award },
    { title: "Accelerate CHW Cert.", desc: "Apply for MA CHW certification with only 2,000 hours of experience", icon: TrendingUp },
    { title: "Bilingual Options", desc: "Learn in English or Spanish", icon: MessageCircleIcon },
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: '16', icon: Award, sub: 'Credits' },
    { label: 'Time', value: '9 Months', icon: Clock, sub: 'To Complete' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'Aid', value: 'Yes', icon: Award, sub: 'Financial Aid Available' },
    { label: 'Outcome', value: 'Job Ready', icon: CheckCircle, sub: 'Career Focused' },
];

const faqs = [
    { q: "Is the program entirely online?", a: "Absolutely! Fully online with both synchronous and asynchronous options." },
    { q: "How long does it take?", a: "As little as 9 months for 16 credits full-time." },
    { q: "Do I need prior experience?", a: "No! The program covers all foundational knowledge." },
    { q: "What is RBT® certification?", a: "A nationally recognized credential for providing behavioral therapy to children. Our program prepares you for the exam." },
    { q: "What is CHW certification?", a: "A credential for connecting families with resources. We are a Board-Certified training site, cutting your path to certification in half." },
    { q: "Am I eligible for financial aid?", a: "Yes! Most students qualify and graduate debt-free." },
];

const ChildrensBehavioralHealth: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <ProgramPageLayout
            badge="Children's Behavioral Health Certificate"
            title={<>Launch Your Career & <span style={{ color: '#E68325' }}>Help Children Thrive</span></>}
            subtitle="In as little as 9 months. Most students graduate debt-free."
            headerImageSrc="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2940&auto=format&fit=crop"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: "Children's Behavioral Health" }
            ]}

            tagline="Transform Young Lives While Building Your Career"
            taglineBody={
                <p>
                    Urban College of Boston's Children's Behavioral Health Certificate empowers you to master the skills
                    to support children with special needs and their families—all without interrupting your busy life.{' '}
                    <span className="text-ucb-blue font-semibold">This fully online program</span>{' '}
                    prepares you for high-demand, high-growth opportunities.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "Apply evidence-based behavioral interventions with children",
                        "Understand trauma, resiliency, and child development",
                        "Support families navigating behavioral health challenges"
                    ]
                },
                {
                    heading: "Certifications & Credentials",
                    icon: Award,
                    items: [
                        "Pass the RBT® certification exam and begin working immediately",
                        "Connect children and families to community resources",
                        "Maintain professional and ethical standards in behavioral health"
                    ]
                }
            ]}
            achievementNote="Courses are practical and designed to help you apply skills immediately on the job, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="This certificate prepares you for career-building roles in one of the fastest-growing fields. High demand across Massachusetts means opportunities are waiting for you!"
            outcomeTags={['Healthcare', 'Behavioral Health', 'Youth Worker', 'Education']}

            stats={stats}

            forWhom={[
                "Wanting to launch a career in behavioral health",
                "Seeking to become an RBT or Community Health Worker",
                "Looking for an online program that fits a busy schedule",
                "Planning to earn an Associate Degree",
                "A multilingual learner seeking language support"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="The Children's Behavioral Health Certificate prepares you for RBT® or CHW certification. Earn a salary while you work toward advanced credentials."
            pathwaySteps={[
                { label: 'Certificate', credits: '16 Credits', active: false },
                { label: 'Associate Degree', credits: '60 Credits', active: true },
                { label: "Bachelor's Degree", credits: 'Transfer Ready', active: false },
            ]}

            testimonial={{
                quote: "Urban College created the pathway for me to go towards the future I want for myself.",
                name: "Krystal",
                role: "Children's Behavioral Health Alum",
                imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
            }}

            faqs={faqs}
            programName="Children's Behavioral Health"
        />
    );
};

export default ChildrensBehavioralHealth;
