import { Brain, Share2, ShoppingBag, Smartphone, Database } from "lucide-react";

export const icons = { brain: Brain, share: Share2, phone: Smartphone, shop: ShoppingBag, data: Database };

export function Mock({ kind }: { kind: keyof typeof icons }) {
  if (kind === "brain") {
    const bars = [38, 62, 48, 80, 70, 92, 58];
    return (
      <div className="rounded-2xl bg-card p-5 text-card-foreground shadow-card md:rotate-2">
        <div className="mb-4 flex items-center justify-between"><b>Loyalty dashboard</b><span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs text-accent">Power BI</span></div>
        <div className="grid grid-cols-3 gap-2 text-center">{[["Source", "SQL"], ["Model", "Sklearn"], ["Output", "BI"]].map(([a, b]) => <div key={a} className="rounded-xl bg-muted p-3"><div className="text-lg font-bold">{b}</div><div className="text-xs text-muted-foreground">{a}</div></div>)}</div>
        <div className="mt-4 flex h-32 items-end gap-2">{bars.map((h, i) => <i key={i} className="flex-1 rounded-t-md bg-accent" style={{ height: `${h}%`, opacity: 0.4 + i * 0.08 }} />)}</div>
      </div>
    );
  }
  if (kind === "phone") {
    return (
      <div className="mx-auto h-[340px] w-[180px] rounded-[32px] border-[6px] border-foreground bg-card p-3 text-card-foreground shadow-card md:-rotate-3">
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-muted" />
        <b className="text-sm">Notifications</b>
        {[1, 2, 3, 4].map((n) => <div key={n} className="mt-2 flex items-center gap-2 rounded-xl bg-muted p-2"><span className="h-6 w-6 rounded-full bg-accent" /><span className="h-2 flex-1 rounded bg-input" /></div>)}
      </div>
    );
  }
  return (
    <div className="rounded-2xl bg-card p-5 text-card-foreground shadow-card md:-rotate-2">
      <div className="mb-4 flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-destructive" /><i className="h-2.5 w-2.5 rounded-full bg-chart-4" /><i className="h-2.5 w-2.5 rounded-full bg-success" /></div>
      <b>{kind === "shop" ? "Shop · Products" : "Scheduled posts"}</b>
      <div className="mt-4 grid grid-cols-3 gap-2">{[1, 2, 3, 4, 5, 6].map((n) => <div key={n} className="aspect-square rounded-lg bg-muted p-2"><span className="block h-1/2 rounded bg-accent-soft" /><span className="mt-2 block h-1.5 rounded bg-input" /></div>)}</div>
    </div>
  );
}

