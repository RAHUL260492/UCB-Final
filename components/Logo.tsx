import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'color';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", variant = 'color' }) => {
  // Official Brand Colors
  const blue = "#0F4D8A";
  const green = "#427A43";
  const orange = "#EA8F08";
  
  // Text color based on context (Light for dark backgrounds, Blue for light backgrounds)
  const textColor = variant === 'light' ? '#FFFFFF' : blue;

  return (
    <svg viewBox="0 0 380 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Urban College of Boston Logo">
      {/* Icon Group: Three Diamond Cluster */}
      <g transform="translate(10, 12) scale(0.9)">
         {/* Top Blue Diamond */}
         <rect x="35" y="0" width="28" height="28" transform="rotate(45 49 14)" fill={blue} />
         {/* Left Green Diamond */}
         <rect x="14" y="21" width="28" height="28" transform="rotate(45 28 35)" fill={green} />
         {/* Right Orange Diamond */}
         <rect x="56" y="21" width="28" height="28" transform="rotate(45 70 35)" fill={orange} />
         
         {/* Central Starburst (Negative Space) */}
         <path 
           d="M49 28 L 53 38 L 63 42 L 53 46 L 49 56 L 45 46 L 35 42 L 45 38 Z" 
           fill="white" 
         />
      </g>
      
      {/* Text Group */}
      <g transform="translate(100, 8)">
        <text 
          x="0" 
          y="35" 
          fontFamily="'Outfit', sans-serif" 
          fontWeight="500" 
          fontSize="30" 
          fill={textColor} 
          letterSpacing="0.08em"
        >
          URBAN COLLEGE
        </text>
        <text 
          x="130" 
          y="62" 
          fontFamily="'Playfair Display', serif" 
          fontStyle="italic" 
          fontWeight="400"
          fontSize="22" 
          fill={textColor} 
          textAnchor="middle"
        >
          of Boston
        </text>
      </g>
    </svg>
  );
};

export default Logo;