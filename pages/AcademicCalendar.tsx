import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    Clock, ArrowRight, CalendarDays, Maximize2, Download, X, 
    Eye, Info, PlusCircle, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';

const AcademicCalendar: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
                setSelectedTitle(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Current Students", path: "/#students" },
        { label: "Academic Calendar" }
    ];

    const semesters = [
        {
            id: "spring-2026",
            name: "Spring 2026",
            title: "Spring 2026 Semester",
            accent: "border-ucb-blue/20 bg-ucb-blue/[0.01]",
            color: "text-ucb-blue",
            bg: "bg-ucb-blue/10",
            hoverBg: "hover:bg-ucb-blue/5",
            sessions: [
                { name: "16-Week Session (1SP)", dates: "January 20 – May 18" },
                { name: "First 8-Week Session (2SP)", dates: "January 20 – March 16" },
                { name: "Second 8-Week Session (3SP)", dates: "March 24 – May 18" }
            ],
            image: "https://images.squarespace-cdn.com/content/v1/5be099a375f9eecbf2753e8d/5bbd9c63-fc7e-4577-9b34-05a6ee1fbfbe/spring+26.PNG"
        },
        {
            id: "summer-2026",
            name: "Summer 2026",
            title: "Summer 2026 Semester",
            accent: "border-ucb-orange/20 bg-ucb-orange/[0.01]",
            color: "text-ucb-orange",
            bg: "bg-ucb-orange/10",
            hoverBg: "hover:bg-ucb-orange/5",
            sessions: [
                { name: "8-Week Session (1SU)", dates: "June 16 – August 10" }
            ],
            image: "https://images.squarespace-cdn.com/content/v1/5be099a375f9eecbf2753e8d/a4996bcf-a026-4de2-ad10-31e412b2aea2/Summer+2026+cacademic+calendar.png"
        },
        {
            id: "fall-2026",
            name: "Fall 2026",
            title: "Fall 2026 Semester",
            accent: "border-ucb-green/20 bg-ucb-green/[0.01]",
            color: "text-ucb-green",
            bg: "bg-ucb-green/10",
            hoverBg: "hover:bg-ucb-green/5",
            sessions: [
                { name: "16-Week Session (1FA)", dates: "September 1 – December 21" },
                { name: "First 8-Week Session (2FA)", dates: "September 1 – October 26" },
                { name: "Second 8-Week Session (3FA)", dates: "October 27 – December 21" }
            ],
            image: "https://images.squarespace-cdn.com/content/v1/5be099a375f9eecbf2753e8d/05079908-69f8-4e08-9195-0b14a12b03a4/Fall+2026+calendar.jpg"
        }
    ];

    const deadlines = [
        { 
            label: "Labor Day (College Closed)", 
            date: "Monday, September 1", 
            type: "holiday",
            colorClass: "bg-red-50 text-red-600 border-red-100/50",
            iconColor: "text-red-500" 
        },
        { 
            label: "Fall 2025 Classes Begin", 
            date: "Tuesday, September 2 (1FA & 2FA), Tuesday, October 28 (3FA)", 
            type: "start",
            colorClass: "bg-emerald-50 text-emerald-700 border-emerald-100/50",
            iconColor: "text-emerald-600" 
        },
        { 
            label: "Last Day to Add Courses", 
            date: "Tuesday, September 9 (1FA & 2FA), Tuesday, November 4 (3FA)", 
            type: "add",
            colorClass: "bg-blue-50 text-blue-700 border-blue-100/50",
            iconColor: "text-blue-600" 
        },
        { 
            label: "Last Day to Drop with 100% Refund", 
            date: "Tuesday, September 16 (1FA & 2FA), Tuesday, November 11 (3FA)", 
            type: "refund",
            colorClass: "bg-amber-50 text-amber-700 border-amber-100/50",
            iconColor: "text-amber-600" 
        }
    ];

    const activeSem = semesters[activeTab];

    return (
        <div className="bg-gray-50/30">
            <SEO
                title={PAGE_META.academicCalendar.title}
                description={PAGE_META.academicCalendar.description}
                canonicalPath={PAGE_META.academicCalendar.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Academic Calendar', path: PAGE_META.academicCalendar.path },
                ])}
            />
            <PageHeader
                title="Academic Calendar"
                subtitle="Track semester start dates, session lengths, add/drop deadlines, and holiday schedules for the academic year."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2936&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Timetable Grids & Tabs Selector */}
            <section className="py-16 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-12">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Semesters Timeline</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Active Semesters & Term Sessions</h2>
                        <p className="text-gray-500 mt-2">Find session schedules for standard 16-week structures and accelerated 8-week blocks.</p>
                    </ScrollAnimation>

                    {/* Interactive Tab Selector */}
                    <ScrollAnimation variant="fade-up" className="flex justify-center flex-wrap gap-2 md:gap-4 max-w-xl mx-auto">
                        {semesters.map((sem, idx) => {
                            const isActive = activeTab === idx;
                            let activeStyles = "";
                            if (idx === 0) {
                                activeStyles = isActive 
                                    ? "bg-ucb-blue text-white shadow-md border-ucb-blue scale-[1.02]" 
                                    : "bg-white text-gray-600 hover:text-ucb-blue border-gray-200 hover:border-ucb-blue/30";
                            } else if (idx === 1) {
                                activeStyles = isActive 
                                    ? "bg-ucb-orange text-white shadow-md border-ucb-orange scale-[1.02]" 
                                    : "bg-white text-gray-600 hover:text-ucb-orange border-gray-200 hover:border-ucb-orange/30";
                            } else {
                                activeStyles = isActive 
                                    ? "bg-ucb-green text-white shadow-md border-ucb-green scale-[1.02]" 
                                    : "bg-white text-gray-600 hover:text-ucb-green border-gray-200 hover:border-ucb-green/30";
                            }
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={`px-6 py-3 rounded-full font-display font-bold text-sm md:text-base border transition-all cursor-pointer min-h-[44px] ${activeStyles}`}
                                >
                                    {sem.name}
                                </button>
                            );
                        })}
                    </ScrollAnimation>

                    {/* Active Semester Details Content */}
                    <div className="pt-4">
                        <ScrollAnimation variant="fade-up" key={activeTab}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                                {/* Left Column: Sessions List */}
                                <div className="space-y-6 flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-display font-bold text-gray-800 flex items-center gap-2">
                                            <Clock className={`w-6 h-6 ${activeSem.color}`} />
                                            {activeSem.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm font-light">
                                            Below are the official session lengths and date spans for this term. Select another term above to view its schedules.
                                        </p>
                                        <div className="space-y-4 mt-6">
                                            {activeSem.sessions.map((session, sidx) => (
                                                <div 
                                                    key={sidx}
                                                    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:border-gray-200 hover:shadow transition-all"
                                                >
                                                    <div className={`w-10 h-10 rounded-xl ${activeSem.bg} ${activeSem.color} flex items-center justify-center shrink-0`}>
                                                        <CalendarDays className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <span className="text-xs font-bold text-gray-400 block tracking-wide uppercase">{session.name}</span>
                                                        <span className="text-base font-bold text-gray-800 mt-1 block">{session.dates}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Helpful Info Alert inside column */}
                                    <div className={`p-5 rounded-2xl border ${activeSem.accent} flex gap-3.5 mt-6`}>
                                        <Info className={`w-5 h-5 shrink-0 ${activeSem.color} mt-0.5`} />
                                        <div className="text-sm">
                                            <h4 className="font-bold text-gray-800">Need academic advising?</h4>
                                            <p className="text-gray-500 mt-1 font-light leading-relaxed">
                                                Contact your academic advisor to verify course offerings and schedule requirements before the registration deadline.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Calendar Image Preview Card */}
                                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-6">
                                    <div className="space-y-2">
                                        <h4 className="font-display font-bold text-lg text-gray-800">Official Calendar Image</h4>
                                        <p className="text-xs text-gray-500">Visual PDF block layout for offline download or full-screen view.</p>
                                    </div>

                                    {/* Interactive Image Frame */}
                                    <div 
                                        onClick={() => {
                                            setSelectedImage(activeSem.image);
                                            setSelectedTitle(activeSem.title);
                                        }}
                                        className="group relative cursor-zoom-in rounded-2xl overflow-hidden border border-gray-200 aspect-[4/3] bg-gray-50 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:border-gray-300"
                                    >
                                        <img 
                                            src={activeSem.image} 
                                            alt={activeSem.title} 
                                            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="bg-white text-gray-800 px-4 py-2 rounded-xl text-xs font-bold shadow flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                <Maximize2 className="w-3.5 h-3.5" />
                                                Click to Expand
                                            </span>
                                        </div>
                                    </div>

                                    {/* Image Actions */}
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => {
                                                setSelectedImage(activeSem.image);
                                                setSelectedTitle(activeSem.title);
                                            }}
                                            className="flex-1 py-3 px-4 rounded-xl border border-gray-200 bg-white font-bold text-xs text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                                        >
                                            <Eye className="w-4 h-4" />
                                            Expand Document
                                        </button>
                                        <a
                                            href={activeSem.image}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex-1 py-3 px-4 rounded-xl text-white font-bold text-xs hover:opacity-95 transition-all flex items-center justify-center gap-2 min-h-[44px] ${
                                                activeTab === 0 ? "bg-ucb-blue" : activeTab === 1 ? "bg-ucb-orange" : "bg-ucb-green"
                                            }`}
                                        >
                                            <Download className="w-4 h-4" />
                                            Download / Print
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Deadlines & Key Dates */}
            <section className="py-16 md:py-24 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl space-y-12">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Action Deadlines</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Important Deadlines & Holidays</h2>
                        <p className="text-gray-500 mt-2">Pay close attention to these dates to adjust your course load and ensure full tuition refunds.</p>
                    </ScrollAnimation>

                    <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm space-y-6">
                        {deadlines.map((deadline, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${idx * 0.05}s`}
                                className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white hover:shadow-sm transition-all gap-4"
                            >
                                <div className="flex gap-4 items-start md:items-center">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${deadline.colorClass} border`}>
                                        {deadline.type === 'holiday' && <Info className="w-5 h-5" />}
                                        {deadline.type === 'start' && <CalendarDays className="w-5 h-5" />}
                                        {deadline.type === 'add' && <PlusCircle className="w-5 h-5" />}
                                        {deadline.type === 'refund' && <AlertCircle className="w-5 h-5" />}
                                    </div>
                                    <div className="space-y-0.5">
                                        <span className="font-bold text-gray-800 text-sm leading-snug">{deadline.label}</span>
                                        <span className="text-xs text-gray-400 block md:hidden mt-1">{deadline.date}</span>
                                    </div>
                                </div>
                                <span className="hidden md:inline-block text-xs font-bold text-ucb-orange bg-ucb-orange/10 px-3.5 py-2 rounded-xl border border-ucb-orange/10 shrink-0 text-center">
                                    {deadline.date}
                                </span>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Register CTA */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-xl text-center space-y-6">
                    <ScrollAnimation variant="fade-up" className="space-y-2">
                        <div className="inline-flex p-3 bg-ucb-blue/10 text-ucb-blue rounded-full mb-2">
                            <Info className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-display font-black text-ucb-black">Ready to Register for Classes?</h2>
                        <p className="text-gray-500 text-sm font-light">
                            Navigate to our registration guide to connect with advisors and plan your next term.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fade-up" className="pt-2">
                        <Link 
                            to="/course-registration"
                            className="bg-ucb-blue text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-ucb-blue-glow hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md inline-flex items-center gap-2 min-h-[44px]"
                        >
                            Open Course Registration Guide <ArrowRight className="w-4 h-4" />
                        </Link>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Full Screen Image Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-all duration-300"
                    onClick={() => {
                        setSelectedImage(null);
                        setSelectedTitle(null);
                    }}
                >
                    <div 
                        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] md:max-h-[85vh] animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <div>
                                <h3 className="font-display font-bold text-lg text-gray-800">{selectedTitle}</h3>
                                <p className="text-xs text-gray-400 mt-0.5">Official Academic Schedule Document</p>
                            </div>
                            <button 
                                onClick={() => {
                                    setSelectedImage(null);
                                    setSelectedTitle(null);
                                }}
                                className="w-9 h-9 rounded-full bg-gray-200/50 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-all cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto flex items-center justify-center bg-gray-100/50 min-h-[300px]">
                            <img 
                                src={selectedImage} 
                                alt={selectedTitle || "Calendar Image"} 
                                className="max-h-[60vh] max-w-full object-contain rounded-lg border border-gray-200/50 shadow-sm"
                            />
                        </div>

                        {/* Modal Footer */}
                        <div className="p-5 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50">
                            <button
                                onClick={() => {
                                    setSelectedImage(null);
                                    setSelectedTitle(null);
                                }}
                                className="px-5 py-2.5 rounded-xl border border-gray-200 bg-white font-bold text-xs text-gray-600 hover:bg-gray-50 transition-all cursor-pointer min-h-[44px]"
                            >
                                Close View
                            </button>
                            <a
                                href={selectedImage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 rounded-xl bg-ucb-blue hover:bg-ucb-blue-glow text-white font-bold text-xs transition-all flex items-center gap-1.5 min-h-[44px]"
                            >
                                <Download className="w-4 h-4" />
                                Download PDF/Image
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AcademicCalendar;

