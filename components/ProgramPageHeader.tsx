import React, { useEffect, useState } from 'react';

import { ChevronRight, ArrowRight, TrendingUp } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    path?: string;
}

interface ProgramPageHeaderProps {
    badge: string;
    title: React.ReactNode;
    subtitle: string;
    ctaPrimary?: string;
    ctaSecondary?: string;
    breadcrumbs: BreadcrumbItem[];
    imageSrc?: string;
    accentColor?: string;
}

const ProgramPageHeader: React.FC<ProgramPageHeaderProps> = ({
    badge,
    title,
    subtitle,
    ctaPrimary = 'Apply for FREE Today',
    ctaSecondary = 'Request Info',
    breadcrumbs,
    imageSrc = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop',
    accentColor = '#E68325',
}) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

    return (
        <section
            className="relative flex flex-col justify-end overflow-hidden text-white pt-8 bg-ucb-blue"
            style={{ minHeight: '280px' }}
        >
            {/* Background color block for fallback since image was removed */}
            <div className="absolute inset-0 bg-ucb-blue" />
            <div className="absolute inset-0 bg-gradient-to-r from-ucb-blue/85 via-ucb-blue/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Floating decorative orb */}
            <div
                className="absolute top-1/4 right-[10%] w-48 h-48 rounded-full blur-3xl pointer-events-none animate-float-slow opacity-20"
                style={{ backgroundColor: accentColor }}
            />

            {/* Content — staggered entrance */}
            <div className="relative z-10 container mx-auto px-6 pb-7 flex flex-col items-center text-center">

                {/* Badge */}
                <div
                    className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full mb-3 text-xs font-bold tracking-wider uppercase border border-white/20 backdrop-blur-sm"
                    style={{
                        backgroundColor: `${accentColor}30`,
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s'
                    }}
                >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                    <span>{badge}</span>
                </div>

                {/* Title */}
                <h1
                    className="font-display font-black text-2xl md:text-4xl mb-2 leading-tight max-w-3xl mx-auto"
                    style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                        transition: 'all 0.75s cubic-bezier(0.16,1,0.3,1) 0.25s',
                        textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                    }}
                >
                    {title}
                </h1>

                {/* Subtitle */}
                <p
                    className="text-white/85 text-sm mb-5 max-w-2xl mx-auto leading-relaxed"
                    style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.75s cubic-bezier(0.16,1,0.3,1) 0.38s'
                    }}
                >
                    {subtitle}
                </p>

                {/* CTA Buttons */}
                <div
                    className="flex flex-wrap justify-center gap-3"
                    style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(16px)',
                        transition: 'all 0.75s cubic-bezier(0.16,1,0.3,1) 0.5s'
                    }}
                >
                    <button
                        className="flex items-center gap-2 px-5 py-2.5 font-bold rounded-full shadow-lg text-sm hover:scale-105 hover:shadow-xl transition-all duration-300 shimmer-overlay min-h-[44px]"
                        style={{ backgroundColor: accentColor, color: 'white', boxShadow: `0 4px 20px ${accentColor}50` }}
                    >
                        {ctaPrimary} <TrendingUp className="w-4 h-4" />
                    </button>
                    <button className="px-5 py-2.5 border border-white/40 text-white font-bold rounded-full text-sm hover:bg-white hover:text-ucb-blue transition-all duration-300 hover:shadow-lg backdrop-blur-sm min-h-[44px]">
                        {ctaSecondary}
                    </button>
                </div>
            </div>

            {/* Breadcrumb */}
            <div
                className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/10"
                style={{
                    opacity: mounted ? 1 : 0,
                    transition: 'opacity 0.6s ease 0.65s'
                }}
            >
                <div className="container mx-auto px-6 py-2.5">
                    <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-xs text-white/70 flex-wrap">
                        <a href="/" className="hover:text-white transition-colors font-medium hover:underline">Home</a>
                        {breadcrumbs.map((crumb, idx) => (
                            <React.Fragment key={idx}>
                                <ChevronRight className="w-3 h-3 text-white/40 shrink-0" />
                                {crumb.path ? (
                                    <a href={crumb.path} className="hover:text-white transition-colors font-medium hover:underline">
                                        {crumb.label}
                                    </a>
                                ) : (
                                    <span className="text-white font-bold">{crumb.label}</span>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default ProgramPageHeader;
