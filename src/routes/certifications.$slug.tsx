import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Award, BadgeCheck, Check, ImageIcon, Rocket } from "lucide-react";
import { certifications, certSlug, certDefaults } from "@/lib/portfolio-data";
import { Reveal } from "@/components/portfolio/reveal";

export const Route = createFileRoute("/certifications/$slug")({
  loader: ({ params }) => {
    const cert = certifications.find((c) => certSlug(c) === params.slug);
    if (!cert) throw notFound();
    return { cert };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.cert.t} — Certification · Rahma Fakhfekh` : "Certification · Rahma Fakhfekh";
    const d = loaderData ? `${loaderData.cert.t}, issued by ${loaderData.cert.o}. Details, prerequisites and career use.` : "Certification earned by Rahma Fakhfekh.";
    return { meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary" }] };
  },
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background text-center"><div><h1 className="text-6xl font-bold">404</h1><p className="mt-3 text-muted-foreground">This certification doesn't exist.</p><Link to="/" className="mt-6 inline-block rounded-full bg-primary px-5 py-3 text-primary-foreground">Back home</Link></div></div>
  ),
  component: CertPage,
});

function CertPage() {
  const { cert: c } = Route.useLoaderData();
  const def = certDefaults[c.cat];
  const requires = c.requires ?? def?.requires ?? [];
  const future = c.future ?? def?.future ?? "";
  const idx = certifications.findIndex((x) => x.t === c.t);
  const next = certifications[(idx + 1) % certifications.length]!;
  const label = "mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground";
  const box = "rounded-[var(--radius)] border border-border bg-card p-7 shadow-card";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] w-[min(1100px,100%-48px)] items-center justify-between">
          <Link to="/" className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"><ArrowLeft size={15} className="transition group-hover:-translate-x-1" />Back to portfolio</Link>
          <span className="text-sm text-muted-foreground">Certification · {String(idx + 1).padStart(2, "0")}/{String(certifications.length).padStart(2, "0")}</span>
        </div>
      </header>

      <main className="mx-auto w-[min(1100px,100%-48px)] py-16">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground"><Award size={26} /></span>
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{c.cat}</span>
          </div>
          <h1 className="mt-6 max-w-[860px] text-4xl font-bold leading-tight md:text-5xl">{c.t}</h1>
          <p className="mt-4 flex items-center gap-2 text-muted-foreground"><BadgeCheck size={18} className="text-accent" />Issued by {c.o}{c.date ? ` · ${c.date}` : ""}{c.expires ? ` · expires ${c.expires}` : ""}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className={box}>
              <p className={label}>Certificate</p>
              {c.image ? (
                <img src={c.image} alt={`${c.t} certificate`} className="w-full rounded-xl border border-border" />
              ) : (
                <div className="grid aspect-[4/3] place-items-center rounded-xl border border-dashed border-border bg-accent-soft text-center">
                  <div className="px-6"><ImageIcon className="mx-auto text-accent" size={32} /><p className="mt-3 font-semibold">{c.t}</p><p className="mt-1 text-sm text-muted-foreground">{c.o}{c.date ? ` · ${c.date}` : ""}</p></div>
                </div>
              )}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className={`${box} h-full`}>
              <p className={label}>Credential</p>
              <dl className="space-y-3 text-sm">
                <div><dt className="text-muted-foreground">Issuer</dt><dd className="font-medium">{c.o}</dd></div>
                {c.date && <div><dt className="text-muted-foreground">Issued</dt><dd className="font-medium">{c.date}</dd></div>}
                {c.id && <div><dt className="text-muted-foreground">Credential ID</dt><dd className="break-all font-medium">{c.id}</dd></div>}
              </dl>
              {c.skills && c.skills.length > 0 && <div className="mt-5 flex flex-wrap gap-1.5">{c.skills.map((k) => <span key={k} className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs">{k}</span>)}</div>}
              {c.url ? (
                <a href={c.url} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Show credential <ArrowUpRight size={15} /></a>
              ) : (
                <p className="mt-6 text-sm text-muted-foreground">Verification link available on request.</p>
              )}
            </div>
          </Reveal>
        </div>

        {c.desc && <Reveal><section className="mt-12"><p className={label}>What it covers</p><p className="max-w-[820px] text-lg leading-relaxed">{c.desc}</p></section></Reveal>}

        {requires.length > 0 && (
          <Reveal><section className="mt-12"><p className={label}>Prerequisites</p>
            <ul className="grid gap-3 sm:grid-cols-2">{requires.map((r) => <li key={r} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"><Check size={16} className="text-accent" />{r}</li>)}</ul>
          </section></Reveal>
        )}

        {future && (
          <Reveal><section className="mt-12 rounded-[var(--radius)] border border-accent bg-accent-soft p-8">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em]"><Rocket size={15} className="text-accent" />Future endeavours</p>
            <p className="max-w-[820px] text-lg leading-relaxed">{future}</p>
          </section></Reveal>
        )}

        <Link to="/certifications/$slug" params={{ slug: certSlug(next) }} className="group mt-16 flex items-center justify-between rounded-[var(--radius)] border border-border bg-card p-7 transition hover:border-accent">
          <div><p className="text-xs uppercase tracking-[0.08em] text-muted-foreground">Next certification</p><p className="mt-1 text-xl font-semibold">{next.t}</p></div>
          <ArrowRight className="transition group-hover:translate-x-1" />
        </Link>
      </main>
    </div>
  );
}
