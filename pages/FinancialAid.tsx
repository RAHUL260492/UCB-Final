import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    DollarSign, Calendar, Calculator, FileText, CheckCircle, 
    ArrowRight, MapPin, Phone, Mail, Clock, ShieldAlert,
    Download, HelpCircle, ChevronRight, GraduationCap, Briefcase
} from 'lucide-react';

interface FeeItem {
    type: string;
    charge: string;
}

const FinancialAid: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Admissions & Aid", path: "/admissions" },
        { label: "Tuition & Financial Aid" }
    ];

    const [activeTab, setActiveTab] = useState<'associate' | 'certificate'>('associate');

    const courseFees: FeeItem[] = [
        { type: "Photo ID Replacement Fee", charge: "$5.00" },
        { type: "Return Check Fee (Insufficient Funds)", charge: "$25.00" },
        { type: "Replacement Diploma", charge: "$29.95" },
        { type: "Portfolio Evaluation (CPL)", charge: "$50.00" },
        { type: "Transcript Fee – First Transcript", charge: "$0.00" },
        { type: "Transcript Fee – Subsequent Transcript", charge: "$5.40" }
    ];

    return (
        <div className="pt-24 lg:pt-32">
            <PageHeader 
                title="Tuition & Financial Aid" 
                subtitle="2026-2027 Academic Year cost structures, tuition rates, course fees, and Cost of Attendance (COA) estimates."
                breadcrumbs={breadcrumbs}
            />

            {/* Tuition Rates */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Standard Rates</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">2026-27 Award Year Tuition</h2>
                        <div className="h-1 w-20 bg-ucb-orange rounded-full mt-4 mx-auto"></div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <ScrollAnimation variant="slide-right" className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm text-center space-y-2 hover:shadow-md transition-all">
                            <span className="block text-xs uppercase font-bold tracking-wider text-gray-400">Cost Per Credit</span>
                            <span className="block text-4xl font-display font-black text-ucb-blue">$317</span>
                            <p className="text-xs text-gray-500 font-light leading-relaxed pt-2">
                                Applied flat across all academic programs, associate degrees, and certificate courses.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm text-center space-y-2 hover:shadow-md transition-all">
                            <span className="block text-xs uppercase font-bold tracking-wider text-gray-400">Cost Per 3-Credit Course</span>
                            <span className="block text-4xl font-display font-black text-ucb-orange">$951</span>
                            <p className="text-xs text-gray-500 font-light leading-relaxed pt-2">
                                Standard courses represent 3 credits of work. No hidden institutional or enrollment fees.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Fees Table */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Auxiliary Fees</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">2025-26 Award Year – Fees</h2>
                        <p className="text-gray-500 max-w-md mx-auto text-sm font-light mt-1">
                            Review auxiliary charges for replacement credentials, portfolio checks, and transcripts:
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fade-up" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden max-w-2xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-ucb-blue text-white uppercase text-xs font-bold tracking-wider">
                                        <th className="px-6 py-4">Fee Type</th>
                                        <th className="px-6 py-4 text-right">Charge</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-sm">
                                    {courseFees.map((fee, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4 text-gray-700 font-medium">{fee.type}</td>
                                            <td className="px-6 py-4 text-right text-gray-900 font-bold">{fee.charge}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Cost of Attendance Explanation */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <span className="inline-block px-3 py-1 bg-ucb-blue/10 text-ucb-blue text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Determining Aid
                                </span>
                                <h2 className="text-3xl font-display font-extrabold text-ucb-blue mt-2 leading-tight">
                                    Understanding Cost of Attendance (COA)
                                </h2>
                                <div className="h-1 w-20 bg-ucb-orange rounded-full mt-4"></div>
                            </ScrollAnimation>

                            <ScrollAnimation variant="fade-up" className="text-gray-600 text-sm md:text-base leading-relaxed font-light space-y-4">
                                <p>
                                    The **Cost of Attendance** is used to determine eligibility for Federal Financial Aid. Under federal rules, students may not receive more total funding than their total Cost of Attendance.
                                </p>
                                <p>
                                    The Cost of Attendance includes both <strong>Direct Costs</strong> (items billed directly to your student account, such as tuition) and <strong>Indirect Costs</strong> (estimated expenses not billed to the college, like transportation, personal expenses, and living off-campus).
                                </p>
                            </ScrollAnimation>
                        </div>

                        {/* Borrowing Warning Card */}
                        <div className="lg:col-span-5">
                            <ScrollAnimation variant="slide-left" className="bg-red-50 border border-red-200/60 rounded-3xl p-8 shadow-sm space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                                        <ShieldAlert className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-display font-bold text-sm text-red-900 uppercase tracking-wider">Borrowing Alert</h4>
                                </div>
                                <p className="text-xs text-red-800 leading-relaxed font-light">
                                    Borrowing over your Direct Costs can lead to unnecessary student debt. Urban College strongly encourages students to use grant and scholarship aid first before borrowing loans.
                                </p>
                                <p className="text-[11px] text-red-700 leading-relaxed font-light border-t border-red-200/50 pt-3">
                                    We only package students up to their Direct Costs automatically. If you wish to borrow more for indirect living expenses, contact financial services.
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* COA Schedule Tables (Associate vs Certificate Tabs) */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-8">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">COA Breakdown</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">2026-2027 Award Year Estimates</h2>
                        <p className="text-gray-500 max-w-md mx-auto text-sm font-light mt-1">
                            Select a schedule to view estimated full-time award year costs:
                        </p>
                    </ScrollAnimation>

                    {/* Tab Switcher */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white border border-gray-200 rounded-full p-1.5 shadow-sm inline-flex gap-2 relative z-10">
                            <button 
                                onClick={() => setActiveTab('associate')}
                                className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all min-h-[38px] ${activeTab === 'associate' ? 'bg-ucb-blue text-white shadow-sm' : 'text-gray-600 hover:text-ucb-blue'}`}
                            >
                                Associate Degree
                            </button>
                            <button 
                                onClick={() => setActiveTab('certificate')}
                                className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all min-h-[38px] ${activeTab === 'certificate' ? 'bg-ucb-blue text-white shadow-sm' : 'text-gray-600 hover:text-ucb-blue'}`}
                            >
                                Certificate Program (27 Credits)
                            </button>
                        </div>
                    </div>

                    <ScrollAnimation variant="fade-up" className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-ucb-blue text-white uppercase text-xs font-bold tracking-wider">
                                        <th className="px-6 py-4">Cost Category</th>
                                        <th className="px-6 py-4">Living Off Campus</th>
                                        <th className="px-6 py-4">Living with Parent</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-xs md:text-sm">
                                    {activeTab === 'associate' ? (
                                        <>
                                            {/* Associate Table */}
                                            <tr className="bg-blue-50/20 font-bold"><td className="px-6 py-3 text-ucb-blue text-xs uppercase tracking-wider" colSpan={3}>Direct Costs</td></tr>
                                            <tr className="hover:bg-gray-50/50"><td className="px-6 py-3.5 text-gray-700">Tuition</td><td className="px-6 py-3.5 text-gray-900 font-bold">$11,412</td><td className="px-6 py-3.5 text-gray-900 font-bold">$11,412</td></tr>
                                            <tr className="bg-gray-50/50 font-bold"><td className="px-6 py-3.5 text-gray-800">Total Direct Cost</td><td className="px-6 py-3.5 text-ucb-blue font-bold">$11,412</td><td className="px-6 py-3.5 text-ucb-blue font-bold">$11,412</td></tr>
                                            
                                            <tr className="bg-orange-50/20 font-bold"><td className="px-6 py-3 text-ucb-orange text-xs uppercase tracking-wider" colSpan={3}>Indirect Costs</td></tr>
                                            <tr className="hover:bg-gray-50/50"><td className="px-6 py-3.5 text-gray-700">Living Expenses (Food & Housing)</td><td className="px-6 py-3.5 text-gray-900 font-medium">$13,634</td><td className="px-6 py-3.5 text-gray-900 font-medium">$6,829</td></tr>
                                            <tr className="hover:bg-gray-50/50"><td className="px-6 py-3.5 text-gray-700">Transportation</td><td className="px-6 py-3.5 text-gray-900 font-medium">$923</td><td className="px-6 py-3.5 text-gray-900 font-medium">$923</td></tr>
                                            <tr className="hover:bg-gray-50/50"><td className="px-6 py-3.5 text-gray-700">Misc. Personal Expenses</td><td className="px-6 py-3.5 text-gray-900 font-medium">$4,286</td><td className="px-6 py-3.5 text-gray-900 font-medium">$4,286</td></tr>
                                            <tr className="hover:bg-gray-50/50"><td className="px-6 py-3.5 text-gray-700">Federal Student Loan Fees</td><td className="px-6 py-3.5 text-gray-900 font-medium">$44</td><td className="px-6 py-3.5 text-gray-900 font-medium">$44</td></tr>
                                            <tr className="hover:bg-gray-50/50"><td className="px-6 py-3.5 text-gray-700">Additional Allowances</td><td className="px-6 py-3.5 text-gray-900 font-medium">*</td><td className="px-6 py-3.5 text-gray-900 font-medium">*</td></tr>
                                            <tr className="bg-gray-50/50 font-bold"><td className="px-6 py-3.5 text-gray-800">Total Indirect Cost</td><td className="px-6 py-3.5 text-ucb-orange font-bold">$18,887</td><td className="px-6 py-3.5 text-ucb-orange font-bold">$12,082</td></tr>
                                            
                                            <tr className="bg-ucb-blue/10 font-bold text-sm"><td className="px-6 py-4 text-ucb-blue">Total Cost of Attendance (Direct + Indirect)</td><td className="px-6 py-4 text-ucb-blue text-base font-black">$30,299</td><td className="px-6 py-4 text-ucb-blue text-base font-black">$23,494</td></tr>
                                        </>
                                    ) : (
                                        <>
                                            {/* Certificate Table */}
                                            <tr className="bg-blue-50/20 font-bold"><td className="px-6 py-3 text-ucb-blue text-xs uppercase tracking-wider" colSpan={3}>Direct Costs</td></tr>
                                            <tr className="hover:bg-gray-50/50"><td className="px-6 py-3.5 text-gray-700">Tuition</td><td className="px-6 py-3.5 text-gray-900 font-bold">$8,559</td><td className="px-6 py-3.5 text-gray-900 font-bold">$8,559</td></tr>
                                            <tr className="bg-gray-50/50 font-bold"><td className="px-6 py-3.5 text-gray-800">Total Direct Cost</td><td className="px-6 py-3.5 text-ucb-blue font-bold">$8,559</td><td className="px-6 py-3.5 text-ucb-blue font-bold">$8,559</td></tr>
                                            
                                            <tr className="bg-orange-50/20 font-bold"><td className="px-6 py-3 text-ucb-orange text-xs uppercase tracking-wider" colSpan={3}>Indirect Costs</td></tr>
                                            <tr className="hover:bg-gray-50/50"><td className="px-6 py-3.5 text-gray-700">Living Expenses (Food & Housing)</td><td className="px-6 py-3.5 text-gray-900 font-medium">$13,156</td><td className="px-6 py-3.5 text-gray-900 font-medium">$6,589</td></tr>
                                            <tr className="hover:bg-gray-50/50"><td className="px-6 py-3.5 text-gray-700">Transportation</td><td className="px-6 py-3.5 text-gray-900 font-medium">$891</td><td className="px-6 py-3.5 text-gray-900 font-medium">$891</td></tr>
                                            <tr className="hover:bg-gray-50/50"><td className="px-6 py-3.5 text-gray-700">Misc. Personal Expenses</td><td className="px-6 py-3.5 text-gray-900 font-medium">$4,136</td><td className="px-6 py-3.5 text-gray-900 font-medium">$4,136</td></tr>
                                            <tr className="hover:bg-gray-50/50"><td className="px-6 py-3.5 text-gray-700">Federal Student Loan Fees</td><td className="px-6 py-3.5 text-gray-900 font-medium">$98</td><td className="px-6 py-3.5 text-gray-900 font-medium">$98</td></tr>
                                            <tr className="hover:bg-gray-50/50"><td className="px-6 py-3.5 text-gray-700">Additional Allowances</td><td className="px-6 py-3.5 text-gray-900 font-medium">*</td><td className="px-6 py-3.5 text-gray-900 font-medium">*</td></tr>
                                            <tr className="bg-gray-50/50 font-bold"><td className="px-6 py-3.5 text-gray-800">Total Indirect Cost</td><td className="px-6 py-3.5 text-ucb-orange font-bold">$18,281</td><td className="px-6 py-3.5 text-ucb-orange font-bold">$11,714</td></tr>
                                            
                                            <tr className="bg-ucb-blue/10 font-bold text-sm"><td className="px-6 py-4 text-ucb-blue">Total Cost of Attendance (Direct + Indirect)</td><td className="px-6 py-4 text-ucb-blue text-base font-black">$26,840</td><td className="px-6 py-4 text-ucb-blue text-base font-black">$20,273</td></tr>
                                        </>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </ScrollAnimation>
                    <p className="text-[10px] text-gray-400 font-light mt-3 leading-relaxed">
                        *Additional Allowances can be considered towards a student's cost of attendance on a case-by-case basis through Urban College's Professional Judgment process.
                    </p>
                </div>
            </section>

            {/* Resources & Links */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Quick Downloads</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Resources & Links</h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {/* Federal Policy Changes */}
                        <ScrollAnimation variant="fade-up" delay="0.05s" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <h3 className="font-display font-bold text-sm text-ucb-blue">Federal Policy Updates</h3>
                                <p className="text-xs text-gray-500 font-light leading-relaxed">
                                    Review the critical federal updates and financial policy shifts for the 2026-2027 Award Year.
                                </p>
                            </div>
                            <div className="pt-6">
                                <a 
                                    href="https://www.urbancollege.edu/s/Federal-Policy-Changes-26-27.pdf" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-ucb-orange uppercase tracking-wider hover:underline"
                                >
                                    Download PDF <Download className="w-4.5 h-4.5" />
                                </a>
                            </div>
                        </ScrollAnimation>

                        {/* Net Price Calculator */}
                        <ScrollAnimation variant="fade-up" delay="0.1s" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-ucb-teal/10 text-ucb-teal flex items-center justify-center">
                                    <Calculator className="w-5 h-5" />
                                </div>
                                <h3 className="font-display font-bold text-sm text-ucb-blue">Net Price Calculator</h3>
                                <p className="text-xs text-gray-500 font-light leading-relaxed">
                                    Obtain a personalized, estimated cost report based on your income and demographics.
                                </p>
                            </div>
                            <div className="pt-6">
                                <a 
                                    href="https://calculator.studentaidprocess.com/calculator/netpricecalculator?corpid=161" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-ucb-orange uppercase tracking-wider hover:underline"
                                >
                                    Calculate Cost <ChevronRight className="w-4.5 h-4.5" />
                                </a>
                            </div>
                        </ScrollAnimation>

                        {/* Funding Options */}
                        <ScrollAnimation variant="fade-up" delay="0.15s" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-ucb-orange/10 text-ucb-orange flex items-center justify-center">
                                    <Download className="w-5 h-5" />
                                </div>
                                <h3 className="font-display font-bold text-sm text-ucb-blue">Funding & Payment Options</h3>
                                <p className="text-xs text-gray-500 font-light leading-relaxed">
                                    Check self-pay check/card methods, Nelnet plans, and local MASS grants.
                                </p>
                            </div>
                            <div className="pt-6 flex flex-col gap-2">
                                <Link 
                                    to="/tuition-payment-options" 
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-ucb-blue uppercase tracking-wider hover:underline"
                                >
                                    Explore Payments &rarr;
                                </Link>
                                <a 
                                    href="https://www.urbancollege.edu/s/Payment-Method-Resource-Page-1.pdf" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="inline-flex items-center gap-1 text-[10px] text-gray-400 hover:underline"
                                >
                                    Download Resource PDF
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Financial Services Contact Block */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm max-w-3xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                <div className="md:col-span-7 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-display font-bold text-xl text-ucb-blue">Contact Financial Services</h3>
                                            <p className="text-xs text-gray-400 font-light">Dedicated student assistance office</p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3 font-medium text-xs md:text-sm text-gray-700">
                                        <a href="mailto:FinancialServices@urbancollege.edu" className="flex items-center gap-2 hover:text-ucb-orange transition-colors">
                                            <Mail className="w-4.5 h-4.5 text-ucb-blue" />
                                            FinancialServices@urbancollege.edu
                                        </a>
                                        <a href="tel:+16174497070" className="flex items-center gap-2 hover:text-ucb-orange transition-colors">
                                            <Phone className="w-4.5 h-4.5 text-ucb-blue" />
                                            (617) 449-7070, option 3
                                        </a>
                                        <div className="flex items-start gap-2">
                                            <MapPin className="w-4.5 h-4.5 text-ucb-blue mt-0.5" />
                                            <span>2 Boylston Street, 2nd Floor, Boston, MA 02116</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-5 bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4">
                                    <div className="flex items-center gap-2 text-xs font-bold text-ucb-blue uppercase">
                                        <Clock className="w-4 h-4" /> Administration Hours
                                    </div>
                                    <ul className="space-y-2 text-xs text-gray-600 font-light leading-relaxed">
                                        <li className="flex justify-between">
                                            <span>Monday – Friday:</span>
                                            <span className="font-semibold text-gray-800">10 AM – 6 PM</span>
                                        </li>
                                        <li className="border-t border-gray-200/50 pt-2 flex flex-col">
                                            <span className="font-semibold text-gray-800">On-Campus Services:</span>
                                            <span className="text-[10px]">Wednesdays & Thursdays</span>
                                        </li>
                                        <li className="border-t border-gray-200/50 pt-2 flex flex-col">
                                            <span className="font-semibold text-gray-800">Remote Services:</span>
                                            <span className="text-[10px]">Mondays, Tuesdays & Fridays</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default FinancialAid;
