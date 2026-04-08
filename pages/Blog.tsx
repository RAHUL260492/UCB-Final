import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ChevronRight } from 'lucide-react';
import { client, urlFor } from '../src/lib/sanityClient';
import PageHeader from '../components/PageHeader';
import localBlogsData from '../src/data/blogs.json';

const formatTitle = (title: string, slug: string) => {
    if (title === "Urban College Blog | Urban College of Boston") {
        return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
    return title;
};

const Blog: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [blogsData, setBlogsData] = useState<any[]>(localBlogsData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.fetch(`*[_type == "post"] | order(date desc) {
            title,
            "slug": slug.current,
            description,
            date,
            image
        }`).then((data) => {
            if (data && data.length > 0) {
                // Map the image object to url string just like local JSON expects
                const mappedData = data.map((b: any) => ({
                    ...b,
                    image: b.image ? urlFor(b.image).url() : null
                }));
                setBlogsData(mappedData);
            }
            setLoading(false);
        }).catch(err => {
            console.error(err);
            setLoading(false);
        });
    }, []);

    const filteredBlogs = blogsData.filter(blog => {
        const title = formatTitle(blog.title, blog.slug || '').toLowerCase();
        const desc = (blog.description || '').toLowerCase();
        const query = searchQuery.toLowerCase();
        return title.includes(query) || desc.includes(query);
    });

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <PageHeader
                title="Urban College Blog"
                subtitle="Stories, news, and insights from the Urban College community."
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Blog' }]}
            />

            <div className="container mx-auto px-6 max-w-7xl pt-12 md:pt-16">
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-16 relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-11 pr-4 py-4 rounded-2xl border-0 ring-1 ring-inset ring-gray-200 shadow-sm text-gray-900 focus:ring-2 focus:ring-inset focus:ring-ucb-orange text-lg transition-all"
                        placeholder="Search stories, news, and more..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Loading state indicator */}
                {loading && (
                    <div className="text-center py-20">
                         <div className="inline-block animate-spin w-8 h-8 border-4 border-ucb-orange border-t-transparent rounded-full mb-4"></div>
                         <p className="text-gray-500 font-medium">Loading stories...</p>
                    </div>
                )}

                {/* Blog Grid */}
                {!loading && filteredBlogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((blog, index) => {
                            const displayTitle = formatTitle(blog.title, blog.slug || '');
                            const dateObj = blog.date ? new Date(blog.date) : new Date();
                            const displayDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

                            return (
                                <Link 
                                    to={`/blog/${blog.slug}`} 
                                    key={index}
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

                                                // Generate a beautiful generic gradient placeholder natively 
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
                            )
                        })}
                    </div>
                ) : !loading ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
                        <Search className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
                        <p className="text-gray-500">We couldn't find any stories matching "{searchQuery}". Try updating your search.</p>
                        <button 
                            onClick={() => setSearchQuery('')}
                            className="mt-6 text-ucb-orange font-bold hover:text-ucb-orange-glow transition-colors"
                        >
                            Clear search
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Blog;
