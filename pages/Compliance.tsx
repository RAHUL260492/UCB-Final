import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { buildBreadcrumbJsonLd } from '../components/seo-data';
import { Scale, ShieldCheck, Building2, ClipboardList, Award, BookOpen, ArrowRight } from 'lucide-react';

interface Item {
    title: string;
    desc: string;
    to: string;
    external?: boolean;
    icon: React.ElementType;
}

const items: Item[] = [
    { title: 'Policies & Disclosures', desc: 'Required consumer information, academic policies, calendars, catalogs, and audited financials.', to: '/policies-disclosures', icon: Scale },
    { title: 'Safety & Wellness', desc: 'Emergency preparedness, annual security (Clery) reports, Title IX, and how to report a crime.', to: '/safety-and-wellness', icon: ShieldCheck },
    { title: 'Campus Facilities', desc: 'Information about our campus, accessibility, and on-site resources.', to: '/campus-facilities', icon: Building2 },
    { title: 'HEERF Reports', desc: 'Higher Education Emergency Relief Fund public disclosures and quarterly reports.', to: '/heerf-reports', icon: ClipboardList },
    { title: 'Accreditation', desc: 'Our accreditation status and recognition as a non-profit, degree-granting institution.', to: '/accreditation', icon: Award },
    { title: 'College Catalog & Student Handbook', desc: 'Programs, courses, policies, and the full student handbook.', to: 'https://catalog.urbancollege.edu/', external: true, icon: BookOpen },
];

const Compliance: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/40 min-h-screen">
            <SEO
                title="Compliance | Urban College of Boston"
                description="Urban College of Boston's compliance and consumer information hub — policies and disclosures, campus safety, security reports, HEERF reports, accreditation, and the college catalog."
                canonicalPath="/compliance"
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Compliance', path: '/compliance' },
                ])}
            />
            <PageHeader
                title="Compliance"
                subtitle="Transparency matters to us. Access the disclosures, reports, and consumer information required of Urban College of Boston."
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Compliance' }]}
                imageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            <section className="py-16">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item, idx) => {
                            const Icon = item.icon;
                            const inner = (
                                <>
                                    <div className="w-12 h-12 rounded-2xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center mb-4 group-hover:bg-ucb-blue group-hover:text-white transition-colors">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h2 className="font-display font-bold text-lg text-ucb-blue mb-1.5">{item.title}</h2>
                                    <p className="text-sm text-gray-600 font-light leading-relaxed flex-1">{item.desc}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-ucb-orange font-bold text-sm">
                                        View <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </>
                            );
                            const cls = "group bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-ucb-orange/40 hover:-translate-y-0.5 transition-all flex flex-col h-full";
                            return (
                                <ScrollAnimation key={idx} variant="fade-up" delay={`${(idx % 3) * 0.08}s`} className="h-full">
                                    {item.external ? (
                                        <a href={item.to} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                                    ) : (
                                        <Link to={item.to} className={cls}>{inner}</Link>
                                    )}
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Compliance;
