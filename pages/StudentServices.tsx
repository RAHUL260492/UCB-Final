import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    Accessibility, FileText, CalendarCheck, HeartHandshake,
    Mail, Phone, ExternalLink, Download, AlertCircle, 
    ChevronDown, ChevronUp, Briefcase, GraduationCap, 
    Coins, Laptop, BookOpen, ArrowRight, ShieldCheck, HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';

const StudentServices: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Current Students", path: "/#students" },
        { label: "Student Services" }
    ];

    const serviceCards = [
        {
            title: "Academic Advising",
            desc: "Meet with your advisor before registration to plan your path and stay on track.",
            icon: GraduationCap,
            link: "#advising",
            badge: "Required Every Semester",
            color: "blue"
        },
        {
            title: "Learning Resource Center",
            desc: "Free tutoring, workshops, and multilingual academic support in English, Spanish, and Mandarin.",
            icon: BookOpen,
            link: "/learning-resource-center",
            badge: "Free Tutoring",
            color: "orange"
        },
        {
            title: "Financial Aid",
            desc: "Navigate FAFSA, grants, and scholarships to keep your tuition costs highly affordable.",
            icon: Coins,
            link: "/financial-aid",
            badge: "Tuition Support",
            color: "green"
        },
        {
            title: "Disability Services",
            desc: "Access for every student. Request academic and exam accommodations under the ADA.",
            icon: Accessibility,
            link: "#disability-services",
            badge: "Equal Access",
            color: "purple"
        },
        {
            title: "Career Services",
            desc: "Resume help, interview prep, internships, and job placement built into your academics.",
            icon: Briefcase,
            link: "#career-services",
            badge: "Job Ready",
            color: "orange"
        },
        {
            title: "Mental Health Resources",
            desc: "Access community resources, crisis support, and multilingual counseling referrals.",
            icon: HeartHandshake,
            link: "/mental-health",
            badge: "Personal Wellness",
            color: "blue"
        },
        {
            title: "Technology Support",
            desc: "Get guides for student email, online courses, and portal login troubleshooting.",
            icon: Laptop,
            link: "/technology-account-guide",
            badge: "Tech Assistance",
            color: "purple"
        },
        {
            title: "College Catalog & Handbook",
            desc: "Detailed campus policies, course descriptions, academic standards, and resources.",
            icon: FileText,
            link: "/college-services-and-resources",
            badge: "Official Handbook",
            color: "green"
        }
    ];

    const faqs = [
        {
            q: "How do I know which advisor I'm assigned to?",
            a: "If you haven't been connected with your advisor yet, email registration@urbancollege.edu and the Registration Services team will point you in the right direction."
        },
        {
            q: "Is tutoring really free?",
            a: "Absolutely—and there's no limit on how many sessions you can schedule. Remote tutoring is available Monday through Saturday from 11:00 AM to 7:00 PM. Book your appointment online via the LRC booking link."
        },
        {
            q: "What if I have a disability or need an accommodation?",
            a: "Contact Rosana Perella at rosana.perella@urbancollege.edu or 617-449-7380 to start the accommodation process. You can also download the Accommodation Request Form and Medical Provider Form directly from this page."
        },
        {
            q: "Who do I contact if I'm struggling personally?",
            a: "Reach out to Student Services at studentservices@urbancollege.edu or call 617-449-7380. We make referrals and maintain a list of community mental health resources at /mental-health—including crisis hotlines by county."
        }
    ];

    const handleFaqToggle = (idx: number) => {
        setOpenFaqIndex(openFaqIndex === idx ? null : idx);
    };

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/40 min-h-screen">
            <SEO
                title={PAGE_META.studentServices.title}
                description={PAGE_META.studentServices.description}
                canonicalPath={PAGE_META.studentServices.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Student Services', path: PAGE_META.studentServices.path },
                ])}
            />
            <PageHeader
                title="Student Services Overview"
                subtitle="You've got a whole team in your corner. Here's everything Urban College offers to help you thrive."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Intro / Welcome Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Always By Your Side</span>
                                <h2 className="text-3xl md:text-4xl font-display font-black text-ucb-blue leading-tight">
                                    Support Built For Your Educational Success
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-light mt-4">
                                    Urban College of Boston isn't just a place to take classes — it's a community built to help you succeed. From the moment you enroll to the day you cross the stage at graduation, we've got a team of advisors, tutors, and support specialists ready to walk alongside you.
                                </p>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    Explore what's available, save the contact info you need, and never hesitate to reach out. We are here to help.
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className="lg:col-span-5 bg-gradient-to-br from-ucb-blue to-ucb-blue-glow text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                            <div className="relative z-10 space-y-6">
                                <div className="inline-flex p-3 bg-white/10 rounded-xl text-ucb-gold border border-white/10">
                                    <AlertCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-display font-bold">Quick Sub-Pages</h3>
                                <p className="text-blue-100 text-xs leading-relaxed font-light">
                                    Explore specific campus support services, documents, and guides by clicking the links below:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
                                    <Link to="/academic-calendar-webpage" className="flex items-center gap-2 text-white hover:text-ucb-gold transition-colors">
                                        <ArrowRight className="w-3.5 h-3.5" /> Academic Calendar
                                    </Link>
                                    <Link to="/college-transfer-pathways" className="flex items-center gap-2 text-white hover:text-ucb-gold transition-colors">
                                        <ArrowRight className="w-3.5 h-3.5" /> Transfer Pathways
                                    </Link>
                                    <Link to="/learning-resource-center" className="flex items-center gap-2 text-white hover:text-ucb-gold transition-colors">
                                        <ArrowRight className="w-3.5 h-3.5" /> Learning Resource Center
                                    </Link>
                                    <Link to="/college-services-and-resources" className="flex items-center gap-2 text-white hover:text-ucb-gold transition-colors">
                                        <ArrowRight className="w-3.5 h-3.5" /> Services Handbook
                                    </Link>
                                    <Link to="/student-government" className="flex items-center gap-2 text-white hover:text-ucb-gold transition-colors">
                                        <ArrowRight className="w-3.5 h-3.5" /> Student Government
                                    </Link>
                                    <Link to="/technology-account-guide" className="flex items-center gap-2 text-white hover:text-ucb-gold transition-colors">
                                        <ArrowRight className="w-3.5 h-3.5" /> Tech Accounts Guide
                                    </Link>
                                    <Link to="/transcript-requests" className="flex items-center gap-2 text-white hover:text-ucb-gold transition-colors">
                                        <ArrowRight className="w-3.5 h-3.5" /> Transcript Requests
                                    </Link>
                                    <Link to="/commencement" className="flex items-center gap-2 text-white hover:text-ucb-gold transition-colors">
                                        <ArrowRight className="w-3.5 h-3.5" /> Commencement
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-16 md:py-24 bg-gray-50/50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs">At A Glance</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black mt-2">Your Support Services</h2>
                        <p className="text-gray-500 font-light mt-4 text-sm md:text-base">
                            Click any service to view more information or access related tools, websites, and emails.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {serviceCards.map((card, idx) => {
                            const IconComp = card.icon;
                            const isAnchor = card.link.startsWith('#');
                            const CardWrapper = isAnchor ? 'a' : Link;
                            const wrapperProps = isAnchor ? { href: card.link } : { to: card.link };

                            return (
                                <ScrollAnimation
                                    key={idx}
                                    variant="fade-up"
                                    delay={`${idx * 0.05}s`}
                                    className="h-full"
                                >
                                    {/* @ts-ignore */}
                                    <CardWrapper
                                        {...wrapperProps}
                                        className="group bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-ucb-blue/30 transition-all flex flex-col justify-between h-full hover:-translate-y-1 duration-300 block"
                                    >
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-start">
                                                <div className="inline-flex p-3 bg-ucb-blue/5 text-ucb-blue rounded-xl group-hover:bg-ucb-blue group-hover:text-white transition-all border border-ucb-blue/10">
                                                    <IconComp className="w-5 h-5" />
                                                </div>
                                                <span className="text-[9px] font-bold uppercase tracking-wider text-ucb-orange font-display px-2 py-0.5 bg-ucb-orange/10 rounded-full border border-ucb-orange/15">
                                                    {card.badge}
                                                </span>
                                            </div>
                                            <h3 className="font-display font-bold text-gray-800 group-hover:text-ucb-blue transition-colors text-base">
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-500 text-xs font-light leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1 text-[11px] font-bold text-ucb-blue mt-4 group-hover:text-ucb-orange transition-colors">
                                            <span>Learn more</span>
                                            <ChevronRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </CardWrapper>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Detailed Info Sections */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl space-y-24">
                    
                    {/* Academic Advising */}
                    <div id="advising" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-32">
                        <ScrollAnimation variant="slide-right" className="lg:col-span-7 space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-ucb-blue/5 flex items-center justify-center text-ucb-blue border border-ucb-blue/10 shrink-0">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-display font-black text-ucb-black">Academic Advising</h2>
                            <p className="text-gray-600 leading-relaxed font-light text-sm">
                                Your academic advisor is your single most important point of contact at Urban College. They help you choose the right courses, track your progress toward graduation, and plan your next steps — whether that's your next semester at Urban College or a transfer to a bachelor's program.
                            </p>
                            <div className="bg-ucb-orange/5 border border-ucb-orange/10 rounded-2xl p-5 space-y-2">
                                <span className="text-[10px] font-bold text-ucb-orange uppercase tracking-wider block font-display">Pro Tip</span>
                                <p className="text-gray-600 text-xs leading-relaxed font-light">
                                    Stay in regular contact with your advisor — don't wait until something goes wrong. The students who connect most often are the ones who succeed fastest.
                                </p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation variant="slide-left" className="lg:col-span-5 bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-4">
                            <h4 className="font-display font-bold text-gray-800 text-base">Get in Touch</h4>
                            <p className="text-gray-500 text-xs font-light leading-relaxed">
                                When it's time to register, schedule an appointment with your advisor to build your course plan and enroll.
                            </p>
                            <div className="space-y-3 pt-2">
                                <a href="mailto:registration@urbancollege.edu" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-150 text-gray-700 hover:text-ucb-blue transition-all font-semibold text-xs shadow-sm">
                                    <Mail className="w-4.5 h-4.5 text-ucb-orange" />
                                    <span>registration@urbancollege.edu</span>
                                </a>
                                <a href="mailto:admissions@urbancollege.edu" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-150 text-gray-700 hover:text-ucb-blue transition-all font-semibold text-xs shadow-sm">
                                    <Mail className="w-4.5 h-4.5 text-ucb-blue" />
                                    <span>New Students: Contact Admissions</span>
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Disability Services & Accommodations */}
                    <div id="disability-services" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-32">
                        <ScrollAnimation variant="slide-right" className="lg:col-span-5 bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-6 lg:order-2">
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-ucb-orange uppercase tracking-wider block font-display">Accessibility Coordinator</span>
                                <h4 className="text-xl font-display font-bold text-ucb-blue">Rosana Perella</h4>
                                <p className="text-gray-500 text-xs">Director of Student Services and Support</p>
                            </div>
                            <div className="space-y-3">
                                <a href="mailto:rosana.perella@urbancollege.edu" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-150 text-gray-700 hover:text-ucb-blue transition-all font-semibold text-xs shadow-sm">
                                    <Mail className="w-4.5 h-4.5 text-ucb-orange" />
                                    <span>rosana.perella@urbancollege.edu</span>
                                </a>
                                <a href="tel:617-449-7380" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-150 text-gray-700 hover:text-ucb-blue transition-all font-semibold text-xs shadow-sm">
                                    <Phone className="w-4.5 h-4.5 text-ucb-blue" />
                                    <span>617-449-7380</span>
                                </a>
                            </div>
                            <div className="space-y-2 border-t border-gray-200/50 pt-4">
                                <a href="/s/Accommodation-and-Accessibility-Process-ytyr.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-bold text-gray-600 hover:text-ucb-blue transition-colors">
                                    <span>Accommodation Guide (PDF)</span>
                                    <Download className="w-4 h-4" />
                                </a>
                                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=HnCdJ2cNiUupTrgmGCPjKzt0agm94stErG3OXo8chiNUQjlIRkpXVks5MEU2UU5QUUFMV0Y5Vk1LSy4u" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-bold text-gray-600 hover:text-ucb-blue transition-colors">
                                    <span>Accommodation Request Form</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=HnCdJ2cNiUupTrgmGCPjKzt0agm94stErG3OXo8chiNUMjNJMk41V040S0czMURXVzBERlRYU0tNMC4u" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-bold text-gray-600 hover:text-ucb-blue transition-colors">
                                    <span>Medical Provider Form</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation variant="slide-left" className="lg:col-span-7 space-y-6 lg:order-1">
                            <div className="w-12 h-12 rounded-2xl bg-ucb-blue/5 flex items-center justify-center text-ucb-blue border border-ucb-blue/10 shrink-0">
                                <Accessibility className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-display font-black text-ucb-black">Disability Services & Accommodations</h2>
                            <p className="text-gray-600 leading-relaxed font-light text-sm">
                                Urban College is committed to equal access for every student. Students with a physical, psychological, or learning disability may be eligible for academic accommodations under the Americans with Disabilities Act (ADA). We'll work with you to make sure you have the reasonable accommodations needed to fully access and engage in your educational experience.
                            </p>
                            <p className="text-gray-500 text-xs">
                                Services for registered students with disabilities may include the following accommodations after verification and engagement in an interactive process with the Director of Student Services:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600 leading-relaxed font-light">
                                <li className="flex gap-2 items-start"><ShieldCheck className="w-4 h-4 text-ucb-green shrink-0 mt-0.5" /> Exam accommodations (extended time)</li>
                                <li className="flex gap-2 items-start"><ShieldCheck className="w-4 h-4 text-ucb-green shrink-0 mt-0.5" /> Peer note-taking coordination</li>
                                <li className="flex gap-2 items-start"><ShieldCheck className="w-4 h-4 text-ucb-green shrink-0 mt-0.5" /> Assistive technology support</li>
                                <li className="flex gap-2 items-start"><ShieldCheck className="w-4 h-4 text-ucb-green shrink-0 mt-0.5" /> Advocacy & accessibility guidance</li>
                                <li className="flex gap-2 items-start"><ShieldCheck className="w-4 h-4 text-ucb-green shrink-0 mt-0.5" /> Diagnostic evaluation referrals</li>
                            </ul>
                        </ScrollAnimation>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Career Services */}
                    <div id="career-services" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-32">
                        <ScrollAnimation variant="slide-right" className="lg:col-span-7 space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-ucb-blue/5 flex items-center justify-center text-ucb-blue border border-ucb-blue/10 shrink-0">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-display font-black text-ucb-black">Career Services</h2>
                            <p className="text-gray-600 leading-relaxed font-light text-sm">
                                Your career journey starts the moment you enroll at Urban College. Career planning and development is built directly into your academic experience — because we want you to apply what you learn directly during your studies and graduate ready to level-up your career. Many of our students are already working while they study, so we recognize that career acceleration doesn't wait for graduation; it begins the moment you enroll.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-500 font-light pt-2">
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <strong className="text-gray-700 block mb-1">Professional Assessments</strong>
                                    Understand your strengths, interests, and career direction from day one.
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <strong className="text-gray-700 block mb-1">Career Coursework</strong>
                                    Put theory into practice with courses tied directly to your field.
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <strong className="text-gray-700 block mb-1">Development Seminars</strong>
                                    Resume writing, mock interview skills, and LinkedIn workshops.
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <strong className="text-gray-700 block mb-1">Internships & Placements</strong>
                                    Gain valuable, real-world experience while you earn your degree.
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation variant="slide-left" className="lg:col-span-5 bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-4">
                            <h4 className="font-display font-bold text-gray-800 text-base">Contact Career Services</h4>
                            <p className="text-gray-500 text-xs font-light leading-relaxed">
                                Get job search support and learn how our team connects you with employment opportunities after graduation.
                            </p>
                            <a href="mailto:studentservices@urbancollege.edu" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-150 text-gray-700 hover:text-ucb-blue transition-all font-semibold text-xs shadow-sm block">
                                <Mail className="w-4.5 h-4.5 text-ucb-orange inline mr-2" />
                                <span>studentservices@urbancollege.edu</span>
                            </a>
                        </ScrollAnimation>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Workshops, Peer Groups & Personal Support */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <ScrollAnimation variant="slide-right" className="lg:col-span-6 bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-5">
                            <div className="w-10 h-10 rounded-xl bg-ucb-blue/5 text-ucb-blue flex items-center justify-center border border-ucb-blue/10">
                                <HeartHandshake className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-ucb-black">Personal Support & Wellness</h3>
                            <p className="text-gray-600 text-xs font-light leading-relaxed">
                                Life is busy — and sometimes it's hard. Our Student Services team is here for you when challenges come up, whether they're academic, personal, or somewhere in between. You don't have to navigate it alone.
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed font-light">
                                <strong>Mental Health Resources:</strong> Visit the <Link to="/mental-health" className="text-ucb-blue hover:underline font-bold">Mental Health Resources</Link> page for crisis hotlines, Boston Public Health Commission resources, and multilingual support including NAMI's Latinx community resources.
                            </p>
                            <div className="flex gap-2">
                                <a href="mailto:studentservices@urbancollege.edu" className="bg-white border border-gray-250 text-gray-700 hover:text-ucb-blue text-xs px-4 py-2 rounded-xl transition-all shadow-sm font-bold">Email Support</a>
                                <Link to="/mental-health" className="bg-ucb-blue text-white hover:bg-ucb-blue-glow text-xs px-4 py-2 rounded-xl transition-all shadow-sm font-bold">Mental Health Page</Link>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation variant="slide-left" className="lg:col-span-6 bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-5">
                            <div className="w-10 h-10 rounded-xl bg-ucb-orange/10 text-ucb-orange flex items-center justify-center border border-ucb-orange/10">
                                <CalendarCheck className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-ucb-black">Workshops & Peer Groups</h3>
                            <p className="text-gray-600 text-xs font-light leading-relaxed">
                                Throughout the year, the Student Services Department and the Learning Resource Center offer workshops in English, Spanish, and Mandarin on topics students need most — understanding your syllabus, writing research papers, improving technology skills, and more. Look out for workshop announcements in your student email and Brightspace notifications.
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed font-light">
                                Urban College staff also help organize peer support groups for academic, professional, and social networking — because the strongest students lift each other up.
                            </p>
                            <a href="mailto:lrc@urbancollege.edu" className="bg-white border border-gray-250 text-gray-700 hover:text-ucb-blue text-xs px-4 py-2 rounded-xl transition-all shadow-sm font-bold inline-block w-fit">Ask About Workshops</a>
                        </ScrollAnimation>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Student Portal section */}
                    <ScrollAnimation variant="fade-up" className="bg-gradient-to-r from-ucb-blue to-ucb-blue-glow text-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8 space-y-4">
                                <span className="text-[10px] font-bold text-ucb-gold uppercase tracking-wider block font-display">Student Portal Access</span>
                                <h3 className="text-2xl md:text-3xl font-display font-bold">Manage Everything in One Place</h3>
                                <p className="text-blue-100 text-xs md:text-sm font-light leading-relaxed">
                                    Log in to your student portal at <strong>portal.urbancollege.edu</strong> to access your academic and financial information anytime:
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-blue-100">
                                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-ucb-gold" /> View grades & unofficial transcript</li>
                                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-ucb-gold" /> Check schedule & course enrollment</li>
                                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-ucb-gold" /> Update address, phone, and PIN</li>
                                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-ucb-gold" /> Pay balance via Nelnet</li>
                                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-ucb-gold" /> Request official transcripts</li>
                                </ul>
                            </div>
                            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3 justify-center">
                                <a 
                                    href="https://portal.urbancollege.edu" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-white text-ucb-blue hover:bg-ucb-gold hover:text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md text-xs inline-flex items-center gap-2 w-full justify-center min-h-[44px]"
                                >
                                    <span>portal.urbancollege.edu</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <p className="text-[10px] text-blue-200 text-left lg:text-right w-full font-light">
                                    Log in using: <em>firstname.lastname@urbancollege.edu</em>
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>

                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-16 md:py-24 bg-gray-50 border-t border-b border-gray-150">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs">Questions & Answers</span>
                        <h2 className="text-3xl font-display font-black text-ucb-black mt-2">Frequently Asked Questions</h2>
                        <p className="text-gray-500 font-light mt-2 text-sm">Find answers to common student service queries.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaqIndex === idx;
                            return (
                                <ScrollAnimation
                                    key={idx}
                                    variant="fade-up"
                                    delay={`${idx * 0.05}s`}
                                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                                        isOpen ? 'shadow-md border-ucb-blue/30' : 'shadow-sm border-gray-100 hover:border-ucb-blue/20'
                                    }`}
                                >
                                    <button
                                        onClick={() => handleFaqToggle(idx)}
                                        className="w-full flex justify-between items-center p-6 text-left transition-colors cursor-pointer"
                                    >
                                        <span className={`font-bold text-base transition-colors pr-6 ${isOpen ? 'text-ucb-blue' : 'text-ucb-black'}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                                            isOpen ? 'bg-ucb-blue text-white rotate-180' : 'bg-gray-100 text-ucb-black'
                                        }`}>
                                            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                        </div>
                                    </button>
                                    <div 
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                            isOpen ? 'max-h-[300px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className="p-6 text-sm text-gray-600 leading-relaxed font-light">
                                            {faq.a}
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Simple Chevron Icon for links
const ChevronRightIcon: React.FC<any> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
);

// Simple Check Icon for lists
const CheckCircleIcon: React.FC<any> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
);

export default StudentServices;
