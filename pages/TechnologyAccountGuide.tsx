import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    Cpu, Mail, ExternalLink, Download, Key, Laptop,
    Smartphone, Phone, HelpCircle, FileText
} from 'lucide-react';

const TechnologyAccountGuide: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Current Students", path: "/#students" },
        { label: "Technology Account Guide" }
    ];

    const platforms = [
        {
            title: "Student Email & Office 365",
            desc: "Access your college Outlook inbox along with Microsoft Word, Excel, and PowerPoint to support your coursework.",
            path: "https://outlook.office.com",
            actionText: "Login to Student Email",
            icon: Mail,
            accent: "border-ucb-blue/20 bg-ucb-blue/[0.02]"
        },
        {
            title: "Brightspace LMS Portal",
            desc: "Access your online and hybrid courses, download syllabus documents, complete assignments, and track class grades.",
            path: "http://learn.urbancollege.edu",
            actionText: "Login to Brightspace",
            icon: Laptop,
            accent: "border-ucb-orange/20 bg-ucb-orange/[0.02]"
        },
        {
            title: "myUCB Student Portal",
            desc: "Register for courses, view final transcripts, process tuition payments, and update personal details.",
            path: "https://portal.urbancollege.edu/studsect.cfm",
            actionText: "Login to Student Portal",
            icon: Key,
            accent: "border-ucb-green/20 bg-ucb-green/[0.02]"
        }
    ];

    const flyers = [
        { label: "Login Guide Flyer (English)", path: "https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:6afa380e-71c6-4e5f-853c-55654f623baa?x_api_client_id=edge_extension_viewer&x_api_client_location=share" },
        { label: "Folleto de Inicio de Sesión (Español)", path: "https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:c987a522-95aa-4043-b5b1-aafd65fef7d6?x_api_client_id=edge_extension_viewer&x_api_client_location=share" },
        { label: "登录帮助台传单 (普通话)", path: "https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:9a796f59-4c2c-4de8-bcda-2ad1822d94cf?x_api_client_id=edge_extension_viewer&x_api_client_location=share" }
    ];

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30">
            <SEO
                title={PAGE_META.technology.title}
                description={PAGE_META.technology.description}
                canonicalPath={PAGE_META.technology.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Technology Guide', path: PAGE_META.technology.path },
                ])}
            />
            <PageHeader
                title="Technology Account Guide"
                subtitle="Access your student email, course portal, LMS software, and technology support resources."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Core Platforms */}
            <section className="py-16 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-12">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block font-display">Student Accounts</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Your Core Digital Portals</h2>
                        <p className="text-gray-500 mt-2">Urban College provides direct access to industry-standard tools to support your educational development.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {platforms.map((platform, idx) => {
                            const Icon = platform.icon;
                            return (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.1}s`}
                                    className={`bg-white rounded-3xl p-8 border shadow-sm flex flex-col justify-between hover:shadow-md hover:border-ucb-blue/20 transition-all gap-6 ${platform.accent}`}
                                >
                                    <div className="space-y-4">
                                        <div className="w-11 h-11 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-ucb-blue shadow-inner shrink-0">
                                            <Icon className="w-5.5 h-5.5 text-ucb-blue" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-gray-800 leading-tight">{platform.title}</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed font-light">{platform.desc}</p>
                                    </div>
                                    <a 
                                        href={platform.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full text-center bg-ucb-blue text-white hover:bg-ucb-blue-glow py-2.5 rounded-xl text-xs font-bold transition-all shadow inline-flex items-center justify-center gap-1.5 min-h-[38px] cursor-pointer"
                                    >
                                        {platform.actionText}
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mobile & Passwords */}
            <section className="py-16 md:py-20 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mobile Setup */}
                        <ScrollAnimation variant="slide-right" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-xl bg-ucb-orange/10 text-ucb-orange flex items-center justify-center border border-ucb-orange/10 shrink-0">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-gray-800">Mobile Device Configuration</h3>
                                <p className="text-gray-600 text-xs leading-relaxed font-light">
                                    Configure your student Outlook inbox and Microsoft 365 applications directly on your iOS or Android device.
                                </p>
                            </div>
                            <div className="pt-6 border-t border-gray-50 mt-6">
                                <a 
                                    href="https://support.microsoft.com/en-us/office/set-up-office-apps-and-email-on-a-mobile-device-7dabb6cb-0046-40b6-81fe-767e0b1f014f"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-semibold text-ucb-blue hover:text-ucb-blue-glow transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                                >
                                    View Mobile Setup Guide <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </ScrollAnimation>

                        {/* Password Policy */}
                        <ScrollAnimation variant="slide-left" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-xl bg-ucb-green/10 text-ucb-green flex items-center justify-center border border-ucb-green/10 shrink-0">
                                    <Key className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-gray-800">Password Policy & Security</h3>
                                <p className="text-gray-600 text-xs leading-relaxed font-light">
                                    Learn Microsoft's recommended guidelines for maintaining a secure password, resetting locked accounts, and choosing strong keys.
                                </p>
                            </div>
                            <div className="pt-6 border-t border-gray-50 mt-6">
                                <a 
                                    href="https://docs.microsoft.com/en-us/microsoft-365/admin/misc/password-policy-recommendations?view=o365-worldwide#password-guidelines-for-administrators"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-semibold text-ucb-blue hover:text-ucb-blue-glow transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                                >
                                    View Password Security Guidelines <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Downloads flyers */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl space-y-8">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-xl mx-auto">
                        <h3 className="text-2xl font-display font-bold text-gray-800">Login Help Flyers</h3>
                        <p className="text-gray-500 text-xs mt-1">Download multi-language booklets containing visual guidelines for logging in.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {flyers.map((flyer, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${idx * 0.05}s`}
                                className="bg-gray-50 rounded-2xl p-5 border border-gray-150 flex flex-col justify-between items-center text-center gap-4 hover:border-ucb-blue/35 hover:bg-white transition-all shadow-sm group"
                            >
                                <FileText className="w-8 h-8 text-ucb-blue group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-bold text-gray-700 leading-snug">{flyer.label}</span>
                                <a 
                                    href={flyer.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center bg-white border border-gray-250 hover:bg-ucb-blue hover:text-white hover:border-ucb-blue py-2 rounded-xl text-xs font-semibold shadow-sm transition-all inline-flex justify-center items-center gap-1 cursor-pointer min-h-[34px]"
                                >
                                    Download <Download className="w-3 h-3" />
                                </a>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Helpdesk Support */}
            <section className="py-16 bg-gray-50/50">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
                    <ScrollAnimation variant="fade-up" className="space-y-2">
                        <div className="inline-flex p-3 bg-ucb-orange/10 text-ucb-orange rounded-full mb-2">
                            <HelpCircle className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-display font-black text-ucb-black">Need Technical Support?</h2>
                        <p className="text-gray-500 text-sm font-light">
                            Having trouble resetting your password or logging into Brightspace? Contact our IT team.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fade-up" className="bg-white rounded-3xl p-8 border border-gray-100 max-w-xl mx-auto space-y-4 shadow-sm">
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-ucb-orange uppercase tracking-widest block font-display">Technology Support</span>
                            <h3 className="text-xl font-display font-bold text-ucb-blue">Urban College IT Team</h3>
                        </div>
                        <div className="pt-4 border-t border-gray-100 flex justify-center">
                            <a 
                                href="mailto:helpdesk@urbancollege.edu?subject=Urban%20College%20IT%20Login%20Inquiry"
                                className="bg-ucb-blue text-white px-6 py-2.5 rounded-xl font-bold hover:bg-ucb-blue-glow transition-all inline-flex items-center gap-2 shadow text-sm min-h-[40px] cursor-pointer"
                            >
                                <Mail className="w-4 h-4" />
                                Email IT Helpdesk
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default TechnologyAccountGuide;
