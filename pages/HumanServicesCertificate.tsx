import React, { useEffect } from 'react';
import { BookOpen, Clock, Globe, Briefcase, CheckCircle, TrendingUp, Users, DollarSign, Calendar, Award, GraduationCap } from 'lucide-react';
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
    { title: "Professional Seminar I", desc: "Build professional skills for success in human services" },
    { title: "Introduction to Human Services", desc: "Understand the field, the systems, and the people you'll serve" },
    { title: "Case Management", desc: "Master the core skills employers want most" },
    { title: "Human Services or Social Science Elective", desc: "Customize your education to match your career goals" }
];

const outcomes = [
    { title: "Case Manager", desc: "Coordinate care and connect clients to essential services. (MA average: $48,460/year—among the highest-paying states; 8% projected MA growth, 2022–2032.)" },
    { title: "Social Services Assistant", desc: "Support social workers in helping clients navigate services" },
    { title: "Behavior Technician", desc: "Apply intervention strategies to support individuals with behavioral needs" },
    { title: "Direct Support Professional", desc: "Provide hands-on support to individuals with disabilities or special needs" },
    { title: "Community Health Worker", desc: "Connect communities with vital health and social resources" },
    { title: "Family Support Worker", desc: "Help families navigate housing, childcare, and financial assistance" }
];

const benefits: ProgramBenefit[] = [
    { title: "High MA Salaries", desc: "Social and human service assistants in MA earn an average of $48,460/year—among the highest-paying states (BLS OEWS, May 2023)", icon: DollarSign },
    { title: "Growing Field", desc: "8% projected job growth in Massachusetts (2022–2032)—faster than the national average", icon: TrendingUp },
    { title: "Fast Track", desc: "Finish in as little as 9 months (only 21 credits)", icon: Clock },
    { title: "100% Online", desc: "Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Financial Aid", desc: "Personalized aid plans & options", icon: CheckCircle },
    { title: "Bilingual Options", desc: "Learn in English and/or Spanish", icon: MessageCircleIcon },
    { title: "ESL Support", desc: "ESL support available: Tailored to each student's needs", icon: Users },
    { title: "Access Internships", desc: "Access internships: Through our network of human service agencies, childcare programs, and mental health organizations", icon: BookOpen }
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: '21', icon: Award, sub: 'Credits' },
    { label: 'Time', value: '9 Months', icon: Clock, sub: 'To Complete' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'Start', value: 'Rolling', icon: Calendar, sub: 'Start Date' },
    { label: 'Aid', value: 'Yes', icon: GraduationCap, sub: 'Financial Aid' },
    { label: 'Language', value: 'Bilingual', icon: Globe, sub: 'English & Spanish' },
    { label: 'Outcome', value: 'Job Ready', icon: CheckCircle, sub: 'Career Focused' },
];

const faqs = [
    { q: "Can I work while completing this certificate?", a: "Absolutely! This program is designed for working students. All courses are online with flexible scheduling, so you can balance work, family, and school. Many students work full-time while completing their certificate." },
    { q: "Is the program entirely online?", a: "Yes! The program is 100% online with both synchronous and asynchronous options. Learn on your schedule—early mornings, late nights, or weekends." },
    { q: "How long does the program take?", a: "In as little as 9 months! Complete your 21 credits full-time, or take it at your own pace—the program fits into your busy life." },
    { q: "Do I need prior experience in human services?", a: "No! No prior experience is required. The program covers all foundational knowledge. Whether you're starting fresh or advancing in your current role, you'll get the skills you need." },
    { q: "Will my credits transfer to an associate's degree?", a: "Yes! All 21 credits transfer directly into the Human Services Administration Associate Degree at Urban College. Continue your education whenever you're ready." },
    { q: "Can I study in Spanish?", a: "Yes! We offer courses in both English and Spanish." },
    { q: "Am I eligible for financial aid?", a: "Most students are eligible for financial aid. Contact our financial aid office at (617) 449-7070-our team works with you one-on-one to identify grants, scholarships, and funding options that fit your situation and make your education as affordable as possible." }
];

// ─── Component ────────────────────────────────────────────────────────────────

const HumanServicesCertificate: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <SEO
                title="Human Services Certificate Program"
                description="Start a career in human services with a certificate from Urban College of Boston. Hands-on training in case management, advocacy, and community support."
                canonicalPath="/programs/human-services-certificate"
                jsonLd={[
                    buildCourseJsonLd({
                        name: "Human Services Certificate",
                        description: "Start a career in human services with a certificate from Urban College of Boston. Hands-on training in case management, advocacy, and community support.",
                        path: '/programs/human-services-certificate',
                        credentialCategory: 'certificate',
                    }),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Programs', path: '/programs' },
                        { name: "Human Services Certificate", path: '/programs/human-services-certificate' },
                    ]),
                ]}
            />
        <ProgramPageLayout
            badge="Human Services Certificate"
            title={<>Launch Your Career <span style={{ color: '#E68325' }}>Helping Others—While You Work</span></>}
            subtitle="In as little as 9 months! Accessible, high-quality education designed for working students."
            headerImageSrc="/Program%20Images%20for%20Website/Human%20Services%20Cert%201.jpg"
            secondaryImageSrc="/Program%20Images%20for%20Website/Human%20Services%20Cert%202.jpg"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Human Services Certificate' }
            ]}

            tagline="Start helping people now—don't wait"
            taglineBody={
                <p>
                    The Human Services Certificate is designed so you can work while earning your credential to advance your career in social services.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">No matter where you are in your career</span>, this program helps you build a strong understanding of the U.S. human services system, key social issues, and how to work effectively across diverse cultures—all while fitting into your busy life.
                    <br className="hidden md:block" />
                    You'll graduate ready for career-building roles such as Case Manager, Social Services Assistant, Behavior Technician, or Direct Support Professional—in one of Massachusetts' fastest-growing fields.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "Understand the U.S. human services system—how it works and how to navigate it for clients",
                        "Manage cases effectively—connect people to the services they need",
                        "Address key social issues—housing, healthcare, mental health, substance use, and more"
                    ]
                },
                {
                    heading: "Ethical & Practical",
                    icon: Award,
                    items: [
                        "Work across diverse cultures—serve clients from all backgrounds with cultural competence",
                        "Advocate for individuals and families who need your support",
                        "Maintain professional and ethical standards in human services"
                    ]
                }
            ]}
            achievementNote="Your courses are practical and taught by experienced professionals—you'll apply these skills immediately on the job, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="Human services is one of the fastest-growing fields in Massachusetts. You'll graduate ready for meaningful, career-building roles where you help people every day. Work in hospitals, clinics, nonprofits, schools, government agencies, or community organizations. Your skills are in high demand."
            outcomeTags={['Social Services', 'Human Services', 'Case Management', 'Community']}
            outcomeSources={[
                { label: 'BLS OEWS May 2023: Social & Human Service Assistants (21-1093)', url: 'https://www.bls.gov/oes/2023/may/oes211093.htm' },
                { label: 'Projections Central (MA, 2022–2032), via O*NET', url: 'https://www.onetonline.org/link/localtrends/21-1093.00?st=MA' },
            ]}

            stats={stats}

            forWhom={[
                "Passionate about advancing your career in social services",
                "Want to work while earning your credential",
                "Looking for an online program with bilingual support",
                "Planning to transfer into a Human Services Administration Associate degree",
                "Want to build a strong understanding of key social issues"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="Every credit you earn transfers directly into the Human Services Associate Degree at Urban College. From there, our transfer agreements make it easy to continue toward a bachelor's degree."
            pathwaySteps={[
                { label: 'Certificate', credits: '21 Credits', active: false },
                { label: 'Associate Degree', credits: '60 Credits', active: true },
                { label: "Bachelor of Social Work (BSW)", credits: 'Transfer Ready', active: false },
            ]}

            testimonial={{
                quote: "Urban College was definitely a stepping stone that fueled my passion for advocacy. I love how my voice can make a difference, and I have the opportunity to influence positive change in my community.",
                name: "Ayesha M. W.",
                role: "Alum",
                imageSrc: "/assets/images/testimonials/ayesha-w.jpg"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="Human Services Certificate"
        />
        </>
    );
};

export default HumanServicesCertificate;
