import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    Calendar, Clock, MapPin, Users, Tv, Award,
    CheckCircle, Camera, AlertTriangle, ArrowRight, BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';

const Commencement: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Student Services", path: "/student-services" },
        { label: "Commencement" }
    ];

    const timeline = [
        {
            time: "12:00 PM",
            title: "Graduates Arrive on Campus",
            desc: "Arrive at Urban College's campus (2 Boylston Street, 2nd Floor, Boston, MA 02116). Use this time to check in, take photos in front of the Urban College backdrop, share your story, and celebrate with fellow graduates. Children are welcome on campus temporarily, but should head to the theater at 12:30 with a guardian."
        },
        {
            time: "12:40 PM",
            title: "Processional Procession Walk",
            desc: "Graduates, staff, faculty, and Board members will walk in a formal processional from the Urban College campus to the Emerson Majestic Theater. (Note: The road is uneven, so please select comfortable footwear!)"
        },
        {
            time: "1:00 PM – 3:00 PM",
            title: "Commencement Ceremony",
            desc: "The official Commencement ceremony takes place at the Emerson Cutler Majestic Theatre (219 Tremont Street). After the ceremony, you will exit the theater and meet your guests outside."
        }
    ];

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30">
            <SEO
                title={PAGE_META.commencement.title}
                description={PAGE_META.commencement.description}
                canonicalPath={PAGE_META.commencement.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Commencement', path: PAGE_META.commencement.path },
                ])}
            />
            <PageHeader
                title="Commencement Ceremony"
                subtitle="Mark your calendars! Celebrate the achievements of our graduates and community leaders."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Date and Location Alert Banner */}
            <section className="py-12 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-gradient-to-br from-ucb-blue to-blue-950 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                            <div className="relative z-10 space-y-4 max-w-2xl">
                                <span className="inline-flex px-3 py-1 bg-ucb-orange text-white rounded-full text-xs font-bold uppercase tracking-wider">Ceremony Details</span>
                                <h3 className="text-3xl font-display font-black leading-tight">Saturday, May 30, 2026 at 1:00 PM ET</h3>
                                <p className="text-blue-100 text-sm md:text-base leading-relaxed font-light">
                                    Join us in celebrating the graduation of Urban College of Boston's Class of 2026 at the historic <strong>Emerson Cutler Majestic Theatre</strong> (219 Tremont Street, Boston, MA).
                                </p>
                            </div>
                            <div className="relative z-10 flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
                                <a 
                                    href="https://reflect-cablecast-bnn.cablecast.tv/internetchannel/watch-now?site=3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-ucb-orange text-white hover:bg-ucb-orange-glow px-6 py-3.5 rounded-xl font-bold shadow text-sm inline-flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
                                >
                                    <Tv className="w-4 h-4" /> Watch Livestream
                                </a>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Keynote Speakers */}
            <section className="py-16 md:py-24 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-12">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block font-display">Speakers & Honorees</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Commencement Speakers</h2>
                        <p className="text-gray-500 mt-2 text-sm">Honoring global leaders whose service transforms lives and strengthens communities.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Keynote Speaker */}
                        <ScrollAnimation variant="slide-right" className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center border border-ucb-blue/10 shrink-0">
                                    <Users className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-bold text-ucb-orange uppercase tracking-wider block font-display">Keynote Speaker</span>
                                <h3 className="text-2xl font-display font-bold text-gray-800">Lincoln C. Mali</h3>
                                <p className="text-gray-500 text-xs font-semibold leading-tight uppercase tracking-wider">Global Philanthropist & Financial Services Executive</p>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light pt-2">
                                    “His commitment to service, global citizenship, and leadership mirrors the values we instill in our graduates,” said Dr. Yves Salomon‑Fernández, president of Urban College. “He will inspire and energize students as they begin their next chapter.”
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Coard Leadership Award */}
                        <ScrollAnimation variant="slide-left" className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-xl bg-ucb-green/10 text-ucb-green flex items-center justify-center border border-ucb-green/10 shrink-0">
                                    <Award className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-bold text-ucb-orange uppercase tracking-wider block font-display">Robert M. Coard Leadership Award</span>
                                <h3 className="text-2xl font-display font-bold text-gray-800">Denella J. Clark</h3>
                                <p className="text-gray-500 text-xs font-semibold leading-tight uppercase tracking-wider">President & CEO, Boston Arts Academy Foundation</p>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light pt-2">
                                    Recognizing exceptional leadership and service to Boston's communities. Denella J. Clark, along with keynote speaker Lincoln C. Mali, will be awarded an honorary Bachelor's degree in Human Services.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className="text-center pt-4">
                        <ScrollAnimation variant="fade-up">
                            <a 
                                href="/blog" // We can point to Blog overview or detail
                                className="bg-white border border-gray-200 text-gray-700 hover:text-ucb-blue px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm inline-flex items-center gap-1.5 transition-all cursor-pointer min-h-[38px]"
                            >
                                <BookOpen className="w-4 h-4 text-ucb-blue" />
                                Read More About Honorees on the Blog
                            </a>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Schedule Timeline */}
            <section className="py-16 md:py-24 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl space-y-12">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block font-display">Graduation Day</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Ceremony Schedule</h2>
                        <p className="text-gray-500 mt-2 text-sm">Graduates, please follow the timeline below to check in and join the processional.</p>
                    </ScrollAnimation>

                    <div className="relative border-l-2 border-ucb-blue/20 pl-6 md:pl-8 space-y-12 ml-2 md:ml-4">
                        {timeline.map((item, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3"
                            >
                                <div className="absolute -left-[35px] md:-left-[43px] top-5 w-6 h-6 rounded-full bg-ucb-blue flex items-center justify-center text-white border-4 border-white shadow shrink-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                </div>
                                <span className="text-xs font-bold text-ucb-orange bg-ucb-orange/10 border border-ucb-orange/10 px-3 py-1 rounded-xl tracking-wide uppercase inline-block">
                                    {item.time}
                                </span>
                                <h4 className="font-display font-bold text-gray-800 text-base leading-tight mt-1">{item.title}</h4>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">{item.desc}</p>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guest Guidelines */}
            <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-12">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block font-display">Information for Guests</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Guest Policies & FAQ</h2>
                        <p className="text-gray-500 mt-2 text-sm">Please share this important information with your family and friends.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollAnimation variant="fade-up" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3 shadow-sm">
                            <h4 className="font-display font-bold text-gray-800 text-base">Guest Count & Entry</h4>
                            <p className="text-gray-600 text-xs leading-relaxed font-light">
                                Graduates may invite as many family members and friends as they would like! <strong>No tickets are required</strong> for entry.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation variant="fade-up" delay="0.05s" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3 shadow-sm">
                            <h4 className="font-display font-bold text-gray-800 text-base">Doors & Seating</h4>
                            <p className="text-gray-600 text-xs leading-relaxed font-light">
                                Guests should go directly to the Emerson Majestic Theatre (Boston, MA 02111). <strong>Doors open at 12:30 PM</strong>. Please stay seated once the procession starts.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation variant="fade-up" delay="0.1s" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3 shadow-sm flex flex-col justify-between">
                            <div className="space-y-3">
                                <h4 className="font-display font-bold text-gray-800 text-base flex items-center gap-1.5 text-ucb-orange">
                                    <AlertTriangle className="w-4.5 h-4.5 shrink-0" />
                                    Prohibited Items
                                </h4>
                                <p className="text-gray-600 text-xs leading-relaxed font-light">
                                    No balloons, outside food, or drinks are allowed inside the theater. Please keep all aisles clear at all times.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Social Media & Media Links */}
            <section className="py-16 bg-gray-50/50">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
                    <ScrollAnimation variant="fade-up" className="space-y-2">
                        <div className="inline-flex p-3 bg-ucb-orange/10 text-ucb-orange rounded-full mb-2">
                            <Camera className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-display font-black text-ucb-black">Share Your Achievements!</h2>
                        <p className="text-gray-500 text-sm font-light max-w-xl mx-auto">
                            Remember to use the hashtag <strong>#UrbanCollegeGrad</strong> and tag <strong>@UrbanCollegeofBoston</strong> when posting photos online!
                        </p>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default Commencement;
