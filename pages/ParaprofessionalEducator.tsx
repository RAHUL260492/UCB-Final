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
    { title: "Introduction to Teaching and Learning", desc: "Understand how students learn and how to support them" },
    { title: "Human Behavior in the Social Environment", desc: "Recognize the factors that shape child development" },
    { title: "Teaching Mathematics for Educators", desc: "Build skills to support math instruction at every level" },
    { title: "Introduction to Special Education", desc: "Master the foundations of supporting students with special needs" },
    { title: "Introduction to Behavior Analysis and Intervention Skills", desc: "Learn proven strategies for positive behavior support" },
    { title: "Early Language and Literacy Development", desc: "Help students build the reading and writing skills they need to succeed" }
];

const outcomes = [
    { title: "Paraprofessional Educator", desc: "Support classroom instruction and help students thrive. (Average salary: $55,547/year in Massachusetts—one of the highest in the nation! 7% job growth—faster than average!)" },
    { title: "Teaching Assistant", desc: "Work alongside teachers to support student learning" },
    { title: "Special Education Aide", desc: "Support students with special needs in inclusive classrooms" },
    { title: "Instructional Aide", desc: "Provide one-on-one and small group support to students" },
    { title: "Behavior Technician", desc: "Apply intervention strategies to support student success" },
    { title: "After-School Program Coordinator", desc: "Lead educational programming outside school hours" }
];

const benefits: ProgramBenefit[] = [
    { title: "High MA Salaries", desc: "Earn up to $55,547/year in Massachusetts—one of the highest-paying states for paraprofessional educators!", icon: DollarSign },
    { title: "Fast Track", desc: "Finish in as little as one year (only 21 credits)", icon: Clock },
    { title: "100% Online", desc: "Study 100% online: Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Financial Aid", desc: "Personalized aid plans & options", icon: CheckCircle },
    { title: "Bilingual Options", desc: "Learn in English and/or Spanish", icon: MessageCircleIcon },
    { title: "No Textbooks", desc: "No textbooks or hidden fees: Everything you need is included", icon: BookOpen },
    { title: "ESL Support", desc: "ESL support available: Tailored to each student's needs", icon: Users },
    { title: "Special Education", desc: "Special education expertise: Master one of the most in-demand skills in education today", icon: Award }
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
    { q: "Is this program right for me if I want to work with children?", a: "Absolutely! This certificate is built for people who want to make a difference in children's lives. You'll graduate ready to support students in K-12 classrooms across Massachusetts." },
    { q: "Is the program entirely online?", a: "Yes! The program is 100% online. All classes, assignments, and discussions happen through our online platform, so you can learn on your schedule—early mornings, late nights, or weekends." },
    { q: "How long does the program take?", a: "In as little as one year! Complete your 21 credits full-time, or take it at your own pace—the program fits into your busy life." },
    { q: "Do I need prior experience in education?", a: "No! No prior experience is required. The program covers all foundational knowledge—whether you're starting fresh or transitioning from another career, you'll graduate classroom-ready." },
    { q: "Will I learn special education skills?", a: "Yes! Special education is one of the most in-demand areas in education, and this program gives you foundational skills to work with students who have diverse learning needs. You'll stand out in the job market." },
    { q: "Can I study in Spanish?", a: "Absolutely! Courses are available in English and Spanish—choose the language that works for you. ESL support is also available and tailored to each student." },
    { q: "What's the job outlook for paraprofessional educators?", a: "Excellent! Massachusetts schools are actively seeking qualified paraprofessional educators, especially those with special education training. Job growth is 7%—faster than average—and salaries are among the highest in the nation ($55,547/year average)." },
    { q: "Am I eligible for financial aid?", a: "Yes! Most students are eligible for financial aid, scholarships, and grants. Contact our financial aid office at (617) 449-7070 for personalized guidance. Our financial aid advisors work one-on-one with students to find grants and scholarships." }
];


// ─── Component ────────────────────────────────────────────────────────────────

const ParaprofessionalEducator: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <SEO
                title="Paraprofessional Educator Certificate Program"
                description="Become a classroom paraprofessional with a certificate from Urban College of Boston. Aligned with Massachusetts ESE standards."
                canonicalPath="/programs/paraprofessional-educator-certificate"
                jsonLd={[
                    buildCourseJsonLd({
                        name: "Paraprofessional Educator Certificate",
                        description: "Become a classroom paraprofessional with a certificate from Urban College of Boston. Aligned with Massachusetts ESE standards.",
                        path: '/programs/paraprofessional-educator-certificate',
                        credentialCategory: 'certificate',
                    }),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Programs', path: '/programs' },
                        { name: "Paraprofessional Educator Certificate", path: '/programs/paraprofessional-educator-certificate' },
                    ]),
                ]}
            />
        <ProgramPageLayout
            badge="Paraprofessional Educator Certificate"
            title={<>Shape Young Minds and <span style={{ color: '#E68325' }}>Launch Your Teaching Career</span></>}
            subtitle="In as little as one year! Accessible, high-quality education designed for working students."
            headerImageSrc="/Program%20Images%20for%20Website/paraprofessional%20educator%20cert%201.jpg"
            secondaryImageSrc="/Program%20Images%20for%20Website/paraprofessional%20educator%20cert%202.jpg"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Paraprofessional Educator' }
            ]}

            tagline="Massachusetts schools need you"
            taglineBody={
                <p>
                    With a growing teacher shortage and increasing demand for special education support, there's never been a better time to launch your career in education.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">Urban College of Boston's Paraprofessional Educator Certificate empowers you to master the classroom skills</span> that help K-12 students succeed—all without interrupting your busy life.
                    <br className="hidden md:block" />
                    This fully online, career-building program fits into your busy life. You'll graduate ready to step into classrooms across Massachusetts and make a real difference in children's lives every single day.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "Support teachers in K-12 classrooms—help students of all abilities learn and grow",
                        "Work with students who have special needs—master skills for one of education's most in-demand specializations",
                        "Guide early literacy and math development—build foundational skills that shape children's futures"
                    ]
                },
                {
                    heading: "Ethical & Practical",
                    icon: Award,
                    items: [
                        "Apply positive behavior strategies—support students using proven intervention techniques",
                        "Understand child development—recognize how children learn and grow at every stage",
                        "Communicate with families and educators—collaborate as part of the school team"
                    ]
                }
            ]}
            achievementNote="This isn't just theory—you'll learn practical skills you can use immediately in real classrooms."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="Education is one of the most rewarding fields—and one of the most stable. You'll graduate ready for meaningful, career-building roles where you help children succeed. Why Massachusetts? The state offers some of the highest salaries for paraprofessional educators in the country—and demand continues to grow."
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
            pathwayDescription="Every credit you earn counts toward an Associate Degree at Urban College. When you're ready, our transfer agreements make it easy to continue toward a bachelor's degree at partner institutions."
            pathwaySteps={[
                { label: 'Certificate', credits: '21 Credits', active: true },
                { label: 'Associate Degree', credits: '60 Credits', active: false },
                { label: "Bachelor's & License", credits: 'Transfer Ready', active: false }
            ]}

            testimonial={{
                quote: "I have been passionately endorsing Urban College to others... the vibrant atmosphere, dedicated faculty and diverse student body create an enriching experience that I believe everyone should have the opportunity to enjoy.",
                name: "Mariely M.",
                role: "Alum",
                imageSrc: "/assets/images/testimonials/mariely-m.jpg"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="Paraprofessional Educator Certificate"
        />
        </>
    );
};

export default ParaprofessionalEducator;
