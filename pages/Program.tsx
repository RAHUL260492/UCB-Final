import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProgramPageLayout from '../components/ProgramPageLayout';

// Fallback icon mapping since CMS will provide string names
import * as Icons from 'lucide-react';
import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";

const ProgramWithTina: React.FC<{ data: any, query: string, variables: any }> = ({ data, query, variables }) => {
    const { data: tinaData } = useTina({
        query,
        variables,
        data,
    });
    
    // Fallback gracefully if program is undefined during unmapped loads
    const programData = tinaData.program || {};

    // Helper to resolve icon component from string
    const resolveIcon = (iconName: string, fallback: any = Icons.CheckCircle) => {
        const IconComponent = (Icons as any)[iconName];
        return IconComponent || fallback;
    };

    const layoutProps = {
        badge: programData.badge || 'Program',
        title: programData.title || 'Untitled',
        subtitle: programData.subtitle || programData.type || '',
        headerImageSrc: programData.heroImage || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop',
        breadcrumbs: [
            { label: 'Home', path: '/' },
            { label: 'Programs' },
            { label: programData.title || 'Program' }
        ],
        tagline: programData.tagline || 'Program Overview',
        taglineBody: <p>{programData.taglineBody || programData.description || ''}</p>,

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
        programName: programData.title || ''
    };

    return <ProgramPageLayout {...layoutProps} />;
};

const Program: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [tinaPayload, setTinaPayload] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        if (!slug) return;
        
        client.queries.program({ relativePath: `${slug}.json` })
            .then((res) => {
                setTinaPayload(res);
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

    if (error || !tinaPayload) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-md px-6">
                    <h2 className="text-2xl font-bold text-ucb-blue mb-4">Program Not Found</h2>
                    <p className="text-gray-600 mb-6">
                        The program page for "{slug}" hasn't been added yet. Please open Tina CMS and create a Program with the slug "{slug}".
                    </p>
                </div>
            </div>
        );
    }

    // ProgramWithTina handles the useTina hook so that the hook count doesn't change conditionally
    return <ProgramWithTina {...tinaPayload} />;
};

export default Program;
