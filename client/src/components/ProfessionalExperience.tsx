import { Card } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

const professionalExperiences = [
  {
    title: 'Manager',
    organization: 'Thurka Metal Crushers',
    period: 'May 2022 - Mar 2023',
    current: false,
    description: 'Managed operations and coordinated business activities, gaining valuable experience in business management and operational efficiency.'
  }
];

const ProfessionalExperience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisibleItems(new Set(professionalExperiences.map((_, index) => index)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (itemIndex !== -1) {
              setTimeout(() => {
                setVisibleItems(prev => new Set(prev).add(itemIndex));
              }, itemIndex * 200);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="professional-experience" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-card-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="professional-experience-title"
          >
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional roles that have contributed to my business acumen and management skills.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {professionalExperiences.map((experience, index) => (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                className={`relative flex items-center transition-all duration-700 ${
                  visibleItems.has(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                  experience.current 
                    ? 'bg-portfolio-cyan border-portfolio-cyan' 
                    : 'bg-background border-border'
                } z-10`}></div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 w-full ${index % 2 === 0 ? 'md:pr-8 md:mr-8' : 'md:pl-8 md:ml-8'}`}>
                  <Card 
                    className={`p-6 bg-background border-border hover-elevate transition-all duration-300 ${
                      index % 2 === 1 ? 'md:text-right' : ''
                    }`}
                    data-testid={`professional-experience-${index}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                        <h3 
                          className="text-xl font-bold text-foreground mb-1"
                          data-testid={`professional-experience-title-${index}`}
                        >
                          {experience.title}
                        </h3>
                        <h4 
                          className="text-lg text-portfolio-cyan font-medium mb-2"
                          data-testid={`professional-experience-org-${index}`}
                        >
                          {experience.organization}
                        </h4>
                      </div>
                      {experience.current && (
                        <span className="px-2 py-1 text-xs bg-portfolio-cyan text-portfolio-navy rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <p 
                      className="text-muted-foreground text-sm mb-3"
                      data-testid={`professional-experience-period-${index}`}
                    >
                      {experience.period}
                    </p>
                    {experience.description && (
                      <p 
                        className="text-muted-foreground text-sm leading-relaxed"
                        data-testid={`professional-experience-description-${index}`}
                      >
                        {experience.description}
                      </p>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;