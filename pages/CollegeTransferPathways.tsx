import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    GraduationCap, Search, ExternalLink, Mail, ArrowRight,
    Award, CheckCircle, Percent, School, Sparkles, Filter,
    ChevronLeft, ChevronRight, Quote
} from 'lucide-react';

interface Agreement {
    partner: string;
    pathways: string[];
    benefit?: string;
    links?: { label: string; url: string }[];
}

const CollegeTransferPathways: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

    const testimonials = [
        {
            name: "Adzele Benoit",
            role: "Alum & Faculty Member",
            quote: "My experience with Urban College has been very positive because of the suppport I have received from the faculty and staff. Urban College helped me find my voice and helped me believed in myself and gain confidence.",
            imageSrc: "http://static1.squarespace.com/static/5be099a375f9eecbf2753e8d/t/68121fd4e895fe4b7c58613c/1746018269355/Adzele.png?format=1500w"
        },
        {
            name: "Elijah W.",
            role: "Alum",
            quote: "My favorite part about Urban College has been the ability to complete my degree quickly and efficiently. I truly didn’t anticipate how fast the time would pass, and now I’m proud to be an alumni. The professors have played an essential role in my success, and I am incredibly grateful for their support and guidance throughout this journey.",
            imageSrc: "/assets/images/testimonials/elijah-w.png"
        },
        {
            name: "Miguel S.",
            role: "Alum",
            quote: "It really drove me to understand the concept of working and also going to school. That’s when Urban College became my pathway to where I am today – I work in cyber security, and earned my master’s.",
            imageSrc: "/assets/images/testimonials/miguel-s.png"
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Current Students", path: "/#students" },
        { label: "College Transfer Pathways" }
    ];

    const agreements: Agreement[] = [
        {
            partner: "American College of Education",
            pathways: [
                "All Urban College Associate of Arts (A.A.) graduates are eligible for transfer to any Bachelor of Arts (B.A.) program at American College of Education."
            ]
        },
        {
            partner: "Boston College - Woods College of Advancing Studies",
            pathways: [
                "All Urban College A.A. graduates are eligible for transfer to Woods College B.A. programs."
            ],
            benefit: "10% tuition scholarship for B.A. programs."
        },
        {
            partner: "Benjamin Franklin Cummings Institute of Technology",
            pathways: [
                "General Studies A.A. transfers to Bachelor of Science (B.S.) in Business Management."
            ]
        },
        {
            partner: "Endicott College",
            pathways: [
                "Early Childhood Education A.A. transfers to B.A. in Liberal Studies - Early Childhood Education Concentration.",
                "Human Services Administration A.A. transfers to B.S. in Psychology."
            ]
        },
        {
            partner: "Fitchburg State University",
            pathways: [
                "General Studies A.A. at Urban College transfers to B.S. in Interdisciplinary Studies at Fitchburg State University."
            ],
            links: [
                { label: "View Fitchburg Program Detail", url: "https://www.fitchburgstate.edu/academics/programs/interdisciplinary-studies-babs" }
            ]
        },
        {
            partner: "Fisher College",
            pathways: [
                "Early Childhood Education A.A. transfers to B.S. in Human Services."
            ]
        },
        {
            partner: "Lasell University",
            pathways: [
                "Early Childhood Education A.A. transfers to B.A. in Education, Curriculum, and Instruction or B.A. in Early Childhood Education with Licensure.",
                "Human Services A.A. transfers to B.S. in Psychology."
            ],
            benefit: "Specific Urban College Award of $2,000 per year (renewable if in good academic standing) when enrolling in a traditional Bachelor's degree program at LU, in addition to academic merit scholarships.",
            links: [
                { label: "Lasell Education Program", url: "https://www.lasell.edu/academics/schools-and-programs/school-of-humanities-education-justice-and-social-sciences/programs/education/interdisciplinary-studies-education-curriculum-and-instruction.html" },
                { label: "Early Childhood Licensure Info", url: "https://www.lasell.edu/academics/schools-and-programs/school-of-humanities-education-justice-and-social-sciences/programs/education/early-childhood-licensure-(pre-kindergarten---grade-2).html" },
                { label: "Lasell Psychology Program", url: "https://www.lasell.edu/academics/schools-and-programs/school-of-humanities-education-justice-and-social-sciences/programs/psychology.html" }
            ]
        },
        {
            partner: "Lesley University",
            pathways: [
                "Any A.A. Program at Urban College transfers to B.A. in Liberal Studies Degree Completion.",
                "Early Childhood Education A.A. transfers to B.S. in Early Childhood Studies Completion (Community College Partnership)."
            ],
            links: [
                { label: "Liberal Studies Adult Degree Completion", url: "https://lesley.edu/academics/undergraduate/liberal-studies-adult-degree-completion" },
                { label: "Lesley ECE Partnership Details", url: "https://lesley.edu/academics/undergraduate/early-childhood-studies-community-college-partnership" }
            ]
        },
        {
            partner: "Quincy College",
            pathways: [
                "Human Services Administration A.A. transfers to B.S. in Psychology."
            ],
            benefit: "Tuition discount of $125 per-course, up to a maximum scholarship of $2,500."
        },
        {
            partner: "Regis College",
            pathways: [
                "Any A.A. degree transfers to a Regis College Bachelor's program."
            ],
            benefit: "10% to 20% tuition discount for Regis College online Bachelor's programs."
        },
        {
            partner: "Southern New Hampshire University (SNHU)",
            pathways: [
                "ECE A.A. transfers to B.A. Psychology (Online).",
                "General Studies A.A. transfers to B.A. Human Services (Online).",
                "General Studies A.A. transfers to B.A. Information Technology (Online).",
                "General Studies A.A. transfers to B.A. Psychology (Online).",
                "General Studies A.A. transfers to B.S. Business Administration (Online).",
                "Human Services Administration A.A. transfers to B.A. Human Services (Online)."
            ],
            benefit: "10% tuition discount at SNHU for Urban College graduates.",
            links: [
                { label: "ECE to B.A. Psych Brochure", url: "https://www.snhu.edu/-/media/files/pdfs/community-college-partnership-pathways/urban-college-of-boston/ucb-aa-early-childhood-edu-to-ba-psych-online-ada-23-24.pdf" },
                { label: "GS to B.A. Human Services Brochure", url: "https://www.snhu.edu/-/media/files/pdfs/community-college-partnership-pathways/urban-college-of-boston/ucb-aa-gen-studies-to-ba-human-services-online-ada-23-24.pdf" },
                { label: "GS to B.A. IT Brochure", url: "https://www.snhu.edu/-/media/files/pdfs/community-college-partnership-pathways/urban-college-of-boston/ucb-aa-gen-studies-to-ba-info-tech-online-ada-23-24.pdf" },
                { label: "GS to B.A. Psych Brochure", url: "https://www.snhu.edu/-/media/files/pdfs/community-college-partnership-pathways/urban-college-of-boston/ucb-aa-gen-studies-to-ba-psych-online-ada-23-24.pdf" },
                { label: "GS to B.S. Business Brochure", url: "https://www.snhu.edu/-/media/files/pdfs/community-college-partnership-pathways/urban-college-of-boston/ucb-aa-gen-studies-to-bs-business-admin-online-ada-23-24.pdf" },
                { label: "HS to B.A. Human Services Brochure", url: "https://www.snhu.edu/-/media/files/pdfs/community-college-partnership-pathways/urban-college-of-boston/ucb-aa-human-services-admin-to-ba-human-services-online-ada-23-24.pdf" }
            ]
        },
        {
            partner: "Salem State University",
            pathways: [
                "Human Services Administration A.A. transfers to a Bachelor's Degree program."
            ]
        },
        {
            partner: "William James College",
            pathways: [
                "Any Urban College A.A. program transfers to the B.S. in Psychology and Human Services at William James College."
            ],
            links: [
                { label: "William James Program Overview", url: "https://www.williamjames.edu/academics/counseling/psychology-and-human-services-bs/index.html" }
            ]
        }
    ];

    const getBadgeStyle = (partner: string) => {
        const p = partner.toLowerCase();
        if (p.includes('boston college')) {
            return {
                initials: "BC",
                gradient: "from-red-800 to-amber-700",
                text: "text-white"
            };
        }
        if (p.includes('american college')) {
            return {
                initials: "ACE",
                gradient: "from-blue-700 to-indigo-800",
                text: "text-white"
            };
        }
        if (p.includes('benjamin franklin') || p.includes('cummings')) {
            return {
                initials: "BF",
                gradient: "from-teal-600 to-emerald-700",
                text: "text-white"
            };
        }
        if (p.includes('endicott')) {
            return {
                initials: "EC",
                gradient: "from-cyan-600 to-blue-700",
                text: "text-white"
            };
        }
        if (p.includes('fitchburg')) {
            return {
                initials: "FSU",
                gradient: "from-emerald-700 to-yellow-600",
                text: "text-white"
            };
        }
        if (p.includes('fisher')) {
            return {
                initials: "FC",
                gradient: "from-blue-700 to-indigo-900",
                text: "text-white"
            };
        }
        if (p.includes('lasell')) {
            return {
                initials: "LU",
                gradient: "from-blue-800 to-indigo-600",
                text: "text-white"
            };
        }
        if (p.includes('lesley')) {
            return {
                initials: "LE",
                gradient: "from-green-700 to-emerald-800",
                text: "text-white"
            };
        }
        if (p.includes('quincy')) {
            return {
                initials: "QC",
                gradient: "from-teal-600 to-blue-600",
                text: "text-white"
            };
        }
        if (p.includes('regis')) {
            return {
                initials: "RC",
                gradient: "from-rose-600 to-red-700",
                text: "text-white"
            };
        }
        if (p.includes('southern new hampshire') || p.includes('snhu')) {
            return {
                initials: "SNHU",
                gradient: "from-slate-800 to-blue-900",
                text: "text-white"
            };
        }
        if (p.includes('salem state')) {
            return {
                initials: "SSU",
                gradient: "from-orange-600 to-red-600",
                text: "text-white"
            };
        }
        if (p.includes('william james')) {
            return {
                initials: "WJ",
                gradient: "from-purple-600 to-indigo-700",
                text: "text-white"
            };
        }
        return {
            initials: "UC",
            gradient: "from-gray-600 to-gray-800",
            text: "text-white"
        };
    };

    const filterPills = [
        { label: "All Pathways", id: "all" },
        { label: "Early Childhood (ECE)", id: "ece" },
        { label: "Human Services", id: "human-services" },
        { label: "General Studies", id: "general-studies" },
        { label: "Psychology & Science", id: "psychology" }
    ];

    const highlights = [
        { university: "Boston College", benefit: "10% tuition scholarship for Woods B.A. programs.", icon: Percent, color: "text-red-600 bg-red-50 border-red-100" },
        { university: "Lasell University", benefit: "$2,000 annual Award + additional merit scholarships.", icon: Award, color: "text-blue-700 bg-blue-50 border-blue-100" },
        { university: "Quincy College", benefit: "$125 per-course discount, up to $2,500 total.", icon: Percent, color: "text-teal-700 bg-teal-50 border-teal-100" },
        { university: "Regis College", benefit: "10%-20% tuition discount for online B.A. programs.", icon: Award, color: "text-rose-600 bg-rose-50 border-rose-100" }
    ];

    const filteredAgreements = agreements.filter(item => {
        // Search query match
        const query = searchQuery.toLowerCase();
        const partnerMatch = item.partner.toLowerCase().includes(query);
        const pathwaysMatch = item.pathways.some(p => p.toLowerCase().includes(query));
        const benefitMatch = item.benefit?.toLowerCase().includes(query) || false;
        
        const matchesQuery = partnerMatch || pathwaysMatch || benefitMatch;
        if (!matchesQuery) return false;
        
        // Major filter match
        if (activeFilter === 'all') return true;
        
        const lowercasePathways = item.pathways.map(p => p.toLowerCase());
        
        if (activeFilter === 'ece') {
            return lowercasePathways.some(p => p.includes('early childhood') || p.includes('ece'));
        }
        if (activeFilter === 'human-services') {
            return lowercasePathways.some(p => p.includes('human services') || p.includes('social work') || p.includes('case management'));
        }
        if (activeFilter === 'general-studies') {
            return lowercasePathways.some(p => p.includes('general studies') || p.includes('business'));
        }
        if (activeFilter === 'psychology') {
            return lowercasePathways.some(p => p.includes('psychology') || p.includes('liberal studies') || p.includes('information technology'));
        }
        return true;
    });

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30">
            <SEO
                title={PAGE_META.transferPathways.title}
                description={PAGE_META.transferPathways.description}
                canonicalPath={PAGE_META.transferPathways.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Transfer Pathways', path: PAGE_META.transferPathways.path },
                ])}
            />
            <PageHeader
                title="College Transfer Pathways"
                subtitle="Continue your academic journey. Explore our articulation agreements that guarantee credit transfer and tuition discounts to 4-year universities."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Intro & Contact */}
            <section className="py-16 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block font-display">You're Halfway There! Continue Your Education</span>
                                <h2 className="text-3xl font-display font-black text-ucb-blue leading-tight">
                                    Easily Transfer Your Credits into a Bachelor's Program
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-light mt-4">
                                    Urban College of Boston actively supports graduates exploring available transfer options. Articulation agreements describe when and how a student may transfer credits, outlining academic benchmarks, course mappings, and scholarship eligibility unique to each partner institution.
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className="lg:col-span-4 bg-gray-50 rounded-3xl p-6 border border-gray-100 space-y-4">
                            <ScrollAnimation variant="slide-left" className="space-y-4 w-full">
                                <div className="inline-flex p-3 bg-ucb-blue/10 text-ucb-blue rounded-xl border border-ucb-blue/10">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <h4 className="font-display font-bold text-gray-800 text-base leading-snug">Transfer Questions?</h4>
                                <p className="text-gray-500 text-xs leading-relaxed font-light">
                                    Our academic affairs office is ready to help you trace courses, request transcripts, and connect with university advisors.
                                </p>
                                <a 
                                    href="mailto:academicaffairs@urbancollege.edu?subject=College%20Transfer%20Articulation%20Inquiry"
                                    className="w-full text-center bg-ucb-blue text-white hover:bg-ucb-blue-glow px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow block cursor-pointer min-h-[38px]"
                                >
                                    Email Academic Affairs
                                </a>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Transfer Benefits Highlights */}
            <section className="py-16 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-8">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto space-y-2">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block">Financial Incentives</span>
                        <h3 className="text-2xl font-display font-black text-gray-800">Featured Scholarship Highlights</h3>
                        <p className="text-gray-500 text-sm font-light">Many of our articulation partners offer exclusive discounts and grants for Urban College alumni.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.05}s`}
                                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow transition-shadow"
                                >
                                    <div className="space-y-3">
                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${item.color}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-display font-bold text-gray-800 text-sm">{item.university}</h4>
                                        <p className="text-gray-500 text-xs font-light leading-relaxed">{item.benefit}</p>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* Agreements Search & Listings */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl space-y-8">
                    <div className="flex flex-col space-y-6 border-b border-gray-100 pb-8">
                        {/* Title and Search Row */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <ScrollAnimation variant="slide-right" className="space-y-1">
                                <h3 className="text-2xl font-display font-bold text-gray-800">Articulation Agreements</h3>
                                <p className="text-gray-500 text-sm font-light">
                                    Showing {filteredAgreements.length} of {agreements.length} partner universities
                                </p>
                            </ScrollAnimation>
                            <ScrollAnimation variant="slide-left" className="w-full md:max-w-md shrink-0">
                                <div className="relative">
                                    <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                                    <input
                                        type="text"
                                        placeholder="Search by major (e.g. Psychology) or university..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-ucb-blue focus:bg-white shadow-sm transition-all text-gray-700 placeholder:text-gray-400"
                                    />
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Interactive Major Program Filters */}
                        <ScrollAnimation variant="fade-up" className="flex flex-wrap gap-2 pt-2">
                            <div className="flex items-center gap-1.5 text-xs text-gray-400 mr-2 font-bold uppercase tracking-wider">
                                <Filter className="w-3.5 h-3.5 text-ucb-orange" />
                                <span>Filter Major:</span>
                            </div>
                            {filterPills.map((pill) => {
                                const isActive = activeFilter === pill.id;
                                return (
                                    <button
                                        key={pill.id}
                                        onClick={() => setActiveFilter(pill.id)}
                                        className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer min-h-[32px] ${
                                            isActive 
                                                ? "bg-ucb-blue text-white border-ucb-blue shadow-sm" 
                                                : "bg-gray-50 text-gray-600 hover:text-ucb-blue border-gray-200 hover:border-ucb-blue/30"
                                        }`}
                                    >
                                        {pill.label}
                                    </button>
                                );
                            })}
                        </ScrollAnimation>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                        {filteredAgreements.map((item, idx) => {
                            const badge = getBadgeStyle(item.partner);
                            return (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${(idx % 2) * 0.05}s`}
                                    className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-sm hover:shadow-md hover:border-gray-200 transition-all flex flex-col justify-between gap-6"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            {/* Circular Initials Brand Badge */}
                                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${badge.gradient} ${badge.text} flex items-center justify-center font-display font-black text-sm shadow-inner shrink-0 tracking-wider`}>
                                                {badge.initials}
                                            </div>
                                            <h4 className="font-display font-bold text-gray-800 text-lg leading-snug">{item.partner}</h4>
                                        </div>

                                        <div className="space-y-3 pt-4 border-t border-gray-50">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block font-display">Pathways & Programs</span>
                                            <ul className="space-y-2.5">
                                                {item.pathways.map((pathway, pidx) => (
                                                    <li key={pidx} className="flex items-start gap-2.5 text-sm text-gray-600 font-light leading-relaxed">
                                                        <CheckCircle className="w-4 h-4 text-ucb-green shrink-0 mt-0.5" />
                                                        <span>{pathway}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {item.benefit && (
                                            <div className="p-4 bg-ucb-orange/[0.03] border border-ucb-orange/10 rounded-2xl flex gap-3 items-start mt-2">
                                                <Award className="w-5 h-5 text-ucb-orange shrink-0 mt-0.5" />
                                                <div>
                                                    <span className="text-[9px] font-bold text-ucb-orange uppercase tracking-wider block font-display">Tuition Benefit / Scholarship</span>
                                                    <p className="text-gray-600 text-xs mt-0.5 font-light leading-relaxed">{item.benefit}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {item.links && item.links.length > 0 && (
                                        <div className="flex flex-col gap-2.5 pt-4 border-t border-gray-100">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block font-display mb-1">Articulation Details & Brochures</span>
                                            {item.links.map((link, lidx) => (
                                                <a 
                                                    key={lidx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs font-bold text-ucb-blue hover:text-ucb-blue-glow transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                                                >
                                                    {link.label} <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </ScrollAnimation>
                            );
                        })}
                    </div>

                    {filteredAgreements.length === 0 && (
                        <div className="text-center py-16 bg-gray-50/50 rounded-3xl border border-gray-100 border-dashed">
                            <p className="text-gray-400 text-sm font-light">No transfer agreements match your search or filters. Try adjusting your selections.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Success Stories — placed below the articulation agreement blocks */}
            {(() => {
                const currentT = testimonials[activeTestimonialIdx] || testimonials[0];
                return (
                    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-ucb-orange/5 rounded-full blur-3xl" />

                        <div className="container mx-auto px-6 relative z-10">
                            <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto mb-10">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block">Success Stories</span>
                                <h3 className="text-2xl md:text-3xl font-display font-black text-white mt-1">Pathways to Success</h3>
                                <p className="text-gray-400 text-sm font-light mt-2">Hear from students who successfully transferred their credits to four-year partners.</p>
                            </ScrollAnimation>

                            <ScrollAnimation variant="fade-up" className="max-w-5xl mx-auto">
                                <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5 relative group min-h-[320px]">
                                    {/* Image */}
                                    <div className="md:w-2/5 min-h-[320px] relative bg-ucb-blue overflow-hidden shrink-0">
                                        <div className="absolute inset-0 bg-gradient-to-r from-ucb-blue/80 to-ucb-teal/40 mix-blend-multiply z-10 group-hover:opacity-50 transition-opacity duration-700" />
                                        <img
                                            src={currentT.imageSrc || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"}
                                            alt={currentT.name}
                                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
                                    </div>

                                    {/* Content */}
                                    <div className="md:w-3/5 bg-gradient-to-br from-gray-900 to-[#111827] p-8 md:p-12 lg:p-14 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-1 bg-gradient-to-b from-ucb-orange to-ucb-gold h-full pointer-events-none" />
                                        <Quote className="w-16 h-16 text-white/5 absolute top-6 right-8 pointer-events-none" />

                                        <p className="text-xl md:text-2xl lg:text-[22px] xl:text-[26px] leading-[1.6] font-serif italic text-white mb-8 relative z-10">
                                            "{currentT.quote}"
                                        </p>

                                        <div className="mt-auto relative z-10 flex items-center justify-between">
                                            <div>
                                                <div className="font-bold text-lg md:text-xl text-white tracking-wide">{currentT.name}</div>
                                                <div className="text-ucb-periwinkle font-medium uppercase tracking-widest text-xs mt-1">{currentT.role}</div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                                                    className="p-2 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all text-white min-h-[38px] flex items-center justify-center cursor-pointer"
                                                    aria-label="Previous testimonial"
                                                >
                                                    <ChevronLeft className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
                                                    className="p-2 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all text-white min-h-[38px] flex items-center justify-center cursor-pointer"
                                                    aria-label="Next testimonial"
                                                >
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-1.5 mt-4">
                                    {testimonials.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveTestimonialIdx(idx)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${activeTestimonialIdx === idx ? 'w-6 bg-ucb-orange' : 'w-1.5 bg-white/30'}`}
                                            aria-label={`Go to testimonial ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </ScrollAnimation>
                        </div>
                    </section>
                );
            })()}
        </div>
    );
};

export default CollegeTransferPathways;
