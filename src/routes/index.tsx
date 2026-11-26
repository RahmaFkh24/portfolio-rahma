import { createFileRoute, Link } from "@tanstack/react-router";
import { Mock, icons } from "@/components/portfolio/mock";
import { Reveal, CountUp } from "@/components/portfolio/reveal";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Award, BadgeCheck, Brain, Briefcase, Download, Github, Languages, Linkedin, Copy, FileText, GraduationCap, Mail, MapPin, Moon, Phone, Sun } from "lucide-react";
import { githubUser, profile, projects, experience, education, skillGroups, languages, certifications, certSlug, marquee, glance } from "@/lib/portfolio-data";

const cvUrl = `${import.meta.env.BASE_URL}Fakhfekh_Rahma-AIEngineer.pdf`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahma Fakhfekh — Junior AI Engineer Portfolio" },
      { name: "description", content: "Rahma Fakhfekh — junior AI engineer: machine learning, predictive analytics and full-stack software projects." },
      { property: "og:title", content: "Rahma Fakhfekh — Junior AI Engineer" },
      { property: "og:description", content: "Machine learning, predictive analytics and full-stack software projects by Rahma Fakhfekh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Tab = "projects" | "skills" | "experience" | "certifications";

function Pill({ children, href }: { children: ReactNode; href?: string }) {
  const cls = "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm transition hover:border-accent";
  return href ? <a href={href} target="_blank" rel="noopener" className={cls}>{children}</a> : <span className={cls}>{children}</span>;
}

function Index() {
  const [dark, setDark] = useState(false);
  const [tab, setTab] = useState<Tab>("projects");
  const [filter, setFilter] = useState("All");
  const [time, setTime] = useState("--:--");
  const [toast, setToast] = useState("");

  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  useEffect(() => {
    const t = () => setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Africa/Tunis", hour: "2-digit", minute: "2-digit" }));
    t(); const id = setInterval(t, 30000); return () => clearInterval(id);
  }, []);

  const copy = (v: string) => { void navigator.clipboard.writeText(v); setToast("Copied!"); setTimeout(() => setToast(""), 1600); };
  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.cat)))];
  const shown = projects.filter((p) => filter === "All" || p.cat === filter);
  const goViews = () => document.getElementById("views")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] w-[min(1240px,100%-48px)] items-center justify-between gap-4">
          <a href="#top" className="group flex min-w-0 items-center gap-3 font-semibold">
            <span className="grid h-9 w-9 flex-none place-items-center rounded-[11px] bg-accent text-sm font-extrabold tracking-tighter text-accent-foreground transition group-hover:-rotate-12">RF.</span>
            <span className="truncate">{profile.name}<small className="block text-xs font-normal text-muted-foreground">{profile.short}</small></span>
          </a>
          <div className="flex items-center gap-2.5">
            <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex"><i className="pulse-dot h-[7px] w-[7px] rounded-full bg-success" />Tunis {time}</div>
            <a href={profile.links[0]!.u} target="_blank" rel="noopener" aria-label="LinkedIn" className="hidden h-10 w-10 place-items-center rounded-full border border-border bg-card transition hover:border-accent hover:text-accent md:grid"><Linkedin size={17} /></a>
            <a href={profile.links[1]!.u} target="_blank" rel="noopener" aria-label="GitHub" className="hidden h-10 w-10 place-items-center rounded-full border border-border bg-card transition hover:border-accent hover:text-accent md:grid"><Github size={17} /></a>
            <button onClick={() => setDark(!dark)} aria-label="Toggle theme" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition hover:rotate-12">{dark ? <Moon size={18} /> : <Sun size={18} />}</button>
            <a href="#contact" className="hidden items-center gap-2.5 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-accent sm:inline-flex">Contact me <ArrowRight size={15} /></a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid w-[min(1240px,100%-48px)] items-center gap-12 py-16 md:grid-cols-[1.1fr_1fr] md:py-20">
          <div>
            <span className="fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground"><span className="h-2 w-2 rounded-full bg-success" /><b className="font-medium text-foreground">Available</b> for internships & AI projects</span>
            <h1 className="mt-7 text-[clamp(56px,9vw,112px)] font-bold leading-[0.92] tracking-[-0.055em]">
              <span className="block overflow-hidden"><span className="rise block">Rahma</span></span>
              <span className="block overflow-hidden pb-2"><span className="rise block font-medium italic text-accent" style={{ animationDelay: ".12s" }}>Fakhfekh</span></span>
            </h1>
            <p className="fade-up mt-5 text-xl font-medium" style={{ animationDelay: ".25s" }}>Junior AI Engineer <span className="text-accent">|</span> Machine Learning <span className="text-accent">|</span> Software Engineering</p>
            <p className="fade-up mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground" style={{ animationDelay: ".35s" }}>{profile.lead[0]}<b className="font-semibold text-foreground">{profile.lead[1]}</b>{profile.lead[2]}</p>
            <div className="fade-up mt-6 flex flex-wrap gap-2" style={{ animationDelay: ".45s" }}>
              <Pill href={`tel:${profile.phoneRaw}`}><Phone size={15} className="text-accent" />{profile.phone}</Pill>
              <Pill href={`mailto:${profile.email}`}><Mail size={15} className="text-accent" />{profile.email}</Pill>
              <Pill><MapPin size={15} className="text-accent" />{profile.city}</Pill>
            </div>
            <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: ".55s" }}>
              <button onClick={goViews} className="inline-flex items-center gap-2.5 rounded-full bg-accent px-5 py-3 font-medium text-accent-foreground transition hover:opacity-90">See my projects <ArrowDown size={16} /></button>
              <a href={cvUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2.5 rounded-full border border-input px-5 py-3 font-medium transition hover:border-foreground"><FileText size={16} />View my CV <ArrowUpRight size={15} /></a>
              <a href={cvUrl} download="Rahma_Fakhfekh_CV.pdf" aria-label="Download CV" className="grid h-[50px] w-[50px] place-items-center rounded-full border border-input transition hover:border-foreground"><Download size={17} /></a>
            </div>
          </div>
          <Fan />
        </section>

        <div className="overflow-hidden border-y border-border py-6" aria-hidden>
          <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-12 text-[clamp(24px,3vw,30px)] font-semibold tracking-tight"><span className="text-accent">✦</span>{m}</span>
            ))}
          </div>
        </div>

        <section className="mx-auto mt-16 grid w-[min(1240px,100%-48px)] grid-cols-2 gap-px overflow-hidden rounded-[var(--radius)] border border-border bg-border md:grid-cols-4">
          {glance.map((g, i) => (
            <Reveal key={g.l} delay={i * 90} className="h-full"><div className="h-full bg-card p-7"><div className="text-[clamp(36px,4vw,52px)] font-bold tracking-[-0.04em] text-accent"><CountUp to={g.n} />{g.s}</div><div className="mt-1 font-medium">{g.l}</div><div className="text-sm text-muted-foreground">{g.d}</div></div></Reveal>
          ))}
        </section>

        <Reveal className="mx-auto mt-6 w-[min(1240px,100%-48px)]">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-[var(--radius)] bg-accent-soft px-7 py-5 text-sm">
            <span className="font-semibold text-accent">Open to</span>
            <span className="flex items-center gap-2"><Briefcase size={15} className="text-accent" />AI / ML & Data Science internships · Junior roles</span>
            <span className="flex items-center gap-2"><MapPin size={15} className="text-accent" />Tunisia · Remote · Relocation</span>
            <span className="flex items-center gap-2"><Languages size={15} className="text-accent" />Arabic · French · English · German</span>
          </div>
        </Reveal>

        <div className="sticky top-[84px] z-40 mt-10 flex justify-center">
          <nav className="flex gap-0.5 rounded-full border border-border bg-card p-1 shadow-card">
            {(["projects", "experience", "skills", "certifications"] as Tab[]).map((t) => (
              <button key={t} onClick={() => { setTab(t); goViews(); }} className={`rounded-full px-3 py-2 text-[13px] sm:px-4 sm:text-sm font-medium capitalize transition ${tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{t}</button>
            ))}
          </nav>
        </div>

        <div id="views" className="mx-auto w-[min(1240px,100%-48px)] scroll-mt-32 py-16">
          {tab === "projects" && (
            <section key="p" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <SecHead title={<>Selected <em className="font-medium">projects</em></>} text="Machine learning, data analytics, web and mobile — built between 2023 and 2026 during internships and studies." />
              <div className="mb-10 flex flex-wrap gap-2">
                {cats.map((c) => (
                  <button key={c} onClick={() => setFilter(c)} className={`rounded-full border px-4 py-2 text-sm transition ${filter === c ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground"}`}>
                    {c}<sup className="ml-1 text-[10px] opacity-60">{c === "All" ? projects.length : projects.filter((p) => p.cat === c).length}</sup>
                  </button>
                ))}
              </div>
              <div className="grid gap-14">
                {shown.map((p) => {
                  const I = icons[p.icon]; return (
                    <Reveal key={p.title}><Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
                      <div className="grid-bg relative grid min-h-[420px] items-center gap-8 overflow-hidden rounded-[var(--radius)] p-8 text-accent-foreground transition-transform duration-700 group-hover:scale-[0.985] md:grid-cols-2 md:p-14" style={{ background: p.bg }}>
                        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">{p.tags.map((t) => <span key={t} className="rounded-full bg-card/90 px-2.5 py-1 text-xs text-card-foreground">{t}</span>)}</div>
                        <div className="mt-8 md:mt-0">
                          <div className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.15em] opacity-90"><span className="grid h-7 w-7 place-items-center rounded-md bg-card/20"><I size={16} /></span>{p.cat}</div>
                          <h3 className="mt-5 text-[clamp(40px,5.5vw,68px)] font-bold leading-[0.95] tracking-[-0.045em]">{p.title}</h3>
                          <p className="mt-5 max-w-sm text-lg opacity-80">{p.tagline}</p>
                        </div>
                        <div className="transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.03]"><Mock kind={p.icon} /></div>
                        <span className="absolute bottom-6 right-6 inline-flex translate-y-3 items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-card-foreground opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">Read the case study <ArrowUpRight size={15} /></span>
                      </div>
                      <div className="mt-4 flex items-start justify-between gap-6 px-1">
                        <div><h4 className="text-xl font-medium transition-colors group-hover:text-accent">{p.title} <span className="text-muted-foreground">· {p.org}</span></h4><p className="mt-1 max-w-3xl text-muted-foreground">{p.desc}</p></div>
                        <span className="text-sm text-muted-foreground">{p.year}</span>
                      </div>
                    </Link></Reveal>
                  );
                })}
              </div>
              <GithubLive />
            </section>
          )}

          {tab === "skills" && (
            <section key="s" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <SecHead title={<>Technical <em className="font-medium">toolkit</em></>} text="From data pipelines and models to usable software products." />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skillGroups.map((g, i) => (
                  <Reveal key={g.title} delay={i * 80}><div className="h-full rounded-[var(--radius)] border border-border bg-card p-7 shadow-card transition hover:-translate-y-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">{g.title}</span>
                    <div className="mt-4 flex flex-wrap gap-2">{g.items.map((s) => <span key={s} className="rounded-full border border-border px-3 py-1.5 text-sm transition hover:border-accent hover:bg-accent-soft hover:text-accent">{s}</span>)}</div>
                  </div></Reveal>
                ))}
              </div>
            </section>
          )}

          {tab === "certifications" && (
            <section key="c" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <SecHead title={<>Certifications <em className="font-medium">& training</em></>} text="Continuous learning across machine learning, generative AI, Python and cybersecurity." />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.map((c, i) => (
                  <Reveal key={c.t} delay={i * 80}>
                    <Link to="/certifications/$slug" params={{ slug: certSlug(c) }} className="group relative block h-full overflow-hidden rounded-[var(--radius)] border border-border bg-card p-7 shadow-card transition duration-500 hover:-translate-y-1.5 hover:border-accent">
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-soft transition-transform duration-700 group-hover:scale-150" />
                      {(c.image || c.document) && (
                        <div className="relative mb-6 grid aspect-[4/3] place-items-center overflow-hidden rounded-xl border border-border bg-background">
                          {c.image ? (
                            <img src={c.image} alt={`${c.t} certificate`} loading="lazy" className="h-full w-full object-contain" />
                          ) : (
                            <div className="text-center text-muted-foreground"><FileText className="mx-auto text-accent" size={32} /><p className="mt-2 text-sm font-medium">PDF certificate</p></div>
                          )}
                        </div>
                      )}
                      <div className="relative flex items-center justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground"><Award size={22} /></span>
                        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{c.cat}</span>
                      </div>
                      <h3 className="relative mt-6 text-lg font-semibold leading-snug">{c.t}</h3>
                      <p className="relative mt-2 flex items-center gap-1.5 text-sm text-muted-foreground"><BadgeCheck size={15} className="text-accent" />Issued by {c.o}{c.date ? ` · ${c.date}` : ""}{c.expires ? ` (expires ${c.expires})` : ""}</p>
                      {c.desc && <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>}
                      {c.id && <p className="relative mt-1 text-xs text-muted-foreground">Credential ID: <span className="break-all">{c.id}</span></p>}
                      {c.skills && c.skills.length > 0 && <div className="relative mt-4 flex flex-wrap gap-1.5">{c.skills.map((k) => <span key={k} className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs">{k}</span>)}</div>}
                      <span className="relative mt-4 inline-flex text-sm font-medium text-accent group-hover:underline">View details →</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          {tab === "experience" && (
            <section key="e" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <SecHead title="Experience" text="Data science, full-stack and mobile internships — since 2023." />
              <div className="mb-14 max-w-[860px] space-y-3 text-lg text-muted-foreground">
                <span className="text-xs font-semibold uppercase tracking-[0.08em]">About</span>
                <p>Software engineering student specializing in applied machine learning, predictive analytics and data-driven applications.</p>
                <p>I'm interested in building <b className="font-semibold text-foreground">reliable AI solutions</b> that connect model development, data pipelines and usable software products.</p>
              </div>
              <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
                <div>
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">Professional path</div>
                  <div className="relative border-t border-border pl-8">
                    <div className="absolute bottom-0 left-[7px] top-0 w-[3px] rounded bg-border"><i className="grow-y block h-1/3 rounded bg-accent" /></div>
                    {experience.map((e, i) => (
                      <Reveal key={e.title + e.date} delay={i * 90}><details className="group relative border-b border-border py-6">
                        <summary className="flex cursor-pointer list-none items-center gap-6">
                          <span className={`absolute -left-[31px] h-4 w-4 rounded-full border-2 ${i < 2 ? "border-accent bg-accent" : "border-input bg-background"}`} />
                          <span className={`w-20 flex-none text-sm font-semibold ${i < 2 ? "text-accent" : "text-muted-foreground"}`}>{e.year}</span>
                          <span className="flex-1"><b className="block text-lg font-semibold">{e.title}</b><span className="text-muted-foreground">{e.org} · {e.date}</span></span>
                          <span className="grid h-10 w-10 flex-none place-items-center rounded-full border border-border transition group-open:rotate-90"><ArrowRight size={15} /></span>
                        </summary>
                        <ul className="mt-4 list-disc space-y-1.5 pl-[104px] text-muted-foreground">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                      </details></Reveal>
                    ))}
                  </div>
                </div>
                <aside className="space-y-12">
                  <Block title="Education">
                    {education.map((e) => (
                      <div key={e.t} className="mb-5 flex gap-4"><span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent-soft text-accent"><GraduationCap size={18} /></span><div><b className="font-semibold">{e.t}</b><span className="block text-muted-foreground">{e.s}</span><span className="text-sm text-accent">{e.y}</span></div></div>
                    ))}
                  </Block>
                  <Block title="Languages">
                    {languages.map((l) => (
                      <div key={l.n} className="mb-3 grid grid-cols-[100px_1fr_60px] items-center gap-4"><span>{l.n}</span><span className="h-1.5 rounded-full bg-muted"><Reveal className="h-full"><i className="grow-x block h-full rounded-full bg-accent" style={{ width: `${l.v}%` }} /></Reveal></span><span className="text-right text-xs text-muted-foreground">{l.l}</span></div>
                    ))}
                  </Block>
                  <Block title="Interests"><div className="flex flex-wrap gap-2">{profile.interests.map((s) => <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm">{s}</span>)}</div></Block>
                  <a href={cvUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2.5 rounded-full border border-input px-5 py-3 font-medium transition hover:border-foreground">View my full CV <ArrowUpRight size={15} /></a>
                </aside>
              </div>
            </section>
          )}
        </div>
      </main>

      <Contact copy={copy} />
      <footer className="border-t border-border py-7 text-sm text-muted-foreground">
        <div className="mx-auto flex w-[min(1240px,100%-48px)] flex-wrap justify-between gap-3"><span>© 2026 {profile.name} — Junior AI Engineer</span><span>Designed & built in Tunisia</span><a href="#top" className="hover:text-foreground">Back to top ↑</a></div>
      </footer>
      {toast && <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground">{toast}</div>}
    </div>
  );
}

function SecHead({ title, text }: { title: ReactNode; text: string }) {
  return <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6"><h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-none tracking-[-0.045em]">{title}</h2><p className="max-w-md text-muted-foreground">{text}</p></Reveal>;
}
function Block({ title, children }: { title: string; children: ReactNode }) {
  return <Reveal><h5 className="mb-5 border-b border-border pb-4 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">{title}</h5>{children}</Reveal>;
}

function Fan() {
  type Card = { kind: "me" } | { kind: "project"; p: (typeof projects)[number] };
  const deck: Card[] = [{ kind: "me" }, ...projects.map((p) => ({ kind: "project" as const, p }))];
  const [front, setFront] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (d: number) => setFront((f) => (f + d + deck.length) % deck.length);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setFront((f) => (f + 1) % deck.length), 4500);
    return () => clearInterval(id);
  }, [paused, deck.length]);

  return (
    <div className="fade-in-scale mx-auto hidden w-full max-w-[460px] md:block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative h-[440px]">
        {deck.map((c, i) => {
          const pos = (i - front + deck.length) % deck.length;
          const visible = pos < 4;
          const style = {
            transform: pos === 0 ? "rotate(4deg) translateX(30px)" : `rotate(${4 - pos * 7}deg) translateX(${30 - pos * 28}px) scale(${1 - pos * 0.04})`,
            zIndex: deck.length - pos,
            opacity: visible ? 1 : 0,
            background: c.kind === "project" ? c.p.bg : undefined,
          };
          const base = "absolute inset-x-12 inset-y-4 flex flex-col justify-between overflow-hidden rounded-[var(--radius)] p-7 text-accent-foreground shadow-card transition-all duration-700 ease-[cubic-bezier(.2,.7,.1,1)]";
          if (c.kind === "me") {
            return (
              <div key="me" onClick={() => pos !== 0 && setFront(i)} className={`grid-bg ${base} bg-accent ${pos ? "cursor-pointer" : ""}`} style={style}>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.15em]"><span>About me</span><Brain size={20} /></div>
                <div className="font-mono text-sm leading-relaxed opacity-90">
                  <div>&gt;&gt;&gt; rahma.skills</div>
                  <div>["ML", "Data", "Full-stack"]</div>
                  <div className="mt-2 text-lg font-bold">open_to_work = True ✓</div>
                </div>
                <div><div className="text-6xl font-bold tracking-tighter">RF.</div><div className="mt-1 text-sm opacity-80">Junior AI Engineer · {projects.length} projects</div></div>
              </div>
            );
          }
          const I = icons[c.p.icon];
          const inner = (
            <>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.15em]"><span>{c.p.cat}</span><I size={20} /></div>
              <div>
                <div className="text-4xl font-bold leading-[0.95] tracking-[-0.04em]">{c.p.title}</div>
                <p className="mt-3 text-sm opacity-85">{c.p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{c.p.tags.slice(0, 3).map((t) => <span key={t} className="rounded-full bg-card/90 px-2.5 py-1 text-xs text-card-foreground">{t}</span>)}</div>
              </div>
              <div className="flex items-center justify-between text-sm opacity-90"><span>{c.p.org} · {c.p.year}</span><span className="inline-flex items-center gap-1 font-medium">Open <ArrowUpRight size={14} /></span></div>
            </>
          );
          return pos === 0
            ? <Link key={c.p.slug} to="/projects/$slug" params={{ slug: c.p.slug }} className={`${base} hover:-translate-y-1`} style={style}>{inner}</Link>
            : <div key={c.p.slug} onClick={() => setFront(i)} className={`${base} cursor-pointer`} style={style}>{inner}</div>;
        })}
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <button onClick={() => go(-1)} aria-label="Previous card" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition hover:border-accent hover:text-accent"><ArrowLeft size={16} /></button>
        <div className="flex gap-1.5">{deck.map((_, i) => <button key={i} onClick={() => setFront(i)} aria-label={`Card ${i + 1}`} className={`h-2 rounded-full transition-all ${i === front ? "w-6 bg-accent" : "w-2 bg-input"}`} />)}</div>
        <button onClick={() => go(1)} aria-label="Next card" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition hover:border-accent hover:text-accent"><ArrowRight size={16} /></button>
      </div>
    </div>
  );
}

function GithubLive() {
  const { data, isError } = useQuery({
    queryKey: ["github", githubUser],
    queryFn: async () => {
      const r = await fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=pushed`);
      if (!r.ok) throw new Error(`GitHub ${r.status}`);
      return (await r.json()) as { id: number; name: string; html_url: string; description: string | null; language: string | null; pushed_at: string; fork: boolean }[];
    },
    staleTime: 10 * 60 * 1000,
  });
  const repos = (data ?? []).filter((r) => !r.fork && r.name !== githubUser && r.name !== "RahmaFkh").slice(0, 6);
  return (
    <div className="mt-24">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div><span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">Live from GitHub</span><h3 className="mt-2 text-[clamp(30px,4vw,48px)] font-bold tracking-[-0.04em]">Latest <em className="font-medium">repositories</em></h3></div>
        <a href={`https://github.com/${githubUser}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-input px-5 py-3 text-sm font-medium transition hover:border-foreground"><Github size={16} />@{githubUser} <ArrowUpRight size={14} /></a>
      </Reveal>
      {isError && <p className="text-muted-foreground">GitHub is unavailable right now — see all repositories on my profile.</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(data ? repos : Array.from({ length: 6 }, () => null)).map((r, i) => r ? (
          <Reveal key={r.id} delay={i * 70}>
            <a href={r.html_url} target="_blank" rel="noopener" className="group flex h-full flex-col rounded-[var(--radius)] border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-card">
              <div className="flex items-center justify-between"><Github size={18} className="text-muted-foreground" /><ArrowUpRight size={16} className="text-muted-foreground transition group-hover:rotate-45 group-hover:text-accent" /></div>
              <b className="mt-4 break-words font-semibold">{r.name.replace(/[-_]/g, " ")}</b>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">{r.description ?? "No description yet."}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground"><span className="flex items-center gap-1.5">{r.language && <i className="h-2 w-2 rounded-full bg-accent" />}{r.language ?? "—"}</span><span>Updated {new Date(r.pushed_at).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</span></div>
            </a>
          </Reveal>
        ) : <div key={i} className="h-44 animate-pulse rounded-[var(--radius)] bg-muted" />)}
      </div>
    </div>
  );
}

function Contact({ copy }: { copy: (v: string) => void }) {
  const types = ["AI / ML project", "Internship", "Full-time role", "Web / Mobile", "Other"];
  const [type, setType] = useState(types[0]);
  const [err, setErr] = useState("");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim(), mail = String(f.get("mail") ?? "").trim(), msg = String(f.get("msg") ?? "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(mail) || msg.length < 10) { setErr("Please fill in your name, a valid email and a message (10+ characters)."); return; }
    setErr("");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`[${type}] ${name}`)}&body=${encodeURIComponent(`${msg}\n\n— ${name} (${mail})`)}`;
  };
  const input = "w-full rounded-xl border border-background/20 bg-background/5 px-4 py-3 text-background placeholder:text-background/40 outline-none focus:border-accent";
  return (
    <section id="contact" className="bg-foreground pt-24 text-background">
      <div className="mx-auto grid w-[min(1240px,100%-48px)] gap-14 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-background/60">Contact</span>
          <Reveal><h2 className="mt-4 text-[clamp(40px,6vw,68px)] font-bold leading-none tracking-[-0.045em]">Let's build something <em className="font-medium text-accent">intelligent.</em></h2></Reveal>
          <div className="mt-10 divide-y divide-background/15 border-y border-background/15">
            <div className="flex items-center py-4"><a href={`mailto:${profile.email}`} className="flex-1">{profile.email}</a><button onClick={() => copy(profile.email)} className="flex items-center gap-1.5 text-sm text-background/60 hover:text-background"><Copy size={14} />Copy</button></div>
            <div className="flex items-center py-4"><a href={`tel:${profile.phoneRaw}`} className="flex-1">{profile.phone}</a><button onClick={() => copy(profile.phone)} className="flex items-center gap-1.5 text-sm text-background/60 hover:text-background"><Copy size={14} />Copy</button></div>
            {profile.links.map((l) => <a key={l.n} href={l.u} target="_blank" rel="noopener" className="flex justify-between py-4 hover:text-accent"><span>{l.n}</span><small className="text-background/60">{l.h} ↗</small></a>)}
          </div>
        </div>
        <Reveal delay={150}><form onSubmit={submit} noValidate className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-background/70">Your name<input name="name" maxLength={100} placeholder="Full name" className={input} /></label>
            <label className="space-y-2 text-sm text-background/70">Your email<input name="mail" type="email" maxLength={255} placeholder="you@example.com" className={input} /></label>
          </div>
          <div className="space-y-2 text-sm text-background/70">Project type
            <div className="flex flex-wrap gap-2 pt-1">{types.map((t) => <button type="button" key={t} onClick={() => setType(t)} className={`rounded-full border px-4 py-2 transition ${type === t ? "border-accent bg-accent text-accent-foreground" : "border-background/20 text-background"}`}>{t}</button>)}</div>
          </div>
          <label className="block space-y-2 text-sm text-background/70">Your message<textarea name="msg" maxLength={2000} rows={5} placeholder="Tell me about your project, timeline, ideas…" className={input} /></label>
          {err && <p role="alert" className="text-sm text-destructive">{err}</p>}
          <button type="submit" className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground transition hover:opacity-90">Send my message <ArrowRight size={16} /></button>
        </form></Reveal>
      </div>
      <Reveal className="mx-auto mt-20 w-[min(1240px,100%-48px)] overflow-hidden pb-6 text-[clamp(64px,15vw,220px)] font-bold leading-[0.85] tracking-[-0.06em]">Rahma <em className="font-medium text-accent">Fakhfekh</em></Reveal>
    </section>
  );
}
