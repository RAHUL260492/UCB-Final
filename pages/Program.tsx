import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProgramPageLayout from '../components/ProgramPageLayout';

// Fallback icon mapping since CMS will provide string names
import * as Icons from 'lucide-react';

const Program: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [programData, setProgramData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        if (!slug) return;
        
        import(`../src/content/pages/${slug}.json`)
            .then((module) => {
                setProgramData(module.default || module);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load program data:", err);
                setError(true);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="inline-block animate-spin w-12 h-12 border-4 border-ucb-orange border-t-transparent rounded-full mb-4"></div>
                    <p className="text-gray-500 font-medium">Loading program details...</p>
                </div>
            </div>
        );
    }

    if (error || !programData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-md px-6">
                    <h2 className="text-2xl font-bold text-ucb-blue mb-4">Program Not Found</h2>
                    <p className="text-gray-600 mb-6">
                        The program page for "{slug}" hasn't been added yet. Please correctly define the schema inside your CMS with the slug "{slug}".
                    </p>
                </div>
            </div>
        );
    }

    // Helper to resolve icon component from string
    const resolveIcon = (iconName: string, fallback: any = Icons.CheckCircle) => {
        const IconComponent = (Icons as any)[iconName];
        return IconComponent || fallback;
    };

    // Map data to the Layout props
    const layoutProps = {
        badge: programData.badge || 'Program',
        title: programData.title,
        subtitle: programData.subtitle || programData.type,
        headerImageSrc: programData.heroImage || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Programs' },
            { label: programData.title }
        ],
        tagline: programData.tagline || 'Program Overview',
        taglineBody: <p>{programData.taglineBody || programData.description}</p>,

        benefits: (programData.benefits || []).map((b: any) => ({
            ...b,
            icon: resolveIcon(b.icon)
        })),

        achievements: (programData.achievements || []).map((a: any) => ({
            ...a,
            icon: resolveIcon(a.icon, Icons.Star)
        })),
        achievementNote: programData.achievementNote,

        courses: programData.courses || [],

        outcomesIntro: programData.outcomesIntro,
        outcomes: programData.outcomes || [],
        outcomeTags: programData.outcomeTags || [],

        stats: (programData.stats || []).map((s: any) => ({
            ...s,
            icon: resolveIcon(s.icon)
        })),

        forWhom: programData.forWhom || [],

        pathwayTitle: programData.pathwayTitle,
        pathwayDescription: programData.pathwayDescription,
        pathwaySteps: programData.pathwaySteps || [],

        testimonial: programData.testimonial ? {
            ...programData.testimonial,
            imageSrc: programData.testimonial.image || undefined
        } : undefined,

        faqs: programData.faqs || [],

        ctaRequirements: programData.ctaRequirements || ['High School Diploma / GED / HiSET', 'Photo ID', 'Online Application'],
        programName: programData.title
    };

    return <ProgramPageLayout {...layoutProps} />;
};

export default Program;
