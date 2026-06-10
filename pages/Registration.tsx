import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    Clock, Laptop, Users, Calendar, Mail, Phone, FileText, 
    ArrowRight, CheckCircle, HelpCircle, ChevronDown, Info,
    ArrowUpRight, Award, DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';

const Registration: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleFaq = (idx: number) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Current Students", path: "/#students" },
        { label: "Register for Courses" }
    ];

    const formats = [
        {
            title: "Asynchronous Online",
            icon: Clock,
            color: "text-ucb-blue bg-ucb-blue/10",
            border: "border-ucb-blue/20",
            points: [
                "Study 100% on your own schedule — no live class sessions required",
                "Access lectures, readings, and assignments any time of day or night",
                "Perfect for students with unpredictable schedules, night shifts, or family responsibilities"
            ]
        },
        {
            title: "Hybrid Online",
            icon: Users,
            color: "text-ucb-orange bg-ucb-orange/10",
            border: "border-ucb-orange/20",
            points: [
                "A mix of independent coursework AND weekly live sessions with your professor",
                "Stay connected to your classmates while keeping flexibility",
                "Choose this format if you thrive with some scheduled structure"
            ]
        }
    ];

    const faqs = [
        {
            q: "What if I don't know which courses to take?",
            a: "Every student at Urban College is assigned an academic advisor who will help you choose the right courses for your program and goals. Contact registration@urbancollege.edu if you haven't connected yet."
        },
        {
            q: "Can I take just one course at a time?",
            a: "Yes! You set the pace. Whether you take one course or a full load, Urban College supports your journey at whatever speed works for your life."
        },
        {
            q: "Is financial aid available?",
            a: "Yes! Our financial aid team helps students find grants and scholarships to keep out-of-pocket costs minimal. Contact our financial aid team at financialservices@urbancollege.edu to learn what you qualify for as soon as possible before your first class begins."
        },
        {
            q: "What if I need tech support for online classes?",
            a: "We've got you covered. The Learning Resource Center (LRC) provides technical support and tutoring in English, Spanish, and Mandarin. Reach us at lrc@urbancollege.edu or 617-449-7044."
        }
    ];

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30">
            <SEO
                title={PAGE_META.registration.title}
                description={PAGE_META.registration.description}
                canonicalPath={PAGE_META.registration.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Registration', path: PAGE_META.registration.path },
                ])}
            />
            <PageHeader
                title="Register for Courses"
                subtitle="Every class is a step toward your goals! Keep your momentum, on your schedule."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Intro Section */}
            <section className="py-16 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
                    <ScrollAnimation variant="fade-up">
                        <span className="inline-block px-4 py-1.5 bg-ucb-blue/10 text-ucb-blue text-xs font-bold uppercase tracking-widest rounded-full mb-2">
                            Take Your Next Step
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-ucb-blue leading-tight">
                            Simple, Flexible Course Registration
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-light mt-4 max-w-3xl mx-auto">
                            Ready to take the next step? Urban College of Boston makes course registration simple, flexible, and built around your schedule. Whether you're loading up for a full semester or taking it one course at a time, we have a format that works for you.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Choose Your Format Section */}
            <section className="py-16 md:py-24 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-16">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-3xl mx-auto space-y-3">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display font-black">Flexible Formats</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Choose Your Format — Built for Your Life</h2>
                        <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                            At Urban College, you learn on your terms. With flexible course formats and both 8-week and 16-week sessions, you can build a schedule that fits into your busy life — not the other way around.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {formats.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.1}s`}
                                    className={`bg-white rounded-3xl p-8 border ${item.border} shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between`}
                                >
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shrink-0`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="font-display font-bold text-xl text-gray-800 leading-tight">{item.title}</h3>
                                        </div>
                                        <ul className="space-y-3 pt-2">
                                            {item.points.map((point, pIdx) => (
                                                <li key={pIdx} className="flex items-start gap-2.5 text-xs text-gray-500 font-light leading-relaxed">
                                                    <CheckCircle className="w-4.5 h-4.5 text-ucb-green shrink-0 mt-0.5" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Accelerated Progress Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <ScrollAnimation variant="slide-right" className="lg:col-span-7 space-y-6">
                            <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display font-black">Flexible Session Pacing</span>
                            <h3 className="text-2xl md:text-3xl font-display font-black text-ucb-blue">
                                Accelerate Your Progress: 8-Week & 16-Week Options
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-light text-sm">
                                Want to move faster? Our 8-week accelerated sessions let you complete a course in half the time, so you can earn credits more quickly and reach your goals sooner. Prefer a steadier pace? Our 16-week full-semester format gives you space to absorb material deeply.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="lg:col-span-5 bg-gradient-to-br from-ucb-orange/5 to-orange-50/50 p-6 rounded-3xl border border-ucb-orange/20 space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-ucb-orange/10 rounded-2xl text-ucb-orange shrink-0">
                                    <Info className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-display font-bold text-gray-800 text-sm">Advisor Recommendation</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed font-light">
                                        <strong>Pro Tip:</strong> Talk to your advisor about mixing 8-week and 16-week courses to build the perfect schedule!
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* How to Register (3 Easy Steps) */}
            <section className="py-16 md:py-24 bg-gray-50/30 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl space-y-16">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display font-black">Registration Process</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black mt-2">How to Register — 3 Easy Steps</h2>
                        <p className="text-gray-500 mt-2 text-sm font-light">Follow these three steps to finalize your course selection and clear your plan.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <ScrollAnimation variant="fade-up" delay="0s" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4 relative flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-full bg-ucb-blue text-white font-bold flex items-center justify-center font-display text-sm">
                                    1
                                </div>
                                <h3 className="font-display font-bold text-base text-gray-800">Connect with your Advisor</h3>
                                <p className="text-gray-500 text-xs leading-relaxed font-light">
                                    Your advisor helps you select the right courses and build a plan for success. Not sure who your advisor is? Check your student portal or email <a href="mailto:registration@urbancollege.edu" className="text-ucb-blue hover:underline font-semibold">registration@urbancollege.edu</a>.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Step 2 */}
                        <ScrollAnimation variant="fade-up" delay="0.05s" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4 relative flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-full bg-ucb-orange text-white font-bold flex items-center justify-center font-display text-sm">
                                    2
                                </div>
                                <h3 className="font-display font-bold text-base text-gray-800">Confirm your financial plan</h3>
                                <p className="text-gray-500 text-xs leading-relaxed font-light">
                                    Tuition can be covered by financial aid, self-pay, or employer payment. Make sure your plan is in place. Email <a href="mailto:financialservices@urbancollege.edu" className="text-ucb-blue hover:underline font-semibold">financialservices@urbancollege.edu</a>. We work to keep your out-of-pocket costs minimal!
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Step 3 */}
                        <ScrollAnimation variant="fade-up" delay="0.1s" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4 relative flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-full bg-ucb-green text-white font-bold flex items-center justify-center font-display text-sm">
                                    3
                                </div>
                                <h3 className="font-display font-bold text-base text-gray-800">Complete your registration</h3>
                                <p className="text-gray-500 text-xs leading-relaxed font-light">
                                    Meet with your advisor, select your courses, and you're in! Be sure to review the <Link to="/academic-calendar-webpage" className="text-ucb-blue hover:underline font-semibold">Academic Calendar</Link> for important registration deadlines.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Questions & Contact Info Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl space-y-12">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display font-black">Support Channels</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black mt-2 font-bold">Questions? We're Here For You.</h2>
                        <p className="text-gray-500 mt-2 text-sm font-light">Reach out to our teams for direct assistance on enrollment, billing, or advising.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Current Students */}
                        <ScrollAnimation variant="fade-up" delay="0s" className="bg-gray-50 p-6 rounded-2xl border border-gray-150 flex flex-col justify-between gap-4">
                            <div className="space-y-2">
                                <div className="w-9 h-9 rounded-xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue">
                                    <Users className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-gray-800 text-sm">Current Students</h4>
                                <p className="text-gray-500 text-xs font-light leading-relaxed">
                                    Reach out to your Academic Advisor, or contact Registration Services.
                                </p>
                            </div>
                            <div className="pt-2 border-t border-gray-200/50">
                                <a href="mailto:registration@urbancollege.edu" className="text-xs font-semibold text-ucb-blue hover:text-ucb-orange transition-colors inline-flex items-center gap-1">
                                    <Mail className="w-3.5 h-3.5" /> registration@urbancollege.edu
                                </a>
                            </div>
                        </ScrollAnimation>

                        {/* New Students */}
                        <ScrollAnimation variant="fade-up" delay="0.05s" className="bg-gray-50 p-6 rounded-2xl border border-gray-150 flex flex-col justify-between gap-4">
                            <div className="space-y-2">
                                <div className="w-9 h-9 rounded-xl bg-ucb-orange/10 flex items-center justify-center text-ucb-orange">
                                    <HelpCircle className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-gray-800 text-sm">New Students</h4>
                                <p className="text-gray-500 text-xs font-light leading-relaxed">
                                    Contact our Admissions counselors for application and scheduling support.
                                </p>
                            </div>
                            <div className="space-y-2 pt-2 border-t border-gray-200/50 flex flex-col">
                                <a href="mailto:admissions@urbancollege.edu" className="text-xs font-semibold text-ucb-blue hover:text-ucb-orange transition-colors inline-flex items-center gap-1">
                                    <Mail className="w-3.5 h-3.5" /> admissions@urbancollege.edu
                                </a>
                                <a href="tel:617-665-8530" className="text-xs font-semibold text-ucb-blue hover:text-ucb-orange transition-colors inline-flex items-center gap-1">
                                    <Phone className="w-3.5 h-3.5" /> (617) 665-8530
                                </a>
                            </div>
                        </ScrollAnimation>

                        {/* Academic Calendar */}
                        <ScrollAnimation variant="fade-up" delay="0.1s" className="bg-gray-50 p-6 rounded-2xl border border-gray-150 flex flex-col justify-between gap-4">
                            <div className="space-y-2">
                                <div className="w-9 h-9 rounded-xl bg-ucb-green/10 flex items-center justify-center text-ucb-green">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-gray-800 text-sm">Important Deadlines</h4>
                                <p className="text-gray-500 text-xs font-light leading-relaxed">
                                    View semester start dates, add/drop periods, and academic deadlines.
                                </p>
                            </div>
                            <div className="pt-2 border-t border-gray-200/50">
                                <Link to="/academic-calendar-webpage" className="text-xs font-semibold text-ucb-blue hover:text-ucb-orange transition-colors inline-flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5 text-ucb-orange" /> View Academic Calendar
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="py-16 md:py-24 bg-gray-50/30 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-3xl space-y-12">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-xl mx-auto">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display font-black">Help Center</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black mt-2">Frequently Asked Questions</h2>
                        <p className="text-gray-500 mt-2 text-sm font-light">Have additional questions about enrollment pacing, financial aid, or digital classrooms?</p>
                    </ScrollAnimation>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up"
                                delay={`${idx * 0.05}s`}
                                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openFaq === idx ? 'shadow-md border-ucb-blue/20' : 'shadow-sm border-gray-100 hover:border-gray-200'}`}
                            >
                                <button 
                                    onClick={() => toggleFaq(idx)} 
                                    className="w-full flex justify-between items-center p-5 text-left group min-h-[44px] cursor-pointer"
                                >
                                    <span className={`font-bold text-base pr-4 transition-colors ${openFaq === idx ? 'text-ucb-blue' : 'text-gray-800 group-hover:text-ucb-blue'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-ucb-blue text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>
                                <div 
                                    className="overflow-hidden transition-all duration-300"
                                    style={{ maxHeight: openFaq === idx ? '300px' : '0', opacity: openFaq === idx ? 1 : 0 }}
                                >
                                    <div className="p-5 pt-0 border-t border-gray-50 text-sm text-gray-600 leading-relaxed font-light">
                                        {faq.a}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="bg-gradient-to-br from-ucb-blue to-blue-900 text-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden text-center space-y-8">
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                        
                        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
                            <span className="text-ucb-gold font-bold tracking-widest uppercase text-xs block font-display font-black">Get Registered</span>
                            <h2 className="text-3xl md:text-4xl font-display font-black text-white leading-tight animate-pulse-slow">
                                Ready to Build Your Schedule?
                            </h2>
                            <p className="text-blue-100 font-light text-sm md:text-base leading-relaxed">
                                Log in to the student portal to select your sections, or review the course schedule online.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                            <a 
                                href="https://portal.urbancollege.edu/studsect.cfm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-ucb-orange hover:bg-ucb-orange-glow text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-ucb-orange/20 uppercase inline-flex items-center justify-center gap-1.5 min-h-[48px]"
                            >
                                Register Now <ArrowUpRight className="w-4 h-4" />
                            </a>
                            <a 
                                href="https://portal.urbancollege.edu/GENSRsC.cfm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/45 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider transition-colors uppercase inline-flex items-center justify-center gap-1.5 min-h-[48px]"
                            >
                                View Course Schedule <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default Registration;

