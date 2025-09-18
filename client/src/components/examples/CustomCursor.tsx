import CustomCursor from '../CustomCursor';

export default function CustomCursorExample() {
  return (
    <div className="h-screen bg-portfolio-navy p-8">
      <CustomCursor />
      <div className="text-portfolio-lightSlate">
        <h2 className="text-2xl mb-4">Move your cursor around</h2>
        <button 
          className="px-4 py-2 border border-portfolio-cyan text-portfolio-cyan hover:bg-portfolio-cyan hover:text-portfolio-navy transition-colors" 
          data-testid="test-button"
        >
          Hover over me
        </button>
      </div>
    </div>
  );
}