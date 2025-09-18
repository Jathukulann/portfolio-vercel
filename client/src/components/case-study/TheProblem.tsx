interface TheProblemProps {
  userPainPoints: string[];
  businessChallenges: string[];
  problemStatement: string;
}

const TheProblem = ({ userPainPoints, businessChallenges, problemStatement }: TheProblemProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="problem-title"
          >
            The Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Understanding the core challenges that needed to be solved
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mb-16">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Problem Statement</h3>
            <p 
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="problem-statement"
            >
              {problemStatement}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* User Pain Points */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">User Pain Points</h3>
            <div className="space-y-4">
              {userPainPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-card border border-card-border rounded-lg"
                  data-testid={`user-pain-${index}`}
                >
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-card-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Challenges */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Business Challenges</h3>
            <div className="space-y-4">
              {businessChallenges.map((challenge, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-card border border-card-border rounded-lg"
                  data-testid={`business-challenge-${index}`}
                >
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-card-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;