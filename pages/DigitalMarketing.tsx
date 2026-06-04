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
    { title: "Introduction to Computer Applications", desc: "Master the tools you need for the digital workplace." },
    { title: "Principles of Marketing", desc: "Learn the fundamentals of consumer behavior and strategy." },
    { title: "Social Media Marketing", desc: "Gain hands-on experience managing major social platforms." },
    { title: "Speech Communication", desc: "Develop presentation and communication skills required in marketing." },
    { title: "Digital Marketing Strategies", desc: "Master SEO, email marketing, and paid advertising." },
    { title: "Content Creation & Brand Management", desc: "Learn to design visuals and write copy." }
];

const outcomes = [
    { title: "Digital Marketing Coordinator", desc: "Manage online marketing campaigns. Average Salary: $51,000+" },
    { title: "Social Media Specialist", desc: "Lead social media strategy. Projected Growth: 10% (faster than average)" },
    { title: "Content Creator", desc: "Design visuals and write copy that builds brand loyalty." },
    { title: "Marketing Assistant", desc: "Support digital marketing campaigns and business strategies." }
];

const benefits: ProgramBenefit[] = [
    { title: "Fast Track", desc: "Finish in as little as one year (only 18 credits!)", icon: Clock },
    { title: "100% Online", desc: "Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Financial Aid", desc: "Personalized aid plans & options", icon: DollarSign },
    { title: "Build a Portfolio", desc: "Graduate with professional marketing projects", icon: Briefcase },
    { title: "No Textbooks", desc: "No hidden fees, everything you need is included", icon: BookOpen },
    { title: "Bilingual Options", desc: "Learn in English and/or Spanish", icon: MessageCircleIcon },
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
    { q: "How long does the program take?", a: "In as little as one year! Complete your 18 credits full-time in two semesters or part-time at your own pace." },
    { q: "Do I need prior marketing experience?", a: "No! This program is designed for beginners. We provide the foundational skills." },
    { q: "Can I study in Spanish?", a: "Yes! We offer the program in both English and Spanish." },
    { q: "Am I eligible for financial aid?", a: "Yes! Most Urban College students receive financial aid, and our advisors work with you to leverage federal, state, and private grants." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const DigitalMarketing: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <SEO
                title="Digital Marketing Certificate Program"
                description="Launch your digital marketing career with a certificate from Urban College of Boston. SEO, content, social media, and analytics — fully online."
                canonicalPath="/programs/digital-marketing-certificate"
                jsonLd={[
                    buildCourseJsonLd({
                        name: "Digital Marketing Certificate",
                        description: "Launch your digital marketing career with a certificate from Urban College of Boston. SEO, content, social media, and analytics — fully online.",
                        path: '/programs/digital-marketing-certificate',
                        credentialCategory: 'certificate',
                    }),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Programs', path: '/programs' },
                        { name: "Digital Marketing Certificate", path: '/programs/digital-marketing-certificate' },
                    ]),
                ]}
            />
        <ProgramPageLayout
            badge="Digital Marketing Certificate"
            title={<>Master In-Demand Digital Skills & <span style={{ color: '#E68325' }}>Launch Your Marketing Career</span></>}
            subtitle="In as little as one year. Accessible, high-quality education designed for working adults."
            headerImageSrc="/Program%20Images%20for%20Website/Marketing%20Cert%201.jpg"
            secondaryImageSrc="/Program%20Images%20for%20Website/Marketing%20Cert%202.jpg"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Digital Marketing' }
            ]}

            tagline="Develop Skills That Get You Hired"
            taglineBody={
                <p>
                    Build the digital marketing skills employers want—without interrupting your life.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">Urban College of Boston's Digital Marketing Certificate</span> empowers you to master social media, branding, content creation, and marketing strategy.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "Create and manage professional social media campaigns",
                        "Develop data-driven digital marketing strategies",
                        "Design compelling content for various digital platforms"
                    ]
                },
                {
                    heading: "Ethical & Practical",
                    icon: Award,
                    items: [
                        "Analyze marketing metrics to drive business growth",
                        "Build and manage a consistent brand presence",
                        "Build a Professional Portfolio of real-world marketing projects"
                    ]
                }
            ]}
            achievementNote="Courses are practical and designed to help you apply skills immediately on the job, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="The digital marketing field is expanding rapidly as every business needs a strong online presence. This certificate prepares you for high-growth roles."
            outcomeTags={['Marketing', 'Social Media', 'Content Creation', 'SEO']}

            stats={stats}

            forWhom={[
                "Want to launch a career in marketing but don’t know where to start",
                "Are a busy adult who needs a 100% online, flexible schedule",
                "Already work in marketing or social media and want a college credential",
                "Want to build a professional portfolio while you earn credits",
                "Prefer to study in English or Spanish"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="Our 'stackable' for-credit program means your hard work counts toward more than just a certificate."
            pathwaySteps={[
                { label: 'Certificate (18 Credits)', credits: '18 Credits', active: false },
                { label: 'Associate Degree', credits: '60 Credits', active: true },
                { label: "Bachelor's Degree", credits: 'Transfer Ready', active: false },
            ]}

            testimonial={{
                quote: "My favorite part about Urban College has been the ability to complete my degree quickly and efficiently. I truly didn’t anticipate how fast the time would pass, and now I’m proud to be an alumni. The professors have played an essential role in my success, and I am incredibly grateful for their support and guidance throughout this journey.",
                name: "Elijah W.",
                role: "Alum",
                imageSrc: "/assets/images/testimonials/elijah-w.png"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="Digital Marketing"
        />
        </>
    );
};

export default DigitalMarketing;
