import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    Award, BookOpen, Clock, Globe, Users, DollarSign, GraduationCap, 
    CheckCircle, Calendar, ChevronRight, Heart, ArrowRight, Quote, ShieldCheck 
} from 'lucide-react';

// Custom Message Circle Icon for Bilingual
const MessageCircleIcon: React.ElementType = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
);

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const milestones = [
        { year: "1993", title: "Urban College Founded", desc: "Established by ABCD to serve Boston's diverse, low-income communities and create an accessible pathway to higher education." },
        { year: "1996", title: "First Commencement", desc: "Held our first graduation ceremony with 4 proud graduates, establishing a legacy of success." },
        { year: "2000s", title: "Multilingual Expansion", desc: "Significantly expanded curriculum to offer courses in Spanish and Mandarin, validating students' native languages." },
        { year: "2010s", title: "HSI Federal Designation", desc: "Designated as a Hispanic-Serving Institution (HSI), strengthening our support infrastructure for diverse learners." },
        { year: "2020s", title: "Fully Online Transition", desc: "Transitioned to 100% online instruction to offer maximum flexibility for working adults and parent students." },
        { year: "2023", title: "Celebrating 30 Years", desc: "Celebrated three decades of transformation, graduating 72 students at our annual Commencement ceremony." }
    ];

    const stats = [
        { value: "1,100+", label: "Students Enrolled", icon: Users, color: "text-ucb-blue bg-blue-50" },
        { value: "30+", label: "Years of Service", icon: Calendar, color: "text-ucb-orange bg-orange-50" },
        { value: "70%+", label: "Speak English as a Second Language", icon: Globe, color: "text-ucb-teal bg-teal-50" },
        { value: "37", label: "Average Student Age", icon: Clock, color: "text-ucb-blue bg-blue-50" },
        { value: "92%", label: "Women Students", icon: Heart, color: "text-red-500 bg-red-50" },
        { value: "3", label: "Languages Offered", icon: GraduationCap, color: "text-ucb-emerald bg-emerald-50", sub: "English, Spanish, Mandarin" }
    ];

    const demographics = [
        { name: "Hispanic or Latinx", percentage: 59, color: "bg-ucb-orange" },
        { name: "Black or African American", percentage: 14, color: "bg-ucb-blue" },
        { name: "Asian", percentage: 10, color: "bg-ucb-teal" },
        { name: "White", percentage: 6, color: "bg-gray-400" },
        { name: "Other or Not Indicated", percentage: 11, color: "bg-gray-300" }
    ];

    const diffFeatures = [
        {
            title: "Multilingual Education",
            desc: "Take courses in English, Spanish, or Mandarin while strengthening your English language skills. Supported by robust ESL resources.",
            icon: MessageCircleIcon,
            color: "text-ucb-blue bg-blue-50/50"
        },
        {
            title: "Flexible & Online",
            desc: "Learn 100% online with both live virtual classrooms and flexible, self-paced study options. Built to fit your busy life.",
            icon: Clock,
            color: "text-ucb-orange bg-orange-50/50"
        },
        {
            title: "Radical Affordability",
            desc: "Low-cost tuition combined with state, federal, and private grants. Most of our students graduate completely debt-free.",
            icon: DollarSign,
            color: "text-ucb-emerald bg-emerald-50/50"
        },
        {
            title: "Supportive Community",
            desc: "From your initial application all the way to graduation, you are never alone. Our advisors guide you every single step.",
            icon: Users,
            color: "text-ucb-teal bg-teal-50/50"
        }
    ];

    const supportServices = [
        { title: "Admissions guidance", desc: "Help with your application, document submission, and enrollment steps." },
        { title: "Financial aid support", desc: "Expert assistance navigating grants, aid, and scholarship options." },
        { title: "Academic advising", desc: "Personalized, 1-on-1 guidance for degree planning and course selection." },
        { title: "Free tutoring", desc: "Available in any subject area to ensure you master course content." },
        { title: "English Language support", desc: "Tailored to multilingual learners, building confidence and academic skill." },
        { title: "Technology support", desc: "Help learning how to navigate online portals and study successfully online." },
        { title: "Career services", desc: "Resume building, interview preparation, and direct job search assistance." },
        { title: "Post-graduation pathways", desc: "Guidance for transferring to a 4-year bachelor's degree or entering the workforce." }
    ];

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/50">
            <PageHeader 
                title="About Urban College"
                subtitle="Opening New Pathways to Opportunity Since 1993"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'About Us' }
                ]}
                imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop"
            />

            {/* Intro Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="inline-block px-4 py-1.5 bg-ucb-orange/10 text-ucb-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                        Embrace Your Dreams. Empower Your Life.
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-ucb-blue mb-6">
                        Welcome to Urban College of Boston
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                        Urban College of Boston is a private, nonprofit institution that opens new pathways to opportunity through individualized, supportive, and multilingual education.
                    </p>
                    <p className="text-gray-500 leading-relaxed">
                        We're committed to empowering you to boldly pursue your dreams and lead within your communities. With our multilingual community and affordable online classes, we provide a supportive learning environment that guides you every step of the way. Together, let's turn your dreams into achievements.
                    </p>
                </div>
            </section>

            {/* Mission & Vision side-by-side callout */}
            <section className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-ucb-blue flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <span className="inline-block px-3 py-1 bg-ucb-blue/10 text-ucb-blue text-[10px] font-bold uppercase tracking-wider rounded-full mb-4">
                                    Our Core Purpose
                                </span>
                                <h3 className="text-2xl font-display font-bold text-ucb-blue mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    Urban College of Boston opens new pathways to opportunity through individualized, supportive, and multilingual education that prepares a diverse community of learners to pursue career advancement and transform their lives.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-ucb-orange flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <span className="inline-block px-3 py-1 bg-ucb-orange/10 text-ucb-orange text-[10px] font-bold uppercase tracking-wider rounded-full mb-4">
                                    Our Aspiration
                                </span>
                                <h3 className="text-2xl font-display font-bold text-ucb-orange mb-4">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    Urban College of Boston graduates are gainfully employed (well-paying jobs), leading in their communities, and on the path to building financial security for themselves and their families.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History & Key Milestones Timeline */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Our History</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue mb-4">Over 30 Years of Service</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                            Founded in 1993 by Action for Boston Community Development (ABCD), a leading Boston-based anti-poverty agency, Urban College of Boston was created with a clear purpose: to make higher education accessible to those who need it most.
                        </p>
                        <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm font-light">
                            For over 30 years, we have remained committed to serving diverse, multilingual learners—many of whom are working adults, parents, and first-generation college students. What started as a small program has grown into a fully accredited institution that has transformed thousands of lives.
                        </p>
                    </div>

                    {/* Timeline Component */}
                    <div className="relative border-l-2 border-gray-100 ml-4 md:ml-32 mt-12 space-y-10">
                        {milestones.map((item, idx) => (
                            <div key={idx} className="relative group">
                                {/* Left Year label for desktop */}
                                <div className="hidden md:block absolute -left-32 top-0.5 text-right w-24">
                                    <span className="font-display font-black text-2xl text-ucb-orange group-hover:scale-110 transition-transform inline-block">
                                        {item.year}
                                    </span>
                                </div>
                                {/* Bullet indicator */}
                                <div className="absolute -left-1.5 top-2.5 w-3 h-3 rounded-full bg-white border-2 border-ucb-orange group-hover:bg-ucb-orange group-hover:scale-125 transition-all duration-300" />
                                
                                <div className="pl-6 md:pl-8">
                                    <span className="md:hidden font-display font-black text-lg text-ucb-orange block mb-1">
                                        {item.year}
                                    </span>
                                    <h4 className="font-display font-bold text-lg text-ucb-blue mb-1.5 group-hover:text-ucb-orange transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* At a Glance Stats */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">At a Glance</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Urban College by the Numbers</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stats.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-display font-black text-3xl text-ucb-blue">{item.value}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-800 leading-snug">{item.label}</p>
                                    {item.sub && <p className="text-xs text-gray-400 mt-1">{item.sub}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Diverse Community Demographics */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5">
                            <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Our Student Body</span>
                            <h2 className="text-3xl font-display font-bold text-ucb-blue mb-4">Our Diverse Community</h2>
                            <p className="text-gray-500 leading-relaxed font-light text-sm mb-4">
                                Urban College is proud to be a federally designated minority-serving institution and Hispanic-Serving Institution (HSI).
                            </p>
                            <p className="text-gray-500 leading-relaxed font-light text-sm">
                                Students range in age from 15 to 75. Whether you're a high school student interested in dual enrollment, have been out of school for decades, or are anywhere in between, you are welcome at Urban College.
                            </p>
                        </div>
                        <div className="lg:col-span-7 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                            <h4 className="font-bold text-ucb-blue text-sm uppercase tracking-wider mb-6 pb-2 border-b border-gray-200/50">Racial & Ethnic Distribution</h4>
                            <div className="space-y-4">
                                {demographics.map((item, idx) => (
                                    <div key={idx} className="space-y-1">
                                        <div className="flex justify-between text-xs font-semibold text-gray-700">
                                            <span>{item.name}</span>
                                            <span>{item.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percentage}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Urban College Different */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Our Strengths</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">What Makes Us Different</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {diffFeatures.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
                                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shrink-0`}>
                                    <item.icon className="w-6 h-6 text-ucb-blue" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Accreditation */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h3 className="text-2xl font-display font-bold text-ucb-blue mb-8">Accreditation & Recognition</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { title: "NECHE Accredited", desc: "Accredited by the New England Commission of Higher Education" },
                            { title: "Designated HSI", desc: "Federally Designated Hispanic-Serving Institution" },
                            { title: "501(c)(3) Nonprofit", desc: "Private, nonprofit community-focused institution" }
                        ].map((item, idx) => (
                            <div key={idx} className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 flex flex-col justify-center items-center">
                                <ShieldCheck className="w-8 h-8 text-ucb-orange mb-2" />
                                <h4 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Through Graduation */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Student Support</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Support Through Graduation</h2>
                        <p className="text-gray-500 mt-2 font-light">We provide dedicated guidance and services throughout your entire time with us.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportServices.map((service, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                                <div className="space-y-2">
                                    <CheckCircle className="w-5 h-5 text-ucb-emerald shrink-0" />
                                    <h4 className="font-bold text-sm text-gray-900 leading-snug">{service.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed font-light">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <Quote className="w-12 h-12 text-ucb-orange/30 mx-auto mb-6" />
                    <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic mb-6">
                        “Urban College is special because so many of the faculty and staff have life stories that mirror the students. It's diverse, with many being first-generation college graduates themselves. It makes the environment uniquely supportive and empathetic.”
                    </blockquote>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-ucb-orange/10 flex items-center justify-center text-ucb-orange font-bold">
                            K
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-ucb-blue text-sm">Krystal Ray Jackson</h4>
                            <p className="text-xs text-gray-400">Student Testimony</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA & Partner with Us Section */}
            <section className="py-16 bg-gradient-to-r from-ucb-blue to-blue-950 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Student CTA */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-display font-bold">Ready to Join Our Community?</h2>
                            <p className="opacity-90 leading-relaxed text-sm font-light">
                                Whether you're looking to advance your career, explore a new path, or start your college journey—we're here to help you succeed.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link to="#" className="inline-flex justify-center items-center bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-2.5 px-6 rounded-full text-xs uppercase tracking-wider transition-colors min-h-[44px]">
                                    Apply Now (Free) <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                </Link>
                                <Link to="/programs" className="inline-flex justify-center items-center bg-white hover:bg-gray-100 text-ucb-blue font-bold py-2.5 px-6 rounded-full text-xs uppercase tracking-wider transition-colors min-h-[44px]">
                                    Explore Programs
                                </Link>
                            </div>
                        </div>

                        {/* Partner CTA */}
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-6">
                            <h3 className="text-2xl font-bold">Partner With Us</h3>
                            <p className="opacity-90 leading-relaxed text-sm font-light">
                                Urban College's mission is made possible through critical partnerships with employers, community organizations, and supporters who share our commitment to accessible education.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link to="#" className="inline-flex justify-center items-center border border-white hover:bg-white hover:text-ucb-blue font-bold py-2 px-4 rounded-full text-[10px] uppercase tracking-wider transition-colors min-h-[44px]">
                                    Learn About Partnerships
                                </Link>
                                <Link to="#" className="inline-flex justify-center items-center bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-2 px-4 rounded-full text-[10px] uppercase tracking-wider transition-colors min-h-[44px]">
                                    Support Our Mission (Donate)
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links Footer Block */}
            <section className="py-12 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h4 className="font-bold text-ucb-blue text-sm uppercase tracking-wider mb-6 text-center">Learn More About Urban College</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                        {[
                            { name: "Academic Programs", path: "/programs" },
                            { name: "Administration & Leadership", path: "#" },
                            { name: "Accreditation", path: "#" },
                            { name: "Board of Trustees", path: "#" },
                            { name: "Urban College Foundation", path: "#" },
                            { name: "Contact Us", path: "#" }
                        ].map((link, idx) => (
                            <Link key={idx} to={link.path} className="px-4 py-3 bg-white hover:bg-ucb-blue hover:text-white border border-gray-100 rounded-xl shadow-sm text-xs font-semibold text-gray-700 transition-all flex items-center justify-center gap-1 group">
                                {link.name} <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>

                    {/* Visit Us info block */}
                    <div className="mt-12 p-6 bg-white rounded-3xl border border-gray-100 text-center space-y-2">
                        <h4 className="font-bold text-ucb-blue text-sm">Visit Us</h4>
                        <p className="text-xs text-gray-500 font-light">
                            Urban College of Boston • 2 Boylston Street, 2nd Floor, Boston, MA 02116 • Phone: (617) 449-7070
                        </p>
                        <p className="text-xs text-gray-400 italic">
                            Administration Hours: Monday - Friday, 10 am - 6 pm • Campus open Wednesdays & Thursdays (remote services available Mon, Tue, Fri)
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
