import React, { useEffect, useState, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    GraduationCap, BookOpen, Accessibility, Briefcase, 
    Laptop, Users, Library, CreditCard, Mail, Phone, ExternalLink, Download 
} from 'lucide-react';

const sections = [
    { id: 'advisement', title: 'Academic Planning & Advisement', icon: GraduationCap },
    { id: 'lrc', title: 'Learning Resource Center', icon: BookOpen },
    { id: 'accessibility', title: 'Accessibility & Accommodation', icon: Accessibility },
    { id: 'career', title: 'Career Planning & Development', icon: Briefcase },
    { id: 'computers', title: 'Computer Facilities', icon: Laptop },
    { id: 'alumni', title: 'Alumni Association', icon: Users },
    { id: 'library', title: 'Library & Information Resources', icon: Library },
    { id: 'id-cards', title: 'Identification Cards', icon: CreditCard }
];

const CollegeServicesAndResources: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('advisement');
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Setup intersection observer to track active section
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        observer.current = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Trigger when section is in the middle of viewport
            threshold: 0
        });

        sections.forEach(sec => {
            const el = document.getElementById(sec.id);
            if (el && observer.current) {
                observer.current.observe(el);
            }
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Student Services", path: "/student-services" },
        { label: "College Services & Resources" }
    ];

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30 min-h-screen">
            <SEO
                title={PAGE_META.collegeServices.title}
                description={PAGE_META.collegeServices.description}
                canonicalPath={PAGE_META.collegeServices.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'College Services', path: PAGE_META.collegeServices.path },
                ])}
            />
            <PageHeader
                title="College Services & Resources"
                subtitle="Explore our comprehensive student handbook, campus resources, academic advisement, and support systems."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            <section className="py-12 md:py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        {/* ─── Sticky Sidebar Table of Contents ─── */}
                        <div className="lg:col-span-4 sticky top-28 hidden lg:block bg-gray-50 p-6 rounded-2xl border border-gray-150 shadow-sm">
                            <h3 className="font-display font-bold text-lg text-ucb-blue mb-4 pb-2 border-b border-gray-200">
                                Handbook Sections
                            </h3>
                            <nav className="space-y-1">
                                {sections.map((sec) => {
                                    const IconComp = sec.icon;
                                    const isActive = activeSection === sec.id;
                                    return (
                                        <button
                                            key={sec.id}
                                            onClick={() => scrollToSection(sec.id)}
                                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer ${
                                                isActive 
                                                    ? 'bg-ucb-blue text-white shadow-sm' 
                                                    : 'text-gray-600 hover:bg-gray-100 hover:text-ucb-blue'
                                            }`}
                                        >
                                            <IconComp className={`w-4.5 h-4.5 shrink-0 ${isActive ? 'text-ucb-gold' : 'text-gray-400 group-hover:text-ucb-blue'}`} />
                                            <span className="truncate">{sec.title}</span>
                                        </button>
                                    );
                                })}
                            </nav>
                            
                            {/* Download full handbook PDF */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <a
                                    href="/s/2025-2026-URBAN-COLLEGE-OF-BOSTON-STUDENT-HANDBOOK_Final.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-ucb-orange hover:bg-ucb-orange-glow text-white text-xs font-bold py-3 rounded-xl transition-all shadow shadow-ucb-orange/20 cursor-pointer"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download Full Student Handbook</span>
                                </a>
                            </div>
                        </div>

                        {/* ─── Mobile Table of Contents Scrollbar ─── */}
                        <div className="lg:hidden w-full bg-gray-50/80 backdrop-blur-md p-4 rounded-xl border border-gray-150 overflow-x-auto flex gap-2 no-scrollbar scroll-smooth sticky top-20 z-20">
                            {sections.map((sec) => {
                                const isActive = activeSection === sec.id;
                                return (
                                    <button
                                        key={sec.id}
                                        onClick={() => scrollToSection(sec.id)}
                                        className={`flex-none px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                                            isActive 
                                                ? 'bg-ucb-blue text-white shadow-sm' 
                                                : 'bg-white border border-gray-200 text-gray-600 hover:border-ucb-blue'
                                        }`}
                                    >
                                        {sec.title}
                                    </button>
                                );
                            })}
                        </div>

                        {/* ─── Handbook Content Pane ─── */}
                        <div className="lg:col-span-8 space-y-16 lg:pl-4">
                            
                            {/* Academic Planning and Advisement */}
                            <ScrollAnimation variant="fade-up" id="advisement" className="scroll-mt-32 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-ucb-blue/5 rounded-xl flex items-center justify-center text-ucb-blue border border-ucb-blue/10">
                                        <GraduationCap className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-display font-black text-ucb-black">Academic Planning & Advisement</h2>
                                </div>
                                <div className="text-gray-600 text-sm leading-relaxed font-light space-y-4">
                                    <p>
                                        Students and their academic advisors should meet regularly to review and discuss students’ academic progress, professional, and personal goals and objectives. Advisors recommend course selection and sequence and remain key points of contact and sources of guidance throughout students’ academic career at UCB.
                                    </p>
                                    <p>
                                        <strong>Registration Requirement:</strong> Students are expected to schedule an appointment and meet with their assigned academic advisor prior to registration every semester.
                                    </p>
                                    <p>
                                        In addition to the ongoing guidance provided by academic advisors, each student has access to staff who are available to offer information on financial aid, assist with internships and field placements, and provide referrals to other agencies and organizations. Staff will also assist students in developing peer support groups for academic, professional, and social networking.
                                    </p>
                                </div>
                            </ScrollAnimation>

                            <hr className="border-gray-100" />

                            {/* The Learning Resource Center (LRC) */}
                            <ScrollAnimation variant="fade-up" id="lrc" className="scroll-mt-32 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-ucb-orange/10 rounded-xl flex items-center justify-center text-ucb-orange border border-ucb-orange/15">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-display font-black text-ucb-black">The Learning Resource Center (LRC)</h2>
                                </div>
                                <div className="text-gray-600 text-sm leading-relaxed font-light space-y-4">
                                    <p>
                                        The Learning Resource Center (LRC) offers a range of academic support including one-on-one tutoring, group study sessions, and academic workshops for UCB students. The LRC is staffed by the LRC Coordinator and a team of Learning Support Associates (LSAs).
                                    </p>
                                    <p>
                                        <strong>Multilingual Support:</strong> LSAs provide tutoring services in <strong>English, Spanish, and Mandarin</strong>. Students can find several academic tip sheets, Quizlet sets, and technology assistance information on the LRC’s webpage.
                                    </p>
                                    <p>
                                        <strong>Arranging Tutoring:</strong> Arrangements for tutoring are made via email at <a href="mailto:lrc@urbancollege.edu" className="text-ucb-blue hover:underline font-semibold">lrc@urbancollege.edu</a>, calling <strong>617.449.7044</strong>, or through the LRC’s scheduling website <a href="https://urbancampus.mywconline.com" target="_blank" rel="noopener noreferrer" className="text-ucb-blue hover:underline font-semibold">urbancampus.mywconline.com</a>.
                                    </p>
                                </div>
                            </ScrollAnimation>

                            <hr className="border-gray-100" />

                            {/* Accessibility and Accommodation */}
                            <ScrollAnimation variant="fade-up" id="accessibility" className="scroll-mt-32 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-ucb-blue/5 rounded-xl flex items-center justify-center text-ucb-blue border border-ucb-blue/10">
                                        <Accessibility className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-display font-black text-ucb-black">Accessibility and Accommodation</h2>
                                </div>
                                <div className="text-gray-600 text-sm leading-relaxed font-light space-y-4">
                                    <p>
                                        The Student Affairs department at Urban College of Boston provides services to students who qualify as having a disability under the Americans with Disabilities Act (ADA). The Student Affairs team is responsible for accommodations in accordance with the Americans with Disabilities Act, Section 504 of the Rehabilitation Act, and applicable state law.
                                    </p>
                                    <div className="p-4 bg-gray-50 border border-gray-150 rounded-xl my-4 italic text-xs leading-relaxed text-gray-500">
                                        “A physical or mental impairment that substantially limits one or more major life activities; a record of such an impairment; or being regarded as having such an impairment.” — Americans with Disabilities Act (ADA) definition of disability.
                                    </div>
                                    <p>
                                        The services provided to registered students with disabilities may include, but are not limited to:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-600">
                                        <li>Providing advocacy support for students with documented disabilities.</li>
                                        <li>Coordinating services, which includes verifying eligibility for academic accommodations based on documentation.</li>
                                        <li>Providing assistance to members of the campus community in responding to disability-related issues and concerns.</li>
                                        <li>Working with the larger campus community to overcome architectural, attitudinal, and administrative barriers.</li>
                                        <li>Educating and training students on assistive technology resources.</li>
                                        <li>Coordinating peer note-taking services and exam accommodations.</li>
                                        <li>Assisting students with academic strategies and referrals for diagnostic evaluation.</li>
                                    </ul>
                                    <p>
                                        If you are interested in requesting an accommodation, contact <strong>Rosana Perella</strong>, Director of Student Services and Support, at <a href="mailto:Rosana.Perella@urbancollege.edu" className="text-ucb-blue hover:underline font-semibold">Rosana.Perella@urbancollege.edu</a> or call <strong>617-449-7380</strong>.
                                    </p>
                                </div>
                            </ScrollAnimation>

                            <hr className="border-gray-100" />

                            {/* Career Planning and Development */}
                            <ScrollAnimation variant="fade-up" id="career" className="scroll-mt-32 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-ucb-orange/10 rounded-xl flex items-center justify-center text-ucb-orange border border-ucb-orange/15">
                                        <Briefcase className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-display font-black text-ucb-black">Career Planning & Development</h2>
                                </div>
                                <div className="text-gray-600 text-sm leading-relaxed font-light space-y-4">
                                    <p>
                                        Career planning and development is fully integrated into academic programs and includes academic and professional assessment at entry, career-related coursework, required and optional professional development seminars, internships, and fieldwork.
                                    </p>
                                    <p>
                                        <strong>Workshops:</strong> Workshops are offered periodically on topics such as resume preparation, professional portfolios, mock interviewing techniques, and job hunting.
                                    </p>
                                    <p>
                                        <strong>Job Postings:</strong> Professional opportunities are posted regularly on the UCB website and through the monthly newsletter.
                                    </p>
                                </div>
                            </ScrollAnimation>

                            <hr className="border-gray-100" />

                            {/* Computer Facilities */}
                            <ScrollAnimation variant="fade-up" id="computers" className="scroll-mt-32 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-ucb-blue/5 rounded-xl flex items-center justify-center text-ucb-blue border border-ucb-blue/10">
                                        <Laptop className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-display font-black text-ucb-black">Computer Facilities</h2>
                                </div>
                                <div className="text-gray-600 text-sm leading-relaxed font-light space-y-4">
                                    <p>
                                        Urban College of Boston has a Learning Resource Center with twelve computer workstations and two printers for student use, as well as a language lab and a separate computer classroom.
                                    </p>
                                    <p>
                                        Students can do research for class assignments, write papers, and access library and other database research materials through the Internet.
                                    </p>
                                    <p>
                                        <strong>Availability:</strong> Computers are generally available on a first-come, first-served basis. Students are encouraged to call ahead at <strong>617-449-7044</strong> or stop by the LRC to check on availability.
                                    </p>
                                </div>
                            </ScrollAnimation>

                            <hr className="border-gray-100" />

                            {/* Alumni Association */}
                            <ScrollAnimation variant="fade-up" id="alumni" className="scroll-mt-32 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-ucb-orange/10 rounded-xl flex items-center justify-center text-ucb-orange border border-ucb-orange/15">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-display font-black text-ucb-black">Alumni Association</h2>
                                </div>
                                <div className="text-gray-600 text-sm leading-relaxed font-light space-y-4">
                                    <p>
                                        The Urban College of Boston Alumni Association was established in the spring of 2004 with a generous grant from Hannah and Moses Malkin.
                                    </p>
                                    <p>
                                        The UCB Alumni Association is open to all degree and certificate recipients. Those interested in more information or joining the Alumni Association may contact the Chief Advancement Officer.
                                    </p>
                                </div>
                            </ScrollAnimation>

                            <hr className="border-gray-100" />

                            {/* Library and Information Resources */}
                            <ScrollAnimation variant="fade-up" id="library" className="scroll-mt-32 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-ucb-blue/5 rounded-xl flex items-center justify-center text-ucb-blue border border-ucb-blue/10">
                                        <Library className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-display font-black text-ucb-black">Library & Information Resources</h2>
                                </div>
                                <div className="text-gray-600 text-sm leading-relaxed font-light space-y-6">
                                    <p>
                                        Urban College of Boston is committed to ensuring that all students gain the information literacy skills they need to be successful students and engaged citizens. UCB students have access to a full array of print and non-print resources through the College’s dedicated suite of Gale Databases, an inter-library loan agreement with neighboring Emerson College, and library resources through the Boston Public Library (BPL).
                                    </p>
                                    
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-gray-800 text-sm">Gale Databases</h4>
                                        <p className="text-xs">
                                            With the assistance of the Massachusetts Board of Library Commissioners and the Massachusetts Library System, UCB provides students with over thirty Gale databases covering virtually every academic discipline.
                                        </p>
                                        <p className="text-xs">
                                            Located at <a href="https://www.galepages.com/mlin_b_urbancb" target="_blank" rel="noopener noreferrer" className="text-ucb-blue hover:underline font-semibold">galepages.com/mlin_b_urbancb</a>, UCB’s customized e-resources page is available from computers in the LRC, as well as to remote users 24/7. It offers full-text access to academic journals, newspapers (including the Boston Globe and New York Times), encyclopedias, and e-books.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-bold text-gray-800 text-sm">Emerson College Inter-Library Loan</h4>
                                        <p className="text-xs">
                                            As the result of our inter-library loan agreement with neighboring Emerson College, UCB students and staff can borrow physical library materials from Emerson College's library collections.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-bold text-gray-800 text-sm">Boston Public Library (BPL)</h4>
                                        <p className="text-xs">
                                            UCB students have access to the Boston Regional Library System (BRLS) through the BPL, including its extensive databases. UCB students can use their personal BPL library card to gain access to BRLS online services, including ProQuest, EBSCO, Gale Group, OCLC, NewsBank, NetLibrary, and many more.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            <hr className="border-gray-100" />

                            {/* Identification Cards */}
                            <ScrollAnimation variant="fade-up" id="id-cards" className="scroll-mt-32 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-ucb-orange/10 rounded-xl flex items-center justify-center text-ucb-orange border border-ucb-orange/15">
                                        <CreditCard className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-display font-black text-ucb-black">Identification Cards</h2>
                                </div>
                                <div className="text-gray-600 text-sm leading-relaxed font-light space-y-4">
                                    <p>
                                        UCB will issue identification cards to all students upon their enrollment.
                                    </p>
                                    <p>
                                        <strong>Card Requirement:</strong> All students are required to complete the process to have a card issued and carry it with them whenever they come to campus. Students may be asked to produce their identification card by UCB and building staff for security.
                                    </p>
                                </div>
                            </ScrollAnimation>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default CollegeServicesAndResources;
