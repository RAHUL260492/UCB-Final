import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    Clock, Laptop, Users, Calendar, Mail, Phone, FileText, 
    ArrowRight, CheckCircle, HelpCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Registration: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Current Students", path: "/#students" },
        { label: "Registration" }
    ];

    const structures = [
        {
            title: "Asynchronous Online Courses",
            desc: "Learn entirely on your own time. Access recorded lectures, readings, and assignments without any scheduled live virtual classes.",
            icon: Clock,
            accent: "border-ucb-blue/20 bg-ucb-blue/[0.02]"
        },
        {
            title: "Hybrid Online Courses",
            desc: "A structured blend of asynchronous lectures/assignments paired with mandatory weekly live video sessions with your professor and classmates.",
            icon: Users,
            accent: "border-ucb-orange/20 bg-ucb-orange/[0.02]"
        },
        {
            title: "Flex Online Courses",
            desc: "A blend of asynchronous study with optional but highly encouraged weekly live meetings to enhance your learning experience and seek help.",
            icon: Laptop,
            accent: "border-ucb-green/20 bg-ucb-green/[0.02]"
        }
    ];

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30">
            <PageHeader
                title="Course Registration"
                subtitle="Urban College of Boston designs its courses to fit your busy life. Register today and build your ideal schedule."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Alert Banner / Term Callout */}
            <section className="py-12 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-gradient-to-r from-ucb-blue/10 to-blue-50 border-l-4 border-ucb-blue p-6 rounded-r-2xl shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="space-y-2">
                                <span className="inline-flex px-3 py-1 bg-ucb-blue text-white rounded-full text-xs font-bold uppercase tracking-wider">Registration Status</span>
                                <h3 className="text-xl md:text-2xl font-display font-bold text-ucb-blue">Spring Registration is Open Now!</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    The Second Spring term begins <strong>March 24, 2026</strong>. We offer both 8-week and 16-week sessions.
                                </p>
                            </div>
                            <a 
                                href="https://portal.urbancollege.edu/GENSRsC.cfm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-ucb-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-ucb-blue-glow transition-all inline-flex items-center gap-2 shrink-0 shadow text-sm min-h-[44px]"
                            >
                                Search Course Schedule <ExternalLinkIcon />
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Advising & Support */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollAnimation variant="slide-right" className="space-y-6">
                            <h2 className="text-3xl font-display font-black text-ucb-blue">Academic Advising Support</h2>
                            <p className="text-gray-600 leading-relaxed font-light">
                                Current Students, reach out to your Academic Advisor—they are ready to guide you in choosing courses that keep you on track for graduation.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                                    <div className="w-10 h-10 rounded-full bg-ucb-orange/10 flex items-center justify-center text-ucb-orange shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">Need help identifying your advisor?</h4>
                                        <p className="text-gray-500 text-xs mt-1">
                                            Contact Registration Services at <a href="mailto:registration@urbancollege.edu" className="text-ucb-blue hover:underline">registration@urbancollege.edu</a> for assistance.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                                    <div className="w-10 h-10 rounded-full bg-ucb-green/10 flex items-center justify-center text-ucb-green shrink-0">
                                        <HelpCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">New to Urban College?</h4>
                                        <p className="text-gray-500 text-xs mt-1">
                                            Our Admissions counselors are here to help answer questions. Email us at <a href="mailto:Admissions@urbancollege.edu" className="text-ucb-blue hover:underline">Admissions@urbancollege.edu</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="bg-gray-50 rounded-3xl p-8 border border-gray-100 space-y-6">
                            <h3 className="text-xl font-display font-bold text-gray-800">Registration Details</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-ucb-green shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-600"><strong>Year-Round Instruction:</strong> Runs across Fall, Spring, and Summer semesters.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-ucb-green shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-600"><strong>Flexible Formats:</strong> Online courses structured to fit around your busy schedule.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-ucb-green shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-600"><strong>Flexible Pacing:</strong> Enroll in full 16-week classes or accelerated 8-week terms.</span>
                                </li>
                            </ul>
                            <div className="pt-4 border-t border-gray-200/60 flex flex-wrap gap-3">
                                <Link 
                                    to="/academic-calendar-webpage" 
                                    className="bg-white border border-gray-200 text-gray-700 hover:text-ucb-blue px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm inline-flex items-center gap-1.5 transition-all"
                                >
                                    <Calendar className="w-4 h-4 text-ucb-orange" />
                                    Academic Calendar
                                </Link>
                                <Link 
                                    to="/program-overview" 
                                    className="bg-white border border-gray-200 text-gray-700 hover:text-ucb-blue px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm inline-flex items-center gap-1.5 transition-all"
                                >
                                    <FileText className="w-4 h-4 text-ucb-blue" />
                                    Program Overview
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Course Structures */}
            <section className="py-16 md:py-24 bg-gray-50/50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Choose Your Structure</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Three Online Formats</h2>
                        <p className="text-gray-500 mt-2">Pick the online engagement style that matches your self-study preference and live schedule.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {structures.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.1}s`}
                                    className={`bg-white rounded-3xl p-8 border shadow-sm hover:shadow-md hover:border-ucb-blue/30 transition-all flex flex-col justify-between ${item.accent}`}
                                >
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-gray-100 text-ucb-blue shadow-inner shrink-0">
                                            <Icon className="w-6 h-6 text-ucb-blue" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-gray-800 leading-tight">{item.title}</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Questions CTA */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
                    <ScrollAnimation variant="fade-up" className="space-y-3">
                        <h2 className="text-3xl font-display font-black text-ucb-black">Have Questions?</h2>
                        <p className="text-gray-500 font-light max-w-xl mx-auto">
                            Need help applying or configuring your registration? Get in touch with UCB's coordinators.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <ScrollAnimation variant="slide-right" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between items-center text-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-ucb-blue/10 flex items-center justify-center text-ucb-blue">
                                <Phone className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-gray-800 text-sm">Admissions Hotline</h4>
                            <a href="tel:617-449-7067" className="font-display font-bold text-ucb-blue select-all text-sm">(617) 449-7067</a>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between items-center text-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-ucb-orange/10 flex items-center justify-center text-ucb-orange">
                                <Mail className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-gray-800 text-sm">Admissions Email</h4>
                            <a href="mailto:admissions@urbancollege.edu" className="font-display font-bold text-ucb-blue select-all text-sm">admissions@urbancollege.edu</a>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation variant="fade-up" className="pt-4">
                        <a 
                            href="https://www.urbancollege.edu/application"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-ucb-orange text-white px-8 py-4 rounded-2xl font-bold hover:bg-ucb-orange-glow hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md text-center inline-flex items-center gap-2 cursor-pointer min-h-[48px]"
                        >
                            Apply to UCB (Free Application) <ArrowRight className="w-5 h-5" />
                        </a>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

// Simple icon wrapper
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
);

export default Registration;
