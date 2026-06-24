import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    CreditCard, Calendar, Briefcase, FileText, CheckCircle, 
    ArrowRight, MapPin, Phone, Mail, Clock, HelpCircle, 
    DollarSign, Percent, ShieldCheck, ChevronRight, Calculator, ExternalLink
} from 'lucide-react';

const TuitionPaymentOptions: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Admissions & Aid", path: "/admissions" },
        { label: "Financial Services & Funding", path: "/financial-services-and-funding-options" },
        { label: "Tuition Payment Options" }
    ];

    const paymentMethods = [
        {
            title: "Federal Financial Aid",
            desc: "Submit a FAFSA to determine federal Pell grants, loans, and work-study eligibility.",
            details: [
                "Urban College FAFSA School Code: 031305",
                "Determines eligibility for the Federal Pell Grant, FSEOG, subsidized & unsubsidized loans, and Federal Work-Study.",
                "Begin the process at StudentAid.gov",
                "Complete the Online Financial Aid Process in the Student Portal."
            ],
            contact: {
                phone: "(617) 449-7429",
                email: "financialservices@urbancollege.edu",
                hours: "Monday – Friday 10:00am – 6:00pm (ET)"
            },
            icon: Percent,
            color: "text-ucb-blue bg-blue-50 border-blue-100"
        },
        {
            title: "Nelnet Payment Plans",
            desc: "Spread your remaining tuition balance over the course of the semester with flexible installment terms.",
            details: [
                "Sign up easily online in the Student Portal.",
                "Affordable setup fee, no interest charges.",
                "Automated monthly draft payments."
            ],
            contact: {
                phone: "(617) 449-7430 or (617) 449-7429",
                email: "financialservices@urbancollege.edu",
                hours: "Monday – Friday 10:00am – 6:00pm (ET)"
            },
            icon: Calendar,
            color: "text-ucb-teal bg-teal-50 border-teal-100"
        },
        {
            title: "Self-Pay Methods",
            desc: "Pay your balance directly via personal check, cashier's check, credit card, or debit card.",
            details: [
                "Checks: Mail to Urban College Business Office (2 Boylston St, 2nd Floor, Boston, MA 02116). *Include Student ID on check.",
                "Credit/Debit: Contact our Business Office via phone or email."
            ],
            contact: {
                phone: "(617) 449-7430",
                email: "studentaccounts@urbancollege.edu",
                hours: "Business Office Hours"
            },
            icon: CreditCard,
            color: "text-ucb-orange bg-orange-50 border-orange-100"
        }
    ];

    const stateGrants = [
        {
            title: "MASS Grant & Part-Time MASS Grant",
            desc: "State-funded grants awarded by the Commonwealth of Massachusetts to eligible full-time and part-time students.",
            criteria: [
                "MASS Grant: For eligible full-time students.",
                "MASS Part-Time: For students completing between 6 and 12 credits in Fall and Spring.",
                "Requirements: Students must complete the FAFSA to be considered for both grants."
            ],
            link: "https://www.mass.edu/osfa/programs/massgrant.asp",
            linkLabel: "MASS Grant website"
        },
        {
            title: "Early Childhood Educators (ECE) Scholarship",
            desc: "Designed to provide financial assistance for currently employed early childhood and out-of-school time educators.",
            criteria: [
                "Applies to associate, bachelor, or master's degrees in ECE or related fields.",
                "Requirements: Must complete the FAFSA and the official ECE Application by the deadline to be considered."
            ],
            link: "https://www.mass.edu/osfa/programs/earlychildhooded.asp",
            linkLabel: "Office of Financial Assistance website"
        },
        {
            title: "Massachusetts High Demand Scholarship",
            desc: "State scholarship for Massachusetts residents pursuing degrees in designated high-demand fields, such as education, health professions, social work, and business.",
            criteria: [
                "Eligibility: Massachusetts resident enrolled in a qualifying high-demand major with a minimum 3.0 GPA.",
                "Requirements: Students must complete the FAFSA and apply through the MASSAid Student Portal to be considered."
            ],
            link: "https://www.mass.edu/osfa/programs/highdemand.asp",
            linkLabel: "High Demand Scholarship website"
        },
        {
            title: "Private Scholarship and Donations",
            desc: "Urban College receives private scholarships and donations from several state and local community partners. To see if you are eligible for one of these opportunities, contact your financial services advisor to discuss what options are available.",
            criteria: [],
            link: "mailto:financialservices@urbancollege.edu",
            linkLabel: "Contact Financial Services"
        }
    ];

    // Free, trusted external scholarship search tools (mirrors the live
    // "Other Scholarship Opportunities" section on Financial Services).
    const externalScholarships = [
        { name: "Fastweb", desc: "One of the largest free scholarship search databases.", url: "https://www.fastweb.com/" },
        { name: "Scholarships.com", desc: "Search thousands of scholarships by category and profile.", url: "https://www.scholarships.com/" },
        { name: "Scholarships by State", desc: "Find scholarships available to students in your state.", url: "https://www.scholarships.com/financial-aid/college-scholarships/scholarships-by-state/" },
        { name: "Federal Student Aid: Finding Scholarships", desc: "The U.S. Department of Education's guide to finding scholarships.", url: "https://studentaid.gov/understand-aid/types/scholarships" },
        { name: "Unigo", desc: "Scholarship search and reviews for college students.", url: "https://www.unigo.com/" }
    ];

    return (
        <div>
            <SEO
                title={PAGE_META.tuitionPayment.title}
                description={PAGE_META.tuitionPayment.description}
                canonicalPath={PAGE_META.tuitionPayment.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Tuition Payment', path: PAGE_META.tuitionPayment.path },
                ])}
            />
            <PageHeader 
                title="Tuition Payment Options" 
                subtitle="Standard cost: $317 per credit or $951 per course. Explore payment methods, installment plans, and state scholarship programs."
                breadcrumbs={breadcrumbs}
            />

            {/* Attendance Cost Summary */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <span className="inline-block px-3 py-1 bg-ucb-orange/10 text-ucb-orange text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Direct Costs
                                </span>
                                <h2 className="text-3xl font-display font-extrabold text-ucb-blue mt-2 leading-tight">
                                    Flexible Payment Structures Built for You
                                </h2>
                                <div className="h-1 w-20 bg-ucb-orange rounded-full mt-4"></div>
                            </ScrollAnimation>

                            <ScrollAnimation variant="fade-up" className="text-gray-600 text-sm leading-relaxed font-light space-y-4">
                                <p>
                                    Urban College of Boston offers several options to help students fund their education. Depending on the program of study, Urban College offers state, City of Boston, and federal financial aid to those who are eligible.
                                </p>
                                <p>
                                    If you have a remaining tuition balance after grants and scholarships are applied, or if you choose to pay your tuition independently, we provide direct payment methods, interest-free monthly installment plans, and support for company reimbursement programs.
                                </p>
                            </ScrollAnimation>
                        </div>

                        {/* Standard Rate Badge */}
                        <div className="lg:col-span-5 bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-sm">
                            <ScrollAnimation variant="scale-in" className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-ucb-orange/10 text-ucb-orange flex items-center justify-center mx-auto">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h4 className="font-display font-bold text-sm text-ucb-blue uppercase tracking-wider">Direct Tuition Rates</h4>
                                <ul className="space-y-2 text-xs text-gray-500 font-light">
                                    <li><strong className="text-gray-800 font-semibold">$317</strong> per Credit Hour</li>
                                    <li><strong className="text-gray-800 font-semibold">$951</strong> per 3-Credit Course</li>
                                </ul>
                                <p className="text-[10px] text-gray-400 font-light leading-relaxed pt-2">
                                    Rates subject to adjustments as authorized by the College Board.
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payment Methods Grid */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Direct Options</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Standard Payment Methods</h2>
                        <p className="text-gray-500 max-w-md mx-auto text-sm font-light mt-1">
                            Choose the payment or installment method that best suits your financial situation:
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {paymentMethods.map((method, idx) => {
                            const Icon = method.icon;
                            return (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.08}s`}
                                    className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group"
                                >
                                    <div className="space-y-4">
                                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform ${method.color}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-display font-bold text-base text-ucb-blue">{method.title}</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed font-light">{method.desc}</p>
                                        <ul className="space-y-2 pt-2 border-t border-gray-50">
                                            {method.details.map((detail, dIdx) => (
                                                <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                                                    <CheckCircle className="w-3.5 h-3.5 text-ucb-emerald shrink-0 mt-0.5" />
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pt-6 mt-6 border-t border-gray-100 space-y-2 text-[10px] text-gray-400 font-medium">
                                        <div className="flex items-center gap-1.5 hover:text-ucb-orange transition-colors">
                                            <Phone className="w-3 h-3 text-ucb-blue shrink-0" />
                                            <span>{method.contact.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 hover:text-ucb-orange transition-colors">
                                            <Mail className="w-3.5 h-3.5 text-ucb-blue shrink-0" />
                                            <a href={`mailto:${method.contact.email}`}>{method.contact.email}</a>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-ucb-blue shrink-0" />
                                            <span>{method.contact.hours}</span>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Employer Tuition Benefit */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Company Support</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Employer Tuition Benefits</h2>
                        <p className="text-gray-500 max-w-md mx-auto text-sm font-light mt-1">
                            Many companies offer employee tuition reimbursement. Explore the two pathways to leverage your employer benefit:
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Employer Reimbursement */}
                        <ScrollAnimation variant="slide-right" className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-ucb-orange/10 text-ucb-orange flex items-center justify-center shrink-0">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <h3 className="font-display font-bold text-lg text-ucb-blue">Employer Reimbursement</h3>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    If your employer reimburses you after your courses are completed, you will need to arrange tuition coverage at registration and submit grades to your employer for refund.
                                </p>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    Contact financial services to set up a temporary payment structure or Nelnet plan until reimbursement.
                                </p>
                            </div>
                            <div className="pt-6 mt-6 border-t border-gray-200 text-[10px] text-gray-400 font-medium space-y-1">
                                <div className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-ucb-blue" /> (617) 449-7429</div>
                                <div className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-ucb-blue" /> <a href="mailto:financialservices@urbancollege.edu" className="hover:underline">financialservices@urbancollege.edu</a></div>
                            </div>
                        </ScrollAnimation>

                        {/* Employer Support */}
                        <ScrollAnimation variant="slide-left" className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-ucb-teal/10 text-ucb-teal flex items-center justify-center shrink-0">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h3 className="font-display font-bold text-lg text-ucb-blue">Employer Support</h3>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    If your employer pays Urban College of Boston directly for the cost of your tuition, we can invoice your company directly.
                                </p>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    To set this up, please complete the official <strong className="text-ucb-blue">Employer Tuition Support</strong> form and submit it to the Business Office.
                                </p>
                            </div>
                            <div className="pt-6 mt-6 border-t border-gray-200">
                                <a
                                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=HnCdJ2cNiUupTrgmGCPjKyySsSnWljpEnQadnkdsUOVUMTMzWk1WNjU5VFEwS0VMWkVST0U4UVJYUy4u"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-ucb-blue text-white hover:bg-ucb-orange text-[10px] uppercase font-bold py-2 px-5 rounded-full transition-colors tracking-wide min-h-[38px] flex items-center justify-center w-full shadow-sm"
                                >
                                    Employer Tuition Support Form
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Grants & Scholarships Detailed Column List */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Scholarship Programs</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Grants & Scholarships</h2>
                        <p className="text-gray-500 max-w-md mx-auto text-sm font-light mt-1">
                            Unlike student loans, grants and scholarships do not need to be repaid. Explore these programs to see if you qualify:
                        </p>
                    </ScrollAnimation>

                    <div className="space-y-8">
                        {/* Urban College Institutional Grant */}
                        <ScrollAnimation variant="fade-up" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between gap-6">
                            <div className="space-y-4 max-w-xl">
                                <h3 className="font-display font-bold text-lg text-ucb-blue">Institutional Urban College Grant</h3>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    Urban College of Boston offers financial assistance up to <strong>$200 per course</strong> to eligible students who demonstrate funding gaps.
                                </p>
                                <ul className="space-y-1">
                                    <li className="flex items-center gap-2 text-xs text-gray-600 font-light">
                                        <CheckCircle className="w-3.5 h-3.5 text-ucb-emerald shrink-0" />
                                        Complete the Institutional Aid Request Form to apply.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center shrink-0 min-w-[200px] border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6 text-xs text-gray-400 font-medium space-y-1.5">
                                <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Contact & Forms</span>
                                <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-ucb-blue" /> (617) 449-7429</div>
                                <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-ucb-blue" /> <a href="mailto:financialservices@urbancollege.edu" className="hover:underline">financialservices@urbancollege.edu</a></div>
                                <a href="https://forms.office.com/pages/responsepage.aspx?id=HnCdJ2cNiUupTrgmGCPjKyySsSnWljpEnQadnkdsUOVUMjBRUVdPVDhTN0daWDFJOElLWlRNQUpYVC4u&route=shorturl" target="_blank" rel="noreferrer" className="text-ucb-orange hover:underline font-bold text-[10px] uppercase tracking-wider pt-2 block">Institutional Aid Form &rarr;</a>
                            </div>
                        </ScrollAnimation>

                        {stateGrants.map((grant, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between gap-6"
                            >
                                <div className="space-y-4 max-w-xl">
                                    <h3 className="font-display font-bold text-lg text-ucb-blue">{grant.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed font-light">{grant.desc}</p>
                                    <ul className="space-y-2">
                                        {grant.criteria.map((item, cIdx) => (
                                            <li key={cIdx} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                                                <CheckCircle className="w-3.5 h-3.5 text-ucb-emerald shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col justify-center shrink-0 min-w-[200px] border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">
                                    <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Program Details</span>
                                    <a 
                                        href={grant.link} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="inline-flex items-center text-[10px] font-bold text-ucb-orange uppercase tracking-wider hover:underline"
                                    >
                                        {grant.linkLabel.startsWith("Contact") ? "" : "Visit "}{grant.linkLabel} <ChevronRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Scholarship Opportunities */}
            <section className="py-16 bg-white border-t border-gray-100">
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
                                    className="group bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-ucb-orange/40 hover:shadow-md transition-all flex items-start justify-between gap-3 h-full"
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

            {/* Bottom CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-ucb-blue to-blue-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Call to Actions */}
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <h2 className="text-3xl font-display font-extrabold leading-tight">Ready to Set Up Your Funding?</h2>
                            <p className="opacity-90 text-sm md:text-base font-light leading-relaxed max-w-xl">
                                Urban College of Boston reserves the right to adjust tuition or institutional funding. Contact our financial services representatives today to finalize your tuition coverage plan.
                            </p>
                            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link 
                                    to="/financial-services-and-funding-options" 
                                    className="bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px] flex items-center justify-center"
                                >
                                    Financial Services Home
                                </Link>
                                <a 
                                    href="tel:+16174497429" 
                                    className="bg-white text-ucb-blue hover:bg-ucb-orange hover:text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-all shadow-md min-h-[44px] flex items-center justify-center gap-1.5"
                                >
                                    <Phone className="w-4 h-4 text-ucb-orange" /> Call (617) 449-7429
                                </a>
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
                                Estimate your tuition costs, grants, and scholarships before classes begin.
                            </p>
                            <div className="pt-2">
                                <a
                                    href="https://calculator.studentaidprocess.com/calculator/netpricecalculator?corpid=161"
                                    target="_blank"
                                    rel="noreferrer"
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

export default TuitionPaymentOptions;
