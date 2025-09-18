import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

const CaseStudyNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToHome = () => {
    setLocation('/');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-portfolio-navy bg-opacity-95 backdrop-blur-sm border-b border-portfolio-slate border-opacity-20' : 'bg-transparent'
      }`}
      data-testid="case-study-navigation"
    >
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={navigateToHome}
            className="text-2xl font-bold text-portfolio-cyan hover:text-portfolio-lightSlate transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="logo-home"
          >
            SJ
          </button>

          {/* Back to Portfolio Link */}
          <button
            onClick={navigateToHome}
            className="text-portfolio-lightSlate hover:text-portfolio-cyan transition-colors text-sm"
            data-testid="back-to-portfolio"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    </nav>
  );
};

export default CaseStudyNavigation;