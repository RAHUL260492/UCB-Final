import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    MapPin, Clock, Building, Compass, Bus, Car, Accessibility,
    Wifi, Printer, Monitor, ArrowRight, ExternalLink
} from 'lucide-react';

const CampusFacilities: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "About Urban College", path: "/about" },
        { label: "Campus Facilities" }
    ];

    const amenities = [
        {
            title: "Accessible Campus",
            desc: "The entire building is fully accessible. The primary second-floor campus space can be reached via elevator or stairs.",
            icon: Accessibility,
            color: "text-ucb-blue bg-ucb-blue/10"
        },
        {
            title: "Student Computer Labs",
            desc: "Get access to workstations equipped with word processing, internet access, and course-relevant software.",
            icon: Monitor,
            color: "text-ucb-orange bg-ucb-orange/10"
        },
        {
            title: "High-Speed Wi-Fi",
            desc: "Stay connected throughout the administrative areas, study lounges, and classrooms with campus-wide high-speed internet.",
            icon: Wifi,
            color: "text-ucb-green bg-ucb-green/10"
        },
        {
            title: "Printing & Copying",
            desc: "Dedicated printing and copying stations are located in the student workspace to assist with assignments.",
            icon: Printer,
            color: "text-ucb-teal bg-ucb-teal/10"
        }
    ];

    const transitLines = [
        { name: "Green Line", station: "Boylston Street Station", color: "bg-emerald-600 text-white" },
        { name: "Red Line", station: "Downtown Crossing", color: "bg-red-600 text-white" },
        { name: "Orange Line", station: "Chinatown Station", color: "bg-orange-500 text-white" },
        { name: "Silver Line", station: "Washington St. @ Essex St.", color: "bg-slate-400 text-black font-semibold" }
    ];

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30">
            <PageHeader
                title="Campus Facilities"
                subtitle="Located in the historic China Trade Center in downtown Boston, our welcoming, fully accessible campus is easily reached by multiple transit links."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Campus Layout Overview */}
            <section className="py-16 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block font-display">Instructional Spaces</span>
                                <h2 className="text-3xl md:text-4xl font-display font-black text-ucb-blue leading-tight">
                                    Our Space in the China Trade Center
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-light mt-4">
                                    Urban College of Boston's primary academic and administrative home is located on the second floor, designed to provide a highly welcoming and supportive community hub for students, faculty, and advisors.
                                </p>
                            </ScrollAnimation>

                            <ScrollAnimation variant="fade-up" delay="0.1s" className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 space-y-2">
                                    <h4 className="font-display font-bold text-gray-800 text-sm flex items-center gap-2">
                                        <Building className="w-4 h-4 text-ucb-blue" />
                                        Second Floor Spaces
                                    </h4>
                                    <p className="text-gray-500 text-xs leading-relaxed font-light">
                                        Houses our central administrative offices, collaborative student workspaces, four classrooms, a conference room, and comfortable student and faculty lounges.
                                    </p>
                                </div>
                                <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 space-y-2">
                                    <h4 className="font-display font-bold text-gray-800 text-sm flex items-center gap-2">
                                        <Building className="w-4 h-4 text-ucb-orange" />
                                        First Floor Spaces
                                    </h4>
                                    <p className="text-gray-500 text-xs leading-relaxed font-light">
                                        Features four additional classrooms fully equipped to support multimedia lecturing and cohort workshops.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Visual Card / Hours Notice */}
                        <div className="lg:col-span-5 space-y-6">
                            <ScrollAnimation variant="slide-left" className="bg-gradient-to-br from-ucb-blue to-blue-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                                <div className="relative z-10 space-y-4">
                                    <div className="inline-flex p-3 bg-white/10 rounded-2xl border border-white/15 text-ucb-gold mb-2 shadow-inner">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold">Visiting Hours</h3>
                                    <div className="space-y-3 pt-2 text-sm leading-relaxed text-blue-100 font-light border-t border-white/10">
                                        <p>
                                            <strong>Campus Hours:</strong> Open on <strong>Wednesdays and Thursdays</strong> from <strong>10:00 AM – 6:00 PM</strong>.
                                        </p>
                                        <p className="text-xs text-blue-200/80">
                                            <strong>Remote Support:</strong> Admissions, financial aid, and academic advising services are fully accessible remotely every weekday (Monday through Friday).
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Amenities */}
            <section className="py-16 md:py-24 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-12">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block font-display">Student Services & Tools</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black">Campus Resources</h2>
                        <p className="text-gray-500 mt-2 text-sm">We provide standard digital infrastructure and wheelchair access to guarantee support for all students.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {amenities.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.05}s`}
                                    className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all gap-4"
                                >
                                    <div className="space-y-4">
                                        <div className={`w-11 h-11 rounded-2xl ${item.color} flex items-center justify-center shrink-0`}>
                                            <Icon className="w-5.5 h-5.5" />
                                        </div>
                                        <h4 className="font-display font-bold text-gray-800 text-sm leading-snug">{item.title}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Directions, Transit & Parking */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-6xl space-y-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        {/* Address & Transit */}
                        <ScrollAnimation variant="slide-right" className="lg:col-span-7 space-y-8">
                            <div className="space-y-2">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display">Getting Here</span>
                                <h3 className="text-2xl md:text-3xl font-display font-black text-ucb-black">Public Transit Access</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-sm">
                                    UCB's central downtown location makes it extremely convenient to reach using multiple MBTA rapid transit subway links.
                                </p>
                            </div>

                            {/* Transit Badges */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {transitLines.map((line, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/30 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-150 flex items-center justify-center text-gray-500 shrink-0">
                                                <Compass className="w-4.5 h-4.5" />
                                            </div>
                                            <span className="text-xs font-bold text-gray-700 leading-tight">{line.station}</span>
                                        </div>
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm ${line.color}`}>
                                            {line.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 space-y-3">
                                <h4 className="font-display font-bold text-gray-800 text-sm flex items-center gap-2">
                                    <Bus className="w-4.5 h-4.5 text-ucb-blue" />
                                    Bus Line Coordinates
                                </h4>
                                <p className="text-gray-600 text-xs leading-relaxed font-light">
                                    Numerous local bus lines stop right near our doors, including the <strong>9, 11, 43, and 55</strong> routes.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Address & Parking Details */}
                        <ScrollAnimation variant="slide-left" className="lg:col-span-5 bg-gray-50 rounded-3xl p-8 border border-gray-100 space-y-6">
                            
                            {/* Address details */}
                            <div className="space-y-4">
                                <h4 className="font-display font-bold text-gray-800 text-base flex items-center gap-2 border-b border-gray-200/50 pb-2">
                                    <MapPin className="w-5 h-5 text-ucb-orange" />
                                    Campus Address
                                </h4>
                                <div className="space-y-1">
                                    <p className="font-bold text-gray-800 text-sm">Urban College of Boston</p>
                                    <p className="text-gray-500 text-xs leading-relaxed font-light">2 Boylston Street, Boston, MA 02116</p>
                                </div>
                                <a 
                                    href="https://maps.google.com/?q=2+Boylston+Street,+Boston,+MA+02116"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-ucb-blue text-white hover:bg-ucb-blue-glow px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow inline-flex items-center gap-1.5 min-h-[38px] cursor-pointer"
                                >
                                    Get Directions <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Parking Details */}
                            <div className="space-y-3 pt-6 border-t border-gray-200/60">
                                <h4 className="font-display font-bold text-gray-800 text-sm flex items-center gap-2">
                                    <Car className="w-4.5 h-4.5 text-ucb-green" />
                                    Parking Information
                                </h4>
                                <p className="text-gray-500 text-xs leading-relaxed font-light">
                                    Street parking is extremely limited in downtown Boston. There are numerous paid parking garages in the surrounding area.
                                </p>
                                <div className="p-4 bg-white border border-gray-150 rounded-xl space-y-1 mt-2">
                                    <span className="text-[9px] font-bold text-ucb-orange uppercase tracking-wider block font-display">Closest Garage</span>
                                    <p className="font-bold text-gray-700 text-xs leading-tight">Boston Common Theater District Garage</p>
                                    <p className="text-gray-400 text-[10px] leading-snug font-light">47 Boylston Street, Boston, MA 02116</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CampusFacilities;
