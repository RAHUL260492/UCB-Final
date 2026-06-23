import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { buildBreadcrumbJsonLd } from '../components/seo-data';
import { Siren, ShieldCheck, Phone, Scale, HeartPulse, AlertTriangle, FileText, ExternalLink, Mail } from 'lucide-react';

// Documents are hosted on the current Squarespace domain; absolute URLs keep
// them working until the assets are migrated into this site's /public folder.
const LIVE = 'https://www.urbancollege.edu';
const doc = (p: string) => `${LIVE}${p}`;

const emergencyDocs = [
    { label: '2025 Emergency Handbook', href: doc('/s/2025-Emergency-Handbook.pdf') },
    { label: 'Main Campus Evacuation Plan (2 Boylston Street)', href: doc('/s/Urban-College-of-Boston-Evacuation-Procedure-25.pdf') },
];

const securityDocs = [
    { label: 'Annual Security Reporting Policy', href: doc('/s/UCBAnnualSecurityReportingPolicy.pdf') },
    { label: '2024 Annual Security Report', href: doc('/s/2024-Annual-Security-Report-Urban-College-of-Boston.pdf') },
    { label: '2023 Annual Security Report', href: doc('/s/2023-Annual-Security-Report-Urban-College-of-Boston.pdf') },
    { label: '2022 Annual Security Report', href: doc('/s/2022-Urban-College-of-Boston-Annual-Security-Report.pdf') },
    { label: '2021 Annual Security Report', href: doc('/s/Annual-Security-Report-2021-Final.pdf') },
    { label: '2020 Annual Security Report', href: doc('/s/2020-UCB-Annual-Security-Report-Amended.pdf') },
    { label: '2019 Annual Security Report', href: doc('/s/2019-UCB-Annual-Security-Report-4720.pdf') },
    { label: 'Annual Calendar of Security Awareness Programming', href: doc('/s/Security-Awareness-and-Crime-Prevention-Programming-Calendar-2021-2022.pdf') },
];

const daappDocs = [
    { label: 'Alcohol and Drug Policy', href: doc('/s/UCBAlcoholandDrugPolicy-2025.pdf') },
    { label: 'DAAPP Programming Calendar', href: doc('/s/2025-DAAPPProgramInventoryCalendar.pdf') },
];

const csaContacts = [
    { role: 'President', phone: '617-449-7068' },
    { role: 'Vice President of Academic Affairs', phone: '617-960-0257' },
    { role: 'Admissions', phone: '617-665-8530' },
    { role: 'Director of Student Services', phone: '617-449-7380' },
    { role: 'Learning Resource Center', phone: '617-449-7044' },
    { role: 'Financial Services', phone: '617-449-7428' },
    { role: 'Business Office', phone: '617-449-7430' },
    { role: 'Registration Services', phone: '617-449-7042' },
    { role: 'Boston Municipal Police (non-emergency)', phone: '617-338-9134' },
];

const DocList: React.FC<{ items: { label: string; href: string }[] }> = ({ items }) => (
    <ul className="space-y-2">
        {items.map((d) => (
            <li key={d.label}>
                <a href={d.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-ucb-blue hover:text-ucb-orange transition-colors font-medium text-sm">
                    <FileText className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{d.label}</span>
                </a>
            </li>
        ))}
    </ul>
);

const SectionCard: React.FC<{ icon: React.ElementType; title: string; children: React.ReactNode; delay?: string }> = ({ icon: Icon, title, children, delay }) => (
    <ScrollAnimation variant="fade-up" delay={delay} className="bg-white rounded-3xl p-7 md:p-8 border border-gray-100 shadow-sm h-full">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-2xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
            </div>
            <h2 className="font-display font-bold text-xl text-ucb-blue">{title}</h2>
        </div>
        {children}
    </ScrollAnimation>
);

const SafetyWellness: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/40 min-h-screen">
            <SEO
                title="Safety & Wellness | Urban College of Boston"
                description="Campus safety, emergency preparedness, annual security (Clery) reports, drug & alcohol prevention, Title IX, and how to report a crime at Urban College of Boston."
                canonicalPath="/safety-and-wellness"
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Consumer Information', path: '/policies-disclosures' },
                    { name: 'Safety & Wellness', path: '/safety-and-wellness' },
                ])}
            />
            <PageHeader
                title="Safety & Wellness"
                subtitle="Urban College of Boston is committed to promoting learning in a safe, supportive, and respectful environment."
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Consumer Information', path: '/policies-disclosures' }, { label: 'Safety & Wellness' }]}
                imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Emergency banner */}
            <section className="py-6 bg-ucb-orange/10 border-b border-ucb-orange/20">
                <div className="container mx-auto px-6 max-w-5xl flex items-center justify-center gap-3 text-center">
                    <AlertTriangle className="w-5 h-5 text-ucb-orange shrink-0" />
                    <p className="text-sm md:text-base font-semibold text-ucb-black">
                        In an emergency, always call <a href="tel:911" className="text-ucb-orange underline">911</a> first.
                    </p>
                </div>
            </section>

            <section className="py-14">
                <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SectionCard icon={Siren} title="Emergency Preparedness">
                        <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                            Review our emergency procedures and evacuation plan so you know what to do if a situation arises on campus.
                        </p>
                        <DocList items={emergencyDocs} />
                    </SectionCard>

                    <SectionCard icon={HeartPulse} title="Drug & Alcohol Abuse Prevention (DAAPP)" delay="0.08s">
                        <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                            The college promotes a healthy campus environment and schedules annual educational programming.
                        </p>
                        <DocList items={daappDocs} />
                    </SectionCard>

                    <SectionCard icon={ShieldCheck} title="Annual Security Reporting">
                        <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                            In compliance with the Jeanne Clery Act, Urban College publishes an Annual Security Report each year.
                        </p>
                        <DocList items={securityDocs} />
                    </SectionCard>

                    <SectionCard icon={Scale} title="Title IX" delay="0.08s">
                        <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                            Title IX is a federal regulation that prohibits gender-based discrimination in educational settings.
                            If you experience or witness sex- or gender-based discrimination, contact our Title IX Coordinator.
                        </p>
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-sm">
                            <p className="font-bold text-ucb-blue">Rosana Perella, Title IX Coordinator</p>
                            <p className="mt-1 flex items-center gap-2 text-gray-600"><Mail className="w-4 h-4 text-ucb-orange" /> <a href="mailto:rosana.perella@urbancollege.edu" className="hover:text-ucb-orange">rosana.perella@urbancollege.edu</a></p>
                            <p className="mt-1 flex items-center gap-2 text-gray-600"><Phone className="w-4 h-4 text-ucb-orange" /> <a href="tel:+16174497380" className="hover:text-ucb-orange">617-449-7380</a></p>
                        </div>
                    </SectionCard>
                </div>
            </section>

            {/* Emergency numbers & CSAs */}
            <section className="py-14 bg-white border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-8">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Campus Security Authorities</span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">Emergency & Non-Emergency Numbers</h2>
                        <p className="text-gray-500 font-light mt-2 text-sm">For emergencies call 911. For non-emergencies, reach a designated Campus Security Authority below.</p>
                    </ScrollAnimation>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {csaContacts.map((c) => (
                            <div key={c.role} className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center justify-between gap-3">
                                <span className="text-sm font-semibold text-ucb-black">{c.role}</span>
                                <a href={`tel:+1${c.phone.replace(/-/g, '')}`} className="text-sm font-bold text-ucb-blue hover:text-ucb-orange whitespace-nowrap flex items-center gap-1">
                                    <Phone className="w-3.5 h-3.5" /> {c.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Report a crime CTA */}
            <section className="py-14">
                <div className="container mx-auto px-6 max-w-3xl">
                    <ScrollAnimation variant="fade-up" className="bg-ucb-blue text-white rounded-3xl p-8 text-center">
                        <h2 className="text-2xl font-display font-bold mb-3">Report a Crime</h2>
                        <p className="text-blue-100 font-light leading-relaxed max-w-xl mx-auto mb-6">
                            You may file a report confidentially using our online form, or contact the Title IX Coordinator or Boston Municipal Police.
                            Filing a report with the college does not require you to pursue criminal charges.
                        </p>
                        <a href="https://forms.office.com/r/N67Nrhscq5" target="_blank" rel="noopener noreferrer" className="bg-ucb-orange text-white font-bold py-3 px-7 rounded-full hover:bg-ucb-orange-glow transition-colors shadow-md min-h-[44px] inline-flex items-center justify-center gap-2">
                            Open the Crime Report Form <ExternalLink className="w-4 h-4" />
                        </a>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default SafetyWellness;
