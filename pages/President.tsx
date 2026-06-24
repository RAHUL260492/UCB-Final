import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    Mail, Globe, Award, BookOpen, Users, CheckCircle, Heart,
    Calendar, ChevronRight, GraduationCap, Building, Sparkles,
    MapPin, ExternalLink, Briefcase, Info, ArrowRight, Quote, Instagram
} from 'lucide-react';

const President: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "About Urban College", path: "/about" },
        { label: "Office of the President" }
    ];

    const areasOfFocus = [
        {
            title: "Accessible, Affordable Education",
            desc: "Urban College is committed to removing financial barriers to education through its low-cost tuition, a variety of financial aid options, and a focus on making higher education affordable for all. Education should be accessible to everyone—regardless of their economic circumstances.",
            icon: DollarIcon,
            color: "text-ucb-blue bg-blue-50"
        },
        {
            title: "Multilingual & Inclusive Education",
            desc: "As a federally designated Hispanic-Serving Institution (HSI), Urban College proudly serves a diverse community of learners. We offer courses in English, Spanish, and Mandarin, with comprehensive English language learning support. Our students' multilingual backgrounds are assets, not obstacles.",
            icon: Globe,
            color: "text-ucb-orange bg-orange-50"
        },
        {
            title: "Career-Focused Pathways",
            desc: "Every Urban College program is designed with career outcomes in mind. Our stackable credentials—certificates that build into associate degrees that transfer to bachelor's programs—create clear pathways to economic mobility. We prepare our graduates not just for jobs, but for meaningful careers and financial security.",
            icon: Briefcase,
            color: "text-ucb-teal bg-teal-50"
        },
        {
            title: "Student-Centered Support",
            desc: "We believe education should fit into our students' busy lives—not complicate them. With 100% online programs, flexible scheduling, 1-on-1 advising, free tutoring, and comprehensive support services, we meet students where they are and help support their success. At Urban College, you're not just a student—you're part of our community.",
            icon: Users,
            color: "text-ucb-emerald bg-emerald-50"
        }
    ];

    const boards = [
        "Board of Directors, American Association of Colleges and Universities (AAC&U)",
        "Board Chair, Mass Humanities",
        "Board Member, Double Edge Theater",
        "Advisory Board, Eaglebrook School",
        "Advisory Board, Codman Academy",
        "Accountability and Assistance Advisory Council, Massachusetts Department of Elementary and Secondary Education",
        "Steering Committee, Federal Reserve Bank of Boston's Inclusive Economies Initiative",
        "Editorial Board, Wiley's New Directions for Community College journal"
    ];

    const pastBoards = [
        "Community Development Advisory Council, Federal Reserve Bank of Boston",
        "Corporator, Greenfield Cooperative Bank",
        "Reviewer, National Science Foundation and Johns Hopkins University Press"
    ];

    return (
        <div>
            <SEO
                title={PAGE_META.president.title}
                description={PAGE_META.president.description}
                canonicalPath={PAGE_META.president.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Office of the President', path: PAGE_META.president.path },
                ])}
            />
            <PageHeader 
                title="Office of the President" 
                subtitle="Leading Urban College's mission of access, opportunity, and transformation."
                breadcrumbs={breadcrumbs}
            />

            {/* Message section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Photo Column */}
                        <div className="lg:col-span-5">
                            <ScrollAnimation variant="slide-right">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-ucb-blue/20 to-transparent rounded-3xl z-10 transition-opacity duration-300"></div>
                                    <img
                                        src="/assets/images/staff/yves-salomon-fernandez.jpg"
                                        alt="Dr. Yves Salomon-Fernández"
                                        className="w-full h-auto object-cover rounded-3xl shadow-xl border border-gray-100 group-hover:scale-[1.01] transition-transform duration-500"
                                    />
                                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ucb-gold/10 rounded-full blur-2xl -z-10"></div>
                                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-ucb-blue/10 rounded-full blur-2xl -z-10"></div>
                                </div>
                                <div className="mt-8 text-center lg:text-left bg-gray-50 border border-gray-100 rounded-2xl p-6">
                                    <h3 className="font-display font-bold text-xl text-ucb-blue">Dr. Yves Salomon-Fernández</h3>
                                    <p className="text-gray-500 text-sm mt-1">President, Urban College of Boston</p>
                                    <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                                        <span className="bg-ucb-blue/10 text-ucb-blue text-xs font-semibold px-2.5 py-1 rounded-full">
                                            President since 2023
                                        </span>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Message Column */}
                        <div className="lg:col-span-7 space-y-6">
                            <ScrollAnimation variant="slide-left">
                                <span className="inline-block px-3 py-1 bg-ucb-blue/10 text-ucb-blue text-[10px] font-bold uppercase tracking-wider rounded-full mb-2">
                                    Institutional Leadership
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ucb-blue leading-tight">
                                    A Message from President Salomon-Fernández
                                </h2>
                                <div className="h-1 w-20 bg-ucb-orange rounded-full mt-4"></div>
                            </ScrollAnimation>

                            <ScrollAnimation variant="fade-up" className="text-gray-600 text-sm md:text-base space-y-6 leading-relaxed font-light">
                                <p className="font-medium text-gray-800 text-base md:text-lg italic">
                                    "It is my honor and privilege to serve as the President of Urban College of Boston."
                                </p>
                                <p>
                                    For over 30 years, Urban College of Boston has been educating students who are too often overlooked by traditional institutions—working adults, parents, immigrants, and first-generation college students who bring incredible resilience, determination, and talent to our community. With instruction in English, Spanish, and Mandarin (as well as Portuguese and Haitian Creole in contract courses), learners who have called our communities home for centuries and those building their English language proficiency gain the skills employers need and participate as citizens in their local communities.
                                </p>
                                <p>
                                    I understand our students’ journey because I have lived it. As someone who emigrated from Haiti with my family, I know firsthand the transformative power of education. I also know the barriers that can stand in the way and the importance of having people who believe in you along the path.
                                </p>
                                <p>
                                    At Urban College, we believe in you. We believe that your dreams are achievable. We believe that your background is not a barrier—it's a strength. And we believe that with the right support, you can achieve your goals and strive for more than you might imagine.
                                </p>
                                <p>
                                    Our mission is clear: to provide individualized, supportive, and multilingual education that prepares our diverse community of learners for career advancement and personal transformation. Every day, I am inspired by our students who balance work, family, and education—and who persist despite every obstacle. They are why we do this work.
                                </p>
                                <p>
                                    Whether you are considering Urban College for the first time, are a current or returning student working toward your goals, or are a partner or stakeholder invested in our mission, I invite you to join us in this important work. Together, we are building a future where education opens doors for everyone.
                                </p>
                                <div className="pt-4">
                                    <p className="font-semibold text-gray-800">Dr. Yves Salomon-Fernández</p>
                                    <p className="text-sm text-gray-500">President, Urban College of Boston</p>
                                    <p className="text-ucb-orange font-semibold italic mt-2 text-base">"Embrace your dreams. Empower your life."</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas of Focus */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <span className="inline-block px-3 py-1 bg-ucb-orange/10 text-ucb-orange text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                            Strategic Initiatives
                        </span>
                        <h2 className="text-3xl font-display font-extrabold text-ucb-blue mb-4">Areas of Focus</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light mb-12">
                            President Salomon-Fernández is committed to advancing Urban College's mission through strategic initiatives that directly impact student success:
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {areasOfFocus.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <ScrollAnimation key={index} variant="fade-up" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${area.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-ucb-blue mb-3">{area.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed font-light">{area.desc}</p>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ScrollAnimation variant="slide-right" className="bg-gradient-to-br from-ucb-blue to-blue-900 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
                            <div className="absolute right-0 bottom-0 opacity-10 translate-y-1/4 translate-x-1/4">
                                <Sparkles className="w-48 h-48" />
                            </div>
                            <div className="relative z-10 space-y-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-ucb-gold" />
                                </div>
                                <h3 className="font-display font-bold text-xl uppercase tracking-wider">Our Mission</h3>
                                <p className="opacity-90 text-sm leading-relaxed font-light">
                                    Urban College of Boston opens new pathways to opportunity through individualized, supportive, and multilingual education that prepares a diverse community of learners to pursue career advancement and transform their lives.
                                </p>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="bg-gradient-to-br from-ucb-orange to-orange-700 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
                            <div className="absolute right-0 bottom-0 opacity-10 translate-y-1/4 translate-x-1/4">
                                <Globe className="w-48 h-48" />
                            </div>
                            <div className="relative z-10 space-y-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="font-display font-bold text-xl uppercase tracking-wider">Our Vision</h3>
                                <p className="opacity-90 text-sm leading-relaxed font-light">
                                    Urban College of Boston graduates are gainfully employed, leading in their communities, and on the path to building financial security for themselves and their families.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Biography & Achievements */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Profile Info Side */}
                        <div className="lg:col-span-8 space-y-8">
                            <ScrollAnimation variant="fade-up" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                                <h3 className="text-2xl font-display font-extrabold text-ucb-blue">
                                    About Dr. Yves Salomon-Fernández
                                </h3>
                                <div className="h-1 w-12 bg-ucb-orange rounded-full"></div>
                                
                                <div className="text-gray-600 text-sm leading-relaxed font-light space-y-4">
                                    <p>
                                        Dr. Yves (Eve) Salomon-Fernández became the President of Urban College of Boston in August 2023. Like many of our students, she is an immigrant and a former bilingual education student. Higher education transformed her life, took her all over the world to study and work, and put her on the path to becoming our President. Yves is committed to ensuring that every student at Urban College is put on a path to achieve at the highest level in their career.
                                    </p>
                                    <p>
                                        Yves is a <a href="https://www.youtube.com/watch?v=Ha4mtT8oSZc" target="_blank" rel="noreferrer" className="text-ucb-orange hover:underline font-medium">TEDx speaker</a>, a survivor of domestic violence, a mom, and a strong believer in the power of community. In 2026, she was named an Aspen Institute Presidents Fellow. That same year, she was inducted into the Boston YWCA's Academy of Women Achievers. In 2024, the Boston Business Journal named her a Power 50 Leader.
                                    </p>
                                    <p>
                                        Dr. Salomon-Fernández is a scholar-practitioner who speaks and publishes on topics related to innovation in higher education, women's career mobility, access and equity, and the future of work. She serves as a peer reviewer for Johns Hopkins University Press and is a member of the Editorial Board of Wiley Publishing's New Directions for Community Colleges. She previously served on the Federal Reserve Bank of Boston's Community Development Advisory Committee and currently serves on the boards of Immigrant Family Services Institute, ALL IN Campus Democracy Challenge, College Unbound, and co-chairs the board of Double Edge Theater.
                                    </p>
                                    <p>
                                        Yves previously served as President of Greenfield Community College, Cumberland County College, and Senior Vice President of Operations Planning at Southern New Hampshire University. Her international work includes serving as a consultant for the Bermuda Ministry of Education and the United Nations in Mexico.
                                    </p>
                                    <p>
                                        Dr. Salomon-Fernández earned her Ph.D. from Boston College, an MSc from the London School of Economics, and a B.A. from the University of Massachusetts Boston. Learn more on her website <a href="https://prezyves.org/" target="_blank" rel="noreferrer" className="text-ucb-orange hover:underline font-medium">prezyves.org</a>.
                                    </p>
                                </div>
                            </ScrollAnimation>

                            {/* Service and Leadership Card */}
                            <ScrollAnimation variant="fade-up" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                                <h3 className="text-xl font-display font-bold text-ucb-blue">
                                    Service & Leadership
                                </h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs uppercase font-bold text-ucb-orange tracking-wider mb-3">
                                            Current Board & Advisory Positions
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-600 font-light">
                                            {boards.map((b, i) => (
                                                <li key={i} className="flex items-start gap-2.5">
                                                    <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100">
                                        <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-3">
                                            Past Service
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-600 font-light">
                                            {pastBoards.map((pb, i) => (
                                                <li key={i} className="flex items-start gap-2.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                                                    <span>{pb}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Education/Stats Side */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Academic Qualifications */}
                            <ScrollAnimation variant="slide-left" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                                <h3 className="text-lg font-display font-bold text-ucb-blue flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-ucb-orange" />
                                    Education
                                </h3>
                                <ul className="space-y-4">
                                    <li className="border-l-2 border-ucb-blue/30 pl-4 py-1">
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Ph.D.</p>
                                        <p className="font-bold text-sm text-ucb-blue">Boston College</p>
                                    </li>
                                    <li className="border-l-2 border-ucb-blue/30 pl-4 py-1">
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">M.Sc.</p>
                                        <p className="font-bold text-sm text-ucb-blue">London School of Economics</p>
                                    </li>
                                    <li className="border-l-2 border-ucb-blue/30 pl-4 py-1">
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Certificate</p>
                                        <p className="font-bold text-sm text-ucb-blue">University of Oxford</p>
                                    </li>
                                    <li className="border-l-2 border-ucb-blue/30 pl-4 py-1">
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">B.A.</p>
                                        <p className="font-bold text-sm text-ucb-blue">University of Massachusetts Boston</p>
                                    </li>
                                </ul>
                            </ScrollAnimation>

                            {/* Languages */}
                            <ScrollAnimation variant="slide-left" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
                                <h3 className="text-lg font-display font-bold text-ucb-blue flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-ucb-teal" />
                                    Languages
                                </h3>
                                <p className="text-sm text-gray-600 font-light leading-relaxed">
                                    Fluent in English, Haitian Creole, French, and Spanish
                                </p>
                            </ScrollAnimation>

                            {/* Background */}
                            <ScrollAnimation variant="slide-left" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
                                <h3 className="text-lg font-display font-bold text-ucb-blue flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-red-500" />
                                    Background
                                </h3>
                                <p className="text-sm text-gray-600 font-light leading-relaxed">
                                    Dr. Salomon-Fernández emigrated with her family from Haiti and is a graduate of Boston Latin School. Her personal journey—from immigrant student to college president—reflects the transformative power of education that Urban College strives to provide for every student.
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connect Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up" className="bg-gradient-to-r from-ucb-blue/5 to-ucb-teal/5 border border-ucb-blue/10 rounded-3xl p-8 text-center space-y-6">
                        <div className="w-12 h-12 rounded-full bg-ucb-blue/10 flex items-center justify-center mx-auto">
                            <Mail className="w-6 h-6 text-ucb-blue" />
                        </div>
                        <h3 className="text-2xl font-display font-extrabold text-ucb-blue">
                            Connect with President Salomon-Fernández
                        </h3>
                        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed">
                            President Salomon-Fernández welcomes your feedback, questions, and ideas. Reach out through the following channels:
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            <a 
                                href="http://www.prezyves.org" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex flex-col items-center justify-center bg-white border border-gray-100 hover:border-ucb-blue/30 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group min-h-[120px]"
                            >
                                <Globe className="w-6 h-6 text-ucb-teal mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Website</span>
                                <span className="text-xs font-bold text-ucb-blue mt-1 truncate max-w-full">prezyves.org</span>
                            </a>
                            
                            <a
                                href="https://www.instagram.com/prezyves/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center bg-white border border-gray-100 hover:border-ucb-blue/30 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group min-h-[120px]"
                            >
                                <Instagram className="w-6 h-6 text-gray-800 mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Social Media</span>
                                <span className="text-xs font-bold text-ucb-blue mt-1">@PrezYves</span>
                            </a>

                            <a 
                                href="mailto:president@urbancollege.edu"
                                className="flex flex-col items-center justify-center bg-white border border-gray-100 hover:border-ucb-blue/30 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group min-h-[120px]"
                            >
                                <Mail className="w-6 h-6 text-ucb-orange mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email</span>
                                <span className="text-xs font-bold text-ucb-blue mt-1">Office of the President</span>
                            </a>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-100/50 text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
                            <Info className="w-3.5 h-3.5 inline mr-1 text-ucb-blue" />
                            <strong>Media & Speaking Inquiries:</strong> For media requests, contact the Marketing & Communications team at Urban College.
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* CTA and Institutional Links */}
            <section className="py-16 bg-gradient-to-r from-ucb-blue to-blue-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Call to Actions */}
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <h2 className="text-3xl font-display font-extrabold leading-tight">Take the Next Step</h2>
                            <p className="opacity-90 text-base font-light leading-relaxed max-w-xl">
                                Ready to transform your life through education? Join the Urban College community and discover what's possible.
                            </p>
                            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link 
                                    to="/programs" 
                                    className="bg-white text-ucb-blue hover:bg-ucb-orange hover:text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-all shadow-md min-h-[44px] flex items-center"
                                >
                                    Explore Programs <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                                <a
                                    href="https://urbancollege-28708.app451.sites.451.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-ucb-orange text-white hover:bg-ucb-orange-glow font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px] flex items-center"
                                >
                                    Apply Now - Free Application
                                </a>
                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-rfi-sidebar'))}
                                    className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-all min-h-[44px] flex items-center cursor-pointer"
                                >
                                    Request Info
                                </button>
                                <Link 
                                    to="/team" 
                                    className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-colors min-h-[44px] flex items-center"
                                >
                                    Support Our Mission <Heart className="w-3.5 h-3.5 ml-2 text-red-400 fill-red-400" />
                                </Link>
                            </div>
                        </div>

                        {/* Navigation Links Grid */}
                        <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-4">
                            <h3 className="font-display font-bold text-lg border-b border-white/10 pb-3">
                                Learn More About Urban College
                            </h3>
                            <ul className="grid grid-cols-1 gap-2 text-sm">
                                <li>
                                    <Link to="/about" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        About Urban College
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/programs" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Academic Programs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/team" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Administration & Leadership
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/team" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Board of Trustees
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/team" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Urban College Foundation
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Accreditation
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Inline helper for custom Dollar Icon
const DollarIcon: React.ElementType = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
);

export default President;
