import { useState, useEffect } from 'react';
// Using updated profile image from public directory
const profileImage = '/profile.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className="py-32 bg-card">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Professional Photo */}
          <div className={`order-2 lg:order-1 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative max-w-lg mx-auto">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={profileImage}
                  alt="Jathukulan Sivanathan - Full-Stack Developer"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  data-testid="profile-photo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-navy/30 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-6 left-6 w-full h-full border-2 border-portfolio-cyan/30 rounded-lg"></div>
              <div className="absolute -z-20 top-12 left-12 w-full h-full bg-portfolio-cyan/5 rounded-lg"></div>
            </div>
          </div>

          {/* Enhanced About Text */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h2 
              className="text-4xl md:text-6xl font-bold text-card-foreground mb-8"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="about-title"
            >
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-portfolio-cyan font-semibold">passionate full-stack developer</span> and Computer Science undergraduate with <span className="text-card-foreground font-medium">2+ years of hands-on experience</span> building scalable web applications that solve real-world problems.
              </p>
              
              <p>
                My journey in software engineering has been driven by a love for creating innovative solutions using modern technologies. I specialize in <span className="text-portfolio-cyan">React, Node.js, Java, and cloud platforms</span>, with a proven track record of delivering production-ready applications that users love.
              </p>
              
              <p>
                Beyond coding, I'm a <span className="text-card-foreground font-medium">natural leader</span> who has managed teams, mentored junior developers, and led successful projects from conception to deployment. I thrive in collaborative environments and am always eager to learn emerging technologies and tackle complex challenges.
              </p>
              
              <p>
                Currently seeking opportunities to contribute to innovative projects where I can apply my technical expertise, leadership skills, and passion for creating exceptional user experiences.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center text-sm">
                <div className="w-3 h-3 bg-portfolio-cyan rounded-full mr-3"></div>
                <span className="text-muted-foreground">Remote / Global</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-muted-foreground">Available for projects</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-muted-foreground">Open to mentoring</span>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-10">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-portfolio-cyan text-portfolio-navy px-8 py-3 rounded-lg font-semibold hover:bg-portfolio-lightSlate transition-all duration-300 hover:scale-105 shadow-lg"
                data-testid="contact-cta"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;