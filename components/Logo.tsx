import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'color';
  /**
   * When true the text "URBAN COLLEGE of Boston" is hidden below xl (1280px)
   * and shown only at xl and above. Use this in the navigation bar so the
   * logo doesn't collide with nav links on tablets.
   */
  compact?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", variant = 'color', compact = false }) => {
  const blue = "#0F4D8A";
  const textColor = variant === 'light' ? '#FFFFFF' : blue;

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Urban College of Boston Logo">
      <img
        src="/assets/images/ucb-logo-official.png"
        alt="Urban College of Boston"
        className="h-full w-auto object-contain"
      />

      {/* Text Group: always visible when compact=false, hidden below xl when compact=true */}
      <div className={`flex flex-col justify-center ${compact ? 'hidden xl:flex' : 'flex'}`}>
        <span
          className="font-sans font-semibold text-[18px] xl:text-[22px] 2xl:text-[28px] tracking-[0.08em] leading-none"
          style={{ color: textColor }}
        >
          URBAN COLLEGE
        </span>
        <span
          className="font-playfair italic text-[12px] xl:text-[15px] 2xl:text-[20px] leading-tight ml-8 xl:ml-10 2xl:ml-14"
          style={{ color: textColor }}
        >
          of Boston
        </span>
      </div>
    </div>
  );
};

export default Logo;