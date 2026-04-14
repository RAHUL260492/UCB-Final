import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';

import ScrollAnimation from './ScrollAnimation';
import localBlogsData from '../src/data/blogs.json';

const formatTitle = (title: string, slug: string) => {
    if (title === "Urban College Blog | Urban College of Boston") {
        return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
    return title;
};

const RecentBlogPosts: React.FC = () => {
    const [recentBlogs, setRecentBlogs] = useState<any[]>(
        [...localBlogsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3)
    );



    return (
        <section className="py-20 bg-gray-50 relative z-10 border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollAnimation delay="0.1s">
                    <div className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Latest News</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-ucb-blue mb-4">Stories from Our Community</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">Catch up on the latest announcements, student success stories, and events happening at Urban College.</p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentBlogs.map((blog, index) => {
                        const displayTitle = formatTitle(blog.title, blog.slug || '');
                        const dateObj = blog.date ? new Date(blog.date) : new Date();
                        const displayDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

                        return (
                            <ScrollAnimation key={index} delay={`${0.2 + (index * 0.1)}s`} variant="fade-up">
                                <Link 
                                    to={`/blog/${blog.slug}`} 
                                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-ucb-blue/20 transition-all duration-400 hover:-translate-y-1 flex flex-col h-full"
                                >
                                    <div className="h-56 relative overflow-hidden bg-gray-100">
                                        <div className="absolute inset-0 bg-ucb-blue/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
                                        <img 
                                            src={blog.image || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'} 
                                            alt={displayTitle} 
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                if (target.dataset.hasFailed) return;
                                                target.dataset.hasFailed = 'true';
                                                
                                                // Generate a beautiful generic gradient placeholder natively in the browser so it NEVER fails on network blocks
                                                const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#003C71'/><stop offset='100%' stop-color='#0066A2'/></linearGradient></defs><rect width='800' height='600' fill='url(#g)'/><text x='50%' y='50%' font-family='sans-serif' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'>Urban College Snippets</text></svg>`;
                                                const fallbackSrc = `data:image/svg+xml;base64,${btoa(svg)}`;
                                                
                                                target.src = fallbackSrc;
                                            }}
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-ucb-orange text-xs font-bold uppercase tracking-wider mb-4">
                                            <Calendar className="w-4 h-4" />
                                            {displayDate}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-ucb-blue transition-colors duration-300 line-clamp-3">
                                            {displayTitle}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {blog.description}
                                        </p>
                                        <div className="mt-auto group/btn inline-flex items-center gap-2 text-ucb-blue font-bold text-sm">
                                            Read Story
                                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform truncate" />
                                        </div>
                                    </div>
                                </Link>
                            </ScrollAnimation>
                        )
                    })}
                </div>
                
                <div className="text-center mt-12">
                    <Link to="/blog" className="inline-flex items-center justify-center gap-2 border-2 border-ucb-blue text-ucb-blue font-bold py-3 px-8 rounded-full hover:bg-ucb-blue hover:text-white transition-colors duration-300">
                        View All Stories
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RecentBlogPosts;
