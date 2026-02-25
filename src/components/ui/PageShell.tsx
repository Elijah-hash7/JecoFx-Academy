import React, { useMemo } from "react";
import { useInViewOnce } from "./useInViewOnce";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export default function PageShell({ children }: { children: React.ReactNode }) {
  const prefersReduced = usePrefersReducedMotion();

  const { ref: sentinelRef, inViewOnce } = useInViewOnce<HTMLDivElement>({
    root: null,
    threshold: 0.2,
  });

  const kids = useMemo(() => React.Children.toArray(children), [children]);
  const hero = kids[0];
  const rest = kids.slice(1);

  return (
    <div className="text-white">
      <div
        className={[
          "relative min-h-screen transition-all ease-out",
          "opacity-100 scale-100",
          "duration-500",
        ].join(" ")}
      >
        {hero}
        <div ref={sentinelRef} className="absolute bottom-10 left-0 right-0 h-1" />
      </div>

      <div
        className={[
          "transition-all ease-out",
          prefersReduced
            ? "opacity-100 translate-y-0"
            : inViewOnce
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          "duration-700",
        ].join(" ")}
      >
        {rest}
      </div>
    </div>
  );
}
