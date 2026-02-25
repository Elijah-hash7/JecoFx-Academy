import Reveal from '../ui/Reveal';
import { faqs } from '../../data/site';

export default function FAQ() {
  return (
    <section className="py-24 bg-[var(--bg-soft)] border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl font-bold text-[var(--text)] text-center mb-16">Questions?</h2>
        </Reveal>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <details className="group bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden cursor-pointer marker:content-[''] hover:border-[var(--accent)]/40 transition-colors">
                <summary className="px-8 py-6 text-lg font-medium text-[var(--text)] flex justify-between items-center select-none">
                  {faq.question}
                  <span className="text-[var(--text-muted)] group-open:rotate-45 transition-transform duration-200 text-2xl font-light leading-none">+</span>
                </summary>
                <div className="px-8 pb-6 text-[var(--text-muted)] font-light border-t border-[var(--border)] pt-4 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
