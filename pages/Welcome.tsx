import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import {
  CheckCircle2, DollarSign, MonitorSmartphone, BookOpen, HeartHandshake,
  GraduationCap, ExternalLink, Calendar, Mail, Phone,
} from 'lucide-react';

// Accepted-student "Welcome" landing page at /welcome.
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

const A: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} {...ext} className="text-ucb-orange font-semibold hover:underline">{children}</a>
);

const SectionCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <section className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)]">
    <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-5">
      <div className="w-10 h-10 rounded-2xl bg-ucb-blue/10 flex items-center justify-center text-ucb-blue shrink-0">{icon}</div>
      <h2 className="text-xl md:text-2xl font-display font-black text-ucb-blue">{title}</h2>
    </div>
    {children}
  </section>
);

const Check: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-3">
    <CheckCircle2 className="w-5 h-5 text-ucb-green shrink-0 mt-0.5" />
    <span className="text-gray-600 text-sm leading-relaxed font-light">{children}</span>
  </li>
);

const Welcome: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      <SEO
        title="Welcome to Urban College — You're In! | Urban College of Boston"
        description="Congratulations on your acceptance to Urban College of Boston! Your next steps — orientation, financial aid, system access, placement, and course registration."
        canonicalPath="/welcome"
      />
      <PageHeader
        title="Welcome to Urban College — You're In!"
        subtitle="Your home base for everything from confirming enrollment to getting ready for classes."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Welcome' }]}
        imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop"
        imagePosition="center"
      />

      <div className="container mx-auto px-6 max-w-4xl py-12 space-y-8">

        {/* Welcome video */}
        <div>
          <div className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-black" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://drive.google.com/file/d/1OG8FuIXIO2Ymc8EGrCjfcr_Zeqg5Znrx/preview"
              title="A welcome message from President Yves Salomon-Fernández"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">A welcome message from President Yves Salomon‑Fernández</p>
        </div>

        {/* Intro */}
        <div className="bg-gradient-to-br from-ucb-blue/5 to-ucb-orange/5 rounded-3xl p-6 md:p-8 border border-gray-100 space-y-4">
          <p className="text-gray-700 leading-relaxed font-medium">Congratulations on your acceptance to Urban College of Boston!</p>
          <p className="text-gray-600 leading-relaxed font-light text-sm">We're thrilled to welcome you to a diverse, supportive, and empowering learning community focused on your success. This page is your home base for your next steps — everything from confirming your enrollment to getting ready for classes.</p>
          <p className="text-gray-600 leading-relaxed font-light text-sm">We know starting college is a big step and it can feel complicated to navigate. We don't expect you to already know what to do, and we're here to guide you every step of the way. Whether you're balancing work, family, or learning in a new language, you've earned your place here — and we're excited to help you succeed.</p>
          <p className="text-ucb-blue font-display font-bold">Let's get started on your journey. Your future begins now.</p>
        </div>

        {/* Orientation */}
        <SectionCard icon={<Calendar className="w-5 h-5" />} title="Orientation">
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Orientation is required for all new students. We've created a fully asynchronous online orientation module that you can access at times convenient for you. <A href="https://d2ljc404.na1.hubspotlinks.com/Ctc/ZW+113/d2LJC404/VW0z671h03NNW68GXFP5kyfrkW3Z50n15yPRzLM_h9pH3m2nnW7lCdLW6lZ3pxW48NMGx5yfCknW5b8Gxg8ctqsBW7Z-dZK2tfqmVW8KqQv02DfvDvW3sRNKx3s8ryKVYrwWc7zhBkGW5t2By066yPYPVpFjhs5c3VL0VFSNg16F12GLN3tRjHt-ysZqW1wPDCt6tl5TFW2w98zQ5wmcLZW1lH7FB4TkWjbW1ywNwx767krsW1v52CD1r710fW4Hgql39jyrJXW3rHlty3C91YxN32wG2XC4mwxW6vw6t-4vBRVCN5XRh4jwrphBW29JyBM86BKn3W6RDPrD6BMYD8W7VCd8d56D-K3W8GsYp42NM68-f1PVfjH04">Access the New Student Orientation on Brightspace</A>.
          </p>
          <p className="text-sm font-bold text-gray-800 mb-2">What to expect at orientation:</p>
          <ul className="space-y-2 mb-4">
            <Check>Meet your advisor</Check>
            <Check>Review student policies</Check>
            <Check>Meet your peers</Check>
            <Check>Learn about Brightspace</Check>
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed font-light">This event will have live interpretation. In addition to orientation, the College offers a series of events throughout your academic journey called the <A href="https://www.canva.com/design/DAGqKGJ7kw0/lPqQcvyZgkaCLfPq5c37XA/view">Student Strong Pathway</A> to help you prepare for your first semester all the way through to graduation.</p>
        </SectionCard>

        {/* Financial Aid */}
        <SectionCard icon={<DollarSign className="w-5 h-5" />} title="Financial Aid">
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">Now that you've been accepted, it's time to get your financing in place and learn about the systems you'll need to be successful at the College.</p>
          <ul className="space-y-3">
            <Check>If you're using Federal Financial Aid, start the <A href="https://auth.globalfas.com/ssite/0313?branchid=0313">Financial Aid Portal</A>.</Check>
            <Check>If you're not eligible for Federal Financial Aid, explore the <A href="https://urbancollege.sharepoint.com/:u:/s/UrbanCollegeStudentFinancialServicesCenterResources/EUlaTbgrSqVGnWDkmCez6_gBxVXwtl4BT2tBOO_4ZvisZQ?e=GRiXAW">Student Financial Services Resource Center</A> for other financing options available to Urban College students.</Check>
            <Check>If you need assistance, set up a Financing Appointment with one of our Financial Aid Specialists — <A href="https://outlook-sdf.office.com/bookwithme/user/fe64ef3cd7394817aea0827e070987a0@urbancollege.edu?anonymous&ep=plink">English</A> or <A href="https://outlook-sdf.office.com/bookwithme/user/457381b8281e4252bc3a5d3977d170dc%40urbancollege.edu?anonymous">Spanish</A>.</Check>
          </ul>
        </SectionCard>

        {/* System Access */}
        <SectionCard icon={<MonitorSmartphone className="w-5 h-5" />} title="System Access">
          <ul className="space-y-3">
            <Check><A href="https://static1.squarespace.com/static/5be099a375f9eecbf2753e8d/t/61436472cbf1130059b8a28e/1717188562473/UCB+Email+Guide.pdf">Access your Urban College student email account</A>.</Check>
            <Check>Look for a Welcome Email full of important information for new students.</Check>
            <Check><A href="https://portal.urbancollege.edu/studsect.cfm">Set up Student Portal access</A>.</Check>
            <Check><A href="https://learn.urbancollege.edu">Log in to Brightspace</A>.</Check>
            <Check><A href="https://catalog.urbancollege.edu/">Explore the Student Handbook</A>.</Check>
            <Check><A href="https://drive.google.com/file/d/1KLP558DDH6-KuJc57bMFPsmWNyYwxZL8/view">Important Websites — quick reference</A>.</Check>
          </ul>
        </SectionCard>

        {/* Academic Prep */}
        <SectionCard icon={<BookOpen className="w-5 h-5" />} title="Academic Prep — Placement & Course Registration">
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            It's important that you're enrolled in classes that support your success. To do this, we need information about your math and English skills. If you graduated from a Massachusetts high school in the last five years, we may be able to use your high school, GED, or HiSET transcript for placement. If you've taken college courses elsewhere (including during high school), we may be able to use those for placement and to meet some academic requirements. If neither describes your background, you'll need to take the placement assessment.
          </p>
          <ul className="space-y-3">
            <Check>Placement Assessment Info — see the <Link to="/learning-resource-center" className="text-ucb-orange font-semibold hover:underline">Learning Resource Center</Link>.</Check>
            <Check><A href="https://6a3450308c3505cec7bc8de8--urbancollegesite.netlify.app/self-led-english-practice.html">Self‑led English practice</A>.</Check>
            <Check>Explore the <Link to="/learning-resource-center" className="text-ucb-orange font-semibold hover:underline">Learning Resource Center</Link>.</Check>
            <Check><strong className="text-gray-800 font-semibold">Course registration:</strong> <A href="https://portal.urbancollege.edu/GENSRsC.cfm">review available courses</A>, then contact your admissions counselor to complete course registration.</Check>
          </ul>
        </SectionCard>

        {/* Support & Accommodations */}
        <section className="bg-ucb-blue rounded-3xl p-6 md:p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center shrink-0"><HeartHandshake className="w-5 h-5" /></div>
            <h2 className="text-xl md:text-2xl font-display font-black">Need support or accommodations?</h2>
          </div>
          <p className="text-white/90 text-sm leading-relaxed font-light mb-4">
            If you're facing challenges related to disability, housing, food security, or other personal needs, contact Rosana Perella, Director of Student Services. She can help connect you with the right resources.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href="mailto:studentservices@urbancollege.edu" className="inline-flex items-center gap-1.5 bg-white text-ucb-blue font-bold text-sm px-4 py-2 rounded-full hover:bg-ucb-orange hover:text-white transition-colors"><Mail className="w-4 h-4" /> studentservices@urbancollege.edu</a>
            <a href="tel:+16174497380" className="inline-flex items-center gap-1.5 bg-white/10 border border-white/30 text-white font-bold text-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors"><Phone className="w-4 h-4" /> 617-449-7380</a>
          </div>
          <p className="text-white/90 text-sm leading-relaxed font-light">
            Visit the <Link to="/student-services" className="text-white font-semibold underline hover:text-ucb-orange-glow">Student Services</Link> page to learn more. To request accommodations, complete the <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=HnCdJ2cNiUupTrgmGCPjKzt0agm94stErG3OXo8chiNUQjlIRkpXVks5MEU2UU5QUUFMV0Y5Vk1LSy4u" {...ext} className="text-white font-semibold underline hover:text-ucb-orange-glow">Accommodation Request Form</a> and <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=HnCdJ2cNiUupTrgmGCPjKzt0agm94stErG3OXo8chiNUMjNJMk41V040S0czMURXVzBERlRYU0tNMC4u" {...ext} className="text-white font-semibold underline hover:text-ucb-orange-glow">Medical Provider Form</a>.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Welcome;
