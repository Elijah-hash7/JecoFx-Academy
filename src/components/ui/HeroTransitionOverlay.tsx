// src/components/ui/HeroTransitionOverlay.tsx
import { useEffect, useRef, useState } from 'react';

export default function HeroTransitionOverlay() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          
          if (!mediaQuery.matches) {
            setIsAnimating(true);
            document.body.style.overflow = 'hidden'; // Sticky feel
            
            setTimeout(() => {
              setIsAnimating(false);
              document.body.style.overflow = '';
            }, 800); // Overlay duration
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);

    return () => {
      observer.disconnect();
      document.body.style.overflow = '';
    };
  }, [hasTriggered]);

  if (prefersReducedMotion) {
    return <div ref={triggerRef} className="h-1 w-full absolute bottom-0 opacity-0 pointer-events-none" />;
  }

  return (
    <>
      <div ref={triggerRef} className="h-1 w-full absolute bottom-0 opacity-0 pointer-events-none" />
      
      <div 
        className={`fixed inset-0 z-40 pointer-events-none transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center ${isAnimating ? 'opacity-100' : 'opacity-0 hidden'}`}
      >
        <div className="absolute inset-0 bg-[#0B0D10]/90 backdrop-blur-sm" />
        
        {/* Market Gridlines */}
        <div className="relative w-full h-full max-w-7xl mx-auto px-6 overflow-hidden">
          <div className={`absolute top-[25%] left-0 w-full h-[1px] bg-[#3B82F6]/40 transition-transform duration-500 ease-out ${isAnimating ? 'translate-x-0' : '-translate-x-full'}`} />
          <div className={`absolute top-[50%] left-0 w-full h-[1px] bg-[#3B82F6]/60 transition-transform duration-500 delay-100 ease-out ${isAnimating ? 'translate-x-0' : 'translate-x-full'}`} />
          <div className={`absolute top-[75%] left-0 w-full h-[1px] bg-[#3B82F6]/40 transition-transform duration-500 delay-200 ease-out ${isAnimating ? 'translate-x-0' : '-translate-x-full'}`} />
          
          {/* Vertical scanner line */}
          <div className={`absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#3B82F6] to-transparent transition-transform duration-700 ease-in-out shadow-[0_0_15px_#3B82F6] ${isAnimating ? 'left-[80%]' : 'left-[20%]'}`} />
        </div>
      </div>
    </>
  );
}