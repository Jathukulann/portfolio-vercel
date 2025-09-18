import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 'alphintra',
    title: 'Alphintra',
    description: 'A cloud-native algorithmic trading platform with a no-code strategy builder.',
    technologies: ['Java', 'Python', 'Spring Boot', 'FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'Microservices', 'ML'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    caseStudyLink: '/projects/alphintra'
  },
  {
    id: 'vinnagam',
    title: 'Vinnagam',
    description: 'A freelance guest house booking system featuring booking management and secure payments.',
    technologies: ['TypeScript', 'Next.js', 'Express.js', 'PostgreSQL', 'Prisma', 'AWS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    caseStudyLink: '/projects/vinnagam',
    github: 'https://github.com/Jathukulann/Vinnagam'
  },
  {
    id: 'free-write',
    title: 'Free-Write',
    description: 'A collaborative social storytelling platform with a built-in marketplace and chat.',
    technologies: ['PHP', 'HTML/CSS', 'Azure SQL', 'Docker', 'MVC Architecture'],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
    caseStudyLink: '/projects/free-write',
    github: 'https://github.com/tharindu-dm/Free-Write'
  },
  {
    id: 'agromart',
    title: 'AgroMart',
    description: 'A MERN-stack e-commerce application with secure payment processing via Stripe.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    caseStudyLink: '/projects/agromart',
    github: 'https://github.com/lagithan/AgroMart1'
  }
];

const ProjectGrid = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisibleCards(new Set(projects.map((_, index) => index)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const cardIndex = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (cardIndex !== -1) {
              setTimeout(() => {
                setVisibleCards(prev => new Set(prev).add(cardIndex));
              }, cardIndex * 200); // Stagger the animations
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
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="projects-title"
          >
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring full-stack applications that solve real-world problems
            through innovative technology and thoughtful user experience design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => cardRefs.current[index] = el}
              className={`transition-all duration-700 ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectGrid;