import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-portfolio-navy bg-opacity-95 backdrop-blur-sm border-b border-portfolio-slate border-opacity-20' : 'bg-transparent'
      }`}
      data-testid="navigation"
    >
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-portfolio-cyan hover:text-portfolio-lightSlate transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="logo"
          >
            SJ
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-portfolio-lightSlate hover:text-portfolio-cyan transition-colors"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-portfolio-lightSlate hover:text-portfolio-cyan transition-colors"
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-portfolio-lightSlate hover:text-portfolio-cyan transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-portfolio-lightSlate hover:text-portfolio-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-portfolio-slate border-opacity-20">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="text-portfolio-lightSlate hover:text-portfolio-cyan transition-colors text-left"
                data-testid="mobile-nav-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-portfolio-lightSlate hover:text-portfolio-cyan transition-colors text-left"
                data-testid="mobile-nav-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-portfolio-lightSlate hover:text-portfolio-cyan transition-colors text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;