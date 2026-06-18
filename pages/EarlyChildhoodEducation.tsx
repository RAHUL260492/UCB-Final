import React, { useEffect } from 'react';
import { Clock, Globe, DollarSign, TrendingUp, BookOpen, Briefcase, Award, GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import ProgramPageLayout, { ProgramBenefit, ProgramStat } from '../components/ProgramPageLayout';
import SEO from '../components/SEO';
import { buildCourseJsonLd, buildBreadcrumbJsonLd } from '../components/seo-data';

// ─── Icon helper for multilingual ──────────────────────────────────────────────
const MessageCircleIcon: React.ElementType = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const courses = [
    { title: "Child Growth and Development", desc: "Understand how children learn and grow from birth through age 8" },
    { title: "Guidance and Discipline", desc: "Master positive behavior and classroom-management strategies" },
    { title: "The Exceptional Child", desc: "Support children with special needs and diverse abilities" },
    { title: "Early Childhood Curriculum", desc: "Design engaging, developmentally appropriate learning experiences" },
    { title: "Infant/Toddler Curriculum", desc: "Specialize in care and learning for the earliest years" },
    { title: "Early Childhood Professional Development", desc: "Build your professional identity and meet field standards" }
];

const outcomes = [
    { title: "Preschool Teacher", desc: "Guide young children through their most critical developmental years. MA average $46,330; 4% projected growth, 2024–2034 (BLS)." },
    { title: "Preschool & Childcare Center Director", desc: "Lead and manage early-education programs. Median national salary $56,270 (BLS, May 2024)." },
    { title: "Childcare Worker", desc: "Provide nurturing care and education in childcare centers." },
    { title: "Family Childcare Provider", desc: "Start and run your own home-based childcare business." },
    { title: "Teacher Assistant", desc: "Support lead teachers in early-education classrooms." },
    { title: "Early Intervention Specialist", desc: "Work with children with special needs and diverse abilities." }
];

const benefits: ProgramBenefit[] = [
    { title: "Flexible Pace", desc: "Complete your 61 credits over about two years", icon: Clock },
    { title: "100% Online", desc: "Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Earn While You Learn", desc: "Start working in early education right away—no need to wait until graduation", icon: Briefcase },
    { title: "Learn in Your Language", desc: "Courses in English, Spanish, and Mandarin", icon: MessageCircleIcon },
    { title: "Transfer Ready", desc: "Credits transfer toward a bachelor's degree at partner colleges", icon: TrendingUp },
    { title: "ESL Support", desc: "Tailored to each student's needs", icon: BookOpen },
    { title: "Most Graduate Debt-Free", desc: "Affordable tuition plus personalized financial-aid guidance", icon: DollarSign },
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: '61', icon: Award, sub: 'Credits' },
    { label: 'Time', value: '2 Years', icon: Clock, sub: 'To Complete' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'Start', value: 'Rolling', icon: Calendar, sub: 'Start Date' },
    { label: 'Aid', value: 'Yes', icon: GraduationCap, sub: 'Financial Aid' },
    { label: 'Language', value: 'Multilingual', icon: Globe, sub: 'EN, ES, Mandarin' },
    { label: 'Outcome', value: 'Job Ready', icon: CheckCircle, sub: 'Career Focused' },
];

const faqs = [
    { q: "Is the program entirely online?", a: "Yes! The Associate Degree is 100% online, with optional on-campus services. Learn on your schedule—mornings, evenings, or weekends." },
    { q: "How long does the degree take?", a: "About two years for all 61 credits full-time—or take it at your own pace to fit work and family." },
    { q: "Do I need prior experience working with children?", a: "No! No prior experience is required. The program covers all the foundational knowledge, so you'll graduate ready to succeed whether you're starting fresh or advancing in your current role." },
    { q: "Can I study in my native language?", a: "Yes! Courses are available in English, Spanish, and Mandarin, with ESL support tailored to each student." },
    { q: "Am I eligible for financial aid?", a: "Most students are eligible for financial aid. Contact our financial aid office at (617) 449-7070—our team works with you one-on-one to identify grants, scholarships, and funding options that fit your situation. Most students graduate debt-free!" },
    { q: "Will my credits transfer?", a: "Absolutely! Our transfer agreements make it easy to continue toward a bachelor's degree at partner institutions when you're ready." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const EarlyChildhoodEducation: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <SEO
                title="Early Childhood Education Associate Degree"
                description="Earn an Associate Degree in Early Childhood Education at Urban College of Boston. Multilingual instruction in English, Spanish, and Mandarin. 100% online, transferable credits."
                canonicalPath="/programs/early-childhood-education-associate-degree"
                jsonLd={[
                    buildCourseJsonLd({
                        name: "Early Childhood Education Associate Degree",
                        description: "Earn an Associate Degree in Early Childhood Education at Urban College of Boston. Multilingual instruction in English, Spanish, and Mandarin. 100% online, transferable credits.",
                        path: '/programs/early-childhood-education-associate-degree',
                        credentialCategory: 'degree',
                        educationLevel: 'Associate',
                    }),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Programs', path: '/programs' },
                        { name: "Early Childhood Education Associate Degree", path: '/programs/early-childhood-education-associate-degree' },
                    ]),
                ]}
            />
        <ProgramPageLayout
            badge="Early Childhood Education Associate Degree"
            title={<>Inspire Young Minds & <span style={{ color: '#E68325' }}>Build Your Future</span></>}
            subtitle="Earn While You Learn—Start Working Immediately! A 61-credit Associate Degree designed for working students."
            headerImageSrc="/Program%20Images%20for%20Website/ECE-AA-primary.jpg"
            secondaryImageSrc="/Program%20Images%20for%20Website/ECE-AA-secondary.jpg"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Early Childhood Education Associate Degree' }
            ]}

            tagline="Turn Your Love for Children into a Rewarding Career"
            taglineBody={
                <p>
                    Join a growing community of early childhood professionals committed to excellence. Through a <span className="text-ucb-blue font-semibold">flexible online format</span>, you'll gain the knowledge, leadership skills, and professional preparation needed to <span className="text-ucb-blue font-semibold">advance in the field and make a meaningful impact on children, families, and communities</span>.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Teaching & Curriculum",
                    icon: Briefcase,
                    items: [
                        "Understand child development from birth through age 8",
                        "Create developmentally appropriate, engaging curriculum",
                        "Guide behavior with positive discipline strategies"
                    ]
                },
                {
                    heading: "Family & Inclusion",
                    icon: Award,
                    items: [
                        "Support diverse learners, including children with special needs",
                        "Build strong partnerships with families",
                        "Apply professional standards and best practices in early education"
                    ]
                },
                {
                    heading: "Director Certification Pathway",
                    icon: GraduationCap,
                    items: [
                        "Students interested in leadership and administrative roles can pursue Director Certification by completing the Associate Degree and selecting Child Care Administration as an elective. This pathway prepares graduates for childcare management and program leadership positions."
                    ]
                }
            ]}
            achievementNote="Your courses are practical and taught by experienced professionals—you'll apply these skills immediately, not just study theory."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="An Early Childhood Education degree opens doors to fulfilling, career-building roles where you make a difference every day. Employment of preschool teachers is projected to grow 4% from 2024 to 2034 (BLS)."
            outcomeTags={['Early Education', 'Child Development', 'Teaching', 'Childcare']}
            outcomeSources={[
                { label: 'BLS OOH: Preschool Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/preschool-teachers.htm' },
                { label: 'BLS OOH: Preschool & Childcare Center Directors', url: 'https://www.bls.gov/ooh/management/preschool-and-childcare-center-directors.htm' },
            ]}

            stats={stats}

            forWhom={[
                "Passionate about working with and nurturing young children",
                "A working student building a career in early education",
                "Returning to school after a break",
                "A multilingual learner seeking inclusive college programs",
                "An immigrant student looking for a supportive college in the USA",
                "Looking for a 100% online degree that fits a busy life"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="Every credit you earn counts. When you're ready, our transfer agreements make it easy to continue toward a bachelor's degree at partner institutions."
            pathwaySteps={[
                { label: 'Certificate', credits: '16 Credits', active: false },
                { label: 'Associate Degree', credits: '61 Credits', active: true },
                { label: "Bachelor's Degree", credits: 'Transfer Ready', active: false },
            ]}

            testimonial={{
                quote: "The supportive environment and encouragement from faculty and peers instilled a sense of confidence that inspired me to take a bold step forward, allowing me to establish and operate my own family childcare center.",
                name: "Mariely M.",
                role: "Early Childhood Education Alum",
                imageSrc: "/assets/images/testimonials/mariely-m.jpg"
            }}

            faqs={faqs}

            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="Early Childhood Education"
        />
        </>
    );
};

export default EarlyChildhoodEducation;
