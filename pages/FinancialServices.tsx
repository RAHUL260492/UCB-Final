import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    Coins, GraduationCap, Briefcase, Award, CheckCircle, 
    ArrowRight, Globe, Info, HelpCircle, ChevronRight, 
    Calendar, Calculator, Sparkles, BookOpen, ShieldCheck, ExternalLink
} from 'lucide-react';

interface MythCard {
    myth: string;
    reality: string;
}

const FinancialServices: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Admissions & Aid", path: "/admissions" },
        { label: "Financial Services & Funding" }
    ];

    const [activeMythIndex, setActiveMythIndex] = useState<number | null>(null);

    const aidTypes = [
        {
            type: "Grants",
            desc: "Available funding based on financial need, residency, or specific program selection.",
            repay: "No Repayment Needed",
            icon: Coins,
            color: "text-ucb-blue bg-blue-50 border-blue-100"
        },
        {
            type: "Scholarships",
            desc: "Need-based awards allocated by program and student success.",
            repay: "No Repayment Needed",
            icon: Award,
            color: "text-ucb-orange bg-orange-50 border-orange-100"
        },
        {
            type: "Work-Study",
            desc: "Earn money through part-time jobs that help you gain work experience while learning.",
            repay: "Earn Money (No Repayment)",
            icon: Briefcase,
            color: "text-ucb-teal bg-teal-50 border-teal-100"
        }
    ];

    // Free, trusted external scholarship search tools (mirrors the live
    // "Other Scholarship Opportunities" section).
    const externalScholarships = [
        { name: "Fastweb", desc: "One of the largest free scholarship search databases.", url: "https://www.fastweb.com/" },
        { name: "Scholarships.com", desc: "Search thousands of scholarships by category and profile.", url: "https://www.scholarships.com/" },
        { name: "Scholarships by State", desc: "Find scholarships available to students in your state.", url: "https://www.scholarships.com/financial-aid/college-scholarships/scholarships-by-state/" },
        { name: "Federal Student Aid: Finding Scholarships", desc: "The U.S. Department of Education's guide to finding scholarships.", url: "https://studentaid.gov/understand-aid/types/scholarships" },
        { name: "Unigo", desc: "Scholarship search and reviews for college students.", url: "https://www.unigo.com/" }
    ];

    const myths: MythCard[] = [
        {
            myth: "I won't qualify for aid because my parents make too much.",
            reality: "False! Complete the FAFSA and let the government determine your eligibility. Many families at various income levels qualify for grants and aid."
        },
        {
            myth: "I can't afford college even with financial aid.",
            reality: "False! Our financial services advisors create personalized tuition plans leveraging federal, state, and private grants to make tuition highly affordable."
        },
        {
            myth: "Applying for financial aid is too complicated.",
            reality: "False! The FAFSA has been simplified and takes about 10 minutes online. Our financial aid team is here to help you every step of the way."
        },
        {
            myth: "I must borrow student loans to attend college.",
            reality: "False! Loans are completely optional. Most of our students cover their tuition entirely through grants and scholarships that never need to be repaid."
        }
    ];

    return (
        <div>
            <SEO
                title={PAGE_META.financialServices.title}
                description={PAGE_META.financialServices.description}
                canonicalPath={PAGE_META.financialServices.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Financial Services', path: PAGE_META.financialServices.path },
                ])}
            />
            <PageHeader 
                title="Financial Services & Funding" 
                subtitle="Discover the options and resources available to fund your education. Our Financial Aid Office helps keep your out-of-pocket costs minimal."
                breadcrumbs={breadcrumbs}
            />

            {/* Affordability Pledge */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <span className="inline-block px-3 py-1 bg-ucb-blue/10 text-ucb-blue text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Our Affordability Promise
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ucb-blue mt-2 leading-tight">
                                    Higher Education Should Be Accessible to Everyone
                                </h2>
                                <div className="h-1 w-20 bg-ucb-orange rounded-full mt-4"></div>
                            </ScrollAnimation>

                            <ScrollAnimation variant="fade-up" className="text-gray-600 text-sm md:text-base leading-relaxed font-light space-y-4">
                                <p>
                                    Financial aid is money available to help you pay for your education. At Urban College of Boston, we're committed to making higher education affordable for every student.
                                </p>
                                <p>
                                    Through a combination of federal grants, state scholarships, institutional aid, and local programs, we work tirelessly to ensure that financial barriers never stand between you and your career goals.
                                </p>
                            </ScrollAnimation>
                        </div>

                        {/* Cost Stats Card */}
                        <div className="lg:col-span-5">
                            <ScrollAnimation variant="slide-left" className="bg-ucb-blue text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                                <div className="absolute -right-10 -bottom-10 opacity-10">
                                    <Coins className="w-64 h-64" />
                                </div>
                                <div className="relative z-10 text-center space-y-4">
                                    <h4 className="font-display font-bold text-lg uppercase tracking-wider text-ucb-gold">Tuition Value</h4>
                                    <div className="space-y-1">
                                        <span className="block text-4xl font-display font-black text-white">$317</span>
                                        <span className="block text-xs uppercase tracking-wider text-blue-200">per credit</span>
                                    </div>
                                    <div className="h-px bg-white/10 my-4"></div>
                                    <div className="space-y-1">
                                        <span className="block text-3xl font-display font-black text-white">$951</span>
                                        <span className="block text-xs uppercase tracking-wider text-blue-200">per course</span>
                                    </div>
                                    <p className="text-[11px] font-light opacity-90 pt-3 leading-relaxed">
                                    Unlike typical 4-year institutions, we keep our tuition rates low and help you access grants so that your out-of-pocket costs are minimized.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Financial Aid Outcomes */}
            <section className="py-12 bg-ucb-blue text-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        {[
                            { value: '99%', label: 'Graduate Debt-Free' },
                            { value: '11%', label: 'Of Students Have Out-of-Pocket Cost' },
                            { value: '$1,680', label: 'Average Out-of-Pocket Cost' },
                        ].map((stat, idx) => (
                            <ScrollAnimation key={idx} variant="fade-up" delay={`${idx * 0.1}s`}>
                                <span className="block text-4xl md:text-5xl font-display font-black text-ucb-gold">{stat.value}</span>
                                <span className="block text-xs uppercase tracking-wider text-blue-100 font-bold mt-2 leading-relaxed">{stat.label}</span>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Types of Aid Grid */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Support Types</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Types of Financial Aid</h2>
                        <p className="text-gray-500 max-w-md mx-auto text-sm font-light mt-1">
                            Three main types of aid are available to help you fund your classes:
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {aidTypes.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.1}s`}
                                    className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group"
                                >
                                    <div className="space-y-4">
                                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center group-hover:scale-115 transition-transform ${item.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-ucb-blue">{item.type}</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                    <div className="pt-6 mt-6 border-t border-gray-100">
                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ucb-emerald">
                                            <CheckCircle className="w-4 h-4" /> {item.repay}
                                        </span>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How to Apply for FAFSA (4 Steps) */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-16">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Application Process</span>
                        <h2 className="text-3xl font-display font-extrabold text-ucb-blue">How to Apply for Federal Financial Aid</h2>
                        <p className="text-gray-500 max-w-md mx-auto text-sm font-light mt-2">
                            Secure your funding by following these simple steps:
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-100 hidden md:block z-0"></div>

                        {/* Step 1 */}
                        <ScrollAnimation variant="fade-up" delay="0.05s" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative z-10 text-center space-y-4">
                            <span className="w-10 h-10 rounded-xl bg-ucb-blue text-white font-display font-black text-lg flex items-center justify-center mx-auto shadow-sm">
                                1
                            </span>
                            <h4 className="font-display font-bold text-sm text-ucb-blue">Complete Portal</h4>
                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                Set up and complete your profile on Urban College's financial aid portal (completely free!).
                            </p>
                        </ScrollAnimation>

                        {/* Step 2 */}
                        <ScrollAnimation variant="fade-up" delay="0.1s" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative z-10 text-center space-y-4">
                            <span className="w-10 h-10 rounded-xl bg-ucb-blue text-white font-display font-black text-lg flex items-center justify-center mx-auto shadow-sm">
                                2
                            </span>
                            <h4 className="font-display font-bold text-sm text-ucb-blue">Fill Out FAFSA</h4>
                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                Submit the Free Application for Federal Student Aid at <a href="https://studentaid.gov" target="_blank" rel="noreferrer" className="text-ucb-orange hover:underline font-medium">studentaid.gov</a>. Use school code <strong className="text-ucb-blue">031305</strong>.
                            </p>
                        </ScrollAnimation>

                        {/* Step 3 */}
                        <ScrollAnimation variant="fade-up" delay="0.15s" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative z-10 text-center space-y-4">
                            <span className="w-10 h-10 rounded-xl bg-ucb-blue text-white font-display font-black text-lg flex items-center justify-center mx-auto shadow-sm">
                                3
                            </span>
                            <h4 className="font-display font-bold text-sm text-ucb-blue">Submit Documents</h4>
                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                Submit W-2 forms, tax return transcripts, ID verification, or request a Professional Judgment review if needed.
                            </p>
                        </ScrollAnimation>

                        {/* Step 4 */}
                        <ScrollAnimation variant="fade-up" delay="0.2s" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative z-10 text-center space-y-4">
                            <span className="w-10 h-10 rounded-xl bg-ucb-blue text-white font-display font-black text-lg flex items-center justify-center mx-auto shadow-sm">
                                4
                            </span>
                            <h4 className="font-display font-bold text-sm text-ucb-blue">Review Package</h4>
                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                Meet with a dedicated financial aid advisor to go over your personalized aid offer.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Aid Breakdowns */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Federal Aid Column */}
                        <ScrollAnimation variant="slide-right" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                            <h3 className="font-display font-bold text-xl text-ucb-blue border-b border-gray-100 pb-3">
                                Federal Student Aid
                            </h3>
                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                By completing the FAFSA, you may be eligible to receive:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-xs text-gray-600 font-light">
                                    <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                    <div>
                                        <strong className="block text-gray-800 font-semibold text-sm">Federal Pell Grants</strong>
                                        Grants ranging from <strong>$740 to $7,395 per year</strong> based entirely on demonstrated financial need. No repayment required.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-xs text-gray-600 font-light">
                                    <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                    <div>
                                        <strong className="block text-gray-800 font-semibold text-sm">Federal Supplemental Educational Opportunity Grant (FSEOG)</strong>
                                        A grant of <strong>$100–$300 per semester</strong> for undergraduates with exceptional financial need. Funds are limited, so apply early. No repayment required.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-xs text-gray-600 font-light">
                                    <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                    <div>
                                        <strong className="block text-gray-800 font-semibold text-sm">Federal Student Loans</strong>
                                        Low-interest educational loans (direct subsidized/unsubsidized) if you choose to borrow. Repayment begins after graduation.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-xs text-gray-600 font-light">
                                    <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                    <div>
                                        <strong className="block text-gray-800 font-semibold text-sm">Federal Work-Study</strong>
                                        Paid, part-time employment options allowing you to earn cash to help cover living expenses.
                                    </div>
                                </li>
                            </ul>
                        </ScrollAnimation>

                        {/* State & Institutional Aid Column */}
                        <ScrollAnimation variant="slide-left" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between space-y-6">
                            <div className="space-y-6">
                                <h3 className="font-display font-bold text-xl text-ucb-blue border-b border-gray-100 pb-3">
                                    State & Local Funding
                                </h3>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    Massachusetts residents and specialized professionals can access:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-xs text-gray-600 font-light">
                                        <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-gray-800 font-semibold text-sm">MASS Grant Program</strong>
                                            State-funded tuition grants for eligible full-time and part-time residents (MassGrant & MassGrant Plus).
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 text-xs text-gray-600 font-light">
                                        <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-gray-800 font-semibold text-sm">ECE Scholarship</strong>
                                            Specialized state scholarship for currently employed Early Childhood Educators taking eligible courses.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 text-xs text-gray-600 font-light">
                                        <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-gray-800 font-semibold text-sm">MA High Demand Scholarship</strong>
                                            State scholarship for residents pursuing degrees in designated high-demand fields such as education, health, social work, and business.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 text-xs text-gray-600 font-light">
                                        <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-gray-800 font-semibold text-sm">Tuition Free Community College (TFCC)</strong>
                                            The City of Boston covers up to three years of tuition and fees for eligible Boston residents in approved programs.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="bg-ucb-orange/5 border border-ucb-orange/15 rounded-2xl p-4 mt-6">
                                <h5 className="text-xs font-bold text-ucb-blue uppercase tracking-wider mb-1">Scholarship Policies</h5>
                                <p className="text-[11px] text-gray-500 font-light leading-relaxed mb-3">
                                    Visit the Mass Office of Student Financial Aid to view detailed scholarship policies.
                                </p>
                                <a
                                    href="https://www.mass.edu/osfa/programs/massgrant.asp"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center text-[10px] font-bold text-ucb-orange uppercase tracking-wider hover:underline"
                                >
                                    Visit Mass OSFA <ChevronRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Institutional Scholarships */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Requirements */}
                        <div className="lg:col-span-7 space-y-6">
                            <ScrollAnimation variant="slide-right">
                                <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block mb-2">Institutional Support</span>
                                <h2 className="text-3xl font-display font-bold text-ucb-blue">Urban College Scholarships & Assistance</h2>
                                <div className="h-1 w-16 bg-ucb-orange rounded-full mt-4"></div>
                            </ScrollAnimation>

                            <ScrollAnimation variant="slide-right" className="text-gray-600 text-sm leading-relaxed font-light space-y-4">
                                <p>
                                    Beyond government programs, Urban College of Boston offers institutional scholarship funds to close funding gaps for our students. These awards are designed to support students who qualify and demonstrate financial need.
                                </p>
                                <p>
                                    Eligible students may receive up to <strong className="text-ucb-blue">$200 per course</strong> through the Institutional Grant — <a href="https://forms.office.com/pages/responsepage.aspx?id=HnCdJ2cNiUupTrgmGCPjKyySsSnWljpEnQadnkdsUOVUMjBRUVdPVDhTN0daWDFJOElLWlRNQUpYVC4u&route=shorturl" target="_blank" rel="noreferrer" className="text-ucb-orange hover:underline font-semibold">apply with the Institutional Aid form</a>.
                                </p>
                            </ScrollAnimation>
                        </div>

                        {/* CTA Subpage Trigger Card */}
                        <div className="lg:col-span-5">
                            <ScrollAnimation variant="slide-left" className="bg-gradient-to-br from-ucb-orange to-orange-600 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between min-h-[300px]">
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <h4 className="font-display font-bold text-lg leading-tight text-shadow-legible">Need a Payment Plan or Employer Reimbursement?</h4>
                                    <p className="text-xs font-light leading-relaxed text-shadow-legible">
                                        If you aren't eligible for full financial aid or need to check self-pay payment methods, explore our payment guidelines.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <Link 
                                        to="/tuition-payment-options" 
                                        className="bg-white text-ucb-orange hover:bg-ucb-blue hover:text-white font-bold py-3 px-6 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px] inline-flex items-center justify-center w-full"
                                    >
                                        View Payment Options & methods
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Scholarship Opportunities */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Keep Searching</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Other Scholarship Opportunities</h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-sm font-light mt-1">
                            Beyond Urban College, state, and federal aid, these free and trusted scholarship search tools can help you find additional funding:
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {externalScholarships.map((s, idx) => (
                            <ScrollAnimation key={s.name} variant="fade-up" delay={`${(idx % 3) * 0.08}s`} className="h-full">
                                <a
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-ucb-orange/40 hover:shadow-md transition-all flex items-start justify-between gap-3 h-full"
                                >
                                    <div>
                                        <h3 className="font-display font-bold text-sm text-ucb-blue">{s.name}</h3>
                                        <p className="text-xs text-gray-500 font-light leading-relaxed mt-1">{s.desc}</p>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-ucb-orange shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Preview */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <ScrollAnimation variant="fade-up" className="space-y-6">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs block">Video Resource</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">How to Attend Urban College for Low or No Cost</h2>
                        <p className="text-gray-500 text-sm font-light max-w-md mx-auto">
                            Watch our brief walkthrough detailing state scholarships, federal pell grants, and financial aid guidance.
                        </p>
                        
                        <div className="relative aspect-video max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-ucb-blue">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/G_TSdC53Gsk"
                                title="How to Attend Urban College for Low or No Cost"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Flip Myths Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Myth vs Reality</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Common Myths About Financial Aid</h2>
                        <p className="text-gray-500 leading-relaxed text-sm font-light mt-1">Don't let misunderstandings block your college degree.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {myths.map((item, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${idx * 0.05}s`}
                            >
                                <div
                                    onClick={() => setActiveMythIndex(activeMythIndex === idx ? null : idx)}
                                    className={`bg-gray-50 rounded-2xl p-6 border transition-all duration-300 cursor-pointer min-h-[160px] flex flex-col justify-between ${activeMythIndex === idx
                                        ? 'bg-blue-50/50 border-ucb-blue/30 shadow-md'
                                        : 'border-gray-100 hover:border-ucb-blue/20 hover:shadow-sm'
                                        }`}
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-ucb-orange font-bold text-xs uppercase tracking-wider">
                                            <HelpCircle className="w-4 h-4 shrink-0" />
                                            <span>Myth</span>
                                        </div>
                                        <h4 className="font-display font-bold text-sm text-ucb-blue leading-snug">
                                            "{item.myth}"
                                        </h4>
                                    </div>
                                    
                                    <div className={`transition-all duration-300 overflow-hidden mt-3 ${activeMythIndex === idx ? 'max-h-[150px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="pt-3 border-t border-gray-100 text-xs text-gray-600 leading-relaxed font-light">
                                            <strong className="text-ucb-emerald block uppercase text-[10px] tracking-wider font-bold mb-1">Reality:</strong>
                                            {item.reality}
                                        </div>
                                    </div>
                                    
                                    {activeMythIndex !== idx && (
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider pt-2 block self-end">
                                            Click to reveal reality &rarr;
                                        </span>
                                    )}
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Net Price Calculator & CTAs */}
            <section className="py-16 bg-gradient-to-r from-ucb-blue to-blue-950 text-white relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Call to Actions */}
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <h2 className="text-3xl font-display font-extrabold leading-tight">Ready to Pay for College?</h2>
                            <p className="opacity-90 text-sm md:text-base font-light leading-relaxed max-w-xl">
                                Our financial aid advisors are here to answer your questions and help you maximize your funding. Contact us today—getting aid is easier than you think!
                            </p>
                            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                                <a 
                                    href="https://studentaid.gov" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px] flex items-center justify-center"
                                >
                                    Start FAFSA <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                </a>
                                <Link 
                                    to="/admissions" 
                                    className="bg-white text-ucb-blue hover:bg-ucb-orange hover:text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-all shadow-md min-h-[44px] flex items-center justify-center"
                                >
                                    Meet With an Advisor
                                </Link>
                            </div>
                        </div>

                        {/* Net Price Calculator Card */}
                        <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-4 text-left">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <Calculator className="w-5 h-5 text-ucb-gold" />
                            </div>
                            <h3 className="font-display font-bold text-lg">
                                Net Price Calculator
                            </h3>
                            <p className="text-xs font-light opacity-90 leading-relaxed">
                                Calculate your custom educational costs and view personalized eligibility summaries.
                            </p>
                            <div className="pt-2">
                                <a
                                    href="https://calculator.studentaidprocess.com/calculator/(S(excftj5fpuzvraho1a4vufiv))/netpricecalculator?corpid=161"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-ucb-gold hover:text-white transition-colors"
                                >
                                    Calculate Your Cost <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FinancialServices;
