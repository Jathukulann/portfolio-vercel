import { forwardRef } from 'react';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  strength?: number;
  scale?: number;
  children: React.ReactNode;
}

const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, variant = 'primary', strength = 0.3, scale = 1.05, children, ...props }, ref) => {
    const magneticRef = useMagneticEffect<HTMLButtonElement>({ strength, scale });

    const variants = {
      primary: 'bg-portfolio-cyan text-portfolio-navy hover:bg-opacity-90',
      secondary: 'bg-transparent border border-portfolio-cyan text-portfolio-cyan hover:bg-portfolio-cyan hover:text-portfolio-navy',
      outline: 'bg-transparent border border-portfolio-lightSlate text-portfolio-lightSlate hover:border-portfolio-cyan hover:text-portfolio-cyan'
    };

    return (
      <button
        ref={magneticRef}
        className={cn(
          'px-6 py-3 font-medium transition-all duration-300 relative overflow-hidden group',
          'focus:outline-none focus:ring-2 focus:ring-portfolio-cyan focus:ring-offset-2 focus:ring-offset-portfolio-navy',
          variants[variant],
          className
        )}
        style={{ willChange: 'transform' }}
        data-interactive
        data-testid={`magnetic-button-${variant}`}
        {...props}
      >
        <span className="relative z-10">
          {children}
        </span>
      </button>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';

export default MagneticButton;