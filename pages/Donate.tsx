import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { GraduationCap, Briefcase, Cpu, FileText, Landmark, TrendingUp, Phone, Award, Mail } from 'lucide-react';

const givingAreas = [
    { title: 'Access to Education', desc: 'Support emergency funds that keep financial barriers from stopping a student’s progress.', icon: GraduationCap, color: 'text-ucb-blue bg-blue-50' },
    { title: 'Workforce Training', desc: 'Fund credential and English-language programs that open doors to careers.', icon: Briefcase, color: 'text-ucb-orange bg-orange-50' },
    { title: 'Technology', desc: 'Equip students with the digital skills they need for an evolving job market.', icon: Cpu, color: 'text-ucb-teal bg-teal-50' },
];

const otherWays = [
    { title: 'Gifts by Check', desc: 'Mail a check to Urban College of Boston, Attn: Caitlin Callahan, 2 Boylston Street, 2nd Floor, Boston, MA 02116.', icon: FileText },
    { title: 'Wire Transfers', desc: 'Make a direct wire transfer to support our students. Contact us for details.', icon: Landmark },
    { title: 'Gifts of Stock', desc: 'Transfer shares of stock to invest in our students while optimizing tax benefits.', icon: TrendingUp },
];

const Donate: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        // GiveButter auto-resize helper for the embedded giving form iframe.
        // Same script the live urbancollege.edu/donate page uses; it listens for
        // postMessage from the iframe and adjusts its height to fit the form.
        const SRC = 'https://givebutter.com/js/widget.js';
        if (!document.querySelector(`script[src="${SRC}"]`)) {
            const s = document.createElement('script');
            s.src = SRC;
            s.async = true;
            document.body.appendChild(s);
        }
    }, []);

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

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "With my heart full of happiness, gratitude, and humility, I thank you immensely for this help you gave me. I trust that you, as an organization, will always have the resources to help people who want to prepare themselves but, despite having the desire and enthusiasm, sometimes lack the financial means.",
                            "I am thankful to have been awarded with the scholarship funds to pursue my professional development in Early Education and wanted to express my gratitude for your support.",
                            "Receiving this scholarship brings me peace and motivation. It eases the financial pressure of being a student and reminds me that there are people who believe in my goals and in the power of education.",
                            "The scholarship money will make a difference in my future because it will help me continue my studies without the worry of how I will be able to pay. As a mother of three, my focus is being able to provide for them, and I know without the scholarship money it would be difficult to continue my studies."
                        ].map((quote, idx) => (
                            <ScrollAnimation key={idx} variant="fade-up" delay={`${idx * 0.05}s`} className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                                <p className="text-sm text-gray-600 font-light italic leading-relaxed">"{quote}"</p>
                                <p className="mt-3 text-xs font-bold text-ucb-orange uppercase tracking-wider">— Urban College Student</p>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation widget */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-3xl">
                    <ScrollAnimation variant="fade-up" className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 md:p-8">
                        <h2 className="text-2xl font-display font-bold text-ucb-blue text-center mb-6">Make Your Gift</h2>
                        {/* Givebutter giving form — embeds the live "UCB-Annual-Fund"
                            campaign, the same form used on urbancollege.edu/donate.
                            Height is auto-adjusted by widget.js (loaded in useEffect above). */}
                        <iframe
                            title="Donate to Urban College of Boston"
                            src="https://givebutter.com/embed/c/UCB-Annual-Fund"
                            name="givebutter"
                            width="100%"
                            height="615px"
                            scrolling="no"
                            frameBorder={0}
                            allow="payment"
                            className="mx-auto block w-full"
                            style={{ maxWidth: '601px' }}
                        />
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

            {/* Robert M. Coard Legacy Society */}
            <section className="py-16 bg-ucb-blue text-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up" className="text-center">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                            <Award className="w-7 h-7 text-ucb-orange" />
                        </div>
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Leadership Giving</span>
                        <h2 className="text-3xl font-display font-bold mb-4">The Robert M. Coard Legacy Society</h2>
                        <p className="text-blue-100 font-light leading-relaxed max-w-2xl mx-auto">
                            Named in honor of our founding president, the Robert M. Coard Legacy Society recognizes
                            donors who contribute $1,000 or more annually. These leadership gifts help expand access
                            to education and advance academic excellence for the underserved communities we serve.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Foundation video */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <ScrollAnimation variant="fade-up" className="space-y-5">
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px' }} className="shadow-md border border-gray-100">
                            <iframe src="https://www.youtube.com/embed/SOvVdrR_FrI" title="Urban College of Boston" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                        </div>
                        <div className="text-center">
                            <a href="/foundation" className="inline-flex items-center gap-2 text-ucb-blue font-bold text-sm hover:text-ucb-orange transition-colors">Learn about the Urban College Foundation →</a>
                        </div>
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
                        <Mail className="w-4 h-4 text-ucb-orange" />
                        <span>Questions about giving? Contact our Advancement team at <a href="mailto:advancement@urbancollege.edu" className="text-ucb-blue font-semibold hover:text-ucb-orange transition-colors">advancement@urbancollege.edu</a>.</span>
                    </div>
                    <p className="mt-4 text-center text-xs text-gray-500 font-light max-w-2xl mx-auto">
                        Urban College of Boston is a 501(c)(3) tax-exempt organization (EIN 04-3403049). Your gift is tax-deductible to the fullest extent allowed by law.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Donate;
