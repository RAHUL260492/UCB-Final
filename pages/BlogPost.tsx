import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ChevronLeft, Calendar, Share2, Facebook, Linkedin, Copy } from 'lucide-react';
import blogsData from '../src/data/blogs.json';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { buildBreadcrumbJsonLd } from '../components/seo-data';

const formatTitle = (title: string, slug: string) => {
    if (title === "Urban College Blog | Urban College of Boston") {
        return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
    return title;
};

const BlogPost: React.FC = () => {
    const { slug } = useParams();
    const location = useLocation();
    const blog = blogsData.find(b => b.slug === slug);
    const [copied, setCopied] = useState(false);
    const isNews = location.pathname.startsWith('/news');

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on load
    }, [slug]);

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20 px-6">
                <h1 className="text-4xl md:text-6xl font-display font-black text-ucb-blue mb-4">Article Not Found</h1>
                <p className="text-xl text-gray-600 mb-8 text-center max-w-lg">The story you're looking for doesn't exist or has been moved.</p>
                <Link to="/blog" className="px-8 py-4 bg-ucb-orange text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
                    Return to Blog
                </Link>
            </div>
        );
    }

    const displayTitle = formatTitle(blog.title, blog.slug);
    const dateObj = new Date(blog.date);
    const displayDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sectionPath = isNews ? '/news' : '/blog';
    const sectionName = isNews ? 'News' : 'Blog';
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': isNews ? 'NewsArticle' : 'BlogPosting',
        headline: displayTitle,
        description: blog.description,
        image: blog.image,
        datePublished: blog.date,
        author: { '@type': 'Organization', name: 'Urban College of Boston' },
        publisher: { '@type': 'Organization', name: 'Urban College of Boston' },
        mainEntityOfPage: `https://www.urbancollege.edu${sectionPath}/${blog.slug}`,
    };

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title={displayTitle}
                description={blog.description || `Read "${displayTitle}" on Urban College of Boston.`}
                canonicalPath={`${sectionPath}/${blog.slug}`}
                type="article"
                image={blog.image}
                jsonLd={[
                    articleJsonLd,
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: sectionName, path: sectionPath },
                        { name: displayTitle, path: `${sectionPath}/${blog.slug}` },
                    ]),
                ]}
            />
            {/* Header / Hero Area */}
            <div className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-ucb-blue flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={blog.image} 
                        alt={displayTitle} 
                        className="w-full h-full object-cover opacity-20 transform scale-105"
                        onError={(e) => {
                            const fallbacks = [
                                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1513258496099-48162124560a?q=80&w=1200&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
                            ];
                            const hash = blog.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                            (e.target as HTMLImageElement).src = fallbacks[hash % fallbacks.length];
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ucb-blue via-ucb-blue/90 to-ucb-blue/60" />
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <Link to={isNews ? "/news" : "/blog"} className="inline-flex items-center gap-2 text-ucb-gold hover:text-white transition-colors mb-6 text-sm font-bold tracking-widest uppercase">
                        <ChevronLeft className="w-4 h-4" /> Back to {isNews ? "In the News" : "Blog"}
                    </Link>
                    
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-8 drop-shadow-lg">
                        {displayTitle}
                    </h1>
                    
                    <div className="flex items-center justify-center gap-2 text-white/90 text-sm font-medium tracking-wide uppercase bg-black/20 backdrop-blur-sm mx-auto px-5 py-2.5 rounded-full inline-flex border border-white/10 shadow-xl">
                        <Calendar className="w-4 h-4 text-ucb-orange" />
                        {displayDate}
                    </div>
                </div>
            </div>

            {/* Article Body */}
            <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl">
                {/* Social Share Sidebar (Desktop) */}
                <div className="hidden lg:flex flex-col gap-4 w-12 sticky top-32 shrink-0 h-max items-center">
                    <div className="w-px h-12 bg-gray-200 mb-2" />
                    <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-sm">
                        <Facebook className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-700 hover:border-blue-700 hover:bg-blue-50 transition-all shadow-sm">
                        <Linkedin className="w-4 h-4" />
                    </button>
                    <button onClick={handleCopyLink} className="relative w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-ucb-orange hover:border-ucb-orange hover:bg-orange-50 transition-all shadow-sm">
                        <Copy className="w-4 h-4" />
                        {copied && (
                            <span className="absolute left-full ml-3 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                Copied!
                            </span>
                        )}
                    </button>
                    <div className="w-px h-12 bg-gray-200 mt-2" />
                </div>

                {/* Content Area */}
                <article className="prose prose-lg md:prose-xl prose-blue max-w-3xl prose-headings:font-display prose-headings:font-bold prose-a:text-ucb-orange hover:prose-a:text-ucb-orange-glow prose-img:rounded-2xl prose-img:shadow-xl">
                    <p className="lead text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-10 italic border-l-4 border-ucb-orange pl-6">
                        {blog.description}
                    </p>

                    {blog.content ? (
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} className="blog-content-rendered" />
                    ) : (
                        <>
                            {/* Placeholder robust styling for articles that didn't scrape full body */}
                            <h2>A Community Dedicated to Success</h2>
                            <p>
                                When you meet the students and alumni of Urban College of Boston, you quickly realize they share a profound dedication to lifting up their communities. For over three decades, our institution has been a beacon for bilingual and diverse learners, offering an education that meets students exactly where they are. 
                            </p>
                            <p>
                                Whether returning to school after years away, balancing full-time work, or seeking career advancement in early childhood education, human services, or business, our students bring invaluable life experience into the classroom. This rich environment fosters not just academic growth, but leadership development that translates directly into the workforce.
                            </p>
                            
                            <blockquote>
                                "The flexibility, the professors, and the community—it all comes together here. You're not just a number. You are part of an organization that actively wants to see you succeed."
                            </blockquote>

                            <h3>Looking Towards the Future</h3>
                            <p>
                                As highlighted in this story, the commitment to equity and transformative education remains our priority. It is through these remarkable journeys that the true impact of an accessible, student-centric college is felt throughout the Greater Boston area and beyond.
                            </p>

                            <div className="not-prose mt-12 mb-8 bg-blue-50 border border-ucb-blue/10 rounded-3xl p-8 shadow-sm flex flex-col items-center text-center">
                                <h4 className="text-2xl font-display font-bold text-ucb-blue mb-3">Ready to start your own story?</h4>
                                <p className="text-gray-600 mb-6 max-w-md">Join a community dedicated to your success and discover how an Urban College degree can change your trajectory.</p>
                                <a href="https://urbancollege-28708.app451.sites.451.io/" target="_blank" rel="noopener noreferrer" className="bg-ucb-orange text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                                    Apply Today
                                </a>
                            </div>
                        </>
                    )}

                </article>
            </div>
            
            {/* Mobile Share */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shrink-0 flex items-center justify-center gap-6 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mr-2">Share</span>
                <button className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></button>
                <button className="text-gray-400 hover:text-blue-700 transition-colors"><Linkedin className="w-5 h-5" /></button>
                <button onClick={handleCopyLink} className="text-gray-400 hover:text-ucb-orange transition-colors"><Copy className="w-5 h-5" /></button>
            </div>
        </div>
    );
};

export default BlogPost;
