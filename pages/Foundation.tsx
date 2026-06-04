import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    Heart, GraduationCap, Users, Briefcase, Award, DollarSign, 
    CheckCircle, Globe, Calendar, ChevronRight, ArrowRight, 
    ShieldCheck, Gift, Percent, Building
} from 'lucide-react';

interface FoundationMember {
    name: string;
    role: string;
    description: string;
    avatarInitials: string;
    quote?: string;
    image?: string;
}

const Foundation: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "About Urban College", path: "/about" },
        { label: "Urban College Foundation" }
    ];

    const supportItems = [
        "First-generation college students pursuing their dreams",
        "Working parents balancing education with family obligations",
        "Immigrants and multilingual learners building new lives in our communities",
        "Career changers seeking new pathways and skills for higher-paying fields",
        "Community leaders transforming their neighborhoods from within"
    ];

    const OFFICERS: FoundationMember[] = [
        {
            name: "Tom O'Brien",
            role: "Chair | CEO, The HYM Investment Group",
            description: "Founding Partner and Managing Director of HYM, leading major development projects including Boston Landing, Bulfinch Crossing, and Suffolk Downs. Co-chaired the Massachusetts Business Immigration Coalition. Active in civic efforts supporting equity and opportunity for Boston's youth.",
            avatarInitials: "TO",
            image: "/assets/images/foundation/tom-obrien.png"
        },
        {
            name: "Nivia Piña-Medina",
            role: "Vice Chair | Owner, Tres Islas Restaurant Group",
            description: "Puerto Rican-born chemist, educator, and entrepreneur. Holds degrees from University of Puerto Rico, Brandeis, and UMass Boston. Former Boston Public Schools teacher. Howard Hughes Scholar and Girl Scout Gold Awardee.",
            quote: "It's invaluable to learn in an environment where you see role models who resemble you and understand your journey.",
            avatarInitials: "NP",
            image: "/assets/images/foundation/nivia-pina.jpg"
        },
        {
            name: "Darrell Byers",
            role: "Treasurer | CEO, Byers & Associates",
            description: "Nonprofit executive championing entrepreneurship, equity, and community development. Boston native with advancement leadership at UMass Boston, Harvard GSE, Georgetown Medical Center, and Habitat for Humanity SF. Vice Chair, Partnership for Financial Equity.",
            avatarInitials: "DB",
            image: "/assets/images/foundation/darrell-byers.jpg"
        },
        {
            name: "Peter Ebb, Esq.",
            role: "Secretary | Retired Partner, Ropes & Gray LLP",
            description: "Retired partner in Labor & Employment, Education Law, and Public Law. Former Board Chair (2012-2024) and current Board member. The Ebb family are long-standing major donors and advocates for the mission of Urban College.",
            avatarInitials: "PE",
            image: "/assets/images/foundation/peter-ebb.png"
        }
    ];

    const MEMBERS: FoundationMember[] = [
        {
            name: "Martin J. Walsh",
            role: "Former U.S. Secretary of Labor | Executive Director, NHLPA",
            description: "Lifelong champion for working people. Son of Irish immigrants from Dorchester. Served in the MA House (1997), as Mayor of Boston (2013), as U.S. Secretary of Labor (2021), and became Executive Director of the NHLPA in 2023. Long-time advocate for accessibility in education.",
            avatarInitials: "MW",
            image: "/assets/images/foundation/marty-walsh.png"
        },
        {
            name: "Dr. Connee Counts",
            role: "Professor Emerita, Lesley University",
            description: "Developmental Psychologist. Directed federal grant partnership between ABCD, Urban College, and Lesley for Early Childhood Educators. Former Urban College Board member. Serves Boston Children's Museum and Huntington Theatre advisory committees.",
            avatarInitials: "CC",
            image: "/assets/images/foundation/connee-counts.jpg"
        },
        {
            name: "Miriam Crispo",
            role: "Co-Owner, TMG Marketing",
            description: "Boutique consultancy leader known for high-impact strategies. Born to immigrant parents from Trinidad and Italy. Former NCAA swimmer; captain of the Bahamian National Team; and 2016 Olympic qualifier at Arizona State.",
            avatarInitials: "MC",
            image: "/assets/images/foundation/miriam-crispo.png"
        },
        {
            name: "Kristin McGurn, Esq.",
            role: "Partner, Labor & Employment, Seyfarth",
            description: "Partner advising employers in health care, life sciences, and financial services. Co-chairs Seyfarth's Health Care practice. J.D. Northeastern; B.A. UConn magna cum laude.",
            avatarInitials: "KM",
            image: "/assets/images/foundation/kristin-mcgurn.jpg"
        },
        {
            name: "Robert Clark Williams, Jr.",
            role: "Founder & CEO, Executive Strategies, LLC",
            description: "Leads outreach for diverse and small businesses across Massachusetts. Entrepreneur-in-Residence at Boston Public Library's Kirstein Business Library & Innovation Center. National Trustee of PAFA.",
            avatarInitials: "RW",
            image: "/assets/images/foundation/robert-clark-williams.png"
        }
    ];

    const waysToGive = [
        {
            title: "One-Time Gift",
            desc: "Make an immediate, direct impact on our scholarship funds and emergency assistance.",
            icon: DollarSign,
            color: "text-ucb-blue bg-blue-50"
        },
        {
            title: "Monthly Giving",
            desc: "Become a sustaining member and provide steady, reliable funding for student programs.",
            icon: Calendar,
            color: "text-ucb-orange bg-orange-50"
        },
        {
            title: "Corporate Sponsorship",
            desc: "Open new pathways of opportunity for our students through corporate alignments and support.",
            icon: Building,
            color: "text-ucb-teal bg-teal-50"
        },
        {
            title: "Planned Giving",
            desc: "Create a lasting legacy by including Urban College in your estate plans or will.",
            icon: Award,
            color: "text-ucb-emerald bg-emerald-50"
        },
        {
            title: "Gift of Stock",
            desc: "Transfer shares of stock directly to invest in our students' futures while optimizing tax benefits.",
            icon: Percent,
            color: "text-purple-600 bg-purple-50"
        },
        {
            title: "In-Kind Donations",
            desc: "Contribute professional services, software licenses, or campus resources.",
            icon: Gift,
            color: "text-pink-600 bg-pink-50"
        }
    ];

    return (
        <div className="pt-24 lg:pt-32">
            <SEO
                title={PAGE_META.foundation.title}
                description={PAGE_META.foundation.description}
                canonicalPath={PAGE_META.foundation.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Foundation', path: PAGE_META.foundation.path },
                ])}
            />
            <PageHeader 
                title="Urban College Foundation" 
                subtitle="Building students' futures through philanthropy, community support, and strategic investments."
                breadcrumbs={breadcrumbs}
            />

            {/* Intro Hero Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <span className="inline-block px-3 py-1 bg-ucb-blue/10 text-ucb-blue text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Our Philanthropic Arm
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ucb-blue mt-2 leading-tight">
                                    Your Gift Opens New Pathways to Opportunity
                                </h2>
                                <div className="h-1 w-20 bg-ucb-orange rounded-full mt-4"></div>
                            </ScrollAnimation>

                            <ScrollAnimation variant="fade-up" className="text-gray-600 text-sm md:text-base leading-relaxed font-light space-y-4">
                                <p>
                                    The Urban College Foundation supports Urban College's fundraising efforts and overall mission. Launched in September 2025, the Foundation represents a new era of philanthropy and community engagement for Urban College of Boston.
                                </p>
                                <p>
                                    Comprised of longtime changemakers and business leaders from the Greater Boston community, Foundation members are entrusted to advise the College on its philanthropic activities and expand its network to meet its goals.
                                </p>
                            </ScrollAnimation>
                        </div>

                        {/* President Callout Card */}
                        <div className="lg:col-span-5">
                            <ScrollAnimation variant="slide-left" className="bg-ucb-blue text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                                <div className="absolute -right-10 -bottom-10 opacity-10">
                                    <Heart className="w-64 h-64" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                            <Users className="w-6 h-6 text-ucb-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold text-sm">Dr. Yves Salomon-Fernández</h4>
                                            <p className="text-xs text-blue-200 uppercase tracking-wider font-bold">President, Urban College</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-light leading-relaxed italic opacity-95">
                                        "Unlike many four-year institutions, two-year colleges like ours that serve non-traditional students don't benefit from wealthy alumni or legacy networks. That's why we created the Foundation—to close the historic funding gap and ensure our students have the financial support they need to fully commit to their education."
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demographics Summary Card */}
            <section className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm max-w-3xl mx-auto space-y-4">
                            <h3 className="font-display font-bold text-xl text-ucb-blue">Closing the Funding Gap</h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-light">
                                Urban College serves over <strong>1,100 students</strong>—<strong>92%</strong> of whom identify as people of color and more than <strong>70%</strong> of whom speak a language other than English at home. The Foundation seeks to ensure financial barriers never stand between our students and their dreams.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Your Impact Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollAnimation variant="slide-right" className="space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-ucb-orange/10 flex items-center justify-center">
                                <Heart className="w-6 h-6 text-ucb-orange fill-ucb-orange/20" />
                            </div>
                            <h2 className="text-3xl font-display font-extrabold text-ucb-blue leading-tight">Your Impact</h2>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                                Supporting Urban College builds students' futures. Your gift helps support more than <strong>1,300 multilingual students</strong> pursuing degrees while working, parenting, and overcoming systemic barriers.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="bg-gray-50 rounded-3xl p-8 border border-gray-100 space-y-4">
                            <p className="text-sm font-semibold text-gray-800">
                                When You Give, You Support:
                            </p>
                            {supportItems.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-light">
                                    <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Chair Callout Block */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-ucb-orange/5 border border-ucb-orange/20 rounded-3xl p-8 max-w-2xl mx-auto text-center space-y-4 relative overflow-hidden">
                            <div className="absolute right-0 top-0 translate-y-1/2 translate-x-1/2 opacity-10">
                                <Award className="w-64 h-64 text-ucb-orange" />
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-ucb-orange/10 flex items-center justify-center mx-auto shrink-0">
                                <Briefcase className="w-6 h-6 text-ucb-orange" />
                            </div>
                            <h4 className="font-display font-bold text-lg text-ucb-blue">Tom O'Brien, Foundation Chair</h4>
                            <p className="text-sm text-gray-600 leading-relaxed font-light italic">
                                "Our goal is to strengthen the College's financial stability and broad network, ensuring we meet the diverse needs of our students. This effort is not just about financial support; it's about creating pathways and opportunities for success."
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Officers and Members Grid */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Foundation Directors</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Meet the Inaugural Foundation Members</h2>
                    </ScrollAnimation>

                    {/* Foundation Officers */}
                    <div className="space-y-6 mb-16">
                        <h3 className="font-display font-bold text-xs uppercase tracking-wider text-ucb-orange border-b border-gray-200 pb-2">Foundation Officers</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {OFFICERS.map((member, idx) => (
                                <ScrollAnimation key={idx} variant="slide-left" delay={`${(idx % 2) * 0.1}s`} className="flex">
                                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between w-full">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-ucb-blue/10 text-ucb-blue font-display font-black text-lg flex items-center justify-center shrink-0 overflow-hidden">
                                                    {member.image ? (
                                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                                                    ) : (
                                                        member.avatarInitials
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="font-display font-bold text-base text-ucb-blue leading-snug">{member.name}</h3>
                                                    <p className="text-xs font-bold text-ucb-orange leading-tight">{member.role}</p>
                                                </div>
                                            </div>

                                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                                {member.description}
                                            </p>
                                            
                                            {member.quote && (
                                                <div className="border-l-2 border-ucb-orange pl-3 py-1 bg-ucb-orange/5 rounded-r-lg">
                                                    <p className="text-xs text-gray-600 font-light italic">"{member.quote}"</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>

                    {/* Foundation Members */}
                    <div className="space-y-6">
                        <h3 className="font-display font-bold text-xs uppercase tracking-wider text-ucb-orange border-b border-gray-200 pb-2">Foundation Members</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MEMBERS.map((member, idx) => (
                                <ScrollAnimation key={idx} variant="slide-left" delay={`${(idx % 3) * 0.08}s`} className="flex">
                                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between w-full">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-ucb-teal/10 text-ucb-teal font-display font-black text-base flex items-center justify-center shrink-0 overflow-hidden">
                                                    {member.image ? (
                                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                                                    ) : (
                                                        member.avatarInitials
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="font-display font-bold text-sm text-ucb-blue leading-snug">{member.name}</h3>
                                                    <p className="text-[10px] font-bold text-gray-400 leading-tight">{member.role}</p>
                                                </div>
                                            </div>

                                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                                {member.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Ways to Give Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Giving Opportunities</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Ways to Give</h2>
                        <p className="text-gray-500 max-w-md mx-auto text-sm font-light mt-1">Select the giving pathway that fits your financial preferences.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {waysToGive.map((method, idx) => {
                            const Icon = method.icon;
                            return (
                                <ScrollAnimation key={idx} variant="fade-up" delay={`${idx * 0.05}s`} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                    <div>
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${method.color}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-display font-bold text-sm text-ucb-blue mb-2">{method.title}</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed font-light">{method.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Callout & CTA */}
            <section className="py-16 bg-gradient-to-r from-ucb-blue to-blue-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Call to Actions */}
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <h2 className="text-3xl font-display font-extrabold leading-tight">Be Part of Our Mission</h2>
                            <p className="opacity-90 text-base font-light leading-relaxed max-w-xl">
                                We invite you to be part of our continued journey. Together, we can ensure that every student has the opportunity to transform their life through education.
                            </p>
                            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link
                                    to="/donate"
                                    className="bg-ucb-orange text-white hover:bg-ucb-orange-glow font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px] flex items-center"
                                >
                                    Donate Now <Heart className="w-3.5 h-3.5 ml-2 text-white fill-white" />
                                </Link>
                            </div>
                        </div>

                        {/* Navigation Links Grid */}
                        <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-4">
                            <h3 className="font-display font-bold text-lg border-b border-white/10 pb-3">
                                Learn More
                            </h3>
                            <ul className="grid grid-cols-1 gap-2 text-sm">
                                <li>
                                    <Link to="/about" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        About Urban College
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/president" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Office of the President
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/trustees" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Board of Trustees
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Foundation Launch News Article
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

export default Foundation;
