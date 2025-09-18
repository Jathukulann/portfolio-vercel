import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="h-screen bg-background">
      <Navigation />
      <div className="pt-20 p-8">
        <h2 className="text-2xl text-foreground">Navigation Example</h2>
        <p className="text-muted-foreground">Scroll down to see the navigation background change</p>
        <div className="h-screen"></div>
      </div>
    </div>
  );
}