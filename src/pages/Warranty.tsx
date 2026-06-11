import { PageHero, Reveal } from "@/components/site/PageShell";
import { ShieldCheck, CheckCircle2, XCircle } from "lucide-react";

({
  head: () => ({
    meta: [
      { title: "Warranty Information | SVR Electronics" },
      { name: "description", content: "Our 30-day workmanship warranty terms, what's covered, and how to claim." },
    ],
    links: [{ rel: "canonical", href: "/warranty" }],
  }),
  component: Warranty,
});

const COV = ["Workmanship on the specific repair performed", "Replacement parts supplied by SVR Electronics", "Re-diagnosis at no charge", "Free re-pickup if the same fault recurs"];
const NOT = ["Unrelated faults that develop later", "Damage from power surges or accidents", "Physical impact or liquid damage", "Repairs performed by third parties"];

function Warranty() {
  return (
    <>
      <PageHero eyebrow="Warranty" title="30-day workmanship warranty, in plain English." subtitle="No fine print games — here's exactly what we cover and what we don't." />
      <section className="container-x py-12 grid md:grid-cols-2 gap-6 max-w-5xl">
        <Reveal>
          <div className="glass rounded-2xl p-7 h-full">
            <div className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] text-[color:var(--primary-foreground)] glow-ember"><ShieldCheck className="size-5" /></div>
            <h2 className="mt-4 text-xl font-semibold">What's covered</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {COV.map(c => <li key={c} className="flex gap-2"><CheckCircle2 className="size-4 text-[color:var(--ember)] mt-0.5 shrink-0" />{c}</li>)}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-7 h-full">
            <h2 className="text-xl font-semibold mt-[3.75rem]">What's not covered</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {NOT.map(c => <li key={c} className="flex gap-2"><XCircle className="size-4 text-destructive mt-0.5 shrink-0" />{c}</li>)}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="md:col-span-2 glass-strong rounded-2xl p-7">
            <h2 className="text-xl font-semibold">How to claim</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Call us with your invoice number. If the issue qualifies, we will re-collect the unit at no charge, re-diagnose and re-repair under warranty. Spare parts retain their original manufacturer warranty separately.</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
export default Warranty;