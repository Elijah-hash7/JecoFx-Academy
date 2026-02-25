// src/components/sections/ContactChannels.tsx
import Reveal from '../ui/Reveal';
import { WHATSAPP_NUMBER } from '../../data/site';
import {
  Mail,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  PhoneCall,
} from 'lucide-react';




export default function ContactChannels() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi, I would like to learn more about your forex trading programs.',
  )}`;

  const emailLink = 'mailto:hello@jecofx.com';

  const instgramLink = `https://www.instagram.com/jecofxacademy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`

  const telegramLink = `https://t.me/jeco4rex`

  

  const socials = [
    { name: 'Instagram', href: instgramLink, icon: Instagram },
    { name: 'Telegram', href: telegramLink, icon: Send },
    { name: 'TikTok', href: '#', image: '/img/tiktok.png' },
    { name: 'Facebook', href: '#', icon: Facebook },
  ];

  return (
    <section id="contact" className="bg-[var(--bg)] py-18 border-t border-[var(--border)]" >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Reveal className="flex">
            <div className="w-full rounded-[2.5rem] bg-[var(--surface)] border border-[var(--border)] p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/70 mb-6">
                  <Mail className="w-7 h-7 text-[var(--accent)]" />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">Email</h3>
                <p className="text-base font-medium text-slate-600 leading-relaxed">
                  Send us an email about your trading journey and we&apos;ll reply with the best path forward.
                </p>
              </div>
              <a
                href={emailLink}
                className="mt-8 w-full btn btn-secondary"
              >
                EMAIL US
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex">
            <div className="w-full rounded-[2.5rem] bg-[var(--surface)] border border-[var(--border)] p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/70 mb-6">
                  <MessageCircle className="w-7 h-7 text-[var(--accent)]" />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">Send Message</h3>
                <p className="text-base font-medium text-slate-600 leading-relaxed">
                  Chat with us directly on WhatsApp for quick questions, enrollment details, and next steps.
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full btn btn-secondary"
              >
                MESSAGE US
              </a>
            </div>
          </Reveal>

          <Reveal delay={240} className="flex">
            <div className="w-full rounded-[2.5rem] bg-[var(--surface)] border border-[var(--border)] p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/70 mb-6">
                  <PhoneCall className="w-7 h-7 text-[var(--accent)]" />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">Talk with us</h3>
                <p className="text-base font-medium text-slate-600 leading-relaxed">
                  Prefer a call? Reach out and our team will schedule a session to walk you through the academy.
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full btn btn-primary"
              >
                REQUEST A CALL
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <div className="rounded-[2.5rem] bg-[var(--surface)] border border-[var(--border)] px-8 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700/80 mb-1">
                Social Channels
              </p>
              <p className="text-base font-medium text-slate-600 max-w-xl">
                Follow us on social media to stay updated with new lessons, live sessions, and market insights.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.name}
                    className="group w-10 h-10 rounded-full bg-slate-100 border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--accent)]/40 hover:bg-white transition-all duration-250 hover:shadow-[0_0_16px_rgba(180,83,9,0.24)]"
                  >
                    {social.image ? (
                      <span
                        aria-hidden="true"
                        className="w-5 h-5 bg-center bg-contain bg-no-repeat transition-transform duration-250 group-hover:scale-110"
                        style={{ backgroundImage: `url(${social.image})` }}
                      />
                    ) : (
                      Icon && <Icon className="w-5 h-5 transition-transform duration-250 group-hover:scale-110" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
