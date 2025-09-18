interface Challenge {
  title: string;
  description: string;
  solution: string;
}

interface LearningsProps {
  challenges: Challenge[];
  keyLearnings: string[];
  nextSteps: string[];
  reflection: string;
}

const Learnings = ({ challenges, keyLearnings, nextSteps, reflection }: LearningsProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="learnings-title"
          >
            Learnings & Reflections
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="reflection"
          >
            {reflection}
          </p>
        </div>

        {/* Challenges and Solutions */}
        {challenges.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Challenges & How I Overcame Them</h3>
            <div className="space-y-8">
              {challenges.map((challenge, index) => (
                <div 
                  key={index}
                  className="bg-card border border-card-border rounded-lg p-8"
                  data-testid={`challenge-${index}`}
                >
                  <h4 className="text-xl font-bold text-destructive mb-4">{challenge.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{challenge.description}</p>
                  <div className="bg-background border border-border rounded-md p-4">
                    <div className="text-sm font-semibold text-portfolio-cyan mb-2">Solution:</div>
                    <p className="text-foreground">{challenge.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Key Learnings */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Key Learnings</h3>
            <div className="space-y-4">
              {keyLearnings.map((learning, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-card border border-card-border rounded-lg"
                  data-testid={`learning-${index}`}
                >
                  <div className="w-2 h-2 bg-portfolio-cyan rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-card-foreground leading-relaxed">{learning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Next Steps & Future Improvements</h3>
            <div className="space-y-4">
              {nextSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-card border border-card-border rounded-lg"
                  data-testid={`next-step-${index}`}
                >
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-card-foreground leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learnings;