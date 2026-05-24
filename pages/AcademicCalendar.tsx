import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    Calendar, Clock, AlertTriangle, ArrowRight, CheckCircle,
    Info, CalendarDays
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademicCalendar: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Current Students", path: "/#students" },
        { label: "Academic Calendar" }
    ];

    const semesters = [
        {
            title: "Spring 2026 Semester",
            accent: "border-ucb-blue/20 bg-ucb-blue/[0.01]",
            color: "text-ucb-blue",
            bg: "bg-ucb-blue/10",
            sessions: [
                { name: "16-Week Session (1SP)", dates: "January 20 – May 18" },
                { name: "First 8-Week Session (2SP)", dates: "January 20 – March 16" },
                { name: "Second 8-Week Session (3SP)", dates: "March 24 – May 18" }
            ]
        },
        {
            title: "Summer 2026 Semester",
            accent: "border-ucb-orange/20 bg-ucb-orange/[0.01]",
            color: "text-ucb-orange",
            bg: "bg-ucb-orange/10",
            sessions: [
                { name: "8-Week Session (1SU)", dates: "June 16 – August 10" }
            ]
        },
        {
            title: "Fall 2026 Semester",
            accent: "border-ucb-green/20 bg-ucb-green/[0.01]",
            color: "text-ucb-green",
            bg: "bg-ucb-green/10",
            sessions: [
                { name: "16-Week Session (1FA)", dates: "September 1 – December 21" },
                { name: "First 8-Week Session (2FA)", dates: "September 1 – October 26" },
                { name: "Second 8-Week Session (3FA)", dates: "October 27 – December 21" }
            ]
        }
    ];

    const deadlines = [
        { label: "Labor Day (College Closed)", date: "Monday, September 1" },
        { label: "Fall 2025 Classes Begin", date: "Tuesday, September 2 (1FA & 2FA), Tuesday, October 28 (3FA)" },
        { label: "Last Day to Add Courses", date: "Tuesday, September 9 (1FA & 2FA), Tuesday, November 4 (3FA)" },
        { label: "Last Day to Drop with 100% Refund", date: "Tuesday, September 16 (1FA & 2FA), Tuesday, November 11 (3FA)" }
    ];

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30">
            <PageHeader
                title="Academic Calendar"
                subtitle="Track semester start dates, session lengths, add/drop deadlines, and holiday schedules for the academic year."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2936&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Timetable Grids */}
            <section className="py-16 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-12">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Semesters Timeline</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Active Semesters & Term Sessions</h2>
                        <p className="text-gray-500 mt-2">Find session schedules for standard 16-week structures and accelerated 8-week blocks.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {semesters.map((sem, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${idx * 0.1}s`}
                                className={`rounded-3xl p-8 border shadow-sm flex flex-col justify-between hover:shadow-md transition-all ${sem.accent}`}
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl ${sem.bg} ${sem.color} flex items-center justify-center shrink-0`}>
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-gray-800 leading-tight">{sem.title}</h3>
                                    </div>

                                    <div className="space-y-4">
                                        {sem.sessions.map((session, sidx) => (
                                            <div key={sidx} className="space-y-1">
                                                <span className="text-xs font-bold text-gray-400 block tracking-wide uppercase">{session.name}</span>
                                                <span className="text-sm font-semibold text-gray-700 block">{session.dates}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
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

                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                        {deadlines.map((deadline, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${idx * 0.05}s`}
                                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border border-gray-50 hover:border-ucb-blue/20 bg-white shadow-sm transition-all gap-4"
                            >
                                <div className="flex gap-3 items-center">
                                    <div className="w-9 h-9 rounded-lg bg-ucb-blue/5 flex items-center justify-center text-ucb-blue shrink-0">
                                        <CalendarDays className="w-4.5 h-4.5" />
                                    </div>
                                    <span className="font-semibold text-gray-800 text-sm leading-tight">{deadline.label}</span>
                                </div>
                                <span className="text-xs font-bold text-ucb-orange bg-ucb-orange/10 px-3.5 py-1.5 rounded-xl border border-ucb-orange/10 shrink-0 text-center">
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
        </div>
    );
};

export default AcademicCalendar;
