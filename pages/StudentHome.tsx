import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { buildBreadcrumbJsonLd } from '../components/seo-data';
import {
    ClipboardCheck, LifeBuoy, CalendarDays, BookOpen, ArrowUpRight, Library,
    Users, Laptop, Award, FileText, ArrowRight, Sparkles, Heart
} from 'lucide-react';

interface Resource {
    title: string;
    desc: string;
    to: string;
    external?: boolean;
    icon: React.ElementType;
}

// Core resources current students rely on — mirrors the "Students" nav menu.
const resources: Resource[] = [
    { title: 'Course Registration', desc: 'Register for classes, connect with your advisor, and plan your schedule.', to: '/course-registration', icon: ClipboardCheck },
    { title: 'Student Services', desc: 'Advising, tutoring, accessibility, and a whole team in your corner.', to: '/student-services-overview', icon: LifeBuoy },
    { title: 'Academic Calendar', desc: 'Key dates, deadlines, holidays, and term start and end dates.', to: '/academic-calendar', icon: CalendarDays },
    { title: 'College Catalog', desc: 'Programs, courses, policies, and the full student handbook.', to: 'https://catalog.urbancollege.edu/', external: true, icon: BookOpen },
    { title: 'College Transfer Pathways', desc: "You're halfway there — transfer your credits into a bachelor's program.", to: '/college-transfer-pathways', icon: ArrowUpRight },
    { title: 'Learning Resource Center', desc: 'Free tutoring, academic workshops, and technology help.', to: '/learning-resource-center', icon: Library },
    { title: 'Student Government', desc: 'Make your voice heard and get involved in campus life.', to: '/student-government', icon: Users },
    { title: 'Technology Support', desc: 'Set up your student email, log in to systems, and troubleshoot.', to: '/technology-account-guide', icon: Laptop },
    { title: 'Commencement', desc: 'Everything you need to know about graduation day.', to: '/commencement', icon: Award },
    { title: 'Transcript Requests', desc: 'Order official academic transcripts securely online.', to: '/transcript-requests', icon: FileText },
];

const StudentHome: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-gray-50/40 min-h-screen">
            <SEO
                title="Current Students | Urban College of Boston"
                description="Your hub as a current Urban College of Boston student — registration, student services, the academic calendar, the college catalog, transfer pathways, the Learning Resource Center, technology support, commencement, and transcript requests."
                canonicalPath="/students"
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Current Students', path: '/students' },
                ])}
            />
            <PageHeader
                title={<>You belong here. Let's get you to <span className="text-ucb-gold">graduation.</span></>}
                subtitle="Everything you need to stay enrolled, stay on track, and finish strong — all in one place."
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Current Students' }]}
                imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Encouraging intro */}
            <section className="py-14 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <span className="inline-flex items-center gap-2 text-ucb-orange font-bold tracking-widest uppercase text-xs mb-3">
                            <Sparkles className="w-4 h-4" /> Welcome Back
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-ucb-blue leading-tight">
                            Every step forward is progress worth celebrating
                        </h2>
                        <p className="text-lg text-gray-600 font-light leading-relaxed mt-4">
                            Whether you're registering for your next class, booking a tutor, or counting down to commencement,
                            we're with you the whole way. Use the quick links below to find what you need — and remember,
                            our team is always just a call or click away.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Resource grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">Your Student Resources</h2>
                        <p className="text-gray-500 font-light mt-2">Quick links to the pages current students use most.</p>
                    </ScrollAnimation>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map((r, idx) => {
                            const Icon = r.icon;
                            const inner = (
                                <>
                                    <div className="w-12 h-12 rounded-2xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center mb-4 group-hover:bg-ucb-blue group-hover:text-white transition-colors">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-ucb-blue mb-1.5">{r.title}</h3>
                                    <p className="text-sm text-gray-600 font-light leading-relaxed flex-1">{r.desc}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-ucb-orange font-bold text-sm">
                                        {r.external ? 'Open' : 'Go'} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </>
                            );
                            const cls = "group bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-ucb-orange/40 hover:-translate-y-0.5 transition-all flex flex-col h-full";
                            return (
                                <ScrollAnimation key={idx} variant="fade-up" delay={`${(idx % 3) * 0.08}s`} className="h-full">
                                    {r.external ? (
                                        <a href={r.to} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                                    ) : (
                                        <Link to={r.to} className={cls}>{inner}</Link>
                                    )}
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Closing encouragement / contact CTA */}
            <section className="py-16 bg-ucb-blue text-white">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <Heart className="w-8 h-8 text-ucb-orange mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Need a hand? You're never on your own.</h2>
                        <p className="text-blue-100 font-light leading-relaxed max-w-2xl mx-auto mb-7">
                            Our advisors and support staff are here to help you navigate any challenge and keep moving toward your degree.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/student-services-overview" className="bg-ucb-orange text-white font-bold py-3 px-7 rounded-full hover:bg-ucb-orange-glow transition-colors shadow-md min-h-[44px] inline-flex items-center justify-center">
                                Explore Student Services
                            </Link>
                            <Link to="/contact" className="bg-transparent border-2 border-white/70 text-white font-bold py-3 px-7 rounded-full hover:bg-white hover:text-ucb-blue transition-colors min-h-[44px] inline-flex items-center justify-center">
                                Contact Us
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default StudentHome;
