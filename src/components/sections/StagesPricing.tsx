"use client";

import { useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { stages, WHATSAPP_NUMBER } from '../../data/site';

function PricingCard({
  stage,
  index,
  isBonusView,
}: {
  stage: (typeof stages)[number];
  index: number;
  isBonusView: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { delay: index * 100 });

  const isExclusive = Boolean(stage.exclusive);
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I want to enroll for the ${stage.name} stage.`)}`;

  return (
    <div ref={ref} data-reveal className="reveal-scale-rise reveal-pricing-card flex h-full w-full">
      <div
        className={`w-full rounded-2xl relative flex flex-col transition-transform duration-300 hover:-translate-y-1 ${isExclusive
            ? 'bg-gradient-to-b from-[#080e1f] to-[#030509] border border-[#1e3a8a] shadow-[0_0_40px_-8px_rgba(30,58,138,0.35)] px-6 pt-10 pb-6 md:px-8 md:pt-12 md:pb-8'
            : 'bg-[var(--surface)] border border-[var(--border)] hover:border-[rgba(255,255,255,0.12)] p-6 md:p-8'
          }`}
      >
        {isExclusive && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0d1526] border border-[#1e3a8a]/60 shadow-[0_4px_16px_rgba(30,58,138,0.3)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-extrabold tracking-[0.22em] uppercase text-white/80">Premium Offer</span>
            </div>
          </div>
        )}

        <div className="mb-4">
          <h3 className={`text-xl md:text-2xl font-bold tracking-tight mb-2 ${isExclusive ? 'text-white' : 'text-[var(--text)]'}`}>
            {stage.name}
          </h3>
          <p className={`text-[13px] leading-relaxed ${isExclusive ? 'text-white/55' : 'text-[var(--text-muted)]'}`}>
            {stage.description}
          </p>
        </div>

        <div className="mb-6 flex items-baseline gap-1">
          {isBonusView && (
            <span className="text-sm text-white/30 line-through mr-1">
              {stage.price.replace(/\d+/, (value) =>
                Math.round(parseInt(value, 10) * 1.5).toString()
              )}
            </span>

          )}
          <span className={`text-4xl md:text-5xl font-black leading-none tracking-[-0.04em] ${isExclusive ? 'text-white' : 'text-[var(--text)]'}`}>
            {stage.price}
          </span>
          <span className={`text-[11px] font-semibold uppercase tracking-[0.12em] ml-1 ${isExclusive ? 'text-white/40' : 'text-[var(--text-muted)]'}`}>
            / {stage.period}
          </span>
          {isBonusView && (
            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-sm bg-emerald-500/15 text-emerald-400 text-[9px] font-extrabold tracking-wider">
              33% OFF
            </span>
          )}
        </div>

        <div className={`mb-5 h-px ${isExclusive ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent' : 'bg-[var(--border)]'}`} />

        <div className="flex-grow">
          <p className={`text-[9px] font-extrabold tracking-[0.18em] uppercase mb-3 ${isExclusive ? 'text-white/50' : 'text-[var(--text-muted)]'}`}>
            What&apos;s included
          </p>
          <ul className="space-y-2.5">
            {stage.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-2.5">
                <div className={`mt-0.5 shrink-0 ${isExclusive ? 'text-emerald-400' : 'text-[var(--text-muted)]'}`}>
                  <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className={`text-[13px] leading-snug ${isExclusive ? 'text-white/75' : 'text-[var(--text-muted)]'}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-[11px] tracking-[0.14em] font-bold uppercase transition-all duration-300 ${isExclusive
                ? 'bg-gradient-to-r from-[#1a2744] to-[#2563eb] text-white shadow-[0_6px_24px_rgba(37,99,235,0.28)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.42)] hover:brightness-110'
                : 'bg-gradient-to-r from-[#1a2744] to-[#2563eb] text-white shadow-[0_6px_24px_rgba(37,99,235,0.28)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.42)] hover:brightness-110'
              }`}
          >
            Start Today
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function StagesPricing() {
  const [isBonus, setIsBonus] = useState(false);
  const headRef = useRef<HTMLDivElement>(null);

  useScrollReveal(headRef);

  const normalStages = stages.filter((stage) => !stage.exclusive).slice(0, 3);
  const bonusStages = stages.filter((stage) => stage.exclusive);
  const displayStages = isBonus ? bonusStages : normalStages;

  return (
    <section
      className="border-t border-[var(--border)] overflow-hidden"
      id="stages"
      style={{ background: '#070A10', paddingTop: 'clamp(56px,7vw,88px)', paddingBottom: 'clamp(56px,7vw,88px)' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={headRef} data-reveal className="reveal-slide-up reveal-pricing-head">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#4a7cf7] mb-3">Enrollment</p>
            <h2 className="text-3xl md:text-5xl tracking-tight text-[var(--text)]">
              <span className="font-serif font-light">Select your </span>
              <span className="font-serif font-bold">Stage.</span>
            </h2>
          </div>

          <div className="flex justify-center mb-10 md:mb-14">
            <div className="relative inline-flex items-center bg-[#030509] border border-[var(--border)] rounded-full p-1">
              <button
                onClick={() => setIsBonus(false)}
                className={`relative z-10 w-32 md:w-40 py-2.5 text-[11px] font-bold tracking-[0.15em] cursor-pointer uppercase transition-colors duration-300 rounded-full ${!isBonus ? 'text-white' : 'text-[var(--text-muted)] hover:text-white'
                  }`}
              >
                Normal Offer
              </button>
              <button
                onClick={() => setIsBonus(true)}
                className={`relative z-10 w-32 md:w-40 py-2.5 text-[11px] font-bold tracking-[0.15em] cursor-pointer uppercase transition-colors duration-300 rounded-full ${isBonus ? 'text-white' : 'text-[var(--text-muted)] hover:text-white'
                  }`}
              >
                Bonus Offer
              </button>
              <div
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[var(--surface)] border border-white/[0.07] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                style={{ transform: isBonus ? 'translateX(100%)' : 'translateX(0%)' }}
              />
            </div>
          </div>
        </div>

        <div
          key={isBonus ? 'bonus' : 'normal'}
          className={`grid gap-4 mx-auto ${isBonus ? 'grid-cols-1 max-w-lg' : 'grid-cols-1 md:grid-cols-3 max-w-5xl'}`}
        >
          {displayStages.map((stage, index) => (
            <PricingCard key={stage.name} stage={stage} index={index} isBonusView={isBonus} />
          ))}
        </div>
      </div>
    </section>
  );
}
