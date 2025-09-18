import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const followerCursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Update main cursor immediately
      if (mainCursorRef.current) {
        mainCursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    // Smooth follower animation
    const animateFollower = () => {
      if (followerCursorRef.current) {
        const follower = followerCursorRef.current;
        const currentX = parseFloat(follower.style.left || '0');
        const currentY = parseFloat(follower.style.top || '0');
        
        const targetX = mousePos.current.x;
        const targetY = mousePos.current.y;
        
        const newX = currentX + (targetX - currentX) * 0.1;
        const newY = currentY + (targetY - currentY) * 0.1;
        
        follower.style.left = `${newX}px`;
        follower.style.top = `${newY}px`;
      }
      requestAnimationFrame(animateFollower);
    };

    const handleMouseEnter = () => {
      if (followerCursorRef.current) {
        followerCursorRef.current.style.transform = 'scale(1.5)';
        followerCursorRef.current.style.backgroundColor = '#64ffda';
        followerCursorRef.current.style.borderColor = '#64ffda';
      }
    };

    const handleMouseLeave = () => {
      if (followerCursorRef.current) {
        followerCursorRef.current.style.transform = 'scale(1)';
        followerCursorRef.current.style.backgroundColor = 'transparent';
        followerCursorRef.current.style.borderColor = '#ccd6f6';
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-interactive]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Start follower animation
    requestAnimationFrame(animateFollower);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor - small solid dot */}
      <div
        ref={mainCursorRef}
        className="fixed w-2 h-2 bg-portfolio-cyan rounded-full pointer-events-none z-50 -translate-x-1 -translate-y-1"
        style={{ willChange: 'transform' }}
        data-testid="main-cursor"
      />
      
      {/* Follower cursor - larger outlined circle */}
      <div
        ref={followerCursorRef}
        className="fixed w-8 h-8 border border-portfolio-lightSlate rounded-full pointer-events-none z-40 -translate-x-4 -translate-y-4 transition-all duration-300"
        style={{ 
          willChange: 'transform, background-color',
          left: '0px',
          top: '0px'
        }}
        data-testid="follower-cursor"
      />
    </>
  );
};

export default CustomCursor;