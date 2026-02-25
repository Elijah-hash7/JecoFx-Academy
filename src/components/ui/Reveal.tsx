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
  void delay;
  void direction;
  void threshold;
  void once;
  void rootMargin;

  return (
    <div className={className}>
      {children}
    </div>
  );
}
