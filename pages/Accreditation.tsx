import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    Award, Shield, CheckCircle, Calendar, Mail, Phone, 
    MapPin, Globe, ExternalLink, ShieldCheck, FileText, HelpCircle 
} from 'lucide-react';

const Accreditation: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "About Urban College", path: "/about" },
        { label: "Accreditation" }
    ];

    return (
        <div>
            <SEO
                title={PAGE_META.accreditation.title}
                description={PAGE_META.accreditation.description}
                canonicalPath={PAGE_META.accreditation.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Accreditation', path: PAGE_META.accreditation.path },
                ])}
            />
            <PageHeader
                title="Accreditation"
                subtitle="Accredited Excellence in Higher Education"
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Core Statement Section */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex p-3 bg-ucb-blue/5 rounded-2xl border border-ucb-blue/10 text-ucb-blue mb-4">
                            <Award className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue mb-6 leading-tight">
                            Institutional Quality & Credentials
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                            Urban College of Boston is accredited by the <span className="font-semibold text-ucb-blue">New England Commission of Higher Education</span> (formerly the Commission on Institutions of Higher Education of the New England Association of Schools and Colleges, Inc.).
                        </p>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mt-6">
                            Urban College of Boston's most recent comprehensive evaluation in 2025 resulted in continued accreditation by NECHE.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* What Accreditation Means */}
                        <div className="lg:col-span-8 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <h3 className="text-2xl font-display font-bold text-ucb-black mb-4 flex items-center gap-2">
                                    <HelpCircle className="w-6 h-6 text-ucb-orange" /> What Does Accreditation Mean?
                                </h3>
                                <div className="space-y-6 text-gray-600 leading-relaxed font-normal">
                                    <p>
                                        Accreditation of an institution of higher education by the Commission indicates that it meets or exceeds criteria for the assessment of institutional quality periodically applied through a peer review process. An accredited college or university is one which has available the necessary resources to achieve its stated purposes through appropriate educational programs, is substantially doing so, and gives reasonable evidence that it will continue to do so in the foreseeable future. Institutional integrity is also addressed through accreditation.
                                    </p>
                                    <p>
                                        Accreditation by the Commission is not partial but applies to the institution as a whole. As such, it is not a guarantee of every course or program offered, or the competence of individual graduates. Rather, it provides reasonable assurance about the quality of opportunities available to students who attend the institution.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>

                    </div>
                </div>
            </section>

            {/* Questions About Our Accreditation */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-display font-bold text-ucb-black mb-4">Questions About Our Accreditation?</h2>
                        <p className="text-gray-600">
                            For inquiries regarding Urban College's accreditation status, you may reach out to our administration or NECHE directly.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* ALO Contact */}
                        <ScrollAnimation variant="slide-right" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6 flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-ucb-orange/10 flex items-center justify-center text-ucb-orange mb-4">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-ucb-black mb-2">Accreditation Liaison Officer</h3>
                                <p className="font-semibold text-lg text-ucb-black">Caitlin Callahan</p>
                                <p className="text-gray-600 text-sm">Urban College Representative</p>
                            </div>
                            <div className="space-y-3 pt-4 border-t border-gray-50">
                                <a href="mailto:caitlin.callahan@urbancollege.edu" className="inline-flex items-center gap-2 bg-ucb-blue hover:bg-ucb-blue-glow text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors">
                                    <Mail className="w-4 h-4" /> Email Caitlin
                                </a>
                                <a href="tel:617-449-7038" className="flex items-center gap-3 text-gray-600 hover:text-ucb-blue transition-colors text-sm">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    (617) 449-7038
                                </a>
                            </div>
                        </ScrollAnimation>

                        {/* NECHE Direct Contact */}
                        <ScrollAnimation variant="slide-left" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6 flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue mb-4">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-ucb-black mb-2">NECHE Main Office</h3>
                                <p className="text-sm text-gray-500 mb-4">Accrediting Commission</p>
                                <p className="font-semibold text-lg text-ucb-black">New England Commission of Higher Education</p>
                                <p className="text-gray-600 text-sm flex items-start gap-2 mt-1">
                                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
                                    <span>3 Burlington Woods Drive #100<br />Burlington, MA 01803</span>
                                </p>
                            </div>
                            <div className="space-y-3 pt-4 border-t border-gray-50">
                                <a href="tel:781-425-7785" className="flex items-center gap-3 text-gray-600 hover:text-ucb-blue transition-colors text-sm">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    (781) 425-7785
                                </a>
                                <a 
                                    href="https://www.neche.org" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center gap-3 text-gray-600 hover:text-ucb-blue transition-colors text-sm"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                        <Globe className="w-4 h-4" />
                                    </div>
                                    www.neche.org <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Accreditation;
