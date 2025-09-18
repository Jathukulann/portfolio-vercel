interface ProjectOverviewProps {
  role: string;
  team: string[];
  tools: string[];
  duration: string;
  overview: string;
}

const ProjectOverview = ({ role, team, tools, duration, overview }: ProjectOverviewProps) => {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Project Details */}
          <div className="space-y-8">
            <h2 
              className="text-4xl font-bold text-card-foreground mb-8"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="overview-title"
            >
              Project Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-portfolio-cyan mb-3">My Role</h3>
                <p className="text-foreground" data-testid="project-role">{role}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-portfolio-cyan mb-3">Duration</h3>
                <p className="text-foreground" data-testid="project-duration">{duration}</p>
              </div>
            </div>

            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-portfolio-cyan mb-4">Team</h3>
              <div className="flex flex-wrap gap-2">
                {team.map((member, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    data-testid={`team-member-${index}`}
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-portfolio-cyan mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                    data-testid={`tool-${index}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <h3 
              className="text-2xl font-bold text-card-foreground mb-6"
              data-testid="overview-description-title"
            >
              About This Project
            </h3>
            <div 
              className="text-muted-foreground leading-relaxed space-y-4"
              data-testid="project-overview"
            >
              {overview.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;