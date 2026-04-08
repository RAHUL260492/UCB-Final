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
    { title: "Introduction to Teaching and Learning", desc: "Understand how students learn and how to support them" },
    { title: "Human Behavior in the Social Environment", desc: "Recognize the factors that shape child development" },
    { title: "Teaching Mathematics for Educators", desc: "Build skills to support math instruction" },
    { title: "Introduction to Special Education", desc: "Master foundations of supporting students with special needs" },
    { title: "Introduction to Behavior Analysis", desc: "Learn proven strategies for positive behavior support" },
    { title: "Early Language and Literacy Development", desc: "Help students build reading and writing skills" }
];

const outcomes = [
    { title: "Paraprofessional Educator", desc: "Average salary: $55,547/year in Massachusetts—one of the highest in the nation!" },
    { title: "Teaching Assistant", desc: "Work alongside teachers to support student learning" },
    { title: "Special Education Aide", desc: "Support students with special needs in inclusive classrooms" },
    { title: "Instructional Aide", desc: "Provide one-on-one and small group support to students" },
    { title: "Behavior Technician", desc: "Apply intervention strategies to support student success" },
    { title: "After-School Program Coordinator", desc: "Lead educational programming outside school hours" }
];

const benefits: ProgramBenefit[] = [
    { title: "Fast Track", desc: "Finish in as little as one year (only 21 credits)", icon: Clock },
    { title: "100% Online", desc: "Learn on a schedule that fits to your busy life", icon: Globe },
    { title: "Debt-Free Goal", desc: "Most students graduate debt-free!", icon: DollarSign },
    { title: "Special Education Expertise", desc: "Master one of the most in-demand skills", icon: Award },
    { title: "High MA Salaries", desc: "Earn up to $55,547/year in Massachusetts", icon: TrendingUp },
    { title: "Bilingual Options", desc: "ESL support and courses in Spanish available", icon: MessageCircleIcon },
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
    { q: "Is the program entirely online?", a: "Yes! 100% online so you can learn on your schedule—early mornings, late nights, or weekends." },
    { q: "How long does the program take?", a: "In as little as one year! Complete your 21 credits full-time, or take it at your own pace." },
    { q: "Do I need prior experience in education?", a: "No! No prior experience is required. The program covers all foundational knowledge." },
    { q: "Will I learn special education skills?", a: "Yes! Special education is an in-demand area, and this program gives you foundational skills." },
    { q: "Can I study in Spanish?", a: "Absolutely! Courses are available in English and Spanish." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const ParaprofessionalEducator: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <ProgramPageLayout
            badge="Paraprofessional Educator Certificate"
            title={<>Shape Young Minds & <span style={{ color: '#E68325' }}>Launch Your Teaching Career</span></>}
            subtitle="In as little as one year. Most students graduate debt-free."
            headerImageSrc="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2940&auto=format&fit=crop"
            breadcrumbs={[
                { label: 'Programs', path: '/#programs' },
                { label: 'Paraprofessional Educator' }
            ]}

            tagline="Massachusetts Schools Need You"
            taglineBody={
                <p>
                    With a growing teacher shortage and increasing demand for special education support, there's never been a better time to launch your career in education.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">Urban College of Boston's Paraprofessional Educator Certificate empowers you to master the classroom skills</span> that help K-12 students succeed—all without interrupting your busy life.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "Support teachers in K-12 classrooms and help students learn",
                        "Work with students who have special needs",
                        "Guide early literacy and math development"
                    ]
                },
                {
                    heading: "Ethical & Practical",
                    icon: Award,
                    items: [
                        "Apply positive behavior strategies and intervention techniques",
                        "Understand child development at every stage",
                        "Communicate with families and educators as part of the school team"
                    ]
                }
            ]}
            achievementNote="Courses are practical and designed to help you apply skills immediately on the job, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="Education is one of the most rewarding fields—and one of the most stable. You'll graduate ready for meaningful, career-building roles."
            outcomeTags={['Education', 'Teaching', 'Special Education', 'Classroom Support']}

            stats={stats}

            forWhom={[
                "Want to make a difference in children's lives",
                "Looking to work in K-12 classrooms in Massachusetts",
                "Seeking to build special education expertise",
                "Need a flexible online schedule for a busy life",
                "Planning to earn an Associate or Bachelor's in Education"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="Every credit you earn counts toward an Associate Degree at Urban College. Continue toward a bachelor's at partner institutions."
            pathwaySteps={[
                { label: 'Certificate', credits: '21 Credits', active: true },
                { label: 'Associate Degree', credits: '60 Credits', active: false },
                { label: "Bachelor's Degree", credits: 'Transfer Ready', active: false },
            ]}

            testimonial={{
                quote: "Urban College gave me the skills and confidence to work with students who need extra support. Every day I go to work knowing I'm making a difference in children's lives.",
                name: "Urban College Education Graduate",
                role: "Education Alum",
                imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="Paraprofessional Educator Certificate"
        />
    );
};

export default ParaprofessionalEducator;
