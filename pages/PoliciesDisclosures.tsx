import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import {
    Search, Mail, ExternalLink, FileText, ChevronDown, ChevronUp,
    Lock, BookOpen, UserCheck, DollarSign, Shield, Building,
    CreditCard, Users, Cpu, FileClock, Phone, Info, Wallet, LogOut, TrendingUp
} from 'lucide-react';

interface Contact {
    name: string;
    title: string;
    email: string;
    phone?: string;
}

interface PolicyLink {
    label: string;
    url: string;
    isExternal?: boolean;
}

interface PolicySection {
    id: string;
    title: string;
    icon: any;
    contact?: Contact;
    content?: React.ReactNode;
}

const PoliciesDisclosures: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeSection, setActiveSection] = useState('privacy-policy');
    const [openAcademicArchives, setOpenAcademicArchives] = useState<{ [key: string]: boolean }>({
        calendars: false,
        catalogs: false,
        listings: false
    });

    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Set up active section observer
    useEffect(() => {
        const sections = document.querySelectorAll('.policy-section');
        const options = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Trigger when section is in the middle of the screen
            threshold: 0
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => observerRef.current?.observe(section));

        return () => {
            observerRef.current?.disconnect();
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Navigation bar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "About Urban College", path: "/about" },
        { label: "Consumer Information" }
    ];

    const toggleArchive = (key: string) => {
        setOpenAcademicArchives(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    // Contacts mapping
    const contacts = {
        academicAffairs: {
            name: "Dr. Noemi Custodia-Lora",
            title: "Vice President of Academic Affairs and Workforce Development",
            email: "noemi.custodialora@urbancollege.edu"
        },
        admissions: {
            name: "Calvin Conyers",
            title: "Associate Vice President of Enrollment Management",
            email: "calvin.conyers@urbancollege.edu"
        },
        financialAid: {
            name: "Stacy Broadus",
            title: "Director of Financial Aid",
            email: "stacy.broadus@urbancollege.edu"
        },
        studentServices: {
            name: "Rosana Perella",
            title: "Director of Student Services and Support",
            email: "rosana.perella@urbancollege.edu"
        },
        institutional: {
            name: "Erline Tanice / Caitlin Callahan",
            title: "Chief Financial Officer / Chief Operating Officer & ALO",
            email: "erline.tanice@urbancollege.edu",
            secondaryEmail: "caitlin.callahan@urbancollege.edu"
        },
        it: {
            name: "Timesha Scott",
            title: "IT Lead",
            email: "Timesha.Scott@urbancollege.edu"
        },
        registration: {
            name: "Waqas Mirza",
            title: "Registrar",
            email: "registration@urbancollege.edu"
        }
    };

    const categories = [
        { id: 'privacy-policy', label: 'Privacy Policy', icon: Lock },
        { id: 'academic-affairs', label: 'Academic Affairs', icon: BookOpen },
        { id: 'admissions-enrollment', label: 'Admissions & Enrollment', icon: UserCheck },
        { id: 'financial-aid', label: 'Financial Assistance Information', icon: Wallet },
        { id: 'financial-information', label: 'Financial Information', icon: DollarSign },
        { id: 'withdrawal-information', label: 'Withdrawal Information', icon: LogOut },
        { id: 'health-safety', label: 'Health and Safety', icon: Shield },
        { id: 'institutional-information', label: 'General College Information', icon: Info },
        { id: 'student-services', label: 'Student Services', icon: Users },
        { id: 'information-technology', label: 'Information Technology', icon: Cpu },
        { id: 'registration-services', label: 'Registration Services', icon: FileClock },
        { id: 'student-outcomes', label: 'Student Outcomes', icon: TrendingUp }
    ];

    // Filter categories based on search
    const filteredCategories = categories.filter(cat => {
        const titleMatch = cat.label.toLowerCase().includes(searchQuery.toLowerCase());
        const idMatch = cat.id.replace('-', ' ').toLowerCase().includes(searchQuery.toLowerCase());
        return titleMatch || idMatch;
    });

    const renderContactCard = (contact: Contact & { secondaryEmail?: string }) => {
        return (
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-ucb-orange block">Contact Person</span>
                    <h4 className="font-display font-bold text-ucb-blue text-base leading-tight">{contact.name}</h4>
                    <p className="text-gray-500 text-xs font-light">{contact.title}</p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                    <a 
                        href={`mailto:${contact.email}`}
                        className="bg-white border border-gray-200 text-ucb-blue hover:text-white hover:bg-ucb-blue hover:border-ucb-blue px-4 py-2 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow-sm min-h-[38px] cursor-pointer"
                    >
                        <Mail className="w-3.5 h-3.5" />
                        Email Contact
                    </a>
                    {contact.secondaryEmail && (
                        <a 
                            href={`mailto:${contact.secondaryEmail}`}
                            className="bg-white border border-gray-200 text-ucb-blue hover:text-white hover:bg-ucb-blue hover:border-ucb-blue px-4 py-2 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow-sm min-h-[38px] cursor-pointer"
                        >
                            <Mail className="w-3.5 h-3.5" />
                            Email Secondary
                        </a>
                    )}
                </div>
            </div>
        );
    };

    const renderDocLink = (label: string, url: string, isExternal: boolean = false, pageContext?: string) => {
        const LinkIcon = isExternal ? ExternalLink : FileText;
        // Internal app routes use react-router <Link> (client-side nav); static
        // assets (/s/*.pdf) and external URLs use a normal <a>.
        const isInternal = url.startsWith('/') && !url.startsWith('/s/');
        const className = "flex items-start justify-between gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:border-ucb-blue/30 hover:shadow-sm transition-all group";
        const inner = (
            <>
                <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-ucb-blue/5 border border-ucb-blue/10 flex items-center justify-center text-ucb-blue group-hover:bg-ucb-blue group-hover:text-white transition-all shrink-0">
                        <LinkIcon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                        <span className="font-medium text-gray-800 text-sm leading-snug block group-hover:text-ucb-blue transition-colors">
                            {label}
                        </span>
                        {pageContext && (
                            <span className="text-[11px] text-gray-400 font-light block mt-0.5">{pageContext}</span>
                        )}
                    </div>
                </div>
                <div className="text-gray-400 group-hover:text-ucb-blue transition-colors shrink-0 pt-1.5">
                    <ChevronDown className="w-4 h-4 -rotate-90" />
                </div>
            </>
        );
        if (isInternal) {
            return <Link to={url} className={className}>{inner}</Link>;
        }
        return (
            <a
                href={url}
                target={isExternal || url.endsWith('.pdf') ? "_blank" : undefined}
                rel={isExternal || url.endsWith('.pdf') ? "noopener noreferrer" : undefined}
                className={className}
            >
                {inner}
            </a>
        );
    };

    // Flag an item with no destination yet (no matching page / no link provided).
    const renderFlag = (label: string, note: string = 'Link pending — needs a destination') => (
        <div className="flex items-start gap-3 p-4 rounded-xl border border-red-200 bg-red-50">
            <div className="w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                <FileText className="w-4.5 h-4.5" />
            </div>
            <div>
                <span className="font-medium text-red-600 text-sm leading-snug block">{label}</span>
                <span className="text-[11px] text-red-400 font-light block mt-0.5">{note}</span>
            </div>
        </div>
    );

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/30">
            <SEO
                title={PAGE_META.policies.title}
                description={PAGE_META.policies.description}
                canonicalPath={PAGE_META.policies.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Consumer Information', path: PAGE_META.policies.path },
                ])}
            />
            <PageHeader
                title="Consumer Information"
                subtitle="Access institutional documents, student guidelines, safety reports, and regulatory disclosures in one place."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            <div className="container mx-auto px-6 max-w-7xl py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Sticky Sidebar Navigation */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
                        
                        {/* Search Box */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3">
                            <h3 className="font-display font-bold text-gray-800 text-base">Search Policies</h3>
                            <div className="relative">
                                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                                <input
                                    type="text"
                                    placeholder="Search by keywords..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-ucb-blue focus:bg-white transition-all text-gray-700 placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm overflow-hidden">
                            <h3 className="font-display font-bold text-gray-800 text-base mb-4">Categories</h3>
                            <nav className="space-y-1">
                                {filteredCategories.map((cat) => {
                                    const CategoryIcon = cat.icon;
                                    const isActive = activeSection === cat.id;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => scrollToSection(cat.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                                                isActive 
                                                    ? 'bg-ucb-blue text-white shadow-sm' 
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-ucb-blue'
                                            }`}
                                        >
                                            <CategoryIcon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                                            <span>{cat.label}</span>
                                        </button>
                                    );
                                })}
                                {filteredCategories.length === 0 && (
                                    <p className="text-gray-400 text-sm font-light text-center py-4">No categories match your search.</p>
                                )}
                            </nav>
                        </div>
                    </div>

                    {/* Scrollable Policy Contents */}
                    <div className="lg:col-span-8 space-y-12">
                        
                        {/* Section: Privacy Policy */}
                        <section id="privacy-policy" className="policy-section bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-ucb-blue">Privacy Policy</h2>
                            </div>
                            
                            <p className="text-gray-600 leading-relaxed font-light text-sm">
                                This Privacy Policy (last updated 2/28/2025) describes how we collect, use, and protect your personal information when you opt in via our request for information and application forms. By providing your information, you consent to the collection and use of your data as outlined in this policy.
                            </p>

                            <div className="space-y-4 pt-2">
                                <div className="space-y-2">
                                    <h4 className="font-bold text-gray-800 text-sm">1. Information We Collect</h4>
                                    <p className="text-gray-600 text-xs leading-relaxed font-light">
                                        When you opt in, we collect Personal Information (Name, Email Address, Phone Number, etc.) and Usage Data (Information about how you interact with our form, including IP address, browser type, and device information).
                                    </p>
                                </div>
                                
                                <div className="space-y-2">
                                    <h4 className="font-bold text-gray-800 text-sm">2. How We Use Your Information</h4>
                                    <p className="text-gray-600 text-xs leading-relaxed font-light">
                                        We use this information to send you communications, newsletters, or updates that you have opted in to receive; to respond to your inquiries or provide support; and to improve the user experience on our website.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-bold text-gray-800 text-sm">3. Data Sharing and Disclosure</h4>
                                    <p className="text-gray-600 text-xs leading-relaxed font-light">
                                        We will not sell, rent, or trade your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website or fulfilling our services, but only under strict confidentiality agreements.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-bold text-gray-800 text-sm">4. Data Retention</h4>
                                    <p className="text-gray-600 text-xs leading-relaxed font-light">
                                        We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-bold text-gray-800 text-sm">5. Your Data Rights</h4>
                                    <ul className="list-disc list-inside text-gray-600 text-xs space-y-1 pl-2 font-light">
                                        <li><strong>Access:</strong> Request a copy of your personal information collected.</li>
                                        <li><strong>Correction:</strong> Correct any inaccuracies in your personal information.</li>
                                        <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal requirements.</li>
                                        <li><strong>Opt-Out:</strong> Unsubscribe from communications at any time by clicking "unsubscribe" links, replying "STOP" to SMS, or contacting us.</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-bold text-gray-800 text-sm">6. Security</h4>
                                    <p className="text-gray-600 text-xs leading-relaxed font-light">
                                        We take the security of your personal information seriously and use appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-bold text-gray-800 text-sm">7. Changes to This Privacy Policy</h4>
                                    <p className="text-gray-600 text-xs leading-relaxed font-light">
                                        We may update this Privacy Policy from time to time. When we make changes, we will post the updated policy on this page and indicate the date of the latest revision.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section: Academic Affairs */}
                        <section id="academic-affairs" className="policy-section bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-ucb-blue">Academic Affairs</h2>
                            </div>

                            {renderContactCard(contacts.academicAffairs)}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {renderDocLink("Description of Educational Program", "/program-overview")}
                                {renderDocLink("2024-2025 Academic Calendar", "/academic-calendar")}
                                {renderDocLink("2024-2025 Course Catalogue", "/s/College-Catalog-V112025.pdf")}
                                {renderDocLink("Adding/Dropping/Withdrawing from Courses", "https://catalog.urbancollege.edu/content.php?catoid=1&navoid=21", true)}
                                {renderDocLink("Course Repeat Policy", "https://catalog.urbancollege.edu/content.php?catoid=1&navoid=21", true)}
                                {renderDocLink("Academic Honesty Policy", "https://catalog.urbancollege.edu/content.php?catoid=1&navoid=21", true)}
                                {renderDocLink("Attendance Policy", "https://catalog.urbancollege.edu/content.php?catoid=1&navoid=21", true)}
                                {renderDocLink("NECHE Accreditation Overview", "/accreditation")}
                                {renderDocLink("Instructional Facilities Details", "/campus-facilities")}
                                {renderDocLink("Computer and Network Use Policy", "/s/Computer-and-Network-Use-Policy_FINAL.pdf")}
                                <div className="flex items-center p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                                    <span className="text-sm font-medium text-gray-700">Family Educational Rights and Privacy Act (FERPA) Compliant</span>
                                </div>
                            </div>

                            {/* Collapsible Archives */}
                            <div className="pt-6 border-t border-gray-100 space-y-4">
                                <h3 className="font-display font-bold text-gray-800 text-lg">Archived Materials</h3>
                                
                                {/* Archive: Calendars */}
                                <div className="border border-gray-100 rounded-2xl overflow-hidden">
                                    <button 
                                        onClick={() => toggleArchive('calendars')}
                                        className="w-full flex items-center justify-between p-4 bg-gray-50/50 hover:bg-gray-50 transition-colors text-left"
                                    >
                                        <span className="font-display font-bold text-sm text-gray-800">Academic Calendars Archive</span>
                                        {openAcademicArchives.calendars ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                                    </button>
                                    
                                    {openAcademicArchives.calendars && (
                                        <div className="p-4 bg-white grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-gray-100">
                                            {renderDocLink("2024-2025 Calendar", "/academic-calendar")}
                                            {renderDocLink("2023-2024 Calendar", "/academic-calendar")}
                                            {renderDocLink("2022-2023 Calendar", "/academic-calendar")}
                                            {renderDocLink("2021-2022 Calendar (PDF)", "/s/2021-2022-Academic-Calendar.pdf")}
                                            {renderDocLink("2020-2021 Calendar (PDF)", "/s/2020-2021-UCB-Academic-Calendar.pdf")}
                                            {renderDocLink("2019-2020 Calendar (PDF)", "/s/2019-2020-UCB-Academic-Calendar.pdf")}
                                            {renderDocLink("2018-2019 Calendar (PDF)", "/s/2018-2019-UCB-Academic-Calendar.pdf")}
                                            {renderDocLink("2017-2018 Calendar (PDF)", "/s/2017-2018-UCB-Academic-Calendar.pdf")}
                                        </div>
                                    )}
                                </div>

                                {/* Archive: Catalogues */}
                                <div className="border border-gray-100 rounded-2xl overflow-hidden">
                                    <button 
                                        onClick={() => toggleArchive('catalogs')}
                                        className="w-full flex items-center justify-between p-4 bg-gray-50/50 hover:bg-gray-50 transition-colors text-left"
                                    >
                                        <span className="font-display font-bold text-sm text-gray-800">Course Catalogues Archive</span>
                                        {openAcademicArchives.catalogs ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                                    </button>
                                    
                                    {openAcademicArchives.catalogs && (
                                        <div className="p-4 bg-white grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-gray-100">
                                            {renderDocLink("2024-2025 Student Handbook & Catalog", "/s/2025-2026-URBAN-COLLEGE-OF-BOSTON-STUDENT-HANDBOOK_Final.pdf")}
                                            {renderDocLink("2023-2024 Course Catalog", "/course-catalogue-20232024")}
                                            {renderDocLink("2022-2023 Course Catalog (PDF)", "/s/2022-2023-course-catalogue-FINAL-11-CLOSED-7-20-2022.pdf")}
                                            {renderDocLink("2021-2022 Course Catalog (PDF)", "/s/2021-2022-course-catalogue-REVISED-3-8-2022-hs3f.pdf")}
                                            {renderDocLink("2020-2021 Course Catalog (PDF)", "/s/2020-2021-UCB-Course-Catalogue-FINAL-rcat.pdf")}
                                            {renderDocLink("2019-2020 Course Catalog (PDF)", "/s/2019-2020-UCB-Course-Catalogue-FINAL-Updated-4820.pdf")}
                                            {renderDocLink("2018-2019 Course Catalog (PDF)", "/s/2018-2019-UCB-Course-Catalogue-FINAL.pdf")}
                                            {renderDocLink("2017-2018 Course Catalog (PDF)", "/s/2017-2018-UCB-Course-Catalogue-FINAL.pdf")}
                                            {renderDocLink("2016-2017 Course Catalog (PDF)", "/s/2016-2017-UCB-Course-Catalogue-FINAL.pdf")}
                                            {renderDocLink("2015-2016 Course Catalog (PDF)", "/s/2015-2016-UCB-Course-Catalogue-FINAL.pdf")}
                                        </div>
                                    )}
                                </div>

                                {/* Archive: Course Listings */}
                                <div className="border border-gray-100 rounded-2xl overflow-hidden">
                                    <button 
                                        onClick={() => toggleArchive('listings')}
                                        className="w-full flex items-center justify-between p-4 bg-gray-50/50 hover:bg-gray-50 transition-colors text-left"
                                    >
                                        <span className="font-display font-bold text-sm text-gray-800">Course Schedule & Listings Archive</span>
                                        {openAcademicArchives.listings ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                                    </button>
                                    
                                    {openAcademicArchives.listings && (
                                        <div className="p-4 bg-white space-y-4 border-t border-gray-100">
                                            <div className="space-y-2">
                                                <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wide">Academic Year 2022-2023</h5>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {renderDocLink("Fall 2022 Schedule (PDF)", "/s/Fall-2022-Preliminary-Course-Schedule-Revised-8-18-2022-cj3f.pdf")}
                                                    {renderDocLink("Spring 2023 Schedule (PDF)", "/s/Spring-2023-Course-Schedule-Revised-1-23-2023.pdf")}
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-2 pt-2 border-t border-gray-50">
                                                <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wide">Academic Year 2021-2022</h5>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                    {renderDocLink("Fall 2021 Schedule", "/s/Fall-2021-Preliminary-Course-Schedule-Revised-10-1-211-3rzr.pdf")}
                                                    {renderDocLink("Spring 2022 Schedule", "/s/Spring-2022-Preliminary-Course-Schedule-Revised-1-14-2022-hgfg.pdf")}
                                                    {renderDocLink("Summer 2022 Schedule", "/s/Summer-2022-Preliminary-Course-Schedule-Revised-6-13-2022-n5wt.pdf")}
                                                </div>
                                            </div>

                                            <div className="space-y-2 pt-2 border-t border-gray-50">
                                                <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wide">Academic Year 2020-2021</h5>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                    {renderDocLink("Fall 2020 Schedule", "/s/Fall-2020-UCB-Course-Schedule.pdf")}
                                                    {renderDocLink("Spring 2021 Schedule", "/s/Spring-2021-UCB-Course-Schedule.pdf")}
                                                    {renderDocLink("Summer 2021 Schedule", "/s/Summer-2021-Course-Schedule-Revised-6-11-2021.pdf")}
                                                </div>
                                            </div>

                                            <div className="space-y-2 pt-2 border-t border-gray-50">
                                                <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wide">Academic Year 2019-2020</h5>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                    {renderDocLink("Fall 2019 Schedule", "/s/Fall-2019-UCB-Course-Schedule.pdf")}
                                                    {renderDocLink("Spring 2020 Schedule", "/s/Spring-2020-UCB-Course-Schedule.pdf")}
                                                    {renderDocLink("Summer 2020 Schedule", "/s/Summer-2020-UCB-Course-Schedule.pdf")}
                                                </div>
                                            </div>

                                            <div className="space-y-2 pt-2 border-t border-gray-50">
                                                <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wide">Academic Year 2018-2019</h5>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                    {renderDocLink("Fall 2018 Schedule", "/s/Fall-2018-UCB-Course-Schedule.pdf")}
                                                    {renderDocLink("Spring 2019 Schedule", "/s/Spring-2019-UCB-Course-Schedule.pdf")}
                                                    {renderDocLink("Summer 2019 Schedule", "/s/Summer-2019-UCB-Course-Schedule.pdf")}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Section: Admissions & Enrollment */}
                        <section id="admissions-enrollment" className="policy-section bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                    <UserCheck className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-ucb-blue">Admissions & Enrollment</h2>
                            </div>

                            {renderContactCard(contacts.admissions)}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {renderDocLink("Admissions Requirements", "/admissions-requirements")}
                                {renderDocLink("College Navigator Portal (Consumer Info)", "https://nces.ed.gov/collegenavigator/?id=429128&q=urban%20college%20of%20boston&s=all", true)}
                                {renderDocLink("Transfer Credits Policy", "/s/2021-2022-course-catalogue", false, "Page 10 of the Course Catalogue")}
                                {renderDocLink("Experiential Credits for Prior Learning", "/s/2021-2022-course-catalogue", false, "Page 56 of the Course Catalogue")}
                            </div>
                        </section>

                        {/* Section: Financial Aid */}
                        <section id="financial-aid" className="policy-section bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                    <DollarSign className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-ucb-blue">Financial Assistance Information</h2>
                            </div>

                            {renderContactCard(contacts.financialAid)}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {renderDocLink("Direct Loan Counseling", "https://studentaid.gov/entrance-counseling/", true)}
                                {renderDocLink("Student Financial Aid History — National Student Loan Data System (NSLDS)", "https://studentaid.gov/aid-summary/", true)}
                                {renderDocLink("Standards of Satisfactory Academic Progress (SAP) for Financial Aid", "/s/2021-2022-course-catalogue", false, "Page 17 of the Course Catalogue")}
                            </div>
                        </section>

                        {/* Section: Financial Information */}
                        <section id="financial-information" className="policy-section bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                    <DollarSign className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-ucb-blue">Financial Information</h2>
                            </div>

                            {renderContactCard(contacts.institutional)}

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {renderDocLink("Applying for Federal Financial Aid (Title IV)", "https://studentaid.gov/h/apply-for-aid/fafsa", true)}
                                    {renderDocLink("Cost of Attendance", "/financial-aid")}
                                    {renderDocLink("Financial Aid Programs", "/financial-aid")}
                                    {renderDocLink("College Financing Plan", "/financial-aid", false, "Net Price Calculator")}
                                    {renderDocLink("Return to Title IV (R2T4) Process", "/s/UCB-Financial-Aid-R2T4-Policy-V2-0121.pdf")}
                                </div>

                                <div className="space-y-3 pt-4 border-t border-gray-50">
                                    <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Annual Audited Financial Statements</h4>
                                    <div className="space-y-4">
                                        {[
                                            { year: "FY25", audit: "/s/Urban-College-of-Boston-FS-6-30-2025.pdf", summary: "/s/FY2025-UCB-Financial-Summary.pdf" },
                                            { year: "FY24", audit: "/s/FY24-Urban-College-of-Boston-Audited-Financials.pdf", summary: "/s/FY2024-Urban-College-Financial-Summary.pdf" },
                                            { year: "FY23", audit: "/s/FY23-Audited-Financials.pdf", summary: "/s/UCB-Financial-Statement-Summary-2023" },
                                            { year: "FY22", audit: "/s/FY22-UCB-audited-financial-statements-83122.pdf", summary: "/s/Urban-College-of-Boston-Financial-Summary-08312022.pdf" },
                                            { year: "FY21", audit: "/s/FY21-Audited-Financial-Statements.pdf", summary: "/s/FY2021-UCB-Financial-Summary.pdf" },
                                            { year: "FY20", audit: "/s/FY20-UCB-Financial-Audit-FINAL.pdf", summary: "/s/FY2020-UCB-Financial-Summary.pdf" },
                                            { year: "FY19", audit: "/s/FY19-UCB-Financial-Audit-FINAL.pdf", summary: "/s/FY2019-UCB-Financial-Summary.pdf" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/30 gap-3">
                                                <span className="font-display font-bold text-sm text-gray-700 shrink-0">{item.year} Financials</span>
                                                <div className="flex flex-wrap gap-2">
                                                    <a href={item.audit} target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 bg-white border border-gray-200 hover:border-ucb-blue text-ucb-blue rounded-lg text-xs font-semibold shadow-sm transition-all">Full Audit Report</a>
                                                    <a href={item.summary} target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 bg-white border border-gray-200 hover:border-ucb-blue text-ucb-blue rounded-lg text-xs font-semibold shadow-sm transition-all">Financial Summary</a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: Withdrawal Information */}
                        <section id="withdrawal-information" className="policy-section bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                    <LogOut className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-ucb-blue">Withdrawal Information</h2>
                            </div>

                            {renderContactCard(contacts.registration)}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {renderDocLink("Course Withdrawal", "https://catalog.urbancollege.edu/content.php?catoid=1&navoid=21", true)}
                                {renderDocLink("Semester Withdrawal", "https://catalog.urbancollege.edu/content.php?catoid=1&navoid=21", true)}
                                {renderDocLink("Withdrawal, Drop and Refund", "/s/UCB-Withdrawal-Appeal-and-Tuition-Refund-Process.pdf")}
                            </div>
                        </section>

                        {/* Section: Health & Safety */}
                        <section id="health-safety" className="policy-section bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-ucb-blue">Health and Safety</h2>
                            </div>

                            {renderContactCard(contacts.studentServices)}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {renderDocLink("Annual Security and Fire Safety Report", "/s/Final-2025-Clery-Report-to-be-emailed-1.pdf", false, "Clery Act report")}
                                {renderDocLink("Campus Hazing", "/s/UCB-HazingPolicy-2025.pdf", false, "Hazing policy")}
                                {renderDocLink("Campus Security", "/safety-and-wellness")}
                                {renderDocLink("Drug and Alcohol Prevention Program", "/safety-and-wellness")}
                                {renderDocLink("Emergency Preparedness", "/s/2025-Emergency-Handbook-1.pdf")}
                                {renderDocLink("Public Safety", "/safety-and-wellness")}
                            </div>
                        </section>

                        {/* Section: Institutional Information */}
                        <section id="institutional-information" className="policy-section bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                    <Info className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-ucb-blue">General College Information</h2>
                            </div>

                            {renderContactCard(contacts.institutional)}

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {renderDocLink("Academic Programs", "/policies-disclosures/academic-programs")}
                                    {renderDocLink("Acceptable Use Policy", "/policies-disclosures/acceptable-use-policy")}
                                    {renderDocLink("Accreditation", "/accreditation")}
                                    {renderDocLink("Articulation Agreements", "/policies-disclosures/articulation-agreements")}
                                    {renderDocLink("Grievance Procedure", "/policies-disclosures/grievance-procedure")}
                                    {renderDocLink("Constitution Day", "https://static1.squarespace.com/static/5be099a375f9eecbf2753e8d/t/68cc36e79b373b2133946a69/1758213863832/Constitution+and+Cookies+2025.pdf", true)}
                                    {renderFlag("Copyright Infringement & Peer-to-Peer File Sharing Policy", "Link pending — covered within the Acceptable Use Policy; confirm a destination")}
                                    {renderDocLink("Disability and Accessibility Services", "/policies-disclosures/disability-accessibility-services")}
                                    {renderDocLink("Family Educational Rights and Privacy Act (FERPA)", "/policies-disclosures/ferpa")}
                                    {renderDocLink("Faculty, Administration and Staff", "/policies-disclosures/faculty-administration-staff")}
                                    {renderDocLink("Campus Location and Services", "/policies-disclosures/campus-location-services")}
                                    {renderDocLink("Non-Discrimination, Equal Access and Equal Opportunity Statement", "/policies-disclosures/diversity-equity-inclusion")}
                                    {renderDocLink("State Authorization and NC-SARA Information", "/policies-disclosures/nc-sara")}
                                    {renderDocLink("Student Activities", "/policies-disclosures/student-activities")}
                                    {renderDocLink("Student Body Diversity", "/policies-disclosures/diversity-equity-inclusion")}
                                    {renderDocLink("Title IX / Sexual Misconduct", "/policies-disclosures/title-ix-sexual-misconduct")}
                                    {renderDocLink("Transfer Credit Policy", "/policies-disclosures/transfer-credit-policy")}
                                    {renderDocLink("Credit for Prior Learning", "https://catalog.urbancollege.edu/content.php?catoid=3&navoid=103#credit-for-prior-learning-cpl-also-known-as-prior-learning-assessment-pla-or-life-experience-credit-policy", true)}
                                    {renderDocLink("Voter Registration", "/policies-disclosures/voter-registration")}
                                </div>

                                <div className="space-y-3 pt-4 border-t border-gray-50">
                                    <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Institutional Plans & Reports</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {renderDocLink("2025-2030 Strategic Plan", "/s/Strategic-Plan-2025-2030-Urban-College-of-Boston_public-version.pdf", false, "Public Version")}
                                        {renderDocLink("2019-2024 Strategic Plan", "/s/2019-2024-Strategic-Plan.pdf")}
                                        {renderDocLink("2014-2019 Strategic Plan", "/s/2014_03_25_StrategicPlanOverhaulPublic_Final.pdf")}
                                        {renderDocLink("Board of Trustees By-Laws", "/s/UCB-By-Laws-Amended-102419.pdf", false, "Amended Oct 24, 2019")}
                                        {renderDocLink("HEERF Reporting & COVID-19 Response", "/heerf-reports")}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: Student Services */}
                        <section id="student-services" className="policy-section bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                    <Users className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-ucb-blue">Student Services</h2>
                            </div>

                            {renderContactCard(contacts.studentServices)}

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {renderDocLink("2025-2026 Student Handbook", "/s/2025-2026-URBAN-COLLEGE-OF-BOSTON-STUDENT-HANDBOOK_Final.pdf", false, "Active Handbook")}
                                    {renderDocLink("2024-2025 Student Handbook", "/s/2024-2025-Student-Handbook.pdf", false, "Archived Handbook")}
                                    {renderDocLink("Disability Services & Accommodations", "/student-services")}
                                    {renderDocLink("Title IX Resource Manual (PDF)", "/s/Title-IX.pdf")}
                                    {renderDocLink("Student Grievance & Appeal Procedures", "/s/Student-Grievance-Procedure.pdf")}
                                    {renderDocLink("Massachusetts Voter Registration Page", "https://www.sec.state.ma.us/ele/eleifv/howreg.htm", true)}
                                    {renderDocLink("2025 Campus Climate Survey Results", "https://www.canva.com/design/DAGtWztuhDQ/yUk2r0FJ7M61KHh6s6mJ6g/view?utm_content=DAGtWztuhDQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha760b04abd", true, "View Presentation Slide Deck")}
                                </div>

                                <div className="space-y-3 pt-4 border-t border-gray-50">
                                    <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Constitution Day Commemorations</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {renderDocLink("Constitution Day 2025", "/s/Constitution-and-Cookies-2025.pdf")}
                                        {renderDocLink("Constitution Day 2024", "/s/Flyer.pdf")}
                                        {renderDocLink("DAAPP Activity Calendar", "/s/DAAPP-Calendar-2021-2022.pdf", false, "2021-2022 Archive")}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: Information Technology */}
                        <section id="information-technology" className="policy-section bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                    <Cpu className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-ucb-blue">Information Technology</h2>
                            </div>

                            {renderContactCard(contacts.it)}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {renderDocLink("Security Incident Response Plan (SIRP)", "/s/Urban-College-SECURITY-INCIDENT-RESPONSE-PLAN-v1-zyap.pdf")}
                            </div>
                        </section>

                        {/* Section: Registration Services */}
                        <section id="registration-services" className="policy-section bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                    <FileClock className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-ucb-blue">Registration Services</h2>
                            </div>

                            {renderContactCard(contacts.registration)}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {renderDocLink("Student Record Management Policy", "/s/Student-Record-Management-Policy.pdf")}
                            </div>
                        </section>

                        {/* Section: Student Outcomes */}
                        <section id="student-outcomes" className="policy-section bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-ucb-blue">Student Outcomes</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {renderDocLink("Cohort Default Rate", "https://collegescorecard.ed.gov/school/?429128-Urban-College-of-Boston", true, "U.S. Dept. of Education")}
                                {renderDocLink("Financial Aid & Debt — College Scorecard", "https://collegescorecard.ed.gov/school/?429128-Urban-College-of-Boston", true)}
                                {renderDocLink("Retention & Graduation Rates", "https://nces.ed.gov/collegenavigator/?id=429128&q=urban%20college%20of%20boston&s=all", true, "College Navigator")}
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PoliciesDisclosures;
