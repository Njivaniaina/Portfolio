import React from 'react';

const Logo = ({ size = 32, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Portfolio Logo"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-light)" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Background Shape */}
      <rect 
        x="2" 
        y="2" 
        width="36" 
        height="36" 
        rx="8" 
        fill="var(--bg-secondary)" 
        stroke="var(--accent-dim)" 
        strokeWidth="1"
      />
      
      {/* "N" Path */}
      <path 
        d="M12 28V12L28 28V12" 
        stroke="url(#logo-gradient)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      
      {/* Decorative dots */}
      <circle cx="12" cy="12" r="2" fill="var(--accent)" />
      <circle cx="28" cy="28" r="2" fill="var(--accent)" />
    </svg>
  );
};

export default Logo;
