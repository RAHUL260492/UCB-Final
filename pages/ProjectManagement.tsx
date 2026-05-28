import React, { useEffect } from 'react';
import { BookOpen, Clock, Globe, Briefcase, CheckCircle, TrendingUp, Users, DollarSign, Calendar, Award, GraduationCap } from 'lucide-react';
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
    { title: "Introduction to Computer Apps", desc: "Build essential technology skills for project management" },
    { title: "Principles of Management", desc: "Learn leadership and organizational fundamentals" },
    { title: "Project Management", desc: "Master planning, scheduling, budgeting, and execution" },
    { title: "Speech Communication", desc: "Present with confidence to teams and stakeholders" },
    { title: "Business Elective", desc: "Customize your learning to match your career goals" }
];

const outcomes = [
    { title: "Project Coordinator", desc: "Support project managers and keep projects on track. (Entry-level average salary: $59,009/year in Massachusetts!)" },
    { title: "Operations Supervisor", desc: "Oversee daily operations and team performance" },
    { title: "Program Analyst", desc: "Analyze program effectiveness and recommend improvements" },
    { title: "Project Manager", desc: "Lead projects from planning through completion" },
    { title: "Administrative Manager", desc: "Coordinate office operations and support services" },
    { title: "Team Lead", desc: "Guide teams to achieve project goals" }
];

const benefits: ProgramBenefit[] = [
    { title: "High Entry Salary", desc: "Earn $59,009+ as an entry-level Project Coordinator in Massachusetts!", icon: DollarSign },
    { title: "Fast Track", desc: "Finish in as little as one year (only 18 credits!)", icon: Clock },
    { title: "100% Online", desc: "Study 100% online: Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Financial Aid", desc: "Personalized aid plans & options", icon: CheckCircle },
    { title: "Bilingual Options", desc: "Study in English or Spanish: Choose the language that works for you", icon: MessageCircleIcon },
    { title: "No Textbooks", desc: "No textbooks or hidden fees: Everything you need is included", icon: BookOpen },
    { title: "ESL Support", desc: "ESL support available: Tailored to each student's needs", icon: Users },
    { title: "High Demand", desc: "A wide variety of career paths: Project management skills are in demand across every industry", icon: Award }
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
    { q: "Is the program entirely online?", a: "Absolutely! The program is 100% online with both synchronous and asynchronous options. Learn on your schedule—early mornings, late nights, or weekends." },
    { q: "How long does the program take?", a: "In as little as one year! Complete your 18 credits full-time, or take it at your own pace—the program fits into your busy life." },
    { q: "Do I need prior project management experience?", a: "No! No prior experience is required. The program covers all foundational knowledge—whether you're starting fresh or looking to formalize your skills, you'll graduate ready to succeed." },
    { q: "What industries can I work in with this certificate?", a: "Project management skills are needed across every industry—healthcare, technology, construction, finance, nonprofit, government, and more. This certificate opens doors to a wide variety of career paths." },
    { q: "Can I study in Spanish?", a: "Yes! Courses are available in English and Spanish—choose the language that works for you. ESL support is also available." },
    { q: "Am I eligible for financial aid?", a: "Yes! Most students are eligible for financial aid, scholarships, and grants. Contact our financial aid office at (617) 449-7070 for personalized guidance. Our financial aid advisors work one-on-one with students to find grants and scholarships." }
];

// ─── Component ────────────────────────────────────────────────────────────────

const ProjectManagement: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <ProgramPageLayout
            badge="Project Management Certificate"
            title={<>Lead Projects, Build Your Career, & <span style={{ color: '#E68325' }}>Earn While You Learn</span></>}
            subtitle="In As Little As One Year! Accessible, high-quality education designed for working adults."
            headerImageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Project Management' }
            ]}

            tagline="Build the skills employers want"
            taglineBody={
                <p>
                    Build the skills employers want—and open doors to a wide variety of career paths. Urban College of Boston's Project Management Certificate empowers you to master project planning, scheduling, budgeting, and leadership—all without interrupting your busy life.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">This fully online, career-building program empowers you to work in the field</span> while completing your degree—allowing you to earn while you learn. You'll graduate ready to succeed as a project coordinator, operations supervisor, program analyst, or project manager.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Project Planning & Execution",
                    icon: Briefcase,
                    items: [
                        "Plan and execute projects from start to finish",
                        "Create and manage project schedules and timelines",
                        "Develop and control budgets to keep projects on track",
                        "Use project management tools and technology"
                    ]
                },
                {
                    heading: "Leadership & Communication",
                    icon: Award,
                    items: [
                        "Lead teams effectively and communicate with stakeholders",
                        "Identify and manage risks before they become problems",
                        "Communicate professionally in presentations and business settings"
                    ]
                }
            ]}
            achievementNote="Your courses are practical and designed for real-world application—you'll apply these skills immediately on the job, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="Project management skills open doors across every industry. You'll graduate ready for career-building roles with strong earning potential and growth opportunities. Project managers are needed in healthcare, technology, construction, finance, and more."
            outcomeTags={['Management', 'Project Planning', 'Leadership', 'Operations']}

            stats={stats}

            forWhom={[
                "Starting your professional career",
                "A working adult upgrading skills",
                "Returning to school after a break",
                "A multilingual learner seeking inclusive college programs",
                "An immigrant student looking for a supportive college in the USA",
                "Planning an associate's or bachelor's degree in the future"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="Every credit you earn counts toward an Associate Degree at Urban College. When you're ready, our transfer agreements make it easy to continue toward a bachelor's degree at partner institutions and prepare you for credentials like the PMP certification."
            pathwaySteps={[
                { label: 'Certificate', credits: '18 Credits', active: true },
                { label: 'Associate Degree', credits: '60 Credits', active: false },
                { label: "Bachelor's & PMP", credits: 'Transfer Ready', active: false }
            ]}

            testimonial={{
                quote: "Urban College was the first place that unlocked in me the interest in higher learning. It sparked something in me clearly since I am now the CEO of an organization. I am very grateful to Urban College for seeing me, investing in me and pouring into me at a time where I needed it the most.",
                name: "Jerrell",
                role: "Alum",
                imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="Project Management Certificate"
        />
    );
};

export default ProjectManagement;
