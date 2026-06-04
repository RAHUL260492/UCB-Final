import React, { useEffect } from 'react';
import { Clock, Globe, DollarSign, TrendingUp, BookOpen, Briefcase, Award, CheckCircle } from 'lucide-react';
import ProgramPageLayout, { ProgramBenefit, ProgramStat } from '../components/ProgramPageLayout';
import SEO from '../components/SEO';
import { buildCourseJsonLd, buildBreadcrumbJsonLd } from '../components/seo-data';

// ─── Data ─────────────────────────────────────────────────────────────────────

const courses = [
    { title: "Introduction to Human Services", desc: "Build your foundation" },
    { title: "Case Management", desc: "Master the core skills employers want" },
    { title: "Counseling & Interviewing Techniques", desc: "Connect with clients effectively" },
    { title: "Human Behavior and Social Environment", desc: "Understand the people you'll serve" },
    { title: "Ethics in Human Services", desc: "Maintain professional standards" },
    { title: "Internship in Human Services", desc: "Gain real-world experience" },
];

const outcomes = [
    { title: "Case Manager", desc: "Support individuals with disabilities, chronic illnesses, or social service needs. Entry: $40,000–$50,000 | Experienced: $60,000+" },
    { title: "Social Services Assistant", desc: "Manage appointments, records, and public assistance applications. Entry: $40,000–$47,000 | Experienced: $59,000" },
    { title: "Community Health Worker", desc: "Connect underserved communities with health resources. Entry: $43,000–$57,000 | Experienced: $65,000" },
    { title: "Behavioral Case Worker", desc: "Provide crisis intervention for mental health and substance recovery." },
    { title: "Family Support Worker", desc: "Help families with childcare, housing, and financial support." },
    { title: "Care Coordinator", desc: "Manage healthcare for seniors or individuals with complex medical needs." },
];

const benefits: ProgramBenefit[] = [
    { title: "Fast Track", desc: "Finish in as little as 9 months (only 21 credits)", icon: Clock },
    { title: "100% Online", desc: "Learn on a schedule that fits into your busy life", icon: Globe },
    { title: "Graduate Debt-Free", desc: "Most students graduate debt-free", icon: DollarSign },
    { title: "No Experience Needed", desc: "Start your career from scratch with full support", icon: CheckCircle },
    { title: "No Application Fee", desc: "Apply for free—start your journey today", icon: BookOpen },
    { title: "Growing Field", desc: "Build skills in one of Massachusetts' fastest-growing fields", icon: TrendingUp },
];

const stats: ProgramStat[] = [
    { label: 'Credits', value: '21', icon: Award, sub: 'Credits' },
    { label: 'Time', value: '9 Months', icon: Clock, sub: 'To Complete' },
    { label: 'Format', value: 'Online', icon: Globe, sub: 'Fully Online' },
    { label: 'Cost', value: '$317', icon: DollarSign, sub: 'Per Credit' },
    { label: 'Aid', value: 'Yes', icon: Award, sub: 'Financial Aid Available' },
    { label: 'Outcome', value: 'Job Ready', icon: CheckCircle, sub: 'Career Focused' },
];

const faqs = [
    { q: "Is the program entirely online?", a: "Yes! The program is fully online—all classes happen on our online platform. Learn whenever fits you: mornings, nights, or weekends. On-campus support is also available if you want in-person help." },
    { q: "How long does the program take?", a: "Finish in 9–12 months if you study full-time. Take one or two classes at a time and finish in 18–24 months. You set the pace to fit your life." },
    { q: "Do I need prior experience in social work or case management?", a: "No! No prior experience is needed. We cover all foundational knowledge. Start fresh or advance in your role—you'll build the skills you need." },
    { q: "How is this certificate different from the CCM certification?", a: "This certificate is your first step. The CCM (Certified Case Manager) requires years of experience. Our program gives you 21 credits and skills to get hired now. Gain experience and qualify for CCM certification later." },
    { q: "Am I eligible for financial aid?", a: "Yes! Most students qualify for financial aid. Contact financial aid at (617) 449-7070. Most students graduate debt-free!" },
    { q: "Is Urban College accredited?", a: "Yes, Urban College is a fully accredited non-profit college and Hispanic-Serving Institution." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const CaseManagement: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <SEO
                title="Case Management Certificate Program"
                description="Earn a Case Management Certificate from Urban College of Boston in as little as 9 months. Fully online and affordable, with job-ready skills for high-demand roles in healthcare, social services, and nonprofits."
                canonicalPath="/programs/case-management"
                jsonLd={[
                    buildCourseJsonLd({
                        name: "Case Management Certificate",
                        description: "Earn a Case Management Certificate from Urban College of Boston in as little as 9 months. Fully online and affordable, with job-ready skills for high-demand roles in healthcare, social services, and nonprofits.",
                        path: '/programs/case-management',
                        credentialCategory: 'certificate',
                    }),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Programs', path: '/programs' },
                        { name: "Case Management Certificate", path: '/programs/case-management' },
                    ]),
                ]}
            />
        <ProgramPageLayout
            // Header
            badge="Case Management Certificate"
            title={<>Launch Your Career <span style={{ color: '#E68325' }}>Helping Others</span></>}
            subtitle="In as little as 9 months. Most students graduate debt-free."
            headerImageSrc="/Program%20Images%20for%20Website/Case%20Management%20Cert%201.jpg"
            secondaryImageSrc="/Program%20Images%20for%20Website/Case%20Management%20Cert%202.jpg"
            breadcrumbs={[
                { label: 'Programs', path: '/programs' },
                { label: 'Case Management' }
            ]}

            // Tagline
            tagline="Transform Lives While You Build Your Career"
            taglineBody={
                <p>
                    Transform lives and build your career.{' '}
                    <span className="text-ucb-blue font-semibold">
                        Urban College of Boston's Case Management Certificate
                    </span>{' '}
                    teaches you how to help people—without interrupting your busy life. This fully online program is ideal for working students ready to make a difference, preparing you for high-demand roles in healthcare, social services, nonprofits, and community organizations.
                </p>
            }

            // Benefits
            benefits={benefits}

            // Achievements
            achievements={[
                {
                    heading: "Client Support Skills",
                    icon: Briefcase,
                    items: [
                        "Assess client needs and connect them to essential services",
                        "Manage crisis situations with confidence and professionalism",
                        "Advocate for individuals who need your support"
                    ]
                },
                {
                    heading: "Professional Standards",
                    icon: Award,
                    items: [
                        "Maintain accurate documentation and uphold ethical standards",
                        "Understand trauma, culture, and human behavior to serve clients effectively"
                    ]
                }
            ]}
            achievementNote="Courses are practical and led by experienced professionals—apply these skills right away, not just study theory."

            // Courses & Outcomes
            courses={courses}
            outcomes={outcomes}
            outcomesIntro="This certificate prepares you for career-building roles in high-demand fields. High job demand in Massachusetts means opportunities are waiting—work in hospitals, clinics, nonprofits, schools, or government agencies."
            outcomeTags={['Case Management', 'Social Services', 'Community Health', 'Human Services']}

            // Stats
            stats={stats}

            // Who is it for
            forWhom={[
                "Ready to start a career helping others",
                "A working adult balancing school with life",
                "Returning to school after a break",
                "New to human services—no experience required",
                "Planning to continue toward an associate or bachelor's degree"
            ]}

            // Pathway
            pathwayTitle="Build Toward Your Future"
            pathwayDescription="This certificate is your first step. Apply your credits to our Associate of Arts in Human Services Administration, then transfer to complete a Bachelor of Social Work (BSW)—the gold standard for case managers."
            pathwaySteps={[
                { label: 'Certificate', credits: '21 Credits', active: false },
                { label: 'AA in Human Services', credits: '60 Credits', active: true },
                { label: "Bachelor of Social Work", credits: 'Transfer Ready', active: false },
            ]}

            // Testimonial
            testimonial={{
                quote: "I'm able to work in human services and work with people, which is what I like. I wouldn't be able to do the work I do without my certificates and degree from Urban College. If you have any dreams, go forward. When I first came here, I didn't speak English, but I was pushed to continue to study and get my diploma.",
                name: "Ramona De Los Santos",
                role: "Case Management Certificate Graduate",
                imageSrc: "/assets/images/testimonials/ramona-s.webp"
            }}

            // FAQ
            faqs={faqs}

            // CTA
            ctaRequirements={['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application']}
            programName="Case Management"
        />
        </>
    );
};

export default CaseManagement;
