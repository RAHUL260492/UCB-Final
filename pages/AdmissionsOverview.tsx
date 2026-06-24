import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { openChat } from '../src/lib/chat';
import { 
    Heart, GraduationCap, Laptop, Globe, Languages, 
    MessageSquare, Briefcase, Award, CheckCircle, 
    ChevronRight, ArrowRight, Mail, Phone, 
    MessageCircle, FileText, UserCheck, HelpCircle
} from 'lucide-react';

const AdmissionsOverview: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Admissions & Aid", path: "/#financial-aid" },
        { label: "Admissions Overview" }
    ];

    const whyChooseList = [
        {
            title: "Personalized Financial Aid",
            desc: "Our advisors work with you to leverage federal, state, and private grants to minimize costs.",
            icon: GraduationCap,
            color: "text-ucb-blue bg-blue-50"
        },
        {
            title: "100% Online Options",
            desc: "Study on your schedule, from anywhere, with flexible course formats.",
            icon: Laptop,
            color: "text-ucb-orange bg-orange-50"
        },
        {
            title: "Multilingual Support",
            desc: "We offer classes and student support services in English, Spanish, and Mandarin.",
            icon: Languages,
            color: "text-ucb-teal bg-teal-50"
        },
        {
            title: "Career-Focused",
            desc: "Graduate ready to work in high-demand fields with credentials employers respect.",
            icon: Briefcase,
            color: "text-purple-600 bg-purple-50"
        }
    ];

    const welcomeGroups = [
        "Working adults balancing jobs and family obligations",
        "First-generation college students navigating higher education",
        "Career changers ready for a new pathway or higher-paying field",
        "Multilingual learners building English language skills",
        "Anyone returning to education after some time away"
    ];

    const semesters = [
        { name: "Fall Semester", month: "September", desc: "Start of the academic year with 16-week and accelerated 8-week courses." },
        { name: "Spring Semester", month: "January", desc: "Mid-year enrollment with full term and second-session options." },
        { name: "Summer Semester", month: "May", desc: "Flexible summer schedules to catch up or accelerate your degree." }
    ];

    return (
        <div>
            <SEO
                title={PAGE_META.admissions.title}
                description={PAGE_META.admissions.description}
                canonicalPath={PAGE_META.admissions.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Admissions', path: PAGE_META.admissions.path },
                ])}
            />
            <PageHeader 
                title="Admissions Overview" 
                subtitle="Your Future Begins with One Simple Step. FREE Application | Open Enrollment"
                breadcrumbs={breadcrumbs}
            />

            {/* Top Quick Action / Free Callout */}
            <section className="py-8 bg-ucb-orange/10 border-b border-ucb-orange/20">
                <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-4 max-w-5xl">
                    <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 bg-ucb-orange rounded-full animate-pulse shrink-0"></span>
                        <p className="text-sm font-semibold text-ucb-blue">
                            Our application is completely free and takes only 15 minutes!
                        </p>
                    </div>
                    <a
                        href="https://urbancollege-28708.app451.sites.451.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-2.5 px-6 rounded-full text-xs uppercase tracking-wider transition-all shadow-md min-h-[44px] flex items-center cursor-pointer"
                    >
                        Apply Now - Free <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                </div>
            </section>

            {/* Why Choose Urban College */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Why Urban College?</span>
                        <h2 className="text-3xl font-display font-extrabold text-ucb-blue leading-tight">
                            A Supportive & Affordable Path to Success
                        </h2>
                        <div className="h-1 w-20 bg-ucb-orange rounded-full mt-4 mx-auto"></div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseList.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.08}s`}
                                    className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1 transform duration-300"
                                >
                                    <div>
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${item.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-display font-bold text-base text-ucb-blue mb-2">{item.title}</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3 Easy Steps Stepper */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-16">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Simple Admissions</span>
                        <h2 className="text-3xl font-display font-extrabold text-ucb-blue">Apply in 3 Easy Steps</h2>
                        <p className="text-gray-500 max-w-md mx-auto text-sm font-light mt-2">
                            Getting started at Urban College is fast, clear, and designed to support you from day one.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                        {/* Connecting Line for Stepper (Desktop) */}
                        <div className="absolute top-1/4 left-[15%] right-[15%] h-0.5 bg-gray-200 hidden lg:block z-0"></div>

                        {/* Step 1 */}
                        <ScrollAnimation variant="slide-right" delay="0.1s" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative z-10 flex flex-col justify-between min-h-[340px]">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="w-12 h-12 rounded-2xl bg-ucb-blue text-white font-display font-black text-xl flex items-center justify-center">
                                        1
                                    </span>
                                    <span className="text-xs font-bold text-ucb-orange bg-ucb-orange/10 px-3 py-1 rounded-full uppercase tracking-wider">
                                        Takes 15 mins
                                    </span>
                                </div>
                                <h3 className="font-display font-bold text-lg text-ucb-blue pt-2">Complete the Free Online Application</h3>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    Fill out our simple online application. No essays or application fees required!
                                </p>
                            </div>
                            <div className="pt-6">
                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-rfi-sidebar'))}
                                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-ucb-blue hover:text-ucb-orange transition-colors cursor-pointer"
                                >
                                    Start Your Application <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                </button>
                            </div>
                        </ScrollAnimation>

                        {/* Step 2 */}
                        <ScrollAnimation variant="fade-up" delay="0.2s" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative z-10 flex flex-col justify-between min-h-[340px]">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="w-12 h-12 rounded-2xl bg-ucb-blue text-white font-display font-black text-xl flex items-center justify-center">
                                        2
                                    </span>
                                    <span className="text-xs font-bold text-ucb-teal bg-ucb-teal/10 px-3 py-1 rounded-full uppercase tracking-wider">
                                        Document Check
                                    </span>
                                </div>
                                <h3 className="font-display font-bold text-lg text-ucb-blue pt-2">Submit Your Documents</h3>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    To finalize your file, submit the following:
                                </p>
                                <ul className="space-y-1.5">
                                    <li className="flex items-center gap-2 text-xs text-gray-600 font-light">
                                        <CheckCircle className="w-3.5 h-3.5 text-ucb-emerald shrink-0" />
                                        Copy of HS diploma, GED, or HiSET
                                    </li>
                                    <li className="flex items-center gap-2 text-xs text-gray-600 font-light">
                                        <CheckCircle className="w-3.5 h-3.5 text-ucb-emerald shrink-0" />
                                        Photo ID (license, passport, state ID)
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-6 border-t border-gray-100 bg-gray-50/50 -mx-8 -mb-8 p-6 rounded-b-3xl text-left">
                                <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
                                    <strong className="text-ucb-blue">Tip:</strong> You can upload documents directly in your application or email them to <a href="mailto:admissions@urbancollege.edu" className="text-ucb-orange hover:underline">admissions@urbancollege.edu</a>
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Step 3 */}
                        <ScrollAnimation variant="slide-left" delay="0.3s" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative z-10 flex flex-col justify-between min-h-[340px]">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="w-12 h-12 rounded-2xl bg-ucb-blue text-white font-display font-black text-xl flex items-center justify-center">
                                        3
                                    </span>
                                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                        1-on-1 Guidance
                                    </span>
                                </div>
                                <h3 className="font-display font-bold text-lg text-ucb-blue pt-2">Meet with Your Advisor</h3>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    After you apply, we'll schedule two quick meetings:
                                </p>
                                <ul className="space-y-2">
                                    <li className="text-xs text-gray-600 font-light leading-relaxed">
                                        <strong className="text-ucb-blue block">Academic Advising:</strong>
                                        Choose your program and plan your courses.
                                    </li>
                                    <li className="text-xs text-gray-600 font-light leading-relaxed">
                                        <strong className="text-ucb-blue block">Financial Services:</strong>
                                        Create your plan to pay. Most students pay nothing!
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-6">
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ucb-emerald">
                                    <CheckCircle className="w-4 h-4" /> Ready to Start Classes!
                                </span>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Open Admission / Everyone Belongs Here */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Welcome List column */}
                        <div className="lg:col-span-6 space-y-6">
                            <ScrollAnimation variant="slide-right">
                                <span className="inline-block px-3 py-1 bg-ucb-blue/10 text-ucb-blue text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Open Enrollment
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ucb-blue mt-2 leading-tight">
                                    Everyone Belongs Here
                                </h2>
                                <div className="h-1 w-20 bg-ucb-orange rounded-full mt-4"></div>
                            </ScrollAnimation>

                            <ScrollAnimation variant="slide-right" className="text-gray-600 text-sm md:text-base leading-relaxed font-light space-y-4">
                                <p>
                                    Urban College is an open-enrollment institution. If you have a high school diploma, GED, or HiSET certificate, you can enroll. No entrance exams are required.
                                </p>
                                <p>
                                    We welcome students of all backgrounds and situations to help them transform their careers:
                                </p>
                            </ScrollAnimation>

                            <ScrollAnimation variant="slide-right" className="space-y-3">
                                {welcomeGroups.map((group, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-light">
                                        <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                        <span>{group}</span>
                                    </div>
                                ))}
                            </ScrollAnimation>
                        </div>

                        {/* Assessment Callout and Tip Card */}
                        <div className="lg:col-span-6">
                            <ScrollAnimation variant="slide-left" className="space-y-6">
                                {/* Assessment Card */}
                                <div className="bg-ucb-blue text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                                    <div className="absolute -right-10 -bottom-10 opacity-10">
                                        <UserCheck className="w-64 h-64" />
                                    </div>
                                    <div className="relative z-10 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                                <HelpCircle className="w-5 h-5 text-ucb-gold" />
                                            </div>
                                            <h4 className="font-display font-bold text-base">A Note on Placement Assessments</h4>
                                        </div>
                                        <p className="text-sm font-light leading-relaxed opacity-90">
                                            We may require simple English language and course placement assessments, but they <strong className="text-ucb-gold font-bold">won't prevent you from enrolling</strong>.
                                        </p>
                                        <p className="text-xs font-light leading-relaxed opacity-80">
                                            These check-ins are designed solely to identify your baseline skills and guide you to the right starting level—specifically helping multilingual students build foundational English proficiency.
                                        </p>
                                    </div>
                                </div>

                                {/* Support Card */}
                                <div className="bg-ucb-orange/5 border border-ucb-orange/20 rounded-3xl p-6 flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-lg bg-ucb-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Award className="w-4.5 h-4.5 text-ucb-orange" />
                                    </div>
                                    <div>
                                        <h5 className="font-display font-bold text-xs text-ucb-blue uppercase tracking-wider mb-1">
                                            Flexible & Supportive
                                        </h5>
                                        <p className="text-xs text-gray-500 leading-relaxed font-light">
                                            From academic tutoring to bilingual support and flexible schedules, our team goes above and beyond to support you inside and outside the classroom.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Start Anytime — Rolling Enrollment */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Text explanation */}
                        <div className="lg:col-span-5 space-y-6">
                            <ScrollAnimation variant="slide-right">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block mb-2">Flexible Semesters</span>
                                <h2 className="text-3xl font-display font-bold text-ucb-blue">Start Anytime with Rolling Enrollment</h2>
                                <div className="h-1 w-16 bg-ucb-orange rounded-full mt-4"></div>
                            </ScrollAnimation>

                            <ScrollAnimation variant="slide-right" className="text-gray-600 text-sm leading-relaxed font-light space-y-4">
                                <p>
                                    You don't have to wait to start your education! We accept applications year-round and operate on a rolling basis.
                                </p>
                                <p>
                                    We offer <strong className="text-ucb-blue font-bold">5 starts a year</strong>. The Fall and Spring semesters each include a standard 16-week session and an accelerated 8-week session, and the Summer offers one accelerated session. <Link to="/academic-calendar" className="text-ucb-blue font-semibold hover:underline">View the academic calendar</Link> to see detailed start dates.
                                </p>
                                <p className="text-xs bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                                    <strong className="text-ucb-blue font-semibold block mb-1">Accelerated or Standard Options:</strong>
                                    You can choose from a standard, full-length (16-week) course or accelerated 8-week courses each time you enroll.
                                </p>
                            </ScrollAnimation>
                        </div>

                        {/* Semesters list */}
                        <div className="lg:col-span-7 space-y-4">
                            {semesters.map((term, idx) => (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="slide-left" 
                                    delay={`${idx * 0.1}s`}
                                    className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-ucb-blue/10 text-ucb-blue font-display font-black text-xs uppercase flex flex-col items-center justify-center shrink-0 leading-none">
                                        <span>{term.month.substring(0, 3)}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-display font-bold text-sm text-ucb-blue">{term.name}</h4>
                                            <span className="text-[10px] font-bold text-ucb-orange uppercase tracking-wider">Starts {term.month}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 leading-relaxed font-light">{term.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Hear from Our Students */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Student Testimonials</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Hear from Our Alumni</h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Ramona S */}
                        <ScrollAnimation variant="slide-right" className="flex">
                            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 flex flex-col justify-between w-full shadow-sm hover:shadow-md transition-all">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl overflow-hidden shrink-0 shadow-md">
                                            <img src="/assets/images/testimonials/ramona-s.webp" alt="Ramona S." className="w-full h-full object-cover" loading="lazy" />
                                        </div>
                                        <div>
                                            <h3 className="font-display font-bold text-sm text-ucb-blue leading-tight">Ramona S.</h3>
                                            <p className="text-[10px] font-bold text-ucb-orange uppercase tracking-wider">Alum</p>
                                        </div>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light italic">
                                        "I wouldn't be able to do the work I do without my certificates and degree from Urban College. If you have any dreams, go forward. When I first came here, I didn't speak English, but I was pushed to continue to study and get my diploma."
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Dominga V */}
                        <ScrollAnimation variant="slide-left" className="flex">
                            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 flex flex-col justify-between w-full shadow-sm hover:shadow-md transition-all">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl overflow-hidden shrink-0 shadow-md">
                                            <img src="/assets/images/testimonials/dominga-v.png" alt="Dominga V." className="w-full h-full object-cover" loading="lazy" />
                                        </div>
                                        <div>
                                            <h3 className="font-display font-bold text-sm text-ucb-blue leading-tight">Dominga V.</h3>
                                            <p className="text-[10px] font-bold text-ucb-orange uppercase tracking-wider">Alum</p>
                                        </div>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light italic">
                                        "Urban College opened doors for me, opened opportunities for me that I never envisioned. I dare to say that everything in my life is thanks to Urban College."
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Questions / Help Contact Card */}
            <section className="py-12 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm max-w-2xl mx-auto text-center space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-ucb-orange/10 flex items-center justify-center mx-auto text-ucb-orange">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-display font-bold text-xl text-ucb-blue">Questions? We're Here to Help!</h3>
                                <p className="text-xs text-gray-500 leading-relaxed font-light max-w-md mx-auto">
                                    Our admissions counselors are ready to walk you through the application steps, submit transcripts, and choose the right program.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left">
                                <a href="mailto:admissions@urbancollege.edu" className="bg-gray-50 hover:bg-ucb-blue/5 border border-gray-100 p-4 rounded-2xl flex items-center gap-3 transition-colors group">
                                    <Mail className="w-4 h-4 text-ucb-blue shrink-0 group-hover:scale-110 transition-transform" />
                                    <div className="min-w-0">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Email Us</span>
                                        <span className="block text-[11px] text-ucb-blue font-semibold break-all leading-tight">admissions@urbancollege.edu</span>
                                    </div>
                                </a>

                                <a href="tel:+16176658530" className="bg-gray-50 hover:bg-ucb-blue/5 border border-gray-100 p-4 rounded-2xl flex items-center gap-3 transition-colors group">
                                    <Phone className="w-4 h-4 text-ucb-blue shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Call Us</span>
                                        <span className="block text-[11px] text-ucb-blue font-semibold">(617) 665-8530</span>
                                        <span className="block text-[8px] text-gray-400">Direct Admissions Line</span>
                                    </div>
                                </a>

                                <button
                                    onClick={openChat}
                                    className="bg-gray-50 hover:bg-ucb-blue/5 border border-gray-100 p-4 rounded-2xl flex items-center gap-3 transition-colors group text-left cursor-pointer min-h-[44px] w-full"
                                >
                                    <MessageSquare className="w-4 h-4 text-ucb-blue shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Chat Live</span>
                                        <span className="block text-[11px] text-ucb-blue font-semibold">Start Chat Room</span>
                                    </div>
                                </button>
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex justify-center">
                                <Link 
                                    to="/info-sessions" 
                                    className="bg-ucb-blue text-white hover:bg-ucb-blue-glow font-bold py-2.5 px-6 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px] flex items-center justify-center"
                                >
                                    Attend an Info Session
                                </Link>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-ucb-blue to-blue-950 text-white relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Call to Actions */}
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <h2 className="text-3xl font-display font-extrabold leading-tight">Ready to Transform Your Life?</h2>
                            <p className="opacity-90 text-sm md:text-base font-light leading-relaxed max-w-xl">
                                Your journey to a better career starts today. Apply now—it's free, fast, and your first step toward a brighter, affordable education and career future.
                            </p>
                            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                                <a
                                    href="https://urbancollege-28708.app451.sites.451.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px] flex items-center cursor-pointer"
                                >
                                    Apply Now - Free Application
                                </a>
                                <Link 
                                    to="/programs" 
                                    className="bg-white text-ucb-blue hover:bg-ucb-orange hover:text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-all shadow-md min-h-[44px] flex items-center"
                                >
                                    Explore Programs
                                </Link>
                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-rfi-sidebar'))}
                                    className="border border-white/60 hover:border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-all min-h-[44px] flex items-center cursor-pointer"
                                >
                                    Request Information
                                </button>
                            </div>
                        </div>

                        {/* Navigation Links Grid */}
                        <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-4">
                            <h3 className="font-display font-bold text-lg border-b border-white/10 pb-3">
                                Quick Links
                            </h3>
                            <ul className="grid grid-cols-1 gap-2 text-sm">
                                <li>
                                    <Link to="/financial-services-and-funding-options" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Financial Aid and Funding Options
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/tuition-payment-options" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Tuition and Fees
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/programs" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Academic Programs
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Academic Calendar
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdmissionsOverview;
