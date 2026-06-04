import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StickySubNav from '../components/StickySubNav';
import Programs from '../components/Programs';
import Stats from '../components/Stats';
import WhyUrbanCollege from '../components/WhyUrbanCollege';
import RecentBlogPosts from '../components/RecentBlogPosts';
import Faq, { FAQS } from '../components/Faq';
import SEO from '../components/SEO';
import { organizationJsonLd, websiteJsonLd, buildFaqJsonLd } from '../components/seo-data';

const Home: React.FC = () => {
    // Ensure we scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO
                title="Urban College of Boston | Affordable Associate Degrees & Certificates"
                description="Urban College of Boston offers affordable online associate degrees and certificates with multilingual instruction in English, Spanish, and Mandarin. Flexible evening, weekend, and asynchronous classes for working students."
                canonicalPath="/"
                jsonLd={[organizationJsonLd, websiteJsonLd, buildFaqJsonLd(FAQS)]}
            />
            <Hero />
            <Stats />
            <StickySubNav />
            <Programs />
            <WhyUrbanCollege />

            {/* Financial Aid Section */}
            <section id="financial-aid" className="py-4 bg-white border-y border-gray-100 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-5 items-center">
                        <div>
                            <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Affordability</span>
                            <h2 className="font-display font-bold text-3xl text-ucb-blue mb-3">Your Education, More Affordable Than You Think</h2>
                            <p className="text-base text-gray-600 mb-4 max-w-lg leading-relaxed">
                                Urban College is dedicated to keeping education accessible. Through federal aid (Pell Grants), state scholarships, and institutional support, we ensure money isn't a barrier to your future.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-ucb-blue p-3 rounded-r-lg mb-4">
                                <p className="text-ucb-blue font-medium text-sm leading-relaxed">
                                    <span className="font-bold text-ucb-blue block text-base mb-0.5 leading-relaxed">Tuition & Financial Aid</span>
                                    Our team works with every student one-on-one to create a customized payment plan. The average out-of-pocket cost is just $1,680—only 11% of students have any out-of-pocket cost, and 99% graduate debt-free.
                                </p>
                            </div>
                            <Link to="/admissions" className="bg-ucb-blue text-white font-bold py-2.5 px-7 rounded-full hover:bg-ucb-blue-glow transition-colors shadow-md hover:-translate-y-0.5 transform duration-300 text-sm min-h-[44px] inline-flex items-center justify-center">
                                Admissions & Aid Options
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {[
                                { name: 'Scholarships', to: '/financial-services-and-funding-options' },
                                { name: 'Financial Aid & Grants', to: '/financial-services-and-funding-options' },
                                { name: 'Payment Plans', to: '/tuition-payment-options' },
                            ].map((item) => (
                                <Link key={item.name} to={item.to} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between group hover:border-ucb-orange hover:shadow-md transition-all cursor-pointer min-h-[44px]">
                                    <span className="font-bold text-base text-ucb-blue group-hover:text-ucb-blue transition-colors leading-relaxed">{item.name}</span>
                                    <span className="text-ucb-orange text-xl group-hover:translate-x-2 transition-transform">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <RecentBlogPosts />
            <Faq />
        </>
    );
};

export default Home;
