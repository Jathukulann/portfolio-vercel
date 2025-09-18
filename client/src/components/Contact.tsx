import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import MagneticButton from './MagneticButton';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Initialize EmailJS once on component mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey && publicKey !== 'your_public_key') {
      emailjs.init({
        publicKey: publicKey,
      });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(`Form updated: ${name} = ${value}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - check for required environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'service_default' || templateId === 'template_default' || publicKey === 'your_public_key') {
        console.warn('EmailJS not configured. Please set up VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY environment variables.');
        setSubmitStatus('error');
        return;
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'jathukulan.sivanathan@gmail.com', // Your email
      };

      console.log('Sending email with EmailJS:', templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams);
      
      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="contact-title"
          >
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out for my full resume or to start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <Card className="p-4 bg-card border-card-border hover-elevate transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="text-portfolio-cyan">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:jathukulan.sivanathan@gmail.com"
                      className="text-card-foreground hover:text-portfolio-cyan transition-colors"
                      data-interactive
                      data-testid="contact-email"
                    >
                      jathukulan.sivanathan@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-card-border hover-elevate transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="text-portfolio-cyan">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a 
                      href="tel:+94778781792"
                      className="text-card-foreground hover:text-portfolio-cyan transition-colors"
                      data-interactive
                      data-testid="contact-phone"
                    >
                      +94 778 781 792
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-card-border hover-elevate transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="text-portfolio-cyan">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/jathukulan-a58323312"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-card-foreground hover:text-portfolio-cyan transition-colors"
                      data-interactive
                      data-testid="contact-linkedin"
                    >
                      linkedin.com/in/jathukulan-a58323312
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-card-border hover-elevate transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="text-portfolio-cyan">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 0-8-3-8-8s4-8 9-8 8 3 8 8-4 8-8 8z"/>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                      <line x1="9" y1="9" x2="9.01" y2="9"/>
                      <line x1="15" y1="9" x2="15.01" y2="9"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a 
                      href="https://github.com/Jathukulann"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-card-foreground hover:text-portfolio-cyan transition-colors"
                      data-interactive
                      data-testid="contact-github"
                    >
                      github.com/Jathukulann
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-card-border">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-portfolio-cyan focus:border-transparent text-foreground placeholder-muted-foreground transition-colors"
                  placeholder="Your full name"
                  required
                  data-testid="input-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-portfolio-cyan focus:border-transparent text-foreground placeholder-muted-foreground transition-colors"
                  placeholder="your.email@example.com"
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-portfolio-cyan focus:border-transparent text-foreground placeholder-muted-foreground transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  required
                  data-testid="input-message"
                />
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-md text-green-400 text-center" data-testid="success-message">
                  <p>✅ Thanks for reaching out! I'll get back to you within 24 hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-md text-red-400 text-center" data-testid="error-message">
                  <p>❌ Something went wrong. Please try again or reach out via email directly.</p>
                </div>
              )}

              <MagneticButton 
                type="submit"
                variant="primary"
                className="w-full py-4 text-lg"
                disabled={isSubmitting}
                data-testid="submit-button"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </MagneticButton>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;