import React, { useEffect } from 'react';
import { BookOpen, Clock, Globe, Briefcase, CheckCircle, TrendingUp, DollarSign, Calendar, Award, GraduationCap, ArrowRight } from 'lucide-react';
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
    { title: "Child Growth and Development", desc: "Understand development from birth through age 8" },
    { title: "Guidance and Discipline", desc: "Guide behavior with positive strategies" },
    { title: "The Exceptional Child", desc: "Support children with special needs" },
    { title: "Early Childhood Professional Development", desc: "Build professional standards" },
    { title: "Early Childhood Curriculum", desc: "Create engaging learning experiences" },
    { title: "Infant/Toddler Curriculum", desc: "Focus on the earliest years" }
];

const outcomes = [
    { title: "Preschool Teacher", desc: "Guide young children through their most critical developmental years. MA average: $46,330 (BLS OEWS, May 2023)." },
    { title: "Childcare Worker", desc: "Provide nurturing care and education in childcare centers." },
    { title: "Family Childcare Provider", desc: "Start your own home-based childcare business." },
    { title: "Lead Teacher", desc: "Gain course qualifications for Lead Teacher under EEC's Guidelines." },
    { title: "Early Intervention Specialist", desc: "Work with children with special needs." },
    { title: "Program Coordinator", desc: "Oversee early childhood education programs." }
];

const benefits: ProgramBenefit[] = [
    { title: "Fast Track", desc: "Finish in as little as one year (16 credits)", icon: Clock },
    { title: "100% Online", desc: "Learn completely online, anytime you want", icon: Globe },
    { title: "Financial Aid", desc: "Competitive tuition and generous financial aid", icon: DollarSign },
    { title: "Learn in Your Language", desc: "Courses in English, Spanish, and Mandarin", icon: MessageCircleIcon },
    { title: "Transfer Credits", desc: "Credits transfer toward an associate or bachelor's degree", icon: TrendingUp },
    { title: "Career Growth", desc: "Apply what you learn immediately", icon: TrendingUp },
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: '16', icon: Award, sub: 'Credits' },
    { label: 'Time', value: '1 Year', icon: Clock, sub: 'To Complete' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'Start', value: 'Rolling', icon: Calendar, sub: 'Start Date' },
    { label: 'Aid', value: 'Yes', icon: GraduationCap, sub: 'Financial Aid' },
    { label: 'Language', value: 'Multilingual', icon: Globe, sub: 'EN, ES, Mandarin' },
    { label: 'Outcome', value: 'Job Ready', icon: CheckCircle, sub: 'Career Focused' },
];

const faqs = [
    { q: "Is the program online?", a: "100% online with optional on-campus services." },
    { q: "How long does it take?", a: "As little as one year (flexible pace)." },
    { q: "Do I need prior experience?", a: "No prior experience required." },
    { q: "What languages are available?", a: "Native language tracks in Spanish and Mandarin, plus ESL support." },
    { q: "Am I eligible for financial aid?", a: "Most students are eligible for financial aid. Contact our financial aid office at (617) 449-7070-our team works with you one-on-one to identify grants, scholarships, and funding options that fit your situation and make your education as affordable as possible." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const EarlyChildhoodEducationCertificate: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <SEO
                title="Foundations of Early Childhood Education Certificate"
                description="Start your early childhood education career with a Foundations Certificate from Urban College of Boston. Multilingual English, Spanish & Mandarin options, EEC-aligned curriculum."
                canonicalPath="/programs/foundations-early-childhood-education-certificate"
                jsonLd={[
                    buildCourseJsonLd({
                        name: "Foundations in Early Childhood Education Certificate",
                        description: "Start your early childhood education career with a Foundations Certificate from Urban College of Boston. Multilingual English, Spanish & Mandarin options, EEC-aligned curriculum.",
                        path: '/programs/foundations-early-childhood-education-certificate',
                        credentialCategory: 'certificate',
                    }),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Programs', path: '/programs' },
                        { name: "Foundations in Early Childhood Education Certificate", path: '/programs/foundations-early-childhood-education-certificate' },
                    ]),
                ]}
            />
        <ProgramPageLayout
            badge="Foundations of Early Childhood Education Certificate"
            title={<>Shape Young Minds & <span style={{ color: '#E68325' }}>Launch Your Career</span></>}
            subtitle="In as little as one year, 100% online. Accessible, high-quality education designed for working students."
            headerImageSrc="/Program%20Images%20for%20Website/ECE-Cert-Primary.jpg"
            secondaryImageSrc="/Program%20Images%20for%20Website/ECE-Cert-secondary-image.jpg"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Foundations of Early Childhood Education Certificate' }
            ]}

            tagline="Turn Your Love for Children Into A Career"
            taglineBody={
                <p>
                    Urban College of Boston's Early Childhood Education Certificate empowers you to master the skills that shape young lives—all without interrupting your busy life.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">This fully online, career-building program</span> fits into your busy schedule. You'll graduate ready to succeed as a preschool teacher, childcare worker, or family childcare provider.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Professional Skills",
                    icon: Briefcase,
                    items: [
                        "High-Quality Practice – Grounded in evidence-based early childhood education.",
                        "Professional Leadership – Prepared to lead with confidence and competence.",
                        "Meaningful Impact – Ready to support children, families, and communities."
                    ]
                },
                {
                    heading: "Ethical & Practical",
                    icon: Award,
                    items: [
                        "Support diverse learners including children with special needs",
                        "Build strong partnerships with families",
                        "Apply professional standards and best practices in early education"
                    ]
                }
            ]}
            achievementNote="Courses are practical and designed to help you apply skills immediately on the job, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="Prepare for a rewarding career guiding young children through their most critical developmental years. (4% projected growth for Preschool Teachers, 2024–2034—BLS.)"
            outcomeTags={['Childcare', 'Teaching', 'Early Education', 'Development']}
            outcomeSources={[
                { label: 'BLS OEWS May 2023: Preschool Teachers (25-2011)', url: 'https://www.bls.gov/oes/2023/may/oes252011.htm' },
                { label: 'BLS OOH: Preschool Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/preschool-teachers.htm' },
            ]}

            stats={stats}

            forWhom={[
                "Passionate about teaching young children",
                "Looking to start your own childcare business",
                "Seeking to upgrade your early education credentials",
                "Preferring to study in English, Spanish, or Mandarin",
                "Planning to earn an Associate or Bachelor's Degree",
                "Looking for a flexible, 100% online program that fits a busy life"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="The Early Childhood Education Certificate is a stackable, for-credit program. Credits may transfer toward an associate or bachelor's degree."
            pathwaySteps={[
                { label: 'Certificate', credits: '16 Credits', active: false },
                { label: 'Associate Degree', credits: '61 Credits', active: true },
                { label: "Bachelor's Degree", credits: 'Transfer Ready', active: false },
            ]}

            testimonial={{
                quote: "I have been passionately endorsing Urban College to others... the vibrant atmosphere, dedicated faculty and diverse student body create an enriching experience that I believe everyone should have the opportunity to enjoy.",
                name: "Mariely M.",
                role: "Alum",
                imageSrc: "/assets/images/testimonials/mariely-m.jpg"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="ECE Certificate"
        />
        </>
    );
};

export default EarlyChildhoodEducationCertificate;
