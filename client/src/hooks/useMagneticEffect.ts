import { useRef, useEffect, RefObject } from 'react';

interface MagneticConfig {
  strength?: number;
  scale?: number;
}

export const useMagneticEffect = <T extends HTMLElement>(
  config: MagneticConfig = {}
): RefObject<T> => {
  const elementRef = useRef<T>(null);
  const { strength = 0.3, scale = 1.05 } = config;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.max(rect.width, rect.height);
      
      if (distance < maxDistance) {
        const pullX = deltaX * strength;
        const pullY = deltaY * strength;
        
        element.style.transform = `translate(${pullX}px, ${pullY}px) scale(${scale})`;
      }
    };

    const handleMouseLeave = () => {
      // Smooth return to original position
      const animate = () => {
        const currentTransform = element.style.transform;
        const translateMatch = currentTransform.match(/translate\(([^,]+)px,\s*([^)]+)px\)/);
        
        if (translateMatch) {
          const currentX = parseFloat(translateMatch[1]);
          const currentY = parseFloat(translateMatch[2]);
          
          const newX = currentX * 0.9;
          const newY = currentY * 0.9;
          const newScale = 1 + (scale - 1) * 0.9;
          
          element.style.transform = `translate(${newX}px, ${newY}px) scale(${newScale})`;
          
          if (Math.abs(newX) > 0.1 || Math.abs(newY) > 0.1) {
            animationId = requestAnimationFrame(animate);
          } else {
            element.style.transform = 'translate(0px, 0px) scale(1)';
          }
        }
      };
      
      animate();
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [strength, scale]);

  return elementRef;
};