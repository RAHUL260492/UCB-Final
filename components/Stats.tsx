import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, DollarSign, Globe, TrendingUp } from 'lucide-react';

const STATS = [
  { id: '1', value: 94, suffix: '%', label: 'Graduate Debt-Free', prefix: '', display: '94%' },
  { id: '2', value: 1200, suffix: '', label: 'Avg Out-of-Pocket Cost', prefix: '$', display: '$1,200' },
  { id: '3', value: 5, suffix: '', label: 'Languages Offered', prefix: '', display: '5' },
  { id: '4', value: 30, suffix: '+', label: 'Years of Impact', prefix: '', display: '30+' },
];

const STAT_ICONS = [GraduationCap, DollarSign, Globe, TrendingUp];

function useCountUp(target: number, duration = 1500, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

const StatItem: React.FC<{ stat: typeof STATS[0]; icon: React.FC<any>; idx: number; isVisible: boolean }> = ({ stat, icon: Icon, idx, isVisible }) => {
  const count = useCountUp(stat.value, 1200 + idx * 100, isVisible);
  const display = isVisible
    ? `${stat.prefix}${stat.value > 100 ? count.toLocaleString() : count}${stat.suffix}`
    : stat.display;

  return (
    <div
      className="flex items-center gap-3 px-6 py-4 group hover:bg-white/8 transition-all duration-300 cursor-default relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.6s ease ${idx * 0.12}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${idx * 0.12}s`
      }}
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-4 h-4 text-ucb-gold" />
      </div>
      <div>
        <div className="font-display font-black text-xl md:text-2xl text-ucb-gold leading-none tabular-nums">
          {display}
        </div>
        <div className="text-white/70 tracking-wider uppercase text-[10px] font-bold mt-0.5 whitespace-nowrap">
          {stat.label}
        </div>
      </div>
      {/* Hover underline */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-ucb-gold/0 group-hover:bg-ucb-gold/30 transition-colors duration-300" />
    </div>
  );
};

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="outcomes" className="py-4 bg-ucb-blue text-white relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Animated glow blobs */}
      <div className="absolute -top-10 -right-10 w-56 h-56 bg-ucb-green/20 rounded-full blur-[70px] animate-float-slow pointer-events-none" style={{ animationDelay: '0s' }} />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-ucb-gold/10 rounded-full blur-[60px] animate-float-slow pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-0 divide-x divide-white/15">
          {STATS.map((stat, idx) => (
            <StatItem key={stat.id} stat={stat} icon={STAT_ICONS[idx]} idx={idx} isVisible={isVisible} />
          ))}

          {/* Inline quote */}
          <div
            className="px-6 py-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.8s ease ${STATS.length * 0.12 + 0.1}s`
            }}
          >
            <p className="text-white/80 text-xs font-medium max-w-[200px] leading-snug italic border-l-2 border-ucb-gold pl-3">
              "Radical affordability and community support — that's Urban College."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;