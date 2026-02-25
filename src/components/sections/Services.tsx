import Reveal from '../ui/Reveal';
import { services } from '../../data/site';

export default function Services() {
  return (
    <section className="py-20 bg-[var(--bg-soft)] border-t border-[var(--border)]" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header matched precisely to Image 3 */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-6 border-b border-[var(--border)] pb-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-[var(--text)] mb-3">Our Services</h2>
              <p className="text-[var(--text-muted)] text-sm md:text-base font-light">
                Unleashing Comprehensive Trading Education Tailored to Elevate Your<br className="hidden md:block"/> Market Presence and Boost Your Success.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className={`group relative p-8 rounded-[2rem] border transition-all duration-200 h-full flex flex-col hover:-translate-y-1
                ${idx === 0 
                  ? 'bg-[var(--surface)] border-[var(--accent)]/30' 
                  : 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]/25'}`}>
                
                <div className={`mb-6 h-12 w-12 rounded-full flex items-center justify-center 
                  ${idx === 0 ? 'bg-[var(--accent)] text-white' : 'bg-slate-100 text-[var(--text)]'}`}>
                  {/* Generic icon placeholder */}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text)] mb-3">{service.title}</h3>
                <p className="text-[var(--text-muted)] text-sm font-light mb-8 flex-grow leading-relaxed">{service.description}</p>
                
                <a href="#stages" className={`inline-flex items-center text-sm font-semibold transition-colors
                  ${idx === 0 ? 'text-[var(--accent)] hover:text-[var(--accent-hover)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'}`}>
                  Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">›</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
