import React, { useEffect } from 'react';
import { BookOpen, Clock, Globe, Briefcase, CheckCircle, TrendingUp, Users, DollarSign, Calendar, Award, Compass, GraduationCap, ArrowRight } from 'lucide-react';
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
    { title: "General Psychology", desc: "Understand human behavior and motivation." },
    { title: "Computer Information Systems", desc: "Build essential technology skills." },
    { title: "Cultural Aspects of Families and Children", desc: "Explore diversity and family dynamics." },
    { title: "College Writing I and II", desc: "Master professional communication." },
    { title: "Electives Based on Your Interests", desc: "Customize your education to match your goals." },
    { title: "General Education Requirements", desc: "Complete transferable credits for a bachelor's degree." }
];

const outcomes = [
    { title: "Administrative Assistant", desc: "Support office operations and management. Median national salary: $55,560!" },
    { title: "General Manager", desc: "Lead teams and oversee operations. 6% projected job growth!" },
    { title: "Sales Agent", desc: "Build client relationships and drive revenue." },
    { title: "Research Assistant", desc: "Support research projects across fields." },
    { title: "Executive Assistant", desc: "Provide high-level administrative support." },
    { title: "Bank Teller", desc: "Assist customers with financial transactions." },
    { title: "Small Business Owner", desc: "Start and run your own business." }
];

const benefits: ProgramBenefit[] = [
    { title: "Flexible Future", desc: "Explore different subjects and career paths", icon: Compass },
    { title: "100% Online", desc: "Learn on a schedule that fits to your busy life", icon: Globe },
    { title: "Financial Aid", desc: "Personalized aid plans & options", icon: DollarSign },
    { title: "Ready for Transfer", desc: "Credits transfer to a 4-year degree", icon: TrendingUp },
    { title: "Wide Variety of Careers", desc: "Your options are wide open", icon: Briefcase },
    { title: "ESL Support", desc: "English language support available", icon: MessageCircleIcon },
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: '60', icon: Award, sub: 'Credits' },
    { label: 'Time', value: '2 Years', icon: Clock, sub: 'To Complete' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'Start', value: 'Rolling', icon: Calendar, sub: 'Start Date' },
    { label: 'Aid', value: 'Yes', icon: GraduationCap, sub: 'Financial Aid' },
    { label: 'Language', value: 'English', icon: Globe, sub: 'English only' },
    { label: 'Outcome', value: 'Job Ready', icon: CheckCircle, sub: 'Career Focused' },
];

const faqs = [
    { q: "Can I transfer my credits?", a: "Yes! The program is designed to be transferable to 4-year colleges and universities." },
    { q: "How much does it cost?", a: "$11,100 for the full degree. However, most students qualify for financial aid to offset tuition costs." },
    { q: "Am I eligible for financial aid?", a: "Yes! Most of our students receive financial aid that covers the full cost of tuition." },
    { q: "What do I need to apply?", a: "You'll need a copy of your high school diploma, GED, or HISET, a photo ID, and a completed application." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const GeneralStudiesAssociate: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <SEO
                title="General Studies Associate Degree"
                description="Customize your associate degree with the General Studies program at Urban College of Boston. Flexible electives, transferable credits, and multilingual support."
                canonicalPath="/programs/general-studies-associate"
                jsonLd={[
                    buildCourseJsonLd({
                        name: "General Studies Associate Degree",
                        description: "Customize your associate degree with the General Studies program at Urban College of Boston. Flexible electives, transferable credits, and multilingual support.",
                        path: '/programs/general-studies-associate',
                        credentialCategory: 'degree',
                        educationLevel: 'Associate',
                    }),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Programs', path: '/programs' },
                        { name: "General Studies Associate Degree", path: '/programs/general-studies-associate' },
                    ]),
                ]}
            />
        <ProgramPageLayout
            badge="General Studies Associate Degree"
            title={<>Explore Your Possibilities & <span style={{ color: '#E68325' }}>Build Your Future</span></>}
            subtitle="Flexible. Affordable. Transferable. Accessible education designed for working students."
            headerImageSrc="/Program%20Images%20for%20Website/General%20Studies%20AA%201.jpg"
            secondaryImageSrc="/Program%20Images%20for%20Website/General%20Studies%20AA%202.jpg"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'General Studies Associate' }
            ]}

            tagline="Explore Your Possibilities—Build Your Future on Your Terms"
            taglineBody={
                <p>
                    Not sure what you want to study? That's okay—this degree is for you. The General Studies Associate Degree is perfect for students who want a college degree but aren't sure what career path to pursue.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">This versatile degree empowers you to explore different subjects</span> while earning an accredited Associate Degree—all online, all on your schedule.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "Communicate effectively in written and oral forms.",
                        "Think critically and solve complex problems.",
                        "Develop a broad foundation of knowledge in humanities and sciences."
                    ]
                },
                {
                    heading: "Ethical & Practical",
                    icon: Award,
                    items: [
                        "Gain essential computer and technology skills.",
                        "Explore different industries and find your passion.",
                        "Prepare for transfer to a 4-year college or university."
                    ]
                }
            ]}
            achievementNote="Courses are practical and designed to help you apply skills immediately on the job, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="You'll graduate ready to pursue many different career opportunities, from starting your own small business to becoming a general manager."
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
            pathwayDescription="The General Studies Associate is a stackable, for-credit program. Credits may transfer toward an associate or bachelor's degree."
            pathwaySteps={[
                { label: 'Certificate', credits: 'varies', active: false },
                { label: 'AA in General Studies', credits: '60 Credits', active: true },
                { label: "Bachelor's Degree", credits: 'Transfer Ready', active: false },
            ]}

            testimonial={{
                quote: "It really drove me to understand the concept of working and also going to school. That's when Urban College became my pathway to where I am today—I work in cyber security, and earned my master's.",
                name: "Miguel S.",
                role: "Alum",
                imageSrc: "/assets/images/testimonials/miguel-s.png"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="General Studies Associate"
        />
        </>
    );
};

export default GeneralStudiesAssociate;
