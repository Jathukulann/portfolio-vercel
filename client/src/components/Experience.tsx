import { Card } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    title: 'Vice President',
    organization: 'Hindu Society, University of Colombo',
    period: 'Feb 2025 - Present',
    current: true
  },
  {
    title: 'IGV-CXP Team Member',
    organization: 'AIESEC',
    period: 'Jan 2024 - Jul 2024',
    current: false
  },
  {
    title: 'Faculty Representative',
    organization: 'Tamil Literary Association',
    period: '2024 - 2025',
    current: false
  },
  {
    title: 'Kabaddi Team Member',
    organization: 'University of Colombo',
    period: '2023 - 2024',
    current: false,
    description: 'Contributed to team\'s 1st Runner-up position in Inter-faculty Competition (2024 & 2023), demonstrating consistent performance and teamwork.'
  },
  {
    title: 'Cricket U17 Team Member',
    organization: 'Jaffna Hindu College',
    period: '2019 - 2020',
    current: false,
    description: 'Represented the college in U17 cricket competitions, developing teamwork and strategic thinking skills.'
  }
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisibleItems(new Set(experiences.map((_, index) => index)));
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
    <section className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-card-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="experience-title"
          >
            Experience & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of leadership roles and organizational involvement that have shaped my character and collaborative skills.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
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
                    data-testid={`experience-${index}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                        <h3 
                          className="text-xl font-bold text-foreground mb-1"
                          data-testid={`experience-title-${index}`}
                        >
                          {experience.title}
                        </h3>
                        <h4 
                          className="text-lg text-portfolio-cyan font-medium mb-2"
                          data-testid={`experience-org-${index}`}
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
                      data-testid={`experience-period-${index}`}
                    >
                      {experience.period}
                    </p>
                    {experience.description && (
                      <p 
                        className="text-muted-foreground text-sm leading-relaxed"
                        data-testid={`experience-description-${index}`}
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

export default Experience;