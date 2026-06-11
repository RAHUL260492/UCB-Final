import React, { useEffect } from 'react';
import { 
    Award, ArrowRight, CheckCircle, Mail, Globe, Users, Check, 
    Zap, BarChart2, UserCheck, Sparkles,
    Puzzle, GraduationCap, ChevronRight, Briefcase
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';

interface CouncilMember {
    name: string;
    org: string;
    role: string;
    img?: string;
}

const councilMembers: CouncilMember[] = [
    { name: "Ainsley Castro Charles", org: "YUPRO Placement, Year Up United", role: "National Director of Strategic Partnerships", img: "/assets/images/council/ainsley-castro-charles.jpg" },
    { name: "Alanna Mallon", org: "Commonwealth Corporation Foundation", role: "Executive Director", img: "/assets/images/council/alanna-mallon.jpg" },
    { name: "Mark Coletta", org: "Citizens Bank (MA, NH & VT)", role: "Community Development Market Manager & Vice President", img: "/assets/images/council/mark-coletta.jpg" },
    { name: "Meera Krishnan", org: "Support to Succeed", role: "Founder & Executive Director", img: "/assets/images/council/meera-krishnan.png" },
    { name: "Peter Whaley", org: "Entrepreneurship for All (EforAll)", role: "Chief Operating Officer", img: "/assets/images/council/peter-whaley.jpg" },
    { name: "Mim Minichiello", org: "Hub International", role: "Chief Performance Officer", img: "/assets/images/council/mim-minichiello.jpg" },
    { name: "Raul Fernandez", org: "Boston University", role: "Professor & Nonprofit Founder", img: "/assets/images/council/raul-fernandez.jpg" },
    { name: "Miguel De Los Santos", org: "Upwind Security · Hult · Urban College of Boston", role: "Solutions Architect, Adjunct Faculty & Instructor", img: "/assets/images/council/miguel-de-los-santos.jpg" },
    { name: "Jose Nino", org: "Boston Arts Academy Foundation", role: "Senior Director of Strategic Initiatives", img: "/assets/images/council/jose-nino.jpg" },
    { name: "Reginauld (Reggie) Williams", org: "JP Morgan Chase · Oak Lane Consulting", role: "VP, Senior Business Consultant & Founder", img: "/assets/images/council/reggie-williams.jpg" }
];

const processSteps = [
    { num: "01", title: "Discovery Conversation", desc: "We begin by listening, conducting needs assessments and exploratory meetings." },
    { num: "02", title: "Co-Design of Training", desc: "Together we align the curriculum, schedules, delivery models, and outcomes." },
    { num: "03", title: "Implementation", desc: "Urban College manages instruction, registration, LMS integration, digital badging, and wrap-around supports." },
    { num: "04", title: "Measurement & Reporting", desc: "We track student progress, deliver performance data, and evaluate next steps." },
    { num: "05", title: "Long-Term Talent Strategy", desc: "Many partners extend collaboration to internships, talent pipelines, apprenticeships, or multi-year plans." }
];

const outcomes = [
    { title: "Increased Employee Retention", desc: "Boost staff loyalty and career satisfaction through professional pathways.", icon: UserCheck, color: "text-ucb-orange bg-ucb-orange/10" },
    { title: "Improved Digital Literacy", desc: "Equip teams with essential digital efficiencies and modern tech tools.", icon: Zap, color: "text-ucb-blue bg-ucb-blue/10" },
    { title: "Multilingual Talent Pipelines", desc: "Access highly qualified, diverse candidates ready to lead.", icon: Globe, color: "text-ucb-green bg-ucb-green/10" },
    { title: "Industry-Aligned Microcredentials", desc: "Deliver verified digital badges and stacked credits.", icon: Award, color: "text-ucb-gold bg-ucb-gold/10" },
    { title: "Enhanced Supervisory & Leadership", desc: "Nurture durable communication and critical thinking skills.", icon: Users, color: "text-blue-600 bg-blue-50" },
    { title: "Data Dashboards & Reporting", desc: "Track organizational training progress and performance analytics.", icon: BarChart2, color: "text-indigo-600 bg-indigo-50" }
];

const Workforce: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30">
            <SEO
                title={PAGE_META.workforce.title}
                description={PAGE_META.workforce.description}
                canonicalPath={PAGE_META.workforce.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Corporate and Non-Profit Training', path: PAGE_META.workforce.path },
                ])}
            />
            <PageHeader
                title="Corporate and Non-Profit Training"
                subtitle="Preparing A Multilingual, Skilled, and Digitally-Ready Workforce."
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Corporate and Non-Profit Training' }]}
                imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Introduction and target audiences */}
            <section className="py-16 md:py-24 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Main Intro */}
                        <ScrollAnimation variant="slide-right" className="space-y-6">
                            <span className="text-xs font-bold text-ucb-orange uppercase tracking-wider block font-display">Corporate & Community Training</span>
                            <h2 className="text-3xl md:text-4xl font-display font-black text-ucb-black leading-tight">
                                Customized Professional Development for Your Team
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                Urban College of Boston delivers custom training for front-line, middle management, and high-potential employees. We work directly with employers to design and equip their teams with skills tailored to specific roles, alongside durable skills like communication, critical thinking, problem-solving, and collaboration that any modern workplace needs.
                            </p>
                            <p className="text-gray-600 leading-relaxed font-light text-base">
                                We work with native English speakers and those who speak English as a second or third language. Our workforce training is available in **English, Spanish, Portuguese, and Haitian Creole**, and can be delivered in person, remotely, or in a hybrid format.
                            </p>
                            <p className="text-gray-600 leading-relaxed font-light text-base">
                                The Urban College workforce training team works with individual employers, employer groups within a single industry, and multi-sector employers across industries for specific management and skills training. We co-design custom training and create talent pipelines aligned with your business goals. We deliver our training in person, remotely, and in a hybrid format.
                            </p>
                            <div className="bg-ucb-blue/5 rounded-3xl p-6 md:p-8 border border-ucb-blue/10 flex items-start gap-4">
                                <Sparkles className="w-8 h-8 text-ucb-orange shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-display font-bold text-ucb-black text-lg mb-1">Institute for Workforce Innovation</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                                        We are building the Institute for Workforce Innovation to ensure that employees have the knowledge and skills to thrive in a dynamic world where Artificial Intelligence (AI) is simultaneously displacing and creating jobs. Today's workers need to evolve and adapt to the changing workplace.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Right Target Groups */}
                        <ScrollAnimation variant="slide-left" className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm space-y-8">
                            <div>
                                <h3 className="text-xl md:text-2xl font-display font-bold text-ucb-black mb-2">Who We Serve</h3>
                                <p className="text-gray-500 text-sm">We construct pathways to opportunity for individuals at every stage of their career journey.</p>
                            </div>
                            
                            <ul className="space-y-4">
                                {[
                                    "Employers reskilling and upskilling for management roles",
                                    "Technology-displaced adults adapting to automation",
                                    "Disconnected youth seeking career integration",
                                    "Youth seeking alternative workforce training pathways",
                                    "Adults upskilling for career change or promotion",
                                    "Returning citizens seeking economic reentry"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium text-sm md:text-base font-semibold">
                                        <CheckCircle className="w-5 h-5 text-ucb-orange shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Process timeline flow */}
            <section className="py-16 md:py-24 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-16">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display">Collaboration Timeline</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Our Partnership Process</h2>
                        <p className="text-gray-500 text-sm font-light">Our structured 5-step process ensures alignment from discovery to long-term talent growth.</p>
                    </ScrollAnimation>

                    {/* Horizontal process cards */}
                    <div className="hidden lg:grid grid-cols-5 gap-4 relative">
                        {/* Linking lines */}
                        <div className="absolute top-16 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -z-10" />
                        {processSteps.map((step, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${idx * 0.08}s`}
                                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative space-y-4 flex flex-col justify-between h-full hover:shadow-md transition-shadow"
                            >
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-2xl bg-ucb-blue text-white flex items-center justify-center font-display font-black text-sm">
                                        {step.num}
                                    </div>
                                    <h4 className="font-display font-bold text-gray-800 text-sm leading-tight">{step.title}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed font-light">{step.desc}</p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>

                    {/* Mobile Timeline view */}
                    <div className="lg:hidden relative border-l-2 border-ucb-blue/20 pl-6 ml-2 space-y-8">
                        {processSteps.map((step, idx) => (
                            <ScrollAnimation key={idx} variant="fade-up" className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                                <div className="absolute -left-[35px] top-6 w-6 h-6 rounded-full bg-ucb-blue flex items-center justify-center text-white border-4 border-white shadow">
                                    <span className="text-[9px] font-bold">{step.num}</span>
                                </div>
                                <h4 className="font-display font-bold text-gray-800 text-base leading-tight">{step.title}</h4>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">{step.desc}</p>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bespoke Collaboration FAQ */}
            <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollAnimation variant="slide-right" className="space-y-6">
                            <div className="inline-flex p-3 bg-ucb-orange/10 text-ucb-orange rounded-2xl shadow-inner">
                                <Puzzle className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-display font-black text-ucb-black leading-tight">
                                Is Each Partnership Bespoke?
                            </h2>
                            <h4 className="text-xl font-bold text-ucb-blue">Yes, absolutely.</h4>
                            <p className="text-gray-600 leading-relaxed font-light text-base">
                                Every collaboration is fully customized based on employer needs, workforce goals, language requirements, and preferred delivery models. We intentionally avoid "off-the-shelf" solutions and instead build sector-specific, culturally responsive, multilingual programs that align precisely with your employer talent strategy.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="flex justify-center">
                            <div className="relative p-8 md:p-12 bg-gradient-to-br from-ucb-blue to-blue-900 text-white rounded-3xl shadow-xl w-full max-w-sm overflow-hidden flex flex-col items-center text-center space-y-4">
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-ucb-gold border border-white/10 shrink-0">
                                    <Sparkles className="w-8 h-8 fill-current" />
                                </div>
                                <h4 className="font-display font-black text-2xl">Tailored For You</h4>
                                <p className="text-blue-100 text-xs font-light leading-relaxed">
                                    No cookie-cutter templates. Co-designed with your hiring team to build exactly what your organization requires.
                                </p>
                                <span className="inline-flex px-4 py-1.5 bg-ucb-orange text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
                                    100% Customized
                                </span>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* What Outcomes Can Partners Expect? */}
            <section className="py-16 md:py-24 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-16">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display">Organizational Value</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">What Outcomes Can Partners Expect?</h2>
                        <p className="text-gray-500 text-sm">Measure success with tangible metrics, skilled leaders, and reliable pipelines.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {outcomes.map((item, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${(idx % 3) * 0.05}s`}
                                className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:border-ucb-blue/10 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-display font-bold text-gray-800 text-base leading-tight">{item.title}</h4>
                                    <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* General & Employer Offerings Split */}
            <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-16">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display">Workforce Services</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Our Offerings</h2>
                        <p className="text-gray-500 text-sm font-light">Whether you are an individual upskilling or an employer investing in talent, we have a pathway.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Individual Offerings */}
                        <ScrollAnimation variant="slide-right" className="bg-gray-50 rounded-3xl p-8 border border-gray-100 space-y-6">
                            <h3 className="text-2xl font-display font-bold text-ucb-blue border-b border-gray-200/50 pb-3 flex items-center gap-2.5">
                                <Users className="w-6 h-6 text-ucb-orange" /> Offerings for Learners
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-1">
                                    <h4 className="font-bold text-gray-800 text-base">Flexible Schedules</h4>
                                    <p className="text-gray-600 text-sm font-light leading-relaxed">Before work, lunch hours, evenings, weekends, in-person, hybrid, and fully online options.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-1">
                                    <h4 className="font-bold text-gray-800 text-base">Career-Connected Credentials</h4>
                                    <p className="text-gray-600 text-sm font-light leading-relaxed">Short-term courses, professional certifications, and credentials that stack cleanly into associate degrees.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-1">
                                    <h4 className="font-bold text-gray-800 text-base">Digital Skills Integration</h4>
                                    <p className="text-gray-600 text-sm font-light leading-relaxed">Practical training in Excel, Google Workspace, Artificial Intelligence (AI) literacy, and other data tools.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-1">
                                    <h4 className="font-bold text-gray-800 text-base">Wraparound Support</h4>
                                    <p className="text-gray-600 text-sm font-light leading-relaxed">Access to financial aid guidance and dedicated career coaches throughout training.</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Employer Offerings */}
                        <ScrollAnimation variant="slide-left" className="bg-gray-50 rounded-3xl p-8 border border-gray-100 space-y-6">
                            <h3 className="text-2xl font-display font-bold text-ucb-blue border-b border-gray-200/50 pb-3 flex items-center gap-2.5">
                                <Briefcase className="w-6 h-6 text-ucb-orange" /> Offerings for Employers
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-1">
                                    <h4 className="font-bold text-gray-800 text-base">Customized Cohorts</h4>
                                    <p className="text-gray-600 text-sm font-light leading-relaxed">Upskilling or onboarding programs co-designed to target specific roles in your organization.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-1">
                                    <h4 className="font-bold text-gray-800 text-base">Microcredentials & Short Modules</h4>
                                    <p className="text-gray-600 text-sm font-light leading-relaxed">Targeted modules focusing on managerial communication, leadership, and digital analytics.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-1">
                                    <h4 className="font-bold text-gray-800 text-base">Internship & Placement Pipelines</h4>
                                    <p className="text-gray-600 text-sm font-light leading-relaxed">Connect directly with students and alumni ready to fill open entry-level positions.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-1">
                                    <h4 className="font-bold text-gray-800 text-base">Philanthropy & Advisory Partnerships</h4>
                                    <p className="text-gray-600 text-sm font-light leading-relaxed">Sponsor scholarships, fund upskilling grants, or shape curricula through Advisory Committees.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Specific Integrated Programs (CHW, RBT) */}
            <section className="py-16 md:py-24 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-16">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display">Specialized Tracks</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Featured Workforce Tracks</h2>
                        <p className="text-gray-500 text-sm">Targeted licensing programs that qualify for professional accreditation.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* CHW */}
                        <ScrollAnimation variant="slide-right" className="bg-white rounded-3xl p-8 border border-gray-150 shadow-sm flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="inline-flex px-3 py-1 bg-ucb-green/10 text-ucb-green rounded-full text-[10px] font-bold uppercase tracking-wider font-display">State-Approved Site</div>
                                <h3 className="text-2xl font-display font-black text-ucb-black leading-snug">
                                    Community Health Worker (CHW) Training
                                </h3>
                                <p className="text-gray-600 text-sm font-light leading-relaxed">
                                    Urban College of Boston is a licensed Community Health Worker training site approved by the Massachusetts Department of Public Health. The program reduces the work-experience hours needed for state certification by **50%**.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 font-semibold pt-2">
                                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-ucb-green shrink-0" /> Embedded in Elder Care</li>
                                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-ucb-green shrink-0" /> Standalone Track</li>
                                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-ucb-green shrink-0" /> Human Services Elective</li>
                                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-ucb-green shrink-0" /> Custom Employer Cohorts</li>
                                </ul>
                            </div>
                            <div className="pt-6 mt-6 border-t border-gray-50">
                                <a href="/programs/elder-care" className="inline-flex items-center gap-1 font-bold text-sm text-ucb-blue hover:text-ucb-orange transition-colors">
                                    Learn About Elder Care Certificate <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </ScrollAnimation>

                        {/* RBT */}
                        <ScrollAnimation variant="slide-left" className="bg-white rounded-3xl p-8 border border-gray-150 shadow-sm flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="inline-flex px-3 py-1 bg-ucb-blue/10 text-ucb-blue rounded-full text-[10px] font-bold uppercase tracking-wider font-display">Special Education & Care</div>
                                <h3 className="text-2xl font-display font-black text-ucb-black leading-snug">
                                    Registered Behavior Technician (RBT®)
                                </h3>
                                <p className="text-gray-600 text-sm font-light leading-relaxed">
                                    Prepare for direct certification as a Registered Behavior Technician. Gain core training in behavioral support, crisis intervention, and specialized autism services for schools and health agencies.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 font-semibold pt-2">
                                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-ucb-blue shrink-0" /> Children's Behavioral Health Certificate</li>
                                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-ucb-blue shrink-0" /> Behavior Support Skills</li>
                                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-ucb-blue shrink-0" /> Clinical Preparation</li>
                                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-ucb-blue shrink-0" /> Direct Job Placement</li>
                                </ul>
                            </div>
                            <div className="pt-6 mt-6 border-t border-gray-50">
                                <a href="/programs/childrens-behavioral-health-certificate" className="inline-flex items-center gap-1 font-bold text-sm text-ucb-blue hover:text-ucb-orange transition-colors">
                                    Learn About Children's Behavioral Health Certificate <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Meet our strategic counsel */}
            <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-16">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display">Advisory Board</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Meet Our Strategic Counsel</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The Training Strategic Council is a small group of trusted advisors convened to help guide the development, alignment, and growth of workforce training initiatives at Urban College of Boston.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {councilMembers.map((member, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${(idx % 3) * 0.05}s`}
                                className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-150 shadow-sm flex flex-col justify-between hover:border-ucb-orange/20 transition-all duration-300"
                            >
                                <div className="space-y-3">
                                    {member.img ? (
                                        <img src={member.img} alt={member.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                                    ) : (
                                        <div className="w-10 h-10 rounded-xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center border border-ucb-blue/5">
                                            <UserCheck className="w-5 h-5" />
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-display font-black text-gray-800 text-base leading-tight mb-1">{member.name}</h4>
                                        <p className="text-xs font-bold text-ucb-orange uppercase tracking-wider font-display">{member.org}</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-xs md:text-sm font-light pt-4 border-t border-gray-200/50 mt-4 leading-relaxed">
                                    {member.role}
                                </p>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Email Contact CTA Card */}
            <section className="py-16 md:py-24 bg-gray-50/50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-gradient-to-br from-ucb-blue to-blue-950 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl text-center space-y-6">
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-ucb-gold border border-white/10 mx-auto">
                                <Mail className="w-8 h-8" />
                            </div>
                            <div className="space-y-2 max-w-2xl mx-auto">
                                <h3 className="text-2xl md:text-3xl font-display font-black leading-tight">Explore Partnering With Us Today</h3>
                                <p className="text-blue-100 text-sm md:text-base leading-relaxed font-light">
                                    Get in touch with our workforce training team to explore customized cohorts, apprenticeships, or digital-skills sponsorships.
                                </p>
                            </div>
                            <div className="pt-2">
                                <a 
                                    href="mailto:training@urbancollege.edu?subject=Training%20Partnership%20Inquiry"
                                    className="bg-ucb-orange text-white hover:bg-ucb-orange-glow px-8 py-4 rounded-xl font-bold shadow-lg transition-transform active:scale-95 inline-flex items-center gap-2 text-base min-h-[44px] cursor-pointer"
                                >
                                    Email training@urbancollege.edu <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default Workforce;
