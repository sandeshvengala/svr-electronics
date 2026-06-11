import { Link } from "react-router-dom";
import { PageHero, Reveal } from "@/components/site/PageShell";
import parts from "@/assets/parts.jpg";
import { ArrowRight } from "lucide-react";

({
  head: () => ({
    meta: [
      { title: "Genuine TV Spare Parts — OEM-grade Stock | SVR Electronics" },
      { name: "description", content: "Authentic spare parts: panels, T-CON boards, power supplies, LED backlight strips, remotes, stands and accessories for every major brand." },
    ],
    links: [{ rel: "canonical", href: "/parts" }],
  }),
  component: Parts,
});

const CATS = [
  { title: "Display Panels", items: ["LCD / LED panels", "OLED panels", "QLED panels", "All screen sizes 24\"–85\""] },
  { title: "Boards", items: ["Mainboard / Motherboard", "T-CON board", "Power supply / SMPS", "Inverter boards"] },
  { title: "Backlight", items: ["LED strips", "LED diodes", "Reflector sheets", "Diffuser plates"] },
  { title: "Accessories", items: ["Original remotes", "Wall mounts", "TV stands", "HDMI & power cables"] },
];

function Parts() {
  return (
    <>
      <PageHero eyebrow="Spare Parts" title="Genuine parts, properly stocked." subtitle="OEM-grade inventory for every major brand — sold individually or installed with full workmanship warranty." />
      <section className="container-x py-12">
        <div className="rounded-3xl overflow-hidden glass-strong">
          <img src={parts} alt="" loading="lazy" className="w-full h-[22rem] md:h-[28rem] object-cover" />
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 h-full">
                <h3 className="font-display font-bold text-lg text-gradient-ember">{c.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {c.items.map((it) => <li key={it} className="flex gap-2"><span className="text-[color:var(--ember)]">•</span>{it}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-14 glass-strong rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Need a specific part?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Tell us your TV model and the fault — we'll confirm availability and pricing within hours.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-glow)] px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] glow-ember">
              Enquire about parts <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
export default Parts;