// /import { useEffect, useState } from 'react';

// type PolicyType = 'terms' | 'privacy' | null;

// export default function Footer() {
//   const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

//   useEffect(() => {
//     if (!activePolicy) return;

//     const onKeyDown = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') setActivePolicy(null);
//     };

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = 'hidden';
//     window.addEventListener('keydown', onKeyDown);

//     return () => {
//       document.body.style.overflow = previousOverflow;
//       window.removeEventListener('keydown', onKeyDown);
//     };
//   }, [activePolicy]);

//   return (
//     <>
//       <footer className="bg-[var(--surface)] py-12 border-t border-[var(--border)]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
//           <div className="flex flex-col items-center">
//             <div className="flex items-center gap-3">
//               <img
//                 src="/img/logo.webp"
//                 alt="JecoFX"
//                 width={32}
//                 height={32}
//                 className="h-8 w-8 object-contain"
//                 style={{
//                   filter:
//                     'brightness(0) saturate(100%) invert(7%) sepia(10%) saturate(1612%) hue-rotate(189deg) brightness(95%)',
//                 }}
//                 loading="lazy"
//                 decoding="async"
//               />
//               <span className="text-[#0F172B] font-black text-xl tracking-tight">JECOFX</span>
//             </div>
//             <p className="mt-2.5 text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-[var(--text-muted)] uppercase text-center">
//               LEARN · GROW · PROSPER
//             </p>
//           </div>

//           <div className="flex gap-8 text-sm font-medium text-[var(--text-muted)] md:mr-10">
//             <button
//               type="button"
//               onClick={() => setActivePolicy('privacy')}
//               className="hover:text-[var(--text)] transition-colors"
//             >
//               Privacy
//             </button>
//             <button
//               type="button"
//               onClick={() => setActivePolicy('terms')}
//               className="hover:text-[var(--text)] transition-colors"
//             >
//               Terms
//             </button>
//             <a href="#contact" className="hover:text-[var(--text)] transition-colors">
//               Support
//             </a>
//           </div>

//           <p className="text-[var(--text-muted)] text-sm font-light text-center md:text-right">
//             &copy; {new Date().getFullYear()} JECOFX.
//           </p>
//         </div>
//       </footer>

//       {activePolicy ? (
//         <PolicyModal activePolicy={activePolicy} onClose={() => setActivePolicy(null)} />
//       ) : null}
//     </>
//   );
// }

// // ─── Policy Modal ─────────────────────────────────────────────────────────────

// function PolicyModal({
//   activePolicy,
//   onClose,
// }: {
//   activePolicy: 'terms' | 'privacy';
//   onClose: () => void;
// }) {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=IBM+Plex+Sans:wght@300;400;500&family=IBM+Plex+Mono:wght@300;400&display=swap');

//         .pm-overlay {
//           animation: pmOverlayIn 0.3s ease forwards;
//         }
//         .pm-panel {
//           animation: pmPanelIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//         }
//         @keyframes pmOverlayIn {
//           from { opacity: 0; }
//           to   { opacity: 1; }
//         }
//         @keyframes pmPanelIn {
//           from { opacity: 0; transform: translateY(24px) scale(0.98); }
//           to   { opacity: 1; transform: translateY(0) scale(1); }
//         }

//         .pm-scroll::-webkit-scrollbar { width: 3px; }
//         .pm-scroll::-webkit-scrollbar-track { background: #EEE9DF; }
//         .pm-scroll::-webkit-scrollbar-thumb {
//           background: #1A2B4A;
//           border-radius: 99px;
//         }

//         .pm-section {
//           animation: pmSectionIn 0.35s ease both;
//         }
//         @keyframes pmSectionIn {
//           from { opacity: 0; transform: translateY(8px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         .pm-close:hover {
//           background: #1A2B4A !important;
//           color: #F7F5F0 !important;
//           border-color: #1A2B4A !important;
//         }
//         .pm-close { transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease; }
//         .pm-close:hover .pm-close-icon { transform: rotate(90deg); }
//         .pm-close-icon { transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); }

//         .pm-cta:hover { background: #0F1E38 !important; }
//         .pm-cta { transition: background 0.2s ease; }
//       `}</style>

//       {/* Backdrop */}
//       <div
//         className="pm-overlay fixed inset-0 z-[120]"
//         style={{ background: 'rgba(15, 28, 56, 0.45)', backdropFilter: 'blur(6px)' }}
//         onClick={onClose}
//         role="presentation"
//       />

//       {/* Panel */}
//       <div className="fixed inset-0 z-[121] flex items-center justify-center px-4 py-6 sm:px-6 sm:py-10 pointer-events-none">
//         <div
//           className="pm-panel pointer-events-auto relative w-full max-w-2xl max-h-[88vh] flex flex-col"
//           style={{
//             background: '#F7F5F0',
//             borderRadius: '3px',
//             boxShadow: '0 2px 4px rgba(15,28,56,0.05), 0 20px 60px rgba(15,28,56,0.15), 0 0 0 1px rgba(15,28,56,0.07)',
//           }}
//           onClick={(e) => e.stopPropagation()}
//           role="dialog"
//           aria-modal="true"
//           aria-label={activePolicy === 'terms' ? 'Terms and Conditions' : 'Privacy Policy'}
//         >
//           {/* Top accent bar */}
//           <div style={{
//             height: '3px',
//             borderRadius: '3px 3px 0 0',
//             background: 'linear-gradient(90deg, #1A2B4A 0%, #1A2B4A 72%, #C9A254 72%, #C9A254 84%, #E8D08A 84%)',
//             flexShrink: 0,
//           }} />

//           {/* Header */}
//           <div
//             className="flex items-start justify-between px-8 pt-7 pb-5 flex-shrink-0"
//             style={{ borderBottom: '1px solid #DDD8CE' }}
//           >
//             <div>
//               <p style={{
//                 fontFamily: "'IBM Plex Mono', monospace",
//                 fontSize: '9.5px',
//                 letterSpacing: '0.22em',
//                 color: '#B08A30',
//                 textTransform: 'uppercase',
//                 marginBottom: '9px',
//               }}>
//                 JECOFX ACADEMY &nbsp;/&nbsp; LEGAL
//               </p>
//               <h2 style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontSize: 'clamp(22px, 3vw, 30px)',
//                 fontWeight: 400,
//                 color: '#0F1E38',
//                 lineHeight: 1.15,
//                 letterSpacing: '-0.01em',
//               }}>
//                 {activePolicy === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
//               </h2>
//               {/* Signature rule */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '11px' }}>
//                 <div style={{ width: '24px', height: '2px', background: '#0F1E38' }} />
//                 <div style={{ width: '5px', height: '2px', background: '#C9A254' }} />
//                 <div style={{ width: '3px', height: '2px', background: '#C9A254', opacity: 0.5 }} />
//               </div>
//             </div>

//             <button
//               type="button"
//               className="pm-close flex-shrink-0 ml-6 mt-1"
//               onClick={onClose}
//               aria-label="Close"
//               style={{
//                 width: '34px',
//                 height: '34px',
//                 borderRadius: '2px',
//                 background: 'transparent',
//                 border: '1px solid #C8C2B8',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: '#4A4540',
//                 cursor: 'pointer',
//               }}
//             >
//               <svg className="pm-close-icon" width="11" height="11" viewBox="0 0 11 11" fill="none">
//                 <path d="M1 1L10 10M10 1L1 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
//               </svg>
//             </button>
//           </div>

//           {/* Scrollable content */}
//           <div
//             className="pm-scroll flex-1 overflow-y-auto px-8 py-7"
//             style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
//           >
//             {activePolicy === 'terms' ? <TermsContent /> : <PrivacyContent />}
//           </div>

//           {/* Footer bar */}
//           <div
//             className="flex-shrink-0 flex items-center justify-between px-8 py-4"
//             style={{ borderTop: '1px solid #DDD8CE', background: '#EEE9DF' }}
//           >
//             <p style={{
//               fontFamily: "'IBM Plex Mono', monospace",
//               fontSize: '9.5px',
//               color: '#9A938A',
//               letterSpacing: '0.14em',
//               textTransform: 'uppercase',
//             }}>
//               &copy; {new Date().getFullYear()} JECOFX
//             </p>
//             <button
//               className="pm-cta"
//               onClick={onClose}
//               style={{
//                 fontFamily: "'IBM Plex Sans', sans-serif",
//                 fontSize: '11.5px',
//                 fontWeight: 500,
//                 color: '#F7F5F0',
//                 background: '#1A2B4A',
//                 border: 'none',
//                 borderRadius: '2px',
//                 padding: '9px 22px',
//                 cursor: 'pointer',
//                 letterSpacing: '0.1em',
//                 textTransform: 'uppercase',
//               }}
//             >
//               Understood
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // ─── Helpers ──────────────────────────────────────────────────────────────────

// function SectionHeading({ num, children }: { num: string; children: React.ReactNode }) {
//   return (
//     <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '10px' }}>
//       <span style={{
//         fontFamily: "'IBM Plex Mono', monospace",
//         fontSize: '9.5px',
//         color: '#C9A254',
//         letterSpacing: '0.14em',
//         flexShrink: 0,
//         paddingTop: '2px',
//       }}>
//         {num}
//       </span>
//       <h3 style={{
//         fontFamily: "'Playfair Display', serif",
//         fontSize: '17px',
//         fontWeight: 500,
//         color: '#0F1E38',
//         lineHeight: 1.2,
//         letterSpacing: '0.01em',
//       }}>
//         {children}
//       </h3>
//     </div>
//   );
// }

// function Para({ children, bold }: { children: React.ReactNode; bold?: boolean }) {
//   return (
//     <p style={{
//       fontFamily: "'IBM Plex Sans', sans-serif",
//       color: bold ? '#1E3050' : '#5C5650',
//       fontSize: '13.5px',
//       lineHeight: '1.78',
//       fontWeight: bold ? 400 : 300,
//       marginTop: '8px',
//     }}>
//       {children}
//     </p>
//   );
// }

// function Bullet({ children }: { children: React.ReactNode }) {
//   return (
//     <li style={{
//       display: 'flex',
//       alignItems: 'flex-start',
//       gap: '11px',
//       color: '#5C5650',
//       fontSize: '13px',
//       lineHeight: '1.72',
//       fontWeight: 300,
//       listStyle: 'none',
//       marginTop: '6px',
//       fontFamily: "'IBM Plex Sans', sans-serif",
//     }}>
//       <span style={{ color: '#1A2B4A', marginTop: '8px', fontSize: '5px', flexShrink: 0, opacity: 0.6 }}>■</span>
//       <span>{children}</span>
//     </li>
//   );
// }

// function Divider() {
//   return (
//     <div style={{ height: '1px', background: '#DDD8CE', margin: '26px 0' }} />
//   );
// }

// function AlertBox({
//   type,
//   label,
//   icon,
//   children,
// }: {
//   type: 'warning' | 'secure';
//   label: string;
//   icon: React.ReactNode;
//   children: React.ReactNode;
// }) {
//   const isWarning = type === 'warning';
//   return (
//     <div style={{
//       background: isWarning ? '#FDFAF2' : '#F3F8F5',
//       border: `1px solid ${isWarning ? '#E6D498' : '#B8D8C4'}`,
//       borderLeft: `3px solid ${isWarning ? '#C9A254' : '#3A9068'}`,
//       borderRadius: '2px',
//       padding: '15px 16px',
//       marginTop: '13px',
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '8px' }}>
//         <span style={{ color: isWarning ? '#C9A254' : '#3A9068', flexShrink: 0 }}>{icon}</span>
//         <span style={{
//           fontFamily: "'IBM Plex Mono', monospace",
//           fontSize: '9px',
//           letterSpacing: '0.2em',
//           color: isWarning ? '#8B6A1A' : '#2A6648',
//           textTransform: 'uppercase',
//         }}>
//           {label}
//         </span>
//       </div>
//       {children}
//     </div>
//   );
// }

// // ─── Terms Content ────────────────────────────────────────────────────────────

// function TermsContent() {
//   return (
//     <div>
//       <section className="pm-section" style={{ animationDelay: '0.04s' }}>
//         <SectionHeading num="01">Introduction</SectionHeading>
//         <Para>
//           Welcome to JECOFX. By accessing or utilizing this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our platform immediately.
//         </Para>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.08s' }}>
//         <SectionHeading num="02">Educational Purpose Only</SectionHeading>
//         <Para>
//           Our platform provides specialized educational content focused on foreign exchange (forex) trading. All proprietary materials, training modules, mentorship sessions, and resources are designed strictly for informational and educational purposes.
//         </Para>
//         <Para bold>
//           JECOFX does not operate as a financial advisory firm and does not provide personalized financial, investment, or trading advice.
//         </Para>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.12s' }}>
//         <SectionHeading num="03">Risk Disclaimer</SectionHeading>
//         <AlertBox
//           type="warning"
//           label="Risk Notice"
//           icon={
//             <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//               <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
//                 stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           }
//         >
//           <Para>
//             Trading foreign exchange and leveraged financial instruments involves a substantial risk of loss and is not suitable for all investors. Past performance is strictly not indicative of future results.
//           </Para>
//           <ul style={{ marginTop: '10px' }}>
//             <Bullet>You retain sole responsibility for your personal trading decisions and risk management.</Bullet>
//             <Bullet>You acknowledge the possibility of losing some or all of your initially invested capital.</Bullet>
//             <Bullet>JECOFX explicitly does not guarantee profits, trading success, or specific financial outcomes.</Bullet>
//           </ul>
//         </AlertBox>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.16s' }}>
//         <SectionHeading num="04">No Guarantees</SectionHeading>
//         <Para>JECOFX makes no representations, warranties, or assurances regarding:</Para>
//         <ul style={{ marginTop: '8px' }}>
//           <Bullet>Future profitability or earnings potential.</Bullet>
//           <Bullet>The absolute accuracy or timeliness of market analysis provided.</Bullet>
//           <Bullet>Specific trading performance outcomes based on our educational models.</Bullet>
//         </ul>
//         <p style={{
//           fontFamily: "'IBM Plex Mono', monospace",
//           fontSize: '11px',
//           color: '#9A9490',
//           marginTop: '13px',
//           letterSpacing: '0.02em',
//         }}>
//           * All chart examples, case studies, and scenarios shared are for educational illustration only.
//         </p>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.2s' }}>
//         <SectionHeading num="05">Intellectual Property</SectionHeading>
//         <Para>
//           All exclusive content on this website — including but not limited to text, video tutorials, custom graphics, course curriculum, and brand assets — is the sole intellectual property of JECOFX. Unauthorized copying, reproduction, or commercial distribution is strictly prohibited.
//         </Para>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.24s' }}>
//         <SectionHeading num="06">User Responsibility</SectionHeading>
//         <Para>As a user of our platform, you agree to:</Para>
//         <ul style={{ marginTop: '8px' }}>
//           <Bullet>Interact with the website and community lawfully and respectfully.</Bullet>
//           <Bullet>Strictly refrain from redistributing, sharing, or reselling paid materials.</Bullet>
//           <Bullet>Not misrepresent your affiliation with JECOFX or our services.</Bullet>
//         </ul>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.28s' }}>
//         <SectionHeading num="07">Limitation of Liability</SectionHeading>
//         <Para>
//           To the maximum extent permitted by law, JECOFX shall not be held liable for any direct, indirect, incidental, or consequential financial losses, damages, or claims arising out of your use of this website or the application of its educational materials.
//         </Para>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.32s' }}>
//         <SectionHeading num="08">Modifications</SectionHeading>
//         <Para>
//           JECOFX reserves the right to review and update these Terms at our discretion. Your continued use of the website following any changes constitutes your formal acceptance of the updated Terms.
//         </Para>
//       </section>
//     </div>
//   );
// }

// // ─── Privacy Content ──────────────────────────────────────────────────────────

// function PrivacyContent() {
//   return (
//     <div>
//       <div
//         className="pm-section"
//         style={{
//           animationDelay: '0.03s',
//           display: 'inline-flex',
//           alignItems: 'center',
//           background: '#EAE5DA',
//           border: '1px solid #D0C8B8',
//           borderRadius: '2px',
//           padding: '5px 11px',
//           marginBottom: '22px',
//         }}
//       >
//         <span style={{
//           fontFamily: "'IBM Plex Mono', monospace",
//           fontSize: '9.5px',
//           color: '#5C5650',
//           letterSpacing: '0.15em',
//           textTransform: 'uppercase',
//         }}>
//           Effective — JECOFX Forex Academy
//         </span>
//       </div>

//       <section className="pm-section" style={{ animationDelay: '0.06s' }}>
//         <SectionHeading num="01">Introduction</SectionHeading>
//         <Para>
//           JECOFX deeply respects your privacy and maintains a strict commitment to safeguarding your personal information. This Privacy Policy outlines our practices regarding the collection, utilization, and protection of your data when interacting with our platform.
//         </Para>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.09s' }}>
//         <SectionHeading num="02">Information We Collect</SectionHeading>
//         <Para>To provide you with an optimal educational experience, we may collect:</Para>
//         <ul style={{ marginTop: '8px' }}>
//           <Bullet>
//             <strong style={{ color: '#1E3050', fontWeight: 400 }}>Identity Data —</strong> Full name.
//           </Bullet>
//           <Bullet>
//             <strong style={{ color: '#1E3050', fontWeight: 400 }}>Contact Data —</strong> Email address and phone number.
//           </Bullet>
//           <Bullet>
//             <strong style={{ color: '#1E3050', fontWeight: 400 }}>Engagement Data —</strong> Information submitted through our contact or booking forms.
//           </Bullet>
//         </ul>
//         <AlertBox
//           type="secure"
//           label="Data Security"
//           icon={
//             <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
//                 stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//               <path d="M9 12l2 2 4-4"
//                 stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           }
//         >
//           <Para>
//             We maintain a strict policy of <strong style={{ color: '#2A6648', fontWeight: 400 }}>not</strong> collecting or storing sensitive financial information (such as bank details or credit card numbers) through this website.
//           </Para>
//         </AlertBox>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.12s' }}>
//         <SectionHeading num="03">How We Use Your Information</SectionHeading>
//         <Para>Your data is utilized strictly for operational and service-enhancement purposes:</Para>
//         <ul style={{ marginTop: '8px' }}>
//           <Bullet>Promptly responding to your inquiries and support requests.</Bullet>
//           <Bullet>Scheduling mentorship calls and onboarding sessions.</Bullet>
//           <Bullet>Delivering purchased educational services and resources.</Bullet>
//           <Bullet>Sending highly relevant academy updates (if explicitly subscribed).</Bullet>
//         </ul>
//         <Para bold>We strictly do not sell, rent, or trade your personal information to third parties.</Para>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.15s' }}>
//         <SectionHeading num="04">Data Protection</SectionHeading>
//         <Para>
//           We implement robust, industry-standard security measures to protect your personal information from unauthorized access or disclosure. While we strive to protect your data, no internet transmission is 100% infallible.
//         </Para>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.18s' }}>
//         <SectionHeading num="05">Third-Party Services</SectionHeading>
//         <Para>To streamline our services, we utilize trusted third-party providers, such as:</Para>
//         <ul style={{ marginTop: '8px' }}>
//           <Bullet>Scheduling tools (e.g., Calendly).</Bullet>
//           <Bullet>Secure email delivery services.</Bullet>
//           <Bullet>Website analytics tools.</Bullet>
//         </ul>
//         <p style={{
//           fontFamily: "'IBM Plex Mono', monospace",
//           fontSize: '11px',
//           color: '#9A9490',
//           marginTop: '13px',
//           letterSpacing: '0.02em',
//         }}>
//           * These providers govern data collection per their own secure privacy policies.
//         </p>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.21s' }}>
//         <SectionHeading num="06">Your Rights</SectionHeading>
//         <Para>You retain full control over your personal data. You may request:</Para>
//         <ul style={{ marginTop: '8px' }}>
//           <Bullet>Access to the personal data we currently hold about you.</Bullet>
//           <Bullet>Correction of any inaccurate or incomplete information.</Bullet>
//           <Bullet>The permanent deletion of your personal information from our records.</Bullet>
//         </ul>
//       </section>

//       <Divider />

//       <section className="pm-section" style={{ animationDelay: '0.24s' }}>
//         <SectionHeading num="07">Updates to This Policy</SectionHeading>
//         <Para>
//           We may update this Privacy Policy periodically to reflect changes in our practices. Continued engagement with our website indicates your acceptance of the most current policy version.
//         </Para>
//       </section>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';

type PolicyType = 'terms' | 'privacy' | null;

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  useEffect(() => {
    if (!activePolicy) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActivePolicy(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activePolicy]);

  return (
    <>
      <footer className="bg-[var(--surface)] py-12 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3">
              <img
                src="/img/logo.webp"
                alt="JecoFX"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(7%) sepia(10%) saturate(1612%) hue-rotate(189deg) brightness(95%)',
                }}
                loading="lazy"
                decoding="async"
              />
              <span className="text-[#0F172B] font-black text-xl tracking-tight">JECOFX</span>
            </div>
            <p className="mt-2.5 text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-[var(--text-muted)] uppercase text-center">
              LEARN · GROW · PROSPER
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-[var(--text-muted)] md:mr-10">
            <button
              type="button"
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-[var(--text)] transition-colors"
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => setActivePolicy('terms')}
              className="hover:text-[var(--text)] transition-colors"
            >
              Terms
            </button>
            <a href="#contact" className="hover:text-[var(--text)] transition-colors">
              Support
            </a>
          </div>

          <p className="text-[var(--text-muted)] text-sm font-light text-center md:text-right">
            &copy; {new Date().getFullYear()} JECOFX.
          </p>
        </div>
      </footer>

      {activePolicy ? (
        <PolicyModal activePolicy={activePolicy} onClose={() => setActivePolicy(null)} />
      ) : null}
    </>
  );
}

// ─── Policy Modal ─────────────────────────────────────────────────────────────

function PolicyModal({
  activePolicy,
  onClose,
}: {
  activePolicy: 'terms' | 'privacy';
  onClose: () => void;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=DM+Mono:wght@300;400&display=swap');

        /* ── Animations ── */
        .pm-overlay { animation: pmOverlayIn 0.25s ease forwards; }
        .pm-panel   { animation: pmPanelIn  0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

        @keyframes pmOverlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pmPanelIn {
          from { opacity: 0; transform: translateY(20px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0)    scale(1);     }
        }

        /* On mobile: slide up from bottom like a sheet */
        @media (max-width: 639px) {
          @keyframes pmPanelIn {
            from { opacity: 0; transform: translateY(100%); }
            to   { opacity: 1; transform: translateY(0);    }
          }
        }

        /* ── Scrollbar ── */
        .pm-scroll::-webkit-scrollbar       { width: 3px; }
        .pm-scroll::-webkit-scrollbar-track { background: transparent; }
        .pm-scroll::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 99px; }

        /* ── Section fade-in ── */
        .pm-section { animation: pmSectionIn 0.3s ease both; }
        @keyframes pmSectionIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }

        /* ── Close button ── */
        .pm-close { transition: background 0.15s, border-color 0.15s; }
        .pm-close:hover { background: #F1F5F9 !important; border-color: #94A3B8 !important; }
        .pm-close:hover .pm-close-icon { transform: rotate(90deg); }
        .pm-close-icon { transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1); display: block; }

        /* ── CTA button ── */
        .pm-cta { transition: background 0.15s, transform 0.1s; }
        .pm-cta:hover  { background: #0F172A !important; transform: translateY(-1px); }
        .pm-cta:active { transform: translateY(0); }

        /* ── Responsive panel sizing ── */
        .pm-panel-wrap {
          /* desktop: centered dialog */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
        }
        @media (max-width: 639px) {
          /* mobile: bottom sheet */
          .pm-panel-wrap {
            align-items: flex-end;
            padding: 0;
          }
          .pm-panel {
            border-radius: 20px 20px 0 0 !important;
            max-height: 92vh !important;
          }
          .pm-panel-inner {
            border-radius: 20px 20px 0 0 !important;
          }
          .pm-accent-bar {
            border-radius: 20px 20px 0 0 !important;
          }
          .pm-footer-bar {
            border-radius: 0 !important;
            /* extra safe area padding for iPhones */
            padding-bottom: max(16px, env(safe-area-inset-bottom)) !important;
          }
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="pm-overlay fixed inset-0 z-[120]"
        style={{ background: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
        role="presentation"
      />

      {/* Centering wrapper */}
      <div
        className="pm-panel-wrap fixed inset-0 z-[121] pointer-events-none"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Panel */}
        <div
          className="pm-panel pointer-events-auto relative w-full flex flex-col"
          style={{
            maxWidth: '640px',
            maxHeight: '88vh',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 6px rgba(15,23,42,0.04), 0 24px 64px rgba(15,23,42,0.14)',
          }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={activePolicy === 'terms' ? 'Terms and Conditions' : 'Privacy Policy'}
        >
          {/* Accent bar */}
          <div
            className="pm-accent-bar"
            style={{
              height: '4px',
              borderRadius: '16px 16px 0 0',
              background: 'linear-gradient(90deg, #1E3A5F 0%, #2563EB 55%, #1E3A5F 100%)',
              flexShrink: 0,
            }}
          />

          {/* ── Header ── */}
          <div
            className="flex items-start justify-between flex-shrink-0"
            style={{
              padding: 'clamp(16px, 4vw, 24px) clamp(16px, 5vw, 28px) clamp(14px, 3vw, 20px)',
              borderBottom: '1px solid #F1F5F9',
            }}
          >
            <div style={{ minWidth: 0, flex: 1 }}>
              {/* Breadcrumb */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '7px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', color: '#94A3B8', textTransform: 'uppercase' }}>
                  JECOFX
                </span>
                <span style={{ color: '#CBD5E1', fontSize: '10px' }}>/</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', color: '#94A3B8', textTransform: 'uppercase' }}>
                  LEGAL
                </span>
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(18px, 5vw, 24px)',
                fontWeight: 700,
                color: '#0F172A',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                wordBreak: 'break-word',
              }}>
                {activePolicy === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
              </h2>
            </div>

            {/* Close button — minimum 44×44 touch target */}
            <button
              type="button"
              className="pm-close"
              onClick={onClose}
              aria-label="Close"
              style={{
                flexShrink: 0,
                marginLeft: '12px',
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'transparent',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748B',
                cursor: 'pointer',
              }}
            >
              <svg className="pm-close-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* ── Scrollable content ── */}
          <div
            className="pm-scroll flex-1 overflow-y-auto"
            style={{ padding: 'clamp(16px, 4vw, 28px) clamp(16px, 5vw, 28px)' }}
          >
            {activePolicy === 'terms' ? <TermsContent /> : <PrivacyContent />}
          </div>

          {/* ── Footer bar ── */}
          <div
            className="pm-footer-bar flex-shrink-0 flex items-center justify-between"
            style={{
              padding: 'clamp(12px, 3vw, 16px) clamp(16px, 5vw, 28px)',
              borderTop: '1px solid #F1F5F9',
              background: '#FAFAFA',
              borderRadius: '0 0 16px 16px',
              gap: '12px',
            }}
          >
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              color: '#94A3B8',
              letterSpacing: '0.1em',
              flexShrink: 0,
            }}>
              © {new Date().getFullYear()} JECOFX
            </p>

            {/* Touch-friendly CTA — min 44px tall */}
            <button
              className="pm-cta"
              onClick={onClose}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                color: '#FFFFFF',
                background: '#1E3A5F',
                border: 'none',
                borderRadius: '10px',
                padding: '12px 24px',
                minHeight: '44px',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionHeading({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '8px', flexWrap: 'wrap' }}>
      <span style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '10px',
        fontWeight: 400,
        color: '#2563EB',
        letterSpacing: '0.06em',
        background: '#EFF6FF',
        padding: '2px 7px',
        borderRadius: '5px',
        flexShrink: 0,
      }}>
        {num}
      </span>
      <h3 style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 'clamp(14px, 3.5vw, 15px)',
        fontWeight: 600,
        color: '#0F172A',
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
      }}>
        {children}
      </h3>
    </div>
  );
}

function Para({ children, bold }: { children: React.ReactNode; bold?: boolean }) {
  return (
    <p style={{
      fontFamily: "'DM Sans', sans-serif",
      color: bold ? '#1E293B' : '#64748B',
      fontSize: 'clamp(13px, 3.2vw, 13.5px)',
      lineHeight: '1.72',
      fontWeight: bold ? 500 : 400,
      marginTop: '6px',
    }}>
      {children}
    </p>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      color: '#64748B',
      fontSize: 'clamp(12.5px, 3vw, 13px)',
      lineHeight: '1.7',
      fontWeight: 400,
      listStyle: 'none',
      marginTop: '5px',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <span style={{
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        background: '#CBD5E1',
        flexShrink: 0,
        marginTop: '8px',
        display: 'block',
      }} />
      <span>{children}</span>
    </li>
  );
}

function Divider() {
  return <div style={{ height: '1px', background: '#F1F5F9', margin: 'clamp(16px, 4vw, 22px) 0' }} />;
}

function AlertBox({
  type,
  label,
  icon,
  children,
}: {
  type: 'warning' | 'secure';
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const isWarning = type === 'warning';
  return (
    <div style={{
      background: isWarning ? '#FFFBEB' : '#F0FDF4',
      border: `1px solid ${isWarning ? '#FDE68A' : '#BBF7D0'}`,
      borderLeft: `3px solid ${isWarning ? '#F59E0B' : '#22C55E'}`,
      borderRadius: '10px',
      padding: 'clamp(12px, 3vw, 14px) clamp(12px, 4vw, 16px)',
      marginTop: '12px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px', flexWrap: 'wrap' }}>
        <span style={{ color: isWarning ? '#D97706' : '#16A34A', flexShrink: 0 }}>{icon}</span>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '9.5px',
          letterSpacing: '0.16em',
          color: isWarning ? '#92400E' : '#166534',
          textTransform: 'uppercase',
        }}>
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

// ─── Terms Content ────────────────────────────────────────────────────────────

function TermsContent() {
  return (
    <div>
      <section className="pm-section" style={{ animationDelay: '0.04s' }}>
        <SectionHeading num="01">Introduction</SectionHeading>
        <Para>
          Welcome to JECOFX. By accessing or utilizing this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our platform immediately.
        </Para>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.07s' }}>
        <SectionHeading num="02">Educational Purpose Only</SectionHeading>
        <Para>
          Our platform provides specialized educational content focused on foreign exchange (forex) trading. All proprietary materials, training modules, mentorship sessions, and resources are designed strictly for informational and educational purposes.
        </Para>
        <Para bold>
          JECOFX does not operate as a financial advisory firm and does not provide personalized financial, investment, or trading advice.
        </Para>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.10s' }}>
        <SectionHeading num="03">Risk Disclaimer</SectionHeading>
        <AlertBox
          type="warning"
          label="Risk Notice"
          icon={
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        >
          <Para>
            Trading foreign exchange and leveraged financial instruments involves a substantial risk of loss and is not suitable for all investors. Past performance is strictly not indicative of future results.
          </Para>
          <ul style={{ marginTop: '8px' }}>
            <Bullet>You retain sole responsibility for your personal trading decisions and risk management.</Bullet>
            <Bullet>You acknowledge the possibility of losing some or all of your initially invested capital.</Bullet>
            <Bullet>JECOFX explicitly does not guarantee profits, trading success, or specific financial outcomes.</Bullet>
          </ul>
        </AlertBox>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.13s' }}>
        <SectionHeading num="04">No Guarantees</SectionHeading>
        <Para>JECOFX makes no representations, warranties, or assurances regarding:</Para>
        <ul style={{ marginTop: '6px' }}>
          <Bullet>Future profitability or earnings potential.</Bullet>
          <Bullet>The absolute accuracy or timeliness of market analysis provided.</Bullet>
          <Bullet>Specific trading performance outcomes based on our educational models.</Bullet>
        </ul>
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '11px',
          color: '#94A3B8',
          marginTop: '12px',
          letterSpacing: '0.01em',
        }}>
          * All chart examples, case studies, and scenarios shared are for educational illustration only.
        </p>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.16s' }}>
        <SectionHeading num="05">Intellectual Property</SectionHeading>
        <Para>
          All exclusive content on this website — including but not limited to text, video tutorials, custom graphics, course curriculum, and brand assets — is the sole intellectual property of JECOFX. Unauthorized copying, reproduction, or commercial distribution is strictly prohibited.
        </Para>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.19s' }}>
        <SectionHeading num="06">User Responsibility</SectionHeading>
        <Para>As a user of our platform, you agree to:</Para>
        <ul style={{ marginTop: '6px' }}>
          <Bullet>Interact with the website and community lawfully and respectfully.</Bullet>
          <Bullet>Strictly refrain from redistributing, sharing, or reselling paid materials.</Bullet>
          <Bullet>Not misrepresent your affiliation with JECOFX or our services.</Bullet>
        </ul>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.22s' }}>
        <SectionHeading num="07">Limitation of Liability</SectionHeading>
        <Para>
          To the maximum extent permitted by law, JECOFX shall not be held liable for any direct, indirect, incidental, or consequential financial losses, damages, or claims arising out of your use of this website or the application of its educational materials.
        </Para>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.25s' }}>
        <SectionHeading num="08">Modifications</SectionHeading>
        <Para>
          JECOFX reserves the right to review and update these Terms at our discretion. Your continued use of the website following any changes constitutes your formal acceptance of the updated Terms.
        </Para>
      </section>
    </div>
  );
}

// ─── Privacy Content ──────────────────────────────────────────────────────────

function PrivacyContent() {
  return (
    <div>
      <section className="pm-section" style={{ animationDelay: '0.05s' }}>
        <SectionHeading num="01">Introduction</SectionHeading>
        <Para>
          JECOFX deeply respects your privacy and maintains a strict commitment to safeguarding your personal information. This Privacy Policy outlines our practices regarding the collection, utilization, and protection of your data when interacting with our platform.
        </Para>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.08s' }}>
        <SectionHeading num="02">Information We Collect</SectionHeading>
        <Para>To provide you with an optimal educational experience, we may collect:</Para>
        <ul style={{ marginTop: '6px' }}>
          <Bullet>
            <strong style={{ color: '#334155', fontWeight: 500 }}>Identity Data —</strong> Full name.
          </Bullet>
          <Bullet>
            <strong style={{ color: '#334155', fontWeight: 500 }}>Contact Data —</strong> Email address and phone number.
          </Bullet>
          <Bullet>
            <strong style={{ color: '#334155', fontWeight: 500 }}>Engagement Data —</strong> Information submitted through our contact or booking forms.
          </Bullet>
        </ul>
        <AlertBox
          type="secure"
          label="Data Security"
          icon={
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12l2 2 4-4"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        >
          <Para>
            We maintain a strict policy of <strong style={{ color: '#166534', fontWeight: 500 }}>not</strong> collecting or storing sensitive financial information (such as bank details or credit card numbers) through this website.
          </Para>
        </AlertBox>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.11s' }}>
        <SectionHeading num="03">How We Use Your Information</SectionHeading>
        <Para>Your data is utilized strictly for operational and service-enhancement purposes:</Para>
        <ul style={{ marginTop: '6px' }}>
          <Bullet>Promptly responding to your inquiries and support requests.</Bullet>
          <Bullet>Scheduling mentorship calls and onboarding sessions.</Bullet>
          <Bullet>Delivering purchased educational services and resources.</Bullet>
          <Bullet>Sending highly relevant academy updates (if explicitly subscribed).</Bullet>
        </ul>
        <Para bold>We strictly do not sell, rent, or trade your personal information to third parties.</Para>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.14s' }}>
        <SectionHeading num="04">Data Protection</SectionHeading>
        <Para>
          We implement robust, industry-standard security measures to protect your personal information from unauthorized access or disclosure. While we strive to protect your data, no internet transmission is 100% infallible.
        </Para>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.17s' }}>
        <SectionHeading num="05">Third-Party Services</SectionHeading>
        <Para>To streamline our services, we utilize trusted third-party providers, such as:</Para>
        <ul style={{ marginTop: '6px' }}>
          <Bullet>Scheduling tools (e.g., Calendly).</Bullet>
          <Bullet>Secure email delivery services.</Bullet>
          <Bullet>Website analytics tools.</Bullet>
        </ul>
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '11px',
          color: '#94A3B8',
          marginTop: '12px',
          letterSpacing: '0.01em',
        }}>
          * These providers govern data collection per their own secure privacy policies.
        </p>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.2s' }}>
        <SectionHeading num="06">Your Rights</SectionHeading>
        <Para>You retain full control over your personal data. You may request:</Para>
        <ul style={{ marginTop: '6px' }}>
          <Bullet>Access to the personal data we currently hold about you.</Bullet>
          <Bullet>Correction of any inaccurate or incomplete information.</Bullet>
          <Bullet>The permanent deletion of your personal information from our records.</Bullet>
        </ul>
      </section>

      <Divider />

      <section className="pm-section" style={{ animationDelay: '0.23s' }}>
        <SectionHeading num="07">Updates to This Policy</SectionHeading>
        <Para>
          We may update this Privacy Policy periodically to reflect changes in our practices. Continued engagement with our website indicates your acceptance of the most current policy version.
        </Para>
      </section>
    </div>
  );
}