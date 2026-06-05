import React, { useState, useEffect, useRef } from 'react';
import {
    BookOpen, Clock, Globe, Briefcase, CheckCircle, TrendingUp,
    Users, DollarSign, Calendar, Award, GraduationCap, ArrowRight,
    ChevronDown, Star, Quote, Zap, Target, Shield, ChevronLeft, ChevronRight
} from 'lucide-react';
import ProgramPageHeader from './ProgramPageHeader';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProgramCourse {
    title: string;
    desc: string;
}

export interface ProgramOutcome {
    title: string;
    desc: string;
}

export interface ProgramBenefit {
    title: string;
    desc: string;
    icon: React.ElementType;
}

export interface ProgramStat {
    label: string;
    value: string;
    icon: React.ElementType;
    sub: string;
}

export interface ProgramFaq {
    q: string;
    a: string;
}

export interface ProgramAchievement {
    heading: string;
    items: string[];
    icon: React.ElementType;
}

export interface ProgramTestimonial {
    quote: string;
    name: string;
    role: string;
    imageSrc?: string;
}

export interface ProgramLayoutProps {
    // Header
    badge: string;
    title: React.ReactNode;
    subtitle: string;
    headerImageSrc: string;
    /** Optional CSS background-position override for the header image (e.g. 'center 40%'). */
    headerImagePosition?: string;
    secondaryImageSrc?: string;
    breadcrumbs: { label: string; path?: string }[];

    // Tagline section
    tagline: string;
    taglineBody: React.ReactNode;

    // Benefits
    benefits: ProgramBenefit[];

    // What You'll Achieve
    achievements: ProgramAchievement[];
    achievementNote?: string;

    // Courses
    courses: ProgramCourse[];

    // Outcomes
    outcomes: ProgramOutcome[];
    outcomesIntro?: string;
    outcomeTags?: string[];
    outcomeSources?: { label: string; url: string }[];

    // Stats
    stats: ProgramStat[];

    // Who is it for
    forWhom?: string[];

    // Pathway
    pathwayTitle?: string;
    pathwayDescription?: string;
    pathwaySteps?: { label: string; credits?: string; active?: boolean }[];

    // Testimonial
    testimonial?: ProgramTestimonial | ProgramTestimonial[];

    // FAQ
    faqs: ProgramFaq[];

    // CTA
    ctaRequirements?: string[];
    programName?: string;
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);
    return { ref, inView };
}

function useScrollProgress() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY;
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? (scrolled / total) * 100 : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return progress;
}

// ─── Sub-Components ───────────────────────────────────────────────────────────

const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
    children, delay = 0, className = ''
}) => {
    const { ref, inView } = useInView();
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

const BenefitCard: React.FC<{ benefit: ProgramBenefit; index: number }> = ({ benefit, index }) => {
    const { ref, inView } = useInView();
    const colors = [
        { bg: 'from-ucb-blue to-ucb-blue-glow', light: 'bg-ucb-blue/5', glow: 'shadow-[0_4px_14px_rgba(75,123,167,0.3)]' },
        { bg: 'from-ucb-green to-ucb-green-glow', light: 'bg-ucb-green/5', glow: 'shadow-[0_4px_14px_rgba(93,140,90,0.3)]' },
        { bg: 'from-ucb-orange to-ucb-orange-glow', light: 'bg-ucb-orange/5', glow: 'shadow-[0_4px_14px_rgba(245,166,35,0.3)]' },
        { bg: 'from-ucb-teal to-[#1C8A7C]', light: 'bg-ucb-teal/5', glow: 'shadow-[0_4px_14px_rgba(38,171,154,0.3)]' },
        { bg: 'from-ucb-periwinkle to-[#506E92]', light: 'bg-ucb-periwinkle/5', glow: 'shadow-[0_4px_14px_rgba(100,135,176,0.3)]' },
    ];
    const c = colors[index % colors.length];

    return (
        <div
            ref={ref}
            className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms, box-shadow 0.3s ease, translate 0.3s ease`
            }}
        >
            {/* Top accent bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${c.bg}`} />

            <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${c.light} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.bg} flex items-center justify-center shadow-lg ${c.glow}`}>
                        <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-ucb-blue transition-colors">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
            </div>

            {/* Hover shine */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/10 to-transparent" />
        </div>
    );
};

const StatCard: React.FC<{ stat: ProgramStat; index: number }> = ({ stat, index }) => {
    const { ref, inView } = useInView();
    // Alternate brand colors for the font and icon
    const colors = [
        { text: 'text-ucb-blue', bg: 'bg-ucb-blue/10', glow: 'from-transparent to-ucb-blue/10' },
        { text: 'text-ucb-green', bg: 'bg-ucb-green/10', glow: 'from-transparent to-ucb-green/10' },
        { text: 'text-ucb-orange', bg: 'bg-ucb-orange/10', glow: 'from-transparent to-ucb-orange/10' },
        { text: 'text-ucb-teal', bg: 'bg-ucb-teal/10', glow: 'from-transparent to-ucb-teal/10' },
        { text: 'text-ucb-periwinkle', bg: 'bg-ucb-periwinkle/10', glow: 'from-transparent to-ucb-periwinkle/10' },
    ];
    const c = colors[index % colors.length];

    return (
        <div
            ref={ref}
            className="group relative bg-white rounded-3xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-gray-200 transition-all duration-400 overflow-hidden"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms`
            }}
        >
            {/* Background accent */}
            <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="relative z-10">
                <div className={`w-12 h-12 rounded-full ${c.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <div className={`font-black text-2xl lg:text-3xl ${c.text} mb-1 leading-tight`}>{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 leading-relaxed">{stat.sub}</div>
            </div>
        </div>
    );
};

const AccordionItem: React.FC<{ faq: ProgramFaq; index: number; isOpen: boolean; onToggle: () => void }> = ({
    faq, index, isOpen, onToggle
}) => (
    <div className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? 'shadow-lg border-ucb-blue/20' : 'shadow-sm border-gray-100 hover:border-gray-200'}`}>
        <button
            onClick={onToggle}
            className="w-full flex justify-between items-center p-5 text-left group min-h-[44px]"
        >
            <span className={`font-bold text-base pr-4 transition-colors duration-200 ${isOpen ? 'text-ucb-blue' : 'text-gray-800 group-hover:text-ucb-blue'}`}>
                {faq.q}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-ucb-blue text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-ucb-blue-glow/20 group-hover:text-ucb-blue'}`}>
                <ChevronDown className="w-4 h-4" />
            </div>
        </button>
        <div
            className="overflow-hidden transition-all duration-400"
            style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0 }}
        >
            <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                {faq.a}
            </div>
        </div>
    </div>
);

// ─── Main Layout Component ────────────────────────────────────────────────────

const ProgramPageLayout: React.FC<ProgramLayoutProps> = ({
    badge, title, subtitle, headerImageSrc, headerImagePosition, secondaryImageSrc, breadcrumbs,
    tagline, taglineBody,
    benefits,
    achievements = [], achievementNote,
    courses, outcomes, outcomesIntro, outcomeTags = [], outcomeSources = [],
    stats,
    forWhom = [],
    pathwayTitle = 'Build Toward Your Future',
    pathwayDescription,
    pathwaySteps = [],
    testimonial,
    faqs,
    ctaRequirements = ['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application'],
    programName = 'This Program',
}) => {
    const scrollProgress = useScrollProgress();
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

    const testimonialsList = Array.isArray(testimonial)
        ? testimonial
        : testimonial
            ? [testimonial]
            : [];

    return (
        <div className="bg-white">
            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 z-[9999] h-[3px] bg-gradient-to-r from-ucb-blue via-ucb-orange to-ucb-green transition-all duration-100"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* ── Hero ── */}
            <ProgramPageHeader
                badge={badge}
                title={title}
                subtitle={subtitle}
                ctaPrimary="Apply for FREE Today"
                ctaSecondary="Request Info"
                imageSrc={headerImageSrc}
                imagePosition={headerImagePosition}
                breadcrumbs={breadcrumbs}
            />

            {/* ── Tagline / Intro ── */}
            <section className="py-4 md:py-6 relative overflow-hidden bg-gradient-to-b from-gray-50/40 to-white">
                {/* Subtle dot grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, var(--color-ucb-blue) 1.5px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="container mx-auto px-6 relative z-10">
                    <FadeInSection className="max-w-3xl mx-auto text-center mb-4 md:mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ucb-blue/5 border border-ucb-blue/10 text-ucb-blue text-xs font-bold uppercase tracking-widest rounded-full mb-4 shadow-sm">
                            <Star className="w-3.5 h-3.5 fill-ucb-gold text-ucb-gold" /> Program Overview
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-display font-bold text-ucb-blue mb-4 leading-tight tracking-tight">{tagline}</h2>
                        <div className="w-16 h-1.5 bg-gradient-to-r from-ucb-orange to-ucb-teal rounded-full mx-auto mb-6 shadow-sm" />
                        <div className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">{taglineBody}</div>
                    </FadeInSection>

                    {/* Benefits Grid */}
                    <div className={`flex flex-wrap justify-center gap-5 mx-auto ${benefits.length >= 7 ? 'max-w-[70rem]' : 'max-w-5xl'}`}>
                        {benefits.map((b, i) => (
                            <div key={i} className={`w-full sm:w-[calc(50%-0.75rem)] shrink-0 ${benefits.length >= 7 ? 'lg:w-[calc(25%-1rem)]' : 'lg:w-[calc(33.333%-1rem)]'}`}>
                                <BenefitCard benefit={b} index={i} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── What You'll Achieve ── */}
            {achievements.length > 0 && (
                <section className="py-8 md:py-12 bg-gray-50 relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <FadeInSection className="text-center mb-8 md:mb-10">
                            <span className="inline-block px-4 py-1.5 bg-ucb-orange/10 text-ucb-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-ucb-orange/20">Learning Outcomes</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-ucb-blue">What You'll Achieve</h2>
                        </FadeInSection>

                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {achievements.map((ach, i) => (
                                <FadeInSection key={i} delay={i * 100}>
                                    <div className="h-full bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-400 group relative">
                                        <h3 className="text-xl font-bold text-ucb-blue mb-5 flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-ucb-orange/10 flex items-center justify-center">
                                                <ach.icon className="w-6 h-6 text-ucb-orange" />
                                            </div>
                                            {ach.heading}
                                        </h3>
                                        <ul className="space-y-4">
                                            {ach.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                                                    <CheckCircle className="w-5 h-5 text-ucb-green flex-shrink-0 mt-0.5" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>

                        {achievementNote && (
                            <FadeInSection delay={300} className="text-center mt-8 md:mt-10">
                                <p className="text-gray-600 text-base max-w-2xl mx-auto italic leading-relaxed">
                                    {achievementNote}
                                </p>
                            </FadeInSection>
                        )}
                    </div>
                </section>
            )}

            {/* ── Stats Strip ── */}
            <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <FadeInSection className="text-center mb-6 md:mb-10">
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Program at a Glance</h2>
                    </FadeInSection>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                        {stats.map((s, i) => (
                            <div key={i} className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] shrink-0 max-w-[280px]">
                                <StatCard stat={s} index={i} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Courses + Outcomes ── (two-column) */}
            <section className="py-4 md:py-6 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-start">

                        {/* Courses */}
                        <FadeInSection>
                            <div className="flex items-center gap-4 mb-7">
                                <div className="p-3 bg-ucb-blue text-white rounded-xl shadow-md">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-ucb-blue">What You'll Study</h2>
                            </div>
                            <div className="grid gap-4">
                                {courses.map((course, i) => (
                                    <div key={i} className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-400">
                                        <div className="mr-4 w-9 h-9 rounded-full bg-gradient-to-br from-ucb-orange/20 to-ucb-blue/10 flex items-center justify-center shrink-0 font-black text-ucb-blue text-sm mt-0.5 leading-relaxed">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-base">{course.title}</h4>
                                            <p className="text-gray-500 text-sm mt-1 leading-relaxed">{course.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeInSection>

                        {/* Outcomes */}
                        <FadeInSection delay={150} className="lg:sticky lg:top-28">
                            <div className="bg-ucb-blue rounded-3xl shadow-[0_12px_40px_rgba(0,102,162,0.15)] overflow-hidden p-8 border border-ucb-blue relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-ucb-teal/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
                            
                                <div className="flex items-center gap-4 mb-7 relative z-10">
                                    <div className="p-3 bg-ucb-orange text-white rounded-xl shadow-md">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-white">Career Outcomes</h2>
                                </div>

                                {outcomesIntro && (
                                    <div className="mb-6 relative z-10">
                                        <p className="text-blue-50 leading-relaxed text-base">{outcomesIntro}</p>
                                    </div>
                                )}
                                
                                <div className="space-y-6 relative z-10">
                                    {outcomes.map((outcome, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                                                <Briefcase className="w-5 h-5 text-ucb-orange" />
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="font-bold text-white text-lg">{outcome.title}</h4>
                                                <p className="text-blue-100/90 text-sm mt-1 leading-relaxed">{outcome.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {outcomeTags.length > 0 && (
                                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2 relative z-10">
                                        {outcomeTags.map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {outcomeSources.length > 0 && (
                                    <p className="mt-6 text-[11px] leading-relaxed text-blue-200/70 relative z-10">
                                        <span className="font-bold uppercase tracking-wider">Sources:</span>{' '}
                                        {outcomeSources.map((s, i) => (
                                            <React.Fragment key={i}>
                                                <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{s.label}</a>
                                                {i < outcomeSources.length - 1 ? ' · ' : ''}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                )}
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/* ── Secondary Image ── */}
            {secondaryImageSrc && (
                <section className="py-6 md:py-10 bg-white">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                            <img
                                src={secondaryImageSrc}
                                alt={badge}
                                className="w-full h-auto max-h-[420px] object-cover"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* ── Is This Right For You? ── */}
            {forWhom.length > 0 && (
                <section className="py-4 md:py-6 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-ucb-orange/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-ucb-blue/5 rounded-full blur-3xl" />

                    <div className="container mx-auto px-6 relative z-10">
                        <FadeInSection className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                                {/* Header strip */}
                                <div className="bg-gradient-to-r from-ucb-blue to-ucb-blue-glow px-4 md:px-6 py-7 text-white text-center">
                                    <Target className="w-10 h-10 mx-auto mb-3 text-ucb-orange" />
                                    <h2 className="text-2xl md:text-3xl font-display font-bold">Is This Program Right for You?</h2>
                                    <p className="text-white/80 mt-2 text-sm leading-relaxed">This program is specifically designed for:</p>
                                </div>

                                <div className="p-4 md:p-6 grid md:grid-cols-2 gap-4">
                                    {forWhom.map((item, i) => (
                                        <FadeInSection key={i} delay={i * 60}>
                                            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-gray-50/80 hover:bg-white border border-transparent hover:border-ucb-sage/30 hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-400 group relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-ucb-sage/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                                <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-ucb-teal transition-colors duration-400 mt-0.5 border border-gray-100 group-hover:border-ucb-teal relative z-10">
                                                    <CheckCircle className="w-4 h-4 text-ucb-teal group-hover:text-white transition-colors duration-400" />
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm leading-relaxed relative z-10 group-hover:text-ucb-blue transition-colors duration-300">{item}</span>
                                            </div>
                                        </FadeInSection>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </section>
            )}

            {/* ── Pathway ── */}
            {pathwaySteps.length > 0 && (
                <section className="py-4 md:py-6 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <FadeInSection className="max-w-4xl mx-auto">
                            <div className="text-center mb-4 md:mb-6">
                                <span className="inline-block px-4 py-1.5 bg-ucb-orange/10 text-ucb-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4">Career Pathway</span>
                                <h2 className="text-3xl font-display font-bold text-ucb-blue mb-3">{pathwayTitle}</h2>
                                {pathwayDescription && (
                                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{pathwayDescription}</p>
                                )}
                            </div>

                            {/* Horizontal roadmap */}
                            <div className="relative">
                                {/* Connector line */}
                                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-ucb-blue via-ucb-orange to-gray-200 -translate-y-1/2 z-0" />

                                <div className="grid md:grid-cols-3 gap-6 relative z-10">
                                    {pathwaySteps.map((step, i) => (
                                        <FadeInSection key={i} delay={i * 120}>
                                            <div className={`text-center rounded-2xl p-6 border-2 transition-all duration-400 group relative overflow-hidden ${step.active
                                                ? 'bg-ucb-blue text-white border-ucb-blue shadow-[0_12px_30px_rgba(0,102,162,0.3)] hover:-translate-y-1.5'
                                                : i === 0
                                                    ? 'bg-white border-ucb-orange text-gray-800 shadow-[0_8px_20px_rgba(230,131,37,0.1)] hover:-translate-y-1'
                                                    : 'bg-white border-gray-100/80 text-gray-500 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-ucb-blue/20'
                                                }`}>
                                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                                <div className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${step.active ? 'text-ucb-orange' : i === 0 ? 'text-ucb-orange' : 'text-gray-400'}`}>
                                                    Step {i + 1}
                                                </div>
                                                <div className={`font-black text-lg leading-tight mb-2 ${step.active ? 'text-white' : 'text-ucb-blue group-hover:text-ucb-blue-glow transition-colors duration-300'}`}>{step.label}</div>
                                                {step.credits && (
                                                    <div className={`text-xs font-medium ${step.active ? 'text-white/80' : 'text-gray-500'}`}>{step.credits}</div>
                                                )}
                                            </div>
                                        </FadeInSection>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </section>
            )}

            {/* ── Why Urban College ── */}
            <section className="py-4 md:py-6 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <FadeInSection className="text-center mb-4 md:mb-6">
                        <span className="inline-block px-4 py-1.5 bg-ucb-blue/10 text-ucb-blue text-xs font-bold uppercase tracking-widest rounded-full mb-4">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-ucb-blue">Why Choose Urban College?</h2>
                    </FadeInSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-4 md:mb-6">
                        {[
                            { title: "Flexible & Affordable", desc: "Study online on your schedule. Most students graduate debt-free.", icon: Clock, color: "from-ucb-blue to-ucb-blue-glow" },
                            { title: "Multilingual Support", desc: "Courses in English, Spanish, and Mandarin, with ESL pathways.", icon: Globe, color: "from-ucb-green to-ucb-green-glow" },
                            { title: "Career-Focused", desc: "Gain job-ready skills. Apply what you learn immediately.", icon: Briefcase, color: "from-ucb-orange to-ucb-orange-glow" },
                            { title: "Student-Centered", desc: "1-on-1 advising, free tutoring, career services, and financial aid guidance.", icon: Users, color: "from-ucb-teal to-[#1C8A7C]" }
                        ].map((item, i) => (
                            <FadeInSection key={i} delay={i * 80}>
                                <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-[0_16px_40px_rgba(0,102,162,0.08)] transition-all duration-500 border border-gray-100/80 hover:border-transparent hover:-translate-y-1.5 h-full relative overflow-hidden">
                                    <div className="absolute -inset-[1px] bg-gradient-to-br from-ucb-blue via-ucb-teal to-ucb-orange opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 z-0 pointer-events-none" />
                                    <div className="absolute inset-[1px] bg-white rounded-2xl z-0 pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 overflow-hidden relative shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-shimmer" />
                                            <item.icon className="w-6 h-6 text-white relative z-10" />
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-ucb-blue transition-colors duration-300">{item.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>

                    {/* Student Support Banner */}
                    <FadeInSection delay={200} className="mt-8 md:mt-12">
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col md:flex-row relative">
                            {/* Decorative accent sliver */}
                            <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-ucb-green to-ucb-teal" />

                            <div className="flex-1 p-7 md:p-10 z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="w-7 h-7 text-ucb-green drop-shadow-sm" />
                                    <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 tracking-tight">A Supportive, Student-Centered Experience</h3>
                                </div>
                                <p className="text-gray-600 mb-6 text-base font-light leading-relaxed max-w-2xl">
                                    Urban College of Boston is a private nonprofit institution dedicated to student success. You'll receive:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                                    {[
                                        "1-on-1 academic advising",
                                        "Career services & resume help",
                                        "Free tutoring in any subject",
                                        "ESL support for learners",
                                        "Financial aid guidance",
                                        "Technical support"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 group/banner">
                                            <div className="w-6 h-6 rounded-full bg-ucb-green/10 flex items-center justify-center shrink-0 group-hover/banner:bg-ucb-green transition-colors duration-300">
                                                <CheckCircle className="w-3.5 h-3.5 text-ucb-green group-hover/banner:text-white transition-colors duration-300" />
                                            </div>
                                            <span className="text-gray-700 text-sm font-medium leading-relaxed group-hover/banner:text-ucb-blue transition-colors duration-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full md:w-64 bg-gradient-to-br from-ucb-blue via-[#00558A] to-[#004470] p-8 md:p-10 flex flex-col justify-center text-center text-white relative overflow-hidden group">
                                <div className="absolute inset-0 bg-ucb-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <Zap className="w-12 h-12 mx-auto mb-4 text-ucb-orange drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
                                <div className="font-black text-4xl md:text-5xl mb-2 tracking-tighter drop-shadow-sm">100%</div>
                                <div className="text-white/90 text-sm md:text-base font-bold uppercase tracking-wider leading-relaxed">Student Success Focus</div>
                                <div className="mt-4 text-xs md:text-sm text-white/60 font-light leading-relaxed">Our faculty & staff genuinely care about your progress.</div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* ── Testimonials ── */}
            {testimonialsList.length > 0 && (() => {
                const currentT = testimonialsList[activeTestimonialIdx] || testimonialsList[0];
                return (
                    <section className="py-8 md:py-12 bg-gray-900 text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-ucb-orange/5 rounded-full blur-3xl" />

                        <div className="container mx-auto px-6 relative z-10">
                            <FadeInSection className="max-w-5xl mx-auto">
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

                                        <p className="text-xl md:text-2xl lg:text-[24px] xl:text-[28px] leading-[1.6] font-serif italic text-white mb-8 relative z-10">
                                            "{currentT.quote}"
                                        </p>

                                        <div className="mt-auto relative z-10 flex items-center justify-between">
                                            <div>
                                                <div className="font-bold text-lg md:text-xl text-white tracking-wide">{currentT.name}</div>
                                                <div className="text-ucb-periwinkle font-medium uppercase tracking-widest text-xs mt-1">{currentT.role}</div>
                                            </div>

                                            {testimonialsList.length > 1 && (
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => setActiveTestimonialIdx((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length)}
                                                        className="p-2 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all text-white min-h-[38px] flex items-center justify-center cursor-pointer"
                                                        aria-label="Previous testimonial"
                                                    >
                                                        <ChevronLeft className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => setActiveTestimonialIdx((prev) => (prev + 1) % testimonialsList.length)}
                                                        className="p-2 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all text-white min-h-[38px] flex items-center justify-center cursor-pointer"
                                                        aria-label="Next testimonial"
                                                    >
                                                        <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {testimonialsList.length > 1 && (
                                    <div className="flex justify-center gap-1.5 mt-4">
                                        {testimonialsList.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveTestimonialIdx(idx)}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${activeTestimonialIdx === idx ? 'w-6 bg-ucb-orange' : 'w-1.5 bg-white/30'}`}
                                                aria-label={`Go to testimonial ${idx + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </FadeInSection>
                        </div>
                    </section>
                );
            })()}

            {/* ── FAQ ── */}
            <section className="py-4 md:py-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <FadeInSection className="text-center mb-4 md:mb-6">
                        <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest rounded-full mb-4 leading-relaxed">Got Questions?</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Frequently Asked Questions</h2>
                    </FadeInSection>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <FadeInSection key={i} delay={i * 50}>
                                <AccordionItem
                                    faq={faq}
                                    index={i}
                                    isOpen={openFaq === i}
                                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                                />
                            </FadeInSection>
                        ))}
                    </div>

                    <FadeInSection delay={300} className="mt-4 md:mt-6 text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <p className="font-bold text-gray-800 mb-3 leading-relaxed">Still have questions?</p>
                        <a href="mailto:admissions@urbancollege.edu" className="inline-flex items-center gap-2 px-7 py-3 bg-ucb-blue text-white rounded-full font-bold hover:bg-ucb-blue/90 transition-all shadow-lg text-sm min-h-[44px] inline-flex items-center justify-center">
                            Contact Admissions <ArrowRight className="w-4 h-4" />
                        </a>
                    </FadeInSection>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-4 md:py-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-ucb-blue) 0%, var(--color-ucb-blue-glow) 100%)' }}>
                {/* Decorative */}
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '36px 36px' }} />
                <div className="absolute top-0 right-0 w-96 h-96 bg-ucb-orange/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-ucb-teal/20 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <FadeInSection className="text-center">
                        <GraduationCap className="w-14 h-14 text-ucb-orange mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4 leading-tight">
                            Ready to Invest in Your Future?
                        </h2>
                        <p className="text-white/80 text-lg mb-4 md:mb-6 max-w-xl mx-auto leading-relaxed">
                            Apply for <span className="text-white font-bold">FREE</span> today. No application fee. Rolling admissions.
                        </p>

                        {/* Requirements pill row */}
                        <div className="flex flex-wrap justify-center gap-3 mb-4 md:mb-6">
                            {ctaRequirements.map((req, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm leading-relaxed">
                                    <CheckCircle className="w-4 h-4 text-ucb-teal shrink-0" />
                                    <span className="font-medium">{req}</span>
                                </div>
                            ))}
                        </div>

                        <button onClick={() => window.dispatchEvent(new CustomEvent('open-rfi-sidebar'))} className="group inline-flex items-center gap-3 bg-ucb-orange text-white font-black py-5 px-4 md:px-6 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg shadow-xl min-h-[44px] justify-center cursor-pointer"
                            style={{ boxShadow: '0 8px 40px rgba(230,131,37,0.4)' }}>
                            Start Your Application
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="mt-5 text-white/80 text-sm leading-relaxed">
                            Need help?{' '}
                            <a href="mailto:admissions@urbancollege.edu" className="underline hover:text-white transition-colors">
                                Contact Admissions
                            </a>
                        </p>
                    </FadeInSection>
                </div>
            </section>
        </div>
    );
};

export default ProgramPageLayout;
