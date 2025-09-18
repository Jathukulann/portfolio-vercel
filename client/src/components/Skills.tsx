import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'TypeScript', 'SQL', 'PHP']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express.js', 'Spring Boot', 'FastAPI']
  },
  {
    title: 'Database Systems',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    title: 'Developer Tools',
    skills: ['Docker', 'Git', 'GitHub', 'VS Code', 'Postman', 'Figma']
  },
  {
    title: 'Interpersonal Skills',
    skills: ['Team Collaboration', 'Leadership', 'Communication', 'Problem-Solving', 'Quick Learning', 'Intellectual Curiosity', 'Agile Development']
  }
];

const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set());
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisibleCategories(new Set(skillCategories.map((_, index) => index)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = categoryRefs.current.indexOf(entry.target as HTMLDivElement);
            if (categoryIndex !== -1) {
              setTimeout(() => {
                setVisibleCategories(prev => new Set(prev).add(categoryIndex));
              }, categoryIndex * 150);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    categoryRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      categoryRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="skills-title"
          >
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and interpersonal capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={el => categoryRefs.current[index] = el}
              className={`transition-all duration-700 ${
                visibleCategories.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="p-6 bg-card border-card-border hover-elevate transition-all duration-300 h-full">
                <h3 
                  className="text-xl font-bold text-card-foreground mb-4"
                  data-testid={`skill-category-${index}`}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="text-muted-foreground flex items-center"
                      data-testid={`skill-${index}-${skillIndex}`}
                    >
                      <span className="w-2 h-2 bg-portfolio-cyan rounded-full mr-3 flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;