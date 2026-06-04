import React, { useEffect } from 'react';
import { BookOpen, Clock, Globe, Briefcase, CheckCircle, TrendingUp, Users, DollarSign, Calendar, Award, GraduationCap, ArrowRight } from 'lucide-react';
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
    { title: "Elder Care Coordinator", desc: "Manage programs and services for senior populations." },
    { title: "Private Homecare Agency Owner", desc: "Start your own elder care business!" }
];

const benefits: ProgramBenefit[] = [
    { title: "Fast Track", desc: "Finish in as little as one year (21 credits)", icon: Clock },
    { title: "100% Online", desc: "Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Financial Aid", desc: "Personalized aid plans & options", icon: DollarSign },
    { title: "Built-In CHW Credential", desc: "Earn your Community Health Worker credential: Higher salary and career growth", icon: Award },
    { title: "Credit for Prior Learning", desc: "Your experience counts!", icon: TrendingUp },
    { title: "Bilingual Options", desc: "Learn in English and/or Spanish", icon: MessageCircleIcon },
    { title: "Booming Field", desc: "58% projected job growth in Massachusetts!", icon: TrendingUp },
    { title: "Accelerated CHW Path", desc: "Apply for Massachusetts CHW certification with only 2,000 hours of work experience instead of 4,000.", icon: Clock },
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

const achievements = [
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
];

const forWhom = [
    "Passionate about helping older adults",
    "Seeking to become a Community Health Worker",
    "Looking for a fast-growing, secure career field",
    "Already working in care and want college credit",
    "Planning to earn an AA in Human Services"
];

const pathwaySteps = [
    { label: 'Certificate', credits: '21 Credits', active: false },
    { label: 'Associate Degree', credits: '60 Credits', active: true },
    { label: "Bachelor's Degree", credits: 'Transfer Agreements', active: false },
];

const testimonial = {
    quote: "Urban college was the foundation for where I am professional and personal. When I provide a service, I think about what I would want provided to me if I were in a similar situation. Treat everyone with love and kindness.",
    name: "Charmaine B.",
    role: "Alum",
    imageSrc: "/assets/images/testimonials/charmaine-b.jpg"
};

const faqs = [
    { q: "Is the program entirely online?", a: "Absolutely! The program is fully online with both synchronous and asynchronous options. Learn on your schedule—early mornings, late nights, or weekends." },
    { q: "How long does the program take?", a: "In as little as one year! Complete your 21 credits full-time, or take it at your own pace—the program fits into your busy life." },
    { q: "What is the Community Health Worker (CHW) certification?", a: "Urban College is a Board-Certified CHW Education and Training Site. Students who complete our training need only 2,000 hours of work experience instead of 4,000 to apply for Massachusetts CHW certification!" },
    { q: "Do I need prior experience?", a: "No! No prior experience is required. If you do have experience, we offer credit for prior learning!" },
    { q: "Am I eligible for financial aid?", a: "Yes! Most students are eligible for financial aid. Contact our financial aid office at (617) 449-7070. Our financial aid team will work with you one-on-one to identify grants, scholarships, and funding options that fit your situation, making your education as affordable as possible." },
];

const ctaRequirements = ['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application'];

// ─── Component ────────────────────────────────────────────────────────────────

const ElderCare: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <SEO
                title="Elder Care Certificate Program"
                description="Prepare for a meaningful career supporting older adults with an Elder Care Certificate from Urban College of Boston. Affordable, online, and multilingual."
                canonicalPath="/programs/elder-care"
                jsonLd={[
                    buildCourseJsonLd({
                        name: "Elder Care Certificate",
                        description: "Prepare for a meaningful career supporting older adults with an Elder Care Certificate from Urban College of Boston. Affordable, online, and multilingual.",
                        path: '/programs/elder-care',
                        credentialCategory: 'certificate',
                    }),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Programs', path: '/programs' },
                        { name: "Elder Care Certificate", path: '/programs/elder-care' },
                    ]),
                ]}
            />
        <ProgramPageLayout
            badge="Elder Care Certificate"
            title={<>Make a Difference in Seniors' Lives While <span style={{ color: '#E68325' }}>Building Your Career</span></>}
            subtitle="In as little as one year! Accessible, high-quality education designed for working students."
            headerImageSrc="/Program%20Images%20for%20Website/Elder%20Care%20Cert%201.jpg"
            secondaryImageSrc="/Program%20Images%20for%20Website/Elder%20Care%20Cert%202.jpg"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Elder Care' }
            ]}

            tagline="Transform Lives While Building Your Career"
            taglineBody={
                <p>
                    Transform lives while building your own career. Urban College of Boston's Elder Care Certificate empowers you to master the skills that help older adults and their families thrive—all while fitting into your busy life.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">With 58% projected job growth</span> in Massachusetts, you'll graduate ready to succeed in one of the state's fastest-growing fields!
                    <br className="hidden md:block" />
                    <span className="text-ucb-green font-semibold">BONUS:</span> This program uniquely prepares you to earn the Community Health Worker credential—higher starting salary and eligibility for insurance reimbursement!
                </p>
            }

            benefits={benefits}

            achievements={achievements}
            achievementNote="Your courses include hands-on internships—gain real experience while you learn!"

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="This certificate prepares you for career-building roles in one of Massachusetts' fastest-growing fields."
            outcomeTags={['Healthcare', 'Elder Care', 'Case Management', 'Community']}

            stats={stats}

            forWhom={forWhom}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="Every credit you earn counts toward an Associate Degree at Urban College. When you're ready, our transfer agreements make it easy to continue toward a bachelor's degree. Your certificate is your first step—not your last!"
            pathwaySteps={pathwaySteps}

            testimonial={testimonial}

            faqs={faqs}

            ctaRequirements={ctaRequirements}
            programName="Elder Care Certificate"
        />
        </>
    );
};

export default ElderCare;
