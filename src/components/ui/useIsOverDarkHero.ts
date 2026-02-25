import { useEffect, useState } from 'react';

/**
 * Tracks whether the viewport is currently over the hero section.
 * Defaults to observing the first <section> on the page, which is the hero.
 */
export default function useIsOverDarkHero(heroSelector = 'section') {
  const [isOverDarkHero, setIsOverDarkHero] = useState(true);

  useEffect(() => {
    const heroEl = document.querySelector(heroSelector);
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverDarkHero(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.15,
      },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [heroSelector]);

  return isOverDarkHero;
}

