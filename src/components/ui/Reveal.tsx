import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
}

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.02,
  once = false,
  rootMargin = '0px'
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (once && entry.isIntersecting) observer.unobserve(entry.target);
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: '',
  };

  const hiddenState = `opacity-0 ${directionClasses[direction]}`;
  const visibleState = 'opacity-100 translate-x-0 translate-y-0';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${isVisible ? visibleState : hiddenState} ${className}`}
    >
      {children}
    </div>
  );
}
