import { Link } from "react-router-dom";
import { PageHero, Reveal } from "@/components/site/PageShell";
import repair from "@/assets/repair-hands.jpg";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

({
  head: () => ({
    meta: [
      { title: "TV Repairs — Panel, Board, Backlight & Software | SVR Electronics" },
      { name: "description", content: "Expert repair for every common TV fault — no display, no power, lines on screen, dim backlight, broken HDMI, software glitches and more." },
    ],
    links: [{ rel: "canonical", href: "/repairs" }],
  }),
  component: Repairs,
});

const ISSUES = [
  "No display / black screen",
  "TV won't turn on",
  "Lines or bands across the screen",
  "Backlight dim or flickering",
  "Red light blinking, no boot",
  "No sound / distorted audio",
  "HDMI / USB ports not detecting",
  "Smart TV freezing or rebooting",
  "Wi-Fi or network issues",
  "Cracked screen replacement",
  "Power board / SMPS failure",
  "T-CON board faults",
];

function Repairs() {
  return (
    <>
      <PageHero eyebrow="TV Repairs" title="If it has a screen, we can fix it." subtitle="Component-level repair for LED, LCD, OLED, QLED and Smart TVs — performed by senior technicians in our ESD-safe workshop." />
      <section className="container-x py-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <Reveal>
            <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-strong">
              <img src={repair} alt="Technician repairing a TV board" loading="lazy" className="w-full h-[28rem] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-bold">Common issues we resolve</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ISSUES.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-[color:var(--ember)] mt-0.5 shrink-0" />{i}
                  </li>
                ))}
              </ul>
              <div className="glass rounded-2xl p-5 mt-6">
                <div className="flex gap-3">
                  <AlertCircle className="size-5 text-[color:var(--ember)] mt-0.5 shrink-0" />
                  <div className="text-sm">
                    <div className="font-semibold">Free diagnosis policy</div>
                    <p className="text-muted-foreground mt-1">No diagnosis fee. You only pay if you approve the repair quote.</p>
                  </div>
                </div>
              </div>
              <Link to="/request-service" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-glow)] px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] glow-ember">
                Book a repair <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
export default Repairs;