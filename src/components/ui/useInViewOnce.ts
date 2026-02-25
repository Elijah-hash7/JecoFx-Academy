import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inViewOnce, setInViewOnce] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inViewOnce) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInViewOnce(true);
        obs.disconnect();
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [inViewOnce, options]);

  return { ref, inViewOnce };
}