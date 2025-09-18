interface Metric {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  type?: 'Projected' | 'Simulated' | 'Benchmark' | 'Test Data';
  methodology?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  type: 'Real' | 'Beta Interview' | 'Concept Validation' | 'Fictional';
}

interface TheImpactProps {
  impactStatement: string;
  metrics: Metric[];
  testimonials: Testimonial[];
  achievements: string[];
}

const TheImpact = ({ impactStatement, metrics, testimonials, achievements }: TheImpactProps) => {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-card-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="impact-title"
          >
            The Impact
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="impact-statement"
          >
            {impactStatement}
          </p>
        </div>

        {/* Metrics Grid */}
        {metrics.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-card-foreground mb-8 text-center">Quantifiable Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-background border border-border rounded-lg"
                  data-testid={`metric-${index}`}
                >
                  <div className="text-4xl font-bold text-portfolio-cyan mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                    {metric.label}
                  </div>
                  <div className={`text-sm font-medium mb-2 ${
                    metric.positive ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {metric.change}
                  </div>
                  {metric.type && (
                    <div className="mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        metric.type === 'Benchmark' ? 'bg-green-500/20 text-green-400' :
                        metric.type === 'Test Data' ? 'bg-blue-500/20 text-blue-400' :
                        metric.type === 'Simulated' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`} title={metric.methodology || 'No methodology provided'}>
                        {metric.type}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-card-foreground mb-8 text-center">What People Said</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border rounded-lg p-8"
                  data-testid={`testimonial-${index}`}
                >
                  <div className="text-4xl text-portfolio-cyan mb-4">"</div>
                  <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                    {testimonial.quote}
                  </blockquote>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground mb-2">{testimonial.role}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      testimonial.type === 'Real' ? 'bg-green-500/20 text-green-400' :
                      testimonial.type === 'Beta Interview' ? 'bg-blue-500/20 text-blue-400' :
                      testimonial.type === 'Concept Validation' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {testimonial.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Achievements */}
        {achievements.length > 0 && (
          <div className="bg-portfolio-cyan/10 border border-portfolio-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3"
                  data-testid={`achievement-${index}`}
                >
                  <div className="w-2 h-2 bg-portfolio-cyan rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TheImpact;