import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { buildBreadcrumbJsonLd } from '../components/seo-data';
import {
    Quote, Megaphone, CalendarDays, UserPlus, HandHeart, Mail, ArrowRight,
    ExternalLink, Sparkles, Facebook, Instagram, Linkedin, Youtube
} from 'lucide-react';

const ALUMNI_EMAIL = 'alumni@urbancollege.edu';

// Written alumni stories. Each links to the full story on the blog; some feature a video.
type AlumniStory = { name: string; blurb: string; slug: string; video?: string };

const stories: AlumniStory[] = [
    {
        name: 'Charmaine Burrell',
        blurb: "After enrolling in Urban College's Human Services program while balancing work and family, Charmaine found a flexible, supportive environment that launched her path forward. Today she's completing her Master of Social Work and continues to uplift communities through service, leadership, and advocacy—locally and internationally.",
        slug: 'rising-together-how-education-fuels-service-leadership-and-uplifting-communities',
        video: 'RhrGmMrAwF8',
    },
    {
        name: 'Krystal Jackson Ray',
        blurb: "A first-generation student and single mother, Krystal nearly walked away from college twice. With support from Urban College's Student Success office and Learning Resource Center, she graduated with honors in Early Childhood Education—and is now headed to Lesley University, with a vision to open a community center for families and children with exceptional needs.",
        slug: 'from-doubt-to-determination-krystal-jackson-rays-journey-to-graduation-and-beyond',
        video: 'ZxF3_n2_bD0',
    },
    {
        name: 'Ayesha M. Wilson',
        blurb: "A self-described non-traditional learner, Ayesha found her passion for advocacy in Urban College's evening Human Services classes. She went on to earn her bachelor's and master's in social work, and today serves on the Cambridge City Council—championing affordable housing and universal preschool.",
        slug: 'celebrating-the-journey-of-ayesha-m-wilson-urban-college-alumna-and-city-councilor',
        video: 'uCpCTGQUens',
    },
    {
        name: 'Toy Burton',
        blurb: "Early Childhood Education alumna Toy Burton describes Urban College as a place where adult learners feel welcomed, supported, and understood—regardless of age, language, or background. Her message to current students is simple and powerful: keep going.",
        slug: 'sustaining-hope-alumna-toy-burton-and-the-power-of-mental-health-access',
    },
    {
        name: 'Elijah Watts',
        blurb: 'Through flexible online learning, strong advising, and a sense of belonging, Elijah earned his degree, graduated with honors, and transferred to pursue a career in geography and atmospheric sciences. Urban College met him where he was and helped him reach where he wanted to go.',
        slug: 'from-t-stops-to-tornadoes-how-one-student-found-his-path-at-urban-college',
    },
];

const involve = [
    {
        title: 'Share Your Story',
        icon: Megaphone,
        desc: 'Alumni voices matter. Share your journey through a written testimonial, video, podcast interview, or blog feature and help inspire current and future students.',
        action: { label: `Email ${ALUMNI_EMAIL}`, href: `mailto:${ALUMNI_EMAIL}`, external: true as const },
    },
    {
        title: 'Attend Alumni & Community Events',
        icon: CalendarDays,
        desc: 'From leadership celebrations to commencement and community gatherings, our events bring alumni, students, faculty, and supporters together to celebrate impact and build connections.',
        action: { label: 'See commencement', href: '/commencement', external: false as const },
    },
    {
        title: 'Mentor and Lead',
        icon: UserPlus,
        desc: 'Alumni play a vital role as mentors, guest speakers, and role models—sharing professional experience, encouragement, and guidance with current students.',
        action: { label: `Get in touch`, href: `mailto:${ALUMNI_EMAIL}`, external: true as const },
    },
    {
        title: 'Support Students & Give Back',
        icon: HandHeart,
        desc: 'Alumni support helps expand access to education through scholarships, academic programs, and student resources. Giving back—at any level—strengthens opportunity for the next generation.',
        action: { label: 'Make a gift', href: '/donate', external: false as const },
    },
];

const socials = [
    { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/urban-college-of-boston-a-two-year-college-inc' },
    { label: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@Urban_College' },
    { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/urbancollegeofboston/' },
    { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/UrbanCollegeBoston' },
];

const Alumni: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-gray-50/40 min-h-screen">
            <SEO
                title="Alumni | Urban College of Boston"
                description="Urban College of Boston alumni stories, ways to get involved, and how to stay connected. Share your story, mentor students, attend events, and give back to the next generation of learners."
                canonicalPath="/alumni"
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Alumni', path: '/alumni' },
                ])}
            />
            <PageHeader
                title={<>Once a student, always part of the <span className="text-ucb-gold">Urban College community.</span></>}
                subtitle="Your connection to Urban College doesn't end at graduation. As alumni rise in their careers and communities, they continue to lift others alongside them."
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Alumni' }]}
                imageSrc="https://images.unsplash.com/photo-1627556704302-624286467c65?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Featured video story */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <span className="inline-flex items-center gap-2 text-ucb-orange font-bold tracking-widest uppercase text-xs mb-3">
                            <Sparkles className="w-4 h-4" /> Alumni Stories
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-ucb-blue leading-tight">
                            Three Generations, One Dream
                        </h2>
                        <p className="text-lg text-gray-600 font-light leading-relaxed mt-4 max-w-2xl mx-auto">
                            For Miguel De Los Santos and his family, Urban College was a bridge to possibility. Miguel proudly
                            handed diplomas to both his wife and his mother at graduation—a multigenerational achievement rooted
                            in perseverance, encouragement, and community support.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fade-up" delay="0.1s" className="mt-8">
                        <div className="relative aspect-video max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-ucb-blue">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/RouYx7YOi3k"
                                title="Three Generations, One Dream: Miguel, Jacqueline, and Ramona"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Written stories */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">More Alumni Journeys</h2>
                        <p className="text-gray-500 font-light mt-2 max-w-2xl mx-auto">When adults—especially women—have access to education, entire families and communities benefit.</p>
                    </ScrollAnimation>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stories.map((s, idx) => (
                            <ScrollAnimation key={s.name} variant="fade-up" delay={`${idx * 0.08}s`} className="h-full">
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full overflow-hidden">
                                    {s.video && (
                                        <div className="relative aspect-video bg-ucb-blue">
                                            <iframe
                                                className="absolute inset-0 w-full h-full"
                                                src={`https://www.youtube.com/embed/${s.video}`}
                                                title={`${s.name} — Urban College alumni story`}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    )}
                                    <div className="p-7 flex flex-col flex-1">
                                        <Quote className="w-8 h-8 text-ucb-orange/30 mb-3" />
                                        <p className="text-sm text-gray-600 font-light leading-relaxed flex-1">{s.blurb}</p>
                                        <div className="mt-5 pt-4 border-t border-gray-100">
                                            <p className="font-display font-bold text-ucb-blue">{s.name}</p>
                                            {s.slug && (
                                                <Link to={`/blog/${s.slug}`} className="mt-2 inline-flex items-center gap-1 text-ucb-orange font-bold text-sm hover:gap-2 transition-all">
                                                    Read the full story <ArrowRight className="w-3.5 h-3.5" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ways to get involved */}
            <section className="py-16 bg-white border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Stay Engaged</span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">Ways to Get Involved</h2>
                    </ScrollAnimation>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {involve.map((it, idx) => {
                            const Icon = it.icon;
                            return (
                                <ScrollAnimation key={it.title} variant="fade-up" delay={`${(idx % 2) * 0.08}s`} className="h-full">
                                    <div className="bg-gray-50 rounded-3xl p-7 border border-gray-100 h-full flex flex-col">
                                        <div className="w-12 h-12 rounded-2xl bg-ucb-blue/10 text-ucb-blue flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-ucb-blue mb-1.5">{it.title}</h3>
                                        <p className="text-sm text-gray-600 font-light leading-relaxed flex-1">{it.desc}</p>
                                        {it.action.external ? (
                                            <a href={it.action.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-ucb-orange font-bold text-sm hover:gap-2 transition-all">
                                                {it.action.label} <ArrowRight className="w-4 h-4" />
                                            </a>
                                        ) : (
                                            <Link to={it.action.href} className="mt-4 inline-flex items-center gap-1 text-ucb-orange font-bold text-sm hover:gap-2 transition-all">
                                                {it.action.label} <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        )}
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stay connected */}
            <section className="py-16 bg-ucb-blue text-white">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Stay Connected</h2>
                        <p className="text-blue-100 font-light leading-relaxed max-w-2xl mx-auto mb-7">
                            Follow Urban College, sign up for alumni updates, and reach out to share news, accomplishments,
                            or opportunities to get involved. You are an essential part of Urban College's past, present, and future.
                        </p>
                        <div className="flex justify-center gap-4 mb-8">
                            {socials.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                                        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-ucb-orange-glow hover:scale-110 transition-all">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                        <a href={`mailto:${ALUMNI_EMAIL}`} className="bg-ucb-orange text-white font-bold py-3 px-7 rounded-full hover:bg-ucb-orange-glow transition-colors shadow-md min-h-[44px] inline-flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4" /> {ALUMNI_EMAIL}
                        </a>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default Alumni;
