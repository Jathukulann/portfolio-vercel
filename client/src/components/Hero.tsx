import { useEffect, useState } from 'react';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  
  const firstLine = "Hi, I'm Jathukulan Sivanathan.";
  const secondLine = "A Full-Stack Developer Building Tomorrow's Web.";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setDisplayText(firstLine);
      setShowSecondLine(true);
      setShowButtons(true);
      return;
    }

    let index = 0;
    const typeWriter = () => {
      if (index < firstLine.length) {
        setDisplayText(firstLine.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => setShowSecondLine(true), 500);
      }
    };

    const timer = setTimeout(typeWriter, 1000);
    
    // Show buttons after both lines are complete
    setTimeout(() => setShowButtons(true), 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-portfolio-navy px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 
            className="text-5xl md:text-7xl font-bold text-portfolio-lightSlate mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="hero-title"
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <div 
            className={`transition-all duration-1000 ${
              showSecondLine ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 
              className="text-2xl md:text-3xl text-portfolio-slate mb-8 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-testid="hero-subtitle"
            >
              {secondLine}
            </h2>
          </div>
        </div>

        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
            showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <MagneticButton 
            variant="primary"
            className="text-lg px-8 py-4"
            onClick={() => {
              console.log('Scrolling to projects');
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </MagneticButton>
          
          <MagneticButton 
            variant="secondary"
            className="text-lg px-8 py-4"
            onClick={() => {
              console.log('Opening contact');
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </MagneticButton>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            showButtons ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-px h-16 bg-portfolio-slate mx-auto mb-2"></div>
          <div className="animate-bounce">
            <svg 
              width="20" 
              height="12" 
              viewBox="0 0 20 12" 
              className="text-portfolio-slate"
            >
              <path 
                d="M2 2L10 10L18 2" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;