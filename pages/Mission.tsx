import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    Heart, Globe, DollarSign, GraduationCap, Clock, Users, 
    ChevronRight, ArrowRight, ShieldCheck
} from 'lucide-react';

const Mission: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const values = [
        {
            title: "Individualized Support & Care",
            desc: "We meet students where they are, providing 1-on-1 advising, tutoring, and personalized support from registration through graduation.",
            icon: Heart,
            color: "text-ucb-orange bg-ucb-orange/10 border-ucb-orange/20"
        },
        {
            title: "Multilingual & Multicultural",
            desc: "We celebrate and validate our students' diverse languages and backgrounds, offering courses in English, Spanish, and Mandarin.",
            icon: Globe,
            color: "text-ucb-blue bg-ucb-blue/10 border-ucb-blue/20"
        },
        {
            title: "Access & Radical Affordability",
            desc: "We believe high-quality higher education should be accessible to all, keeping tuition low and helping students graduate debt-free.",
            icon: DollarSign,
            color: "text-ucb-green bg-ucb-green/10 border-ucb-green/20"
        },
        {
            title: "Empowerment & Transformation",
            desc: "We equip learners with the practical skills and confidence to achieve career advancement and build long-term financial security for their families.",
            icon: GraduationCap,
            color: "text-ucb-teal bg-ucb-teal/10 border-ucb-teal/20"
        },
        {
            title: "Flexible Learning Formats",
            desc: "We offer fully online schedules to fit the busy lives of working adults, parent-students, and community members.",
            icon: Clock,
            color: "text-ucb-periwinkle bg-ucb-periwinkle/10 border-ucb-periwinkle/20"
        },
        {
            title: "Community Leadership",
            desc: "We nurture graduates who return to lead, serve, and inspire within their own communities and neighborhoods.",
            icon: Users,
            color: "text-ucb-gold bg-ucb-gold/10 border-ucb-gold/20"
        }
    ];

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/50">
            <SEO
                title={PAGE_META.mission.title}
                description={PAGE_META.mission.description}
                canonicalPath={PAGE_META.mission.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Mission', path: PAGE_META.mission.path },
                ])}
            />
            <PageHeader 
                title="Mission & Vision"
                subtitle="Our Core Purpose, Vision, and Institutional Commitments"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'About Us', path: '/about' },
                    { label: 'Mission & Vision' }
                ]}
                imageSrc="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop"
            />

            {/* Intro Header Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <span className="inline-block px-4 py-1.5 bg-ucb-blue/10 text-ucb-blue text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                            Embrace Your Dreams. Empower Your Life.
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-ucb-blue mb-6">
                            Guided by Purpose, Committed to Opportunity
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                            Urban College of Boston is defined by its deep commitment to community, diversity, and life transformation. We build educational pathways that empower students to boldly pursue their dreams.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Mission & Vision cards */}
            <section className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <ScrollAnimation variant="slide-right" className="flex">
                            <div className="bg-white p-10 rounded-3xl shadow-sm border-l-8 border-ucb-blue flex flex-col justify-between hover:shadow-md transition-all duration-300 w-full hover:-translate-y-1">
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-ucb-blue/10 text-ucb-blue text-[10px] font-bold uppercase tracking-wider rounded-full">
                                        Our Core Purpose
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">Our Mission</h3>
                                    <div className="h-0.5 w-12 bg-ucb-blue rounded-full"></div>
                                    <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                        Urban College of Boston opens new pathways to opportunity through individualized, supportive, and multilingual education that prepares a diverse community of learners to pursue career advancement and transform their lives.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Vision */}
                        <ScrollAnimation variant="slide-left" className="flex">
                            <div className="bg-white p-10 rounded-3xl shadow-sm border-l-8 border-ucb-orange flex flex-col justify-between hover:shadow-md transition-all duration-300 w-full hover:-translate-y-1">
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-ucb-orange/10 text-ucb-orange text-[10px] font-bold uppercase tracking-wider rounded-full">
                                        Our Aspiration
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-ucb-orange">Our Vision</h3>
                                    <div className="h-0.5 w-12 bg-ucb-orange rounded-full"></div>
                                    <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                        Urban College of Boston graduates are gainfully employed (well-paying jobs), leading in their communities, and on the path to building financial security for themselves and their families.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-16">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Our Foundations</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-ucb-blue">Our Core Values</h2>
                        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed font-light mt-2">
                            These core principles guide our faculty, staff, and leadership as we support our students' educational journeys.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((val, idx) => {
                            const Icon = val.icon;
                            return (
                                <ScrollAnimation key={idx} variant="fade-up" delay={`${(idx % 3) * 0.08}s`} className="flex">
                                    <div className="bg-gray-50/50 hover:bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col w-full">
                                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 shrink-0 ${val.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-ucb-blue mb-3">{val.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed font-light">{val.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Institutional Distinctions: HSI & MSI Card */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                            <div className="w-20 h-20 rounded-full bg-ucb-blue/10 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-10 h-10 text-ucb-blue" />
                            </div>
                            <div className="space-y-4 text-center md:text-left flex-1">
                                <span className="inline-block px-3 py-1 bg-ucb-teal/10 text-ucb-teal text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Federal Designation
                                </span>
                                <h3 className="font-display font-bold text-2xl text-ucb-blue">A Minority-Serving & Hispanic-Serving Institution</h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">
                                    Urban College of Boston is proud to be a federally designated Hispanic-Serving Institution (HSI) and Minority-Serving Institution (MSI). Over 70% of our students speak a language other than English at home, and 92% identify as people of color. Our institutional support systems and multilingual education programs are designed specifically to support and uplift diverse student communities.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-ucb-blue to-blue-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollAnimation variant="slide-right" className="space-y-6 text-center md:text-left">
                            <h2 className="text-3xl font-display font-bold">Ready to Start Your Journey?</h2>
                            <p className="opacity-90 leading-relaxed text-sm font-light max-w-md mx-auto md:mx-0">
                                Discover how our supportive community, flexible online schedule, and multilingual programs can help you reach your goals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="https://urbancollege-28708.app451.sites.451.io/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-3 px-6 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px]">
                                    Apply Now (Free) <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                                <Link to="/programs" className="inline-flex justify-center items-center bg-white hover:bg-gray-100 text-ucb-blue font-bold py-3 px-6 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px]">
                                    Explore Programs
                                </Link>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation variant="slide-left" className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-4">
                            <h3 className="font-display font-bold text-lg border-b border-white/10 pb-3 text-center md:text-left">
                                Additional Resources
                            </h3>
                            <ul className="grid grid-cols-1 gap-2 text-sm">
                                <li>
                                    <Link to="/about" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        About Urban College of Boston
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
                                    <Link to="/foundation" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Urban College Foundation
                                    </Link>
                                </li>
                            </ul>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mission;
