import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const plannedProjects = [
  {
    id: 'puritypath',
    title: 'PurityPath',
    description: 'A health and wellness platform focusing on clean living and sustainable lifestyle choices.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    timeline: 'Q1 2025',
    status: 'Planning',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
  },
  {
    id: 'jaffna-business-portfolio',
    title: 'Jaffna Business Portfolio',
    description: 'A comprehensive website portfolio showcasing businesses and services in Jaffna, promoting local commerce.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    timeline: 'Q2 2025',
    status: 'Research',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
  }
];

const PlannedProjects = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisibleCards(new Set(plannedProjects.map((_, index) => index)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (cardIndex !== -1) {
              setTimeout(() => {
                setVisibleCards(prev => new Set(prev).add(cardIndex));
              }, cardIndex * 200);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="planned-projects" className="py-24 bg-card/20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="planned-projects-title"
          >
            Upcoming Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Exciting new ventures currently in planning and research phases, 
            each designed to address unique challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plannedProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => cardRefs.current[index] = el}
              className={`transition-all duration-700 hover-elevate ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              data-testid={`planned-project-${project.id}`}
            >
              <Card className="bg-card/40 backdrop-blur-sm border overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="secondary"
                      className={`${
                        project.status === 'Planning' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        project.status === 'Research' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}
                      data-testid={`status-${project.id}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span 
                      className="text-sm text-portfolio-cyan font-medium"
                      data-testid={`timeline-${project.id}`}
                    >
                      {project.timeline}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-portfolio-cyan/10 text-portfolio-cyan border-portfolio-cyan/20"
                        data-testid={`tech-${project.id}-${tech.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-sm text-muted-foreground/80">
                    <span className="inline-flex items-center">
                      <span className="w-2 h-2 bg-portfolio-cyan rounded-full mr-2"></span>
                      Coming Soon
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlannedProjects;