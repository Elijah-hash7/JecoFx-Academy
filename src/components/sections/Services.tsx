import { useRef, type ReactNode } from 'react';
import { services, WHATSAPP_NUMBER } from '../../data/site';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  TrendingUp, Video, BadgeCheck,
  ShieldCheck, GraduationCap, Users, ArrowUpRight,
} from 'lucide-react';

const iconMap: Record<string, ReactNode> = {
  'Market Analysis': <TrendingUp className="w-5 h-5" />,
  'Daily Signals': <Video className="w-5 h-5" />,
  'Account Management': <BadgeCheck className="w-5 h-5" />,
  'Risk Management': <ShieldCheck className="w-5 h-5" />,
  'Physical & Online Classes': <GraduationCap className="w-5 h-5" />,
  '1-on-1 Mentorship': <Users className="w-5 h-5" />,
};

const serviceMessages: Record<string, string> = {
  'Market Analysis': 'Hi, I want to learn more about Market Analysis.',
  'Daily Signals': 'Hi, I want to learn more about Daily Signals.',
  'Account Management': 'Hi, I want to learn more about Account Management.',
  'Risk Management': 'Hi, I want to learn more about Risk Management.',
  'Physical & Online Classes': 'Hi, I want to learn more about your Physical and Online Classes.',
  '1-on-1 Mentorship': 'Hi, I want to learn more about 1-on-1 Mentorship.',
};

function ServiceCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { delay: index * 80 });

  const message = serviceMessages[title] ?? `Hi, I want to learn more about ${title}.`;
  const link = title === 'Daily Signals'
    ? 'https://t.me/jeco4rex'
    : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const isFeatured = index === 0;

  return (
    <div
      ref={ref}
      data-reveal
      className={`reveal-services-card srv-card group relative flex flex-col rounded-2xl border p-6 md:p-7 ${
        isFeatured
          ? 'services-card-featured border-[rgba(74,124,247,0.28)] bg-gradient-to-b from-[#080e1f] to-[#040608]'
          : 'bg-[var(--surface)] border-[var(--border)] hover:border-[rgba(74,124,247,0.2)]'
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <div
          className={`srv-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center border ${
            isFeatured
              ? 'bg-[rgba(74,124,247,0.14)] border-[rgba(74,124,247,0.35)]'
              : 'bg-[rgba(255,255,255,0.03)] border-[var(--border)]'
          }`}
        >
          <span className={`srv-icon ${isFeatured ? 'text-[#4a7cf7]' : 'text-[var(--text-muted)]'}`}>
            {iconMap[title]}
          </span>
        </div>
        <ArrowUpRight className="srv-arrow w-4 h-4 text-[#4a7cf7]" />
      </div>

      <h3 className="text-[14px] font-bold tracking-tight text-[var(--text)] mb-2">{title}</h3>
      <p className="text-[13px] text-[var(--text-muted)] leading-relaxed flex-grow mb-5">{description}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase transition-colors duration-200 ${
          isFeatured ? 'text-[#4a7cf7]' : 'text-[var(--text-muted)] hover:text-[#4a7cf7]'
        }`}
      >
        Learn more
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
      </a>

      {isFeatured && (
        <div className="absolute top-0 right-0 w-20 h-20 rounded-tr-2xl overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-[#4a7cf7]/40 to-transparent" />
          <div className="absolute top-0 right-0 h-px w-12 bg-gradient-to-l from-[#4a7cf7]/40 to-transparent" />
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef);

  return (
    <section
      className="relative border-t border-[var(--border)] overflow-hidden"
      id="services"
      style={{ background: '#04060A', paddingTop: 'clamp(64px,8vw,96px)', paddingBottom: 'clamp(64px,8vw,96px)' }}
    >
      <div
        className="absolute pointer-events-none inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(30,58,138,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={headerRef} data-reveal className="reveal-slide-up reveal-services-header mb-12 md:mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#4a7cf7] mb-3">What We Offer</p>
              <h2 className="text-3xl md:text-5xl tracking-tight text-[var(--text)]">
                <span className="font-serif font-light">Our </span>
                <span className="font-serif font-bold">Services.</span>
              </h2>
            </div>
            <p className="text-sm text-[var(--text-muted)] max-w-xs leading-relaxed md:text-right">
              Comprehensive trading education tailored to elevate your market presence.
            </p>
          </div>
          <div className="mt-7 h-px bg-gradient-to-r from-[rgba(74,124,247,0.3)] via-[var(--border)] to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
