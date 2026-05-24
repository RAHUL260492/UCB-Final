import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    Accessibility, FileText, CalendarCheck, ShieldAlert, HeartHandshake,
    Mail, Phone, ExternalLink, Download, AlertCircle, HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentServices: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Current Students", path: "/#students" },
        { label: "Student Services" }
    ];

    const accommodationServices = [
        "Verifying eligibility for academic accommodations based on documentation",
        "Providing academic advocacy support for students with documented disabilities",
        "Assisting the campus community in responding to disability-related issues and concerns",
        "Working with the campus community to overcome architectural, attitudinal, and administrative barriers",
        "Educating and training students on assistive technology resources",
        "Coordinating peer note-taking services and exam accommodations",
        "Assisting students with academic strategies and study habits",
        "Providing assistance and referrals for the diagnostic evaluation process"
    ];

    const forms = [
        {
            title: "Accommodation & Accessibility Process",
            desc: "Download the detailed guide regarding UCB's accommodation steps, roles, and guidelines.",
            path: "/s/Accommodation-and-Accessibility-Process-ytyr.pdf",
            type: "PDF Document",
            isExternal: false
        },
        {
            title: "Accommodation Request Form",
            desc: "Submit your official academic accommodation request via Microsoft Forms.",
            path: "https://forms.office.com/Pages/ResponsePage.aspx?id=HnCdJ2cNiUupTrgmGCPjKzt0agm94stErG3OXo8chiNUQjlIRkpXVks5MEU2UU5QUUFMV0Y5Vk1LSy4u",
            type: "Microsoft Forms Request",
            isExternal: true
        },
        {
            title: "Medical Provider Form",
            desc: "Submit the necessary verification documents from your healthcare provider.",
            path: "https://forms.office.com/Pages/ResponsePage.aspx?id=HnCdJ2cNiUupTrgmGCPjKzt0agm94stErG3OXo8chiNUMjNJMk41V040S0czMURXVzBERlRYU0tNMC4u",
            type: "Microsoft Forms Verification",
            isExternal: true
        }
    ];

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30">
            <PageHeader
                title="Student Services & Support"
                subtitle="Urban College of Boston is committed to your academic success, health, and personal development."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Intro Grid */}
            <section className="py-16 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Student Success Commitments</span>
                                <h2 className="text-3xl font-display font-black text-ucb-blue leading-tight">
                                    Supportive Resources Tailored for Your UCB Experience
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-light mt-4">
                                    At Urban College, we offer students a variety of support networks to help you navigate your college experience, overcome barriers, and achieve your educational dreams.
                                </p>
                                <p className="text-gray-500 leading-relaxed mt-2 text-sm">
                                    The <Link to="/program-overview" className="text-ucb-blue hover:underline">Academic Affairs Department</Link> offers tutoring, writing, and technological resources through the <Link to="/learning-resource-center" className="text-ucb-blue hover:underline">Learning Resource Center (LRC)</Link>, as well as academic, program, and transfer advising.
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className="lg:col-span-4 bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col justify-center items-start gap-4">
                            <ScrollAnimation variant="slide-left" className="space-y-4 w-full">
                                <div className="inline-flex p-3 bg-ucb-orange/10 text-ucb-orange rounded-xl border border-ucb-orange/10">
                                    <AlertCircle className="w-6 h-6" />
                                </div>
                                <h4 className="font-display font-bold text-gray-800 text-base leading-snug">Student Code of Conduct</h4>
                                <p className="text-gray-500 text-xs leading-relaxed font-light">
                                    Our community is built on mutual respect and integrity. Review academic standards and conduct policies inside our active handbook:
                                </p>
                                <a 
                                    href="/s/2025-2026-URBAN-COLLEGE-OF-BOSTON-STUDENT-HANDBOOK_Final.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center bg-white border border-gray-200 hover:border-ucb-blue hover:text-ucb-blue px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm block cursor-pointer min-h-[38px]"
                                >
                                    Download Student Handbook (2025-2026)
                                </a>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accessibility & Accommodations */}
            <section className="py-16 md:py-24 bg-gray-50/50 relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <ScrollAnimation variant="slide-right" className="lg:col-span-5 space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue border border-ucb-blue/10 shrink-0">
                                <Accessibility className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-display font-black text-ucb-black">Accessibility & Accommodations</h2>
                            <p className="text-gray-600 leading-relaxed font-light text-sm">
                                The Student Services team provides accommodations to students qualifying as having a disability under the Americans with Disabilities Act (ADA) and Section 504 of the Rehabilitation Act.
                            </p>
                            <div className="p-5 bg-white border border-gray-100 rounded-2xl space-y-2 shadow-sm">
                                <span className="text-[10px] font-bold text-ucb-blue uppercase tracking-widest block font-display">ADA Definition</span>
                                <p className="text-gray-500 text-xs italic leading-relaxed font-light">
                                    “A physical or mental impairment that substantially limits one or more major life activities; a record of such an impairment; or being regarded as having such an impairment.”
                                </p>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
                            <h3 className="font-display font-bold text-gray-800 text-lg">Services Provided May Include:</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-500 leading-relaxed font-light">
                                {accommodationServices.map((service, idx) => (
                                    <li key={idx} className="flex gap-2 items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-ucb-orange shrink-0 mt-2"></span>
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollAnimation>
                    </div>

                    {/* Accommodation Forms */}
                    <div className="space-y-6 pt-6 border-t border-gray-200/50">
                        <ScrollAnimation variant="fade-up" className="text-center max-w-xl mx-auto mb-10">
                            <h3 className="text-xl font-display font-bold text-gray-800">Accommodation Forms & Requests</h3>
                            <p className="text-gray-500 text-sm mt-1">Submit your verification documents and request services using these direct links.</p>
                        </ScrollAnimation>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {forms.map((form, idx) => {
                                const LinkIcon = form.isExternal ? ExternalLink : Download;
                                return (
                                    <ScrollAnimation 
                                        key={idx} 
                                        variant="fade-up" 
                                        delay={`${idx * 0.05}s`}
                                        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-ucb-blue/20 transition-all gap-6"
                                    >
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-start gap-2">
                                                <span className="text-[9px] font-bold uppercase tracking-widest bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full border border-gray-200/40">{form.type}</span>
                                            </div>
                                            <h4 className="font-display font-bold text-gray-800 text-sm">{form.title}</h4>
                                            <p className="text-gray-500 text-xs font-light leading-relaxed">{form.desc}</p>
                                        </div>
                                        <a 
                                            href={form.path}
                                            target={form.isExternal || form.path.endsWith('.pdf') ? "_blank" : undefined}
                                            rel={form.isExternal || form.path.endsWith('.pdf') ? "noopener noreferrer" : undefined}
                                            className="w-full text-center bg-ucb-blue text-white hover:bg-ucb-blue-glow py-2.5 rounded-xl text-xs font-bold transition-all shadow inline-flex items-center justify-center gap-1.5 min-h-[38px] cursor-pointer"
                                        >
                                            {form.isExternal ? "Open Form" : "Download PDF"}
                                            <LinkIcon className="w-3.5 h-3.5" />
                                        </a>
                                    </ScrollAnimation>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshops & Resources */}
            <section className="py-16 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Student Success Workshops */}
                        <ScrollAnimation variant="slide-right" className="space-y-6 bg-gray-50/50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-xl bg-ucb-orange/10 text-ucb-orange flex items-center justify-center border border-ucb-orange/10 shrink-0">
                                    <CalendarCheck className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-800">Student Success Workshops</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-xs md:text-sm">
                                    The Student Services Department and the Learning Resource Center (LRC) offer multilingual workshops throughout the academic year.
                                </p>
                                <p className="text-gray-500 leading-relaxed font-light text-xs">
                                    These sessions cover syllabus structures, research strategies, writing templates, and tech guides. Check UCB's monthly newsletters for active times and listings.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Basic Needs Resources */}
                        <ScrollAnimation variant="slide-left" className="space-y-6 bg-gray-50/50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-xl bg-ucb-green/10 text-ucb-green flex items-center justify-center border border-ucb-green/10 shrink-0">
                                    <HeartHandshake className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-800">Basic Needs & Housing</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-xs md:text-sm">
                                    UCB supports students struggling with factors that block education, including housing, food, healthcare, or technology.
                                </p>
                                <p className="text-gray-500 leading-relaxed font-light text-xs">
                                    For outside agency help, dial <strong>211</strong> or visit <a href="https://mass211.org" target="_blank" rel="noreferrer" className="text-ucb-blue hover:underline">mass211.org</a> to connect with community services.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200/50">
                                <a 
                                    href="/s/Student-Services-Resource-Handbook-8.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white border border-gray-200 text-gray-700 hover:text-ucb-blue px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm inline-flex items-center gap-1.5 transition-all"
                                >
                                    <Download className="w-4 h-4 text-ucb-orange" />
                                    Student Resource Handbook
                                </a>
                                <a 
                                    href="https://mass211.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white border border-gray-200 text-gray-700 hover:text-ucb-blue px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm inline-flex items-center gap-1.5 transition-all"
                                >
                                    <ExternalLink className="w-4 h-4 text-ucb-blue" />
                                    Visit Mass 211
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Support Coordinator Contacts */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
                    <ScrollAnimation variant="fade-up" className="space-y-3">
                        <h2 className="text-3xl font-display font-black text-ucb-black">Contact Coordinator</h2>
                        <p className="text-gray-500 font-light max-w-xl mx-auto text-sm">
                            Have questions regarding accessibility, ADA guidelines, or housing resources? Reach out directly.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fade-up" className="bg-gray-50 rounded-3xl p-8 border border-gray-100 max-w-2xl mx-auto space-y-6">
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-ucb-orange uppercase tracking-widest block font-display">Director of Student Services and Support</span>
                            <h3 className="text-2xl font-display font-bold text-ucb-blue">Rosana Perella</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-4 border-t border-gray-200/50">
                            <a 
                                href="tel:617-449-7380" 
                                className="bg-white p-4 rounded-xl border border-gray-150 flex items-center justify-center gap-3 text-gray-700 hover:text-ucb-blue shadow-sm hover:shadow transition-all font-semibold"
                            >
                                <Phone className="w-5 h-5 text-ucb-blue" />
                                (617) 449-7380
                            </a>
                            <a 
                                href="mailto:Rosana.Perella@urbancollege.edu?subject=Accessibility%20and%20Support%20Services%20Inquiry"
                                className="bg-white p-4 rounded-xl border border-gray-150 flex items-center justify-center gap-3 text-gray-700 hover:text-ucb-blue shadow-sm hover:shadow transition-all font-semibold"
                            >
                                <Mail className="w-5 h-5 text-ucb-orange" />
                                Send Email
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default StudentServices;
