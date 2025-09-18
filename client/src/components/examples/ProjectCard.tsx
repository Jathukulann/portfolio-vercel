import ProjectCard from '../ProjectCard';

const mockProject = {
  id: 'example-project',
  title: 'Example Project',
  description: 'This is an example project showcasing the ProjectCard component with various technologies and features.',
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
  link: 'https://example.com',
  github: 'https://github.com/example/project'
};

export default function ProjectCardExample() {
  return (
    <div className="p-8 bg-background">
      <ProjectCard project={mockProject} />
    </div>
  );
}