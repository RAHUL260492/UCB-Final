import React, { useEffect } from 'react';
import { useParams, Navigate, Link, useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { CONSUMER_PAGES } from '../src/data/consumerPages';

// Renders an internal Consumer Information sub-page (migrated catalog content)
// at /policies-disclosures/<slug>. Some pages are "consolidated" (sections[]) and
// gather several entries under anchor ids; links deep-link via page#anchor.
const ConsumerInfoPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const page = slug ? CONSUMER_PAGES[slug] : undefined;

  // Scroll to the #anchor when present (SPA navigation doesn't do this on its own),
  // otherwise scroll to the top.
  useEffect(() => {
    const id = location.hash.replace('#', '');
    if (id) {
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [slug, location.hash]);

  if (!page) return <Navigate to="/policies-disclosures" replace />;

  return (
    <div>
      <SEO
        title={`${page.title} | Urban College of Boston`}
        description={page.description}
        canonicalPath={`/policies-disclosures/${slug}`}
      />
      <PageHeader
        title={page.title}
        subtitle="Consumer Information"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Consumer Information', path: '/policies-disclosures' },
          { label: page.title },
        ]}
        imageSrc="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2940&auto=format&fit=crop"
        imagePosition="center"
      />

      <div className="container mx-auto px-6 max-w-4xl py-12">
        <Link to="/policies-disclosures" className="inline-flex items-center gap-1.5 text-sm text-ucb-blue hover:text-ucb-orange font-semibold mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Consumer Information
        </Link>

        <div className="bg-white rounded-3xl p-6 md:p-9 border border-gray-100 shadow-sm">
          {page.sections
            ? page.sections.map((s) => {
                const ref = CONSUMER_PAGES[s.ref];
                return (
                  <section key={s.id} id={s.id} className="scroll-mt-28 mb-12 last:mb-0">
                    <h2 className="text-xl md:text-2xl font-display font-black text-ucb-blue border-b-2 border-ucb-orange/30 pb-2 mb-4">{s.title}</h2>
                    {ref?.html
                      ? <div className="consumer-prose" dangerouslySetInnerHTML={{ __html: ref.html }} />
                      : ref?.content}
                  </section>
                );
              })
            : page.html
              ? <div className="consumer-prose" dangerouslySetInnerHTML={{ __html: page.html }} />
              : page.content}

          {page.sourceUrl && (
            <div className="mt-8 pt-5 border-t border-gray-100">
              <a
                href={page.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-ucb-blue transition-colors"
              >
                View this policy in the College Catalog <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsumerInfoPage;
