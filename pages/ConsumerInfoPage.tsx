import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { CONSUMER_PAGES } from '../src/data/consumerPages';

// Renders an internal Consumer Information sub-page (migrated catalog content)
// at /policies-disclosures/<slug>. Unknown slugs redirect back to the hub.
const ConsumerInfoPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? CONSUMER_PAGES[slug] : undefined;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

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
          {page.content}

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
