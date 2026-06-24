import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import {
    CheckCircle, PartyPopper, ClipboardCheck, UserCheck, GraduationCap,
    Plus, Minus, DollarSign, MessageCircle
} from 'lucide-react';

const nextSteps = [
    {
        icon: ClipboardCheck,
        title: 'We Review Your Application',
        desc: 'Our admissions team carefully reviews your application—usually within a few business days.',
    },
    {
        icon: UserCheck,
        title: 'An Advisor Reaches Out',
        desc: 'We\'ll contact you to answer questions, gather any additional information, and help you choose your program.',
    },
    {
        icon: GraduationCap,
        title: 'You Plan & Enroll',
        desc: 'Together we\'ll build your academic plan and your plan to pay—then you\'re ready to start classes.',
    },
];

const faqs = [
    {
        q: 'What happens after I apply?',
        a: "Our admissions team will review your application and reach out to you directly to answer questions, gather any additional documents if needed, and guide you through the next steps.",
    },
    {
        q: 'Do I still need to send any documents?',
        a: "If you haven't already, you'll want a copy of your high school diploma, GED, or HiSET and a photo ID. Your advisor will let you know if anything else is needed for your file.",
    },
    {
        q: 'How will I pay for college?',
        a: "Most Urban College students graduate debt-free. Our financial services team will help you apply for federal, state, and local grants and scholarships, and set up an affordable payment plan if needed.",
    },
    {
        q: 'When can I start classes?',
        a: "Urban College offers rolling enrollment with five start dates a year, including accelerated 8-week sessions. Your advisor will help you pick the start date that works best for you.",
    },
];

const ThankYouApplication: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="bg-gray-50/40 min-h-screen">
            <SEO
                title="Thank You for Your Application | Urban College of Boston"
                description="Congratulations on applying to Urban College of Boston! Here's what happens next, plus answers to common questions about financial aid and getting started."
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
                            <PartyPopper className="w-4 h-4" /> Application Received
                        </span>
                        <h1 className="text-3xl md:text-5xl font-display font-black text-ucb-blue leading-tight">
                            Congratulations—Your Application Is In!
                        </h1>
                        <p className="text-lg text-gray-600 font-light leading-relaxed mt-5 max-w-2xl mx-auto">
                            You've taken a bold step toward your future. Our admissions team will review your
                            application and be in touch soon to answer your questions and help you plan what's next.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* What happens next */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Your Next Steps</span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">What Happens Now</h2>
                    </ScrollAnimation>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {nextSteps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <ScrollAnimation key={step.title} variant="fade-up" delay={`${idx * 0.08}s`} className="h-full">
                                    <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm h-full flex flex-col">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-11 h-11 rounded-2xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center shrink-0">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-xs font-black text-ucb-orange uppercase tracking-wider">Step {idx + 1}</span>
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-ucb-blue mb-1.5">{step.title}</h3>
                                        <p className="text-sm text-gray-600 font-light leading-relaxed flex-1">{step.desc}</p>
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
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">Questions About What's Next</h2>
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

            {/* Closing CTA */}
            <section className="py-16 bg-ucb-blue text-white">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">While You Wait</h2>
                        <p className="text-blue-100 font-light leading-relaxed max-w-xl mx-auto mb-7">
                            Get a head start on your plan to pay for college, or join a free info session to meet our
                            team and get your questions answered live.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/financial-aid" className="bg-ucb-orange text-white font-bold py-3 px-7 rounded-full hover:bg-ucb-orange-glow transition-colors shadow-md min-h-[44px] inline-flex items-center justify-center gap-2">
                                <DollarSign className="w-4 h-4" /> Explore Financial Aid
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

export default ThankYouApplication;
