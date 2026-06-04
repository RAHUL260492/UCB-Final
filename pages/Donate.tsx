import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { GraduationCap, Briefcase, Cpu, FileText, Landmark, TrendingUp, Phone } from 'lucide-react';

const givingAreas = [
    { title: 'Access to Education', desc: 'Support emergency funds that keep financial barriers from stopping a student’s progress.', icon: GraduationCap, color: 'text-ucb-blue bg-blue-50' },
    { title: 'Workforce Training', desc: 'Fund credential and English-language programs that open doors to careers.', icon: Briefcase, color: 'text-ucb-orange bg-orange-50' },
    { title: 'Technology', desc: 'Equip students with the digital skills they need for an evolving job market.', icon: Cpu, color: 'text-ucb-teal bg-teal-50' },
];

const otherWays = [
    { title: 'Gifts by Check', desc: 'Mail a check to the Urban College Business Office, 2 Boylston Street, 2nd Floor, Boston, MA 02116.', icon: FileText },
    { title: 'Wire Transfers', desc: 'Make a direct wire transfer to support our students. Contact us for details.', icon: Landmark },
    { title: 'Gifts of Stock', desc: 'Transfer shares of stock to invest in our students while optimizing tax benefits.', icon: TrendingUp },
];

const Donate: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/50">
            <SEO
                title={PAGE_META.donate.title}
                description={PAGE_META.donate.description}
                canonicalPath={PAGE_META.donate.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Donate', path: PAGE_META.donate.path },
                ])}
            />
            <PageHeader
                title="Support Urban College of Boston"
                subtitle="Education is a catalyst for transformation—not only for individuals, but for entire families and communities."
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Donate' },
                ]}
                imageSrc="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2940&auto=format&fit=crop"
            />

            {/* Why give */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Your Impact</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Where Your Gift Goes</h2>
                    </ScrollAnimation>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {givingAreas.map((area, idx) => {
                            const Icon = area.icon;
                            return (
                                <ScrollAnimation key={idx} variant="fade-up" delay={`${idx * 0.1}s`} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${area.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-ucb-blue mb-2">{area.title}</h3>
                                    <p className="text-sm text-gray-600 font-light leading-relaxed">{area.desc}</p>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Donation widget */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-3xl">
                    <ScrollAnimation variant="fade-up" className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 md:p-8">
                        <h2 className="text-2xl font-display font-bold text-ucb-blue text-center mb-6">Make Your Gift</h2>
                        {/* Givebutter widget — loader script injected in useEffect above.
                            NOTE: the embed needs the specific Givebutter widget ID
                            (<givebutter-widget id="XXXX">). Add it below once available. */}
                        <div dangerouslySetInnerHTML={{ __html: '<givebutter-widget></givebutter-widget>' }} />
                    </ScrollAnimation>
                </div>
            </section>

            {/* Closing statement */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <p className="text-lg text-gray-700 font-light leading-relaxed italic">
                            "Your gift doesn't just support a college. It empowers determined individuals to transform their lives—and, through them, their communities."
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Other ways to give */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-10">
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Other Ways to Give</h2>
                    </ScrollAnimation>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherWays.map((w, idx) => {
                            const Icon = w.icon;
                            return (
                                <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                                    <div className="w-10 h-10 rounded-xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center mb-3">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-display font-bold text-base text-ucb-blue mb-1">{w.title}</h3>
                                    <p className="text-sm text-gray-600 font-light leading-relaxed">{w.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-8 text-center text-sm text-gray-600 flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4 text-ucb-orange" />
                        <span>Questions about giving? Contact Madeleine Picher, Senior Manager of Development Operations, at <a href="tel:+16178613912" className="text-ucb-blue font-semibold hover:text-ucb-orange transition-colors">617-861-3912</a>.</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;
