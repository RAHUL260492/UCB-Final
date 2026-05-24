import React, { useEffect } from 'react';
import { Phone, Heart, PhoneCall, Globe, LifeBuoy, AlertCircle, ShieldAlert, BookOpen, User, Mail, ExternalLink, HelpCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';

interface EmergencyNumber {
    name: string;
    phone?: string;
    desc: string;
    link?: string;
    icon: React.ElementType;
}

const emergencyNumbers: EmergencyNumber[] = [
    { name: "Crisis Hotline by County", link: "https://namimass.org/wp-content/uploads/esps.pdf", desc: "Statewide emergency services", icon: ShieldAlert },
    { name: "Samaritans Crisis Hotline (Boston)", phone: "617-247-0220", desc: "24/7 suicide prevention hotline", icon: PhoneCall },
    { name: "National Suicide Prevention Hotline", phone: "1-800-273-8255", desc: "Available 24/7 for anyone in suicidal crisis", icon: AlertCircle },
    { name: "Fenway Health (LGBTQIA+)", phone: "617-267-9001", desc: "Healthcare & support for the LGBTQIA+ community", icon: Heart },
    { name: "Boston Area Rape Crisis Center (BARCC)", phone: "800-841-8371", desc: "Free, confidential support for survivors", icon: LifeBuoy },
    { name: "National Alliance on Mental Health (NAMI) Helpline", phone: "1-800-950-6254", desc: "National Alliance on Mental Illness helpline support", icon: BookOpen },
    { name: "SAMHSA Hotline", phone: "1-800-662-4357", desc: "Substance Abuse & Mental Health Services (TTY: 1-800-487-4889)", icon: Phone },
    { name: "Lines for Life Alcohol & Drug Helpline", phone: "1-800-923-4357", desc: "Confidential support for substance use challenges", icon: LifeBuoy },
    { name: "National Eating Disorder Association Helpline", phone: "1-800-931-2237", desc: "Support, resources, and treatment options", icon: Heart },
    { name: "SAMHSA Disaster Distress Hotline", phone: "1-800-985-5990", desc: "Immediate crisis counseling for natural or human-caused disasters", icon: AlertCircle },
];

const websites = [
    { title: "Healthline Mental Health Resources", url: "https://www.healthline.com/health/mental-health-resources" },
    { title: "NAMI Mass Resources", url: "https://namimass.org/resources/" },
    { title: "NAMI Compartiendo Esperanza: Mental Wellness in the Latinx Community", url: "https://www.nami.org/Support-Education/Mental-Health-Education/NAMI-Compartiendo-Esperanza-Mental-Wellness-in-the-Latinx-Community" },
    { title: "NNDC Resource Links", url: "https://nndc.org/resource-links/" }
];

const MentalHealth: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: 'Home', path: '/' },
        { label: 'Student Services', path: '/student-services' },
        { label: 'Mental Health Resources' }
    ];

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30">
            <PageHeader
                title="Mental Health Resources"
                subtitle="Urban College is committed to protecting, preserving, and promoting the health, safety, and well-being of all our students."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1571216503023-e18e69ee80db?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Boston Public Health Commission */}
            <section className="py-16 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <ScrollAnimation variant="fade-up" className="space-y-6">
                        <div className="w-20 h-20 bg-blue-50 text-ucb-blue rounded-3xl flex items-center justify-center mx-auto shadow-sm border border-blue-100/50">
                            <Heart className="w-10 h-10 fill-current" />
                        </div>
                        <span className="text-xs font-bold text-ucb-orange uppercase tracking-wider block font-display">Local Support Spotlight</span>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-ucb-black leading-tight">Boston Public Health Commission</h2>
                        <a 
                            href="tel:617-534-5395" 
                            className="inline-flex items-center gap-2 text-2xl md:text-3xl text-ucb-blue hover:text-ucb-gold font-bold transition-colors font-display my-2"
                        >
                            <Phone className="w-6 h-6 md:w-8 md:h-8" /> 617-534-5395
                        </a>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
                            The Boston Public Health Commission (BPHC) is an independent public agency providing a wide range of health services and programs. With public service and access to healthcare as cornerstones to their mission, BPHC aims to protect, preserve, and promote the health and well-being of all Boston residents, particularly those who are most vulnerable.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Helpful Phone Numbers Grid */}
            <section className="py-16 md:py-24 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-7xl space-y-16">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display">Crisis Support lines</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Helpful Phone Numbers & Hotlines</h2>
                        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                            Immediate, free, and confidential assistance is available 24/7 through these specialized helplines. Click to call directly from your device.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {emergencyNumbers.map((item, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${(idx % 3) * 0.05}s`}
                                className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-ucb-blue/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-orange-50 text-ucb-orange rounded-2xl flex items-center justify-center shrink-0 border border-orange-100/30">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-gray-800 text-base leading-tight mb-2">{item.name}</h3>
                                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-gray-50 mt-6">
                                    {item.phone ? (
                                        <a 
                                            href={`tel:${item.phone}`} 
                                            className="inline-flex items-center gap-1.5 font-bold text-sm text-ucb-blue hover:text-ucb-orange transition-colors"
                                        >
                                            <Phone className="w-4 h-4 shrink-0" />
                                            {item.phone}
                                        </a>
                                    ) : item.link ? (
                                        <a 
                                            href={item.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center gap-1.5 font-bold text-sm text-ucb-blue hover:text-ucb-orange transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4 shrink-0" />
                                            View Hotline Directory
                                        </a>
                                    ) : null}
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Websites & Contact */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Websites */}
                        <ScrollAnimation variant="slide-right" className="space-y-8">
                            <div className="space-y-3">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display">Educational Resource links</span>
                                <h2 className="text-3xl font-display font-black text-ucb-black flex items-center gap-3">
                                    <Globe className="w-8 h-8 text-ucb-green shrink-0" /> Online Resources
                                </h2>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Browse articles, guides, and community initiatives for mental health education and self-advocacy.
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                {websites.map((site, idx) => (
                                    <a 
                                        key={idx} 
                                        href={site.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="block p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-ucb-green hover:bg-green-50/10 transition-all duration-300 group shadow-sm hover:shadow-md"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="font-display font-bold text-gray-800 text-base leading-tight group-hover:text-ucb-green transition-colors">
                                                {site.title}
                                            </h3>
                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-ucb-green shrink-0 mt-1 transition-colors" />
                                        </div>
                                        <p className="text-xs text-gray-400 mt-3 truncate font-light">{site.url}</p>
                                    </a>
                                ))}
                            </div>
                        </ScrollAnimation>

                        {/* Contact Director */}
                        <ScrollAnimation variant="slide-left" className="space-y-8">
                            <div className="space-y-3">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display">Campus support</span>
                                <h2 className="text-3xl font-display font-black text-ucb-black flex items-center gap-3">
                                    <User className="w-8 h-8 text-ucb-orange shrink-0" /> Academic & Personal Guidance
                                </h2>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    If you need direct assistance navigating these resources or require academic accommodations, please connect with student support.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-ucb-blue to-blue-950 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl shadow-ucb-blue/15 border border-white/5">
                                <div className="absolute -right-10 -bottom-10 opacity-[0.05] pointer-events-none">
                                    <LifeBuoy className="w-64 h-64" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-display font-bold mb-1">Rosana Perella</h3>
                                        <p className="text-blue-200 font-bold text-xs uppercase tracking-wider">Director of Student Services and Support</p>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <a href="tel:617-449-7380" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 px-5 py-4 rounded-2xl transition-all border border-white/5 group">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-ucb-gold group-hover:scale-105 transition-transform shrink-0">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Call Office Phone</p>
                                                <p className="font-bold font-display text-base">617-449-7380</p>
                                            </div>
                                        </a>
                                        <a href="mailto:Rosana.Perella@urbancollege.edu" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 px-5 py-4 rounded-2xl transition-all border border-white/5 group">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-ucb-gold group-hover:scale-105 transition-transform shrink-0">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Send an Email</p>
                                                <p className="font-bold font-display text-sm md:text-base truncate">Rosana.Perella@urbancollege.edu</p>
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <div className="pt-2">
                                        <a 
                                            href="mailto:Rosana.Perella@urbancollege.edu?subject=Support%20Request%20-%20Urban%20College%20Student"
                                            className="inline-flex w-full items-center justify-center bg-ucb-orange text-white hover:bg-ucb-orange-glow px-8 py-3.5 rounded-xl font-bold transition-all shadow text-sm min-h-[44px] cursor-pointer"
                                        >
                                            Request Personal Support
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MentalHealth;

