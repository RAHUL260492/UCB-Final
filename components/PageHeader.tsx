import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
    label: string;
    path?: string;
}

interface PageHeaderProps {
    title: React.ReactNode;
    subtitle?: string;
    breadcrumbs?: Breadcrumb[];
    imageSrc?: string;
    imagePosition?: 'center' | 'top' | 'bottom';
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
    title, 
    subtitle, 
    breadcrumbs, 
    imageSrc, 
    imagePosition = 'center' 
}) => {
    return (
        <div className="relative pt-12 pb-8 md:pt-16 md:pb-12 overflow-hidden bg-ucb-blue">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                {imageSrc ? (
                    <img 
                        src={imageSrc} 
                        alt="Background" 
                        className={`w-full h-full object-cover opacity-20 transform scale-105 transition-transform duration-1000 object-${imagePosition}`} 
                    />
                ) : (
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ucb-blue via-ucb-blue/95 to-ucb-blue/70" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex text-center flex-col items-center">
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-6 md:mb-8 text-xs md:text-sm font-bold uppercase tracking-widest text-white/70">
                        {breadcrumbs.map((crumb, i) => (
                            <React.Fragment key={i}>
                                {crumb.path ? (
                                    <Link to={crumb.path} className="hover:text-white transition-colors">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-ucb-gold">{crumb.label}</span>
                                )}
                                {i < breadcrumbs.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-white/40" />}
                            </React.Fragment>
                        ))}
                    </div>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-[64px] font-display font-black text-white leading-none tracking-tight mb-4 drop-shadow-md">
                    {title}
                </h1>
                
                {subtitle && (
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl font-light leading-relaxed mt-2 mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
