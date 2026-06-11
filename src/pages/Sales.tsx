import { Link } from "react-router-dom";
import { PageHero, Reveal } from "@/components/site/PageShell";
import hero from "@/assets/hero-tv.jpg";
import { ShieldCheck, Truck, Wrench, ArrowRight } from "lucide-react";

({
  head: () => ({
    meta: [
      { title: "New TVs for Sale — OLED, QLED & 4K | SVR Electronics" },
      { name: "description", content: "Buy the latest televisions from Samsung, Sony, LG and more. Free wall mounting, extended warranty and pickup of your old TV." },
    ],
    links: [{ rel: "canonical", href: "/sales" }],
  }),
  component: Sales,
});

const MODELS = [
  { size: "43\"", name: "Smart 4K UHD", price: "from ₨ 95,000", tag: "Best seller" },
  { size: "55\"", name: "QLED 4K", price: "from ₨ 175,000", tag: "Popular" },
  { size: "65\"", name: "OLED 4K", price: "from ₨ 320,000", tag: "Premium" },
  { size: "75\"", name: "Neo QLED 8K", price: "from ₨ 595,000", tag: "Flagship" },
];

function Sales() {
  return (
    <>
      <PageHero eyebrow="New TV Sales" title="The latest televisions, expertly delivered." subtitle="Showroom-fresh models from authorised brands — with free wall mounting and lifetime service support." />
      <section className="container-x py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MODELS.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="group glass rounded-2xl p-6 hover:bg-[color:var(--card)] transition h-full flex flex-col">
                <div className="relative rounded-xl overflow-hidden bg-[color:var(--card)] aspect-[4/3]">
                  <img src={hero} alt={m.name} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-[color:var(--ember)]/20 text-[color:var(--ember)] backdrop-blur-md">{m.tag}</span>
                </div>
                <div className="mt-4">
                  <div className="text-xs text-muted-foreground">{m.size}</div>
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <div className="mt-1 text-gradient-ember font-semibold">{m.price}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {[
            { icon: Truck, title: "Free delivery", desc: "Doorstep delivery anywhere in the western province." },
            { icon: Wrench, title: "Free wall mount", desc: "Professional wall mounting included with every purchase." },
            { icon: ShieldCheck, title: "Extended warranty", desc: "Manufacturer warranty plus SVR lifetime service support." },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] text-[color:var(--primary-foreground)] glow-ember"><p.icon className="size-5" /></div>
                <h3 className="mt-4 font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-glow)] px-7 py-4 text-sm font-semibold text-[color:var(--primary-foreground)] glow-ember">
              Enquire about a model <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
export default Sales;