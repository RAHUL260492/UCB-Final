import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { buildBreadcrumbJsonLd } from '../components/seo-data';
import { FileText, ClipboardList, CheckCircle } from 'lucide-react';

// Documents are hosted on the current Squarespace domain; absolute URLs keep
// them working until the assets are migrated into this site's /public folder.
const LIVE = 'https://www.urbancollege.edu';
const doc = (p: string) => `${LIVE}${p}`;

const quarterlyReports = [
    { label: 'Initial Report (3/13/20 – 9/30/20)', href: doc('/s/UCB-HEERF-Report-1-31320-93020.pdf') },
    { label: 'Second Report (10/1/20 – 12/31/20, rev. 5/6/22)', href: doc('/s/UCB-HEERF-Report-2-10120-123120-REV-5622.pdf') },
    { label: 'Third Report (1/1/21 – 3/31/21, rev. 5/6/22)', href: doc('/s/UCB-HEERF-Report-3-1121-33121-REV-5622.pdf') },
    { label: 'Fourth Report (4/1/21 – 6/30/21, rev. 5/6/22)', href: doc('/s/UCB-HEERF-Report-4-4121-63021-REV-5622.pdf') },
    { label: 'Fifth Report (Q3 2021, rev. 5/6/22)', href: doc('/s/03130500_HEERF_Q32021_101021_REV-5622.pdf') },
    { label: 'Sixth Report (Q4 2021)', href: doc('/s/03130500_HEERF_Q42021_011022.pdf') },
    { label: 'Seventh Report (Q1 2022)', href: doc('/s/03130500_HEERF_Q12022_041022.pdf') },
    { label: 'Eighth Report (Q2 2022, rev. 10/5/22)', href: doc('/s/03130500_HEERF_Q22022_071022_REV-10522.pdf') },
    { label: 'Ninth Report (Q3 2022)', href: doc('/s/03130500_HEERF_Q32022_10072022.pdf') },
    { label: 'Tenth Report — Final (Q4 2022)', href: doc('/s/0313055_HEERF_Q42022_011023.pdf') },
];

const studentAidDocs = [
    { label: 'CARES Act message from President Michael Taylor', href: doc('/s/CARES-Act-Emergency-Financial-Aid-Grants-Email-from-President-Taylor-9820.pdf') },
    { label: 'CARES Act Emergency Financial Aid Grants Form', href: doc('/s/CARES-Act-Emergency-Financial-Aid-Grants-Final-Form_with-translations.pdf') },
    { label: 'Emergency Financial Aid Grants Form (June 2021)', href: doc('/s/Emergency-Financial-Aid-Grants-for-Students_June-2021_FINAL.pdf') },
];

const disclosures = [
    'Urban College of Boston signed and returned the Certification and Agreement and committed to using no less than 50 percent of the funds received under Section 18004(a)(1) of the CARES Act to provide Emergency Financial Aid Grants to students.',
    'A total of $2,251,199 was dedicated to student aid from the HEERF I, II, and III allocations combined.',
    'Emergency Financial Aid Grants were disbursed to students on a rolling basis, with the full amount distributed by March 2022.',
    'An estimated 1,905 students were eligible to receive Emergency Financial Aid Grants (enrolled on or after March 13, 2020 through December 31, 2021).',
    'A total of 1,905 students received Emergency Financial Aid Grants.',
    'Grants were awarded based on enrollment, prior CARES Act receipt, and demonstrated financial need.',
];

const DocList: React.FC<{ items: { label: string; href: string }[] }> = ({ items }) => (
    <ul className="space-y-2">
        {items.map((d) => (
            <li key={d.label}>
                <a href={d.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-ucb-blue hover:text-ucb-orange transition-colors font-medium text-sm">
                    <FileText className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{d.label}</span>
                </a>
            </li>
        ))}
    </ul>
);

const HeerfReports: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/40 min-h-screen">
            <SEO
                title="HEERF Reports | Urban College of Boston"
                description="Higher Education Emergency Relief Fund (HEERF) public disclosures, quarterly institutional reports, and student aid documents for Urban College of Boston."
                canonicalPath="/heerf-reports"
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Compliance', path: '/compliance' },
                    { name: 'HEERF Reports', path: '/heerf-reports' },
                ])}
            />
            <PageHeader
                title="HEERF Reports"
                subtitle="Higher Education Emergency Relief Fund (HEERF) public disclosures and institutional reporting."
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Compliance', path: '/compliance' }, { label: 'HEERF Reports' }]}
                imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            <section className="py-14 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up">
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                            The Higher Education Emergency Relief Fund (HEERF) provided funding to institutions to award emergency
                            financial aid grants to students for expenses related to the disruption of campus operations due to
                            coronavirus. Urban College of Boston's public disclosures and quarterly reports are provided below.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-14">
                <div className="container mx-auto px-6 max-w-4xl space-y-6">
                    <ScrollAnimation variant="fade-up" className="bg-white rounded-3xl p-7 md:p-8 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-11 h-11 rounded-2xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center shrink-0">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <h2 className="font-display font-bold text-xl text-ucb-blue">Public Disclosures Regarding HEERF Funds</h2>
                        </div>
                        <ol className="space-y-3 list-decimal pl-5 text-sm text-gray-600 font-light leading-relaxed marker:text-ucb-orange marker:font-bold">
                            {disclosures.map((d, i) => <li key={i}>{d}</li>)}
                        </ol>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fade-up" className="bg-white rounded-3xl p-7 md:p-8 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-11 h-11 rounded-2xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center shrink-0">
                                <ClipboardList className="w-5 h-5" />
                            </div>
                            <h2 className="font-display font-bold text-xl text-ucb-blue">Quarterly Institutional Reports</h2>
                        </div>
                        <DocList items={quarterlyReports} />
                    </ScrollAnimation>

                    <ScrollAnimation variant="fade-up" className="bg-white rounded-3xl p-7 md:p-8 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-11 h-11 rounded-2xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center shrink-0">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h2 className="font-display font-bold text-xl text-ucb-blue">Student Aid Documents</h2>
                        </div>
                        <DocList items={studentAidDocs} />
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default HeerfReports;
