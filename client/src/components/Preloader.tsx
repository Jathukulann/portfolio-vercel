import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setTimeout(() => setIsVisible(false), 500);
      return;
    }

    // Start fade out after 2.5 seconds, complete by 3 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 bg-portfolio-navy flex items-center justify-center transition-opacity duration-500 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ background: '#0a192f' }}
    >
      <div className="relative">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="text-portfolio-cyan"
          data-testid="preloader-logo"
        >
          {/* S Letter */}
          <path
            d="M25 45 Q15 35, 25 25 L35 25 Q55 25, 55 45 Q55 55, 35 55 L25 55 Q5 55, 5 75 Q5 85, 15 85 L25 85 Q35 85, 35 75"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-draw-s"
            style={{
              strokeDasharray: '240',
              strokeDashoffset: '240',
              animation: 'drawPath 1.5s ease-out forwards'
            }}
          />
          
          {/* J Letter */}
          <path
            d="M45 30 Q45 20, 55 20 L75 20 Q85 20, 85 30 L85 70 Q85 90, 65 90 L55 90 Q35 90, 35 70 L35 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-draw-j"
            style={{
              strokeDasharray: '200',
              strokeDashoffset: '200',
              animation: 'drawPath 1.5s ease-out 0.3s forwards'
            }}
          />
        </svg>

        <style>
          {`
          @keyframes drawPath {
            to {
              stroke-dashoffset: 0;
            }
          }
          `}
        </style>
      </div>
    </div>
  );
};

export default Preloader;