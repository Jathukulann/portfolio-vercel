import { useRoute, useLocation } from 'wouter';
import { useEffect, useState } from 'react';
import CaseStudyNavigation from '@/components/CaseStudyNavigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import ProjectOverview from '@/components/case-study/ProjectOverview';
import TheProblem from '@/components/case-study/TheProblem';
import TheProcess from '@/components/case-study/TheProcess';
import TheSolution from '@/components/case-study/TheSolution';
import TheImpact from '@/components/case-study/TheImpact';
import Learnings from '@/components/case-study/Learnings';
import { caseStudiesData, type CaseStudyData } from '@/data/caseStudies';
import MagneticButton from '@/components/MagneticButton';

const CaseStudyPage = () => {
  const [, params] = useRoute('/projects/:slug');
  const [, setLocation] = useLocation();
  const [caseStudy, setCaseStudy] = useState<CaseStudyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      const data = caseStudiesData[params.slug];
      if (data) {
        setCaseStudy(data);
      } else {
        setCaseStudy(null);
      }
      setLoading(false);
    }
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="dark min-h-screen bg-portfolio-navy text-portfolio-lightSlate flex items-center justify-center">
        <CustomCursor />
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-portfolio-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-portfolio-slate">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="dark min-h-screen bg-portfolio-navy text-portfolio-lightSlate">
        <CustomCursor />
        <CaseStudyNavigation />
        <div className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-portfolio-lightSlate mb-4">Case Study Not Found</h1>
            <p className="text-portfolio-slate mb-8">
              The case study you're looking for doesn't exist or has been moved.
            </p>
            <MagneticButton 
              variant="primary"
              onClick={() => setLocation('/')}
            >
              Back to Portfolio
            </MagneticButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dark min-h-screen bg-portfolio-navy text-portfolio-lightSlate overflow-x-hidden">
      <CustomCursor />
      <CaseStudyNavigation />
      
      <main>
        {/* Hero Section - The Hook */}
        <CaseStudyHero
          title={caseStudy.title}
          subtitle={caseStudy.subtitle}
          heroImage={caseStudy.heroImage}
          status={caseStudy.status}
          ctas={caseStudy.ctas}
          metrics={caseStudy.metrics}
        />

        {/* Project Overview */}
        <ProjectOverview
          role={caseStudy.overview.role}
          team={caseStudy.overview.team}
          tools={caseStudy.overview.tools}
          duration={caseStudy.overview.duration}
          overview={caseStudy.overview.description}
        />

        {/* The Problem */}
        <TheProblem
          problemStatement={caseStudy.problem.statement}
          userPainPoints={caseStudy.problem.userPainPoints}
          businessChallenges={caseStudy.problem.businessChallenges}
        />

        {/* The Process */}
        <TheProcess
          processSteps={caseStudy.process.steps}
          methodology={caseStudy.process.methodology}
        />

        {/* The Solution */}
        <TheSolution
          solutionOverview={caseStudy.solution.overview}
          keyFeatures={caseStudy.solution.keyFeatures}
          mockupImages={caseStudy.solution.mockupImages}
          technicalHighlights={caseStudy.solution.technicalHighlights}
        />

        {/* The Impact */}
        <TheImpact
          impactStatement={caseStudy.impact.statement}
          metrics={caseStudy.impact.metrics}
          testimonials={caseStudy.impact.testimonials || []}
          achievements={caseStudy.impact.achievements}
        />

        {/* Learnings & Reflections */}
        <Learnings
          challenges={caseStudy.learnings.challenges}
          keyLearnings={caseStudy.learnings.keyLearnings}
          nextSteps={caseStudy.learnings.nextSteps}
          reflection={caseStudy.learnings.reflection}
        />

        {/* Call to Action */}
        <section className="py-24 bg-card">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl font-bold text-card-foreground mb-6">
              Interested in working together?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I'm always excited to take on new challenges and create impactful solutions.
              Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton 
                variant="primary"
                className="text-lg px-8 py-4"
                onClick={() => {
                  setLocation('/');
                  // Add delay to ensure page loads before scrolling
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                Get In Touch
              </MagneticButton>
              <MagneticButton 
                variant="outline"
                className="text-lg px-8 py-4"
                onClick={() => {
                  setLocation('/');
                  // Add delay to ensure page loads before scrolling
                  setTimeout(() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                View More Projects
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyPage;