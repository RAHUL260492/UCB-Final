import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    GraduationCap, Search, ExternalLink, Mail, ArrowRight,
    Award, CheckCircle, Percent
} from 'lucide-react';

interface Agreement {
    partner: string;
    pathways: string[];
    benefit?: string;
    links?: { label: string; url: string }[];
}

const CollegeTransferPathways: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

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
            benefit: "Specific UCB Award of $2,000 per year (renewable if in good academic standing) when enrolling in a traditional Bachelor's degree program at LU, in addition to academic merit scholarships.",
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
            benefit: "10% tuition discount at SNHU for UCB graduates.",
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
                "Human Services Administration A.A. transfers to Bachelor of Social Work (BSW) program."
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

    const filteredAgreements = agreements.filter(item => {
        const query = searchQuery.toLowerCase();
        const partnerMatch = item.partner.toLowerCase().includes(query);
        const pathwaysMatch = item.pathways.some(p => p.toLowerCase().includes(query));
        const benefitMatch = item.benefit?.toLowerCase().includes(query) || false;
        return partnerMatch || pathwaysMatch || benefitMatch;
    });

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30">
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
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Bachelor's Degree Alignments</span>
                                <h2 className="text-3xl font-display font-black text-ucb-blue leading-tight">
                                    Transfer Your Credits Safely to Baccalaureate Partners
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-light mt-4">
                                    Urban College of Boston actively supports A.A. graduates who seek to transfer and earn their bachelor's degree. Articulation agreements describe when and how a student may transfer credits, outlining academic benchmarks, course mappings, and scholarship eligibility.
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
                                    Our academic office is ready to help you trace courses, request transcripts, and connect with university recruiters.
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

            {/* Agreements Search & Listings */}
            <section className="py-16 md:py-24 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-200/50 pb-6">
                        <ScrollAnimation variant="slide-right" className="space-y-1">
                            <h3 className="text-2xl font-display font-bold text-gray-800">Articulation Agreements</h3>
                            <p className="text-gray-500 text-sm font-light">Explore transfer programs from {agreements.length} partner universities.</p>
                        </ScrollAnimation>
                        <ScrollAnimation variant="slide-left" className="w-full md:max-w-md shrink-0">
                            <div className="relative">
                                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                                <input
                                    type="text"
                                    placeholder="Search by major (e.g. Psychology) or university..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-ucb-blue shadow-sm transition-all text-gray-700 placeholder:text-gray-400"
                                />
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredAgreements.map((item, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${(idx % 2) * 0.05}s`}
                                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                            <GraduationCap className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-display font-bold text-gray-800 text-lg leading-tight">{item.partner}</h4>
                                    </div>

                                    <div className="space-y-3 pt-3 border-t border-gray-50">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block font-display">Pathways & Programs</span>
                                        <ul className="space-y-2">
                                            {item.pathways.map((pathway, pidx) => (
                                                <li key={pidx} className="flex items-start gap-2.5 text-sm text-gray-600 font-light leading-relaxed">
                                                    <CheckCircle className="w-4 h-4 text-ucb-green shrink-0 mt-0.5" />
                                                    <span>{pathway}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {item.benefit && (
                                        <div className="p-4 bg-ucb-orange/5 border border-ucb-orange/10 rounded-2xl flex gap-3 items-start mt-2">
                                            <Award className="w-5 h-5 text-ucb-orange shrink-0 mt-0.5" />
                                            <div>
                                                <span className="text-[9px] font-bold text-ucb-orange uppercase tracking-wider block font-display">Tuition Benefit / Scholarship</span>
                                                <p className="text-gray-600 text-xs mt-0.5 font-light leading-relaxed">{item.benefit}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {item.links && item.links.length > 0 && (
                                    <div className="flex flex-col gap-2 pt-4 border-t border-gray-50">
                                        {item.links.map((link, lidx) => (
                                            <a 
                                                key={lidx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-semibold text-ucb-blue hover:text-ucb-blue-glow transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                                            >
                                                {link.label} <ExternalLink className="w-3 h-3" />
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </ScrollAnimation>
                        ))}
                    </div>

                    {filteredAgreements.length === 0 && (
                        <div className="text-center py-12 bg-white rounded-3xl border border-gray-100 shadow-inner">
                            <p className="text-gray-400 text-sm font-light">No transfer agreements match your search criteria. Try a different term.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default CollegeTransferPathways;
