import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, BookOpen, FileText, Globe, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { client, urlFor } from '../src/lib/sanityClient';
import localBlogsData from '../src/data/blogs.json';

const staticPages = [
    { _type: 'page', title: 'Learning Resource Center', slug: '/learning-resource-center', description: 'Tutoring, language support, and tech assistance.' },
    { _type: 'page', title: 'Student Government', slug: '/student-government', description: 'Meet SGA members and learn how to get involved.' },
    { _type: 'page', title: 'Mental Health', slug: '/mental-health', description: 'Boston Public Health Commission and emergency helplines.' },
    { _type: 'page', title: 'Workforce & Community', slug: '/workforce-development', description: 'Workforce development and community programs.' },
    { _type: 'page', title: 'About Urban College', slug: '/#why-urban-college', description: 'Learn about Urban College of Boston.' },
    { _type: 'page', title: 'Blog', slug: '/blog', description: 'Stories, news, and insights from the Urban College community.' }
];

const formatTitle = (title: string, slug: string) => {
    if (title === "Urban College Blog | Urban College of Boston") {
        return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
    return title;
};

const resolveLink = (item: any) => {
    if (item._type === 'program') return `/programs/${item.slug}`;
    if (item._type === 'post') return `/blog/${item.slug}`;
    if (item._type === 'page') return item.slug;
    return '#';
};

const getIcon = (type: string) => {
    if (type === 'program') return <BookOpen className="w-5 h-5 text-ucb-orange" />;
    if (type === 'post') return <FileText className="w-5 h-5 text-ucb-green" />;
    return <Globe className="w-5 h-5 text-ucb-blue" />;
};

const getLabel = (type: string) => {
    if (type === 'program') return 'Academic Program';
    if (type === 'post') return 'Blog / Story';
    return 'Page';
};

const Search: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const [searchInput, setSearchInput] = useState(query);

    useEffect(() => {
        setSearchInput(query);
        window.scrollTo(0, 0);
        
        if (!query.trim()) {
            setResults([]);
            setLoading(false);
            return;
        }

        const fetchResults = async () => {
            setLoading(true);
            try {
                // Fetch dynamic data from Sanity
                const sanityData = await client.fetch(`*[_type in ["post", "program"]] {
                    _type,
                    title,
                    "slug": slug.current,
                    description,
                    tagline
                }`);

                // Map local JSON blogs to look like Sanity data if Sanity is empty/missing them
                const localDataMapped = localBlogsData.map((b: any) => ({
                    ...b,
                    _type: 'post'
                }));

                // Combine Data (Avoid duplicates by slug)
                const allDataMap = new Map();
                
                // 1. Add static pages
                staticPages.forEach(p => allDataMap.set(p.slug, p));
                
                // 2. Add local JSON blogs
                localDataMapped.forEach(b => {
                    if (b.slug) allDataMap.set(b.slug, b);
                });

                // 3. Add Sanity Data (this will overwrite local JSON if they share the same slug, keeping CMS as source of truth)
                if (sanityData && Array.isArray(sanityData)) {
                    sanityData.forEach(item => {
                        if (item.slug) allDataMap.set(item.slug, item);
                    });
                }

                const allItems = Array.from(allDataMap.values());

                // Perform JavaScript-based unified text search
                const lowerQuery = query.toLowerCase();
                const filtered = allItems.filter(item => {
                    const t = formatTitle(item.title || '', item.slug || '').toLowerCase();
                    const d = (item.description || '').toLowerCase();
                    const tag = (item.tagline || '').toLowerCase();
                    return t.includes(lowerQuery) || d.includes(lowerQuery) || tag.includes(lowerQuery);
                });

                setResults(filtered);
            } catch (err) {
                console.error("Search failed:", err);
                // Fallback to static + local JSON if sanity fails
                const localDataMapped = localBlogsData.map((b: any) => ({ ...b, _type: 'post' }));
                const allItems = [...staticPages, ...localDataMapped];
                const lowerQuery = query.toLowerCase();
                const filtered = allItems.filter(item => {
                    const t = formatTitle(item.title || '', item.slug || '').toLowerCase();
                    const d = (item.description || '').toLowerCase();
                    return t.includes(lowerQuery) || d.includes(lowerQuery);
                });
                setResults(filtered);
            }
            setLoading(false);
        };

        fetchResults();
    }, [query]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchInput.trim()) {
            setSearchParams({ q: searchInput.trim() });
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <PageHeader
                title="Search Results"
                subtitle={`Showing results for "${query}"`}
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Search' }]}
            />

            <div className="container mx-auto px-6 max-w-4xl pt-12 md:pt-16">
                {/* Search Bar on Page */}
                <form onSubmit={handleSearch} className="mb-12 relative flex shadow-sm rounded-2xl overflow-hidden">
                    <input
                        type="text"
                        className="flex-1 pl-6 pr-4 py-4 md:py-5 border-0 text-gray-900 text-lg focus:ring-0 outline-none w-full bg-white"
                        placeholder="Search for programs, stories, or resources..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type="submit" className="bg-ucb-blue text-white px-8 md:px-10 font-bold hover:bg-ucb-blue-glow transition-colors focus:ring-0 group">
                        <SearchIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </button>
                </form>

                <div className="mb-8">
                    {loading ? (
                        <div className="text-center py-20">
                            <div className="inline-block animate-spin w-8 h-8 border-4 border-ucb-orange border-t-transparent rounded-full mb-4"></div>
                            <p className="text-gray-500 font-medium">Searching across Urban College...</p>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-xl font-bold text-ucb-black mb-6">
                                {results.length} {results.length === 1 ? 'Result' : 'Results'} found
                            </h2>
                            
                            {results.length > 0 ? (
                                <div className="space-y-4">
                                    {results.map((item, idx) => (
                                        <Link 
                                            key={idx} 
                                            to={resolveLink(item)}
                                            className="block bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-ucb-blue/30 transition-all group"
                                        >
                                            <div className="flex items-start md:items-center gap-6">
                                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-ucb-blue/5 transition-colors">
                                                    {getIcon(item._type)}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-ucb-orange transition-colors">
                                                            {getLabel(item._type)}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-ucb-black group-hover:text-ucb-blue transition-colors mb-2">
                                                        {formatTitle(item.title, item.slug)}
                                                    </h3>
                                                    {(item.description || item.tagline) && (
                                                        <p className="text-gray-600 line-clamp-2 md:line-clamp-1">
                                                            {item.description || item.tagline}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-white border-2 border-gray-100 items-center justify-center group-hover:border-ucb-orange group-hover:bg-ucb-orange transition-all">
                                                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:-rotate-45 transition-all" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm">
                                    <SearchIcon className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                                    <h3 className="text-2xl font-display font-bold text-ucb-black mb-2">No results found</h3>
                                    <p className="text-gray-500 max-w-sm mx-auto">We couldn't find anything matching "{query}". Try checking your spelling or using more general terms.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
