import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    MapPin, Clock, Building, Compass, Bus, Car, Accessibility,
    Wifi, Monitor, ArrowRight, BookOpen, Users,
    Coffee, Mail, Phone, ArrowUpRight
} from 'lucide-react';

const CampusFacilities: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "About Urban College", path: "/about" },
        { label: "Campus Facilities & Access" }
    ];

    const campusFeatures = [
        {
            title: "Second Floor Classrooms",
            desc: "4 classrooms equipped with modern technology designed for engaging, interactive learning.",
            icon: Monitor,
            color: "text-ucb-blue bg-ucb-blue/10"
        },
        {
            title: "First Floor Classrooms",
            desc: "4 additional flexible spaces perfect for seminars, workshops, and small group collaboration.",
            icon: Users,
            color: "text-ucb-orange bg-ucb-orange/10"
        },
        {
            title: "Administrative Offices",
            desc: "Home to our admissions, financial aid, and student services teams, ready to support your educational journey.",
            icon: Building,
            color: "text-ucb-green bg-ucb-green/10"
        },
        {
            title: "Student Workspaces",
            desc: "Quiet areas designed for students to study, focus on projects, or collaborate on coursework with classmates.",
            icon: BookOpen,
            color: "text-ucb-periwinkle bg-ucb-periwinkle/10"
        },
        {
            title: "Faculty & Student Lounges",
            desc: "Comfortable communal spaces to connect with peers, take a break, recharge, and build campus community.",
            icon: Coffee,
            color: "text-ucb-teal bg-ucb-teal/10"
        },
        {
            title: "Computer Access & Wi-Fi",
            desc: "Stay connected in every corner of our campus with campus-wide high-speed internet and computer workstations.",
            icon: Wifi,
            color: "text-ucb-gold bg-ucb-gold/10"
        }
    ];

    const transitLines = [
        { name: "Green Line", station: "Boylston Street station (closest stop)", color: "bg-emerald-600 text-white" },
        { name: "Red Line", station: "Downtown Crossing station", color: "bg-red-600 text-white" },
        { name: "Orange Line", station: "Chinatown station", color: "bg-orange-500 text-white" },
        { name: "Silver Line", station: "Washington St. @ Essex St. station", color: "bg-slate-400 text-black font-semibold" }
    ];

    return (
        <div className="bg-gray-50/30">
            <SEO
                title={PAGE_META.campusFacilities.title}
                description={PAGE_META.campusFacilities.description}
                canonicalPath={PAGE_META.campusFacilities.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Campus & Facilities', path: PAGE_META.campusFacilities.path },
                ])}
            />
            <PageHeader
                title="Campus Facilities & Access"
                subtitle="Conveniently Located. Fully Accessible. Ready for You."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Intro and Our Campus Section */}
            <section className="py-16 bg-white relative z-10 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8 space-y-4">
                            <ScrollAnimation variant="fade-up">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block font-display font-black">Welcome to Urban College</span>
                                <h2 className="text-3xl md:text-4xl font-display font-black text-ucb-blue leading-tight">
                                    A Welcoming Downtown Boston Campus
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-light mt-4">
                                    Urban College of Boston’s physical campus is located in the heart of downtown Boston, in the historic China Trade Center building. While all student services are available online, some students may want to visit in person. Our campus is welcoming, accessible, and easily reached by public transportation.
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className="lg:col-span-4 bg-gray-50 p-6 rounded-2xl border border-gray-150 flex flex-col justify-center space-y-3 shadow-inner">
                            <h4 className="text-sm font-bold text-ucb-blue uppercase tracking-wide">Campus Support</h4>
                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                Our staff and faculty are fully committed to creating an environment where you can study comfortably and get direct support when you need it.
                            </p>
                        </div>
                    </div>

                    <div className="pt-8">
                        <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto mb-10">
                            <h3 className="text-2xl font-display font-bold text-ucb-black">Our Campus</h3>
                            <p className="text-gray-500 mt-2 text-sm font-light">Urban College's campus is designed with students in mind. You'll find:</p>
                        </ScrollAnimation>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {campusFeatures.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <ScrollAnimation 
                                        key={idx} 
                                        variant="fade-up" 
                                        delay={`${idx * 0.05}s`}
                                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow group"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center shrink-0`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-display font-bold text-gray-800 text-base leading-snug group-hover:text-ucb-blue transition-colors">{feature.title}</h4>
                                            <p className="text-gray-500 text-xs leading-relaxed font-light">{feature.desc}</p>
                                        </div>
                                    </ScrollAnimation>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Hours Section */}
            <section className="py-16 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Location Details */}
                        <ScrollAnimation variant="slide-right" className="lg:col-span-6 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                            <div className="space-y-3">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display font-black">Where to Find Us</span>
                                <h3 className="text-2xl font-display font-black text-ucb-black flex items-center gap-2">
                                    <MapPin className="w-6 h-6 text-ucb-blue" />
                                    Location
                                </h3>
                                <p className="text-gray-500 text-sm font-light">
                                    Our campus is centrally located and easy to reach:
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 space-y-2">
                                <p className="font-bold text-gray-800 text-base">China Trade Center Building, 2nd Floor</p>
                                <p className="text-gray-600 text-sm font-light">2 Boylston Street</p>
                                <p className="text-gray-600 text-sm font-light">Boston, MA 02116</p>
                            </div>

                            <div className="pt-2">
                                <a 
                                    href="https://maps.google.com/?q=2+Boylston+Street,+Boston,+MA+02116"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-ucb-blue text-white hover:bg-ucb-blue-glow px-6 py-3 rounded-xl text-sm font-bold transition-all shadow inline-flex items-center gap-2 min-h-[44px] cursor-pointer"
                                >
                                    Get Directions on Google Maps <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </ScrollAnimation>

                        {/* Hours Details */}
                        <ScrollAnimation variant="slide-left" className="lg:col-span-6 bg-gradient-to-br from-ucb-blue to-blue-950 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                            <div className="relative z-10 space-y-6">
                                <div className="space-y-3">
                                    <span className="text-ucb-gold font-bold tracking-widest uppercase text-xs block font-display font-black">When We're Open</span>
                                    <h3 className="text-2xl font-display font-black text-white flex items-center gap-2">
                                        <Clock className="w-6 h-6 text-ucb-gold" />
                                        Campus Hours
                                    </h3>
                                    <p className="text-blue-100/80 text-sm font-light">
                                        Find our Eastern Time operating hours for virtual and in-person services below.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                    <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
                                        <span className="text-[10px] font-bold text-ucb-gold uppercase tracking-wider block font-display">Campus Hours</span>
                                        <p className="text-sm font-bold">Wednesday & Thursday</p>
                                        <p className="text-xs text-blue-100 font-light">10:00 AM – 6:00 PM EST</p>
                                    </div>
                                    <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
                                        <span className="text-[10px] font-bold text-ucb-gold uppercase tracking-wider block font-display">Remote Services</span>
                                        <p className="text-sm font-bold">Monday – Friday</p>
                                        <p className="text-xs text-blue-100 font-light">10:00 AM – 6:00 PM EST</p>
                                    </div>
                                </div>
                            </div>

                            <p className="relative z-10 text-xs text-blue-200/80 font-light border-t border-white/10 pt-4 mt-6">
                                * All student and administrative services are accessible remotely via phone, email, and video conference for your flexibility.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Accessibility Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <ScrollAnimation variant="slide-right" className="lg:col-span-6 space-y-6">
                            <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display font-black">Accessibility</span>
                            <h3 className="text-2xl md:text-3xl font-display font-black text-ucb-blue">
                                Fully Accessible Campus
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-light text-sm">
                                Urban College of Boston is fully accessible. We make it a priority to ensure that all students have full access to physical environments, technology, and resources. Our building features:
                            </p>
                            <ul className="space-y-3 pt-2">
                                <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                                    <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-ucb-blue" />
                                    Easy access to the 2nd floor via an elevator or stairs.
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                                    <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-ucb-blue" />
                                    Accessible restrooms.
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                                    <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-ucb-blue" />
                                    Nearby parking and drop-off options.
                                </li>
                            </ul>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="lg:col-span-6 bg-gradient-to-br from-gray-50 to-gray-100/50 p-8 rounded-3xl border border-gray-200/60 space-y-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-ucb-blue/10 rounded-2xl text-ucb-blue shrink-0">
                                    <Accessibility className="w-8 h-8" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-display font-bold text-gray-800 text-base leading-snug">Disability Accommodations</h4>
                                    <p className="text-xs text-gray-500 font-light">
                                        We are committed to supporting students with disabilities. If you need academic or campus accommodations, please reach out to our Accessibility Coordinator.
                                    </p>
                                </div>
                            </div>

                            <div className="p-5 rounded-2xl bg-white border border-gray-150 space-y-4">
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">Rosana Perella</p>
                                    <p className="text-xs text-gray-500 font-light">Director of Student Services and Support</p>
                                </div>
                                <div className="space-y-2 pt-2 border-t border-gray-100">
                                    <a 
                                        href="mailto:Rosana.Perella@urbancollege.edu?subject=Accessibility%20and%20Support%20Services%20Inquiry"
                                        className="flex items-center gap-2 text-xs font-semibold text-ucb-blue hover:text-ucb-orange transition-colors"
                                    >
                                        <Mail className="w-4 h-4 shrink-0 text-ucb-orange" />
                                        Rosana.Perella@urbancollege.edu
                                    </a>
                                    <a 
                                        href="tel:617-449-7380"
                                        className="flex items-center gap-2 text-xs font-semibold text-ucb-blue hover:text-ucb-orange transition-colors"
                                    >
                                        <Phone className="w-4 h-4 shrink-0 text-ucb-orange" />
                                        (617) 449-7380
                                    </a>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Getting Here: Public Transportation */}
            <section className="py-16 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl space-y-12">
                    <ScrollAnimation variant="fade-up" className="max-w-2xl">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display font-black">Transit Connections</span>
                        <h3 className="text-3xl font-display font-black text-ucb-black mt-2">Getting Here: Public Transportation</h3>
                        <p className="text-gray-600 leading-relaxed font-light text-sm mt-3">
                            Urban College is accessible via multiple transit options, making it extremely convenient for students commuting from all parts of Boston and surrounding communities.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Transit Lines Badges */}
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {transitLines.map((line, idx) => (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.05}s`}
                                    className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-white shadow-sm gap-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                                            <Compass className="w-4.5 h-4.5" />
                                        </div>
                                        <span className="text-xs font-bold text-gray-700 leading-tight">{line.station}</span>
                                    </div>
                                    <span className={`text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm shrink-0 ${line.color}`}>
                                        {line.name}
                                    </span>
                                </ScrollAnimation>
                            ))}
                        </div>

                        {/* Bus & MBTA Trip Planner Widget */}
                        <ScrollAnimation variant="slide-left" className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-5">
                            <div className="space-y-2">
                                <h4 className="font-display font-bold text-gray-800 text-sm flex items-center gap-2">
                                    <Bus className="w-4.5 h-4.5 text-ucb-blue" />
                                    Bus Lines
                                </h4>
                                <p className="text-gray-500 text-xs leading-relaxed font-light">
                                    Routes <strong>9, 11, 43, and 55</strong> pass nearby.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-gray-150">
                                <a 
                                    href="https://www.mbta.com/trip-planner" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-ucb-orange text-white hover:bg-ucb-orange-glow px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow inline-flex items-center gap-1.5 cursor-pointer min-h-[38px]"
                                >
                                    Plan your journey with MBTA Trip Planner <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Parking Details Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <ScrollAnimation variant="slide-right" className="lg:col-span-7 space-y-6">
                            <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block font-display font-black">Driver Information</span>
                            <h3 className="text-2xl md:text-3xl font-display font-black text-ucb-blue">
                                Parking
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-light text-sm">
                                Street parking in downtown Boston is limited. However, several paid parking garages are within walking distance. Many students find public transit more convenient and cost-effective.
                            </p>
                            <p className="text-gray-500 text-xs font-light leading-relaxed">
                                Additional parking garages are available throughout downtown Boston.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="lg:col-span-5 bg-gray-50 p-6 rounded-2xl border border-gray-200/60 space-y-4 shadow-sm">
                            <div className="flex items-center gap-2 text-ucb-green border-b border-gray-200/50 pb-2">
                                <Car className="w-5 h-5" />
                                <h4 className="font-display font-bold text-gray-800 text-sm">Closest Garage Option</h4>
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold text-gray-800 text-sm">Boston Common Theater District Garage</p>
                                <p className="text-gray-500 text-xs font-light">47 Boylston Street</p>
                                <p className="text-gray-500 text-xs font-light">Boston, MA 02116</p>
                                <p className="text-[10px] text-ucb-orange font-semibold pt-1">(Closest option to our building)</p>
                            </div>
                            <div className="pt-2">
                                <a 
                                    href="https://maps.google.com/?q=47+Boylston+Street,+Boston,+MA+02116"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white hover:bg-gray-100 text-gray-700 hover:text-ucb-black px-4 py-2 border border-gray-250 rounded-xl text-xs font-bold transition-all shadow-sm inline-flex items-center gap-1.5 cursor-pointer min-h-[36px]"
                                >
                                    Directions to Garage <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Visit Us Today (CTA Section) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="bg-gradient-to-br from-ucb-blue to-blue-900 text-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden text-center space-y-8">
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                        
                        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
                            <span className="text-ucb-gold font-bold tracking-widest uppercase text-xs block font-display font-black">Visit Us Today</span>
                            <h2 className="text-3xl md:text-4xl font-display font-black text-white leading-tight">
                                Visit Us Today
                            </h2>
                            <p className="text-blue-100 font-light text-sm md:text-base leading-relaxed">
                                Ready to see our campus? Schedule a tour or visit us during office hours. Our team welcomes you! We're excited to show you around and answer any questions about our programs and campus community.
                            </p>
                        </div>

                        {/* Contacts Grid */}
                        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-6 border-t border-white/10 text-xs font-semibold text-blue-50">
                            <a href="tel:617-449-7070" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                                <Phone className="w-4 h-4 text-ucb-gold shrink-0" />
                                <span>Phone: (617) 449-7070</span>
                            </a>
                            <a href="mailto:admissions@urbancollege.edu" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                                <Mail className="w-4 h-4 text-ucb-gold shrink-0" />
                                <span>Email: admissions@urbancollege.edu</span>
                            </a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                            <a 
                                href="mailto:admissions@urbancollege.edu?subject=Campus%20Tour%20Request"
                                className="w-full sm:w-auto bg-ucb-orange hover:bg-ucb-orange-glow text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-ucb-orange/20 uppercase"
                            >
                                Schedule A Tour
                            </a>
                            <a 
                                href="mailto:admissions@urbancollege.edu?subject=Admissions%20Inquiry"
                                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/45 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wider transition-colors uppercase"
                            >
                                Contact Admissions
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default CampusFacilities;
