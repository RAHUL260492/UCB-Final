import React, { useEffect } from 'react';
import { BookOpen, Clock, Globe, Briefcase, CheckCircle, Users, DollarSign, Calendar, Award, GraduationCap } from 'lucide-react';
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
    { title: "Business & Management", desc: "Principles of Management, Business Communication, Accounting" },
    { title: "Computer & Technology", desc: "Computer Information Systems, Digital Marketing, Computer Applications" },
    { title: "Early Childhood Education", desc: "Child Growth and Development, Curriculum, Guidance and Discipline" },
    { title: "Human Services & Psychology", desc: "Introduction to Human Services, Case Management, General Psychology" },
    { title: "Communication & Writing", desc: "College Writing, Speech Communication, Business Communication" },
    { title: "Behavioral Health", desc: "Behavior Analysis, Trauma & Resiliency, Children's Behavioral Health" }
];

const outcomes = [
    { title: "Explore & Test", desc: "Test the waters and explore new subjects like psychology, ECE, business, or technology before enrolling in a full certificate or degree program." },
    { title: "Career Advancement", desc: "Gain specific skills or credentials to help secure a promotion, switch career paths, or satisfy professional development credits." },
    { title: "Lifelong Learning", desc: "Learn something new for personal growth or ease back into college-level coursework one class at a time on your own schedule." }
];

const benefits: ProgramBenefit[] = [
    { title: "Choose Your Course", desc: "Take any course that interests you: No program requirements—just choose what you want to learn", icon: BookOpen },
    { title: "Full Experience", desc: "Learn alongside college students: Get the full college experience in real courses", icon: Users },
    { title: "Credits That Count", desc: "Earn credits that count: Apply your credits toward a certificate or degree whenever you're ready", icon: Award },
    { title: "100% Online", desc: "Study 100% online: Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Trilingual Options", desc: "Study in English, Spanish, or Mandarin: Choose the language that works for you", icon: MessageCircleIcon },
    { title: "ESL Support", desc: "ESL support available: Tailored to each student's needs", icon: Users },
    { title: "No Commitment", desc: "No long-term commitment: Take one course or several—it's up to you", icon: Clock },
    { title: "Affordable Tuition", desc: "Affordable tuition: Just $317 per credit with no hidden fees", icon: DollarSign }
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: 'Varies', icon: Award, sub: 'Flexible Credits' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Languages', value: '3 Languages', icon: Globe, sub: 'English, Spanish, Mandarin' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'App Fee', value: 'FREE', icon: CheckCircle, sub: 'No Application Fee' },
    { label: 'Financial Aid', value: 'No Federal Aid', icon: GraduationCap, sub: 'Scholarships May Be Available' },
    { label: 'Start Date', value: 'Semesters', icon: Calendar, sub: 'Spring, Summer, Fall' },
    { label: 'Registration', value: 'Space Available', icon: CheckCircle, sub: 'Advising Available' }
];

const faqs = [
    { q: "What is Professional Studies?", a: "Professional Studies is Urban College's program for non-degree seeking students who want to take individual college courses without enrolling in a certificate or degree program. You'll learn alongside degree-seeking students in real college courses." },
    { q: "Can I take any course I want?", a: "Yes! You can register for any available course on a space-available basis. Browse our course catalog to see what's offered each semester." },
    { q: "Will my credits count toward a certificate or degree?", a: "Absolutely! Every credit you earn can be applied toward a certificate at Urban College if you decide to pursue one later. You're never starting from scratch." },
    { q: "Do I need prior college experience?", a: "No! Professional Studies is open to anyone with a high school diploma, GED, or HiSET. No prior college experience is required." },
    { q: "Are courses online?", a: "Yes! All courses are available online with both synchronous and asynchronous options. Learn on your schedule—early mornings, late nights, or weekends." },
    { q: "Can I study in a language other than English?", a: "Yes! Many courses are available in English, Spanish, and Mandarin. ESL support is also available for multilingual learners." },
    { q: "Am I eligible for financial aid?", a: "Federal financial aid requires degree-seeking status, so Professional Studies students are not eligible for federal financial aid. However, some scholarships may be available—contact our Financial Aid office at (617) 449-7070 for details." },
    { q: "How do I register for courses?", a: "After submitting your free application and being approved, you can browse available courses and register on a space-available basis. Contact an advisor if you need help choosing the right courses for your goals." },
    { q: "What if I decide I want a certificate or degree later?", a: "Great news! You can apply to a certificate or degree program at any time. The credits you've already earned through Professional Studies will transfer into your new program—you won't lose any progress." }
];

// ─── Component ────────────────────────────────────────────────────────────────

const ProfessionalStudies: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <SEO
                title="Professional Studies Program"
                description="Build career-ready skills through Professional Studies at Urban College of Boston. Flexible, affordable, multilingual."
                canonicalPath="/programs/professional-studies"
                jsonLd={[
                    buildCourseJsonLd({
                        name: "Professional Studies",
                        description: "Build career-ready skills through Professional Studies at Urban College of Boston. Flexible, affordable, multilingual.",
                        path: '/programs/professional-studies',
                        credentialCategory: 'certificate',
                    }),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Programs', path: '/programs' },
                        { name: "Professional Studies", path: '/programs/professional-studies' },
                    ]),
                ]}
            />
        <ProgramPageLayout
            badge="Professional Studies & Single Courses"
            title={<>Take College Courses <span style={{ color: '#E68325' }}>Without Committing to a Degree</span></>}
            subtitle="Learn Something New. Grow Your Career. Follow Your Curiosity."
            headerImageSrc="/Program%20Images%20for%20Website/Professional%20Studies%201.jpg"
            secondaryImageSrc="/Program%20Images%20for%20Website/Professional%20Studies%202.jpg"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Professional Studies' }
            ]}

            tagline="No Degree Required—Just Your Desire to Learn!"
            taglineBody={
                <p>
                    Curious about a subject? Want to boost your career? Not ready for a full degree program? Professional Studies is your answer.
                    <br className="hidden md:block" />
                    <span className="text-ucb-blue font-semibold">Urban College of Boston's Professional Studies program</span> lets you take any available college course alongside degree-seeking students—without committing to a certificate or degree program. It's the perfect way to explore new subjects, build job skills, or simply satisfy your curiosity.
                    <br className="hidden md:block" />
                    And here's the best part: every credit you earn can be applied toward a certificate at Urban College if you decide to continue your education later. Whether you take one course or more - each is a building block.
                </p>
            }

            benefits={benefits}

            achievements={[
                {
                    heading: "Explore & Focus",
                    icon: Briefcase,
                    items: [
                        "Curious about a new subject—explore psychology, business, ECE, or technology without enrolling in a full program",
                        "Testing the waters—try a course first to see if a certificate or degree fits you",
                        "Returning to education—ease back into college life with a single course"
                    ]
                },
                {
                    heading: "Professional Development",
                    icon: Award,
                    items: [
                        "Looking to advance your career—gain specific knowledge or skills for a promotion",
                        "For professionals seeking development—satisfy continuing education requirements",
                        "Build lifelong learning habits—love learning for its own sake and want to keep growing"
                    ]
                }
            ]}
            achievementNote="No prior degree required. No program requirements. Just your desire to learn."

            courses={courses}
            outcomes={outcomes}
            outcomesIntro="Whether you're looking to advance your career, test the waters before enrolling in a degree, or simply learn something new, Professional Studies provides the ultimate flexibility."
            outcomeTags={['Professional Development', 'Lifelong Learning', 'Skill Building', 'Career Growth']}

            stats={stats}

            forWhom={[
                "Curious about exploring psychology, business, ECE, or technology",
                "Looking to gain specific skills for a promotion or career advancement",
                "Wanting to test the waters with a single course before enrolling in a full program",
                "A lifelong learner seeking personal growth",
                "Returning to higher education after a break and wanting to ease in",
                "A professional needing continuing education credits"
            ]}

            pathwayTitle="Build Toward Your Future"
            pathwayDescription="Every course you complete earns real college credits that can be applied toward a certificate at Urban College. If you decide to pursue a credential later, you won't have to start over—your Professional Studies courses will count."
            pathwaySteps={[
                { label: 'Single Course', credits: '3-4 Credits', active: true },
                { label: 'Certificate', credits: '18-21 Credits', active: false },
                { label: "Associate / Bachelor's", credits: 'Full Degree', active: false }
            ]}

            testimonial={{
                quote: "Urban College is an institution where there are educators and structures and intentional systems put in place for you to be successful. My advice is to start now, take on one or two classes.",
                name: "Jerrell C.",
                role: "Alum",
                imageSrc: "/assets/images/testimonials/jerrell-c.jpg"
            }}

            faqs={faqs}
            programName="Professional Studies"
        />
        </>
    );
};

export default ProfessionalStudies;
