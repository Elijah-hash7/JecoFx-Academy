import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { WHATSAPP_NUMBER } from '../../data/site';

type PolicyType = 'terms' | 'privacy' | null;

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
  const footerRef = useRef<HTMLElement>(null);

  useScrollReveal(footerRef, { threshold: 0.05 });

  useEffect(() => {
    if (!activePolicy) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActivePolicy(null); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [activePolicy]);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I have a question about JECOFX Academy.')}`;

  return (
    <>
      <footer
        ref={footerRef}
        data-reveal
        className="reveal-footer"
        style={{ background: '#070A10', borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* ── Main content ── */}
          <div className="pt-10 md:pt-14 pb-8 md:pb-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-20">

            {/* Left — Brand */}
            <div className="max-w-sm mx-auto text-center md:mx-0 md:text-left">
              <a href="/" className="flex items-center justify-center md:justify-start gap-2 group w-fit mx-auto md:mx-0 mb-3">
                <img src="/img/logo.webp" alt="JECOFX" width={22} height={22} loading="lazy" decoding="async"
                  className="h-5 w-auto brightness-0 invert opacity-60 group-hover:opacity-90 transition-opacity duration-200" />
                <span className="text-[15px] font-black tracking-tight text-white/60 group-hover:text-white/90 transition-colors duration-200">
                  JECOFX
                </span>
              </a>
              <p className="text-[14px] md:text-xl text-white/32 font-medium md:font-bold leading-[1.8] max-w-xs mx-auto md:mx-0">
              Learn · Grow · Prosper
              </p>
            </div>

            {/* Right — Link columns */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 w-full max-w-[300px] ml-auto md:max-w-[420px] md:gap-16">

              {/* Resources */}
              <div>
                <p className="text-[10px] md:text-[11px] font-bold tracking-[0.18em] uppercase text-white/35 mb-4">
                  Resources
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="mailto:Jecofxacademy@gmail.com"
                      className="text-[13px] text-white/45 hover:text-white/80 transition-colors duration-200 leading-relaxed">
                      Email Us
                    </a>
                  </li>
                  <li>
                    <a href="#contact"
                      className="text-[13px] text-white/45 hover:text-white/80 transition-colors duration-200 leading-relaxed">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              

              {/* Legal */}
              <div>
                <p className="text-[10px] md:text-[11px] font-bold tracking-[0.18em] uppercase text-white/35 mb-4">
                  Legal
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <button type="button" onClick={() => setActivePolicy('privacy')}
                      className="text-[13px] text-white/45 hover:text-white/80 transition-colors duration-200 cursor-pointer text-left leading-relaxed">
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={() => setActivePolicy('terms')}
                      className="text-[13px] text-white/45 hover:text-white/80 transition-colors duration-200 cursor-pointer text-left leading-relaxed">
                      Terms of Use
                    </button>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="py-4 md:py-5 border-t border-white/[0.06] flex flex-col gap-4 sm:gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] md:text-[11px] text-white/22 leading-relaxed text-center sm:text-left" style={{ fontFamily:"'DM Mono',monospace", letterSpacing:'0.06em' }}>
              © {new Date().getFullYear()} JECOFX Academy. All rights reserved.
            </p>

            {/* Social icons — Instagram + Facebook + TikTok */}
            <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-5 flex-wrap">
              <a href="https://www.instagram.com/jecofxacademy" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/28 hover:text-white/70 transition-colors duration-200">
                Instagram
              </a>
              <a href="https://www.facebook.com/jecofxacademy" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/28 hover:text-white/70 transition-colors duration-200">
                Facebook
              </a>
             
            </div>
          </div>

        </div>
      </footer>

      {activePolicy && <PolicyModal activePolicy={activePolicy} onClose={() => setActivePolicy(null)} />}
    </>
  );
}

// ── Policy Modal ─────────────────────────────────────────────────────────────

function PolicyModal({ activePolicy, onClose }: { activePolicy: 'terms' | 'privacy'; onClose: () => void }) {
  return (
    <>
      <style>{`
        .pm-overlay{animation:pmOvIn .25s ease forwards}
        .pm-panel{animation:pmPnIn .35s cubic-bezier(0.22,1,0.36,1) forwards}
        @keyframes pmOvIn{from{opacity:0}to{opacity:1}}
        @keyframes pmPnIn{from{opacity:0;transform:translateY(20px) scale(0.985)}to{opacity:1;transform:none}}
        @media(max-width:639px){
          @keyframes pmPnIn{from{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}
          .pm-panel{border-radius:12px 12px 0 0!important;max-height:92vh!important}
          .pm-panel-wrap{align-items:flex-end!important;padding:0!important}
        }
        .pm-scroll::-webkit-scrollbar{width:3px}
        .pm-scroll::-webkit-scrollbar-thumb{background:rgba(148,163,184,0.35);border-radius:99px}
        .pm-section{animation:pmSecIn .3s ease both}
        @keyframes pmSecIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
        .pm-close{transition:background .15s,border-color .15s}
        .pm-close:hover{background:rgba(255,255,255,0.05)!important;border-color:rgba(148,163,184,0.35)!important}
        .pm-close:hover .pm-ci{transform:rotate(90deg)}
        .pm-ci{transition:transform .2s cubic-bezier(0.34,1.56,0.64,1);display:block}
        .pm-cta{transition:background .15s,transform .1s}
        .pm-cta:hover{background:#2563EB!important;transform:translateY(-1px)}
      `}</style>

      <div className="pm-overlay fixed inset-0 z-[120]"
        style={{ background:'rgba(15,23,42,0.55)', backdropFilter:'blur(8px)' }}
        onClick={onClose} role="presentation" />

      <div className="pm-panel-wrap fixed inset-0 z-[121] pointer-events-none flex items-center justify-center p-4 sm:p-6"
        style={{ fontFamily:"'DM Sans',sans-serif" }}>
        <div className="pm-panel pointer-events-auto relative w-full flex flex-col"
          style={{ maxWidth:'640px', maxHeight:'88vh', background:'#151B26', borderRadius:'12px', border:'1px solid rgba(255,255,255,0.07)', boxShadow:'0 12px 28px rgba(2,6,23,0.4),0 24px 64px rgba(2,6,23,0.46)' }}
          onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">

          <div style={{ height:'4px', borderRadius:'12px 12px 0 0', background:'#1E3A8A', flexShrink:0 }} />

          <div className="flex items-start justify-between flex-shrink-0"
            style={{ padding:'clamp(16px,4vw,24px) clamp(16px,5vw,28px) clamp(14px,3vw,20px)', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ minWidth:0, flex:1 }}>
              <div style={{ display:'flex', alignItems:'center', gap:'5px', marginBottom:'7px' }}>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'0.12em', color:'#94A3B8', textTransform:'uppercase' }}>JECOFX</span>
                <span style={{ color:'rgba(148,163,184,0.5)', fontSize:'10px' }}>/</span>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'0.12em', color:'#94A3B8', textTransform:'uppercase' }}>LEGAL</span>
              </div>
              <h2 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'clamp(18px,5vw,24px)', fontWeight:700, color:'#F1F5F9', lineHeight:1.2, letterSpacing:'-0.02em' }}>
                {activePolicy === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
              </h2>
            </div>
            <button type="button" className="pm-close" onClick={onClose} aria-label="Close"
              style={{ flexShrink:0, marginLeft:'12px', width:'44px', height:'44px', borderRadius:'10px', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.07)', display:'flex', alignItems:'center', justifyContent:'center', color:'#94A3B8', cursor:'pointer' }}>
              <svg className="pm-ci" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="pm-scroll flex-1 overflow-y-auto" style={{ padding:'clamp(16px,4vw,28px) clamp(16px,5vw,28px)' }}>
            {activePolicy === 'terms' ? <TermsContent /> : <PrivacyContent />}
          </div>

          <div className="flex-shrink-0 flex items-center justify-between"
            style={{ padding:'clamp(12px,3vw,16px) clamp(16px,5vw,28px)', borderTop:'1px solid rgba(255,255,255,0.07)', background:'#151B26', borderRadius:'0 0 12px 12px', gap:'12px' }}>
            <p style={{ fontFamily:"'DM Mono',monospace", fontSize:'10px', color:'#94A3B8', letterSpacing:'0.1em' }}>
              © {new Date().getFullYear()} JECOFX
            </p>
            <button className="pm-cta" onClick={onClose}
              style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'13px', fontWeight:600, color:'#fff', background:'#1E3A8A', border:'none', borderRadius:'10px', padding:'12px 24px', minHeight:'44px', cursor:'pointer', letterSpacing:'-0.01em', whiteSpace:'nowrap' }}>
              Got it
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function SH({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'9px', marginBottom:'8px', flexWrap:'wrap' }}>
      <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'10px', color:'#93C5FD', letterSpacing:'0.06em', background:'rgba(59,130,246,0.12)', padding:'2px 7px', borderRadius:'5px', flexShrink:0 }}>{num}</span>
      <h3 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'clamp(14px,3.5vw,15px)', fontWeight:600, color:'#E2E8F0', lineHeight:1.3, letterSpacing:'-0.01em' }}>{children}</h3>
    </div>
  );
}
function P({ children, bold }: { children: React.ReactNode; bold?: boolean }) {
  return <p style={{ fontFamily:"'DM Sans',sans-serif", color:bold?'#CBD5E1':'#94A3B8', fontSize:'clamp(13px,3.2vw,13.5px)', lineHeight:'1.72', fontWeight:bold?500:400, marginTop:'6px' }}>{children}</p>;
}
function B({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display:'flex', alignItems:'flex-start', gap:'10px', color:'#94A3B8', fontSize:'clamp(12.5px,3vw,13px)', lineHeight:'1.7', listStyle:'none', marginTop:'5px', fontFamily:"'DM Sans',sans-serif" }}>
      <span style={{ width:'5px', height:'5px', borderRadius:'50%', background:'rgba(148,163,184,0.5)', flexShrink:0, marginTop:'8px', display:'block' }} />
      <span>{children}</span>
    </li>
  );
}
function Dv() { return <div style={{ height:'1px', background:'rgba(255,255,255,0.07)', margin:'clamp(16px,4vw,22px) 0' }} />; }
function Alert({ type, label, icon, children }: { type:'warning'|'secure'; label:string; icon:React.ReactNode; children:React.ReactNode }) {
  const w = type === 'warning';
  return (
    <div style={{ background:w?'rgba(30,58,138,0.12)':'rgba(34,197,94,0.08)', border:`1px solid ${w?'rgba(59,130,246,0.2)':'rgba(34,197,94,0.24)'}`, borderLeft:`3px solid ${w?'#3B82F6':'#22C55E'}`, borderRadius:'10px', padding:'clamp(12px,3vw,14px) clamp(12px,4vw,16px)', marginTop:'12px' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'7px', marginBottom:'6px' }}>
        <span style={{ color:w?'#93C5FD':'#4ADE80', flexShrink:0 }}>{icon}</span>
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'9.5px', letterSpacing:'0.16em', color:w?'#93C5FD':'#86EFAC', textTransform:'uppercase' }}>{label}</span>
      </div>
      {children}
    </div>
  );
}

function TermsContent() {
  return (
    <div>
      <section className="pm-section" style={{animationDelay:'.04s'}}><SH num="01">Introduction</SH><P>Welcome to JECOFX. By accessing this website, you agree to these Terms. If you disagree, discontinue use immediately.</P></section><Dv/>
      <section className="pm-section" style={{animationDelay:'.07s'}}><SH num="02">Educational Purpose Only</SH><P>All content is for educational purposes only.</P><P bold>JECOFX does not provide financial, investment, or trading advice.</P></section><Dv/>
      <section className="pm-section" style={{animationDelay:'.10s'}}>
        <SH num="03">Risk Disclaimer</SH>
        <Alert type="warning" label="Risk Notice" icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}>
          <P>Forex trading involves substantial risk of loss. Past performance is not indicative of future results.</P>
          <ul style={{marginTop:'8px'}}><B>You are solely responsible for your trading decisions.</B><B>You may lose some or all of your capital.</B><B>JECOFX does not guarantee profits or specific outcomes.</B></ul>
        </Alert>
      </section><Dv/>
      <section className="pm-section" style={{animationDelay:'.13s'}}><SH num="04">No Guarantees</SH><P>JECOFX makes no warranties regarding future profitability, accuracy of analysis, or trading outcomes.</P></section><Dv/>
      <section className="pm-section" style={{animationDelay:'.16s'}}><SH num="05">Intellectual Property</SH><P>All content is the intellectual property of JECOFX. Unauthorized reproduction or redistribution is prohibited.</P></section><Dv/>
      <section className="pm-section" style={{animationDelay:'.19s'}}><SH num="06">User Responsibility</SH><P>You agree to use the platform lawfully, not redistribute paid materials, and not misrepresent affiliation with JECOFX.</P></section><Dv/>
      <section className="pm-section" style={{animationDelay:'.22s'}}><SH num="07">Limitation of Liability</SH><P>JECOFX is not liable for any financial losses arising from use of this website or its educational materials.</P></section><Dv/>
      <section className="pm-section" style={{animationDelay:'.25s'}}><SH num="08">Modifications</SH><P>We may update these Terms at any time. Continued use constitutes acceptance.</P></section>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div>
      <section className="pm-section" style={{animationDelay:'.05s'}}><SH num="01">Introduction</SH><P>JECOFX is committed to protecting your privacy and personal information.</P></section><Dv/>
      <section className="pm-section" style={{animationDelay:'.08s'}}>
        <SH num="02">Information We Collect</SH>
        <P>We may collect your name, email, phone number, and form submissions.</P>
        <Alert type="secure" label="Data Security" icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}>
          <P>We do <strong style={{color:'#86EFAC',fontWeight:500}}>not</strong> collect or store bank details or card numbers.</P>
        </Alert>
      </section><Dv/>
      <section className="pm-section" style={{animationDelay:'.11s'}}><SH num="03">How We Use Your Information</SH><P>Your data is used to respond to inquiries, schedule calls, deliver services, and send relevant updates.</P><P bold>We do not sell, rent, or trade your data.</P></section><Dv/>
      <section className="pm-section" style={{animationDelay:'.14s'}}><SH num="04">Data Protection</SH><P>We use industry-standard security measures to protect your data.</P></section><Dv/>
      <section className="pm-section" style={{animationDelay:'.17s'}}><SH num="05">Third-Party Services</SH><P>We use trusted providers for scheduling, email delivery, and analytics. They govern their own data collection.</P></section><Dv/>
      <section className="pm-section" style={{animationDelay:'.20s'}}><SH num="06">Your Rights</SH><P>You may request access to, correction of, or deletion of your personal data at any time.</P></section><Dv/>
      <section className="pm-section" style={{animationDelay:'.23s'}}><SH num="07">Updates</SH><P>We may update this policy periodically. Continued use indicates acceptance.</P></section>
    </div>
  );
}
