import Reveal from '../ui/Reveal';
import { services, WHATSAPP_NUMBER } from '../../data/site';
import type { ReactNode } from 'react';
import {
  TrendingUp,
  Video,
  BadgeCheck,
  ShieldCheck,
  GraduationCap,
  Users,
} from 'lucide-react';

export default function Services() {
  return (
    <section className="py-20 bg-[var(--bg-soft)] border-t border-[var(--border)]" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header matched precisely to Image 3 */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-2 gap-6 border-b border-[var(--border)] pb-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-[var(--text)] mb-3">Our Services</h2>
              <p className="text-[var(--text-muted)] text-sm md:text-base font-light">
                Unleashing Comprehensive Trading Education Tailored to Elevate Your<br className="hidden md:block" /> Market Presence and Boost Your Success.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {

            //Loop through services
            const serviceMessages: Record<string, string> = {
              'Market Analysis': 'Hi, I want to learn more about Market Analysis.',
              'Daily Signals': 'Hi, I want to learn more about Daily Signals.',
              'Account Management': 'Hi, I want to learn more about Account Management.',
              'Risk Management': 'Hi, I want to learn more about Risk Management.',
              'Physical & Online Classes': 'Hi, I want to learn more about your Physical and Online Classes on commodities, stocks, and crypto.',
              '1-on-1 Mentorship': 'Hi, I want to learn more about 1-on-1 Mentorship.',
            };

            //link the string to keys in serviceMessages(dynamic property access)
            const message = serviceMessages[service.title] ?? `Hi, I want to learn more about ${service.title}.`;

            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              message,
            )}`;

            const telegramLink = `https://t.me/jeco4rex`

            const learnMoreLink = service.title === 'Daily Signals' ? telegramLink : whatsappLink;

            const iconMap: Record<string, ReactNode> = {
              'Market Analysis': <TrendingUp className="w-5 h-5" />,
              'Daily Signals': <Video className="w-5 h-5" />,
              'Account Management': <BadgeCheck className="w-5 h-5" />,
              'Risk Management': <ShieldCheck className="w-5 h-5" />,
              'Physical & Online Classes': <GraduationCap className="w-5 h-5" />,
              '1-on-1 Mentorship': <Users className="w-5 h-5" />,
            };

            return (
              <Reveal key={idx} delay={idx * 100}>
                <div className={`group relative p-8 rounded-[2rem] border transition-all duration-200 h-full flex flex-col hover:-translate-y-1
                ${idx === 0
                    ? 'bg-[var(--surface)] border-[var(--accent)]/30'
                    : 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]/25'}`}>

                  <div className={`mb-6 h-12 w-12 rounded-full flex items-center justify-center 
                  ${idx === 0 ? 'bg-[var(--accent)] text-white' : 'bg-slate-100 text-[var(--text)]'}`}>
                    {iconMap[service.title]}
                  </div>

                  <h3 className="text-[1.35rem] font-bold text-[var(--text)] mb-3">{service.title}</h3>
                  <p className="text-[0.98rem] text-[var(--text-muted)] font-light mb-6 flex-grow leading-relaxed">{service.description}</p>

                  <a
                    href={learnMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                  >
                    Learn more
                    <span className="ml-2 transition-transform group-hover:translate-x-1">›</span>
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
