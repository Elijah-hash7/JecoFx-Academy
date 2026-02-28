import { useRef } from 'react';
import { WHATSAPP_NUMBER } from '../../data/site';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Mail, MessageCircle, Send, Facebook, Instagram, PhoneCall, ArrowUpRight } from 'lucide-react';

function ChannelCard({
  label,
  desc,
  href,
  cta,
  icon: Icon,
  primary,
  external,
  delay,
}: {
  label: string;
  desc: string;
  href: string;
  cta: string;
  icon: typeof Mail;
  primary: boolean;
  external: boolean;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { delay });

  return (
    <div
      ref={ref}
      data-reveal
      className={`reveal-slide-up reveal-contact-card flex ${
        primary ? 'contact-primary-glow' : ''
      }`}
    >
      <div
        className={`group w-full rounded-2xl flex flex-col justify-between p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 ${
          primary
            ? 'bg-gradient-to-b from-[#0a1228] to-[#050810] border border-[#1e3a8a] shadow-[0_0_40px_-8px_rgba(30,58,138,0.3)]'
            : 'bg-[var(--surface)] border border-[var(--border)] hover:border-white/[0.1]'
        }`}
      >
        <div className="flex items-start justify-between mb-7">
          <div
            className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${
              primary
                ? 'bg-[rgba(30,58,138,0.18)] border border-[rgba(30,58,138,0.35)]'
                : 'bg-[rgba(255,255,255,0.04)] border border-[var(--border)]'
            }`}
          >
            <Icon className={`w-4 h-4 ${primary ? 'text-[#4a7cf7]' : 'text-[var(--text-muted)]'}`} />
          </div>
          <ArrowUpRight
            className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
              primary ? 'text-[#4a7cf7]/50' : 'text-[var(--text-muted)]/40'
            }`}
          />
        </div>

        <div className="flex-grow mb-7">
          <h3 className={`text-[15px] font-bold tracking-tight mb-2 ${primary ? 'text-white' : 'text-[var(--text)]'}`}>
            {label}
          </h3>
          <p className={`text-[13px] leading-relaxed ${primary ? 'text-white/50' : 'text-[var(--text-muted)]'}`}>
            {desc}
          </p>
        </div>

        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={`w-full py-3 rounded-xl text-center text-[10px] tracking-[0.14em] font-bold uppercase transition-all duration-300 ${
            primary
              ? 'bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_28px_rgba(37,99,235,0.4)] hover:brightness-110'
              : 'bg-[rgba(255,255,255,0.04)] border border-[var(--border)] text-[var(--text-muted)] hover:text-white hover:border-white/[0.15] hover:bg-[rgba(255,255,255,0.07)]'
          }`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

export default function ContactChannels() {
  const headerRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useScrollReveal(headerRef);
  useScrollReveal(socialRef, { delay: 400 });

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like to learn more about your forex trading programs.')}`;
  const requestCallLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I want to schedule a call with JECOFX Academy.')}`;
  const emailLink = 'mailto:Jecofxacademy@gmail.com';
  const instagramLink = 'https://www.instagram.com/jecofxacademy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
  const telegramLink = 'https://t.me/jeco4rex';
  const tiktokLink = 'https://www.tiktok.com/@jecofxacademy?_r=1&_t=ZS-94F4QHw7GOy';
  const facebookLink = 'https://www.facebook.com/jecofxacademy';

  const channels = [
    { label: 'Email', desc: "Drop us a message and we'll reply with the best path forward for your trading journey.", href: emailLink, cta: 'Email Us', icon: Mail, primary: false, external: false },
    { label: 'WhatsApp', desc: 'Chat directly for quick answers on enrollment, curriculum, and next steps.', href: whatsappLink, cta: 'Message Us', icon: MessageCircle, primary: false, external: true },
    { label: 'Book a Call', desc: "Prefer talking? We'll walk you through everything live, one on one.", href: requestCallLink, cta: 'Request a Call', icon: PhoneCall, primary: true, external: true },
  ];

  const socials = [
    { name: 'Instagram', href: instagramLink, icon: Instagram },
    { name: 'Telegram', href: telegramLink, icon: Send },
    { name: 'TikTok', href: tiktokLink, image: '/img/tiktok.png' },
    { name: 'Facebook', href: facebookLink, icon: Facebook },
  ];

  return (
    <section
      id="contact"
      className="relative border-t border-[var(--border)] overflow-hidden"
      style={{ background: '#04060A', paddingTop: 'clamp(56px,7vw,88px)', paddingBottom: 'clamp(56px,7vw,88px)' }}
    >
      <div
        className="absolute pointer-events-none"
        style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', width: 'clamp(300px,60vw,700px)', height: 'clamp(200px,30vw,400px)', background: 'radial-gradient(ellipse at 50% 50%, rgba(30,58,138,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} data-reveal className="reveal-slide-up reveal-services-header mb-10 md:mb-14">
          <p className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#4a7cf7] mb-3">Get in Touch</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-5xl tracking-tight text-[var(--text)]">
              <span className="font-serif font-light">We&apos;re </span>
              <span className="font-serif font-bold">here for you.</span>
            </h2>
            <p className="text-sm text-[var(--text-muted)] max-w-xs leading-relaxed">
              Choose your preferred channel. Our team responds within hours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {channels.map((channel, index) => (
            <ChannelCard key={channel.label} {...channel} delay={index * 100} />
          ))}
        </div>

        <div ref={socialRef} data-reveal className="reveal-slide-up reveal-contact-social">
          <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] px-6 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-extrabold tracking-[0.22em] uppercase text-[#4a7cf7]/70 mb-1">Social Channels</p>
              <p className="text-[12px] text-[var(--text-muted)] leading-relaxed max-w-sm">
                Daily insights, live sessions, and market updates. Follow us to stay ahead.
              </p>
            </div>
            <div className="hidden md:block w-px h-10 bg-[var(--border)] mx-7 flex-shrink-0" />
            <div className="flex items-center gap-2 flex-shrink-0">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group relative w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.035)] border border-[rgba(148,163,184,0.16)] flex items-center justify-center text-white/72 hover:text-white hover:border-[var(--border-strong)] hover:bg-[rgba(30,58,138,0.14)] transition-all duration-200 hover:shadow-[0_0_18px_rgba(30,58,138,0.22)]"
                  >
                    {social.image ? (
                      <span
                        className="w-4 h-4 bg-center bg-contain bg-no-repeat opacity-85 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundImage: `url(${social.image})` }}
                      />
                    ) : (
                      Icon && <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                    )}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[9px] font-bold tracking-wider uppercase text-[var(--text-muted)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
