import { Link } from "react-router-dom";
import { PageHero, Reveal } from "@/components/site/PageShell";
import { Wrench, CircuitBoard, Tv, ShieldCheck, Zap, Cpu, Truck, Settings, MonitorCheck, ArrowRight } from "lucide-react";

({
  head: () => ({
    meta: [
      { title: "Services — TV Repairs, Spare Parts, Sales & More | SVR Electronics" },
      { name: "description", content: "Complete television services: repairs, genuine spare parts, new sales, doorstep pickup, wall mounting and smart TV setup." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const ALL = [
  { icon: Wrench, title: "TV Repairs", desc: "Full diagnostic and repair for panels, boards, backlights and software." },
  { icon: CircuitBoard, title: "Spare Parts", desc: "OEM-grade boards, panels, LED strips and accessories in stock." },
  { icon: Tv, title: "New TV Sales", desc: "Latest OLED, QLED, 4K and 8K models from authorised brands." },
  { icon: ShieldCheck, title: "Warranty Service", desc: "Authorised after-sales service for major brand warranties." },
  { icon: Truck, title: "Doorstep Pickup", desc: "Pickup and delivery on qualifying repairs located in Nizamabad." },
  { icon: Settings, title: "Wall Mounting", desc: "Professional wall mounting with concealed cable routing." },
  { icon: Cpu, title: "Smart TV Setup", desc: "App configuration, voice assistants and home network tuning." },
  { icon: Zap, title: "Power Issues", desc: "Standby light flickers, no power, sudden shut-offs — diagnosed and resolved." },
  { icon: MonitorCheck, title: "Calibration", desc: "Professional picture and audio calibration to studio reference." },
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Every service your television will ever need." subtitle="Nine specialised services delivered by the same senior team — engineered to keep your home entertainment running flawlessly." />
      <section className="container-x py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALL.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group glass rounded-2xl p-7 h-full hover:bg-[color:var(--card)] transition">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] text-[color:var(--primary-foreground)] glow-ember"><s.icon className="size-5.5" /></div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-14 text-center">
            <Link to="/request-service" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-glow)] px-7 py-4 text-sm font-semibold text-[color:var(--primary-foreground)] glow-ember">
              Book a service <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
export default Services;