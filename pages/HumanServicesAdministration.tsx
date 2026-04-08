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
    { title: "Introduction to Human Services", desc: "Your foundation in the field." },
    { title: "Case Management", desc: "Learn to connect clients with vital resources." },
    { title: "Counseling and Interviewing Techniques", desc: "Build communication skills to support individuals in crisis." },
    { title: "Human Behavior and Social Environment", desc: "Understand how societal spaces affect development." },
    { title: "Human Services Internships I & II", desc: "Apply what you've learned through real-world professional practice." },
];

const outcomes = [
    { title: "Social and Human Services Assistant", desc: "Support social workers in providing client services. ($48,460 average salary in MA)" },
    { title: "Community Health Worker", desc: "Bridge the gap between communities and health services." },
    { title: "Case Manager", desc: "Coordinate care and connect clients to resources." },
    { title: "Family Support Worker", desc: "Help families navigate systems like housing and childcare." },
    { title: "Direct Care Professional", desc: "Provide hands-on support in residential or community settings." },
    { title: "Youth Worker", desc: "Support children and teens in achieving their potential." },
];

const benefits: ProgramBenefit[] = [
    { title: "Flexible Learning", desc: "100% online options tailored for working adults", icon: Globe },
    { title: "Debt-Free Goal", desc: "Most students graduate debt-free!", icon: DollarSign },
    { title: "Career Placement", desc: "Internships built into the curriculum", icon: Briefcase },
    { title: "Bilingual Classes", desc: "Learn in English or Spanish with ESL support", icon: MessageCircleIcon },
    { title: "Real Transfer Pathways", desc: "Seamless progression to Bachelor's degrees", icon: TrendingUp },
    { title: "High Demand Field", desc: "9% job growth — faster than average!", icon: Award },
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: '60', icon: Award, sub: 'Credits' },
    { label: 'Time', value: '2 Years', icon: Clock, sub: 'To Complete' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'Growth', value: '9%', icon: TrendingUp, sub: 'Job Growth Rate' },
    { label: 'Outcome', value: 'Job Ready', icon: CheckCircle, sub: 'Career Focused' },
];

const faqs = [
    { q: "Is the program online?", a: "Yes, you can complete the degree entirely online with synchronous and asynchronous options." },
    { q: "How long does it take?", a: "Typically 2 years if studying full-time. Financial aid allows many students to finish debt-free." },
    { q: "Can I transfer credits?", a: "Yes, credits transfer seamlessly to BSW programs, like our partnership with Regis College." },
    { q: "Do I need experience?", a: "No prior human services experience is needed. The curriculum starts with foundational concepts." },
    { q: "Are internships required?", a: "Yes, real-world internships are included so you can graduate with job-ready experience." },
];

const HumanServicesAdministration: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <ProgramPageLayout
            badge="Human Services Administration"
            title={<>Build a Career Advocating For Others & <span style={{ color: '#E68325' }}>Transform Your Community</span></>}
            subtitle="A 60-Credit Associate Degree. Most students graduate debt-free."
            headerImageSrc="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop"
            breadcrumbs={[
                { label: 'Programs', path: '/#programs' },
                { label: 'Human Services Administration' }
            ]}

            tagline="Empower Individuals, Families, and Communities"
            taglineBody={
                <p>
                    Do you have a passion for helping people and addressing social injustices? The Associate of Arts in
                    Human Services Administration degree prepares you to make a direct impact on the lives of others
                    while building a stable, rewarding career.{' '}
                    <span className="text-ucb-blue font-semibold">Taught by experienced professionals</span>{', '}
                    this program gives you the real-world skills needed in one of the fastest-growing fields.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "Evaluate client needs and coordinate essential services",
                        "Master interviewing techniques for counseling environments",
                        "Examine social welfare policies and human behavior theories"
                    ]
                },
                {
                    heading: "Hands-On Experience",
                    icon: Award,
                    items: [
                        "Complete 300+ hours of hands-on internship experience",
                        "Develop culturally competent practices for diverse populations",
                        "Prepare for industry credentials like the LSWA"
                    ]
                }
            ]}
            achievementNote="Courses are practical and designed to help you apply skills immediately on the job, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="The human services field is expanding rapidly. Earn your degree and secure a role in a high-demand profession with a 9% projected job growth rate."
            outcomeTags={['Social Work', 'Advocacy', 'Case Management', 'Community Support']}

            stats={stats}

            forWhom={[
                "Passionate about helping people and community advocacy",
                "Want to earn an Associate degree and pursue a BSW",
                "Looking for an online program with bilingual options",
                "Seeking hands-on internships to build a resume",
                "Want to graduate debt-free with competitive tuition"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="The Human Services Administration is a stackable, for-credit program. Credits may transfer toward a bachelor's degree."
            pathwaySteps={[
                { label: 'A.A. Human Services', credits: '60 Credits', active: true },
                { label: "BSW Degree", credits: 'Transfer Ready', active: false },
                { label: "MSW / Career", credits: 'Advanced Path', active: false },
            ]}

            testimonial={{
                quote: "Through Urban College, I really homed in on human services and social work. Understanding advocacy was pivotal for me. Urban was that stepping stone... and now I get to lead and empower other folks.",
                name: "Ayesha M. Wilson",
                role: "Human Services Alum",
                imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
            }}

            faqs={faqs}
            programName="Human Services Administration"
        />
    );
};

export default HumanServicesAdministration;
