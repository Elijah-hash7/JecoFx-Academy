import { useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { aboutUsStats } from '../../data/site';
import student1 from '../../assets/student1.webp';
import student2 from '../../assets/student2.webp';
import student3 from '../../assets/student3.webp';
import student4 from '../../assets/student4.webp';

const toAssetUrl = (asset: string | { src: string }) =>
  typeof asset === 'string' ? asset : asset.src;

const checklist = [
  { label: 'Read price action without indicators', done: true },
  { label: 'Understand market structure & liquidity', done: true },
  { label: 'Build a personalised trade plan', done: true },
  { label: 'Master risk management & position sizing', done: true },
  { label: 'Trade major, minor & exotic pairs', done: true },
  { label: 'Pass a prop firm challenge', done: false },
  { label: 'Manage funded accounts confidently', done: false },
];

const doneCount = checklist.filter((item) => item.done).length;
const progress = Math.round((doneCount / checklist.length) * 100);

export default function AboutUs() {
  const students = [student1, student2, student3, student4];
  const headerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useScrollReveal(headerRef);
  useScrollReveal(leftRef);
  useScrollReveal(rightRef, { delay: 120 });

  return (
    <section
      id="about-us"
      className="relative border-t border-[var(--border)] overflow-hidden"
      style={{ background: '#070A10', paddingTop: 'clamp(56px,7vw,84px)', paddingBottom: 'clamp(64px,8vw,96px)' }}
    >
      <div
        className="absolute pointer-events-none top-0 right-0 w-[40vw] h-[50%]"
        style={{ background: 'radial-gradient(ellipse at 80% 20%,rgba(30,58,138,0.07) 0%,transparent 70%)', filter: 'blur(70px)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={headerRef} data-reveal className="reveal-slide-up reveal-about-header mb-6 md:mb-8">
          <p className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#4a7cf7] mb-2">Who We Are</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text)]">About JECOFX Academy</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 lg:gap-14 lg:items-end">
          <div
            ref={leftRef}
            data-reveal
            className="reveal-slide-left reveal-about-left au-reveal-parent flex flex-col gap-3"
            style={{ '--au-progress': `${progress}%` } as CSSProperties}
          >
            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {students.map((student, index) => (
                    <img
                      key={index}
                      src={toAssetUrl(student)}
                      alt={`Student ${index + 1}`}
                      width={30}
                      height={30}
                      loading="lazy"
                      decoding="async"
                      className="w-[30px] h-[30px] rounded-full ring-[2px] ring-[var(--surface)] object-cover"
                      style={{ zIndex: students.length - index }}
                    />
                  ))}
                  
                </div>
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-[var(--text)]">Students worldwide</p>
                  <p className="text-[10px] text-[var(--text-muted)]">Traders in 10+ countries</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                <span className="relative flex h-[5px] w-[5px]">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-emerald-400" />
                </span>
                <span className="text-[9px] font-bold tracking-[0.14em] uppercase text-emerald-400">Active</span>
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden">
              <div className="px-5 pt-5 pb-4 flex items-start justify-between border-b border-[var(--border)]">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#4a7cf7] mb-0.5">Curriculum</p>
                  <h3 className="text-[13px] font-bold text-[var(--text)] tracking-tight">What You&apos;ll Learn</h3>
                </div>

                <div className="flex flex-col items-end gap-1.5 flex-shrink-0 ml-4 pt-0.5">
                  <span className="text-[9px] font-bold text-[var(--text-muted)] tracking-wide">
                    {doneCount}/{checklist.length} modules
                  </span>
                  <div className="w-16 h-[3px] rounded-full overflow-hidden bg-white/[0.06]">
                    <div className="au-bar-fill h-full rounded-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]" />
                  </div>
                </div>
              </div>

              <ul className="flex flex-col divide-y divide-[rgba(255,255,255,0.04)]">
                {checklist.map((item, index) => (
                  <li key={index} className="au-row flex items-center gap-3 px-5 py-3">
                    <div
                      className={`w-[18px] h-[18px] rounded-md flex-shrink-0 flex items-center justify-center border ${
                        item.done
                          ? 'bg-[rgba(59,130,246,0.12)] border-[rgba(59,130,246,0.3)]'
                          : 'bg-transparent border-[rgba(255,255,255,0.1)]'
                      }`}
                    >
                      {item.done ? (
                        <svg className="w-2.5 h-2.5 text-[#4a9eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.8} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <div className="w-1 h-1 rounded-full bg-white/[0.15]" />
                      )}
                    </div>

                    <span
                      className={`text-[12px] leading-snug flex-1 ${
                        item.done ? 'text-[var(--text)] font-medium' : 'text-[var(--text-muted)]'
                      }`}
                    >
                      {item.label}
                    </span>

                    {!item.done && (
                      <span className="text-[8px] font-bold tracking-[0.12em] uppercase text-[#4a7cf7]/80 bg-[rgba(74,124,247,0.08)] border border-[rgba(74,124,247,0.18)] px-1.5 py-0.5 rounded-md flex-shrink-0">
                        Advanced
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="px-5 py-3 border-t border-[var(--border)]">
                <p className="text-[9px] text-[var(--text-muted)] leading-relaxed">
                  Advanced modules unlocked in Intermediate &amp; Advanced stages
                </p>
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            data-reveal
            className="reveal-slide-right reveal-about-right flex flex-col gap-4"
          >
            <div>
              <h3 className="text-[1.75rem] md:text-[2rem] lg:text-[2.2rem] font-medium text-[var(--text)] leading-[1.24] tracking-tight mb-2">
                We are committed to simplifying forex trading by training students to become{' '}
                <span className="inline-flex items-baseline gap-1 whitespace-nowrap">
                  <span className="relative inline-flex items-center gap-1.5 px-3 py-[2px] max-sm:px-2.5 max-sm:py-[1px] rounded-lg align-middle -translate-y-[0.08em] mx-0.5 bg-[rgba(30,58,138,0.2)] border border-[rgba(30,58,138,0.38)]">
                    <span className="w-[7px] h-[7px] rounded-full bg-[#4a7cf7] flex-shrink-0 animate-pulse" />
                    <span className="text-white font-semibold">confident,</span>
                  </span>
                  <span className="leading-none">consistent,</span>
                </span>{' '}
                knowledgeable, and profitable traders.
              </h3>

              <p className="text-[14px] text-[var(--text-muted)] font-light leading-[1.9] max-w-[520px]">
                We focus on practical education, clear market structure, and disciplined execution
                so our students can read the market, manage risk properly, and grow with a repeatable,
                proven process.
              </p>
            </div>

            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 gap-3">
              {aboutUsStats.map((stat, index) => (
                <div
                  key={index}
                  className={`au-stat-chip flex flex-col items-center justify-center px-4 py-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center min-h-[88px] ${
                    index === 2 ? 'min-[420px]:col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <span className="text-xl font-black text-[var(--text)] tracking-tight leading-none mb-1">{stat.label}</span>
                  <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[var(--text-muted)]">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
