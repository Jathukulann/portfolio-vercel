import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  caseStudyLink: string;
  github?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card 
      className="group bg-card border-card-border overflow-hidden hover-elevate transition-all duration-500 cursor-pointer"
      onClick={() => {
        console.log(`Opening project: ${project.title}`);
        if (project.caseStudyLink && project.caseStudyLink !== '#') {
          if (project.caseStudyLink.startsWith('/')) {
            window.location.href = project.caseStudyLink;
          } else {
            window.open(project.caseStudyLink, '_blank');
          }
        }
      }}
      data-testid={`project-card-${project.id}`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-portfolio-navy to-portfolio-slate transition-opacity duration-300 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-portfolio-navy bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <button className="text-portfolio-cyan border border-portfolio-cyan px-4 py-2 hover:bg-portfolio-cyan hover:text-portfolio-navy transition-colors">
              View Project
            </button>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-3" data-testid={`project-title-${project.id}`}>
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
              data-testid={`tech-${project.id}-${index}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 text-sm">
          {project.github && (
            <button 
              className="text-muted-foreground hover:text-foreground hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github, '_blank');
              }}
              data-testid={`project-github-${project.id}`}
            >
              GitHub →
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;