import React from 'react';

const BackgroundShapes: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Top Left Organic Shape (Blue) */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-ucb-blue/5 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>

            {/* Middle Right Organic Shape (Green) */}
            <div className="absolute top-[40%] -right-20 w-[500px] h-[500px] bg-ucb-green/5 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>

            {/* Bottom Left Organic Shape (Orange/Gold) */}
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-ucb-orange/5 rounded-full blur-3xl animate-[pulse_12s_ease-in-out_infinite]"></div>

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{ backgroundImage: 'radial-gradient(#0066A2 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>
        </div>
    );
};

export default BackgroundShapes;
