import { PageHero, Reveal } from "@/components/site/PageShell";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import workshop from "@/assets/workshop.jpg";
import { Award, Users, Wrench, ShieldCheck } from "lucide-react";

({
  head: () => ({
    meta: [
      { title: "About SVR Electronics — Master TV Technicians Since 2010" },
      { name: "description", content: "Meet the people behind SVR Electronics — 15+ years of repairing, supplying and selling premium televisions across Sri Lanka." },
      { property: "og:title", content: "About SVR Electronics" },
      { property: "og:description", content: "15+ years of premium TV repair, parts and sales." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { icon: Award, title: "Mastery", desc: "Senior technicians with 10+ years on panels, boards and backlights." },
  { icon: ShieldCheck, title: "Trust", desc: "Transparent quotes, genuine parts and written workmanship warranty." },
  { icon: Users, title: "Care", desc: "Pickup, updates, and a real human who answers when you call." },
  { icon: Wrench, title: "Precision", desc: "ESD-safe workshop, calibrated tools, manufacturer service guides." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Engineered for picture-perfect peace of mind." subtitle="SVR Electronics has been the quiet name behind reliable televisions in thousands of homes and businesses across Sri Lanka since 2010." />
      <section className="container-x py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden glass-strong">
              <img src={workshop} alt="" loading="lazy" className="w-full h-[28rem] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">SVR began as a single workbench in Colombo with one belief — that fixing a television well should feel as premium as buying one new. Fifteen years later we operate a dedicated 3,000 sq ft workshop, hold OEM-grade inventory for every major brand, and partner with leading manufacturers as an authorised service partner.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">Today we serve homes, hotels, offices and showrooms — but our standard hasn't changed: do the work properly, charge honestly, and explain everything.</p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[["15+", "Years"], ["25K+", "TVs serviced"], ["98%", "Satisfaction"]].map(([v, l]) => (
                <div key={l} className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-gradient-ember">
                    {v.includes("+") ? <><AnimatedCounter value={parseInt(v)} />+</> : v.includes("%") ? <><AnimatedCounter value={parseInt(v)} suffix="%" /></> : v}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16">
        <Reveal><h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">What we stand for.</h2></Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] text-[color:var(--primary-foreground)] glow-ember"><v.icon className="size-5" /></div>
                <h3 className="mt-4 font-semibold text-lg">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
export default About;