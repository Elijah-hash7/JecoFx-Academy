import Reveal from '../ui/Reveal';
import { aboutUsStats } from '../../data/site';
import student1 from '../../assets/student1.webp';
import student2 from '../../assets/student2.webp';
import student3 from '../../assets/student3.webp';
import student4 from '../../assets/student4.webp';


const toAssetUrl = (asset: string | { src: string }) =>
  typeof asset === 'string' ? asset : asset.src;

export default function AboutUs() {
  return (
    <section id="about-us" className="py-24 md:py-25 bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          <Reveal direction="right" className="lg:w-1/4 shrink-0" once={false}>
            <div className="flex -space-x-3 mb-2">
              <div className="flex -space-x-4">
                <img
                  src={toAssetUrl(student2)}
                  alt="Student 1"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="inline-block h-12 w-12 rounded-full ring-4 ring-[var(--bg)] object-cover"
                />
                <img
                  src={toAssetUrl(student3)}
                  alt="Student 2"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="inline-block h-12 w-12 rounded-full ring-4 ring-[var(--bg)] object-cover"
                />
                <img
                  src={toAssetUrl(student1)}
                  alt="Student 3"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="inline-block h-12 w-12 rounded-full ring-4 ring-[var(--bg)] object-cover"
                />
                <img
                  src={toAssetUrl(student4)}
                  alt="Student 4"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="inline-block h-12 w-12 rounded-full ring-4 ring-[var(--bg)] object-cover"
                />
              </div>
            </div>
            <p className="text-sm text-[var(--text-muted)] mb-1">Trusted by over</p>
            <div className="flex items-end gap-2">
              
              <span className="text-xl font-medium text-[var(--text-muted)] leading-none pb-1">Students worldwide</span>
            </div>
          </Reveal>

          <Reveal direction="left" className="lg:w-3/4" once={false}>
            <h3 className="text-3xl md:text-5xl font-medium text-[var(--text)] leading-[1.2] mb-6">
            We are committed to simplifying forex trading by training students to become  a <span className="inline-flex items-center justify-center px-4 py-1 mx-1 rounded-full bg-[var(--surface)] border border-[var(--border)] align-middle shadow-sm"><span className="w-3 h-3 rounded-full bg-[var(--accent)] mr-2"></span>confident</span> ,consistent <span className="text-[var(--text-muted)]"> and knowledgeable profitable traders.</span>
            </h3>

            <p className="text-[var(--text-muted)] font-light max-w-3xl mb-12 text-lg">
              We equip traders with institutional-grade insights, advanced market structuring, and robust risk frameworks designed for long-term compounding success.
            </p>

            <div className="flex flex-wrap gap-4">
              {aboutUsStats.map((stat, i) => (
                <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl px-6 py-5 flex-1 min-w-[200px] hover:-translate-y-1 hover:border-[var(--accent)]/30 transition-transform duration-200">
                  <div className="text-[var(--text)] font-semibold text-lg">{stat.label}</div>
                  <div className="text-[var(--text-muted)] text-sm mt-1">{stat.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
