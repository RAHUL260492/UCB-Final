import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    Calendar, Clock, MapPin, Laptop, Plus, Minus,
    CheckCircle, MessageSquare, Phone, Mail, Play, Globe,
    Users, Award, HelpCircle, GraduationCap, ArrowRight, Languages
} from 'lucide-react';

interface UpcomingSession {
    id: string;
    date: string;
    day: string;
    time: string;
    format: 'Online';
    type: 'General Info Session' | 'Program-Specific Info Session';
    focus: string;
    programKey: string;
}

const InfoSessions: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Admissions & Aid", path: "/admissions" },
        { label: "Information Sessions" }
    ];

    // FAQ Accordion State
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    // Mock Calendar Data
    const UPCOMING_SESSIONS: UpcomingSession[] = [
        {
            id: 'sess_1',
            date: 'June 2, 2026',
            day: 'Tuesday',
            time: '6:00 PM - 7:00 PM EST',
            format: 'Online',
            type: 'General Info Session',
            focus: 'General Urban College Overview',
            programKey: 'Undecided'
        },
        {
            id: 'sess_2',
            date: 'June 4, 2026',
            day: 'Thursday',
            time: '12:00 PM - 1:00 PM EST',
            format: 'Online',
            type: 'Program-Specific Info Session',
            focus: 'Early Childhood Education (ECE)',
            programKey: 'Early Childhood Education'
        },
        {
            id: 'sess_3',
            date: 'June 16, 2026',
            day: 'Tuesday',
            time: '6:00 PM - 7:30 PM EST',
            format: 'Online',
            type: 'General Info Session',
            focus: 'General Urban College Overview',
            programKey: 'Undecided'
        },
        {
            id: 'sess_4',
            date: 'June 23, 2026',
            day: 'Tuesday',
            time: '5:30 PM - 6:30 PM EST',
            format: 'Online',
            type: 'Program-Specific Info Session',
            focus: 'Human Services & Case Management',
            programKey: 'Case Management'
        }
    ];

    const FAQS = [
        {
            q: "Do I need to apply to attend an info session?",
            a: "Absolutely not! Info sessions are open to everyone—no application required. Just register and show up (or log on). You belong here."
        },
        {
            q: "Are info sessions free?",
            a: "Yes! 100% free. No fees, no commitments. Come as you are."
        },
        {
            q: "Can I attend online?",
            a: "Yes—all of our info sessions are held 100% online, so you can join from anywhere that fits your busy life. We'll send you a virtual link to join when you register."
        },
        {
            q: "What if I'm not ready to apply yet?",
            a: "No problem at all. Many of our students attend an info session months before applying. Come learn, ask questions, and get inspired. We'll be here when you're ready."
        },
        {
            q: "Will I get help with financial aid?",
            a: "Yes! Our financial aid team will be available to answer your questions and help you navigate federal, state, and private grants to make your tuition highly affordable."
        },
        {
            q: "Are sessions available in Spanish?",
            a: "Absolutely—we support you! Urban College is a multilingual college. Spanish-language sessions and bilingual staff are available. ESL support is tailored to each student's needs."
        }
    ];

    const whatToExpect = [
        {
            title: "Meet Urban College Staff",
            desc: "Chat with admissions advisors, program coordinators, and faculty members who are dedicated to your success."
        },
        {
            title: "Get Questions Answered Live",
            desc: "Ask anything about academic courses, schedules, tutoring, or student life."
        },
        {
            title: "Learn About Tuition & Aid Options",
            desc: "Our financial aid advisors will explain grants, state scholarships, and how to minimize your out-of-pocket costs."
        },
        {
            title: "Explore Program Options",
            desc: "Learn about Early Childhood Education, Human Services, Case Management, Digital Marketing, General Studies, and more to find your perfect fit."
        },
        {
            title: "Get Hands-on Application Help",
            desc: "We will walk you through the free online form so you can complete your application on the spot if you choose."
        }
    ];

    const whyAttendList = [
        "No pressure, no sales pitch: Just honest, helpful guidance from people who care about your success.",
        "Multilingual support available: Sessions and materials are available in English and Spanish.",
        "Fits into your busy life: Sessions are 100% online—join from anywhere on any device.",
        "Walk away with a plan: Whether you're ready to apply today or just exploring, you'll leave with a clear next step."
    ];

    const whyUcbBulletPoints = [
        "Finish in as little as one year — certificate programs range from 18–21 credits.",
        "Highly affordable programs — generous federal/state financial aid and grants can help cover your tuition costs.",
        "100% online, career-building programs — study asynchronously or live on a schedule built for working adults.",
        "Multilingual support — courses and academic services offered in English, Spanish, and Mandarin.",
        "1-on-1 advising, free tutoring, and career coaching — personalized support at every step of your journey.",
        "Accredited nonprofit, Hispanic-Serving Institution (HSI) — committed to diverse learners and long-term success."
    ];

    // Scroll to the registration form (Element451 embed handles the actual RSVP/CRM capture)
    const scrollToForm = () => {
        const formElement = document.getElementById('rsvp-form-section');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="pt-24 lg:pt-32">
            <SEO
                title={PAGE_META.infoSessions.title}
                description={PAGE_META.infoSessions.description}
                canonicalPath={PAGE_META.infoSessions.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Info Sessions', path: PAGE_META.infoSessions.path },
                ])}
            />
            <PageHeader 
                title="Information Sessions" 
                subtitle="Your Questions. Real Answers. Your Future Starts Here."
                breadcrumbs={breadcrumbs}
            />

            {/* Intro Hero Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <span className="inline-block px-3 py-1 bg-ucb-orange/10 text-ucb-orange text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Admissions Events
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ucb-blue mt-2 leading-tight">
                                    Take the Next Step In Your Career
                                </h2>
                                <div className="h-1 w-20 bg-ucb-orange rounded-full mt-4"></div>
                            </ScrollAnimation>

                            <ScrollAnimation variant="fade-up" className="text-gray-600 text-sm md:text-base leading-relaxed font-light space-y-4">
                                <p>
                                    Ready to take the next step? Join us at a <strong>FREE online</strong> Urban College of Boston Information Session and discover how earning a certificate or degree can transform your career—in as little as one year.
                                </p>
                                <p>
                                    Whether you're just starting to explore or ready to finalize your application, our info sessions are designed for you. Meet our admissions team, program staff, and faculty, get your questions answered in real time, and walk away with a clear plan for your future.
                                </p>
                            </ScrollAnimation>

                            <ScrollAnimation variant="fade-up">
                                <div className="bg-blue-50 border-l-4 border-ucb-blue p-4 rounded-r-2xl">
                                    <p className="text-sm font-semibold text-ucb-blue flex items-center gap-2">
                                        <GraduationCap className="w-5 h-5 shrink-0" />
                                        Discover how affordable your education can be. Come find out how.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Fast Callout Card */}
                        <div className="lg:col-span-5">
                            <ScrollAnimation variant="slide-left" className="bg-gradient-to-br from-ucb-blue to-blue-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                                <div className="absolute -right-10 -bottom-10 opacity-10">
                                    <Calendar className="w-64 h-64" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <h4 className="font-display font-bold text-lg text-ucb-gold border-b border-white/10 pb-3">What to Expect</h4>
                                    <ul className="space-y-4">
                                        {whatToExpect.map((item, idx) => (
                                            <li key={idx} className="flex gap-3 items-start text-xs font-light">
                                                <CheckCircle className="w-4.5 h-4.5 text-ucb-gold mt-0.5 shrink-0" />
                                                <div>
                                                    <strong className="block text-white font-bold">{item.title}</strong>
                                                    <span className="opacity-80 block pt-0.5 leading-relaxed">{item.desc}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Two Ways to Connect Grid */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Formats</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Two Ways to Connect</h2>
                        <p className="text-gray-500 max-w-md mx-auto text-sm font-light mt-1">Select the format that aligns with your educational journey.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Program Specific */}
                        <ScrollAnimation variant="slide-right" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-2xl bg-ucb-orange/10 text-ucb-orange flex items-center justify-center shrink-0">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-lg text-ucb-blue">Program-Specific Info Sessions</h3>
                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                Dive deep into one of our high-demand certificate or degree programs. You'll meet faculty and staff from your specific program of interest, get a detailed look at the curriculum, and learn exactly what your career path looks like after graduation.
                            </p>
                        </ScrollAnimation>

                        {/* General */}
                        <ScrollAnimation variant="slide-left" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-2xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center shrink-0">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-lg text-ucb-blue">General Information Sessions</h3>
                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                Not sure which program is right for you? Perfect. Our general sessions give you the full picture of what Urban College of Boston has to offer—programs, support services, financial aid, and student life. Bring your questions and leave with clarity.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Why Attend Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollAnimation variant="slide-right" className="space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-ucb-orange/10 flex items-center justify-center">
                                <HelpCircle className="w-6 h-6 text-ucb-orange" />
                            </div>
                            <h2 className="text-3xl font-display font-extrabold text-ucb-blue leading-tight">Why Attend?</h2>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                                Choosing a college is a big decision, but we make it easy. Our flexible, affordable online programs make it possible to balance school with your busy life. Our info sessions are your first experience of the personalized, 1-on-1 support that defines the Urban College experience.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="bg-gray-50 rounded-3xl p-8 border border-gray-100 space-y-4">
                            {whyAttendList.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-light">
                                    <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Upcoming Sessions Calendar */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Schedule</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Upcoming Sessions</h2>
                        <p className="text-gray-500 max-w-md mx-auto text-sm font-light mt-1">
                            Sessions are held online throughout the semester. Check back often as new sessions are added.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {UPCOMING_SESSIONS.map((session, idx) => (
                            <ScrollAnimation 
                                key={session.id} 
                                variant="fade-up" 
                                delay={`${idx * 0.1}s`}
                                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <span className="text-xs font-bold text-ucb-orange bg-ucb-orange/10 px-3 py-1 rounded-full uppercase tracking-wider">
                                            {session.type}
                                        </span>
                                        <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                                            {session.format === 'Online' ? <Laptop className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}
                                            {session.format}
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-display font-bold text-base text-ucb-blue">{session.focus}</h4>
                                        <div className="flex flex-col gap-1 text-xs text-gray-500 font-light">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-ucb-blue shrink-0" />
                                                <span>{session.day}, {session.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-ucb-blue shrink-0" />
                                                <span>{session.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6 mt-6 border-t border-gray-100 flex justify-end">
                                    <button
                                        onClick={scrollToForm}
                                        className="bg-ucb-blue text-white hover:bg-ucb-orange text-[10px] uppercase font-bold py-2 px-5 rounded-full transition-colors tracking-wide min-h-[38px] flex items-center"
                                    >
                                        RSVP Now
                                    </button>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* RSVP Form Section */}
            <section id="rsvp-form-section" className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-3xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Registration</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Reserve Your Spot — It's Free!</h2>
                        <p className="text-gray-500 max-w-sm mx-auto text-sm font-light mt-1">
                            Seats fill up quickly. Register below to secure your place at an upcoming online session.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fade-up" className="bg-gray-50 rounded-3xl p-4 sm:p-6 border border-gray-100 shadow-md">
                        {/* Element451 registration form — submissions flow directly into the Urban College CRM */}
                        <iframe
                            src={`${import.meta.env.BASE_URL}rfi-form.html?formId=urbancollege.forms.25231`}
                            title="Reserve Your Info Session Spot"
                            className="w-full border-0 bg-transparent rounded-2xl"
                            style={{ minHeight: '640px' }}
                            loading="lazy"
                        />
                    </ScrollAnimation>
                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Clarifications</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Frequently Asked Questions</h2>
                        <p className="text-gray-500 leading-relaxed text-sm font-light mt-1">Everything you need to know about starting your journey.</p>
                    </ScrollAnimation>

                    <div className="space-y-4">
                        {FAQS.map((faq, idx) => (
                            <ScrollAnimation key={idx} variant="fade-up" delay={`${idx * 0.05}s`}>
                                <div
                                    className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openFaqIndex === idx
                                        ? 'shadow-md border-ucb-blue/30'
                                        : 'shadow-sm border-gray-100 hover:border-ucb-blue/20'
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                        className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50/50 transition-colors"
                                    >
                                        <span className={`font-bold text-sm md:text-base transition-colors ${openFaqIndex === idx ? 'text-ucb-blue' : 'text-ucb-dark'}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaqIndex === idx ? 'bg-ucb-blue text-white rotate-180' : 'bg-gray-100 text-ucb-dark'}`}>
                                            {openFaqIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </div>
                                    </button>

                                    <div 
                                        className={`transition-all duration-300 overflow-hidden ${openFaqIndex === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-5 pt-0 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-50 mt-2 font-light">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Quote */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-ucb-orange/5 border border-ucb-orange/20 rounded-3xl p-8 max-w-2xl mx-auto text-center space-y-6 relative overflow-hidden">
                            <div className="absolute right-0 top-0 translate-y-1/2 translate-x-1/2 opacity-10">
                                <Languages className="w-64 h-64 text-ucb-orange" />
                            </div>
                            <div className="flex justify-center">
                                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md">
                                    <img src="/assets/images/testimonials/ramona-de-los-santos.webp" alt="Ramona De Los Santos" className="w-full h-full object-cover" loading="lazy" />
                                </div>
                            </div>
                            <h4 className="font-display font-bold text-base text-ucb-blue">Ramona De Los Santos</h4>
                            <p className="text-[10px] font-bold text-ucb-orange uppercase tracking-wider -mt-3">Case Management Certificate Graduate</p>
                            
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light italic">
                                "If you have any dreams, go forward. When I first came here, I didn’t speak English, but I was pushed to continue to study and get my diploma."
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Institutional Why Urban College */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollAnimation variant="slide-right" className="space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-display font-extrabold text-ucb-blue leading-tight">Why Urban College of Boston?</h2>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                                We are committed to removing barriers and helping you build a successful future on a schedule that fits your life.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
                            {whyUcbBulletPoints.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-gray-700 font-light">
                                    <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Footer CTA & Contact */}
            <section className="py-16 bg-gradient-to-r from-ucb-blue to-blue-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center lg:text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Call to Actions */}
                        <div className="lg:col-span-8 space-y-6">
                            <h2 className="text-3xl font-display font-extrabold leading-tight">Ready to Take the Next Step?</h2>
                            <p className="opacity-90 text-sm md:text-base font-light leading-relaxed max-w-xl">
                                Your future starts with one conversation. Reserve your free spot at an Urban College of Boston Information Session today—and discover how we'll help you launch your career, fit education into your busy life, and graduate without debt.
                            </p>
                            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a 
                                    href="#rsvp-form-section" 
                                    className="bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px] flex items-center justify-center"
                                >
                                    Reserve My Free Spot
                                </a>
                                <a
                                    href="tel:+16176658530"
                                    className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-colors min-h-[44px] flex items-center justify-center gap-1.5"
                                >
                                    <Phone className="w-4 h-4" /> (617) 665-8530
                                </a>
                            </div>
                        </div>

                        {/* Contacts Grid */}
                        <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-left space-y-4">
                            <h3 className="font-display font-bold text-lg border-b border-white/10 pb-3">
                                Questions?
                            </h3>
                            <p className="text-xs font-light opacity-90 leading-relaxed">
                                Contact our admissions team directly and we'll reply as soon as possible.
                            </p>
                            <div className="space-y-3 pt-2 text-xs font-medium">
                                <a href="mailto:admissions@urbancollege.edu" className="flex items-center gap-2 hover:text-ucb-orange transition-colors">
                                    <Mail className="w-4 h-4 text-ucb-gold" />
                                    admissions@urbancollege.edu
                                </a>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-ucb-gold" />
                                    (617) 665-8530
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoSessions;
