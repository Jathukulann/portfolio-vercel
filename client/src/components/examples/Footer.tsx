import Footer from '../Footer';

export default function FooterExample() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 p-8">
        <h2 className="text-2xl text-foreground">Footer Example</h2>
        <p className="text-muted-foreground">Footer component with social links</p>
      </div>
      <Footer />
    </div>
  );
}