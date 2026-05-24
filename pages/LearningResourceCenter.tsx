import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Monitor, Users, Calendar, Clock, MapPin, Mail, Phone, ExternalLink, MessageCircle, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const faqs = [
    { q: "What services does the LRC offer?", a: "The LRC provides tutoring (in-person and remote), academic workshops, technology assistance, and computer/printing access." },
    { q: "Where is the LRC located?", a: "The LRC is on the second floor of the China Trade Center (2 Boylston Street, Boston). In-person hours are Wednesdays and Thursdays (11:00 AM–6:00 PM)." },
    { q: "What subjects does the LRC tutor?", a: "Tutors assist with math, English, writing, professional skills (e.g., resume writing), and technology literacy. Support is available in English, Spanish, and Mandarin." },
    { q: "How do I schedule a tutoring session?", a: "Book appointments via Bookings or by phone (617-449-7070). Remote tutoring is available Monday–Saturday (by appointment)." },
    { q: "Are there group study sessions?", a: "Yes! The LRC can host workshops on time management, research skills, and software tutorials (e.g., Microsoft Office), and Free English conversation classes." },
    { q: "Does the LRC have computers or printers?", a: "Yes. The center has 2 computer workstations. However, we suggest if you come in person, bring the device you use for class. We may be able to help you install bookmarks to frequently used links or troubleshoot issues that are keeping you from completing work." },
    { q: "What online resources are available?", a: "Access 30+ Gale Databases (available online at https://www.galepages.com/mlin_b_urbancb) for journals, e-books, and newspapers. Use your student ID to log in remotely." },
    { q: "Are interpreters available?", a: "Yes. The LRC coordinates interpreters and captioning services. Please let us know if you will need translation or interpreting services when you make an appointment and we will organize the support you need." },
    { q: "Is there a limit on tutoring sessions?", a: "No—students can schedule unlimited sessions, but same-day appointments depend on tutor availability." }
];

const LearningResourceCenter: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="pt-24 lg:pt-32">
            <PageHeader
                title="Learning Resource Center"
                subtitle="Empowering your academic journey at Urban College with tutoring, language support, and technology assistance."
                breadcrumbs={[
                    { label: 'Student Services', path: '/student-services' },
                    { label: 'Learning Resource Center' }
                ]}
                imageSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-8 space-y-12">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-ucb-black mb-6">Welcome to the LRC</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    The LRC is Urban College's Learning Resource Center. LRC Staff members are a team of Learning Support Associates (or LSAs) who provide Urban College students with a variety of services to help you succeed.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-display font-bold text-ucb-blue mb-8">How We Can Help</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: "Individual & Group Tutoring", desc: "Available for English, math, and other academic subjects.", icon: Users },
                                        { title: "Language Support", desc: "Dedicated support in Spanish and Mandarin.", icon: MessageCircle },
                                        { title: "Technology Assistance", desc: "Help with software, online platforms, and computing.", icon: Monitor },
                                        { title: "Academic Workshops", desc: "Study skills, professional skills, and time management.", icon: BookOpen },
                                        { title: "English Placement", desc: "Assistance with the English placement process.", icon: CheckCircle }, 
                                        { title: "Community Events", desc: "Connect with peers at Urban College community events.", icon: Calendar }
                                    ].map((service, idx) => {
                                        const IconComponent = service.icon;
                                        return (
                                            <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-ucb-blue/30 transition-colors">
                                                <IconComponent className="w-8 h-8 text-ucb-orange mb-4" />
                                                <h4 className="font-bold text-lg text-ucb-black mb-2">{service.title}</h4>
                                                <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            
                            {/* Multilingual Resource Links */}
                            <div className="bg-ucb-blue rounded-3xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <GlobeIcon className="w-64 h-64" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-display font-bold text-2xl mb-6">LRC Resources by Language</h3>
                                    <div className="flex flex-wrap gap-4">
                                        <Link to="/lrc-english" className="bg-white text-ucb-blue px-6 py-3 rounded-full font-bold hover:bg-ucb-gold hover:text-white transition-colors">
                                            LRC Resources (English)
                                        </Link>
                                        <Link to="/lrc-spanish" className="bg-white text-ucb-blue px-6 py-3 rounded-full font-bold hover:bg-ucb-gold hover:text-white transition-colors">
                                            Recursos Académicos (Español)
                                        </Link>
                                        <Link to="/lrc-mandarin" className="bg-white text-ucb-blue px-6 py-3 rounded-full font-bold hover:bg-ucb-gold hover:text-white transition-colors">
                                            学术资源 (Mandarin)
                                        </Link>
                                    </div>
                                    <div className="flex flex-wrap gap-6 mt-6">
                                        <a href="/s/Outlook-Tools-Guide_LRC-July-2023.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-ucb-gold transition-colors font-medium">
                                            <Monitor className="w-5 h-5" /> Download Microsoft Tools Guide (PDF)
                                        </a>
                                        <a href="/s/self-led-english-practice-2.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-ucb-gold transition-colors font-medium">
                                            <ExternalLink className="w-5 h-5" /> Self-led English Practice
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-white rounded-3xl shadow-xl shadow-ucb-blue/5 p-8 border border-gray-100 sticky top-32">
                                <h3 className="font-display font-bold text-2xl text-ucb-black mb-6">Hours & Location</h3>
                                
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <Monitor className="w-6 h-6 text-ucb-orange shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-ucb-black">Remote Hours</h4>
                                            <p className="text-gray-600 text-sm mt-1">Monday - Saturday<br />11:00 AM - 7:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <MapPin className="w-6 h-6 text-ucb-orange shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-ucb-black">In-Person (Walk-ins)</h4>
                                            <p className="text-gray-600 text-sm mt-1">Wednesdays & Thursdays<br />11:00 AM - 6:00 PM<br />2 Boylston Street, 2nd Floor</p>
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-6 border-gray-100" />
                                
                                <h3 className="font-display font-bold text-xl text-ucb-black mb-4">Request an Appointment</h3>
                                <p className="text-sm text-gray-600 mb-6">Students can make appointments online or directly reach out to the LRC staff.</p>
                                <a 
                                    href="https://outlook.office365.com/owa/calendar/LearningResourceCenter@URBANCOLLEGE.EDU/bookings/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-ucb-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-ucb-orange-glow transition-colors flex items-center justify-center gap-2 mb-4"
                                >
                                    Book Online Appointment <ExternalLink className="w-4 h-4" />
                                </a>

                                <div className="space-y-3 mt-6">
                                    <a href="mailto:lrc@urbancollege.edu" className="flex items-center gap-3 text-gray-600 hover:text-ucb-blue transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        lrc@urbancollege.edu
                                    </a>
                                    <a href="tel:617-449-7070" className="flex items-center gap-3 text-gray-600 hover:text-ucb-blue transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        617-449-7070
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-ucb-black mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Everything you need to know about the Learning Resource Center.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openIndex === idx
                                    ? 'shadow-lg border-ucb-blue/30'
                                    : 'shadow-sm border-gray-100 hover:border-ucb-blue/20'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex justify-between items-center p-6 text-left transition-colors"
                                >
                                    <span className={`font-bold text-lg transition-colors pr-8 ${openIndex === idx ? 'text-ucb-blue' : 'text-ucb-black'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === idx ? 'bg-ucb-blue text-white rotate-180' : 'bg-gray-100 text-ucb-black'}`}>
                                        {openIndex === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                    </div>
                                </button>

                                <div className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Simple globe icon for bg
const GlobeIcon: React.FC<any> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);

export default LearningResourceCenter;
