import React, { useEffect } from 'react';
import { Clock, Globe, DollarSign, TrendingUp, Award, Briefcase, CheckCircle, Users, Calendar, GraduationCap } from 'lucide-react';
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
    { title: "Introduction to Human Services", desc: "Build your foundation in the field" },
    { title: "Case Management", desc: "Master the core skills employers want" },
    { title: "Counseling & Interviewing Techniques", desc: "Connect with clients effectively" },
    { title: "Human Services or Social Science Electives", desc: "Customize your education" },
    { title: "Internship I", desc: "Gain hands-on experience in real work settings" },
    { title: "General Education Requirements", desc: "Writing, psychology, and more to round out your education" }
];

const outcomes = [
    { title: "Social Work Assistant", desc: "Support social workers in helping clients. (MA average: $48,460/year, BLS OEWS May 2023; 8% projected MA growth, 2022–2032.)" },
    { title: "Community Health Worker", desc: "Connect communities with vital health and social services" },
    { title: "Family Support Worker", desc: "Help families navigate housing, childcare, and financial assistance" },
    { title: "Human Services Coordinator", desc: "Manage programs and services for vulnerable populations" },
    { title: "Case Manager", desc: "Coordinate care for individuals with complex needs" },
    { title: "Behavioral Health Specialist", desc: "Support individuals with mental health or substance use challenges" },
    { title: "Licensed Social Work Associate (LSWA)", desc: "Qualify to apply for state licensure in Massachusetts!" }
];

const benefits: ProgramBenefit[] = [
    { title: "High MA Salaries", desc: "Community and social service specialists in MA earn an average of $57,410/year (BLS OEWS, May 2023)", icon: DollarSign },
    { title: "Growing Field", desc: "8% projected job growth in Massachusetts (2022–2032)—faster than the national average", icon: TrendingUp },
    { title: "100% Online", desc: "Study 100% online: Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Financial Aid", desc: "Personalized aid plans & options", icon: CheckCircle },
    { title: "Bilingual Options", desc: "Learn in English and/or Spanish", icon: MessageCircleIcon },
    { title: "ESL Support", desc: "ESL support available: Tailored to each student's needs", icon: Users },
    { title: "Hands-On Internships", desc: "Hands-on internships: Gain real-world experience before you graduate", icon: Briefcase },
    { title: "Pathway to Licensure", desc: "Qualify to apply for Licensed Social Work Associate (LSWA) credential in Massachusetts", icon: Award }
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: '60', icon: Award, sub: 'Credits' },
    { label: 'Time', value: '2 Years', icon: Clock, sub: 'To Complete' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'Start', value: 'Rolling', icon: Calendar, sub: 'Start Date' },
    { label: 'Aid', value: 'Yes', icon: GraduationCap, sub: 'Financial Aid' },
    { label: 'Language', value: 'Bilingual', icon: Globe, sub: 'English & Spanish' },
    { label: 'Special', value: 'LSWA & Interns', icon: CheckCircle, sub: 'Special Feature' },
];

const faqs = [
    { q: "Is this degree right for me if I want to help people?", a: "Absolutely! This program is designed for people who want to make a real difference in their communities. You'll graduate ready to help individuals and families navigate life's challenges." },
    { q: "Is the program entirely online?", a: "Yes! The program is 100% online with both synchronous and asynchronous options. Learn on your schedule—early mornings, late nights, or weekends." },
    { q: "Will I get hands-on experience?", a: "Yes! The program includes internship placements through our network of human service agencies, childcare programs, mental health sites, and other organizations. You'll graduate with real experience." },
    { q: "What is the LSWA and can I apply for it?", a: "The Licensed Social Work Associate (LSWA) is a Massachusetts credential that demonstrates professional qualifications in social work. With your Human Services Associate Degree, you can apply for this credential and enhance your career opportunities." },
    { q: "Can I study in Spanish?", a: "Yes! We offer courses in both English and Spanish." },
    { q: "Can I continue toward a bachelor's degree?", a: "Absolutely! Our transfer agreements with partner colleges make it easy to continue toward a Bachelor's Degree—the gold standard credential in the field." },
    { q: "Am I eligible for financial aid?", a: "Most students are eligible for financial aid. Contact our financial aid office at (617) 449-7070-our team works with you one-on-one to identify grants, scholarships, and funding options that fit your situation and make your education as affordable as possible." }
];

// ─── Component ────────────────────────────────────────────────────────────────

const HumanServicesAdministration: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <SEO
                title="Human Services Administration Associate Degree"
                description="Lead in social services and community organizations with a Human Services Administration Associate Degree from Urban College of Boston."
                canonicalPath="/programs/human-services-administration-associate-degree"
                jsonLd={[
                    buildCourseJsonLd({
                        name: "Human Services Administration Associate Degree",
                        description: "Lead in social services and community organizations with a Human Services Administration Associate Degree from Urban College of Boston.",
                        path: '/programs/human-services-administration-associate-degree',
                        credentialCategory: 'degree',
                        educationLevel: 'Associate',
                    }),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Programs', path: '/programs' },
                        { name: "Human Services Administration Associate Degree", path: '/programs/human-services-administration-associate-degree' },
                    ]),
                ]}
            />
        <ProgramPageLayout
            badge="Human Services Administration"
            title={<>Transform Lives & <span style={{ color: '#E68325' }}>Build Your Career in Social Services</span></>}
            subtitle="8% Job Growth—Faster Than Average! Accessible education designed for working students."
            headerImageSrc="/Program%20Images%20for%20Website/Human%20Services%20AA%201.jpg"
            secondaryImageSrc="/Program%20Images%20for%20Website/Human%20Services%20AA%202.jpg"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Human Services Administration' }
            ]}

            tagline="Do you want to help people?"
            taglineBody={
                <p>
                    The Human Services Associate Degree is the perfect program for those who love to help others and want a successful career in social work, psychology, or family support.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">This degree empowers you to make a real difference in your community</span> while building the skills and credentials for a rewarding career. You'll gain hands-on experience through internships and graduate ready to step into high-demand roles.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "Assess client needs and connect them to essential services",
                        "Manage cases effectively across social services settings",
                        "Conduct counseling and interviews with clients and families",
                        "Navigate human services systems to advocate for clients"
                    ]
                },
                {
                    heading: "Ethics & Leadership",
                    icon: Award,
                    items: [
                        "Understand human behavior and apply it to help people",
                        "Maintain ethical and professional standards",
                        "Step into leadership roles in human services organizations"
                    ]
                }
            ]}
            achievementsIntro="You can pursue many different career opportunities, including becoming a Social Work Assistant, Community Health Worker, Family Support Worker, Human Services Coordinator, or Case Manager—and even qualify to apply for a Licensed Social Work Associate (LSWA) credential."
            achievementNote="Your courses include real-world internships—you'll graduate with experience on your resume, not just a degree."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="Human services is one of the fastest-growing fields in Massachusetts. You'll graduate ready for meaningful, career-building roles where you help people every day. Work in hospitals, clinics, nonprofits, schools, government agencies, or community organizations. Your skills are in high demand."
            outcomeTags={['Social Work', 'Advocacy', 'Case Management', 'Community Support']}
            outcomeSources={[
                { label: 'BLS OEWS May 2023: Community & Social Service Specialists (21-1099)', url: 'https://www.bls.gov/oes/2023/may/oes211099.htm' },
                { label: 'BLS OEWS May 2023: Social & Human Service Assistants (21-1093)', url: 'https://www.bls.gov/oes/2023/may/oes211093.htm' },
                { label: 'Projections Central (MA, 2022–2032), via O*NET', url: 'https://www.onetonline.org/link/localtrends/21-1093.00?st=MA' },
            ]}

            stats={stats}

            forWhom={[
                "Passionate about helping people and community advocacy",
                "Want to earn an Associate degree and pursue a Bachelor's Degree",
                "Looking for an online program with bilingual options",
                "Seeking hands-on internships to build a resume",
                "Want to build a career in social work with affordable tuition",
                "Passionate about helping people and strengthening communities"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="Our transfer agreements with partner colleges make it easy to continue your education toward a Bachelor's Degree—the gold standard credential for the field."
            pathwaySteps={[
                { label: 'Certificate', credits: '21 Credits', active: false },
                { label: 'Associate Degree', credits: '60 Credits', active: true },
                { label: "Bachelor's Degree", credits: 'Transfer Ready', active: false }
            ]}

            testimonial={{
                quote: "Urban College was definitely a stepping stone that fueled my passion for advocacy. I love how my voice can make a difference, and I have the opportunity to influence positive change in my community.",
                name: "Ayesha M. W.",
                role: "Alum",
                imageSrc: "/assets/images/testimonials/ayesha-w.jpg"
            }}

            faqs={faqs}
            programName="Human Services Administration"
        />
        </>
    );
};

export default HumanServicesAdministration;
