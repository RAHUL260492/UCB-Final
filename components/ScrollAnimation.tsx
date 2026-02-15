import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    delay?: string; // e.g. "0.2s"
    className?: string; // Any extra classes
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, delay = '0s', className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% visible
            rootMargin: '0px 0px -50px 0px'
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    // animate-fade-in-up class should be defined in global CSS or we can use inline styles/custom classes
    // Since we have existing animate-fade-in-up in index.css, let's leverage it or use tailwind transitions

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
            style={{ transitionDelay: delay }}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
