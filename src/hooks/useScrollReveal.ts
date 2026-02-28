import { useEffect, type RefObject } from 'react';

interface ScrollRevealOptions {
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: ScrollRevealOptions = {}
) {
  const { delay = 0, threshold = 0.1, rootMargin = '0px' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let timeoutId: number | null = null;

    const reveal = () => {
      if (element.getAttribute('data-revealed') === 'true') return;

      if (delay > 0) {
        if (timeoutId !== null) window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          element.setAttribute('data-revealed', 'true');
          timeoutId = null;
        }, delay);
        return;
      }

      element.setAttribute('data-revealed', 'true');
    };

    const hide = () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
      }
      element.removeAttribute('data-revealed');
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          return;
        }
        hide();
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timeoutId !== null) window.clearTimeout(timeoutId);
    };
  }, [delay, ref, rootMargin, threshold]);
}
