import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, BadgeCheck, CalendarClock, Check, ChevronDown, Clock, Facebook, Inbox, Instagram, Linkedin, Mail, MapPin, MessageCircle, Play, Sparkles, Workflow } from 'lucide-react';
import './index.css';

const services = [
  { n: '01', title: 'Lead Management Automation', text: 'Automatically capture enquiries, organise leads, update Google Sheets and notify your team.' },
  { n: '02', title: 'AI Enquiry Management', text: 'Help businesses process customer enquiries and organise incoming information.' },
  { n: '03', title: 'Automated Email Follow-ups', text: 'Automatically send follow-up emails and notifications based on lead activity.' },
  { n: '04', title: 'Business Workflow Automation', text: 'Reduce repetitive administrative work inside the tested lead workflow.' },
];

const features = ['Automated lead capture', 'Lead scoring and classification', 'Google Sheets integration for lead tracking', 'Automatic email notifications', 'Automated follow-up emails'];
const benefits = ['Less manual data entry', 'More organised lead tracking', 'Faster follow-up processes', 'Better visibility of potential customers'];
const steps = [
  { days: 'Day 1–2', title: 'Audit current replies', text: 'We look at how enquiries arrive now, where replies slow down, and what your team repeats every day.' },
  { days: 'Day 3–7', title: 'Build system', text: 'I build the lead capture, organisation, notifications and follow-up workflow using the tested tools.' },
  { days: 'Day 8–10', title: 'Test + Go Live', text: 'We test the workflow together, make adjustments, and launch it with a clear handover.' },
];
const faqs = [
  { q: 'What tools does it work with?', a: 'Only tools I have built and tested: Tally forms, Google Sheets, Gmail, Make.com and OpenAI / AI integration where applicable. If you use a different form or sheet, tell me and I will check if it can work before we start.' },
  { q: 'Will it sound robotic to my clients?', a: 'No. I write replies in your clinic\'s tone — friendly, professional, and natural. Clients feel like they\'re talking to your team, just faster. You approve every message before it goes live.' },
  { q: 'What does the 7-day testing period mean?', a: 'The 10-day delivery includes build + testing. After I build your workflow, you get 7 days to test it with real enquiries. I fix any issues in that period before we consider the project done. The 7 days is part of the delivery timeline, not extra.' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div data-safe-area-inset-root="true" style={{ boxSizing: 'border-box', paddingTop: 'var(--safe-area-inset-top)', minHeight: '100vh', background: 'var(--background)', color: 'var(--ink)' }} className="overflow-x-clip">
      <header data-safe-area-sticky-top="true" style={{ top: 'var(--safe-area-inset-top)' }} className="sticky z-30 border-b border-[var(--line)] bg-[var(--background)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left">
            <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">Shuning Ma</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sage)]">AI Automation</span>
          </button>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex">
            <button className="hover:text-[var(--ink)]" onClick={() => scrollTo('services')}>Services</button>
            <button className="hover:text-[var(--ink)]" onClick={() => scrollTo('project')}>Featured project</button>
            <button className="hover:text-[var(--ink)]" onClick={() => scrollTo('process')}>How it works</button>
            <button className="hover:text-[var(--ink)]" onClick={() => scrollTo('pricing')}>Pricing</button>
          </nav>
          <button onClick={() => scrollTo('contact')} className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition hover:opacity-90">DM me AUDIT</button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:pb-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1.65fr_.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--sage-dark)]">
                <span className="h-2 w-2 rounded-full bg-[var(--sage)]" /> For clinics & small businesses
              </div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[var(--sage)]">Shuning Ma — AI Automation Freelancer</p>
              <h1 className="font-display text-[clamp(2.6rem,7vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.035em]">AI Automation<br />Freelancer</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">I help small businesses automate enquiry capture, lead tracking and repetitive administrative work.</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">Using Make.com and AI-powered workflows, I build practical automation solutions that help businesses save time, reduce manual work and manage their operations more efficiently.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://youtu.be/ZxN9HC6HST8" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[var(--sage-dark)] px-5 py-3 font-semibold text-white"> <Play size={17} fill="currentColor" /> Watch Demo</a>
                <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)] px-5 py-3 font-semibold">DM me AUDIT <ArrowRight size={17} /></button>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]">
                <span className="inline-flex items-center gap-1.5"><BadgeCheck size={16} className="text-[var(--sage)]" /> Registered Pharmacist</span>
                <span>University of Malaya</span>
                <span className="inline-flex items-center gap-1.5"><MapPin size={16} /> Based in Malaysia, working with international clients online</span>
              </div>
            </div>
            <aside className="rounded-[28px] border border-[var(--line)] bg-[var(--surface-warm)] p-6 sm:p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--sage-dark)]"><Workflow size={22} /></div>
              <h2 className="font-display text-2xl leading-tight">Practical automation, built around tested tools.</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">No rebuild. No complicated software. Just clearer enquiries, organised follow-ups and less admin.</p>
              <div className="mt-6 space-y-3 border-t border-[var(--line)] pt-5 text-sm">
                <div className="flex justify-between gap-3"><span>Delivery</span><strong>10 days</strong></div>
                <div className="space-y-1"><span>Focus</span><strong className="block leading-snug">Turn incoming enquiries into organised leads with automated tracking, notifications and follow-ups.</strong></div>
                <div className="flex justify-between gap-3"><span>First step</span><strong>Free audit</strong></div>
              </div>
              <button onClick={() => scrollTo('process')} className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[var(--sage-dark)]">See how it works <ArrowUpRight size={16} /></button>
            </aside>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-y border-[var(--line)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--sage)]">My Focus Areas</p><h2 className="font-display text-3xl font-medium sm:text-5xl">My Services</h2></div>
              <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">Clear, focused automation for the work that happens after someone first contacts your business.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <article key={s.title} className="flex min-h-[260px] flex-col rounded-3xl border border-[var(--line)] bg-[var(--background)] p-6">
                  <div className="flex items-center justify-between"><span className="font-display text-sm text-[var(--muted)]">{s.n}</span><span className="text-[var(--sage)]">{i === 0 ? <Inbox size={22} /> : i === 1 ? <Sparkles size={22} /> : i === 2 ? <Mail size={22} /> : <Workflow size={22} />}</span></div>
                  <h3 className="mt-12 font-display text-[1.45rem] font-medium leading-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECT */}
        <section id="project" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--surface-warm)]">
            <div className="grid lg:grid-cols-[.9fr_1.1fr]">
              <div className="bg-[var(--sage-dark)] p-7 text-white sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6e2d1]">Featured Project</p>
                <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">Glow Med Spa</h2>
                <p className="mt-3 text-lg font-medium">Lead Management Automation</p>
                <p className="mt-4 inline-block rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold">Med Spa / Aesthetic Clinic</p>
                <div className="mt-10 border-t border-white/20 pt-6"><p className="text-xs uppercase tracking-widest text-white/70">Demonstration Project</p><p className="mt-2 leading-relaxed">Built to show capability, not a paid client implementation.</p></div>
                <div className="mt-8"><p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/70">Tools Used</p><div className="flex flex-wrap gap-2">{['Make.com', 'Google Sheets', 'Gmail', 'OpenAI / AI integration'].map(t => <span key={t} className="rounded-full border border-white/25 px-3 py-1 text-xs">{t}</span>)}</div></div>
              </div>
              <div className="p-7 sm:p-10">
                <div><p className="font-bold">The challenge</p><p className="mt-2 leading-relaxed text-[var(--muted)]">Businesses receive enquiries from potential customers every day. Manually tracking leads, checking their details and sending follow-up emails can consume valuable time and cause missed opportunities.</p></div>
                <div className="mt-7"><p className="font-bold">My solution</p><p className="mt-2 leading-relaxed text-[var(--muted)]">I designed an automated lead management workflow using Make.com.</p></div>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div><p className="mb-3 font-bold">Key Features</p><ul className="space-y-2.5 text-sm text-[var(--muted)]">{features.map(f => <li key={f} className="flex gap-2"><Check size={17} className="mt-0.5 shrink-0 text-[var(--sage)]" /><span className="[overflow-wrap:anywhere]">{f}</span></li>)}</ul></div>
                  <div><p className="mb-3 font-bold">Expected Business Benefits</p><ul className="space-y-2.5 text-sm text-[var(--muted)]">{benefits.map(f => <li key={f} className="flex gap-2"><Check size={17} className="mt-0.5 shrink-0 text-[var(--sage)]" /><span className="[overflow-wrap:anywhere]">{f}</span></li>)}</ul></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section id="demo" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto max-w-3xl text-center"><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--sage)]">60-second demo</p><h2 className="font-display text-3xl font-medium leading-tight sm:text-5xl">Watch the Automation in Action</h2><p className="mt-4 leading-relaxed text-[var(--muted)]">See how an enquiry moves from first contact to organised lead, notification and follow-up — without manual chasing.</p></div>
          <div className="mx-auto mt-10 max-w-5xl">
            <a href="https://youtu.be/ZxN9HC6HST8" target="_blank" rel="noopener" aria-label="Play Glow Med Spa — Lead Management Automation Demo on YouTube" className="group relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--sage-dark)] text-center text-white shadow-sm transition hover:opacity-95">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[var(--sage-dark)] transition group-hover:scale-105 sm:h-24 sm:w-24"><Play size={34} fill="currentColor" /></span>
              <span className="mt-5 px-6 font-display text-xl leading-snug sm:text-3xl">Glow Med Spa — Lead Management Automation Demo</span>
              <span className="mt-2 px-6 text-sm text-white/80">60 sec · Click to play on YouTube</span>
            </a>
            <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-[var(--muted)]">Glow Med Spa — Lead Management Automation Demo (60 sec) — From form to Google Sheet to email + follow-up. Nothing missed. No manual work.</p>
            <div className="mt-5 text-center">
              <a href="https://youtu.be/ZxN9HC6HST8" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:opacity-90">Watch on YouTube <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="process" className="border-y border-[var(--line)] bg-[var(--surface-warm)]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--sage)]">Simple by design</p><h2 className="font-display text-3xl font-medium sm:text-5xl">How it works</h2></div><div className="inline-flex items-center gap-2 rounded-full bg-[var(--surface)] px-4 py-2 text-sm font-semibold"><CalendarClock size={18} className="text-[var(--sage)]" /> 10 days delivery</div></div>
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((s, i) => <article key={s.title} className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-7"><span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{s.days}</span><div className="mt-10 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--sage-dark)] text-sm font-bold text-white">{i + 1}</span><h3 className="font-display text-2xl font-medium">{s.title}</h3></div><p className="mt-3 leading-relaxed text-[var(--muted)]">{s.text}</p></article>)}
            </div>
          </div>
        </section>

        {/* PRICING + FAQ */}
        <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--sage)]">Pricing</p>
              <h2 className="font-display text-3xl font-medium sm:text-5xl">Founding Client Introductory Project</h2>
              <div className="mt-7 rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
                <span className="font-display text-5xl font-medium">$200</span>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] line-through">Normally $500 setup + $150/month</p>
                <hr className="my-5 border-[var(--line)]" />
                <p className="text-sm font-bold text-[var(--ink)]">In exchange for</p>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[var(--muted)]">
                  <li className="flex items-start gap-2"><Check size={17} className="mt-0.5 shrink-0 text-[var(--sage)]" /><span>Video testimonial</span></li>
                  <li className="flex items-start gap-2"><Check size={17} className="mt-0.5 shrink-0 text-[var(--sage)]" /><span>Written testimonial</span></li>
                </ul>
                <div className="mt-5 flex items-start gap-2.5 rounded-full bg-[var(--surface-warm)] px-4 py-3.5 text-sm leading-relaxed text-[var(--ink)]">
                  <Clock size={17} className="mt-0.5 shrink-0 text-[var(--sage-dark)]" />
                  <span><strong>1 spot for a founding client.</strong> The pilot keeps the build focused and fully supported.</span>
                </div>
                <button onClick={() => scrollTo('contact')} className="mt-5 w-full rounded-full bg-[var(--sage-dark)] px-5 py-4 text-center font-semibold text-white">Claim the pilot spot</button>
              </div>
            </div>
            <div id="faq">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--sage)]">Questions</p>
              <h2 className="font-display text-3xl font-medium sm:text-4xl">FAQ</h2>
              <div className="mt-7 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {faqs.map((f, i) => <div key={f.q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold">{f.q}<ChevronDown size={18} className={`shrink-0 transition ${openFaq === i ? 'rotate-180' : ''}`} /></button>{openFaq === i && <p className="pb-5 leading-relaxed text-[var(--muted)]">{f.a}</p>}</div>)}
              </div>
              <p className="mt-5 text-sm text-[var(--muted)]">Have a different question? Start with the audit — no obligation.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
          <div className="overflow-hidden rounded-[32px] bg-[var(--sage-dark)] p-7 text-white sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6e2d1]">Contact</p>
                <h2 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">DM me AUDIT — Pick where you reply fastest</h2>
                <p className="mt-4 max-w-xl leading-relaxed text-white/80">Send <strong className="text-white">AUDIT</strong> on the channel you check most. Mention where enquiries arrive and which form or sheet you use.</p>
                <div className="mt-7 flex flex-col gap-3">
                  <a href="https://wa.me/601137820213?text=Hi%20Shuning%2C%20AUDIT" target="_blank" rel="noopener" className="flex w-full items-center gap-4 rounded-2xl bg-white p-5 text-left text-[var(--ink)] shadow-lg ring-2 ring-white/60 transition hover:-translate-y-0.5 hover:shadow-xl sm:p-6">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--sage-dark)] text-white"><MessageCircle size={26} /></span>
                    <span className="min-w-0 flex-1"><span className="block font-display text-xl font-semibold leading-snug [overflow-wrap:anywhere] sm:text-2xl">WhatsApp</span><span className="mt-0.5 block text-sm text-[var(--muted)] [overflow-wrap:anywhere]">Fastest reply</span></span>
                    <ArrowUpRight size={22} className="shrink-0 text-[var(--sage-dark)]" />
                  </a>
                  <a href="https://www.instagram.com/shuning_ma" target="_blank" rel="noopener" className="flex w-full items-center gap-4 rounded-2xl bg-white p-4 text-left text-[var(--ink)] transition hover:-translate-y-0.5 hover:shadow-lg sm:p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--sage-dark)] text-white"><Instagram size={22} /></span>
                    <span className="min-w-0 flex-1"><span className="block font-display text-lg font-semibold leading-snug [overflow-wrap:anywhere] sm:text-xl">Instagram DM</span><span className="mt-0.5 block text-sm text-[var(--muted)] [overflow-wrap:anywhere]">Tap Message, then send AUDIT</span></span>
                    <ArrowUpRight size={20} className="shrink-0 text-[var(--sage-dark)]" />
                  </a>
                  <a href="https://www.facebook.com/ma.shuning" target="_blank" rel="noopener" className="flex w-full items-center gap-4 rounded-2xl bg-white p-4 text-left text-[var(--ink)] transition hover:-translate-y-0.5 hover:shadow-lg sm:p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--sage-dark)] text-white"><Facebook size={22} /></span>
                    <span className="min-w-0 flex-1"><span className="block font-display text-lg font-semibold leading-snug [overflow-wrap:anywhere] sm:text-xl">Facebook Messenger</span><span className="mt-0.5 block text-sm text-[var(--muted)] [overflow-wrap:anywhere]">Tap Message, then send AUDIT</span></span>
                    <ArrowUpRight size={20} className="shrink-0 text-[var(--sage-dark)]" />
                  </a>
                  <a href="https://www.linkedin.com/in/ma-shu-ning-2a8735215" target="_blank" rel="noopener" className="flex w-full items-center gap-4 rounded-2xl bg-white p-4 text-left text-[var(--ink)] transition hover:-translate-y-0.5 hover:shadow-lg sm:p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--sage-dark)] text-white"><Linkedin size={22} /></span>
                    <span className="min-w-0 flex-1"><span className="block font-display text-lg font-semibold leading-snug [overflow-wrap:anywhere] sm:text-xl">LinkedIn</span><span className="mt-0.5 block text-sm text-[var(--muted)] [overflow-wrap:anywhere]">Pharmacist | Clinic Automation</span></span>
                    <ArrowUpRight size={20} className="shrink-0 text-[var(--sage-dark)]" />
                  </a>
                </div>
              </div>
              <div className="rounded-3xl bg-white/10 p-6"><p className="font-display text-2xl">Your free audit covers</p><ul className="mt-4 space-y-3 text-sm text-white/85">{['How enquiries arrive today', 'Where follow-ups slow down', 'What to automate first'].map(x => <li key={x} className="flex gap-2"><Check size={17} className="mt-0.5 shrink-0" />{x}</li>)}</ul><button onClick={() => scrollTo('process')} className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[var(--sage-dark)]">Start with the 10-day process <ArrowRight size={16} /></button></div>
            </div>
          </div>
          <footer className="mt-8 flex flex-col gap-2 text-center text-xs text-[var(--muted)] sm:flex-row sm:justify-between sm:text-left"><span>© Shuning Ma — AI Automation for Clinics & Small Businesses</span><span>Based in Malaysia · Working with international clients online</span></footer>
        </section>
      </main>
    </div>
  );
}
