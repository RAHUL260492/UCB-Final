import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import {
    CheckCircle, ArrowRight, Sparkles, Clock, GraduationCap,
    Plus, Minus, DollarSign, MessageCircle
} from 'lucide-react';

const APPLY_URL = 'https://urbancollege-28708.app451.sites.451.io/';

const quickInfo = [
    { icon: DollarSign, label: 'Free Application', desc: 'No fee, no SAT/ACT, no essays required.' },
    { icon: Clock, label: 'About 15 Minutes', desc: 'A short online form is all it takes to start.' },
    { icon: GraduationCap, label: 'Open Admission', desc: 'A high school diploma, GED, or HiSET is all you need.' },
];

const faqs = [
    {
        q: 'Is the application really free?',
        a: "Yes—our application is 100% free, with no fees and no SAT or ACT required. It takes about 15 minutes to complete online.",
    },
    {
        q: 'What do I need to apply?',
        a: "Just a copy of your high school diploma, GED, or HiSET, and a photo ID. You can upload them right in the application or email them to admissions later.",
    },
    {
        q: 'Will I qualify for financial aid?',
        a: "Most Urban College students graduate debt-free. Our financial services team works with you one-on-one to leverage federal, state, and local grants and scholarships to make your education affordable.",
    },
    {
        q: 'Can I take classes online?',
        a: "Yes. Our programs are 100% online with flexible, multilingual scheduling—study from anywhere in English, Spanish, or Mandarin while balancing work and life.",
    },
];

const ThankYouProgram: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="bg-gray-50/40 min-h-screen">
            <SEO
                title="Thank You for Your Interest | Urban College of Boston"
                description="Thank you for requesting information from Urban College of Boston. Our admissions team will be in touch—meanwhile, start your free application today."
                noindex
            />

            {/* Celebratory hero */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <div className="w-20 h-20 rounded-full bg-ucb-emerald/10 text-ucb-emerald flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-11 h-11" />
                        </div>
                        <span className="inline-flex items-center gap-2 text-ucb-orange font-bold tracking-widest uppercase text-xs mb-3">
                            <Sparkles className="w-4 h-4" /> Request Received
                        </span>
                        <h1 className="text-3xl md:text-5xl font-display font-black text-ucb-blue leading-tight">
                            Thank You for Your Interest in Urban College!
                        </h1>
                        <p className="text-lg text-gray-600 font-light leading-relaxed mt-5 max-w-2xl mx-auto">
                            Our admissions team will be in touch soon to answer your questions and walk you through
                            your options. You're one step closer to a more affordable, flexible future—why wait?
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fade-up" delay="0.12s" className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href={APPLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-3 px-8 rounded-full text-sm uppercase tracking-wider transition-colors shadow-md min-h-[44px] inline-flex items-center gap-2"
                        >
                            Start Your Free Application <ArrowRight className="w-4 h-4" />
                        </a>
                        <Link
                            to="/programs"
                            className="bg-white text-ucb-blue border border-gray-200 hover:border-ucb-blue font-bold py-3 px-8 rounded-full text-sm uppercase tracking-wider transition-colors min-h-[44px] inline-flex items-center"
                        >
                            Explore Programs
                        </Link>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Application quick info */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Applying Is Easy</span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">A Few Things to Know</h2>
                    </ScrollAnimation>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {quickInfo.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <ScrollAnimation key={item.label} variant="fade-up" delay={`${idx * 0.08}s`} className="h-full">
                                    <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm h-full text-center flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-2xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-ucb-blue mb-1.5">{item.label}</h3>
                                        <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-3xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Good to Know</span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">Quick Questions, Answered</h2>
                    </ScrollAnimation>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <ScrollAnimation key={idx} variant="fade-up" delay={`${idx * 0.05}s`}>
                                <div className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openFaq === idx ? 'shadow-md border-ucb-blue/30' : 'shadow-sm border-gray-100 hover:border-ucb-blue/20'}`}>
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50/50 transition-colors"
                                    >
                                        <span className={`font-bold text-sm md:text-base ${openFaq === idx ? 'text-ucb-blue' : 'text-ucb-dark'}`}>{faq.q}</span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-ucb-blue text-white' : 'bg-gray-100 text-ucb-dark'}`}>
                                            {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </div>
                                    </button>
                                    <div className={`transition-all duration-300 overflow-hidden ${openFaq === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed font-light">{faq.a}</div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing links */}
            <section className="py-16 bg-ucb-blue text-white">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Keep Exploring</h2>
                        <p className="text-blue-100 font-light leading-relaxed max-w-xl mx-auto mb-7">
                            Learn how affordable your education can be, or join a free info session to get your
                            questions answered live.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/financial-aid" className="bg-ucb-orange text-white font-bold py-3 px-7 rounded-full hover:bg-ucb-orange-glow transition-colors shadow-md min-h-[44px] inline-flex items-center justify-center gap-2">
                                <DollarSign className="w-4 h-4" /> Admissions &amp; Financial Aid
                            </Link>
                            <Link to="/info-sessions" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-7 rounded-full transition-colors min-h-[44px] inline-flex items-center justify-center gap-2">
                                <MessageCircle className="w-4 h-4" /> Attend an Info Session
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default ThankYouProgram;
