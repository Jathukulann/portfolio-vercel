import { useEffect, useRef, useState } from 'react';

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  heroImage: string;
  status: 'In Development' | 'Prototype' | 'Concept' | 'Private Beta';
  ctas: {
    repo?: string;
    video?: string;
    demo?: string;
    localDemo?: boolean;
  };
  metrics: {
    label: string;
    value: string;
    type?: 'Projected' | 'Simulated' | 'Benchmark' | 'Test Data';
    methodology?: string;
  }[];
}

const CaseStudyHero = ({ title, subtitle, heroImage, status, ctas, metrics }: CaseStudyHeroProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-portfolio-navy relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-30' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-portfolio-navy/80 via-portfolio-navy/60 to-portfolio-navy/90"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Status Badge */}
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              status === 'In Development' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
              status === 'Prototype' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
              status === 'Concept' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
              'bg-green-500/20 text-green-400 border border-green-500/30'
            }`} data-testid="project-status">
              {status}
            </span>
          </div>
          
          <h1 
            className="text-6xl md:text-8xl font-bold text-portfolio-lightSlate mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="case-study-title"
          >
            {title}
          </h1>
          
          <p 
            className="text-2xl md:text-3xl text-portfolio-slate mb-16 max-w-4xl mx-auto leading-relaxed"
            data-testid="case-study-subtitle"
          >
            {subtitle}
          </p>
        </div>

        {/* Success Metrics */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-card/20 backdrop-blur-sm border border-card-border/30 rounded-lg p-6"
              data-testid={`metric-${index}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-portfolio-cyan mb-2">
                {metric.value}
              </div>
              <div className="text-portfolio-lightSlate text-sm uppercase tracking-wider mb-2">
                {metric.label}
              </div>
              {metric.type && (
                <div className="flex items-center justify-center">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    metric.type === 'Benchmark' ? 'bg-green-500/20 text-green-400' :
                    metric.type === 'Test Data' ? 'bg-blue-500/20 text-blue-400' :
                    metric.type === 'Simulated' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`} title={metric.methodology || 'No methodology provided'}>
                    {metric.type}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div 
          className={`mt-12 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {ctas.repo && (
            <a
              href={ctas.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/20 backdrop-blur-sm border border-card-border/30 text-portfolio-lightSlate px-6 py-3 rounded-lg font-medium hover:bg-portfolio-cyan hover:text-portfolio-navy transition-all duration-300"
              data-testid="cta-repo"
            >
              View Source Code
            </a>
          )}
          {ctas.video && (
            <a
              href={ctas.video}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/20 backdrop-blur-sm border border-card-border/30 text-portfolio-lightSlate px-6 py-3 rounded-lg font-medium hover:bg-portfolio-cyan hover:text-portfolio-navy transition-all duration-300"
              data-testid="cta-video"
            >
              Video Walkthrough
            </a>
          )}
          {ctas.localDemo && (
            <span
              className="bg-card/20 backdrop-blur-sm border border-card-border/30 text-portfolio-lightSlate px-6 py-3 rounded-lg font-medium cursor-help"
              title="Check README for local setup instructions"
              data-testid="cta-local"
            >
              Local Demo Available
            </span>
          )}
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="animate-bounce">
            <svg 
              width="24" 
              height="14" 
              viewBox="0 0 24 14" 
              className="text-portfolio-slate"
            >
              <path 
                d="M2 2L12 12L22 2" 
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

export default CaseStudyHero;