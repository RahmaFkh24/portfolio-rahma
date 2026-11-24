import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Github } from "lucide-react";
import { projects, projectImages } from "@/lib/portfolio-data";
import { Mock, icons } from "@/components/portfolio/mock";
import { Reveal } from "@/components/portfolio/reveal";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.project.title} — Case study · Rahma Fakhfekh` : "Project · Rahma Fakhfekh";
    const d = loaderData?.project.overview ?? "Project case study by Rahma Fakhfekh.";
    return { meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background text-center"><div><h1 className="text-6xl font-bold">404</h1><p className="mt-3 text-muted-foreground">This project doesn't exist.</p><Link to="/" className="mt-6 inline-block rounded-full bg-primary px-5 py-3 text-primary-foreground">Back home</Link></div></div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const I = icons[p.icon];
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length]!;
  const label = "mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] w-[min(1240px,100%-48px)] items-center justify-between">
          <Link to="/" className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"><ArrowLeft size={15} className="transition group-hover:-translate-x-1" />All projects</Link>
          <span className="text-sm text-muted-foreground">Case study · {String(idx + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}</span>
        </div>
      </header>

      <section className="grid-bg relative overflow-hidden text-accent-foreground" style={{ background: p.bg }}>
        <div className="mx-auto grid w-[min(1240px,100%-48px)] items-center gap-10 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="fade-up flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.15em] opacity-90"><span className="grid h-7 w-7 place-items-center rounded-md bg-card/20"><I size={16} /></span>{p.cat}</div>
            <h1 className="mt-5 overflow-hidden text-[clamp(52px,8vw,104px)] font-bold leading-[0.92] tracking-[-0.05em]"><span className="rise block">{p.title}</span></h1>
            <p className="fade-up mt-6 max-w-md text-xl opacity-85" style={{ animationDelay: ".3s" }}>{p.tagline}</p>
            <div className="fade-up mt-6 flex flex-wrap gap-1.5" style={{ animationDelay: ".45s" }}>{p.tags.map((t) => <span key={t} className="rounded-full bg-card/90 px-3 py-1 text-xs text-card-foreground">{t}</span>)}</div>
            {"repo" in p && p.repo && <a href={p.repo} target="_blank" rel="noopener" className="fade-up mt-8 inline-flex items-center gap-2 rounded-full bg-card px-5 py-3 font-medium text-card-foreground transition hover:-translate-y-0.5" style={{ animationDelay: ".55s" }}><Github size={17} />View code on GitHub <ArrowUpRight size={15} /></a>}
          </div>
          <div className="fade-in-scale"><div className="float"><Mock kind={p.icon} /></div></div>
        </div>
      </section>

      <main className="mx-auto w-[min(1240px,100%-48px)] py-20">
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius)] border border-border bg-border md:grid-cols-4">
          {[["Role", p.role], ["Organisation", p.org], ["Year", p.year], ["Duration", p.duration]].map(([k, v]) => (
            <div key={k} className="bg-card p-6"><div className="text-xs uppercase tracking-[0.08em] text-muted-foreground">{k}</div><div className="mt-2 font-semibold">{v}</div></div>
          ))}
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-[220px_1fr]">
          <aside className="hidden md:block"><nav className="sticky top-28 space-y-2 text-sm text-muted-foreground">
            {["Overview", "Gallery", "Challenge", "Goals", "Process", "Features", "Outcomes", "Learnings"].map((s) => <a key={s} href={`#${s.toLowerCase()}`} className="block transition hover:translate-x-1 hover:text-accent">{s}</a>)}
          </nav></aside>

          <div className="space-y-20">
            <Reveal><section id="overview" className="scroll-mt-28"><h2 className={label}>Overview</h2><p className="text-[clamp(22px,2.6vw,32px)] font-medium leading-snug tracking-tight">{p.overview}</p></section></Reveal>
            <section id="gallery" className="scroll-mt-28"><Reveal><h2 className={label}>Gallery</h2></Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {(projectImages[p.slug] ?? []).length > 0
                  ? projectImages[p.slug]!.map((img, i) => (
                      <Reveal key={img.src} delay={i * 90} className={i === 0 ? "sm:col-span-2" : ""}>
                        <figure className="group overflow-hidden rounded-[var(--radius)] border border-border bg-card">
                          <div className="overflow-hidden"><img src={img.src} alt={img.caption} loading="lazy" className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105" /></div>
                          <figcaption className="p-4 text-sm text-muted-foreground">{img.caption}</figcaption>
                        </figure>
                      </Reveal>
                    ))
                  : ["Main interface", "Workflow", "Results view"].map((c, i) => (
                      <Reveal key={c} delay={i * 90} className={i === 0 ? "sm:col-span-2" : ""}>
                        <figure className="group overflow-hidden rounded-[var(--radius)] border border-border bg-card">
                          <div className="grid-bg grid aspect-video place-items-center overflow-hidden p-6 text-accent-foreground" style={{ background: p.bg }}><div className="w-full max-w-sm transition duration-700 group-hover:scale-105"><Mock kind={p.icon} /></div></div>
                          <figcaption className="p-4 text-sm text-muted-foreground">{c}</figcaption>
                        </figure>
                      </Reveal>
                    ))}
              </div>
            </section>
            <Reveal><section id="challenge" className="scroll-mt-28"><h2 className={label}>The challenge</h2><p className="text-lg leading-relaxed text-muted-foreground">{p.problem}</p></section></Reveal>
            <section id="goals" className="scroll-mt-28"><Reveal><h2 className={label}>Goals</h2></Reveal>
              <div className="grid gap-3 sm:grid-cols-2">{p.goals.map((g, i) => <Reveal key={g} delay={i * 80}><div className="flex h-full gap-3 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-card"><span className="text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>{g}</div></Reveal>)}</div>
            </section>
            <section id="process" className="scroll-mt-28"><Reveal><h2 className={label}>Process</h2></Reveal>
              <ol className="relative border-l-2 border-border pl-8">{p.process.map((s, i) => (
                <Reveal key={s.t} delay={i * 70}><li className="relative pb-10"><span className="absolute -left-[45px] grid h-7 w-7 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{i + 1}</span><h3 className="text-xl font-semibold">{s.t}</h3><p className="mt-1.5 text-muted-foreground">{s.d}</p></li></Reveal>
              ))}</ol>
            </section>
            <section id="features" className="scroll-mt-28"><Reveal><h2 className={label}>Key features</h2></Reveal>
              <div className="grid gap-3 sm:grid-cols-2">{p.features.map((f, i) => <Reveal key={f} delay={i * 80}><div className="flex items-center gap-3 rounded-2xl bg-accent-soft p-5 font-medium"><span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-accent text-accent-foreground"><Check size={14} /></span>{f}</div></Reveal>)}</div>
            </section>
            <section id="outcomes" className="scroll-mt-28"><Reveal><h2 className={label}>Outcomes</h2></Reveal>
              <div className="space-y-3">{p.outcomes.map((o, i) => <Reveal key={o} delay={i * 80}><p className="border-b border-border pb-3 text-lg">→ {o}</p></Reveal>)}</div>
            </section>
            <Reveal><section id="learnings" className="scroll-mt-28 rounded-[var(--radius)] bg-foreground p-10 text-background"><h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-background/60">What I learned</h2><p className="text-2xl font-medium italic leading-snug">"{p.learnings}"</p></section></Reveal>
            <Reveal><div><h2 className={label}>Tech stack</h2><div className="flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded-full border border-border px-4 py-2">{t}</span>)}</div></div></Reveal>
          </div>
        </div>
      </main>

      <Link to="/projects/$slug" params={{ slug: next.slug }} className="group block overflow-hidden text-accent-foreground" style={{ background: next.bg }}>
        <div className="mx-auto flex w-[min(1240px,100%-48px)] items-center justify-between gap-6 py-16">
          <div><span className="text-xs font-semibold uppercase tracking-[0.15em] opacity-70">Next project</span><div className="mt-2 text-[clamp(40px,6vw,80px)] font-bold tracking-[-0.045em] transition group-hover:translate-x-3">{next.title}</div></div>
          <span className="grid h-16 w-16 place-items-center rounded-full bg-card text-card-foreground transition group-hover:rotate-[-45deg]"><ArrowRight /></span>
        </div>
      </Link>
    </div>
  );
}
