import { useEffect, useRef, useState } from 'react';
import Reveal from '../ui/Reveal';
import { stages, WHATSAPP_NUMBER } from '../../data/site';

export default function StagesPricing() {
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const orderedStages = [...stages].sort((a, b) => Number(Boolean(b.exclusive)) - Number(Boolean(a.exclusive)));

  const updateDesktopScrollState = () => {
    if (!desktopTrackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = desktopTrackRef.current;
    const maxLeft = scrollWidth - clientWidth;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < maxLeft - 8);
  };

  const scrollDesktopCards = (direction: 'left' | 'right') => {
    if (!desktopTrackRef.current) return;
    const amount = desktopTrackRef.current.clientWidth * 0.88;
    desktopTrackRef.current.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    updateDesktopScrollState();
    const onResize = () => updateDesktopScrollState();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section className="py-25 bg-[var(--bg-alt)] border-t border-[var(--border)]" id="stages">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Typography matched to Image 4 (Serif vs Sans mix) */}
        <Reveal once>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl font-serif text-[var(--text-muted)] mb-2 italic">Discover</h2>
            <p className="text-5xl md:text-7xl text-[var(--text)]">
              <span className="font-serif font-light">Our flat</span> <span className="font-serif font-bold">Pricing</span>
            </p>
          </div>
        </Reveal>

        <div className="xl:hidden grid grid-cols-1 gap-5 max-w-md mx-auto">
          {orderedStages.map((stage, idx) => {
            const isExclusive = Boolean(stage.exclusive);
            const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I want to enroll for the ${stage.name} stage.`)}`;

            return (
              <Reveal key={idx} delay={idx * 100} once className="flex">
                <div className={`w-full rounded-[1.6rem] p-5 sm:p-6 relative flex flex-col transition-all duration-200
                  ${isExclusive
                    ? 'bg-[#05070A] border border-[var(--accent)] shadow-[0_0_0_1px_rgba(180,83,9,0.3),0_16px_38px_rgba(180,83,9,0.35)]'
                    : 'bg-[var(--surface)] border border-[var(--border)]'}`}>
                  {isExclusive && (
                    <span className="absolute top-4 right-4 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/45 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-amber-200 uppercase">
                      Promo Offer
                    </span>
                  )}

                  <h3 className={`text-xl font-serif mb-2.5 ${isExclusive ? 'text-white' : 'text-[var(--text)]'}`}>{stage.name}</h3>
                  <p className={`text-sm min-h-12 mb-5 font-light ${isExclusive ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>{stage.description}</p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className={`text-4xl font-serif ${isExclusive ? 'text-white' : 'text-[var(--text)]'}`}>{stage.price}</span>
                    <span className={`text-sm ${isExclusive ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>/ {stage.period}</span>
                  </div>

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full rounded-xl text-center font-semibold transition-colors mb-6 btn
                      ${isExclusive ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    → Start Today
                  </a>

                  <div className="flex-grow">
                    <p className={`text-sm font-bold mb-4 ${isExclusive ? 'text-white' : 'text-[var(--text)]'}`}>What's included</p>
                    <ul className="space-y-3">
                      {stage.features.map((feature, fIdx) => (
                        <li key={fIdx} className={`flex items-start gap-2.5 text-sm font-light ${isExclusive ? 'text-white/75' : 'text-[var(--text-muted)]'}`}>
                          <svg className="w-4 h-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="hidden xl:block relative">
          <div
            ref={desktopTrackRef}
            onScroll={updateDesktopScrollState}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {orderedStages.map((stage, idx) => {
              const isExclusive = Boolean(stage.exclusive);
              const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I want to enroll for the ${stage.name} stage.`)}`;
              return (
                <Reveal
                  key={idx}
                  delay={idx * 120}
                  once
                  className="snap-start shrink-0 w-[calc((100%-4rem)/3)] flex"
                >
                  <div className={`w-full rounded-[2rem] p-9 relative flex flex-col transition-all duration-200 hover:-translate-y-2
                    ${isExclusive
                      ? 'bg-[#05070A] border border-[var(--accent)] shadow-[0_0_0_1px_rgba(180,83,9,0.3),0_22px_50px_rgba(180,83,9,0.38)]'
                      : 'bg-[var(--surface)] border border-[var(--border)]'}`}>
                    {isExclusive && (
                      <span className="absolute top-5 right-5 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/45 px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] text-amber-200 uppercase">
                        Promo Offer
                      </span>
                    )}

                    <h3 className={`text-2xl font-serif mb-3 ${isExclusive ? 'text-white' : 'text-[var(--text)]'}`}>{stage.name}</h3>
                    <p className={`text-sm min-h-12 mb-6 font-light ${isExclusive ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>{stage.description}</p>
                    
                    <div className="mb-8 flex items-baseline gap-1">
                      <span className={`text-5xl font-serif ${isExclusive ? 'text-white' : 'text-[var(--text)]'}`}>{stage.price}</span>
                      <span className={`text-sm ${isExclusive ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>/ {stage.period}</span>
                    </div>

                    <a 
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full rounded-xl text-center font-semibold transition-colors mb-8 btn
                        ${isExclusive ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      → Start Today
                    </a>

                    <div className="flex-grow">
                      <p className={`text-sm font-bold mb-5 ${isExclusive ? 'text-white' : 'text-[var(--text)]'}`}>What's included</p>
                      <ul className="space-y-3.5">
                        {stage.features.map((feature, fIdx) => (
                          <li key={fIdx} className={`flex items-start gap-3 text-sm font-light ${isExclusive ? 'text-white/75' : 'text-[var(--text-muted)]'}`}>
                            <svg className="w-5 h-5 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0">
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => scrollDesktopCards('left')}
                aria-label="View previous plans"
                className="pointer-events-auto absolute left-2 cursor-pointer top-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-[var(--accent)]/40 bg-white/95 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
              >
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 6l-6 6 6 6" />
                </svg>
              </button>
            )}

            {canScrollRight && (
              <button
                type="button"
                onClick={() => scrollDesktopCards('right')}
                aria-label="View more plans"
                className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-[var(--accent)]/40 bg-white/95 hover:bg-white flex items-center justify-center shadow-sm transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 6l6 6-6 6" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
