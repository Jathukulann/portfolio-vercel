interface ProcessStep {
  title: string;
  description: string;
  insights: string[];
  image?: string;
}

interface TheProcessProps {
  processSteps: ProcessStep[];
  methodology: string;
}

const TheProcess = ({ processSteps, methodology }: TheProcessProps) => {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-card-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="process-title"
          >
            The Process
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
            data-testid="methodology"
          >
            {methodology}
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              data-testid={`process-step-${index}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-portfolio-cyan text-portfolio-navy rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">{step.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Key Insights */}
                {step.insights.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-portfolio-cyan mb-3">Key Insights:</h4>
                    <ul className="space-y-2">
                      {step.insights.map((insight, insightIndex) => (
                        <li 
                          key={insightIndex}
                          className="flex items-start space-x-3"
                          data-testid={`insight-${index}-${insightIndex}`}
                        >
                          <div className="w-1.5 h-1.5 bg-portfolio-cyan rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Image/Visual */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                {step.image ? (
                  <div className="relative overflow-hidden rounded-lg bg-background border border-border">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-portfolio-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 bg-portfolio-cyan rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground text-sm">Process Visualization</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProcess;