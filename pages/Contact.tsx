import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { MapPin, Phone, Clock, Mail, ArrowRight } from 'lucide-react';

const departments = [
    { name: 'Admissions', email: 'admissions@urbancollege.edu', phone: '617-665-8530' },
    { name: 'Advising', email: 'advising@urbancollege.edu' },
    { name: 'Student Success', email: 'studentsuccess@urbancollege.edu' },
    { name: 'Registration', email: 'registration@urbancollege.edu' },
    { name: 'Financial Aid', email: 'financialservices@urbancollege.edu' },
];

const Contact: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/50">
            <SEO
                title={PAGE_META.contact.title}
                description={PAGE_META.contact.description}
                canonicalPath={PAGE_META.contact.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Contact', path: PAGE_META.contact.path },
                ])}
            />
            <PageHeader
                title="Contact Us"
                subtitle="We're here to answer your questions and support your educational journey."
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Contact' },
                ]}
                imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2940&auto=format&fit=crop"
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                            Everyone at Urban College is dedicated to your success! We're here to answer your questions and support your educational journey.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Campus / hours */}
                        <ScrollAnimation variant="slide-right" className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-5">
                            <h2 className="font-display font-bold text-xl text-ucb-blue">Visit Us</h2>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-ucb-blue/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-ucb-orange" />
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed mt-1">2 Boylston Street, 2nd Floor<br />Boston, MA 02116</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-ucb-blue/5 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-ucb-orange" />
                                </div>
                                <a href="tel:+16174497070" className="text-gray-700 text-sm hover:text-ucb-blue transition-colors">+1 617.449.7070</a>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-ucb-blue/5 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 text-ucb-orange" />
                                </div>
                                <div className="text-gray-700 text-sm leading-relaxed mt-1">
                                    <span className="font-semibold block">Administration Hours</span>
                                    Monday – Friday: 10 am – 6 pm<br />
                                    <span className="text-gray-500">Campus is open Wednesdays &amp; Thursdays. Services can be accessed remotely during work hours.</span>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Department emails */}
                        <ScrollAnimation variant="slide-left" className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                            <h2 className="font-display font-bold text-xl text-ucb-blue mb-5">Department Contacts</h2>
                            <ul className="space-y-3">
                                {departments.map((d) => (
                                    <li key={d.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-2xl bg-gray-50 border border-gray-100/60">
                                        <span className="font-bold text-sm text-gray-900">{d.name}</span>
                                        <span className="flex items-center gap-3 text-xs">
                                            <a href={`mailto:${d.email}`} className="text-ucb-blue hover:text-ucb-orange transition-colors inline-flex items-center gap-1.5">
                                                <Mail className="w-3.5 h-3.5" /> {d.email}
                                            </a>
                                            {d.phone && <a href={`tel:${d.phone.replace(/[^0-9]/g, '')}`} className="text-gray-500 hover:text-ucb-blue transition-colors hidden sm:inline">{d.phone}</a>}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* General RFI CTA */}
            <section className="py-16 bg-gradient-to-r from-ucb-blue to-blue-950 text-white">
                <div className="container mx-auto px-6 max-w-3xl text-center space-y-5">
                    <h2 className="text-2xl md:text-3xl font-display font-bold">Have a question? Request information.</h2>
                    <p className="opacity-90 font-light leading-relaxed">Tell us a little about yourself and our team will reach out to help you take the next step.</p>
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent('open-rfi-sidebar'))}
                        className="inline-flex items-center justify-center gap-2 bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px] cursor-pointer"
                    >
                        Request Info <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Contact;
