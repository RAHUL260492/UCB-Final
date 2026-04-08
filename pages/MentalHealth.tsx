import React, { useEffect } from 'react';
import { Phone, Heart, PhoneCall, Globe, LifeBuoy, AlertCircle, ShieldAlert, BookOpen, User } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const emergencyNumbers = [
    { name: "Crisis Hotline by County", link: "https://namimass.org/wp-content/uploads/esps.pdf", phone: "", desc: "Statewide emergency services", icon: ShieldAlert },
    { name: "Samaritans Crisis Hotline (Boston)", phone: "617-247-0220", desc: "24/7 suicide prevention hotline", icon: PhoneCall },
    { name: "National Suicide Prevention Hotline", phone: "1-800-273-8255", desc: "Available 24/7 for anyone in suicidal crisis", icon: AlertCircle },
    { name: "Fenway Health (LGBTQIA+)", phone: "617-267-9001", desc: "Healthcare & support for the LGBTQIA+ community", icon: Heart },
    { name: "Boston Area Rape Crisis Center", phone: "800-841-8371", desc: "Free, confidential support for survivors", icon: LifeBuoy },
    { name: "NAMI Helpline", phone: "1-800-950-6254", desc: "National Alliance on Mental Health helpline", icon: BookOpen },
    { name: "SAMHSA Hotline", phone: "1-800-662-4357", desc: "TTY Service: 1-800-487-4889", icon: Phone },
    { name: "Alcohol and Drug Helpline", phone: "1-800-923-4357", desc: "Lines for Life confidential support", icon: LifeBuoy },
    { name: "National Eating Disorder Association", phone: "1-800-931-2237", desc: "Support for eating disorders", icon: Heart },
    { name: "SAMHSA Disaster Distress", phone: "1-800-985-5990", desc: "Immediate crisis counseling", icon: AlertCircle },
];

const websites = [
    { title: "Healthline Mental Health Resources", url: "https://www.healthline.com/health/mental-health-resources" },
    { title: "NAMI Mass Resources", url: "https://namimass.org/resources/" },
    { title: "NAMI Compartiendo Esperanza", desc: "Mental Wellness in the Latinx Community", url: "https://www.nami.org/Support-Education/Mental-Health-Education/NAMI-Compartiendo-Esperanza-Mental-Wellness-in-the-Latinx-Community" },
    { title: "NNDC Resource Links", url: "https://nndc.org/resource-links/" }
];

const MentalHealth: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="pt-24 lg:pt-32">
            <PageHeader
                title="Mental Health Resources"
                subtitle="Urban College is committed to protecting, preserving, and promoting the health and well-being of all our students."
                breadcrumbs={[
                    { label: 'Student Services', path: '/#resources' },
                    { label: 'Mental Health' }
                ]}
                imageSrc="https://images.unsplash.com/photo-1571216503023-e18e69ee80db?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Boston Public Health Commission */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Heart className="w-10 h-10 text-ucb-blue" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-ucb-black mb-6">Boston Public Health Commission</h2>
                    <p className="text-xl text-ucb-blue font-bold mb-6">Call: 617-534-5395</p>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        The Boston Public Health Commission (BPHC) is an independent public agency providing a wide range of health services and programs. With public service and access to healthcare as cornerstones to their mission, BPHC aims to protect, preserve, and promote the health and well-being of all Boston residents, particularly those who are most vulnerable.
                    </p>
                </div>
            </section>

            {/* Helpful Phone Numbers Grid */}
            <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-ucb-black mb-4">Helpful Phone Numbers & Hotlines</h2>
                        <p className="text-gray-600">Immediate, confidential assistance is available 24/7 through these specialized networks.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {emergencyNumbers.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-ucb-orange/30 hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-50 text-ucb-orange rounded-xl flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-ucb-black mb-1">{item.name}</h3>
                                        <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                                        {item.phone && (
                                            <a href={`tel:${item.phone}`} className="inline-block font-bold text-ucb-blue hover:text-ucb-gold transition-colors">
                                                {item.phone}
                                            </a>
                                        )}
                                        {item.link && (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block font-bold text-ucb-blue hover:text-ucb-gold transition-colors text-sm">
                                                View Documentation
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Websites & Contact */}
            <section className="py-16 md:py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Websites */}
                        <div>
                            <h2 className="text-3xl font-display font-bold text-ucb-black mb-8 flex items-center gap-3">
                                <Globe className="w-8 h-8 text-ucb-green" /> Online Resources
                            </h2>
                            <div className="space-y-4">
                                {websites.map((site, idx) => (
                                    <a key={idx} href={site.url} target="_blank" rel="noopener noreferrer" className="block p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-ucb-green hover:bg-green-50/50 transition-colors group">
                                        <h3 className="font-bold text-ucb-black group-hover:text-ucb-green transition-colors">{site.title}</h3>
                                        {site.desc && <p className="text-sm text-gray-600 mt-1">{site.desc}</p>}
                                        <p className="text-xs text-gray-400 mt-2 truncate">{site.url}</p>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Director */}
                        <div>
                            <h2 className="text-3xl font-display font-bold text-ucb-black mb-8 flex items-center gap-3">
                                <User className="w-8 h-8 text-ucb-orange" /> Need Direct Support?
                            </h2>
                            <div className="bg-ucb-blue text-white rounded-3xl p-8 relative overflow-hidden shadow-xl shadow-ucb-blue/10">
                                <div className="absolute -right-10 -bottom-10 opacity-10">
                                    <LifeBuoy className="w-64 h-64" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2">Rosana Perella</h3>
                                    <p className="text-blue-100 font-medium mb-8">Director of Student Services and Support</p>
                                    
                                    <div className="space-y-4">
                                        <a href="tel:617-449-7380" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl transition-colors backdrop-blur-md border border-white/10">
                                            <Phone className="w-6 h-6 text-ucb-gold" />
                                            <div>
                                                <p className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1">Call</p>
                                                <p className="font-bold text-lg">617-449-7380</p>
                                            </div>
                                        </a>
                                        <a href="mailto:Rosana.Perella@urbancollege.edu" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl transition-colors backdrop-blur-md border border-white/10">
                                            <Mail className="w-6 h-6 text-ucb-gold" />
                                            <div>
                                                <p className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1">Email</p>
                                                <p className="font-bold text-lg truncate max-w-[200px] md:max-w-xs">Rosana.Perella@urbancollege.edu</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="mt-8">
                                        <a href="mailto:Rosana.Perella@urbancollege.edu" className="inline-block bg-ucb-orange text-white px-8 py-3 rounded-full font-bold hover:bg-ucb-orange-glow transition-colors">
                                            Request Support
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MentalHealth;
