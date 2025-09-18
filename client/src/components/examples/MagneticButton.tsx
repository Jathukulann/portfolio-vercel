import MagneticButton from '../MagneticButton';

export default function MagneticButtonExample() {
  return (
    <div className="h-screen bg-portfolio-navy p-8 flex flex-col items-center justify-center gap-6">
      <MagneticButton 
        variant="primary"
        onClick={() => console.log('Primary button clicked')}
      >
        View My Work
      </MagneticButton>
      
      <MagneticButton 
        variant="secondary"
        onClick={() => console.log('Secondary button clicked')}
      >
        Get In Touch
      </MagneticButton>
      
      <MagneticButton 
        variant="outline"
        onClick={() => console.log('Outline button clicked')}
      >
        Download Resume
      </MagneticButton>
    </div>
  );
}