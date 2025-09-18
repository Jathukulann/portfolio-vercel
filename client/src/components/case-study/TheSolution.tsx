import React from 'react';
import { 
  Target, BarChart3, Cloud, Bot, Calendar, CreditCard, Mail, 
  Book, MessageCircle, PenTool, Users, Truck, DollarSign, Package 
} from 'lucide-react';

// Icon mapping for features
const iconMap: Record<string, React.ComponentType<any>> = {
  Target, BarChart3, Cloud, Bot, Calendar, CreditCard, Mail,
  Book, MessageCircle, PenTool, Users, Truck, DollarSign, Package
};

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface TheSolutionProps {
  solutionOverview: string;
  keyFeatures: Feature[];
  mockupImages: string[];
  technicalHighlights: string[];
}

const TheSolution = ({ solutionOverview, keyFeatures, mockupImages, technicalHighlights }: TheSolutionProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="solution-title"
          >
            The Solution
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="solution-overview"
          >
            {solutionOverview}
          </p>
        </div>

        {/* High-Resolution Mockups */}
        {mockupImages.length > 0 && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockupImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-lg bg-card border border-card-border group"
                  data-testid={`mockup-${index}`}
                >
                  <img
                    src={image}
                    alt={`Solution mockup ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-card border border-card-border rounded-lg hover-elevate transition-all duration-300"
                data-testid={`feature-${index}`}
              >
                <div className="mb-4">
                  {iconMap[feature.icon] ? (
                    React.createElement(iconMap[feature.icon], { className: "w-8 h-8 text-portfolio-cyan" })
                  ) : (
                    <div className="w-8 h-8 bg-portfolio-cyan/20 rounded flex items-center justify-center text-portfolio-cyan text-sm font-bold">
                      {feature.icon.charAt(0)}
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-card-foreground mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        {technicalHighlights.length > 0 && (
          <div className="bg-card/50 border border-card-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Technical Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technicalHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3"
                  data-testid={`tech-highlight-${index}`}
                >
                  <div className="w-2 h-2 bg-portfolio-cyan rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TheSolution;