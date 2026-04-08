import React, { useEffect, useRef, useState } from 'react';

type AnimationVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'blur-in';

interface ScrollAnimationProps {
    children: React.ReactNode;
    delay?: string;
    className?: string;
    variant?: AnimationVariant;
    duration?: string;
    threshold?: number;
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
    'fade-up': { hidden: 'opacity-0 translate-y-10', visible: 'opacity-100 translate-y-0' },
    'fade-in': { hidden: 'opacity-0', visible: 'opacity-100' },
    'slide-left': { hidden: 'opacity-0 -translate-x-10', visible: 'opacity-100 translate-x-0' },
    'slide-right': { hidden: 'opacity-0 translate-x-10', visible: 'opacity-100 translate-x-0' },
    'scale-in': { hidden: 'opacity-0 scale-90', visible: 'opacity-100 scale-100' },
    'blur-in': { hidden: 'opacity-0 blur-sm scale-[0.97]', visible: 'opacity-100 blur-0 scale-100' },
};

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
    children,
    delay = '0s',
    className = '',
    variant = 'fade-up',
    duration = '700ms',
    threshold = 0.08,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        );

        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [threshold]);

    const { hidden, visible } = variantStyles[variant];

    return (
        <div
            ref={ref}
            className={`transition-all ease-out transform ${isVisible ? visible : hidden} ${className}`}
            style={{ transitionDuration: duration, transitionDelay: isVisible ? delay : '0s' }}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
