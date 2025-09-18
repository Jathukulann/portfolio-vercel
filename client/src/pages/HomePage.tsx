import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ProjectGrid from '@/components/ProjectGrid';
import PlannedProjects from '@/components/PlannedProjects';
import ProfessionalExperience from '@/components/ProfessionalExperience';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dark min-h-screen bg-portfolio-navy text-portfolio-lightSlate overflow-x-hidden">
      {/* Preloader */}
      {isLoading && <Preloader />}
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section */}
        <ProjectGrid />
        
        {/* Planned Projects Section */}
        <PlannedProjects />
        
        {/* Professional Experience Section */}
        <ProfessionalExperience />
        
        {/* Experience & Leadership Section */}
        <Experience />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;