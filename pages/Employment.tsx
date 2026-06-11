import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    Sparkles, Users, Globe, GraduationCap, Briefcase, Heart, Award, 
    ArrowRight, CheckCircle, Mail, Phone, MapPin, ExternalLink, ShieldCheck 
} from 'lucide-react';

const Employment: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "About Urban College", path: "/about" },
        { label: "Join Our Team" }
    ];

    const benefits = [
        {
            title: "Impact Driven",
            desc: "Every day, you contribute to transforming students' lives and strengthening our community.",
            icon: Sparkles
        },
        {
            title: "Collaborative Culture",
            desc: "Work alongside educators and professionals who share your commitment to access and equity.",
            icon: Users
        },
        {
            title: "Multilingual & Diverse",
            desc: "Join a team that honors the rich diversity of Boston and celebrates multilingualism as a strength.",
            icon: Globe
        },
        {
            title: "Student-Centered",
            desc: "Our institutional focus on personalized support and student success shapes everything we do.",
            icon: GraduationCap
        },
        {
            title: "Professional Growth",
            desc: "Access to professional development, mentorship, and opportunities to advance your career.",
            icon: Briefcase
        },
        {
            title: "Work-Life Balance",
            desc: "We believe in sustainable practices that support our employees' well-being and fulfillment.",
            icon: Heart
        },
        {
            title: "Competitive Benefits",
            desc: "Comprehensive health insurance, generous retirement plans, and dedicated professional development funding.",
            icon: Award
        }
    ];

    const positions = [
        {
            title: "Adjunct Faculty - Early Childhood Education (English/Spanish/Mandarin)",
            dept: "Academic Affairs",
            type: "Part-Time",
            location: "Hybrid (2 Days On-Campus)",
            desc: "Instruct adult learners in early childhood development, curriculum design, and assessment methodologies. Ability to teach in Spanish or Mandarin is highly preferred.",
            requirements: ["Master's degree in ECE, Child Development, or related education field", "Experience teaching adult learners or non-traditional students", "Bilingual proficiency preferred"]
        },
        {
            title: "Student Success Advisor",
            dept: "Student Services",
            type: "Full-Time",
            location: "Hybrid (2 Days On-Campus)",
            desc: "Provide comprehensive academic advising, course registration assistance, and career planning. Act as a dedicated navigator for a designated student cohort.",
            requirements: ["Bachelor's degree in counseling, higher education, or human services", "Experience working with diverse, multilingual, or first-generation student populations", "Fluency in Spanish is a strong asset"]
        },
        {
            title: "Admissions Counselor",
            dept: "Enrollment Management",
            type: "Full-Time",
            location: "On-Campus (China Trade Center)",
            desc: "Manage prospect outreach, guide applicants through financial aid and enrollment processes, and participate in community recruiting events across Greater Boston.",
            requirements: ["Bachelor's degree or equivalent professional experience", "Strong communication and relationship-building skills", "Valid driver's license for local travel"]
        }
    ];

    const scrollToPositions = () => {
        const element = document.getElementById('open-positions');
        if (element) {
            const offset = 120; // accounting for navigation bar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/50">
            <SEO
                title={PAGE_META.employment.title}
                description={PAGE_META.employment.description}
                canonicalPath={PAGE_META.employment.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Employment', path: PAGE_META.employment.path },
                ])}
            />
            <PageHeader
                title="Join Our Team"
                subtitle="Build a Career That Transforms Lives"
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Intro CTA Area */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Our Mission-Driven Work</span>
                                <h2 className="text-3xl md:text-4xl font-display font-black text-ucb-blue mb-4">
                                    Educating, Empowering, and Elevating Communities
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed font-light">
                                    Urban College of Boston is a mission-driven institution dedicated to making higher education accessible to working adults, multilingual learners, and underserved communities across Boston. We believe education transforms lives.
                                </p>
                                <p className="text-gray-600 leading-relaxed mt-4">
                                    We seek servant leaders—faculty, staff, and administrators who are passionate about student success and committed to advancing equity, inclusion, and educational excellence. If you believe that every student deserves a pathway to meaningful employment and personal growth, we want to hear from you.
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                            <ScrollAnimation variant="slide-left" className="w-full">
                                <button 
                                    onClick={scrollToPositions}
                                    className="w-full bg-ucb-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-ucb-blue-glow hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md text-center inline-flex justify-center items-center gap-2 cursor-pointer min-h-[48px]"
                                >
                                    View Open Positions <ArrowRight className="w-5 h-5" />
                                </button>
                            </ScrollAnimation>
                            <ScrollAnimation variant="slide-left" delay="0.1s" className="w-full">
                                <a
                                    href="https://urbancollege-28708.app451.sites.451.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-ucb-orange text-white px-8 py-4 rounded-2xl font-bold hover:bg-ucb-orange-glow hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md text-center inline-flex justify-center items-center gap-2 min-h-[48px]"
                                >
                                    Apply Now
                                </a>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work at Urban College? */}
            <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100 relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Company Benefits</span>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-ucb-black">Why Work at Urban College?</h2>
                        <p className="text-gray-500 mt-3">We foster a supportive, flexible, and growth-oriented workspace focused on community impact.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => {
                            const IconComponent = benefit.icon;
                            return (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.05}s`}
                                    className="bg-white rounded-3xl p-8 border border-gray-100/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-ucb-blue/5 flex items-center justify-center text-ucb-blue border border-ucb-blue/10 mb-6 shrink-0">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-display font-bold text-xl text-ucb-black mb-3">{benefit.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed font-light">{benefit.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Commitment to Equity Banner */}
            <section className="py-12 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="bg-gradient-to-br from-ucb-blue to-blue-950 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl text-center">
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
                            <div className="inline-flex p-3 bg-white/10 rounded-2xl border border-white/15 text-ucb-gold mb-2 shadow-inner">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display font-bold">Our Commitment to Equity</h3>
                            <p className="text-blue-100 leading-relaxed font-light text-sm md:text-base">
                                Urban College of Boston is an equal opportunity employer. We actively recruit and employ individuals from underrepresented populations, including people of color, immigrants, LGBTQ+ individuals, veterans, and people with disabilities. We celebrate diversity and believe diverse perspectives make us stronger.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Open Positions Grid */}
            <section id="open-positions" className="py-16 md:py-24 bg-gray-50 border-t border-gray-100 relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block font-display">Active Openings</span>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-ucb-black">Current Job Opportunities</h2>
                        <p className="text-gray-500 mt-2">Join a dedicated squad working to shape the future of student-centered learning.</p>
                    </ScrollAnimation>

                    <div className="space-y-8">
                        {positions.map((pos, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${idx * 0.1}s`}
                                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                            >
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                                    <div className="space-y-1">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <span className="text-[10px] font-bold uppercase tracking-widest bg-ucb-blue/10 text-ucb-blue px-2.5 py-1 rounded-full border border-ucb-blue/10">{pos.dept}</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest bg-ucb-orange/10 text-ucb-orange px-2.5 py-1 rounded-full border border-ucb-orange/10">{pos.type}</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full border border-gray-200/50">{pos.location}</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-display font-bold text-ucb-black group-hover:text-ucb-blue transition-colors duration-300">
                                            {pos.title}
                                        </h3>
                                    </div>
                                    <a 
                                        href={`mailto:hr@urbancollege.edu?subject=Application%20for%20${encodeURIComponent(pos.title)}`}
                                        className="bg-ucb-orange text-white px-6 py-2.5 rounded-xl font-bold hover:bg-ucb-orange-glow transition-all shadow text-sm cursor-pointer inline-flex items-center gap-1.5 min-h-[44px]"
                                    >
                                        Apply For Role <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">{pos.desc}</p>
                                
                                <div className="space-y-3 pt-6 border-t border-gray-50">
                                    <h4 className="font-bold text-ucb-black text-sm uppercase tracking-wider">Key Requirements:</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-500 leading-relaxed font-light">
                                        {pos.requirements.map((req, ridx) => (
                                            <li key={ridx} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-ucb-emerald shrink-0 mt-0.5" />
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Apply Today CTA details */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-display font-black text-ucb-black mb-4">How to Apply</h2>
                        <p className="text-gray-600 font-light">
                            All applications are reviewed with close attention to candidate fit with our institutional mission and values.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        <ScrollAnimation variant="slide-right" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6 flex flex-col justify-between text-center items-center">
                            <div className="w-12 h-12 rounded-full bg-ucb-orange/10 flex items-center justify-center text-ucb-orange">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-display font-bold text-lg text-ucb-black">Submit via Email</h3>
                                <p className="text-gray-500 text-sm max-w-xs font-light">Send your resume and cover letter detailing your interests directly to our HR team.</p>
                            </div>
                            <a href="mailto:hr@urbancollege.edu" className="font-bold text-ucb-blue hover:text-ucb-blue-glow transition-colors text-base select-all">
                                hr@urbancollege.edu
                            </a>
                        </ScrollAnimation>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Employment;
