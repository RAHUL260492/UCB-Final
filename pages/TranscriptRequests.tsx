import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    FileText, ExternalLink, Mail, Phone, Info, HelpCircle,
    Globe, CreditCard, ChevronRight
} from 'lucide-react';

const TranscriptRequests: React.FC = () => {
    const [activeLang, setActiveLang] = useState<'en' | 'es' | 'zh'>('en');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Student Services", path: "/student-services" },
        { label: "Transcript Requests" }
    ];

    const langTabs = [
        { id: 'en' as const, label: 'English Guide', flag: '🇺🇸' },
        { id: 'es' as const, label: 'Guía en Español', flag: '🇪🇸' },
        { id: 'zh' as const, label: '中文指南', flag: '🇨🇳' }
    ];

    return (
        <div className="bg-gray-50/30">
            <SEO
                title={PAGE_META.transcripts.title}
                description={PAGE_META.transcripts.description}
                canonicalPath={PAGE_META.transcripts.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Transcripts', path: PAGE_META.transcripts.path },
                ])}
            />
            <PageHeader
                title="Transcript Requests"
                subtitle="Request official academic transcripts. Order paper or electronic records securely online through the National Student Clearinghouse."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2946&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Language Selection & Instructions */}
            <section className="py-16 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl space-y-8">
                    
                    {/* Tab Switcher */}
                    <div className="flex justify-center border-b border-gray-150 pb-px">
                        <div className="flex bg-gray-100/80 p-1.5 rounded-2xl gap-1">
                            {langTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveLang(tab.id)}
                                    className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs md:text-sm tracking-wide transition-all cursor-pointer inline-flex items-center gap-2 ${
                                        activeLang === tab.id
                                            ? 'bg-white text-ucb-blue shadow-sm'
                                            : 'text-gray-500 hover:text-ucb-blue hover:bg-gray-50'
                                    }`}
                                >
                                    <span>{tab.flag}</span>
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Language Content Panel */}
                    <div className="p-2">
                        {activeLang === 'en' && (
                            <ScrollAnimation variant="fade-up" className="space-y-6">
                                <h3 className="text-2xl font-display font-black text-ucb-blue flex items-center gap-2 border-b border-gray-50 pb-3">
                                    <FileText className="w-6 h-6 text-ucb-blue" />
                                    Official Transcript Ordering Guide
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    Official academic transcripts must be ordered securely online through the <strong>National Student Clearinghouse</strong> portal. Both secure electronic records and paper mail documents are fully supported.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-500 font-light leading-relaxed">
                                    <li className="flex gap-2">
                                        <ChevronRight className="w-4 h-4 text-ucb-orange shrink-0 mt-0.5" />
                                        <span>A valid credit card is required to process and pay for your transcript order online.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <ChevronRight className="w-4 h-4 text-ucb-orange shrink-0 mt-0.5" />
                                        <span>No rush processing or express shipping/expedited dispatch is available.</span>
                                    </li>
                                </ul>
                            </ScrollAnimation>
                        )}

                        {activeLang === 'es' && (
                            <ScrollAnimation variant="fade-up" className="space-y-6">
                                <h3 className="text-2xl font-display font-black text-ucb-blue flex items-center gap-2 border-b border-gray-50 pb-3">
                                    <FileText className="w-6 h-6 text-ucb-blue" />
                                    Transcripts Oficiales - Guía de Pedidos
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    Todas las peticiones oficiales de transcripts deben hacerse en línea de forma segura a través de la plataforma de <strong>National Student Clearinghouse</strong>. Se entregan registros oficiales en papel y por correo electrónico.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-500 font-light leading-relaxed">
                                    <li className="flex gap-2">
                                        <ChevronRight className="w-4 h-4 text-ucb-orange shrink-0 mt-0.5" />
                                        <span>Usted necesitará una tarjeta de crédito para procesar y pagar su orden en línea.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <ChevronRight className="w-4 h-4 text-ucb-orange shrink-0 mt-0.5" />
                                        <span>El servicio de entrega express o de emergencia no está disponible.</span>
                                    </li>
                                </ul>
                            </ScrollAnimation>
                        )}

                        {activeLang === 'zh' && (
                            <ScrollAnimation variant="fade-up" className="space-y-6">
                                <h3 className="text-2xl font-display font-black text-ucb-blue flex items-center gap-2 border-b border-gray-50 pb-3">
                                    <FileText className="w-6 h-6 text-ucb-blue" />
                                    官方成绩单申请指南
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    官方学术成绩单必须通过 <strong>National Student Clearinghouse</strong> 门户网站在线安全订购。完全支持安全电子文件和纸质邮寄。
                                </p>
                                <ul className="space-y-3 text-sm text-gray-500 font-light leading-relaxed">
                                    <li className="flex gap-2">
                                        <ChevronRight className="w-4 h-4 text-ucb-orange shrink-0 mt-0.5" />
                                        <span>您将需要信用卡在线处理并支付成绩单申请费用。</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <ChevronRight className="w-4 h-4 text-ucb-orange shrink-0 mt-0.5" />
                                        <span>不提供紧急加急处理或特快专递服务。</span>
                                    </li>
                                </ul>
                            </ScrollAnimation>
                        )}
                    </div>
                </div>
            </section>

            {/* Action Portals */}
            <section className="py-16 md:py-20 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl space-y-10">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block font-display">Secure Ordering</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Transcript Action Portals</h2>
                        <p className="text-gray-500 mt-2 text-sm">Proceed to the Clearinghouse system or view ordering help through My Student Center.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Clearinghouse Link */}
                        <ScrollAnimation variant="slide-right" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between items-center text-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-ucb-blue/10 flex items-center justify-center text-ucb-blue">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-display font-bold text-lg text-gray-800">National Student Clearinghouse</h3>
                                <p className="text-gray-500 text-xs font-light max-w-xs leading-relaxed">Place your official transcript order securely. A credit card is required to submit payments online.</p>
                            </div>
                            <a 
                                href="https://tsorder.studentclearinghouse.org/school/ficecode/03130500"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-ucb-blue text-white hover:bg-ucb-blue-glow py-3 rounded-xl font-bold transition-all shadow text-sm cursor-pointer inline-flex justify-center items-center gap-2 min-h-[44px]"
                            >
                                Order Transcripts Online <ExternalLink className="w-4 h-4" />
                            </a>
                        </ScrollAnimation>

                        {/* Clearinghouse Support */}
                        <ScrollAnimation variant="slide-left" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between items-center text-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-ucb-orange/10 flex items-center justify-center text-ucb-orange">
                                <HelpCircle className="w-6 h-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-display font-bold text-lg text-gray-800">Clearinghouse Help Center</h3>
                                <p className="text-gray-500 text-xs font-light max-w-xs leading-relaxed">Access My Student Center login guides, track active orders, or contact Clearinghouse tech support.</p>
                            </div>
                            <a 
                                href="https://nscsso.my.site.com/student/s/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-white border border-gray-200 text-ucb-blue hover:bg-ucb-blue hover:text-white hover:border-ucb-blue py-3 rounded-xl font-bold transition-all shadow-sm text-sm cursor-pointer inline-flex justify-center items-center gap-2 min-h-[44px]"
                            >
                                Visit Support Portal <ExternalLink className="w-4 h-4" />
                            </a>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Helpdesk Contact Info */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
                    <ScrollAnimation variant="fade-up" className="space-y-2">
                        <div className="inline-flex p-3 bg-ucb-blue/10 text-ucb-blue rounded-full mb-2">
                            <Info className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-display font-black text-ucb-black">Transcript Questions?</h2>
                        <p className="text-gray-500 text-sm font-light">
                            If you have other questions about transcript waiving, courses history, or delivery details, contact Registration Services.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fade-up" className="bg-gray-50 rounded-3xl p-8 border border-gray-150 max-w-2xl mx-auto space-y-6">
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-ucb-orange uppercase tracking-widest block font-display">Registrar Office Contacts</span>
                            <h3 className="text-xl font-display font-bold text-ucb-blue">Registration Services Department</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-4 border-t border-gray-200/50">
                            <a 
                                href="tel:617-449-7070,1" 
                                className="bg-white p-4 rounded-xl border border-gray-150 flex items-center justify-center gap-3 text-gray-700 hover:text-ucb-blue shadow-sm hover:shadow transition-all font-semibold"
                            >
                                <Phone className="w-5 h-5 text-ucb-blue" />
                                <span>(617) 449-7070 <span className="text-[10px] text-gray-400 font-light block">Option 1</span></span>
                            </a>
                            <a 
                                href="mailto:registration@urbancollege.edu?subject=Transcript%20Information%20Inquiry"
                                className="bg-white p-4 rounded-xl border border-gray-150 flex items-center justify-center gap-3 text-gray-700 hover:text-ucb-blue shadow-sm hover:shadow transition-all font-semibold"
                            >
                                <Mail className="w-5 h-5 text-ucb-orange" />
                                Send Email
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default TranscriptRequests;
