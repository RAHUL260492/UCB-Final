import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    Mail, Award, GraduationCap, Globe, Clock, CheckCircle,
    ArrowRight, ChevronDown, ChevronRight, Briefcase, Building, ShieldCheck,
    Calendar, Heart, Quote
} from 'lucide-react';

interface CabinetMember {
    name: string;
    role: string;
    bio: string;
    education: string;
    email: string;
    avatarInitials: string;
    image?: string;
}

const CABINET: CabinetMember[] = [
    {
        name: "Anna Berry",
        role: "Vice President of Student Success",
        bio: "Anna Berry joined Urban College in fall 2023 as the inaugural Vice President of Student Success. With 20 years in higher education and her own journey beginning at community colleges in California, Anna believes that anyone with the desire to pursue higher education can do so. She leads strategic enrollment management and student success planning, centering student needs in everything we do.",
        education: "B.S. and M.S. from Colorado State University",
        email: "Anna.Berry@urbancollege.edu",
        avatarInitials: "AB",
        image: "/assets/images/staff/anna-berry.webp"
    },
    {
        name: "Dr. Noemi Custodia-Lora",
        role: "Vice President of Academic Affairs & Workforce Development",
        bio: "Dr. Custodia-Lora brings over 20 years of dedication to expanding educational access for underrepresented communities. Specializing in immigrant integration and workforce training, she advocates for multilingual learners, adult students, and immigrants. A Puerto Rican native who learned English before pursuing graduate studies in Boston, she understands the journey of our students.",
        education: "Ph.D. in Biology from Boston University; B.S. from Universidad de Puerto Rico",
        email: "Noemi.Custodia-Lora@urbancollege.edu",
        avatarInitials: "NC",
        image: "/assets/images/staff/noemi-custodia-lora.webp"
    },
    {
        name: "Caitlin Callahan",
        role: "Chief Operating Officer",
        bio: "Caitlin Callahan has been a member of the leadership team since 2018, bringing experience from the higher education and non-profit sectors. She leads Urban College's fundraising efforts, manages the implementation of the strategic plan, supports the Board of Trustees, oversees IT and institutional research, and serves as Accreditation Liaison Officer to NECHE.",
        education: "M.B.A., Southern New Hampshire University; M.P.P., Harvard Kennedy School; B.A., Bowdoin College",
        email: "Caitlin.Callahan@urbancollege.edu",
        avatarInitials: "CC",
        image: "/assets/images/staff/caitlin-callahan.webp"
    },
    {
        name: "Erline Louis Tanice, MBA",
        role: "Chief Financial Officer",
        bio: "Erline Tanice oversees Urban College's financial operations with over 20 years of experience in finance and accounting across private, academic, and nonprofit sectors. Deeply involved in community service, she serves on the Somerville Museum Council and the Salvation Army Massachusetts board. Her motto: always leave a place better than you found it.",
        education: "MBA from Bentley University McCallum Graduate School",
        email: "Erline.Tanice@urbancollege.edu",
        avatarInitials: "ET",
        image: "/assets/images/staff/erline-tanice.webp"
    }
];

const DEPARTMENTS = [
    {
        name: "Administration & Finance",
        staff: [
            { name: "Arianna Valle", role: "Marketing & Communications Director" },
            { name: "Erik Robles", role: "LMS System Administrator" },
            { name: "Malcolm Dyer", role: "HR" },
            { name: "Miguel De Los Santos", role: "IT Innovation and Cybersecurity Project Coordinator" },
            { name: "Sergio Mendoza", role: "Bilingual Staff Accountant" },
            { name: "Timesha Scott", role: "IT Lead" }
        ]
    },
    {
        name: "Admissions & Enrollment Management",
        staff: [
            { name: "Calvin Conyers", role: "Associate Vice President of Enrollment Management" },
            { name: "Daniella Sanchez", role: "Senior Admissions Advisor" },
            { name: "Leandra Rivera", role: "Admissions Advisor" },
            { name: "Roystone Martinez", role: "Admissions Advisor" }
        ]
    },
    {
        name: "Learning Resource Center",
        staff: [
            { name: "Ellie Wolf", role: "Learning Support Associate" },
            { name: "Jennifer Burke Grehan", role: "Learning Resource Center Manager and English Program Lead" },
            { name: "Maudeline Clervoix-Frank", role: "Learning Support Associate" },
            { name: "Pamela Peralta", role: "Learning Support Associate" }
        ]
    },
    {
        name: "Registration Services",
        staff: [
            { name: "Daniel Borges", role: "Registration Coordinator" },
            { name: "Waqas Mirza", role: "Director of Registration Services and Registrar" }
        ]
    },
    {
        name: "Student Financial Services",
        staff: [
            { name: "Carla Desisto", role: "Assistant Director of Financial Services" },
            { name: "Nancy Morales", role: "Bilingual Financial Services & Funding Specialist" },
            { name: "Stacy Broadus", role: "Director of Student Financial Services" }
        ]
    },
    {
        name: "Student Services & Supports",
        staff: [
            { name: "Rosana Perella", role: "Director of Student Services and Support" }
        ]
    },
    {
        name: "Workforce Development & Academic Leadership",
        staff: [
            { name: "Dr. Caleb Sabatka", role: "Assistant Professor & Program Chair, Human Services Administration" },
            { name: "Daliza Nova", role: "Associate Vice President of Corporate and Non-Profit Training" },
            { name: "Jennifer Burke Grehan", role: "Assistant Professor of English & General Studies Program Chair" },
            { name: "Rachelle Hannoush", role: "Assistant Professor & Interim Program Chair, Early Childhood Education" }
        ]
    }
];

const Team: React.FC = () => {
    const [activeDeptTab, setActiveDeptTab] = useState<number>(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/50">
            <SEO
                title={PAGE_META.team.title}
                description={PAGE_META.team.description}
                canonicalPath={PAGE_META.team.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Leadership & Staff', path: PAGE_META.team.path },
                ])}
            />
            <PageHeader 
                title="Leadership & Administration"
                subtitle="Dedicated to Your Success at Every Level"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'About Us', path: '/about' },
                    { label: 'Leadership' }
                ]}
                imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop"
            />

            {/* Intro Header Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <span className="inline-block px-4 py-1.5 bg-ucb-orange/10 text-ucb-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                            Our Students Are Our Mission and Our Driving Force
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-ucb-blue mb-6">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                            At Urban College of Boston, every member of our team—from the President to our faculty—is dedicated to one thing: your success.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Office of the President */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Executive Office</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">
                            <Link to="/office-of-the-president" className="hover:text-ucb-orange transition-colors">Office of the President</Link>
                        </h2>
                    </div>

                    <ScrollAnimation variant="fade-up">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 items-center">
                            {/* President Headshot */}
                            <div className="lg:col-span-4 flex justify-center">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-ucb-blue to-ucb-teal opacity-10 rounded-2xl group-hover:opacity-20 transition-all duration-300" />
                                    <img
                                        src="/assets/images/staff/yves-salomon-fernandez.jpg"
                                        alt="Dr. Yves Salomon-Fernández, President of Urban College of Boston"
                                        className="w-56 h-56 rounded-2xl object-cover object-top shadow-md relative group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>

                            {/* President Details */}
                            <div className="lg:col-span-8 space-y-4">
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-ucb-blue">Dr. Yves Salomon-Fernández</h3>
                                    <p className="text-sm font-bold text-ucb-orange uppercase tracking-wider">President, Urban College of Boston</p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {['English', 'Spanish', 'Mandarin (Basic)', 'Haitian Creole', 'French'].map((lang) => (
                                        <span key={lang} className="px-2.5 py-0.5 rounded-full bg-ucb-blue/10 text-ucb-blue font-bold text-[10px] uppercase flex items-center gap-1">
                                            <Globe className="w-3 h-3 text-ucb-teal" /> {lang}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-sm text-gray-500 leading-relaxed font-light">
                                    Dr. Yves (Eve) Salomon-Fernández became the President of Urban College of Boston in August 2023. Like many of our students, she is an immigrant and a former bilingual education student. Higher education transformed her life, took her all over the world to study and work, and put her on the path to becoming our President. Yves is committed to ensuring that every student at Urban College is put on a path to achieve at the highest level in their career.
                                </p>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">
                                    Yves is a <a href="https://www.youtube.com/watch?v=Ha4mtT8oSZc" target="_blank" rel="noreferrer" className="text-ucb-orange hover:underline font-medium">TEDx speaker</a>, a survivor of domestic violence, a mom, and a strong believer in the power of community. In 2026, she was named an Aspen Institute Presidents Fellow. That same year, she was inducted into the Boston YWCA's Academy of Women Achievers. In 2024, the Boston Business Journal named her a Power 50 Leader.
                                </p>

                                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                                    <a href="mailto:president@urbancollege.edu" className="inline-flex justify-center items-center gap-2 bg-ucb-blue hover:bg-blue-900 text-white font-bold py-2.5 px-6 rounded-full text-xs uppercase tracking-wider transition-colors min-h-[44px]">
                                        <Mail className="w-4 h-4" /> Contact President's Office
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* President's Cabinet */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Cabinet Members</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">President's Cabinet</h2>
                        <p className="text-gray-500 mt-2 font-light max-w-xl mx-auto text-sm">
                            Our executive leadership team brings together expertise in student success, academic affairs, operations, and finance—all focused on supporting your educational journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {CABINET.map((member, idx) => (
                            <ScrollAnimation key={idx} variant="fade-up" delay={`${(idx % 2) * 0.1}s`} className="flex">
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col justify-between w-full">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            {/* Avatar */}
                                            <div className="w-14 h-14 rounded-2xl bg-ucb-blue/10 text-ucb-blue font-display font-black text-xl flex items-center justify-center shrink-0 overflow-hidden">
                                                {member.image ? (
                                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                                                ) : (
                                                    member.avatarInitials
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-display font-bold text-lg text-ucb-blue leading-snug">{member.name}</h3>
                                                <p className="text-xs font-semibold text-ucb-orange leading-tight">{member.role}</p>
                                            </div>
                                        </div>

                                        <p className="text-xs text-gray-500 leading-relaxed font-light">
                                            {member.bio}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-50 space-y-2">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                                            <GraduationCap className="w-3.5 h-3.5 text-ucb-teal" /> {member.education}
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Departments & Directory Directory */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Departments</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Our Departments</h2>
                        <p className="text-gray-500 mt-2 font-light max-w-xl mx-auto text-sm">
                            Every department at Urban College works together to support your success—from the moment you apply through graduation and beyond.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Tab List */}
                        <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 bg-white/50 p-2 rounded-2xl border border-gray-100">
                            {DEPARTMENTS.map((dept, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveDeptTab(idx)}
                                    className={`px-4 py-3 rounded-xl text-xs font-bold text-left whitespace-nowrap transition-all duration-300 flex items-center justify-between gap-2 shrink-0 lg:shrink ${activeDeptTab === idx
                                        ? 'bg-ucb-blue text-white shadow-sm'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-ucb-blue'
                                    }`}
                                >
                                    <span>{dept.name}</span>
                                    <ChevronRight className={`w-3.5 h-3.5 hidden lg:block transition-transform duration-300 ${activeDeptTab === idx ? 'translate-x-1' : 'opacity-0'}`} />
                                </button>
                            ))}
                        </div>

                        {/* Staff Details Grid */}
                        <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm min-h-[300px]">
                            <h3 className="font-display font-bold text-xl text-ucb-blue mb-6 pb-2 border-b border-gray-50 flex items-center gap-2">
                                <Building className="w-5 h-5 text-ucb-orange" /> {DEPARTMENTS[activeDeptTab].name}
                            </h3>
                            
                            <div className="space-y-4">
                                {DEPARTMENTS[activeDeptTab].staff.map((member, idx) => (
                                    <ScrollAnimation key={`${activeDeptTab}-${idx}`} variant="fade-up" delay={`${idx * 0.05}s`}>
                                        <div className="p-4 bg-gray-50 hover:bg-ucb-blue/5 rounded-2xl border border-gray-100/50 flex flex-col sm:flex-row justify-between sm:items-center gap-2 group transition-colors">
                                            <div className="space-y-0.5">
                                                <h4 className="font-bold text-sm text-gray-900 group-hover:text-ucb-blue transition-colors">{member.name}</h4>
                                                <p className="text-xs text-gray-500 font-light">{member.role}</p>
                                            </div>
                                            <span className="text-[10px] font-bold text-ucb-teal bg-ucb-teal/10 px-2.5 py-0.5 rounded-full uppercase self-start sm:self-auto">
                                                Staff Member
                                            </span>
                                        </div>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Board of Trustees Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-ucb-blue/5 border border-ucb-blue/10 rounded-3xl p-8 max-w-2xl mx-auto space-y-6">
                            <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs">Governance</span>
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">Board of Trustees</h2>
                            <p className="text-gray-600 text-sm font-light leading-relaxed max-w-lg mx-auto">
                                Urban College of Boston's Board of Trustees provides strategic leadership and governance oversight to ensure the college remains true to its mission of opening new pathways to opportunity for our diverse community of learners.
                            </p>
                            <div className="pt-2">
                                <Link 
                                    to="/board-of-trustees" 
                                    className="inline-flex items-center gap-2 bg-ucb-blue hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-all shadow-md min-h-[44px]"
                                >
                                    Meet Our Trustees & Officers <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Urban College Foundation */}
            <section className="py-12 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-gradient-to-r from-ucb-orange to-orange-600 text-white rounded-3xl p-8 relative overflow-hidden shadow-lg text-center">
                            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                                <span className="inline-block px-3 py-1 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Philanthropy & Support
                                </span>
                                <h3 className="text-2xl font-bold font-display text-shadow-legible">Urban College Foundation</h3>
                                <p className="text-sm leading-relaxed font-light text-shadow-legible">
                                    The Urban College Foundation supports our mission by raising funds for scholarships, program development, and student support services. Through the generosity of donors and partners, the Foundation helps ensure that financial barriers never stand in the way of our students' dreams.
                                </p>
                                <div className="pt-4 flex flex-wrap justify-center gap-4">
                                    <Link to="/foundation" className="inline-flex items-center bg-white text-ucb-orange hover:bg-ucb-blue hover:text-white font-bold py-2.5 px-6 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px]">
                                        Learn About the Foundation &rarr;
                                    </Link>
                                    <Link to="/donate" className="inline-flex items-center bg-transparent border border-white text-white hover:bg-white hover:text-ucb-orange font-bold py-2.5 px-6 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px]">
                                        Support Our Mission / Donate <Heart className="w-3.5 h-3.5 ml-1.5 text-red-500 fill-red-500" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Our Commitment callout Box */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-ucb-blue/5 border border-ucb-blue/20 rounded-3xl p-8 max-w-2xl mx-auto">
                            <Quote className="w-8 h-8 text-ucb-blue/20 mx-auto mb-4" />
                            <h4 className="font-display font-bold text-lg text-ucb-blue mb-2">Our Commitment to You</h4>
                            <p className="text-sm text-gray-600 leading-relaxed font-light">
                                At Urban College of Boston, our students are our mission and our driving force. Every member of our team is dedicated to your success. We're here to support you from application to graduation and beyond. You're not just a student—you're a valued member of our community.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Connect With Us */}
            <section className="py-16 bg-gradient-to-r from-ucb-blue to-blue-950 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl font-display font-bold mb-4">Connect With Us</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto leading-relaxed">
                        Whether you are a student ready to apply or looking for career opportunities, we'd love to connect.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Apply Now (Free)", href: "https://urbancollege-28708.app451.sites.451.io/", type: "external" as const },
                            { name: "Request Info", type: "rfi" as const },
                            { name: "View Careers", path: "/employment" as const, type: "link" as const },
                            { name: "Contact Us", path: "#" as const, type: "link" as const }
                        ].map((btn, idx) => {
                            const className = `flex items-center justify-center text-center font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-all min-h-[44px] ${idx === 0
                                ? 'bg-ucb-orange hover:bg-ucb-orange-glow text-white shadow-md'
                                : 'bg-white/10 hover:bg-white hover:text-ucb-blue border border-white/20'
                            }`;
                            if (btn.type === "rfi") {
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => window.dispatchEvent(new CustomEvent('open-rfi-sidebar'))}
                                        className={`${className} cursor-pointer`}
                                    >
                                        {btn.name}
                                    </button>
                                );
                            }
                            if (btn.type === "external") {
                                return (
                                    <a
                                        key={idx}
                                        href={btn.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={className}
                                    >
                                        {btn.name}
                                    </a>
                                );
                            }
                            return (
                                <Link key={idx} to={btn.path} className={className}>
                                    {btn.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
